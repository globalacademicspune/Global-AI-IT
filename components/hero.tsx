'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold border border-amber-200 animate-pulse">
            <span className="flex items-center gap-2">
              <Sparkles size={16} />
              New Batch Starts on 1st December 2025 @ 4PM IST
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-foreground leading-tight">
              Become an Expert on
            </h1>
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 leading-tight">
              Cloud Big Data Technologies
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light">
              Master industry-leading platforms designed by top data engineers. Build a rock-solid foundation with hands-on projects and real-world applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 text-primary-foreground font-semibold transition-all duration-300">
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-blue-50 font-semibold transition-all duration-300">
              View Programs
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-white/60 backdrop-blur rounded-xl p-4 border border-white/40">
              <div className="text-2xl md:text-3xl font-bold text-primary">5000+</div>
              <div className="text-sm text-foreground/60">Students Trained</div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-xl p-4 border border-white/40">
              <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-foreground/60">Success Rate</div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-xl p-4 border border-white/40">
              <div className="text-2xl md:text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-foreground/60">Expert Mentors</div>
            </div>
          </div>

          {/* ✅ UPDATED FLOATING BUTTONS */}
          <div className="fixed bottom-6 right-6 flex flex-col gap-3">

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919763616999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={24} />
            </a>

            {/* Call Button */}
            <a
              href="tel:+919763616999"
              className="bg-gradient-to-r from-blue-600 to-primary hover:shadow-2xl text-white rounded-full p-4 hover:scale-110 transition-all duration-300 flex items-center gap-2"
              title="Call Now"
            >
              <Phone size={24} />
              <span className="text-xs font-semibold hidden sm:inline">Call</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

