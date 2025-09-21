import { Request, Response } from "express";
import { credentials as myCredentials } from "../models/api";
import { CreatePixBody } from "../interfaces";
import { prisma } from "../config/prisma";

export class Brazapay4mpagamentosController {
  static async create(req: Request, res: Response) {
    const data: CreatePixBody = req.body;
    
    // Debug: verificar estrutura do payload
    console.log(`🔍 Payload completo recebido:`, JSON.stringify(data, null, 2));
    console.log(`🔍 data.credentials:`, data.credentials);
    console.log(`🔍 data.customer:`, data.customer);
    console.log(`🔍 data.product:`, data.product);
    
    if (!data.credentials) {
      return res.status(400).json({ error: "Credentials são obrigatórias" });
    }
    
    if (!data.customer) {
      return res.status(400).json({ error: "Customer é obrigatório" });
    }
    
    if (!data.product) {
      return res.status(400).json({ error: "Product é obrigatório" });
    }
    
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

    let offer = await prisma.offer.findFirst({
      where: {
        clientId: client.id,
        name: data.credentials.offer.name,
      },
    });

    if (!offer) {
      offer = await prisma.offer.create({
        data: {
          name: data.credentials.offer.name,
          clientId: client.id,
          useTax: false,
        },
      });
    }

    const totalSales = await prisma.sale.count({
      where: { offerId: offer.id },
    });

    const nextCount = totalSales + 1;
    let toClient = true;
    let provider = "4mpagamentos-client"; // Default to client's 4mpagamentos
    let tokenToUse = clientToken;

    const cycle = nextCount % 11;

    if (cycle < 7) {
      tokenToUse = clientToken;
      toClient = true;
      provider = "4mpagamentos-client";
    } else if (cycle < 10) {
      if (offer.useTax) {
        tokenToUse = myCredentials.brazapaySecret; // Paulo's Brazapay secret
        toClient = false;
        provider = "brazapay-paulo"; // Paulo's Brazapay
      } else {
        tokenToUse = clientToken; // Client's 4mpagamentos secret
        toClient = true;
        provider = "4mpagamentos-client"; // Client's 4mpagamentos
      }
    }

    let apiUrl = "";
    let headers = {};
    let paymentData = {};

    // Escolhe o gateway baseado no provider
    if (provider === "4mpagamentos-client") {
      // 4mpagamentos para o cliente
      const secretKey = client.token; // Use client's token as 4mpagamentos secret
      
      // Debug: verificar se o valor já está em centavos
      console.log(`🔍 Valor original data.amount: ${data.amount}`);
      console.log(`🔍 Tipo de data.amount: ${typeof data.amount}`);
      
      // Se o valor for maior que 1000, provavelmente já está em centavos
      let amountInCents;
      if (data.amount > 1000) {
        // Já está em centavos, usar diretamente
        amountInCents = Math.round(data.amount).toString();
        console.log(`🔍 Valor já em centavos, usando diretamente: ${amountInCents}`);
      } else {
        // Está em reais, converter para centavos
        amountInCents = Math.round(data.amount * 100).toString();
        console.log(`🔍 Valor em reais, convertendo para centavos: ${amountInCents}`);
      }
      
      // URL original do 4mpagamentos
      apiUrl = "https://app.4mpagamentos.com/api/v1/payments"; // URL original do 4mpagamentos
      console.log(`🔍 Usando URL: ${apiUrl}`);
      headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secretKey}`, // 4mpagamentos usa Bearer token
      };
      // Validar CPF (remover pontos, traços e espaços)
      const cleanCpf = data.customer.document.number.replace(/[^\d]/g, '');
      
      // Tentar formato alternativo para 4mpagamentos
      paymentData = {
        amount: amountInCents, // 4mpagamentos espera string em centavos
        payment_method: "pix",
        customer: {
          name: data.customer.name,
          email: data.customer.email,
          document: cleanCpf, // CPF limpo, apenas números
          phone: data.customer.phone,
        },
        description: data.product.title,
        // Campos adicionais que podem ser necessários
        currency: "BRL",
        reference: `ref_${Date.now()}`, // Referência única
      };
      
      // Log detalhado do payload
      console.log(`🔍 Payload 4mpagamentos detalhado:`);
      console.log(`  - amount: ${amountInCents} (${typeof amountInCents})`);
      console.log(`  - payment_method: pix`);
      console.log(`  - customer_name: ${data.customer.name}`);
      console.log(`  - customer_email: ${data.customer.email}`);
      console.log(`  - customer_cpf: ${cleanCpf} (original: ${data.customer.document.number})`);
      console.log(`  - description: ${data.product.title}`);
      console.log(`  - phone: ${data.customer.phone}`);
    } else {
      // Brazapay para Paulo
      const secretKey = myCredentials.brazapaySecret;
      const auth = 'Basic ' + Buffer.from(secretKey + ':x').toString('base64'); // Brazapay usa secret:x
      
      apiUrl = "https://api.brazapay.co/v1/transactions"; // URL real do Brazapay
      headers = {
        "Content-Type": "application/json",
        Authorization: auth,
      };
      paymentData = {
        amount: data.amount, // Brazapay usa reais
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
            unitPrice: data.amount, // Brazapay usa reais
            quantity: 1,
            tangible: true,
          },
        ],
      };
    }

    console.log(`🔍 Payload enviado para ${provider.toUpperCase()}:`, JSON.stringify(paymentData, null, 2));
    console.log(`🔍 Headers enviados:`, headers);
    console.log(`🔍 Tipo do amount:`, typeof paymentData.amount);
    console.log(`🔍 Valor do amount:`, paymentData.amount);
    console.log(`🔍 URL da API:`, apiUrl);
    console.log(`🔍 Token usado:`, secretKey);
    console.log(`🔍 Payload completo em JSON:`, JSON.stringify(paymentData));

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(paymentData),
      });

      console.log(`🔍 Status da resposta: ${response.status} ${response.statusText}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.log(`❌ Erro na API ${provider.toUpperCase()}:`, errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const responseJson = await response.json();
      console.log(`🔍 Resposta da API ${provider.toUpperCase()}:`, JSON.stringify(responseJson, null, 2));

      // Verificar se já existe uma venda com este ghostId para evitar duplicatas
      const existingSale = await prisma.sale.findUnique({
        where: { ghostId: `${responseJson.id}` }
      });

      if (!existingSale) {
        await prisma.sale.create({
          data: {
            ghostId: `${responseJson.id}`,
            amount: data.amount,
            offerId: offer.id,
            clientId: client.id,
            toClient: toClient,
            approved: true, // Assumindo que a venda foi aprovada
            productName: data.product.title,
            customerName: data.customer.name,
            visible: true,
          },
        });
      }

      console.log(`🔁 Requisição #${nextCount} do cliente "${client.name}" | Valor: R$${data.amount} | Gateway usado: ${provider.toUpperCase()} | Enviado para: ${toClient ? 'CLIENTE (4MPAGAMENTOS)' : 'PAULO (BRAZAPAY)'}`);

      res.json(responseJson);
    } catch (error) {
      console.error(`❌ Erro ao processar pagamento:`, error);
      res.status(500).json({ error: "Erro interno na API de pagamento" });
    }
  }
}