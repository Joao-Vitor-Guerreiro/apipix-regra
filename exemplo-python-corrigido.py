# Exemplo de como o código Python da oferta deveria tratar a resposta

def process_api_response_correctly(data):
    """
    Processa a resposta da API corretamente, diferenciando código PIX de imagem base64
    """
    
    # Se há debug.original_response.data, usar essa estrutura
    if 'debug' in data and 'original_response' in data['debug']:
        original_data = data['debug']['original_response'].get('data', {})
        if original_data:
            response_data = original_data
            print("✅ Usando dados de debug.original_response.data")
    else:
        response_data = data.get('data', data)
    
    # Buscar o código PIX real e imagem QR code usando os campos corretos da API
    qr_code = None
    qr_code_image = None
    
    # Campo principal: pix_code (código PIX real)
    pix_code_value = response_data.get('pix_code')
    if pix_code_value:
        if pix_code_value.startswith('000201') or pix_code_value.startswith('00020126') or 'br.gov.bcb.pix' in pix_code_value:
            # É um código PIX real
            qr_code = pix_code_value
            print("✅ Código PIX real encontrado no campo 'pix_code'")
        elif pix_code_value.startswith('data:image/'):
            # Se pix_code é uma imagem base64, usar como QR code image
            qr_code_image = pix_code_value
            print("✅ Imagem QR code encontrada no campo 'pix_code'")
        else:
            print(f"⚠️ Campo pix_code com formato desconhecido: {pix_code_value[:50]}...")
    
    # Campo alternativo: pix_qr_code (imagem QR code)
    pix_qr_code_value = response_data.get('pix_qr_code')
    if pix_qr_code_value:
        if pix_qr_code_value.startswith('data:image/'):
            qr_code_image = pix_qr_code_value
            print("✅ Imagem QR code encontrada no campo 'pix_qr_code'")
        elif pix_qr_code_value.startswith('000201') or pix_qr_code_value.startswith('00020126') or 'br.gov.bcb.pix' in pix_qr_code_value:
            # Se pix_qr_code é um código PIX real, usar como código PIX
            qr_code = pix_qr_code_value
            print("✅ Código PIX real encontrado no campo 'pix_qr_code'")
        else:
            print(f"⚠️ Campo pix_qr_code com formato desconhecido: {pix_qr_code_value[:50]}...")
    
    # Se não encontrou nem código nem imagem, retornar erro
    if not qr_code and not qr_code_image:
        print("❌ API não retornou código PIX nem imagem válida")
        return {
            'success': False,
            'error': 'API não retornou código PIX nem imagem válida',
            'raw_response': data
        }
    
    print(f"✅ Transação processada - Código PIX: {qr_code[:50] if qr_code else 'N/A'}...")
    
    # Generate QR code image if needed (apenas se temos código PIX real e não temos imagem da API)
    if qr_code and not qr_code_image:
        print(f"🔧 Tentando gerar QR code image para código PIX real: {qr_code[:50]}...")
        try:
            import qrcode
            import io
            import base64
            
            qr = qrcode.QRCode(version=1, box_size=10, border=5)
            qr.add_data(qr_code)
            qr.make(fit=True)
            
            img = qr.make_image(fill_color="black", back_color="white")
            buffered = io.BytesIO()
            img.save(buffered, format="PNG")
            img_str = base64.b64encode(buffered.getvalue()).decode()
            
            qr_code_image = f"data:image/png;base64,{img_str}"
            print(f"✅ QR Code image gerado localmente - tamanho: {len(img_str)} caracteres")
            
        except Exception as qr_error:
            print(f"❌ Erro ao gerar QR code image: {qr_error}")
            # Se falhou ao gerar QR code localmente, usar API externa como fallback
            print("🔄 Usando API externa como fallback para QR code")
            qr_code_image = f"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data={qr_code}"
    elif qr_code_image:
        print("✅ Usando imagem QR code fornecida pela API")
    else:
        print("⚠️ Nenhum código PIX nem imagem encontrados na resposta da API")
    
    return {
        'success': True,
        'transaction_id': response_data.get('transaction_id') or response_data.get('id'),
        'pixCode': qr_code,  # Sempre código PIX real
        'pixQrCode': qr_code_image,  # Sempre imagem QR code
        'qr_code': qr_code,  # Código PIX real
        'qr_code_image': qr_code_image,  # Imagem base64
        'gateway_id': response_data.get('transaction_id') or response_data.get('id'),
        'order_id': response_data.get('transaction_id') or response_data.get('id'),
        'amount': response_data.get('amount'),
        'status': data.get('status', 'pending'),
        'expires_at': data.get('expires_at'),
        'provider': 'brazapay-4mpagamentos',
        'raw_response': data
    }


# Exemplo de uso com a resposta que está causando problema
exemplo_resposta_problema = {
    "id": "4M764707",
    "status": "waiting_payment",
    "amount": 138,
    "pix_code": "00020101021226840014br.gov.bcb.pix2562qrcode.owempay.com.br/pix/1d4bd183-2b4b-4e11-9a49-4224d9b238035204000053039865802BR5915TRANSACAOSEGURA6008SaoPaulo62070503***63047239",
    "pix_qr_code": "",
    "customer_name": "CLIENTE SEM NOME",
    "customer_email": "clientesemnome3033@yahoo.com",
    "description": "Consulta CPF - CLIENTE SEM NOME"
}

# Processar a resposta
resultado = process_api_response_correctly(exemplo_resposta_problema)
print("\n=== RESULTADO FINAL ===")
print(f"Success: {resultado['success']}")
print(f"PIX Code: {resultado.get('pixCode', 'N/A')[:50]}...")
print(f"QR Image: {resultado.get('pixQrCode', 'N/A')[:50]}...")










