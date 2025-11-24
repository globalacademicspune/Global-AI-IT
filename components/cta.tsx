'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg md:text-xl opacity-95 font-light">
            Join 30,000+ professionals who have upskilled with Global AIIT and landed their dream jobs
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            Schedule Free Consultation
            <ArrowRight size={20} />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold transition-all duration-300">
            Download Syllabus
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-8">
          {[
            'Job Placement Support',
            'Lifetime Course Access',
            '1-on-1 Mentoring'
          ].map((benefit) => (
            <div key={benefit} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur px-4 py-3 rounded-lg">
              <CheckCircle2 size={20} />
              <span className="font-semibold">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="pt-8 space-y-2 text-sm opacity-95 border-t border-white/20">
          <p className="font-semibold">Questions? Reach Out Anytime</p>
          <p>📧 go.globalacademics.pune@gmail.com | 📞 +91-9763616999</p>
        </div>
      </div>
    </section>
  )
}
