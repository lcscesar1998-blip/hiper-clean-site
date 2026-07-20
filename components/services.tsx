import { Sofa, BedDouble, Armchair, Sparkles, Car, ShieldCheck, Droplets, Wind, Gem } from "lucide-react"
import { Reveal } from "@/components/reveal"

const services = [
  { icon: Sofa, title: "Higienização de Sofás", desc: "Limpeza profunda que remove ácaros, manchas e odores dos seus estofados." },
  { icon: BedDouble, title: "Higienização de Colchões", desc: "Elimine ácaros e bactérias para um sono mais saudável e tranquilo." },
  { icon: Armchair, title: "Higienização de Poltronas", desc: "Renovação completa de poltronas com secagem rápida e segura." },
  { icon: Armchair, title: "Higienização de Cadeiras", desc: "Cadeiras de escritório e jantar como novas, sem manchas ou odores." },
  { icon: Wind, title: "Higienização de Carpetes", desc: "Extração profissional que devolve a cor e a maciez dos carpetes." },
  { icon: Wind, title: "Higienização de Tapetes", desc: "Cuidado especializado para tapetes de todos os tipos e fibras." },
  { icon: Droplets, title: "Impermeabilização de Estofados", desc: "Camada protetora que repele líquidos e facilita a limpeza do dia a dia." },
  { icon: Car, title: "Estética Automotiva", desc: "Detalhamento completo interno e externo com padrão premium." },
  { icon: ShieldCheck, title: "Higienização de Bancos de Couro", desc: "Limpeza e hidratação que preservam e valorizam o couro." },
  { icon: Sparkles, title: "Polimento Técnico", desc: "Correção de pintura que remove riscos e realça o brilho original." },
  { icon: Gem, title: "Cristalização de Pintura", desc: "Proteção e brilho intenso com efeito espelhado de longa duração." },
{
  icon: ShieldCheck,
  title: "PPF - Película de Proteção de Pintura",
  desc: "Aplicação de película transparente de alta performance que protege a pintura contra riscos, impactos leves, intempéries e desgaste do dia a dia.",
},
]

export function Services() {
  return (
    <section id="servicos" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Nossos Serviços</span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Soluções completas de higienização e estética, proteção e longividade
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Do sofá da sala ao seu carro, afinal cada detalhe importa.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={(i % 3) * 80}
              className="group rounded-2xl border border-border bg-card p-6 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-primary/10"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
