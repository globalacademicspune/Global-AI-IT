'use client'

import React from 'react'

export default function RepublicBackground() {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden bg-[#020617]">
      {/* 1. The Video Background */}
      {/* Ensure your file is named 'indian-flag.mp4' inside the 'public' folder */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-1000"
      >
        <source src="/indian-flag.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Cyber Gradient Overlay */}
      {/* This darkens the top and bottom to make the Nav and Stats clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />

      {/* 3. The Technical Grid Layer */}
      {/* This keeps the "Big Data / Tech" vibe over the flag */}
      <div 
        className="absolute inset-0 opacity-[0.12]" 
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* 4. Radial Vignette */}
      {/* This focuses the light in the center behind your main headline */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />

      {/* 5. Scanline Effect (Optional High-Tech Touch) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
    </div>
  )
}