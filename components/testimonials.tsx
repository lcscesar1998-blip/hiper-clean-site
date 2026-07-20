import { Star, Quote } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reviews = [
  {
    name: "Marina Alves",
    role: "Moema, SP",
    text: "Meu sofá parecia novo depois da higienização! Atendimento impecável e pontual. Recomendo de olhos fechados.",
    initials: "MA",
  },
  {
    name: "Rafael Souza",
    role: "Pinheiros, SP",
    text: "Fiz a estética automotiva completa e o carro ficou impecável. O polimento e a cristalização surpreenderam.",
    initials: "RS",
  },
  {
    name: "Juliana Costa",
    role: "Tatuapé, SP",
    text: "Higienizaram o colchão e as poltronas. Minha filha é alérgica e a diferença foi enorme. Empresa séria e cuidadosa.",
    initials: "JC",
  },
  {
    name: "André Martins",
    role: "Santana, SP",
    text: "Profissionais muito educados e caprichosos. A impermeabilização do sofá valeu cada centavo. Virei cliente fiel.",
    initials: "AM",
  },
  {
    name: "Camila Ribeiro",
    role: "Vila Mariana, SP",
    text: "Serviço premium de verdade. Explicaram todo o processo e o resultado ficou perfeito. Nota mil!",
    initials: "CR",
  },
  {
    name: "Bruno Ferreira",
    role: "Morumbi, SP",
    text: "Bancos de couro do carro renovados! Ficaram limpos e hidratados. Confiança total na HIPER CLEAN.",
    initials: "BF",
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Avaliações</span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            A confiança de quem já viveu a experiência HIPER CLEAN.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={(i % 3) * 80}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-xl shadow-black/20"
            >
              <Quote className="absolute right-6 top-6 size-8 text-primary/20" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
