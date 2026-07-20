import Image from "next/image"
import { MessageCircle, ShieldCheck, Star, Sparkles, ChevronDown } from "lucide-react"
import { whatsappUrl, site } from "@/lib/site"

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* full-screen sofa background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-sofa-premium.png"
          alt="Sofá moderno de tecido claro higienizado pela HIPER CLEAN em sala sofisticada"
          fill
          priority
          className="animate-hero-zoom object-cover"
        />
        {/* dark overlays for text contrast */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 size-[500px] rounded-full bg-primary/20 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 size-[400px] rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-medium text-silver backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            Especialistas em Higiênização Profissional • {site.city}
          </div>

          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Especialistas em <span className="text-primary">Higiênização</span> e{" "}
            <span className="text-primary">Impermeabilização</span> de Estofados
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Renovamos, protegemos e prolongamos a vida útil dos seus estofados.
          </p>

          <p className="mt-3 font-serif text-xl italic text-silver">
            &ldquo;{site.slogan}&rdquo;
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105"
            >
              <MessageCircle className="size-5" />
              Solicitar orçamento pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white/5 px-8 py-4 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/10"
            >
              Ver nossos serviços
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Atendimento profissional e personalizado Compromisso com qualidade e satisfação</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-primary" />
              Produtos profissionais seguros para sua família e seus pets
            </div>
          </div>
        </div>
      </div>

      <a
        href="#diferenciais"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted-foreground lg:block"
      >
        <ChevronDown className="size-7" />
      </a>
    </section>
  )
}
