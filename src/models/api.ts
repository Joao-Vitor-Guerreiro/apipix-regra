export const credentials = {
  // BlackCat (atual)
  secret: "sk_3vbubUgktoXLnTUWVcWixEig2oNelGYXEaiC-S9et8yDhUGl",
  public: "pk_kFHKtjIthC9PhGDuInP_GAoxqSzY1LKkeXxj9YCmvMgJPHOH",

  // Admin (Validar transações)
  adminSecret: "sk_byNAFtOElg-rMXBdsL10d8MKKaIgpJAK2U-hK-JIPqaPEYm1",
  adminPublic: "pk_c6TU_G7pIW7Rbi175Zb8rHG3AWUOpQTfp4fkBcnNo-cJVknj",

  // Brazapay (Paulo)
  brazapaySecret: process.env.BRAZAPAY_SECRET || "sk_live_SUA_CHAVE_SECRETA_AQUI",
  brazapayPublic: process.env.BRAZAPAY_PUBLIC || "pk_live_SUA_CHAVE_PUBLICA_AQUI",
};