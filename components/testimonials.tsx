'use client'

import { Card } from '@/components/ui/card'
import { Star, Quote, ArrowUpRight } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Vinay Kumar',
      role: 'Senior Data Engineer',
      company: 'Amazon',
      quote: 'If others are MapReduce, you are the SPARK. Due to rock solid fundamentals in Big Data, I received multiple job offers.',
      rating: 5,
      salary: '₹35 LPA',
    },
    {
      name: 'Amar Singh',
      role: 'Software Engineer',
      company: 'Mastercard',
      quote: 'This was by far the best investment in my career. The course structure and mentorship transformed my technical skills.',
      rating: 5,
      salary: '₹28 LPA',
    },
    {
      name: 'Isha Sharma',
      role: 'Big Data Developer',
      company: 'VISA',
      quote: 'The guidance and support I received was exceptional. I secured multiple offers from top tech companies.',
      rating: 5,
      salary: '₹32 LPA',
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-xs font-semibold tracking-wider text-ai-purple uppercase">Alumni Wall of Fame</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Success Stories from Our <span className="bg-gradient-to-r from-ai-cyan to-ai-purple bg-clip-text text-transparent">Alumni</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Real professionals, real results, real career transformations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border border-white/10 bg-white/[0.01] backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 shadow-xl hover:border-ai-cyan/40 group relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-ai-cyan via-ai-purple to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="space-y-5 flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <Quote size={22} className="text-ai-cyan/20" />
                  <div className="flex gap-0.5">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed italic flex-grow">"{testimonial.quote}"</p>

                <div className="pt-5 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-base text-white">{testimonial.name}</h4>
                      <p className="text-xs font-semibold text-ai-cyan mt-0.5">{testimonial.role}</p>
                      <p className="text-[11px] font-bold text-gray-500 tracking-wider uppercase font-mono mt-0.5">{testimonial.company}</p>
                    </div>
                    <div className="inline-flex items-center gap-1 bg-gradient-to-r from-ai-cyan/10 to-ai-purple/10 border border-ai-cyan/20 px-3 py-1 rounded-xl text-xs font-bold text-ai-cyan">
                      {testimonial.salary} <ArrowUpRight size={12} />
                    </div>
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