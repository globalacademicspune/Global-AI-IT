'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, Sparkles, Video, MapPin } from 'lucide-react'
import CyberBackground from '@/components/cyber-background'

export default function Hero() {
  return (
    <section
      className="relative pt-32 pb-28 overflow-hidden bg-transparent"
      style={{ background: 'transparent' }}
    >
      {/* Cyberpunk canvas + parallax image */}
      <CyberBackground />

      {/* Spotlight Behind Text */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div
          className="w-[650px] h-[650px] rounded-full blur-3xl 
          bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.35),transparent_60%)]"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-10">
          
          {/* Announcement Badges Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
            
            {/* Box 1: New Batch - Added hover:scale-105 */}
            <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 
            text-amber-800 px-4 py-2 rounded-full text-xs md:text-sm font-semibold 
            border border-amber-200 animate-pulse shadow-sm transition-transform hover:scale-105 cursor-default">
              <span className="flex items-center gap-2">
                <Sparkles size={16} />
                Free Live Session: Big Data AI | 4th Jan @ 3:30PM
              </span>
            </div>

            {/* Box 2: Online Demo */}
            <div className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 
            text-blue-800 px-4 py-2 rounded-full text-xs md:text-sm font-semibold 
            border border-blue-200 animate-pulse shadow-sm transition-transform hover:scale-105 cursor-default">
              <span className="flex items-center gap-2">
                <Video size={16} className="text-blue-600" />
                Online Demo: 26th Jan 2026 @ 3PM
              </span>
            </div>

            {/* Box 3: Offline Demo */}
            <div className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 
            text-emerald-800 px-4 py-2 rounded-full text-xs md:text-sm font-semibold 
            border border-emerald-200 animate-pulse shadow-sm transition-transform hover:scale-105 cursor-default">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-emerald-600" />
                Offline Demo: 24th & 25th Jan 2026
              </span>
            </div>

          </div>

          {/* Rest of the component remains the same */}
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300" asChild>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeohsU5hEqL6GVc9QY_fURoOibDZqZZw9FVB_ZQMWKaxLxTNA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                Schedule a Call
              </a>
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300" asChild>
              <a href="#programs-section">View Programs</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-cyan-300">5000+</div>
              <div className="text-sm text-cyan-100/60">Students Trained</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-blue-300">98%</div>
              <div className="text-sm text-cyan-100/60">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-cyan-300">20+</div>
              <div className="text-sm text-cyan-100/60">Expert Mentors</div>
            </div>
          </div>

          {/* Floating Action Buttons */}
          <div className="fixed bottom-6 right-6 flex flex-col gap-3">
            <a href="https://wa.me/919763616999" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300" title="Chat on WhatsApp">
              <MessageCircle size={24} />
            </a>
            <a href="tel:+919763616999" className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-full p-4 hover:scale-110 transition-all duration-300 flex items-center gap-2" title="Call Now">
              <Phone size={24} />
              <span className="text-xs font-semibold hidden sm:inline">Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}