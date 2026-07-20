import { ShieldCheck, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { whatsappUrl } from "@/lib/site"

export function ProtectionPlan() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-10 shadow-2xl shadow-primary/10">

            <div className="mx-auto max-w-3xl text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>

              <span className="mt-6 block text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Plano Proteção HIPER CLEAN
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold">
                Proteja seu investimento por muito mais tempo.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Com um investimento adicional correspondente a apenas
                <strong className="text-primary"> 30% do valor do serviço</strong>,
                você garante ainda mais tranquilidade após a higienização.
              </p>

            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-border bg-card p-6">
                ✅ Atendimento prioritário
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                ✅ 50% de desconto em uma nova higienização durante a vigência do plano
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                ✅ Mais tranquilidade para manter seus estofados sempre impecáveis
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                ✅ Exclusivo para clientes HIPER CLEAN
              </div>

            </div>

            <div className="mt-12 text-center">

              <a
                href={whatsappUrl("Olá! Gostaria de conhecer o Plano Proteção HIPER CLEAN.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Quero conhecer o Plano
              </a>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}