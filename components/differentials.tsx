import { Home, SprayCan, Droplets, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const items = [
  { icon: Home, title: "Atendimento em residências, empresas e locais comerciais", desc: "sua rotina dita o local, nossa equipe garante a entrega. Atendimento onde e quando você precisar." },
  { icon: SprayCan, title: "Produtos seguros e certificados", desc: "Utilizamos produtos profissionais de alta qualidade, seguros para crianças, pets e diferentes tipos de tecidos." },
  { icon: Droplets, title: "Impermeabilização especializada", desc: "Proteção que repele líquidos e prolonga a vida útil dos estofados." },
  { icon: ShieldCheck, title: "Garantia de qualidade", desc: "Cada atendimento passa por uma revisão criteriosa para garantir um resultado que supere suas expectativas." },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
    Por que escolher a HIPER CLEAN
  </span>

  <h2 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
    Cuidamos do que é importante para você
  </h2>

  <p className="mt-4 text-pretty text-muted-foreground">
    Unimos tecnologia, produtos profissionais e atendimento especializado para entregar um serviço de excelência em cada atendimento.
  </p>
</Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="group glass rounded-2xl p-7 text-center shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="size-7" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
