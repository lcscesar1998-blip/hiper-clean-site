import { Reveal } from "@/components/reveal"
import { Search, SprayCan, Droplets, Wind, ShieldCheck, BadgeCheck } from "lucide-react"

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Avaliação",
    desc: "Analisamos o tipo de tecido, manchas e nível de sujeira para definir o melhor tratamento.",
  },
  {
    icon: SprayCan,
    num: "02",
    title: "Pré-tratamento",
    desc: "Aplicação de produtos específicos para soltar sujeira, ácaros e manchas profundas.",
  },
  {
    icon: Droplets,
    num: "03",
    title: "Higienização",
    desc: "Limpeza profunda com produtos profissionais que eliminam bactérias e odores.",
  },
  {
    icon: Wind,
    num: "04",
    title: "Extração e secagem",
    desc: "Equipamento profissional que remove a sujeira e a umidade em excesso, acelerando a secagem.",
  },
  {
    icon: ShieldCheck,
    num: "05",
    title: "Impermeabilização",
    desc: "Camada protetora opcional que repele líquidos e facilita a limpeza no dia a dia.",
  },
  {
    icon: BadgeCheck,
    num: "06",
    title: "Revisão final",
    desc: "Inspeção de qualidade detalhada para garantir um resultado impecável e a sua satisfação.",
  },
]

export function Process() {
  return (
    <section id="processo" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Como trabalhamos</span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            COMO TRABALHAMOS
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Veja como funciona nosso atendimento em 6 etapas, desde a avaliação do estofado, até a entrega do serviço finalizado, garantindo qualidade e satisfação.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 80}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-lg shadow-black/20 transition-colors hover:border-primary/40"
            >
              <span className="absolute right-5 top-4 font-serif text-5xl font-bold text-white/5 transition-colors group-hover:text-primary/15">
                {step.num}
              </span>
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15">
                <step.icon className="size-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
