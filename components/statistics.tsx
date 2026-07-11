'use client'

import { useEffect, useState } from 'react'
import { Users, Globe, Award } from 'lucide-react'

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { 
      number: '30,000+', 
      label: 'Learners from 50+ Countries',
      icon: Globe,
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      number: '30+', 
      label: 'Expert Industry Trainers',
      icon: Users, 
      color: 'from-purple-500 to-pink-500' 
    },
    {
      number: '95%',
      label: 'Job Placement Rate',
      icon: Award,
      color: 'from-ai-cyan to-ai-purple'
    }
  ]

  return (
    <section className="py-20 bg-transparent relative z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon
            return (
              <div 
                key={stat.number + idx} 
                className="group relative overflow-hidden"
              >
                {/* Dynamic soft radial backlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                
                {/* Premium Translucent Glassmorphic Card */}
                <div className="relative backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 shadow-[0_12px_40px_rgba(0,0,0,0.4)] bg-white/[0.01] border border-white/10 hover:border-ai-cyan/40 hover:-translate-y-2">
                  
                  {/* Glowing Icon Wrapper */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} text-gray-950 mb-5 shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform duration-300`}>
                    <IconComponent size={26} className="text-white" />
                  </div>
                  
                  {/* Dynamic Gradient Numbers */}
                  <h3 className={`text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tracking-tight`}>
                    {stat.number}
                  </h3>
                  
                  {/* Clean text balance */}
                  <p className="text-sm sm:text-base font-semibold text-gray-400 leading-snug group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}