'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function ZuberProfile() {
  const whatsappUrl =
    "https://wa.me/919168998839?text=Hello%20Zuber,%20I'd%20like%20to%20book%20a%201:1%20session."

  const linkedinUrl =
    "https://www.linkedin.com/in/zuber-s-26b82781?utm_source=share_via&utm_content=profile&utm_medium=member_android"

  const instagramUrl =
    "https://www.instagram.com/zuber.shaikh369/"

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Profile Image */}
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 shadow-2xl">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary">
              <img
                src="/zuber.jpeg"
                alt="Zuber Shaikh"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Zuber Shaikh
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-cyan-300 font-medium max-w-2xl mx-auto mb-8 italic">
            "Mentoring the Next Generation of AI, ML & Data Science Professionals"
          </p>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4">

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zuber Shaikh on LinkedIn"
              className="bg-white/10 p-3 rounded-full hover:bg-cyan-400 hover:text-primary transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zuber Shaikh on Instagram"
              className="bg-white/10 p-3 rounded-full hover:bg-cyan-400 hover:text-primary transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">

              <h3 className="text-xl font-bold text-primary mb-6">
                Career Highlights
              </h3>

              <div className="space-y-4">

                {/* Students Trained */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">
                    Students Trained
                  </p>

                  <p className="text-2xl font-black text-primary">
                    10,000+
                  </p>
                </div>

                {/* Core Expertise */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">
                    Core Expertise
                  </p>

                  <p className="text-2xl font-black text-primary">
                    AI • ML • Data Science
                  </p>
                </div>

                {/* Experience */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">
                    Experience
                  </p>

                  <p className="text-2xl font-black text-primary">
                    11+ Years
                  </p>
                </div>

              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-8 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span className="text-xl">💬</span>
                Book a 1:1 Session
              </a>

            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* About CEO */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">

              <h2 className="text-3xl font-bold text-primary mb-6">
                About the CEO
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                As the Founder of{' '}
                <span className="font-bold text-slate-900">
                  Global AIIT
                </span>
                , Zuber Shaikh has spent over a decade architecting
                high-availability systems, cloud-native solutions, and
                modern AI-driven technologies. His journey from Senior
                Engineering roles to founding a premier education technology
                firm was driven by a single goal:{' '}
                <span className="font-bold text-primary">
                  bridging the massive gap between academic learning and
                  industrial reality.
                </span>
              </p>

              <p className="text-slate-600 text-lg leading-relaxed">
                Under his leadership, Global AIIT has evolved into a platform
                focused on AI, Machine Learning, Data Science, MLOps, AIOps,
                DevOps, and Cloud technologies, helping professionals develop
                practical, industry-ready skills and successfully navigate
                challenging technical interviews at leading technology
                companies.
              </p>

            </div>

            {/* Professional Highlights */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-cyan-50 rounded-3xl p-8 border border-cyan-100">

                <div className="text-cyan-600 text-3xl mb-4">
                  🎯
                </div>

                <h4 className="text-xl font-bold text-primary mb-2">
                  Placements Driven
                </h4>

                <p className="text-slate-600">
                  Successfully placed thousands of students into high-paying
                  roles at Google, Amazon, and Microsoft.
                </p>

              </div>

              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">

                <div className="text-blue-600 text-3xl mb-4">
                  📚
                </div>

                <h4 className="text-xl font-bold text-primary mb-2">
                  Curriculum Architect
                </h4>

                <p className="text-slate-600">
                  Designer of the "Production-Ready" roadmap used by working
                  professionals worldwide.
                </p>

              </div>

            </div>

            {/* Quote */}
            <div className="relative p-12 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl">

              <div className="absolute top-6 right-6 text-white/10 text-8xl">
                “
              </div>

              <p className="text-2xl md:text-3xl italic font-light leading-snug relative z-10">
                “We don't just teach tools; we build the mindset required to
                solve complex AI, ML & Data Science challenges at a global
                scale.”
              </p>

              <p className="mt-6 text-cyan-400 font-bold">
                — Zuber Shaikh
              </p>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}