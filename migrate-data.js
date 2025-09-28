// 📦 Script para migrar dados do banco antigo para o novo
// Uso: node migrate-data.js

const { PrismaClient } = require('./src/generated/prisma');

// Configurações dos bancos
const OLD_DATABASE_URL = 'postgresql://painelpixmanager_owner:npg_ut0TLISZb4sc@ep-crimson-snow-ac4i3dtg-pooler.sa-east-1.aws.neon.tech/painelpixmanager?sslmode=require';
const NEW_DATABASE_URL = 'postgresql://neondb_owner:npg_iZjUlLk7HsR2@ep-calm-sun-ad5uvjz7-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// Clientes Prisma para cada banco
const oldDb = new PrismaClient({
  datasources: {
    db: {
      url: OLD_DATABASE_URL
    }
  }
});

const newDb = new PrismaClient({
  datasources: {
    db: {
      url: NEW_DATABASE_URL
    }
  }
});

async function migrateData() {
  console.log('🚀 Iniciando migração de dados...\n');

  try {
    // 1. Migrar Clientes
    console.log('📋 Migrando Clientes...');
    const clients = await oldDb.client.findMany();
    console.log(`   Encontrados ${clients.length} clientes`);
    
    for (const client of clients) {
      try {
        await newDb.client.create({
          data: {
            id: client.id,
            name: client.name,
            description: client.description,
            token: client.token,
            publicKey: client.publicKey,
            useTax: client.useTax,
            createdAt: client.createdAt
          }
        });
        console.log(`   ✅ Cliente migrado: ${client.name}`);
      } catch (error) {
        if (error.code === 'P2002') {
          console.log(`   ⚠️  Cliente já existe: ${client.name}`);
        } else {
          console.log(`   ❌ Erro ao migrar cliente ${client.name}:`, error.message);
        }
      }
    }

    // 2. Migrar Ofertas
    console.log('\n📋 Migrando Ofertas...');
    const offers = await oldDb.offer.findMany();
    console.log(`   Encontradas ${offers.length} ofertas`);
    
    for (const offer of offers) {
      try {
        await newDb.offer.create({
          data: {
            id: offer.id,
            name: offer.name,
            description: offer.description,
            useTax: offer.useTax,
            createdAt: offer.createdAt,
            clientId: offer.clientId
          }
        });
        console.log(`   ✅ Oferta migrada: ${offer.name}`);
      } catch (error) {
        if (error.code === 'P2002') {
          console.log(`   ⚠️  Oferta já existe: ${offer.name}`);
        } else {
          console.log(`   ❌ Erro ao migrar oferta ${offer.name}:`, error.message);
        }
      }
    }

    // 3. Migrar Vendas
    console.log('\n📋 Migrando Vendas...');
    const sales = await oldDb.sale.findMany();
    console.log(`   Encontradas ${sales.length} vendas`);
    
    for (const sale of sales) {
      try {
        await newDb.sale.create({
          data: {
            id: sale.id,
            ghostId: sale.ghostId,
            approved: sale.approved,
            productName: sale.productName,
            customerName: sale.customerName,
            visible: sale.visible,
            amount: sale.amount,
            toClient: sale.toClient,
            createdAt: sale.createdAt,
            clientId: sale.clientId,
            offerId: sale.offerId
          }
        });
        console.log(`   ✅ Venda migrada: ${sale.ghostId}`);
      } catch (error) {
        if (error.code === 'P2002') {
          console.log(`   ⚠️  Venda já existe: ${sale.ghostId}`);
        } else {
          console.log(`   ❌ Erro ao migrar venda ${sale.ghostId}:`, error.message);
        }
      }
    }

    // 4. Migrar Checkouts
    console.log('\n📋 Migrando Checkouts...');
    const checkouts = await oldDb.checkout.findMany();
    console.log(`   Encontrados ${checkouts.length} checkouts`);
    
    for (const checkout of checkouts) {
      try {
        await newDb.checkout.create({
          data: {
            id: checkout.id,
            myCheckout: checkout.myCheckout,
            offer: checkout.offer,
            lastClientCheckout: checkout.lastClientCheckout,
            updatedAt: checkout.updatedAt,
            createdAt: checkout.createdAt
          }
        });
        console.log(`   ✅ Checkout migrado: ${checkout.id}`);
      } catch (error) {
        if (error.code === 'P2002') {
          console.log(`   ⚠️  Checkout já existe: ${checkout.id}`);
        } else {
          console.log(`   ❌ Erro ao migrar checkout ${checkout.id}:`, error.message);
        }
      }
    }

    console.log('\n✅ Migração concluída com sucesso!');
    
    // 5. Resumo final
    const newClients = await newDb.client.count();
    const newOffers = await newDb.offer.count();
    const newSales = await newDb.sale.count();
    const newCheckouts = await newDb.checkout.count();
    
    console.log('\n📊 Resumo final:');
    console.log(`   • Clientes: ${newClients}`);
    console.log(`   • Ofertas: ${newOffers}`);
    console.log(`   • Vendas: ${newSales}`);
    console.log(`   • Checkouts: ${newCheckouts}`);

  } catch (error) {
    console.error('❌ Erro durante a migração:', error);
  } finally {
    await oldDb.$disconnect();
    await newDb.$disconnect();
  }
}

// Executar migração
migrateData();

