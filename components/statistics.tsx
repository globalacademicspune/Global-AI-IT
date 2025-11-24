'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Globe, Award } from 'lucide-react'

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
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      number: '100+ LPA', 
      label: 'Highest CTC Recorded',
      icon: TrendingUp,
      color: 'from-primary to-accent'
    },
    {
      number: '95%',
      label: 'Job Placement Rate',
      icon: Award,
      color: 'from-amber-500 to-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-white via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon
            return (
              <div 
                key={stat.number} 
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}}></div>
                
                <div className="relative bg-white/80 backdrop-blur rounded-2xl p-8 border border-white/60 hover:border-primary/30 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg`}>
                    <IconComponent size={28} />
                  </div>
                  
                  <h3 className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </h3>
                  <p className="text-lg text-foreground/70 font-medium">
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
