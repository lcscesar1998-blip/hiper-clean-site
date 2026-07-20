import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { BeforeAfter } from "@/components/before-after"
import { WhyUs } from "@/components/why-us"
import { ProtectionPlan } from "@/components/protection-plan"
import { Process } from "@/components/process"
import { Impermeabilization } from "@/components/impermeabilization"
import { Automotive } from "@/components/automotive"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <BeforeAfter />
        <WhyUs />
        <ProtectionPlan />
        <Process />
        <Impermeabilization />
        <Automotive />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}

