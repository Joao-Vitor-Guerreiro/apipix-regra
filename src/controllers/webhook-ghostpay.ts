import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export class webhookGhostPayController {
  static async main(req: Request, res: Response) {
    try {
      // ⚠️ CONFIGURE AQUI COMO O WEBHOOK DA GHOSTPAY ENVIA OS DADOS
      // Baseado na documentação da GhostPay, ajuste os campos conforme necessário
      const { status, id, transaction_id, payment_id, data } = req.body;

      console.log(
        `====> Webhook GhostPay Recebido! Status: ${status} | PaymentId: ${id || transaction_id || payment_id || data?.id}`
      );

      // ⚠️ ALTERE AQUI O CAMPO QUE IDENTIFICA A VENDA
      // GhostPay pode enviar o ID em diferentes campos
      const saleId = id || transaction_id || payment_id || data?.id;
      
      if (!saleId) {
        console.log("❌ ID da transação não encontrado no webhook");
        return res.status(400).json({ error: "ID da transação não encontrado" });
      }

      const sale = await prisma.sale.findUnique({
        where: { ghostId: `${saleId}` },
      });

      if (!sale) {
        console.log("❌ Venda não encontrada:", saleId);
        return res.status(404).json({ error: "Venda não encontrada" });
      }

      // ⚠️ ALTERE AQUI A LÓGICA DE APROVAÇÃO DA GHOSTPAY
      // Baseado na documentação da GhostPay, ajuste os status conforme necessário
      const isApproved = status === "paid" || 
                        status === "APPROVED" || 
                        status === "approved" || 
                        status === "completed" ||
                        status === "success" ||
                        (data && data.status === "paid") ||
                        (data && data.status === "APPROVED");

      await prisma.sale.update({
        where: { id: sale.id },
        data: { approved: isApproved },
      });

      console.log(
        `✅ Venda ${sale.id} atualizada: ${isApproved ? "APROVADA" : "REJEITADA"} | ` +
        `Status: ${status} | GhostId: ${saleId}`
      );

      // ⚠️ OPCIONAL: Adicione integrações adicionais aqui
      // Exemplo: enviar para UTMify, enviar email, etc.
      if (isApproved) {
        console.log(`🎉 Pagamento aprovado para venda ${sale.id} - Cliente: ${sale.customerName} - Valor: R$${sale.amount}`);
        
        // Exemplo de integração adicional (descomente se necessário)
        // await sendNotificationToClient(sale);
        // await updateExternalSystem(sale);
      }

      res.status(200).json({ 
        success: true, 
        message: `Venda ${sale.id} ${isApproved ? "aprovada" : "rejeitada"}`,
        saleId: sale.id,
        approved: isApproved
      });
    } catch (error) {
      console.error("❌ Erro no webhook GhostPay:", error);
      res.status(500).json({ 
        error: "Erro interno no webhook",
        details: error instanceof Error ? error.message : "Erro desconhecido"
      });
    }
  }
}




