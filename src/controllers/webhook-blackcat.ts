import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export class webhookBlackCatController {
  static async main(req: Request, res: Response) {
    try {
      // ⚠️ CONFIGURE AQUI COMO O WEBHOOK DO BLACKCAT ENVIA OS DADOS
      const { status, id, transaction_id, payment_id, data, payment } = req.body;

      const receivedStatus = status || data?.status || payment?.status;
      const receivedId = id || transaction_id || payment_id || data?.id || payment?.id;

      console.log(
        `====> Webhook BlackCat Recebido! Status: ${receivedStatus} | PaymentId: ${receivedId}`
      );

      // ⚠️ ALTERE AQUI O CAMPO QUE IDENTIFICA A VENDA
      const saleId = receivedId;
      
      const sale = await prisma.sale.findUnique({
        where: { ghostId: `${saleId}` },
      });

      if (!sale) {
        console.log("❌ Venda não encontrada:", saleId);
        return res.status(404).json({ error: "Venda não encontrada" });
      }

      // ⚠️ ALTERE AQUI A LÓGICA DE APROVAÇÃO DO BLACKCAT
      const normalizedStatus = (receivedStatus || "").toString().toLowerCase();
      const isApproved = ["paid", "approved", "completed"].includes(normalizedStatus);
      const isExplicitlyFailed = [
        "failed",
        "refunded",
        "chargeback",
        "canceled",
        "cancelled"
      ].includes(normalizedStatus);

      if (isApproved) {
        if (!sale.approved) {
          await prisma.sale.update({
            where: { id: sale.id },
            data: { approved: true },
          });
        } else {
          console.log(`ℹ️ Venda ${sale.id} já está aprovada. Nenhuma alteração.`);
        }
      } else if (isExplicitlyFailed) {
        // Só marcar como false se ainda não estiver aprovada
        if (!sale.approved) {
          await prisma.sale.update({
            where: { id: sale.id },
            data: { approved: false },
          });
        } else {
          console.log(`⚠️ Evento de falha recebido ("${normalizedStatus}") mas venda ${sale.id} já aprovada. Mantendo approved = true.`);
        }
      } else {
        // Status intermediário (ex.: pending): não altera approved
        console.log(`ℹ️ Status intermediário recebido ("${normalizedStatus}") para venda ${sale.id}. Sem alteração de approved.`);
        return res.status(200).json({ success: true, skipped: true });
      }

      console.log(
        `✅ Venda ${sale.id} atualizada: ${isApproved ? "APROVADA" : "REJEITADA"}`
      );

      // ⚠️ OPCIONAL: Adicione integrações adicionais aqui
      // Exemplo: enviar para UTMify, enviar email, etc.

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("❌ Erro no webhook BlackCat:", error);
      res.status(500).json({ error: "Erro interno no webhook" });
    }
  }
}


