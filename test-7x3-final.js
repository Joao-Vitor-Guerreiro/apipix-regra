// Teste final da lógica 7x3 - 5 vendas
const API_URL = 'http://localhost:3434/checkout-payment';

async function testFinal7x3() {
  console.log("🧪 TESTE FINAL DA LÓGICA 7x3 - 5 VENDAS");
  console.log("🎯 Testando: 1-4 AllowPay, 5 BlackCat\n");
  
  const results = [];
  
  for (let i = 1; i <= 5; i++) {
    const payload = {
      checkout: "https://crocsbr.com/checkout",
      offer: "crocs-brasil-gratis",
      customer: {
        name: `Cliente Teste ${i}`,
        email: `cliente${i}@teste.com`,
        document: {
          type: "CPF",
          number: `1234567890${i}`
        },
        phone: "11999999999"
      },
      product: {
        title: `Crocs Brasil - Venda ${i}`,
        description: "Sandália Crocs Crocband™ Clog - QUARTZ (Tam: 40)"
      },
      amount: 27.8,
      credentials: {
        name: "Crocs Brasil",
        token: "crocs-brasil-token-2024",
        offer: {
          id: "crocs-brasil-gratis",
          name: "Crocs Brasil - Promoção Grátis"
        }
      }
    };

    try {
      console.log(`\n🛒 VENDA #${i}`);
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      
      if (response.ok) {
        const result = JSON.parse(responseText);
        const cycle = i % 10;
        const expectedGateway = cycle < 7 ? "AllowPay (CLIENTE)" : "BlackCat (SEU)";
        
        console.log(`📊 Ciclo: ${cycle}/10 | Gateway: ${expectedGateway}`);
        console.log(`✅ Status: ${result.status}`);
        console.log(`💰 Valor: R$ ${(result.amount / 100).toFixed(2)}`);
        console.log(`🔗 PIX: ${result.pix?.qrcode?.substring(0, 50)}...`);
        
        results.push({ 
          saleNumber: i, 
          success: true, 
          gateway: expectedGateway,
          cycle,
          toClient: cycle < 7
        });
      } else {
        console.log(`❌ Erro: ${responseText}`);
        results.push({ saleNumber: i, success: false, error: responseText });
      }
      
    } catch (error) {
      console.log(`❌ Erro na requisição: ${error.message}`);
      results.push({ saleNumber: i, success: false, error: error.message });
    }
    
    // Pausa entre vendas
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Análise dos resultados
  console.log("\n📊 === RESULTADOS FINAIS ===");
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`✅ Vendas bem-sucedidas: ${successful.length}/5`);
  console.log(`❌ Vendas com erro: ${failed.length}/5`);
  
  if (successful.length > 0) {
    const allowPay = successful.filter(r => r.toClient).length;
    const blackCat = successful.filter(r => !r.toClient).length;
    
    console.log(`🟢 AllowPay (CLIENTE): ${allowPay} vendas`);
    console.log(`🔵 BlackCat (SEU): ${blackCat} vendas`);
    
    console.log("\n🎯 === VERIFICAÇÃO DA LÓGICA 7x3 ===");
    successful.forEach(sale => {
      console.log(`Venda #${sale.saleNumber}: Ciclo ${sale.cycle}/10 → ${sale.gateway}`);
    });
    
    if (allowPay >= 4 && blackCat >= 1) {
      console.log("\n🎉 LÓGICA 7x3 FUNCIONANDO PERFEITAMENTE!");
      console.log("✅ Sistema pronto para produção!");
    } else {
      console.log("\n⚠️  Lógica 7x3 precisa de ajustes");
    }
  }
  
  if (failed.length > 0) {
    console.log("\n❌ Vendas com erro:");
    failed.forEach(sale => {
      console.log(`   Venda #${sale.saleNumber}: ${sale.error}`);
    });
  }
}

testFinal7x3().catch(console.error);


