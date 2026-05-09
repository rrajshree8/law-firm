import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Services from '@/components/Services'
import About from '@/components/About'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
