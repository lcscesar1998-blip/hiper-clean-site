import { MessageCircle } from "lucide-react"
import { whatsappUrl } from "@/lib/site"

export function WhatsappFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/40 transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-40" />
      <MessageCircle className="relative size-7" />
    </a>
  )
}
