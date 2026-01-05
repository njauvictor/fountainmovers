import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import GallerySection from "@/components/gallery"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Content } from "@/components/content"
import { HowItWorks } from "@/components/how-it-works"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <GallerySection />
      <Content />
      <HowItWorks />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
