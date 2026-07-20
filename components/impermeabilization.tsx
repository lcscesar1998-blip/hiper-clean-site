import Image from "next/image"
import { Droplets, Check, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { whatsappUrl } from "@/lib/site"

const benefits = [
  "Repele líquidos, café, vinho e sujeira no dia a dia",
  "Facilita a limpeza e prolonga a vida útil do estofado",
  "Camada invisível que não altera a textura do tecido",
  "Proteção segura para famílias com crianças e pets",
]

export function Impermeabilization() {
  return (
    <section id="impermeabilizacao" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-black/30 sm:p-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold text-primary">
                <Droplets className="size-4" />
                Impermeabilização
              </div>
              <h2 className="mt-5 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                Proteção que preserva seus estofados
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                Nossa impermeabilização cria uma barreira protetora contra líquidos e manchas,
                mantendo seus móveis bonitos e higiênicos por muito mais tempo.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, i) => (
                <Reveal as="li" key={benefit} delay={i * 70} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{benefit}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200}>
              <a
                href={whatsappUrl("Olá! Quero impermeabilizar meus estofados com a HIPER CLEAN.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
              >
                <MessageCircle className="size-4" />
                Solicitar Impermeabilização
              </a>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/40">
              <Image
                src="/images/impermeabilizacao.png"
                alt="Gotas de água repelidas por tecido impermeabilizado"
                width={620}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
