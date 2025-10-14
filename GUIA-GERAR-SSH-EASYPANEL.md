# 🔑 Guia Passo a Passo: Gerar Chave SSH no EasyPanel

## 🎯 **Objetivo**
Resolver o erro "Git key not found" configurando uma chave SSH para o EasyPanel acessar seu repositório GitHub.

## 📋 **Pré-requisitos**
- ✅ Acesso ao terminal SSH do EasyPanel
- ✅ Acesso ao seu GitHub
- ✅ Repositório: `https://github.com/Joao-Vitor-Guerreiro/apipixpaulo`

## 🚀 **Passo 1: Gerar Chave SSH no EasyPanel**

### **1.1 Conectar via SSH no EasyPanel**
```bash
# Use o terminal SSH fornecido pelo EasyPanel
# Ou conecte via SSH se tiver acesso direto
ssh usuario@seu-servidor-easypanel.com
```

### **1.2 Gerar Nova Chave SSH**
```bash
# No terminal do EasyPanel, execute:
ssh-keygen -t ed25519 -C "easypanel@apipixpaulo.com"

# Quando perguntar onde salvar:
# Pressione Enter (salva em ~/.ssh/id_ed25519)

# Quando perguntar por senha:
# Pressione Enter (sem senha para facilitar o deploy automático)
```

### **1.3 Verificar se a chave foi criada**
```bash
ls -la ~/.ssh/
# Deve mostrar: id_ed25519 e id_ed25519.pub
```

## 🔑 **Passo 2: Copiar Chave Pública**

### **2.1 Exibir a chave pública**
```bash
cat ~/.ssh/id_ed25519.pub
```

### **2.2 Copiar toda a saída**
A saída será algo como:
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJl3dIeudXqd0DQM1a5fQhO4J8X8v2f3g4h5i6j7k8l9 easypanel@apipixpaulo.com
```

**⚠️ IMPORTANTE:** Copie a linha COMPLETA, incluindo o `ssh-ed25519` no início e o email no final.

## 🐙 **Passo 3: Adicionar Chave no GitHub**

### **3.1 Acessar GitHub**
1. Vá para: https://github.com/Joao-Vitor-Guerreiro/apipixpaulo
2. Clique em **Settings** (no menu superior direito)
3. No menu lateral esquerdo, clique em **SSH and GPG keys**

### **3.2 Adicionar Nova Chave SSH**
1. Clique em **New SSH key**
2. **Title**: `EasyPanel Deploy Key`
3. **Key type**: `Authentication Key`
4. **Key**: Cole a chave pública completa que você copiou
5. Clique em **Add SSH key**

## ⚙️ **Passo 4: Configurar no EasyPanel**

### **4.1 Via Interface do EasyPanel (Recomendado)**
1. Acesse seu projeto no EasyPanel
2. Vá em **Settings** → **SSH Keys**
3. Clique em **Add SSH Key**
4. **Name**: `GitHub Deploy Key`
5. **Private Key**: Cole o conteúdo da chave privada
   ```bash
   # Para obter a chave privada:
   cat ~/.ssh/id_ed25519
   ```
6. Salve as configurações

### **4.2 Via Terminal (Alternativa)**
```bash
# Testar conexão SSH com GitHub
ssh -T git@github.com

# Se funcionar, você verá:
# Hi Joao-Vitor-Guerreiro! You've successfully authenticated, but GitHub does not provide shell access.
```

## 🧪 **Passo 5: Testar Deploy**

### **5.1 Testar Git Pull**
```bash
# No diretório do projeto no EasyPanel
git pull origin main
```

### **5.2 Se der erro, verificar configuração**
```bash
# Verificar configuração do Git
git remote -v

# Deve mostrar:
# origin  git@github.com:Joao-Vitor-Guerreiro/apipixpaulo.git (fetch)
# origin  git@github.com:Joao-Vitor-Guerreiro/apipixpaulo.git (push)
```

### **5.3 Se ainda não funcionar, configurar remote**
```bash
# Configurar remote para usar SSH
git remote set-url origin git@github.com:Joao-Vitor-Guerreiro/apipixpaulo.git

# Testar novamente
git pull origin main
```

## 🔧 **Passo 6: Deploy Completo**

### **6.1 Executar Deploy**
```bash
# No diretório do projeto
git pull origin main
npm install
npx prisma migrate deploy
npm run dev
```

### **6.2 Verificar se funcionou**
```bash
# Verificar se o servidor está rodando
curl http://localhost:3434/health

# Ou verificar processo
ps aux | grep "npm run dev"
```

## 🚨 **Troubleshooting**

### **Problema: "Permission denied (publickey)"**
```bash
# Verificar se a chave está sendo usada
ssh-add -l

# Se não aparecer nada, adicionar a chave
ssh-add ~/.ssh/id_ed25519

# Testar novamente
ssh -T git@github.com
```

### **Problema: "Host key verification failed"**
```bash
# Adicionar GitHub aos hosts conhecidos
ssh-keyscan github.com >> ~/.ssh/known_hosts

# Testar novamente
ssh -T git@github.com
```

### **Problema: "Could not read from remote repository"**
```bash
# Verificar se o repositório existe e você tem acesso
git ls-remote git@github.com:Joao-Vitor-Guerreiro/apipixpaulo.git

# Se não funcionar, verificar permissões no GitHub
```

## ✅ **Checklist de Verificação**

- [ ] Chave SSH gerada no EasyPanel
- [ ] Chave pública adicionada no GitHub
- [ ] Chave privada configurada no EasyPanel
- [ ] Teste SSH funcionando: `ssh -T git@github.com`
- [ ] Git pull funcionando: `git pull origin main`
- [ ] Deploy automático funcionando
- [ ] Servidor rodando na porta 3434

## 🎯 **Resultado Esperado**

Após configurar corretamente:
- ✅ EasyPanel consegue fazer `git pull` automaticamente
- ✅ Deploy automático funcionando
- ✅ Sem mais erro "Git key not found"
- ✅ Sistema atualizado automaticamente quando você fizer push

## 📞 **Se Ainda Não Funcionar**

### **Alternativa 1: Deploy Manual**
Use o script que criamos: `deploy-manual-sem-git.sh`

### **Alternativa 2: Personal Access Token**
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Selecionar escopo: `repo`
4. Usar token como senha no EasyPanel

### **Alternativa 3: Upload Manual**
1. Compactar projeto localmente
2. Fazer upload via interface do EasyPanel
3. Extrair e configurar manualmente

## 🔍 **Comandos Úteis para Debug**

```bash
# Verificar configuração SSH
ssh -v git@github.com

# Verificar chaves SSH
ssh-add -l

# Verificar configuração Git
git config --list

# Verificar remote
git remote -v

# Testar conexão
curl -I https://github.com/Joao-Vitor-Guerreiro/apipixpaulo
```
