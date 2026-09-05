'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import {
  Loader2,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react'

export default function CareerRoadmap() {
  const [step, setStep] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    const tallyScript = document.createElement('script')
    tallyScript.src = 'https://tally.so/widgets/embed.js'
    tallyScript.async = true
    tallyScript.onload = () => setIsLoaded(true)
    document.body.appendChild(tallyScript)

    const calendlyScript = document.createElement('script')
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js'
    calendlyScript.async = true
    document.body.appendChild(calendlyScript)

    const handleMessage = (e: MessageEvent) => {
      try {
        const data =
          typeof e.data === 'string' ? JSON.parse(e.data) : e.data

        if (
          data &&
          (
            data.event === 'Tally.FormSubmitted' ||
            (
              typeof e.data === 'string' &&
              e.data.includes('Tally.FormSubmitted')
            )
          )
        ) {
          setStep(2)

          // @ts-ignore
          if (window.Calendly) {
            // @ts-ignore
            window.Calendly.initPopupWidget({
              url: 'https://calendly.com/go-globalacademics-pune/free-30-minutes-career-roadmap',
            })
          }
        }
      } catch (err) {
        // Ignore invalid postMessage data
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  /*
   * AI, ML, Data Science, MLOps, AIOps, DevOps & Cloud logos
   *
   * All image files should be inside:
   * public/
   */
  const floatingLogos = [
    // AI / Generative AI
    {
      src: '/openai_logo.webp',
      top: '8%',
      left: '7%',
      delay: '0s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/gemini_logo.webp',
      top: '15%',
      left: '28%',
      delay: '5s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/hugging_face_logo.png',
      top: '10%',
      left: '58%',
      delay: '10s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/claude_logo.webp',
      top: '22%',
      left: '82%',
      delay: '15s',
      size: 'w-16 md:w-24',
    },

    // Machine Learning
    {
      src: '/pytorch_logo.png',
      top: '35%',
      left: '5%',
      delay: '7s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/scikit_logo.png',
      top: '42%',
      left: '25%',
      delay: '12s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/xgboost_logo.png',
      top: '55%',
      left: '88%',
      delay: '4s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/keras_logo.png',
      top: '68%',
      left: '8%',
      delay: '17s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/onnx_logo.png',
      top: '78%',
      left: '30%',
      delay: '9s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/tensorflow-logo.png',
      top: '20%',
      left: '88%',
      delay: '14s',
      size: 'w-16 md:w-24',
    },

    // Data Science
    {
      src: '/python-logo.png',
      top: '25%',
      left: '18%',
      delay: '3s',
      size: 'w-14 md:w-20',
    },
    {
      src: '/numpy_logo.webp',
      top: '48%',
      left: '14%',
      delay: '11s',
      size: 'w-14 md:w-20',
    },
    {
      src: '/pandas_logo.webp',
      top: '62%',
      left: '22%',
      delay: '6s',
      size: 'w-14 md:w-20',
    },
    {
      src: '/jupyter_logo.webp',
      top: '82%',
      left: '55%',
      delay: '16s',
      size: 'w-14 md:w-20',
    },
    {
      src: '/matplotlib.png',
      top: '45%',
      left: '70%',
      delay: '2s',
      size: 'w-14 md:w-20',
    },
    {
      src: '/sql-logo.png',
      top: '58%',
      left: '42%',
      delay: '13s',
      size: 'w-14 md:w-20',
    },

    // MLOps
    {
      src: '/mlflow_logo.webp',
      top: '32%',
      left: '42%',
      delay: '8s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/kubeflow_logo.png',
      top: '72%',
      left: '72%',
      delay: '18s',
      size: 'w-16 md:w-24',
    },

    // AIOps / Observability
    {
      src: '/prometheus_logo.webp',
      top: '52%',
      left: '58%',
      delay: '5s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/grafana_logo.webp',
      top: '88%',
      left: '78%',
      delay: '12s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/opentelemetry_logo.webp',
      top: '30%',
      left: '68%',
      delay: '19s',
      size: 'w-14 md:w-20',
    },
    {
      src: '/elasticsearch_logo.webp',
      top: '75%',
      left: '45%',
      delay: '15s',
      size: 'w-16 md:w-24',
    },

    // DevOps
    {
      src: '/docker-logo.png',
      top: '38%',
      left: '55%',
      delay: '6s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/kubernetes-logo.png',
      top: '58%',
      left: '48%',
      delay: '14s',
      size: 'w-20 md:w-28',
    },
    {
      src: '/terraform-logo.png',
      top: '50%',
      left: '10%',
      delay: '9s',
      size: 'w-14 md:w-20',
    },

    // Cloud
    {
      src: '/aws-logo.png',
      top: '12%',
      left: '42%',
      delay: '1s',
      size: 'w-20 md:w-28',
    },
    {
      src: '/azure-logo.png',
      top: '6%',
      left: '75%',
      delay: '6s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/gcp-logo.png',
      top: '18%',
      left: '92%',
      delay: '11s',
      size: 'w-16 md:w-24',
    },

    // Data Platform
    {
      src: '/airflow-logo.png',
      top: '84%',
      left: '40%',
      delay: '13s',
      size: 'w-16 md:w-24',
    },
    {
      src: '/databricks-logo.png',
      top: '40%',
      left: '80%',
      delay: '3s',
      size: 'w-20 md:w-28',
    },
    {
    src: '/langchain_logo.svg',
    top: '12%',
    left: '58%',
    delay: '12s',
    size: 'w-16 md:w-24',
  },
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-48 pb-32 bg-[#0B1221] text-white text-center relative overflow-hidden">

        {/* Floating Technology Logos */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {floatingLogos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt=""
              className={`absolute ${logo.size} animate-steady-float opacity-[0.08]`}
              style={{
                top: logo.top,
                left: logo.left,
                animationDelay: logo.delay,
                filter: 'brightness(0) invert(1) blur(0.5px)',
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
            {step === 1 ? 'Design Your ' : 'Finalizing Your '}
            <span className="text-cyan-400">Future</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-2xl font-light max-w-3xl mx-auto px-4">
            {step === 1
              ? 'Get your personalized 2026 AI, ML & Data Science career roadmap.'
              : 'Booking Confirmed! Check your WhatsApp for the confirmation ping.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 relative z-20 -mt-16">
        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Process Status */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-200 sticky top-24">

              <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider">
                Process Status
              </h3>

              <ul className="space-y-8">

                {/* Step 1 */}
                <li
                  className={`flex gap-4 transition-opacity ${
                    step === 2 ? 'opacity-50' : 'opacity-100'
                  }`}
                >
                  <span
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0 ${
                      step === 2
                        ? 'bg-green-500 text-white'
                        : 'bg-cyan-600 text-white shadow-xl shadow-cyan-100'
                    }`}
                  >
                    {step === 2 ? <CheckCircle2 size={24} /> : '1'}
                  </span>

                  <div>
                    <p className="text-slate-900 font-bold text-lg">
                      Application
                    </p>

                    <p className="text-slate-500 text-sm">
                      Submit your profile details.
                    </p>
                  </div>
                </li>

                {/* Step 2 */}
                <li
                  className={`flex gap-4 transition-all ${
                    step === 2
                      ? 'opacity-100 scale-105'
                      : 'opacity-30'
                  }`}
                >
                  <span
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0 ${
                      step === 2
                        ? 'bg-green-500 text-white shadow-xl shadow-green-100'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {step === 2 ? <CheckCircle2 size={24} /> : '2'}
                  </span>

                  <div>
                    <p className="text-slate-900 font-bold text-lg">
                      Confirmation
                    </p>

                    <p className="text-slate-500 text-sm">
                      Details sent to WhatsApp/Email.
                    </p>
                  </div>
                </li>

              </ul>

              <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck
                  size={18}
                  className="text-cyan-500"
                />

                Global AIIT Official
              </div>
            </div>
          </div>

          {/* Application / Confirmation */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden min-h-[800px]">

              {step === 1 ? (
                <div className="relative">

                  {/* Heading Section */}
                  <div className="bg-slate-50 border-b border-slate-100 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <div>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                        Free 30 Min{' '}
                        <span className="text-cyan-600">
                          Career Roadmap
                        </span>
                      </h2>

                      <p className="text-slate-500 text-sm font-medium tracking-tight">
                        Personalized 1-on-1 session.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">

                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                      <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase">
                        Slots Available
                      </span>

                    </div>
                  </div>

                  {/* Loading Overlay */}
                  {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
                      <div className="flex flex-col items-center gap-4">

                        <Loader2
                          className="animate-spin text-cyan-600"
                          size={48}
                        />

                        <p className="text-slate-900 font-black tracking-widest">
                          CONNECTING...
                        </p>

                      </div>
                    </div>
                  )}

                  {/* Tally Form */}
                  <iframe
                    data-tally-src="https://tally.so/embed/yP4M5p?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="850"
                    className="border-none relative z-10"
                    title="Global AIIT Application"
                  ></iframe>

                </div>
              ) : (
                <div className="p-16 text-center flex flex-col items-center justify-center min-h-[800px] bg-slate-50/50">

                  {/* Confirmation Icons */}
                  <div className="flex gap-6 mb-12">

                    <div className="bg-cyan-100 p-8 rounded-full animate-bounce">
                      <MessageSquare
                        size={64}
                        className="text-cyan-600"
                      />
                    </div>

                    <div className="bg-green-100 p-8 rounded-full animate-bounce [animation-delay:0.2s]">
                      <CheckCircle2
                        size={64}
                        className="text-green-600"
                      />
                    </div>

                  </div>

                  <h2 className="text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
                    Booking Confirmed!
                  </h2>

                  <p className="text-slate-600 max-w-xl text-2xl mb-12 leading-relaxed font-medium">
                    Excellent! The Global AIIT Team has received your request.
                    Check your WhatsApp for your technical interview schedule.
                  </p>

                  <div className="px-12 py-6 bg-green-500 text-white rounded-2xl text-2xl font-black shadow-2xl shadow-green-200 uppercase tracking-tighter">
                    Ready for Session
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      <Footer />

      {/* Floating Logo Animation */}
      <style jsx global>{`
        @keyframes steadyFloat {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-35px) translateX(15px) rotate(4deg);
          }

          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
        }

        .animate-steady-float {
          animation: steadyFloat 20s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </main>
  )
}