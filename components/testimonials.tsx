'use client'

import { Card } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Vinay Kumar',
      role: 'Senior Data Engineer at Amazon',
      company: 'Amazon',
      quote: 'If others are MapReduce, you are the SPARK. Due to rock solid fundamentals in Big Data, I received multiple job offers.',
      rating: 5,
      salary: '₹35 LPA',
    },
    {
      name: 'Amar Singh',
      role: 'Software Engineer at Mastercard',
      company: 'Mastercard',
      quote: 'This was by far the best investment in my career. The course structure and mentorship transformed my technical skills.',
      rating: 5,
      salary: '₹28 LPA',
    },
    {
      name: 'Isha Sharma',
      role: 'Big Data Developer at VISA',
      company: 'VISA',
      quote: 'The guidance and support I received was exceptional. I secured multiple offers from top tech companies.',
      rating: 5,
      salary: '₹32 LPA',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Success Stories from Our Alumni
          </h2>
          <p className="text-xl text-foreground/60">
            Real professionals, real results, real career transformations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={testimonial.name} className="border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group bg-white">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></div>
              
              <div className="p-8 space-y-4 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <Quote size={24} className="text-primary/20" />
                  <div className="flex gap-1">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed flex-grow italic">
                  "{testimonial.quote}"
                </p>

                <div className="pt-6 border-t-2 border-muted space-y-3">
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-semibold">{testimonial.role}</p>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-1 rounded-full">
                    <p className="text-sm font-bold text-primary">{testimonial.salary}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
