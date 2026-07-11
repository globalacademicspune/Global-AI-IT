'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image"
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'About', href: '/zuber' },          
    { label: 'Programs', href: '/#programs-section' }, 
    { label: 'Curriculum', href: '/#programs-section' }, 
    { label: 'Careers', href: '/careers' },      
    { label: 'Testimonials', href: '/#testimonials' }, 
    { label: 'Contact', href: '/career-roadmap' }, // Contact ko bhi seedha career-roadmap par redirect kar diya!
    { label: 'Terms', href: '/terms' },          
    { label: 'Privacy', href: '/privacy' },      
  ]

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-[#050811]/80 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image
              src="/GlobalAIIT-logo.png"
              alt="Global AIIT Logo"
              width={40}
              height={40}
              className="object-contain rounded-md"
            />
            <span className="font-bold text-lg hidden sm:block bg-gradient-to-r from-ai-cyan to-ai-purple bg-clip-text text-transparent">
              Global AIIT
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-ai-cyan ${
                  pathname === item.href ? 'text-ai-cyan font-semibold' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Call To Action Button */}
          <div className="hidden md:block">
            <Button
              asChild 
              className="hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 font-bold cursor-pointer bg-gradient-to-r from-ai-cyan to-ai-purple text-gray-950 shadow-[0_0_20px_rgba(0,210,255,0.15)] hover:shadow-[0_0_25px_rgba(0,210,255,0.3)]"
            >
              <Link href="/career-roadmap">
                Enroll Now
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburgers */}
          <button className="md:hidden focus:outline-none text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 p-4 rounded-b-xl bg-[#050811]/95 border-x border-b border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block px-4 py-2 text-sm rounded-lg transition-colors hover:bg-white/5 hover:text-ai-cyan ${
                  pathname === item.href ? 'bg-white/5 text-ai-cyan font-bold' : 'text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full font-bold mt-2 bg-gradient-to-r from-ai-cyan to-ai-purple text-gray-950" asChild>
               <Link href="/career-roadmap" onClick={() => setIsOpen(false)}>
                 Enroll Now
               </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}