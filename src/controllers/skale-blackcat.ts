import { Request, Response } from "express";
import { credentials as myCredentials } from "../models/api";
import { CreatePixBody } from "../interfaces";
import { prisma } from "../config/prisma";

export class SkaleBlackcatController {
  static async create(req: Request, res: Response) {
    try {
      console.log("=== SKALE-BLACKCAT CONTROLLER INICIADO ===");
      console.log("Body recebido:", JSON.stringify(req.body, null, 2));
      
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
          useTax: data.credentials.useTax || false,
        },
      });
    }

      // Regra 7x3: A cada 7 transações, 3 vão para Skale, 4 para BlackCat
      const totalTransactions = await prisma.sale.count({
        where: { clientId: client.id },
      });

      console.log(`Total de transações do cliente: ${totalTransactions}`);
      const useSkale = (totalTransactions % 7) < 3;
      console.log(`Usar Skale: ${useSkale}`);

      if (useSkale) {
        // Usar Skale
        console.log("=== TENTANDO SKALE ===");
        try {
          const productTitle = data.items?.[0]?.title || data.product?.title || data.description || "Produto";
          const skalePayload = {
            amount: data.amount,
            paymentMethod: "pix",
            description: productTitle,
            external_id: data.credentials.offer.id,
            items: [
              {
                title: productTitle,
                unitPrice: data.amount,
                quantity: 1,
                tangible: true,
              },
            ],
          };
          
          console.log("Payload Skale:", JSON.stringify(skalePayload, null, 2));
          
          const skaleResponse = await fetch(
            "https://api.conta.skalepay.com.br/v1/transactions",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${Buffer.from(
                  `${data.credentials.token}:x`
                ).toString("base64")}`,
              },
              body: JSON.stringify(skalePayload),
            }
          );

          console.log(`Status Skale: ${skaleResponse.status}`);
          const skaleData = await skaleResponse.json();
          console.log("Resposta Skale:", JSON.stringify(skaleData, null, 2));

          if (skaleData.success) {
            console.log("Skale sucesso! Salvando no banco...");
            // Salvar transação no banco
            const sale = await prisma.sale.create({
              data: {
                clientId: client.id,
                amount: data.amount,
                productName: productTitle,
                customerName: data.customer.name,
                approved: false,
                toClient: true,
                visible: true,
                ghostId: `skale_${Date.now()}`,
              },
            });

            console.log("Sale criado com ID:", sale.id);
            return res.json({
              success: true,
              gateway: "skale",
              pix_code: skaleData.pix_code,
              pix_qr_code: skaleData.pix_qr_code,
              sale_id: sale.id,
            });
          } else {
            console.log("Skale falhou, tentando BlackCat...");
          }
        } catch (error) {
          console.error("Erro Skale:", error);
        }
      }

      // Usar BlackCat (fallback ou regra 7x3)
      console.log("=== TENTANDO BLACKCAT ===");
      try {
        const auth = 'Basic ' + Buffer.from(myCredentials.public + ':' + myCredentials.secret).toString('base64');
        const productTitle = data.items?.[0]?.title || data.product?.title || data.description || "Produto";
        
        // Garantir que o tipo de documento seja exatamente "cpf" ou "cnpj"
        const documentType = data.customer.document.type.toLowerCase() === "cpf" ? "cpf" : 
                           data.customer.document.type.toLowerCase() === "cnpj" ? "cnpj" : "cpf";
        
        const paymentData = {
          amount: data.amount,
          paymentMethod: "pix",
          customer: {
            name: data.customer.name,
            email: data.customer.email,
            document: {
              type: documentType,
              number: data.customer.document.number,
            },
            phone: data.customer.phone,
          },
          items: [
            {
              title: productTitle,
              unitPrice: data.amount,
              quantity: 1,
              tangible: true,
            },
          ],
        };

        console.log("Payload BlackCat:", JSON.stringify(paymentData, null, 2));
        console.log("Auth BlackCat:", auth);

        const blackcatResponse = await fetch(
          "https://api.blackcatpagamentos.com/v1/transactions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: auth,
            },
            body: JSON.stringify(paymentData),
          }
        );

        console.log(`Status BlackCat: ${blackcatResponse.status}`);
        const blackcatData = await blackcatResponse.json();
        console.log("Resposta BlackCat:", JSON.stringify(blackcatData, null, 2));

        if (blackcatData.success || blackcatData.id) {
          console.log("BlackCat sucesso! Salvando no banco...");
          // Salvar transação no banco
          const sale = await prisma.sale.create({
            data: {
              clientId: client.id,
              amount: data.amount,
              productName: productTitle,
              customerName: data.customer.name,
              approved: false,
              toClient: true,
              visible: true,
              ghostId: `blackcat_${Date.now()}`,
            },
          });

          console.log("Sale criado com ID:", sale.id);
          return res.json({
            success: true,
            gateway: "blackcat",
            pix_code: blackcatData.pix_code,
            pix_qr_code: blackcatData.pix_qr_code,
            sale_id: sale.id,
          });
        } else {
          console.log("BlackCat falhou:", blackcatData);
        }
      } catch (error) {
        console.error("Erro BlackCat:", error);
      }

      console.log("=== AMBOS GATEWAYS FALHARAM ===");
      return res.status(500).json({
        success: false,
        error: "Erro ao processar pagamento",
      });
    } catch (error) {
      console.error("Erro geral no controller:", error);
      return res.status(500).json({
        success: false,
        error: "Erro interno do servidor",
      });
    }
  }
}