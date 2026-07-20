import { Reveal } from "@/components/reveal"
import { Sparkles, ThumbsUp, MapPin, Award } from "lucide-react"

const stats = [
  { icon: Sparkles, value: "+678", label: "Serviços realizados com a qualidade HIPER CLEAN " },
  { icon: ThumbsUp, value: "98%", label: "Nossos clientes indicam" },
  { icon: MapPin, value: "Toda grande SP", label: "Atendimento onde você precisar, do comercial ao residêncial" },
  { icon: Award, value: "Produtos Certificados", label: "Seguros para crianças, pets e diferentes tecidos" },
]

export function Stats() {
  return (
    <section id="stats" className="relative border-y border-border bg-card/40 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 90}
            className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-lg shadow-black/20"
          >
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/15">
              <stat.icon className="size-6 text-primary" />
            </div>
            <p className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
