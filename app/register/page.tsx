'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { CheckCircle2, Loader2, ShieldCheck } from 'lucide-react'

export default function RegisterPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const tallyScript = document.createElement('script')
    tallyScript.src = 'https://tally.so/widgets/embed.js'
    tallyScript.async = true

    tallyScript.onload = () => {
      setIsLoaded(true)

      // @ts-ignore
      if (window.Tally) {
        // @ts-ignore
        window.Tally.loadEmbeds()
      }
    }

    document.body.appendChild(tallyScript)

    const handleMessage = (e: MessageEvent) => {
      try {
        const data = typeof e.data === 'string'
          ? JSON.parse(e.data)
          : e.data

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
          setIsSubmitted(true)
        }
      } catch (err) {
        // Ignore unrelated messages
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)

      if (document.body.contains(tallyScript)) {
        document.body.removeChild(tallyScript)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Global Navigation */}
      <Navigation />

      {/* Hero */}
      <section className="pt-44 pb-32 bg-[#0B1221] text-white text-center relative overflow-hidden">

        {/* Atmospheric Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-ai-cyan/[0.05] rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-ai-purple/[0.04] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-ai-cyan animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
              Training & Internship Program
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Register for{' '}
            <span className="bg-gradient-to-r from-ai-cyan to-ai-purple bg-clip-text text-transparent">
              Training & Internship
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl font-light max-w-3xl mx-auto px-4">
            Take the next step toward building industry-ready skills through
            practical training, hands-on projects, and professional guidance.
          </p>

        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-12 max-w-5xl mx-auto px-4 relative z-20 -mt-16">

        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

          {/* Form Header / Success Header */}
          <div className="bg-slate-50 border-b border-slate-100 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                {isSubmitted ? (
                  <>
                    Registration{' '}
                    <span className="text-green-600">
                      Complete
                    </span>
                  </>
                ) : (
                  <>
                    Training &{' '}
                    <span className="text-cyan-600">
                      Internship Registration
                    </span>
                  </>
                )}
              </h2>

              <p className="text-slate-500 text-sm font-medium tracking-tight mt-1">
                {isSubmitted
                  ? 'Your application has been successfully received.'
                  : 'Submit your details to apply for the program.'}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">

              <div
                className={`w-2 h-2 rounded-full ${
                  isSubmitted
                    ? 'bg-green-500'
                    : 'bg-green-500 animate-pulse'
                }`}
              />

              <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase">
                {isSubmitted ? 'Submitted' : 'Registration Open'}
              </span>

            </div>

          </div>

          {/* FORM / SUCCESS MESSAGE */}
          {isSubmitted ? (

            <div className="min-h-[650px] flex items-center justify-center px-6 py-20 bg-white">

              <div className="text-center max-w-xl">

                {/* Animated Check */}
                <div className="flex justify-center mb-8">

                  <div className="relative">

                    <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />

                    <div className="relative w-28 h-28 rounded-full bg-green-50 border-8 border-green-100 flex items-center justify-center shadow-lg">

                      <CheckCircle2
                        size={64}
                        strokeWidth={2}
                        className="text-green-500 animate-[successPop_0.5s_ease-out]"
                      />

                    </div>

                  </div>

                </div>

                {/* Success Message */}
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  Registration Submitted
                  <span className="text-green-500">!</span>
                </h3>

                <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                  Thank you for registering with{' '}
                  <span className="font-bold text-slate-700">
                    Global AIIT
                  </span>
                  .
                  <br />
                  Our team will review your details and contact you shortly
                  with the next steps.
                </p>

                {/* Success Badge */}
                <div className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-bold">
                  <CheckCircle2 size={17} />
                  Application Received Successfully
                </div>

              </div>

            </div>

          ) : (

            /* Tally Form */
            <div className="relative bg-white">

              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-20 min-h-[500px]">

                  <div className="flex flex-col items-center gap-4">

                    <Loader2
                      className="animate-spin text-cyan-600"
                      size={42}
                    />

                    <p className="text-slate-900 font-black tracking-widest text-sm">
                      CONNECTING...
                    </p>

                  </div>

                </div>
              )}

              <iframe
                data-tally-src="https://tally.so/embed/obRENX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                loading="lazy"
                width="100%"
                height="1159"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Register For Training / Internship Program"
                className="border-none relative z-10 w-full"
              />

            </div>

          )}

          {/* Trust Footer */}
          <div className="px-8 py-5 border-t border-slate-100 flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck size={18} className="text-cyan-500" />
            Global AIIT Official
          </div>

        </div>

      </section>

      {/* Global Footer */}
      <Footer />

      {/* Success Animation */}
      <style jsx>{`
        @keyframes successPop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          70% {
            transform: scale(1.15);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

    </main>
  )
}