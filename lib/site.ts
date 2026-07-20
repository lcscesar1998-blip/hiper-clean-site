export const site = {
  name: "HIPER CLEAN",
  slogan: "Cuidando do que é importante para você.",
  city: "São Paulo - SP",
  instagram: "@hiperclean.oficial",
  instagramUrl: "https://instagram.com/hiperclean.oficial",
  phones: [
    { label: "(11) 97581-0207", raw: "5511975810207" },
    { label: "(11) 95683-6256", raw: "5511956836256" },
  ],
}

export const whatsappUrl = (message?: string) => {
  const text = encodeURIComponent(
    message ?? "Olá! Gostaria de solicitar um orçamento com a HIPER CLEAN.",
  )
  return `https://wa.me/${site.phones[0].raw}?text=${text}`
}
