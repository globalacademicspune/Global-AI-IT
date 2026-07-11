'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { question: 'Who should enroll in Global AIIT programs?', answer: 'Our programs are designed for IT professionals looking to transition into Big Data and Data Engineering roles, as well as graduates and professionals from other domains who want to build a career in the tech industry.' },
    { question: 'What are the program prerequisites?', answer: 'A Bachelors degree in any stream is the only requirement to join this program. We start all technical concepts from the absolute ground up.' },
    { question: 'Will I be industry-ready after completing the course?', answer: 'Yes! Our comprehensive curriculum covers the latest trending technologies in the Big Data industry. With full dedication over 7-8 months, you will be as skilled as a 3+ year experienced professional.' },
    { question: 'When can I start preparing for interviews?', answer: 'The course is structured into 3 major milestones. After each milestone (starting at 14 weeks), you will be interview-ready with real-world projects in your portfolio.' },
    { question: 'Is job placement guaranteed?', answer: 'While we cannot guarantee placement, our 95% job placement rate speaks volumes. We provide comprehensive placement support, resume building, interview prep, and active job matching.' },
    { question: 'Can I access course materials after completion?', answer: 'You get lifetime access to all course materials, videos, and resources. You can revisit and refresh your knowledge anytime.' },
  ]

  return (
    <section className="py-24 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full">
            <HelpCircle size={22} className="text-ai-cyan" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Frequently Asked <span className="bg-gradient-to-r from-ai-cyan to-ai-purple bg-clip-text text-transparent">Questions</span></h2>
          <p className="text-lg text-gray-400">Everything you need to know about Global AIIT programs</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-white/10 overflow-hidden transition-all duration-300 rounded-xl bg-white/[0.01] backdrop-blur-md hover:border-ai-cyan/30 shadow-lg">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-5 flex justify-between items-center hover:bg-white/[0.02] transition-colors">
                <h3 className="text-lg font-bold text-left text-white tracking-tight">{faq.question}</h3>
                <ChevronDown size={20} className={`text-ai-cyan flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-gradient-to-r from-ai-cyan/[0.02] to-ai-purple/[0.02] border-t border-white/5 animate-in fade-in slide-in-from-top-2">
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}