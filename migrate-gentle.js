// 🐌 Script para migração suave (uma tabela por vez)
// Uso: node migrate-gentle.js

const { Client } = require('pg');

// Configurações dos bancos
const OLD_DB_CONFIG = {
  connectionString: 'postgresql://painelpixmanager_owner:npg_ut0TLISZb4sc@ep-crimson-snow-ac4i3dtg-pooler.sa-east-1.aws.neon.tech/painelpixmanager?sslmode=require',
  connectionTimeoutMillis: 10000, // 10 segundos
  idleTimeoutMillis: 10000,
  max: 1 // Apenas 1 conexão
};

const NEW_DB_CONFIG = {
  connectionString: 'postgresql://neondb_owner:npg_iZjUlLk7HsR2@ep-calm-sun-ad5uvjz7-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
};

async function migrateTable(tableName, selectQuery, insertQuery, transformData = null) {
  const oldClient = new Client(OLD_DB_CONFIG);
  const newClient = new Client(NEW_DB_CONFIG);

  try {
    console.log(`\n🔄 Migrando tabela: ${tableName}`);
    
    // Conectar apenas ao banco antigo
    await oldClient.connect();
    console.log(`   ✅ Conectado ao banco antigo`);
    
    // Fazer query no banco antigo
    console.log(`   📥 Buscando dados...`);
    const result = await oldClient.query(selectQuery);
    const rows = result.rows;
    console.log(`   📊 Encontrados ${rows.length} registros`);
    
    if (rows.length === 0) {
      console.log(`   ⚠️  Nenhum dado encontrado na tabela ${tableName}`);
      return;
    }
    
    // Fechar conexão antiga
    await oldClient.end();
    console.log(`   🔌 Desconectado do banco antigo`);
    
    // Conectar ao banco novo
    await newClient.connect();
    console.log(`   ✅ Conectado ao banco novo`);
    
    // Inserir dados no banco novo
    let successCount = 0;
    let errorCount = 0;
    
    for (const row of rows) {
      try {
        const data = transformData ? transformData(row) : Object.values(row);
        await newClient.query(insertQuery, data);
        successCount++;
        console.log(`   ✅ ${tableName}: ${row.id || row.name || 'registro'} migrado`);
      } catch (error) {
        if (error.code === '23505') { // Duplicate key
          console.log(`   ⚠️  ${tableName}: ${row.id || row.name || 'registro'} já existe`);
        } else {
          console.log(`   ❌ Erro ao migrar ${tableName}:`, error.message);
          errorCount++;
        }
      }
    }
    
    console.log(`   📈 Resumo ${tableName}: ${successCount} sucessos, ${errorCount} erros`);
    
  } catch (error) {
    console.error(`   ❌ Erro na migração da tabela ${tableName}:`, error.message);
  } finally {
    try {
      await oldClient.end();
    } catch (e) {}
    try {
      await newClient.end();
    } catch (e) {}
  }
}

async function migrateData() {
  console.log('🚀 Iniciando migração suave de dados...\n');

  try {
    // 1. Migrar Clientes
    await migrateTable(
      'Client',
      'SELECT * FROM "Client" ORDER BY "createdAt" ASC',
      `INSERT INTO "Client" (id, name, description, token, "publicKey", "useTax", "createdAt")
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (id) DO NOTHING`,
      (row) => [row.id, row.name, row.description, row.token, row.publicKey, row.useTax, row.createdAt]
    );

    // Aguardar um pouco entre migrações
    console.log('\n⏳ Aguardando 5 segundos...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // 2. Migrar Ofertas
    await migrateTable(
      'Offer',
      'SELECT * FROM "Offer" ORDER BY "createdAt" ASC',
      `INSERT INTO "Offer" (id, name, description, "useTax", "createdAt", "clientId")
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (id) DO NOTHING`,
      (row) => [row.id, row.name, row.description, row.useTax, row.createdAt, row.clientId]
    );

    // Aguardar um pouco entre migrações
    console.log('\n⏳ Aguardando 5 segundos...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // 3. Migrar Vendas
    await migrateTable(
      'Sale',
      'SELECT * FROM "Sale" ORDER BY "createdAt" ASC',
      `INSERT INTO "Sale" (id, "ghostId", approved, "productName", "customerName", visible, amount, "toClient", "createdAt", "clientId", "offerId")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       ON CONFLICT (id) DO NOTHING`,
      (row) => [row.id, row.ghostId, row.approved, row.productName, row.customerName, row.visible, row.amount, row.toClient, row.createdAt, row.clientId, row.offerId]
    );

    // Aguardar um pouco entre migrações
    console.log('\n⏳ Aguardando 5 segundos...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // 4. Migrar Checkouts
    await migrateTable(
      'Checkout',
      'SELECT * FROM "Checkout" ORDER BY "createdAt" ASC',
      `INSERT INTO "Checkout" (id, "myCheckout", offer, "lastClientCheckout", "updatedAt", "createdAt")
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (id) DO NOTHING`,
      (row) => [row.id, row.myCheckout, row.offer, row.lastClientCheckout, row.updatedAt, row.createdAt]
    );

    console.log('\n✅ Migração concluída!');
    
    // Resumo final
    const newClient = new Client(NEW_DB_CONFIG);
    await newClient.connect();
    
    const clients = await newClient.query('SELECT COUNT(*) FROM "Client"');
    const offers = await newClient.query('SELECT COUNT(*) FROM "Offer"');
    const sales = await newClient.query('SELECT COUNT(*) FROM "Sale"');
    const checkouts = await newClient.query('SELECT COUNT(*) FROM "Checkout"');
    
    console.log('\n📊 Resumo final:');
    console.log(`   • Clientes: ${clients.rows[0].count}`);
    console.log(`   • Ofertas: ${offers.rows[0].count}`);
    console.log(`   • Vendas: ${sales.rows[0].count}`);
    console.log(`   • Checkouts: ${checkouts.rows[0].count}`);
    
    await newClient.end();

  } catch (error) {
    console.error('❌ Erro durante a migração:', error);
  }
}

// Executar migração
migrateData();

