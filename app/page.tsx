import React from 'react';
import Navigation from '@/components/navigation';
import Statistics from '@/components/statistics';
import Companies from '@/components/companies';
import Programs from '@/components/programs';      
import Mentor from '@/components/mentor';          
import Testimonials from '@/components/testimonials'; 
import FAQ from '@/components/faq';                
import Footer from '@/components/footer';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050811] text-gray-100 selection:bg-ai-cyan/30 overflow-x-hidden font-sans relative">
      
      {/* BACKGROUND INTERACTIVE CANVAS LAYER */}
      <NeuralNetworkBackground />

      {/* Atmospheric Soft Space Gradients */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-ai-cyan/[0.04] rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ai-purple/[0.03] rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Main Relative Layout Wrapper */}
      <div className="relative z-10">
        
        {/* Global Navbar Header */}
        <Navigation />

        {/* 1. HERO MAIN AREA - FULLY CENTERED */}
        <section className="pt-48 pb-32 px-4 max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center justify-center min-h-[75vh]">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-ai-cyan animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-gray-300 uppercase">Next Cohort Starting Soon</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Become an Expert in <br />
              <span className="bg-gradient-to-r from-ai-cyan to-ai-purple bg-clip-text text-transparent">
                Data Science, AI & ML
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Master Data Science, Artificial Intelligence, Machine Learning, and modern MLOps. Build real-world data-driven solutions and intelligent systems with industry-ready skills and engineering standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center">
              <Link 
                href="/career-roadmap"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-ai-cyan to-ai-purple text-gray-950 hover:opacity-90 transition-all shadow-[0_4px_25px_rgba(0,210,255,0.25)] text-center cursor-pointer flex items-center justify-center gap-2"
              >
                Download Syllabus (PDF) <ChevronRight size={16} />
              </Link>
              
              <Link 
                href="/career-roadmap"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all backdrop-blur-md text-center block cursor-pointer"
              >
                Book a Free Career Session
              </Link>
            </div>
          </div>
        </section>

        {/* 2. OPERATIONAL STATISTICS STRIP */}
        <Statistics />

        {/* 3. PROFESSIONAL PROGRAM TRAIN CARDS GRID */}
        <Programs />

        {/* 4. PLACEMENT CORPORATE MARQUEE SLIDER */}
        <section className="py-16 bg-black/40 border-y border-white/5 backdrop-blur-md relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-8">
              Our Alumni Work At Leading Enterprise Tech Companies
            </p>
            <Companies />
          </div>
        </section>

        {/* 5. ALL 6 EXPERT MENTORS GRID SECTION */}
        <Mentor />

        {/* 6. SYSTEM ALUMNI SUCCESS STORIES */}
        <Testimonials />

        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        <FAQ />

        {/* Global Footer Layout */}
        <Footer />
      </div>
    </div>
  );
}