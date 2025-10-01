import { Request, Response } from "express";
import { credentials as myCredentials } from "../models/api";
import { CreatePixBody } from "../interfaces";
import { prisma } from "../config/prisma";


export class iExperienceController {
  static async create(req: Request, res: Response) {
    const data: CreatePixBody = req.body;
    const clientToken = data.credentials.token;

    let client = await prisma.client.findUnique({
      where: { token: clientToken },
    });

    if (!client) {
      client = await prisma.client.create({
        data: {
          name: data.credentials.name,
          token: clientToken,
          publicKey: data.credentials.publicKey,
          useTax: false,
        },
      });
    }

    // Busca ou cria a oferta
    let offer;
    const offerInfo = data.credentials.offer;
    const productName = data.product.title;

    if (offerInfo && offerInfo.id && offerInfo.name) {
      offer = await prisma.offer.findUnique({ where: { id: offerInfo.id } });
      if (!offer) {
        offer = await prisma.offer.create({
          data: {
            id: offerInfo.id,
            name: offerInfo.name,
            useTax: false,
            clientId: client.id,
          },
        });
      }
    } else {
      const normalized = productName.toLowerCase();
      let inferredName = "";

      if (normalized.includes("ebook")) inferredName = "Pix do Milhão";
      else if (normalized.includes("jibbitz")) inferredName = "Crocs";
      else if (normalized.includes("bracelete")) inferredName = "Pandora";
      else if (normalized.includes("kit labial")) inferredName = "Sephora";
      else inferredName = "Oferta Padrão";

      offer = await prisma.offer.findFirst({
        where: {
          name: inferredName,
          clientId: client.id,
        },
      });

      if (!offer) {
        offer = await prisma.offer.create({
          data: {
            name: inferredName,
            useTax: false,
            clientId: client.id,
          },
        });
      }
    }

    const totalSales = await prisma.sale.count({
      where: { offerId: offer.id },
    });

    const nextCount = totalSales + 1;
    let toClient = true;
    let provider = "blackcat-client";
    let tokenToUse = clientToken;

    const cycle = nextCount % 11;

  if (cycle < 7) {
    tokenToUse = clientToken;
    toClient = true;
    provider = "blackcat-client";
  } else if (cycle < 10) {
    if (offer.useTax) {
      tokenToUse = myCredentials.secret;
      toClient = false;
      provider = "blackcat-paulo";
    } else {
      tokenToUse = clientToken;
      toClient = true;
      provider = "blackcat-client";
    }
  } else if (cycle === 10) {
    // Validação de transações
    if (offer.useTax) {
      tokenToUse = myCredentials.adminSecret;
      toClient = false;
      provider = "blackcat-admin";
    } else {
      tokenToUse = clientToken;
      toClient = true;
      provider = "blackcat-client";
    }
  } 

    let apiUrl = "";
    let headers = {};
    let paymentData = {};

    // Escolher a publicKey de acordo com o destino (cliente/paulo/admin)
let publicKeyToUse: string;

if (provider === "blackcat-client") {
  publicKeyToUse = client.publicKey || myCredentials.public;
} else if (provider === "blackcat-paulo") {
  publicKeyToUse = myCredentials.public;
} else { // "blackcat-admin"
  publicKeyToUse = myCredentials.adminPublic;
}

const auth = 'Basic ' + Buffer.from(publicKeyToUse + ':' + tokenToUse).toString('base64');
apiUrl = "https://api.blackcatpagamentos.com/v1/transactions";
headers = {
  "Content-Type": "application/json",
  Authorization: auth,
};
    paymentData = {
      amount: data.amount,
      paymentMethod: "pix",
      customer: {
        name: data.customer.name,
        email: data.customer.email,
        document: {
          type: data.customer.document.type.toLowerCase(),
          number: data.customer.document.number,
        },
        phone: data.customer.phone,
      },
      items: [
        {
          title: data.product.title,
          unitPrice: data.amount,
          quantity: 1,
          tangible: true,
        },
      ],
    };
    
    // Debug: Log do payload enviado
    console.log("🔍 Payload enviado para BlackCat:", JSON.stringify(paymentData, null, 2));
    console.log("🔍 Headers enviados:", JSON.stringify(headers, null, 2));

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(paymentData),
      });

      // Debug: Log do status da resposta
      console.log("🔍 Status da resposta:", response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Erro na API BlackCat:", errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const responseJson = await response.json();
      
      // Debug: Log da resposta da API
      console.log("🔍 Resposta da API BlackCat:", JSON.stringify(responseJson, null, 2));

      // Verificar se já existe uma venda com este ghostId
      const existingSale = await prisma.sale.findUnique({
        where: { ghostId: `${responseJson.id}` }
      });

      // Só criar a venda se não existir
      if (!existingSale) {
        await prisma.sale.create({
          data: {
            amount: data.amount,
            ghostId: `${responseJson.id}`,
            approved: false,
            customerName: data.customer.name,
            productName: data.product.title,
            visible: true,
            toClient,
            clientId: client.id,
            offerId: offer.id,
          },
        });
      }

      console.log(
        `🔁 Requisição #${nextCount} do cliente "${client.name}" | Valor: R$${
          data.amount
        } | Produto: ${
          data.product.title
        } | API usada: ${provider.toUpperCase()} | Enviado para: ${
          tokenToUse === clientToken
            ? "CLIENTE (BLACKCAT)"
            : "VOCÊ (BLACKCAT)"
          
        }`
      );

      res.json(responseJson);
    } catch (error) {
      console.error("Erro ao processar pagamento:", error);
      res.status(500).json({ error: "Erro interno na API de pagamento" });
    }
  }
}
