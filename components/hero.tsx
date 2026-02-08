'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, MapPin } from 'lucide-react'
import CyberBackground from '@/components/cyber-background'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative pt-32 pb-28 overflow-hidden bg-transparent"
      style={{ background: 'transparent' }}
    >
      <CyberBackground />

      {/* Cyber Spotlight */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div
          className="w-[650px] h-[650px] rounded-full blur-3xl 
          bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_60%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-10">
          
          {/* Highlighted Box */}
          <div className="flex justify-center mb-10">
            <Link href="/career-roadmap" className="inline-block transition-transform hover:scale-110 active:scale-95 animate-pulse">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 
              text-white px-8 py-3 rounded-full text-base md:text-lg font-black 
              border border-cyan-400 shadow-[0_0_25px_rgba(0,255,255,0.4)] flex items-center gap-3">
                <MapPin size={22} className="animate-bounce" />
                Offline Demo: 14th & 15th Feb 2026
              </div>
            </Link>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white leading-tight drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
              Become an Expert on
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]">
              Cloud Big Data Technologies
            </h2>
            <p className="text-lg md:text-xl text-cyan-100/80 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              Master industry-leading platforms designed by top data engineers.
              Build a rock-solid foundation with hands-on projects and real-world
              applications.
            </p>
          </div>

          {/* BOTH BUTTONS NOW IN CYBER BLUE GRADIENT */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300" asChild>
              <a href="/career-roadmap">
                Schedule a Call
              </a>
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300" asChild>
              <a href="#programs-section">
                View Programs
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400">5000+</div>
              <div className="text-sm text-cyan-100/60">Students Trained</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <div className="text-3xl font-bold text-blue-400">98%</div>
              <div className="text-sm text-cyan-100/60">Success Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400">30+</div>
              <div className="text-sm text-cyan-100/60">Industry Trainers</div>
            </div>
          </div>

          {/* Floating Actions */}
          <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            <a href="https://wa.me/919763616999" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300" title="Chat on WhatsApp">
              <MessageCircle size={24} />
            </a>
            <a href="tel:+919763616999" className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-full p-4 hover:scale-110 transition-all duration-300 flex items-center gap-2" title="Call Now">
              <Phone size={24} />
              <span className="text-xs font-semibold hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}