
import Navigation from '@/components/navigation'
import Statistics from '@/components/statistics'
import Companies from '@/components/companies'
import PricingPlans from '@/components/pricing-plans'
import Mentor from '@/components/mentor'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050811] font-sans text-gray-100 selection:bg-ai-cyan/30">
      <NeuralNetworkBackground />

      <div className="pointer-events-none fixed left-1/2 top-0 z-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-ai-cyan/[0.04] blur-[160px]" />
      <div className="pointer-events-none fixed left-1/2 top-[20%] z-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-ai-purple/[0.03] blur-[150px]" />

      <div className="relative z-10">
        <Navigation />

        {/* 1. PRICING PLANS: FIRST SECTION AFTER NAVBAR */}
        <PricingPlans />

        {/* 2. HERO: BELOW THE PRICING CARDS */}
        <section className="relative z-10 mx-auto flex min-h-[65vh] max-w-5xl flex-col items-center justify-center px-4 pt-28 pb-24 text-center sm:pb-28">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-ai-cyan" />
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-300">
                Next Cohort Starting Soon
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Become an Expert in
              <br />
              <span className="bg-gradient-to-r from-ai-cyan to-ai-purple bg-clip-text text-transparent">
                Data Science, AI &amp; ML
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
              Master Data Science, Artificial Intelligence, Machine Learning,
              and modern MLOps. Build real-world data-driven solutions and
              intelligent systems with industry-ready skills and engineering
              standards.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
              <Link
                href="/career-roadmap"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ai-cyan to-ai-purple px-8 py-4 text-center font-bold text-gray-950 shadow-[0_4px_25px_rgba(0,210,255,0.25)] transition-all hover:opacity-90 sm:w-auto"
              >
                Download Syllabus
                <ChevronRight size={16} />
              </Link>

              <Link
                href="/career-roadmap"
                className="block w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
              >
                Book a Free Career Session
              </Link>
            </div>

            <div className="flex justify-center pt-1">
              <Link
                href="/register"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-ai-cyan/30 bg-white/5 px-8 py-4 text-center font-bold text-ai-cyan shadow-[0_4px_20px_rgba(0,210,255,0.08)] backdrop-blur-md transition-all hover:border-ai-cyan/60 hover:bg-ai-cyan/10 sm:w-auto"
              >
                Register for Training &amp; Internship
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. STATISTICS */}
        <Statistics />

        {/* 4. COMPANY MARQUEE */}
        <section className="relative z-10 border-y border-white/5 bg-black/40 py-16 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="mb-8 text-xs font-bold uppercase tracking-widest text-gray-400">
              Our Alumni Work At Leading Enterprise Tech Companies
            </p>
            <Companies />
          </div>
        </section>

        {/* 5. MENTORS */}
        <Mentor />

        {/* 6. TESTIMONIALS */}
        <Testimonials />

        {/* 7. FAQ */}
        <FAQ />

        {/* 8. FOOTER */}
        <Footer />
      </div>
    </div>
  )
}
