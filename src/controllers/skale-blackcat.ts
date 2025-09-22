import { Request, Response } from "express";
import { credentials as myCredentials } from "../models/api";
import { CreatePixBody } from "../interfaces";
import { prisma } from "../config/prisma";

export class SkaleBlackcatController {
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
          useTax: data.credentials.useTax || false,
        },
      });
    }

    // Regra 7x3: A cada 7 transações, 3 vão para Skale, 4 para BlackCat
    const totalTransactions = await prisma.sale.count({
      where: { clientId: client.id },
    });

    const useSkale = (totalTransactions % 7) < 3;

    if (useSkale) {
      // Usar Skale
      try {
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
            body: JSON.stringify({
              amount: data.amount,
              description: data.description,
              external_id: data.external_id,
            }),
          }
        );

        const skaleData = await skaleResponse.json();

        if (skaleData.success) {
          // Salvar transação no banco
          const sale = await prisma.sale.create({
            data: {
              clientId: client.id,
              amount: data.amount,
              description: data.description,
              external_id: data.external_id,
              gateway: "skale",
              status: "pending",
              pix_code: skaleData.pix_code,
              pix_qr_code: skaleData.pix_qr_code,
            },
          });

          return res.json({
            success: true,
            gateway: "skale",
            pix_code: skaleData.pix_code,
            pix_qr_code: skaleData.pix_qr_code,
            sale_id: sale.id,
          });
        }
      } catch (error) {
        console.error("Erro Skale:", error);
      }
    }

    // Usar BlackCat (fallback ou regra 7x3)
    try {
      const blackcatResponse = await fetch(
        "https://api.blackcat.com.br/v1/pix",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${Buffer.from(
              `${data.credentials.publicKey}:${data.credentials.token}`
            ).toString("base64")}`,
          },
          body: JSON.stringify({
            amount: data.amount,
            description: data.description,
            external_id: data.external_id,
          }),
        }
      );

      const blackcatData = await blackcatResponse.json();

      if (blackcatData.success) {
        // Salvar transação no banco
        const sale = await prisma.sale.create({
          data: {
            clientId: client.id,
            amount: data.amount,
            description: data.description,
            external_id: data.external_id,
            gateway: "blackcat",
            status: "pending",
            pix_code: blackcatData.pix_code,
            pix_qr_code: blackcatData.pix_qr_code,
          },
        });

        return res.json({
          success: true,
          gateway: "blackcat",
          pix_code: blackcatData.pix_code,
          pix_qr_code: blackcatData.pix_qr_code,
          sale_id: sale.id,
        });
      }
    } catch (error) {
      console.error("Erro BlackCat:", error);
    }

    return res.status(500).json({
      success: false,
      error: "Erro ao processar pagamento",
    });
  }
}