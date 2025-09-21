export const credentials = {
  // BlackCat (atual)
  secret: "sk_3vbubUgktoXLnTUWVcWixEig2oNelGYXEaiC-S9et8yDhUGl",
  public: "pk_kFHKtjIthC9PhGDuInP_GAoxqSzY1LKkeXxj9YCmvMgJPHOH",
  
  // Brazapay (Paulo) - Variáveis de ambiente
  brazapaySecret: process.env.BRAZAPAY_SECRET || "sk_live_SUA_CHAVE_SECRETA_AQUI",
  brazapayPublic: process.env.BRAZAPAY_PUBLIC || "pk_live_SUA_CHAVE_PUBLICA_AQUI",
};
