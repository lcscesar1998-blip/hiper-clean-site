import { Phone, AtSign, MapPin, MessageCircle, Mail } from "lucide-react"
import { Logo } from "@/components/logo"
import { site, whatsappUrl } from "@/lib/site"

const serviceLinks = [
  "Higienização de Sofás",
  "Higienização de Colchões",
  "Impermeabilização",
  "Estética Automotiva",
  "PPF (Paint Protection Film)",
  "Polimento Técnico",
  "Cristalização de Pintura",
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
      {/* CTA band */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-px overflow-hidden rounded-3xl bg-primary p-8 text-center shadow-2xl shadow-primary/20 sm:p-12 lg:-translate-y-16">
          <h2 className="text-balance font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">
            Pronto para renovar seus estofados?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-primary-foreground/90">
            Fale conosco agora e receba um orçamento gratuito e sem compromisso.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="size-4 text-primary" />
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-5 lg:gap-8 lg:px-8 lg:pt-0">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm font-serif text-lg italic text-silver">
            &ldquo;{site.slogan}&rdquo;
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
  Especialistas em higienização e impermeabilização de estofados, estética automotiva e
  aplicação de PPF. Trabalhamos com tecnologia, produtos profissionais e atendimento
  personalizado para entregar resultados que realmente fazem a diferença.
</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Serviços</h3>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((service) => (
              <li key={service}>
                <a href="#servicos" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
    Atendimento
  </h3>

  <ul className="mt-5 space-y-4">
    <li className="text-sm text-muted-foreground">
      Segunda a domingo
    </li>

    <li className="text-sm text-muted-foreground">
      Atendimento em domicílio
    </li>

    <li className="text-sm text-muted-foreground">
      Residências
    </li>

    <li className="text-sm text-muted-foreground">
      Empresas
    </li>

    <li className="text-sm text-muted-foreground">
      Condomínios
    </li>

    <li className="text-sm text-muted-foreground">
      São Paulo e região
    </li>
  </ul>
</div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contato</h3>
          <ul className="mt-5 space-y-4">
            {site.phones.map((phone) => (
              <li key={phone.raw}>
                <a
                  href={`https://wa.me/${phone.raw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" />
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <AtSign className="size-4 text-primary" />
                {site.instagram}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {site.city}
            </li>
            <li>
  <a
    href="mailto:oficial.hiperclean@gmail.com"
    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
  >
    <Mail className="size-4 text-primary" />
    oficial.hiperclean@gmail.com
  </a>
</li>
          </ul>
        </div>
      </div>
      

      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
