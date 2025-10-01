import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export class TemplateWebhookController {
  static async main(req: Request, res: Response) {
    try {
      // ⚠️ CONFIGURE AQUI COMO O WEBHOOK ENVIA OS DADOS
      const { status, paymentId, id, data } = req.body;

      console.log(
        `====> Webhook Novo Gateway Recebido! Status: ${status} | PaymentId: ${paymentId || id}`
      );

      // ⚠️ ALTERE AQUI O CAMPO QUE IDENTIFICA A VENDA
      const sale = await prisma.sale.findUnique({
        where: { ghostId: `${paymentId || id}` },
      });

      if (!sale) {
        console.log("❌ Venda não encontrada:", paymentId || id);
        return res.status(404).json({ error: "Venda não encontrada" });
      }

      // ⚠️ ALTERE AQUI A LÓGICA DE APROVAÇÃO
      const isApproved = status === "paid" || status === "APPROVED" || status === "approved";

      await prisma.sale.update({
        where: { id: sale.id },
        data: { approved: isApproved },
      });

      console.log(
        `✅ Venda ${sale.id} atualizada: ${isApproved ? "APROVADA" : "REJEITADA"}`
      );

      // ⚠️ OPCIONAL: Adicione integrações adicionais aqui
      // Exemplo: enviar para UTMify, enviar email, etc.

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("❌ Erro no webhook:", error);
      res.status(500).json({ error: "Erro interno no webhook" });
    }
  }
}


































