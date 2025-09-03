import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Realisations from '@/components/Realisations'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Realisations />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
