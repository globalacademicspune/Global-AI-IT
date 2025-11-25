'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Clock, Zap } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      title: 'Elite Data Engineering Program',
      description: 'For professionals transitioning to data engineering with hands-on projects',
      duration: '14 weeks',
      level: 'Beginner to Intermediate',
       
      badge: 'Most Popular',
      features: ['Live Classes', 'Project-Based Learning', 'Lifetime Access', 'Certificate'],
    },
    {
      title: 'Ultimate Big Data Masters',
      description: 'Comprehensive program covering all big data technologies and frameworks',
      duration: '24 weeks',
      level: 'Intermediate to Advanced',
      
      badge: 'Best Value',
      features: ['1-on-1 Mentoring', 'Job Placement Support', 'Industry Projects', 'Certificate'],
      featured: true,
    },
    {
      title: 'Advanced Data Engineering Program',
      description: 'Advanced techniques and optimization strategies for experienced engineers',
      duration: '20 weeks',
      level: 'Advanced',
      
      badge: 'Expert Level',
      features: ['Custom Projects', 'Career Coaching', 'Networking', 'Certificate'],
    },
  ]

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Programs
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Choose the program that fits your career goals and experience level
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div key={program.title} className="relative">
              {program.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                  {program.badge}
                </div>
              )}
              <Card className={`h-full border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${program.featured ? 'border-primary bg-gradient-to-br from-blue-50 to-cyan-50' : 'border-border hover:border-primary'}`}>
                <div className="p-8 space-y-6 flex flex-col h-full">
                  <div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {program.level}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                    <p className="text-foreground/70">{program.description}</p>
                  </div>

                  <div className="space-y-3 border-y border-border/30 py-4">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-primary" />
                      <span className="text-sm"><span className="font-semibold">Duration:</span> {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={18} className="text-accent" />
                      <span className="text-sm"><span className="font-semibold">Level:</span> {program.level}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex-grow"></div>

                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-primary">{program.price}</div>
                    <Button className={`w-full font-semibold transition-all duration-300 ${program.featured ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}>
                      Learn More
                    </Button>
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
