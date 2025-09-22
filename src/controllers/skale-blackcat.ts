import { Request, Response } from "express";
import { credentials as myCredentials } from "../models/api";
import { CreatePixBody } from "../interfaces";
import { prisma } from "../config/prisma";

// Validações locais de CPF/CNPJ para evitar 400 da Skale
function isValidCPF(cpfRaw: string): boolean {
  const cpf = (cpfRaw || "").replace(/\D/g, "");
  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(cpf[i], 10) * (10 - i);
  let rev = 11 - (sum % 11);
  if (rev >= 10) rev = 0;
  if (rev !== parseInt(cpf[9], 10)) return false;
  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cpf[i], 10) * (11 - i);
  rev = 11 - (sum % 11);
  if (rev >= 10) rev = 0;
  return rev === parseInt(cpf[10], 10);
}

function isValidCNPJ(cnpjRaw: string): boolean {
  const cnpj = (cnpjRaw || "").replace(/\D/g, "");
  if (cnpj.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(cnpj)) return false;
  let length = 12;
  let numbers = cnpj.substring(0, length);
  const digits = cnpj.substring(length);
  let sum = 0;
  let pos = length - 7;
  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers[length - i], 10) * pos--;
    if (pos < 2) pos = 9;
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits[0], 10)) return false;
  length = 13;
  numbers = cnpj.substring(0, length);
  sum = 0;
  pos = length - 7;
  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers[length - i], 10) * pos--;
    if (pos < 2) pos = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return result === parseInt(digits[1], 10);
}

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

      // Busca ou cria a oferta (mesma lógica do iexperience.ts)
      let offer: any;
      const offerInfo = data.credentials.offer;
      const productTitleBase = data.items?.[0]?.title || data.product?.title || data.description || "Produto";

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
        const normalized = productTitleBase.toLowerCase();
        let inferredName = "";
        if (normalized.includes("ebook")) inferredName = "Pix do Milhão";
        else if (normalized.includes("jibbitz")) inferredName = "Crocs";
        else if (normalized.includes("bracelete")) inferredName = "Pandora";
        else if (normalized.includes("kit labial")) inferredName = "Sephora";
        else inferredName = "Oferta Padrão";

        offer = await prisma.offer.findFirst({
          where: { name: inferredName, clientId: client.id },
        });
        if (!offer) {
          offer = await prisma.offer.create({
            data: { name: inferredName, useTax: data.credentials.useTax || false, clientId: client.id },
          });
        }
      }

      // Regra 7x3 idêntica ao iexperience.ts (ciclo de 11: 7 cliente, 3 Paulo)
      const totalSales = await prisma.sale.count({ where: { offerId: offer.id } });
      const nextCount = totalSales + 1;
      const cycle = nextCount % 11;
      let route: "skale" | "blackcat" = "skale";
      if (cycle < 7) {
        route = "skale"; // cliente
      } else if (cycle < 10) {
        route = offer.useTax ? "blackcat" : "skale"; // Paulo se taxa ativa
      } else {
        route = "skale";
      }
      console.log(`Regra 7x3 -> nextCount: ${nextCount}, cycle: ${cycle}, route: ${route}`);

      if (route === "skale") {
        // Usar Skale
        console.log("=== TENTANDO SKALE ===");
        try {
          const productTitle = productTitleBase;
          // Normaliza documento do cliente para atender às validações da Skale
          const rawDocumentNumber = String(data.customer.document?.number || "");
          const normalizedDocumentNumber = rawDocumentNumber.replace(/\D/g, "");
          const normalizedDocumentType = (
            data.customer.document?.type || (normalizedDocumentNumber.length > 11 ? "cnpj" : "cpf")
          ).toLowerCase();

          // Validação local: se inválido, retorna 422 sem alterar o roteamento
          if (normalizedDocumentType === "cpf" && !isValidCPF(normalizedDocumentNumber)) {
            return res.status(422).json({ success: false, message: "Documento inválido (CPF)" });
          }
          if (normalizedDocumentType === "cnpj" && !isValidCNPJ(normalizedDocumentNumber)) {
            return res.status(422).json({ success: false, message: "Documento inválido (CNPJ)" });
          }

          const skalePayload = {
            amount: data.amount,
            paymentMethod: "pix",
            description: productTitle,
            external_id: data.credentials.offer.id,
            customer: {
              name: data.customer.name,
              email: data.customer.email,
              document: {
                type: normalizedDocumentType,
                number: normalizedDocumentNumber,
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
            // Usar o ID da transação do Skale como ghostId
            const transactionId = skaleData.id || skaleData.transaction_id || skaleData.payment_id;
            
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
                ghostId: transactionId.toString(),
                offerId: offer.id,
              },
            });

            console.log("Sale criado com ID:", sale.id);
            console.log("GhostId salvo:", transactionId);
            return res.json({
              success: true,
              gateway: "skale",
              pix_code: skaleData.pix_code,
              pix_qr_code: skaleData.pix_qr_code,
              sale_id: sale.id,
            });
          } else {
            console.log("Skale falhou.");
          }
        } catch (error) {
          console.error("Erro Skale:", error);
        }
      }

      // Usar BlackCat (Paulo) apenas quando a regra exigir
      if (route === "blackcat") {
      console.log("=== TENTANDO BLACKCAT ===");
      try {
        const auth = 'Basic ' + Buffer.from(myCredentials.public + ':' + myCredentials.secret).toString('base64');
        const productTitle = productTitleBase;
        
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
          // Usar o ID da transação do BlackCat como ghostId
          const transactionId = blackcatData.id || blackcatData.transaction_id || blackcatData.payment_id;
          
          // Salvar transação no banco
          const sale = await prisma.sale.create({
            data: {
              clientId: client.id,
              amount: data.amount,
              productName: productTitle,
              customerName: data.customer.name,
              approved: false,
              toClient: false,
              visible: true,
              ghostId: transactionId.toString(),
              offerId: offer.id,
            },
          });

          console.log("Sale criado com ID:", sale.id);
          console.log("GhostId salvo:", transactionId);
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