import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import BannerSection from '@/components/BannerSection'
import Statistics from '@/components/statistics'
import Programs from '@/components/programs'
import Technologies from '@/components/technologies'
import Mentor from '@/components/mentor'
import Testimonials from '@/components/testimonials'
import Workflow from '@/components/workflow'
import Companies from '@/components/companies'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent" style={{ background: "transparent" }}>
      <Navigation />
      <Hero />
      <BannerSection />
      
      {/* Scroll Targets */}
      <section id="statistics"><Statistics /></section>
      
      <section id="programs"><Programs /></section>
      
      <section id="curriculum"><Technologies /></section>
      
      <section id="mentors"><Mentor /></section>
      
      <section id="testimonials"><Testimonials /></section>
      
      <Workflow />
      <Companies />

      <section id="contact">
        <FAQ />
        <CTA />
      </section>

      <Footer />
    </main>
  )
}