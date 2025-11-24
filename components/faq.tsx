'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Who should enroll in Global AIIT programs?',
      answer: 'Our programs are designed for IT professionals looking to transition into Big Data and Data Engineering roles. Graduates and professionals from other domains are also welcome, provided they have basic programming knowledge.',
    },
    {
      question: 'What are the program prerequisites?',
      answer: 'Basic knowledge of any programming language (Java, Python, or similar) and a fundamental understanding of SQL are required. We provide pre-course materials to refresh your basics if needed.',
    },
    {
      question: 'Will I be industry-ready after completing the course?',
      answer: 'Yes! Our comprehensive curriculum covers the latest trending technologies in the Big Data industry. With full dedication over 7-8 months, you will be as skilled as a 3+ year experienced professional.',
    },
    {
      question: 'When can I start preparing for interviews?',
      answer: 'The course is structured into 3 major milestones. After each milestone (starting at 14 weeks), you will be interview-ready with real-world projects in your portfolio.',
    },
    {
      question: 'Is job placement guaranteed?',
      answer: 'While we cannot guarantee placement, our 95% job placement rate speaks volumes. We provide comprehensive placement support, resume building, interview prep, and active job matching.',
    },
    {
      question: 'Can I access course materials after completion?',
      answer: 'You get lifetime access to all course materials, videos, and resources. You can revisit and refresh your knowledge anytime.',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
            <HelpCircle size={28} className="text-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/60">
            Everything you need to know about Global AIIT programs
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-primary/30 overflow-hidden transition-all duration-300 hover:shadow-lg bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-blue-50/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-left text-foreground">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-5 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border-t-2 border-primary/20 animate-in fade-in slide-in-from-top-2">
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
