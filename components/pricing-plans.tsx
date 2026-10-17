
'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Medal,
  Award,
  Crown,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'

const packages = [
  {
    id: 'bronze',
    name: 'BRONZE',
    subtitle: 'FOUNDATION',
    price: '$399',
    description:
      'Build your foundation with core skills and structured learning.',
    Icon: Medal,
    accent: '#E9A77A',
    border: 'border-[#C58B62]/45 hover:border-[#E9A77A]/80',
    iconClass: 'text-[#E9A77A]',
    buttonClass:
      'bg-gradient-to-r from-[#E9B28D] to-[#C98155] text-[#160D09] hover:brightness-110',
    features: [
      'Selected course track',
      'Core learning resources',
      'Structured course modules',
      'Practical assignments',
      'Community support',
    ],
  },
  {
    id: 'silver',
    name: 'SILVER',
    subtitle: 'PROFESSIONAL',
    price: '$599',
    description:
      'Go deeper with hands-on training, expert guidance, and interview preparation.',
    Icon: Award,
    accent: '#83BEFF',
    border: 'border-[#60A5FA]/80 shadow-[0_0_32px_rgba(59,130,246,0.12)]',
    iconClass: 'text-[#83BEFF]',
    buttonClass:
      'bg-gradient-to-r from-[#9DD0FF] to-[#5B9EF5] text-[#071426] hover:brightness-110',
    featured: true,
    features: [
      'Everything in Bronze',
      'Live instructor-led sessions',
      'Hands-on labs and real-world projects',
      'Mentor guidance',
      'Interview preparation',
      'Course completion certificate',
    ],
  },
  {
    id: 'gold',
    name: 'GOLD',
    subtitle: 'ELITE',
    price: '$699',
    description:
      'An enhanced learning experience with advanced projects and personalized guidance.',
    Icon: Crown,
    accent: '#FFD166',
    border: 'border-[#D4A93D]/55 hover:border-[#FFD166]/85',
    iconClass: 'text-[#FFD166]',
    buttonClass:
      'bg-gradient-to-r from-[#FFE08A] to-[#DDAA32] text-[#201604] hover:brightness-110',
    features: [
      'Everything in Silver',
      'Advanced production-oriented projects',
      'One-to-one mentoring',
      'Personalized career guidance',
      'Priority mentor support',
      'Advanced interview preparation',
    ],
  },
]

export default function PricingPlans() {
  return (
    <section
      id="pricing"
      className="relative isolate z-10 overflow-hidden bg-[#050811]/90 px-4 pb-12 pt-5 sm:px-6 sm:pb-16 sm:pt-7 lg:px-8"
    >
      {/* Subtle background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#071321]/95 via-[#050811]/95 to-[#050811]" />

      <div className="pointer-events-none absolute -top-24 left-[8%] -z-10 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <div className="pointer-events-none absolute right-[5%] top-0 -z-10 h-72 w-72 rounded-full bg-indigo-500/[0.06] blur-[120px]" />

      {/* Compact Hero Banner */}
      <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#0B1423]/95 via-[#080E1A]/95 to-[#0A1020]/95 px-5 py-6 shadow-[0_20px_70px_rgba(0,0,0,0.2)] sm:grid-cols-[1.5fr_0.8fr] sm:px-8 sm:py-8 lg:grid-cols-[1.6fr_0.65fr] lg:gap-10 lg:px-10 lg:py-9">
        {/* Left Content */}
        <div>
          <p className="mb-4 text-[10px] font-extrabold uppercase leading-relaxed tracking-[0.12em] text-cyan-300 sm:text-xs sm:tracking-[0.18em]">
            SKILLS
            <span className="mx-1.5 text-slate-600 sm:mx-2">|</span>
            PROJECTS
            <span className="mx-1.5 text-slate-600 sm:mx-2">|</span>
            PLACEMENT
            <span className="mx-1.5 text-slate-600 sm:mx-2">|</span>
            GLOBAL OPPORTUNITIES
          </p>

          <h1 className="max-w-3xl text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Choose Your Learning Path
            <br className="hidden sm:block" /> to a{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Global Career
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            World-class training in AI, Data, Cloud, Cybersecurity and more.
            Flexible learning plans. Real-world projects. Expert mentorship.
            Your future, our mission.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex flex-col border-t border-white/10 pt-8 sm:items-end sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 lg:pl-8 sm:translate-y-4">
          <div className="mb-3 flex items-center gap-2 sm:justify-end">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.65)]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
              Your Next Chapter
            </span>
          </div>

          <p className="text-xl font-black uppercase leading-relaxed tracking-[0.1em] text-white sm:text-2xl lg:text-right">
            Learn Today.
            <br />
            <span className="text-slate-300">Build Tomorrow.</span>
            <br />
            <span className="bg-gradient-to-r from-amber-200 to-orange-400 bg-clip-text text-transparent">
              Go Global.
            </span>
          </p>

          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 sm:ml-auto" />

          <p className="mt-3 max-w-xs text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6 sm:text-right">
            Develop practical skills, build real-world projects, and prepare
            for opportunities across the global technology industry.
          </p>
        </div>
      </div>

      {/* Bronze, Silver and Gold Pricing Cards */}
      <div className="mx-auto mt-7 grid max-w-7xl items-stretch gap-5 sm:mt-9 md:grid-cols-3 lg:gap-7">
        {packages.map((plan) => {
          const Icon = plan.Icon

          return (
            <div
              key={plan.id}
              className="relative flex min-w-0 flex-col pt-3"
            >
              {plan.featured && (
                <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-200/30 bg-gradient-to-r from-cyan-300 to-blue-400 px-5 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.15)] sm:text-xs">
                  Most Popular
                </div>
              )}

              <Card
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-[#080D18] p-5 pt-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A1120] sm:p-6 sm:pt-9 ${plan.border}`}
              >
                {/* Soft Card Highlight */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-28 opacity-[0.07]"
                  style={{
                    background: `linear-gradient(180deg, ${plan.accent}, transparent)`,
                  }}
                />

                {/* Package Identity */}
                <div className="relative text-center">
                  <div
                    className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border bg-black/20 sm:h-16 sm:w-16"
                    style={{
                      borderColor: `${plan.accent}40`,
                    }}
                  >
                    <Icon
                      size={34}
                      strokeWidth={1.7}
                      className={plan.iconClass}
                    />
                  </div>

                  <h2
                    className="text-2xl font-black tracking-[0.18em]"
                    style={{ color: plan.accent }}
                  >
                    {plan.name}
                  </h2>

                  <p className="mt-1 text-[10px] font-bold tracking-[0.24em] text-slate-400">
                    {plan.subtitle}
                  </p>

                  <div className="mt-5 flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-500">
                      / per course
                    </span>
                  </div>

                  <p className="mt-4 min-h-[48px] text-sm leading-6 text-slate-400">
                    {plan.description}
                  </p>
                </div>

                {/* Package Features */}
                <div
                  className="relative my-5 border-y py-4"
                  style={{
                    borderColor: `${plan.accent}30`,
                  }}
                >
                  <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-300">
                    What&apos;s Included
                  </p>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-5 text-slate-300"
                      >
                        <CheckCircle2
                          size={17}
                          className={`mt-0.5 shrink-0 ${plan.iconClass}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get Started */}
                <div className="relative mt-auto pt-2">
                  <Button
                    asChild
                    className={`w-full rounded-xl py-6 font-extrabold shadow-lg transition-all hover:-translate-y-0.5 ${plan.buttonClass}`}
                  >
                    <Link href={`/courses?plan=${plan.id}`}>
                      Get Started
                      <ChevronRight size={17} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          )
        })}
      </div>
    </section>
  )
}
