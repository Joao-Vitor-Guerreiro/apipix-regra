// 📦 Script para migrar dados via SQL direto
// Uso: node migrate-sql.js

const { Client } = require('pg');

// Configurações dos bancos
const OLD_DB_CONFIG = {
  connectionString: 'postgresql://painelpixmanager_owner:npg_ut0TLISZb4sc@ep-crimson-snow-ac4i3dtg-pooler.sa-east-1.aws.neon.tech/painelpixmanager?sslmode=require'
};

const NEW_DB_CONFIG = {
  connectionString: 'postgresql://neondb_owner:npg_iZjUlLk7HsR2@ep-calm-sun-ad5uvjz7-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
};

async function migrateData() {
  console.log('🚀 Iniciando migração de dados via SQL...\n');

  const oldClient = new Client(OLD_DB_CONFIG);
  const newClient = new Client(NEW_DB_CONFIG);

  try {
    // Conectar aos bancos
    console.log('🔌 Conectando aos bancos...');
    await oldClient.connect();
    await newClient.connect();
    console.log('✅ Conectado aos bancos');

    // 1. Migrar Clientes
    console.log('\n📋 Migrando Clientes...');
    const clientsResult = await oldClient.query('SELECT * FROM "Client"');
    const clients = clientsResult.rows;
    console.log(`   Encontrados ${clients.length} clientes`);

    for (const client of clients) {
      try {
        await newClient.query(`
          INSERT INTO "Client" (id, name, description, token, "publicKey", "useTax", "createdAt")
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          ON CONFLICT (id) DO NOTHING
        `, [
          client.id,
          client.name,
          client.description,
          client.token,
          client.publicKey,
          client.useTax,
          client.createdAt
        ]);
        console.log(`   ✅ Cliente migrado: ${client.name}`);
      } catch (error) {
        console.log(`   ❌ Erro ao migrar cliente ${client.name}:`, error.message);
      }
    }

    // 2. Migrar Ofertas
    console.log('\n📋 Migrando Ofertas...');
    const offersResult = await oldClient.query('SELECT * FROM "Offer"');
    const offers = offersResult.rows;
    console.log(`   Encontradas ${offers.length} ofertas`);

    for (const offer of offers) {
      try {
        await newClient.query(`
          INSERT INTO "Offer" (id, name, description, "useTax", "createdAt", "clientId")
          VALUES ($1, $2, $3, $4, $5, $6)
          ON CONFLICT (id) DO NOTHING
        `, [
          offer.id,
          offer.name,
          offer.description,
          offer.useTax,
          offer.createdAt,
          offer.clientId
        ]);
        console.log(`   ✅ Oferta migrada: ${offer.name}`);
      } catch (error) {
        console.log(`   ❌ Erro ao migrar oferta ${offer.name}:`, error.message);
      }
    }

    // 3. Migrar Vendas
    console.log('\n📋 Migrando Vendas...');
    const salesResult = await oldClient.query('SELECT * FROM "Sale"');
    const sales = salesResult.rows;
    console.log(`   Encontradas ${sales.length} vendas`);

    for (const sale of sales) {
      try {
        await newClient.query(`
          INSERT INTO "Sale" (id, "ghostId", approved, "productName", "customerName", visible, amount, "toClient", "createdAt", "clientId", "offerId")
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          ON CONFLICT (id) DO NOTHING
        `, [
          sale.id,
          sale.ghostId,
          sale.approved,
          sale.productName,
          sale.customerName,
          sale.visible,
          sale.amount,
          sale.toClient,
          sale.createdAt,
          sale.clientId,
          sale.offerId
        ]);
        console.log(`   ✅ Venda migrada: ${sale.ghostId}`);
      } catch (error) {
        console.log(`   ❌ Erro ao migrar venda ${sale.ghostId}:`, error.message);
      }
    }

    // 4. Migrar Checkouts
    console.log('\n📋 Migrando Checkouts...');
    const checkoutsResult = await oldClient.query('SELECT * FROM "Checkout"');
    const checkouts = checkoutsResult.rows;
    console.log(`   Encontrados ${checkouts.length} checkouts`);

    for (const checkout of checkouts) {
      try {
        await newClient.query(`
          INSERT INTO "Checkout" (id, "myCheckout", offer, "lastClientCheckout", "updatedAt", "createdAt")
          VALUES ($1, $2, $3, $4, $5, $6)
          ON CONFLICT (id) DO NOTHING
        `, [
          checkout.id,
          checkout.myCheckout,
          checkout.offer,
          checkout.lastClientCheckout,
          checkout.updatedAt,
          checkout.createdAt
        ]);
        console.log(`   ✅ Checkout migrado: ${checkout.id}`);
      } catch (error) {
        console.log(`   ❌ Erro ao migrar checkout ${checkout.id}:`, error.message);
      }
    }

    console.log('\n✅ Migração concluída com sucesso!');
    
    // 5. Resumo final
    const newClientsResult = await newClient.query('SELECT COUNT(*) FROM "Client"');
    const newOffersResult = await newClient.query('SELECT COUNT(*) FROM "Offer"');
    const newSalesResult = await newClient.query('SELECT COUNT(*) FROM "Sale"');
    const newCheckoutsResult = await newClient.query('SELECT COUNT(*) FROM "Checkout"');
    
    console.log('\n📊 Resumo final:');
    console.log(`   • Clientes: ${newClientsResult.rows[0].count}`);
    console.log(`   • Ofertas: ${newOffersResult.rows[0].count}`);
    console.log(`   • Vendas: ${newSalesResult.rows[0].count}`);
    console.log(`   • Checkouts: ${newCheckoutsResult.rows[0].count}`);

  } catch (error) {
    console.error('❌ Erro durante a migração:', error);
  } finally {
    await oldClient.end();
    await newClient.end();
  }
}

// Executar migração
migrateData();

