import { Award, Clock, Leaf, HeartHandshake, ThumbsUp, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reasons = [
  { icon: Award, title: "Tradição e Experiência", desc: "Anos de mercado com profissionais treinados e apaixonados pelo que fazem." },
  { icon: Leaf, title: "Produtos Certificados", desc: "Utilizamos produtos biodegradáveis, seguros para crianças, pets e alérgicos." },
  { icon: Clock, title: "Secagem Rápida", desc: "Equipamentos de extração de alta potência que reduzem o tempo de secagem." },
  { icon: HeartHandshake, title: "Atendimento Premium", desc: "Cuidado personalizado do primeiro contato até a entrega final do serviço." },
  { icon: ShieldCheck, title: "Garantia de Qualidade", desc: "Comprometimento total com o resultado e a sua satisfação." },
  { icon: ThumbsUp, title: "Preço Justo", desc: "Orçamento transparente, sem surpresas e com excelente custo-benefício." },
]

export function WhyUs() {
  return (
    <section id="por-que" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-64 w-2/3 rounded-full bg-primary/10 blur-[130px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Por que escolher</span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Por que escolher a HIPER CLEAN
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Mais do que limpeza, entregamos confiança e tranquilidade para você e sua família.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={(i % 3) * 80}
              className="glass rounded-2xl p-7 shadow-xl shadow-black/20"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <reason.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
