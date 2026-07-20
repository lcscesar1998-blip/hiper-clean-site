"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Quanto tempo leva para o estofado secar?",
    a: "O tempo de secagem varia conforme o tipo de tecido, ventilação e clima. Em média, a secagem ocorre entre 6 e 12 horas.",
  },
  {
    q: "Os produtos são seguros para crianças e pets?",
    a: "Sim. Trabalhamos com produtos profissionais e seguros quando utilizados corretamente. Após a secagem, o ambiente pode ser utilizado normalmente por toda a família.",
  },
  {
    q: "A impermeabilização realmente funciona?",
    a: "Sim. A impermeabilização cria uma camada protetora que dificulta a absorção de líquidos, ajudando a evitar manchas e facilitando a limpeza do estofado no dia a dia.",
  },
  {
    q: "Vocês atendem residências e empresas?",
    a: "Sim. Atendemos residências, condomínios, escritórios, clínicas, hotéis, comércios e diversos outros ambientes, sempre com equipamentos profissionais e atendimento especializado.",
  },
  {
    q: "Como funciona a garantia dos serviços?",
    a: "Todos os serviços possuem garantia de 5 dias corridos para qualquer inconformidade relacionada à execução do serviço. Essa garantia não cobre novas manchas causadas após a conclusão do atendimento.",
  },
  {
    q: "Como funciona a Garantia Estendida HIPER CLEAN?",
    a: "O cliente pode contratar nossa Garantia Estendida investindo apenas 30% do valor do serviço. Durante o período de vigência de 30 dias, caso surjam novas manchas, terá direito a 50% de desconto em uma nova higienização do mesmo estofado, além de atendimento prioritário.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Aceitamos PIX, cartões de crédito, débito e outras formas de pagamento que podem ser combinadas no momento do orçamento.",
  },
  {
    q: "Como solicitar um orçamento?",
    a: "É simples e gratuito. Basta entrar em contato pelo WhatsApp, enviar algumas fotos do estofado ou veículo e nossa equipe retornará rapidamente com um orçamento sem compromisso.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">FAQ</span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços de higienização e estética.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={i * 50}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/20">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-foreground">{faq.q}</span>
                    <Plus
                      className={cn(
                        "size-5 shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
