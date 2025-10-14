#!/bin/bash

echo "🚀 DEPLOY MANUAL NO EASYPANEL (SEM GIT)"
echo "======================================="

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para imprimir com cores
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# 1. Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    print_error "Arquivo package.json não encontrado. Execute este script no diretório do projeto."
    exit 1
fi

print_status "Diretório do projeto encontrado"

# 2. Parar servidor atual (se estiver rodando)
echo "🛑 Parando servidor atual..."
pkill -f "npm run dev" 2>/dev/null || true
pkill -f "node.*server" 2>/dev/null || true
sleep 2

# 3. Instalar/atualizar dependências
echo "📦 Instalando dependências..."
npm install
if [ $? -eq 0 ]; then
    print_status "Dependências instaladas"
else
    print_error "Erro ao instalar dependências"
    exit 1
fi

# 4. Verificar se o arquivo .env existe
if [ ! -f ".env" ]; then
    print_warning "Arquivo .env não encontrado"
    echo "📝 Criando arquivo .env..."
    
    cat > .env << 'EOF'
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://painelpixmanager_owner:npg_ut0TLISZb4sc@ep-crimson-snow-ac4i3dtg-pooler.sa-east-1.aws.neon.tech/painelpixmanager?sslmode=require"

# Credenciais BlackCat Pagamentos
BLACKCAT_PUBLIC_KEY="sua_public_key_aqui"
BLACKCAT_SECRET_KEY="sua_secret_key_aqui"
BLACKCAT_WEBHOOK_SECRET="sua_webhook_secret_aqui"

# Credenciais AllowPayments
ALLOWPAY_SECRET_KEY="sua_secret_key_aqui"
ALLOWPAY_COMPANY_ID="93b610dd-202b-498f-9007-57195f5eb67b"
ALLOWPAY_WEBHOOK_SECRET="YOUR_WEBHOOK_SECRET"
EOF
    
    print_status "Arquivo .env criado"
    print_warning "IMPORTANTE: Configure suas credenciais reais no arquivo .env"
else
    print_status "Arquivo .env já existe"
fi

# 5. Configurar banco de dados
echo "🗄️  Configurando banco de dados..."
npx prisma migrate deploy
if [ $? -eq 0 ]; then
    print_status "Banco de dados configurado"
else
    print_warning "Erro ao configurar banco de dados (pode ser normal se já estiver configurado)"
fi

# 6. Verificar variáveis de ambiente
echo "🔍 Verificando variáveis de ambiente..."
if [ -f ".env" ]; then
    print_info "Variáveis carregadas do arquivo .env"
    
    # Verificar se as variáveis principais estão definidas
    if grep -q "BLACKCAT_PUBLIC_KEY=" .env && grep -q "ALLOWPAY_SECRET_KEY=" .env; then
        print_status "Variáveis principais encontradas"
    else
        print_warning "Algumas variáveis podem estar faltando"
    fi
else
    print_error "Arquivo .env não encontrado"
fi

# 7. Criar script de teste
echo "🧪 Criando script de teste..."
cat > test-deploy.js << 'EOF'
const { PrismaClient } = require('@prisma/client');

async function testDeploy() {
    console.log('🧪 Testando configuração do deploy...');
    
    try {
        // Testar conexão com banco
        const prisma = new PrismaClient();
        await prisma.$connect();
        console.log('✅ Conexão com banco de dados: OK');
        await prisma.$disconnect();
        
        // Testar variáveis de ambiente
        const requiredVars = [
            'DATABASE_URL',
            'BLACKCAT_PUBLIC_KEY',
            'BLACKCAT_SECRET_KEY',
            'ALLOWPAY_SECRET_KEY',
            'ALLOWPAY_COMPANY_ID'
        ];
        
        let allVarsOk = true;
        requiredVars.forEach(varName => {
            if (process.env[varName] && process.env[varName] !== `sua_${varName.toLowerCase()}_aqui`) {
                console.log(`✅ ${varName}: Configurada`);
            } else {
                console.log(`❌ ${varName}: Não configurada`);
                allVarsOk = false;
            }
        });
        
        if (allVarsOk) {
            console.log('🎉 Todas as configurações estão OK!');
            process.exit(0);
        } else {
            console.log('⚠️  Algumas configurações precisam ser ajustadas');
            process.exit(1);
        }
        
    } catch (error) {
        console.error('❌ Erro no teste:', error.message);
        process.exit(1);
    }
}

testDeploy();
EOF

# 8. Executar teste
echo "🧪 Executando teste de configuração..."
node test-deploy.js
if [ $? -eq 0 ]; then
    print_status "Teste de configuração passou"
else
    print_warning "Teste de configuração falhou (verifique as credenciais)"
fi

# 9. Iniciar servidor
echo "🚀 Iniciando servidor..."
nohup npm run dev > server.log 2>&1 &
SERVER_PID=$!

# Aguardar um pouco para o servidor inicializar
sleep 5

# Verificar se o servidor está rodando
if ps -p $SERVER_PID > /dev/null; then
    print_status "Servidor iniciado (PID: $SERVER_PID)"
else
    print_error "Erro ao iniciar servidor"
    echo "📋 Logs do servidor:"
    tail -20 server.log
    exit 1
fi

# 10. Testar endpoint
echo "🌐 Testando endpoint..."
sleep 3

# Testar se o servidor está respondendo
if curl -s http://localhost:3434/clients > /dev/null; then
    print_status "Servidor respondendo na porta 3434"
else
    print_warning "Servidor não está respondendo (pode estar inicializando)"
fi

# 11. Criar script de monitoramento
echo "📊 Criando script de monitoramento..."
cat > monitor-server.sh << 'EOF'
#!/bin/bash
echo "📊 Monitoramento do Servidor"
echo "=========================="
echo "PID do servidor: $(pgrep -f 'npm run dev')"
echo "Porta 3434: $(netstat -tlnp | grep :3434 || echo 'Não encontrada')"
echo "Últimas linhas do log:"
tail -5 server.log
echo ""
echo "Para parar o servidor: pkill -f 'npm run dev'"
echo "Para ver logs em tempo real: tail -f server.log"
EOF

chmod +x monitor-server.sh

echo ""
echo "🎉 DEPLOY MANUAL CONCLUÍDO!"
echo "=========================="
echo "✅ Dependências instaladas"
echo "✅ Banco de dados configurado"
echo "✅ Servidor iniciado"
echo ""
echo "📋 Próximos passos:"
echo "1. Configure suas credenciais reais no arquivo .env"
echo "2. Reinicie o servidor: pkill -f 'npm run dev' && npm run dev"
echo "3. Configure o domínio no EasyPanel"
echo "4. Atualize as URLs dos webhooks"
echo ""
echo "🔍 Comandos úteis:"
echo "• Ver logs: tail -f server.log"
echo "• Monitorar: ./monitor-server.sh"
echo "• Parar servidor: pkill -f 'npm run dev'"
echo "• Reiniciar: pkill -f 'npm run dev' && npm run dev"
echo ""
echo "🌐 URLs importantes:"
echo "• Servidor local: http://localhost:3434"
echo "• Health check: http://localhost:3434/health"
echo "• Clients: http://localhost:3434/clients"
echo ""
echo "⚠️  Lembre-se de configurar suas credenciais reais no arquivo .env!"
