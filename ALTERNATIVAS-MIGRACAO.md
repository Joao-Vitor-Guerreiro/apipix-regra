# 🔄 Alternativas para Migração de Dados

## ❌ **Problema Identificado:**
O banco antigo excedeu o limite de compute time do Neon, impedindo a migração automática.

## 🛠️ **Alternativas Disponíveis:**

### 1️⃣ **Via EasyPanel (Recomendado)**
1. Acesse o EasyPanel do projeto antigo
2. Vá em "Database" ou "PostgreSQL"
3. Exporte os dados manualmente
4. Importe no novo banco

### 2️⃣ **Via Neon Dashboard**
1. Acesse https://console.neon.tech/
2. Entre na conta antiga
3. Vá em "SQL Editor"
4. Execute queries para exportar dados:
```sql
-- Exportar Clientes
SELECT * FROM "Client";

-- Exportar Ofertas  
SELECT * FROM "Offer";

-- Exportar Vendas
SELECT * FROM "Sale";

-- Exportar Checkouts
SELECT * FROM "Checkout";
```

### 3️⃣ **Via pgAdmin ou DBeaver**
1. Conecte no banco antigo
2. Exporte cada tabela para CSV/SQL
3. Importe no novo banco

### 4️⃣ **Criar Dados de Teste**
Se não conseguir acessar o banco antigo, posso criar dados de exemplo:

```sql
-- Inserir cliente de exemplo
INSERT INTO "Client" (id, name, token, "publicKey", "useTax", "createdAt")
VALUES ('cliente-1', 'Cliente Teste', 'token-teste', 'pk-teste', false, NOW());

-- Inserir oferta de exemplo
INSERT INTO "Offer" (id, name, "useTax", "clientId", "createdAt")
VALUES ('oferta-1', 'Oferta Teste', false, 'cliente-1', NOW());

-- Inserir venda de exemplo
INSERT INTO "Sale" (id, "ghostId", approved, "productName", "customerName", amount, "toClient", "clientId", "offerId", "createdAt")
VALUES ('venda-1', 'ghost-123', false, 'Produto Teste', 'Cliente Teste', 100.00, true, 'cliente-1', 'oferta-1', NOW());
```

### 5️⃣ **Aguardar Reset do Limite**
- O limite de compute time pode resetar em algumas horas
- Tentar migração novamente mais tarde

## 🎯 **Recomendação:**

**Opção 1** é a mais segura e rápida. Se não conseguir acessar o EasyPanel, posso criar dados de teste para você começar a usar o novo banco.

**Qual opção você prefere?**

