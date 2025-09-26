import { Request, Response } from "express";
import { credentials as myCredentials } from "../models/api";
import { CreatePixBody } from "../interfaces";
import { prisma } from "../config/prisma";

export class GhostPayController {
  static async create(req: Request, res: Response) {
    // Gerar ID único para esta requisição
    const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();
    
    console.log(`\n🚀 ===== NOVA REQUISIÇÃO GHOSTPAY =====`);
    console.log(`🆔 Request ID: ${requestId}`);
    console.log(`⏰ Timestamp: ${timestamp}`);
    console.log(`🔍 Payload completo recebido:`, JSON.stringify(req.body, null, 2));

    // Validação robusta dos dados obrigatórios
    if (!req.body) {
      return res.status(400).json({ error: "Body da requisição é obrigatório" });
    }

    const data: CreatePixBody = req.body;

    if (!data.credentials) {
      console.error(`❌ Credentials não encontradas no payload`);
      return res.status(400).json({ error: "Credentials são obrigatórias" });
    }
    
    if (!data.credentials.token) {
      console.error(`❌ Token não encontrado em credentials`);
      return res.status(400).json({ error: "Token é obrigatório em credentials" });
    }
    
    if (!data.customer) {
      console.error(`❌ Customer não encontrado no payload`);
      return res.status(400).json({ error: "Customer é obrigatório" });
    }
    
    if (!data.product) {
      console.error(`❌ Product não encontrado no payload`);
      return res.status(400).json({ error: "Product é obrigatório" });
    }

    const clientToken = data.credentials.token;

    // 1️⃣ Verifica e cria o cliente se não existir
    let client = await prisma.client.findUnique({
      where: { token: clientToken },
    });

    if (!client) {
      client = await prisma.client.create({
        data: {
          name: data.credentials.name,
          token: clientToken,
          publicKey: data.credentials.publicKey,
          useTax: data.credentials.useTax || false,
        },
      });
    }

    // 2️⃣ Busca ou cria a oferta
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
            useTax: data.credentials.useTax || false,
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
            useTax: data.credentials.useTax || false,
            clientId: client.id,
          },
        });
      }
    }

    // 3️⃣ Aplica regra 7x3
    const totalSales = await prisma.sale.count({
      where: { offerId: offer.id },
    });

    const nextCount = totalSales + 1;
    let toClient = true;
    let provider = "ghost";
    let tokenToUse = clientToken;
    let publicKeyToUse = data.credentials.publicKey;

    const cycle = nextCount % 10;

    if (cycle < 7) {
      // 70% - Cliente (GhostPay)
      tokenToUse = clientToken;
      publicKeyToUse = data.credentials.publicKey;
      toClient = true;
      provider = "ghost";
    } else {
      // 30% - Paulo (BlackCat)
      if (offer.useTax) {
        tokenToUse = myCredentials.secret;
        publicKeyToUse = myCredentials.public;
        toClient = false;
        provider = "blackcat";
      } else {
        tokenToUse = clientToken;
        publicKeyToUse = data.credentials.publicKey;
        toClient = true;
        provider = "ghost";
      }
    }

    // 4️⃣ Configura dados baseado no provider
    let apiUrl = "";
    let headers = {};
    let paymentData = {};

    if (provider === "blackcat") {
      // Configuração BlackCat para Paulo
      apiUrl = "https://api.blackcatpagamentos.com/v1/transactions";
      const auth = 'Basic ' + Buffer.from(publicKeyToUse + ':' + tokenToUse).toString('base64');
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
    } else {
      // Configuração GhostPay para Cliente
      apiUrl = "https://api.ghostspaysv2.com/functions/v1/transactions";
      
      // Autenticação GhostPay: Basic Auth com SECRET_KEY:COMPANY_ID
      const credentials = Buffer.from(`${tokenToUse}:${publicKeyToUse}`).toString('base64');
      const auth = `Basic ${credentials}`;
      
      headers = {
        "Content-Type": "application/json",
        "Authorization": auth,
      };
      paymentData = {
        customer: {
          name: data.customer.name,
          email: data.customer.email,
          document: data.customer.document.number,
          phone: data.customer.phone,
        },
        paymentMethod: "PIX",
        amount: data.amount,
        description: data.product.title,
        items: [
          {
            name: data.product.title,
            price: data.amount,
            quantity: 1,
          },
        ],
      };
    }

    console.log(`🔧 Configuração ${provider.toUpperCase()}:`);
    console.log(`   API URL: ${apiUrl}`);
    console.log(`   Secret Key: ${tokenToUse.substring(0, 20)}...`);
    console.log(`   Company ID: ${publicKeyToUse}`);
    console.log(`   Provider: ${provider}`);
    console.log(`   Para cliente: ${toClient ? "SIM" : "NÃO"}`);
    
    if (provider === "ghost") {
      const credentials = Buffer.from(`${tokenToUse}:${publicKeyToUse}`).toString('base64');
      console.log(`   Auth Basic: Basic ${credentials.substring(0, 20)}...`);
    }
    
    console.log(`   Headers:`, JSON.stringify(headers, null, 2));

    try {
      // 5️⃣ Chama API (GhostPay ou BlackCat)
      const response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(paymentData),
      });

      let responseJson;
      try {
        const responseText = await response.text();
        console.log(`📡 Resposta RAW ${provider.toUpperCase()}:`, responseText);
        
        if (responseText) {
          responseJson = JSON.parse(responseText);
        } else {
          responseJson = {};
        }
      } catch (parseError) {
        console.error(`❌ Erro ao fazer parse da resposta ${provider.toUpperCase()}:`, parseError);
        return res.status(500).json({
          error: `Erro ao processar resposta da API ${provider.toUpperCase()}`,
          details: "Resposta não é um JSON válido"
        });
      }

      console.log(`📡 Resposta ${provider.toUpperCase()}:`, JSON.stringify(responseJson, null, 2));

      if (!response.ok) {
        console.error(`❌ Erro na API ${provider.toUpperCase()}: ${response.status} - ${responseJson.message || responseJson.error}`);
        return res.status(response.status).json({
          error: `Erro na API ${provider.toUpperCase()}`,
          details: responseJson.message || responseJson.error,
          status: response.status
        });
      }

      // 6️⃣ Salva venda no banco
      const ghostId = responseJson.id || responseJson.transaction_id || responseJson.payment_id || `ghost_${Date.now()}`;
      
      const sale = await prisma.sale.create({
        data: {
          amount: data.amount,
          ghostId: `${ghostId}`,
          approved: false,
          customerName: data.customer.name,
          productName: data.product.title,
          visible: true,
          toClient,
          clientId: client.id,
          offerId: offer.id,
        },
      });

      console.log(
        `🔁 Requisição #${nextCount} do cliente "${client.name}" | ` +
        `Valor: R$${data.amount} | ` +
        `Produto: ${data.product.title} | ` +
        `API usada: ${provider.toUpperCase()} | ` +
        `Enviado para: ${tokenToUse === clientToken ? "CLIENTE" : "PAULO"} | ` +
        `Venda ID: ${sale.id}`
      );

      // 7️⃣ Retorna resposta formatada baseada no provider
      let formattedResponse = {
        id: responseJson.id,
        status: responseJson.status || "waiting_payment",
        amount: responseJson.amount || data.amount,
        pix: {
          qrcode: "",
          copiaECola: "",
        },
        customer: {
          name: data.customer.name,
          email: data.customer.email,
        },
        product: {
          title: data.product.title,
        },
        requestId,
        timestamp,
        provider: provider.toUpperCase(),
      };

      // Mapeia resposta baseada no provider
      if (provider === "blackcat") {
        // Formato BlackCat
        formattedResponse.pix = {
          qrcode: responseJson.pix?.qrcode || responseJson.qrcode || "",
          copiaECola: responseJson.pix?.copiaECola || responseJson.copiaECola || responseJson.pixCode || "",
        };
      } else {
        // Formato GhostPay
        formattedResponse.pix = {
          qrcode: responseJson.pix?.qrcode || responseJson.qrcode || "",
          copiaECola: responseJson.pix?.copiaECola || responseJson.copiaECola || responseJson.pixCode || "",
        };
      }

      res.json(formattedResponse);

    } catch (error) {
      console.error(`❌ Erro ao processar pagamento ${provider.toUpperCase()}:`, error);
      res.status(500).json({ 
        error: "Erro interno na API de pagamento",
        details: error instanceof Error ? error.message : "Erro desconhecido",
        requestId,
        timestamp,
        provider: provider.toUpperCase(),
      });
    }
  }
}
