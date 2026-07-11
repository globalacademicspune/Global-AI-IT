'use client'

import React from 'react'

export default function Companies() {
  const companyLogos = [
    { name: 'Amazon', symbol: 'AMZN', color: 'text-orange-400 border-orange-500/30 shadow-orange-500/5' },
    { name: 'Google', symbol: 'GOOG', color: 'text-blue-400 border-blue-500/30 shadow-blue-500/5' },
    { name: 'Microsoft', symbol: 'MSFT', color: 'text-teal-400 border-teal-500/30 shadow-teal-500/5' },
    { name: 'Deloitte', symbol: 'DLTE', color: 'text-green-400 border-green-500/30 shadow-green-500/5' },
    { name: 'Capgemini', symbol: 'CAP', color: 'text-blue-300 border-blue-400/30 shadow-blue-400/5' }, 
    { name: 'Cisco', symbol: 'CSCO', color: 'text-cyan-400 border-cyan-500/30 shadow-cyan-500/5' },
    { name: 'Jio', symbol: 'JIO', color: 'text-blue-500 border-blue-600/30 shadow-blue-600/5' },
    { name: 'TCS', symbol: 'TCS', color: 'text-red-400 border-red-500/30 shadow-red-500/5' },
    { name: 'Emirates NBD', symbol: 'ENBD', color: 'text-amber-400 border-amber-500/30 shadow-amber-500/5' },
    { name: 'Accenture', symbol: 'ACN', color: 'text-purple-400 border-purple-500/30 shadow-purple-500/5' },
    { name: 'Walmart', symbol: 'WMT', color: 'text-yellow-400 border-yellow-500/30 shadow-yellow-500/5' },
    { name: 'Hadoop', symbol: 'HDP', color: 'text-yellow-500 border-yellow-600/30 shadow-yellow-600/5' },       
    { name: 'Apache Spark', symbol: 'SPRK', color: 'text-orange-500 border-orange-600/30 shadow-orange-600/5' },
    { name: 'Kafka', symbol: 'KFKA', color: 'text-pink-400 border-pink-500/30 shadow-pink-500/5' },
    { name: 'Airflow', symbol: 'AIR', color: 'text-cyan-300 border-cyan-400/30 shadow-cyan-400/5' },
    { name: 'Databricks', symbol: 'DBRK', color: 'text-red-400 border-red-500/30 shadow-red-500/5' }
  ]

  const sliderLogos = [...companyLogos, ...companyLogos, ...companyLogos]

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Edge Fade Filters for smooth infinite scrolling */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#050811] via-[#050811]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#050811] via-[#050811]/80 to-transparent z-10 pointer-events-none" />

      {/* Infinite Marquee Loop */}
      <div className="flex gap-12 animate-technologies-marquee whitespace-nowrap items-center raw-loop">
        {sliderLogos.map((logo, index) => (
          <div 
            key={index} 
            className="relative w-52 h-20 flex-shrink-0 flex items-center justify-between backdrop-blur-md bg-white/[0.02] border border-white/5 hover:border-ai-cyan/40 rounded-2xl px-5 py-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:-translate-y-1 transition-all duration-300 group select-none"
          >
            {/* Left side: Bigger Custom Glowing Code Symbol */}
            <div className={`text-sm font-mono font-bold tracking-wider px-2.5 py-1.5 rounded-lg bg-white/[0.03] border ${logo.color} shadow-md transition-transform group-hover:scale-105`}>
              {logo.symbol}
            </div>

            {/* Right side: Scaled Up Corporate Text Name */}
            <div className="text-base font-bold text-gray-200 tracking-wide group-hover:text-white transition-colors text-right pl-3">
              {logo.name}
            </div>

            {/* Subtle hover background glow pulse */}
            <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan/[0.02] to-ai-purple/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  )
}