'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Workflow() {
  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'Talk with our learning consultant to understand which program fits you',
      icon: '💬',
    },
    {
      number: '2',
      title: 'Registration',
      description: 'Complete easy registration and secure your spot in the batch',
      icon: '📝',
    },
    {
      number: '3',
      title: 'Onboarding',
      description: 'Join our welcome session and get started with the program',
      icon: '🚀',
    },
    {
      number: '4',
      title: 'Learning',
      description: 'Access structured course content through our learning portal',
      icon: '📚',
    },
    {
      number: '5',
      title: 'Support',
      description: 'Get doubts cleared through active discussion forums and mentoring',
      icon: '🤝',
    },
    {
      number: '6',
      title: 'Excellence',
      description: 'Complete projects and assessments to build your portfolio',
      icon: '⭐',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Your Learning Journey
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A structured path from enrollment to becoming a Big Data Expert
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative group">
              {idx < steps.length - 1 && idx % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}
              
              <Card className="h-full border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></div>
                
                <div className="p-8 space-y-4 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-foreground/70 flex-grow">{step.description}</p>
                  
                  <div className="pt-4 flex items-center gap-2 text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    <CheckCircle2 size={20} />
                    <span>Milestone {step.number}</span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
