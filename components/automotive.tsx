import Image from "next/image"
import { Car, Gem, Sparkles, ShieldCheck, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { whatsappUrl } from "@/lib/site"

const items = [
  {
    icon: Car,
    title: "Higienização Interna",
    desc: "Limpeza completa de bancos, forros, carpetes, painéis e acabamento interno.",
  },
  {
    icon: ShieldCheck,
    title: "Hidratação de Couro",
    desc: "Limpeza e hidratação profissional que preservam a maciez e aumenta a durabilidade do couro.",
  },
  {
    icon: Sparkles,
    title: "Polimento Técnico",
    desc: "Correção de pequenos riscos e recuperação do brilho original da pintura.",
  },
  {
    icon: Gem,
    title: "Cristalização e Vitrificação",
    desc: "Proteção da pintura com brilho intenso e maior resistência contra agentes externos.",
  },
  {
    icon: ShieldCheck,
    title: "PPF - Paint Protection Film",
    desc: "Película de proteção transparente que ajuda a preservar a pintura contra riscos, impactos leves e desgaste do dia a dia.",
  },
]

export function Automotive() {
  return (
    <section id="automotiva" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute right-0 top-1/2 size-[400px] -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Estética Automotiva</span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
  Estética Automotiva Premium
</h2>
            <p className="mt-4 text-pretty text-muted-foreground">
  Muito além da limpeza, entregamos proteção, brilho e valorização para o seu veículo.
  Trabalhamos com técnicas profissionais e produtos premium para oferecer um acabamento impecável.
</p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 90}
                className="rounded-2xl border border-border bg-card p-5 shadow-lg shadow-black/20"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <item.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <a
              href={whatsappUrl("Olá! Quero um orçamento de estética automotiva com a HIPER CLEAN.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              <MessageCircle className="size-4" />
              Orçamento Automotivo
            </a>
          </Reveal>
        </div>

        <div className="grid gap-5">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/40">
              <Image
                src="/images/hero-car.png"
                alt="Carro premium após estética automotiva HIPER CLEAN"
                width={640}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/40">
              <Image
                src="/images/leather-seat.png"
                alt="Banco de couro higienizado pela HIPER CLEAN"
                width={640}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
