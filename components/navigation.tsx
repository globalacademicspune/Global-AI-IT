'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image"  // <-- Added

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Curriculum', href: '#programs' },
    { label: 'Careers', href: '#careers' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO (updated!) */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image
              src="/GlobalAIIT-logo.png"
              alt="Global AIIT Logo"
              width={40}
              height={40}
              className="object-contain rounded-md"
            />
            <span className="font-bold text-lg hidden sm:block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Global AIIT
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/terms"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              Privacy
            </Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 text-primary-foreground transition-all duration-300 flex items-center gap-2">
              Enroll Now
              <ArrowRight size={16} />
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/terms"
              className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Privacy
            </Link>
            <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
              Enroll Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
