# Guia: Brazapay + 4mpagamentos Controller

## 📋 Visão Geral

Este controlador funciona **exatamente igual** ao `iexperience.ts`, mas usa dois gateways diferentes:
- **4mpagamentos**: Para o cliente (70% das vendas)
- **Brazapay**: Para Paulo (30% das vendas)

## 🔧 Configuração

### 1. Credenciais do Paulo (Brazapay) - ⚠️ CONFIGURAR

#### Opção A: Variáveis de Ambiente (RECOMENDADO)
No arquivo `src/models/api.ts`:
```typescript
export const credentials = {
  // BlackCat (atual)
  secret: "sk_3vbubUgktoXLnTUWVcWixEig2oNelGYXEaiC-S9et8yDhUGl",
  public: "pk_kFHKtjIthC9PhGDuInP_GAoxqSzY1LKkeXxj9YCmvMgJPHOH",
  
  // Brazapay (Paulo) - Variáveis de ambiente
  brazapaySecret: process.env.BRAZAPAY_SECRET || "sk_live_SUA_CHAVE_SECRETA_AQUI",
  brazapayPublic: process.env.BRAZAPAY_PUBLIC || "pk_live_SUA_CHAVE_PUBLICA_AQUI",
};
```

#### Configuração no EasyPanel (Produção)
1. Acesse o painel do EasyPanel
2. Vá em **Configurações** → **Variáveis de Ambiente**
3. Adicione:
   - `BRAZAPAY_SECRET` = `sua_chave_secreta_brazapay_aqui`
   - `BRAZAPAY_PUBLIC` = `sua_chave_publica_brazapay_aqui`

#### Opção B: Edição Manual (Desenvolvimento)
Se preferir editar diretamente no código, substitua os placeholders:
```typescript
// Brazapay (Paulo) - CONFIGURAR SUAS CREDENCIAIS
brazapaySecret: "sua_chave_secreta_brazapay_aqui",
brazapayPublic: "sua_chave_publica_brazapay_aqui",
```

### 2. Credenciais do Cliente (4mpagamentos) - ⚠️ CONFIGURAR
O cliente envia no payload:
```json
{
  "credentials": {
    "token": "SEU_TOKEN_4MPAGAMENTOS",
    "publicKey": "não_necessário_4mpagamentos",
    "name": "Nome do Cliente"
  }
}
```

## 🚀 Como Usar

### Endpoint
```
POST /brazapay-4mpagamentos
```

### Payload de Exemplo
```json
{
  "credentials": {
    "token": "SEU_TOKEN_4MPAGAMENTOS",
    "publicKey": "não_necessário_4mpagamentos",
    "name": "Cliente Exemplo",
    "offer": {
      "id": "oferta-exemplo",
      "name": "Oferta Exemplo"
    }
  },
  "amount": 100.00,
  "product": {
    "title": "Produto Exemplo"
  },
  "customer": {
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "11999999999",
    "document": {
      "type": "CPF",
      "number": "12345678901"
    }
  }
}
```

## 🔄 Regra 7x3

### Ciclo de 11 Vendas
- **Vendas 1-7 (70%)**: Cliente → **4mpagamentos**
- **Vendas 8-10 (30%)**: Paulo → **Brazapay** (se `useTax = true`)
- **Venda 11**: Cliente → **4mpagamentos**

### Controle via `useTax`
- `useTax = true`: Regra 7x3 ativa
- `useTax = false`: 100% para o cliente (4mpagamentos)

## 📊 Logs e Debug

O controlador gera logs detalhados:
```
🔍 Payload enviado para 4MPAGAMENTOS: {...}
🔍 Headers enviados: {...}
🔍 Status da resposta: 200 OK
🔍 Resposta da API 4MPAGAMENTOS: {...}
🔁 Requisição #5 do cliente "Cliente Exemplo" | Valor: R$100 | Gateway usado: 4MPAGAMENTOS | Enviado para: CLIENTE (4MPAGAMENTOS)
```

## 🔗 URLs dos Gateways

### 4mpagamentos (Cliente) - ✅ CONFIGURADO
- **URL**: `https://app.4mpagamentos.com/api/v1/payments`
- **Auth**: Bearer Token
- **Valores**: Em centavos (R$ 100,00 = 10000)

### Brazapay (Paulo) - ✅ CONFIGURADO
- **URL**: `https://api.brazapay.co/v1/transactions`
- **Auth**: Basic Auth com `secret:x` (formato específico)
- **Valores**: Em reais (R$ 100,00 = 100.00)

## ⚡ Vantagens

1. **Simplicidade**: Usa apenas `token` e `publicKey` existentes
2. **Compatibilidade**: Funciona igual ao `iexperience.ts`
3. **Flexibilidade**: Fácil de alternar entre gateways
4. **Regra 7x3**: Mantém a lógica de distribuição
5. **Logs**: Debug completo para troubleshooting

## 🆚 Comparação com iexperience.ts

| Aspecto | iexperience.ts | brazapay-4mpagamentos.ts |
|---------|----------------|---------------------------|
| Gateway Cliente | BlackCat | 4mpagamentos |
| Gateway Paulo | BlackCat | Brazapay |
| Credenciais | `publicKey:secret` | `publicKey:token` |
| Regra 7x3 | ✅ | ✅ |
| Logs | ✅ | ✅ |
| Criação Automática | ✅ | ✅ |

## 🎯 Próximos Passos

1. **Configurar credenciais** do Brazapay no `api.ts`
2. **Configurar credenciais** do 4mpagamentos no checkout
3. **Testar endpoint** com dados reais
4. **Ajustar URLs** dos gateways se necessário
5. **Configurar webhooks** se necessário

## 🔧 Troubleshooting

### Erro de Autenticação
- Verificar se as credenciais estão corretas
- Confirmar formato Basic Auth: `publicKey:secretKey`

### Erro de URL
- Verificar se as URLs dos gateways estão corretas
- Testar conectividade com os gateways

### Erro de Payload
- Verificar se o formato do payload está correto
- Confirmar se os campos obrigatórios estão preenchidos