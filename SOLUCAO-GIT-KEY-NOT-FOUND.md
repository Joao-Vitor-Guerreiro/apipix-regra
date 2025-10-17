# 🔑 Solução: "Git key not found" no EasyPanel

## 🚨 **Problema Identificado**
O erro "Git key not found" indica que o EasyPanel não consegue acessar seu repositório GitHub para fazer o deploy automático.

## ✅ **Soluções Disponíveis**

### 🎯 **Solução 1: Configurar SSH Key no EasyPanel (Recomendado)**

#### **Passo 1: Gerar Chave SSH**
```bash
# No seu computador local
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"

# Quando perguntar onde salvar, pressione Enter (salva em ~/.ssh/id_ed25519)
# Quando perguntar por senha, pressione Enter (sem senha)
```

#### **Passo 2: Copiar Chave Pública**
```bash
# Copiar a chave pública
cat ~/.ssh/id_ed25519.pub

# Ou no Windows:
type %USERPROFILE%\.ssh\id_ed25519.pub
```

#### **Passo 3: Adicionar no GitHub**
1. Acesse GitHub → Settings → SSH and GPG keys
2. Clique em "New SSH key"
3. Cole a chave pública copiada
4. Salve

#### **Passo 4: Configurar no EasyPanel**
1. Acesse seu projeto no EasyPanel
2. Vá em **Settings** → **SSH Keys**
3. Adicione a chave privada (`~/.ssh/id_ed25519`)
4. Salve as configurações

### 🎯 **Solução 2: Deploy Manual (Alternativa)**

#### **Passo 1: Upload Manual do Código**
```bash
# No seu computador local, criar arquivo compactado
tar -czf projeto.tar.gz --exclude=node_modules --exclude=.git .

# Ou no Windows:
# Comprimir pasta do projeto (exceto node_modules e .git)
```

#### **Passo 2: Upload no EasyPanel**
1. Acesse o terminal SSH do EasyPanel
2. Faça upload do arquivo compactado
3. Extraia o código:
```bash
tar -xzf projeto.tar.gz
```

#### **Passo 3: Configurar Ambiente**
```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
nano .env
```

### 🎯 **Solução 3: Usar HTTPS com Token (Alternativa)**

#### **Passo 1: Criar Personal Access Token no GitHub**
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Selecione escopo: `repo` (acesso completo ao repositório)
4. Copie o token

#### **Passo 2: Configurar no EasyPanel**
1. EasyPanel → Settings → Git Configuration
2. URL: `https://github.com/Joao-Vitor-Guerreiro/apipixpaulo.git`
3. Username: `Joao-Vitor-Guerreiro`
4. Password: `seu-personal-access-token`

## 🔧 **Configuração Completa após Resolver Git**

### **1. Variáveis de Ambiente no EasyPanel**
```env
DATABASE_URL=postgresql://painelpixmanager_owner:npg_ut0TLISZb4sc@ep-crimson-snow-ac4i3dtg-pooler.sa-east-1.aws.neon.tech/painelpixmanager?sslmode=require

BLACKCAT_PUBLIC_KEY=sua_public_key_aqui
BLACKCAT_SECRET_KEY=sua_secret_key_aqui
BLACKCAT_WEBHOOK_SECRET=sua_webhook_secret_aqui

ALLOWPAY_SECRET_KEY=sua_secret_key_aqui
ALLOWPAY_COMPANY_ID=93b610dd-202b-498f-9007-57195f5eb67b
ALLOWPAY_WEBHOOK_SECRET=YOUR_WEBHOOK_SECRET
```

### **2. Script de Deploy Automático**
```bash
#!/bin/bash
echo "🚀 Deploy Automático"
git pull origin main
npm install
npx prisma migrate deploy
npm run dev
```

### **3. Configurar Webhooks**
- **BlackCat**: `https://seu-dominio.easypanel.host/webhook-blackcat`
- **AllowPayments**: `https://seu-dominio.easypanel.host/webhook-allowpayments`

## 🧪 **Teste de Configuração**

### **1. Verificar Git**
```bash
# No terminal do EasyPanel
git status
git remote -v
```

### **2. Testar Variáveis**
```bash
node -e "console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'OK' : 'ERRO')"
node -e "console.log('BLACKCAT_PUBLIC_KEY:', process.env.BLACKCAT_PUBLIC_KEY ? 'OK' : 'ERRO')"
```

### **3. Testar Endpoint**
```bash
curl -X POST http://localhost:3434/allowpayments \
  -H "Content-Type: application/json" \
  -d '{
    "credentials": {
      "token": "test-deploy",
      "name": "Teste Deploy"
    },
    "amount": 50.00,
    "product": {
      "title": "Teste Deploy"
    },
    "customer": {
      "phone": "11999999999",
      "name": "João Silva",
      "email": "joao@teste.com",
      "document": {
        "type": "CPF",
        "number": "12345678901"
      }
    }
  }'
```

## 🚨 **Troubleshooting**

### **Problema: Ainda não consegue fazer pull**
```bash
# Verificar permissões SSH
ssh -T git@github.com

# Se der erro, reconfigurar SSH
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"
```

### **Problema: Variáveis não carregam**
```bash
# Verificar se .env existe
ls -la .env

# Recarregar variáveis
source .env
```

### **Problema: Servidor não inicia**
```bash
# Verificar logs
npm run dev 2>&1 | tee server.log

# Verificar porta
netstat -tlnp | grep :3434
```

## ✅ **Checklist Final**

- [ ] SSH Key configurada no GitHub
- [ ] SSH Key configurada no EasyPanel
- [ ] Git pull funcionando
- [ ] Variáveis de ambiente configuradas
- [ ] Dependências instaladas
- [ ] Banco de dados configurado
- [ ] Servidor rodando
- [ ] Endpoints testados
- [ ] Webhooks configurados

## 🎯 **Resultado Esperado**

Após resolver o problema do Git:
- ✅ Deploy automático funcionando
- ✅ Código atualizado automaticamente
- ✅ Sistema rodando em produção
- ✅ Webhooks funcionando
- ✅ Pagamentos processando

## 📞 **Suporte Adicional**

Se ainda houver problemas:
1. Verificar logs do EasyPanel
2. Testar SSH connection: `ssh -T git@github.com`
3. Verificar permissões do repositório
4. Usar deploy manual como alternativa


