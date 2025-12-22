'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { CheckCircle, Linkedin, Award, Users, BookOpen, MessageSquare, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ZuberProfile() {
  const whatsappUrl = "https://wa.me/919168998839?text=Hello%20Zuber,%20I'd%20like%20to%20book%20a%201:1%20session."
  const linkedinUrl = "https://www.linkedin.com/in/zuber-s-26b82781?utm_source=share_via&utm_content=profile&utm_medium=member_android"

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-900 to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 shadow-2xl">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary">
              <img 
                src="/zuber.jpeg" 
                alt="Zuber Shaikh" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Zuber Shaikh</h1>
          
          <p className="text-xl md:text-2xl text-cyan-300 font-medium max-w-2xl mx-auto mb-8 italic">
            "Mentoring the Next Generation of Cloud & Big Data Leaders"
          </p>
          
          <div className="flex justify-center">
             <a 
               href={linkedinUrl} 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white/10 p-3 rounded-full hover:bg-cyan-400 hover:text-primary transition-all duration-300"
             >
               <Linkedin size={28} />
             </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Award className="text-cyan-500" /> Career Highlights
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Students Trained</p>
                  <p className="text-2xl font-black text-primary">50,000+</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Social Following</p>
                  <p className="text-2xl font-black text-primary">500,000+</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Experience</p>
                  <p className="text-2xl font-black text-primary">10+ Years</p>
                </div>
              </div>

              <Button 
                asChild
                className="w-full mt-8 bg-[#25D366] hover:bg-[#128C7E] text-white py-6 rounded-xl font-bold text-lg shadow-lg"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle size={24} /> Book a 1:1 Session
                </a>
              </Button>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold text-primary mb-6">About the CEO</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                As the Founder of <span className="font-bold text-slate-900">Global AIIT</span>, 
                Zuber Shaikh has spent over a decade architecting high-availability systems 
                and cloud-native solutions. His journey from Senior Engineering roles to 
                founding a premier education tech firm was driven by a single goal: 
                <span className="font-bold text-slate-900 text-primary"> bridging the massive gap between academic learning and industrial reality.</span>
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Under his leadership, Global AIIT has become a benchmark for training 
                professionals in Spark, Kafka, Kubernetes, and Cloud Data Warehousing, 
                with alumni successfully navigating the hardest technical interviews at 
                Tier-1 product firms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-50 rounded-3xl p-8 border border-cyan-100">
                <Users className="text-cyan-600 mb-4" size={32} />
                <h4 className="text-xl font-bold text-primary mb-2">Placements Driven</h4>
                <p className="text-slate-600">Successfully placed thousands of students into high-paying roles at Google, Amazon, and Microsoft.</p>
              </div>
              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                <BookOpen className="text-blue-600 mb-4" size={32} />
                <h4 className="text-xl font-bold text-primary mb-2">Curriculum Architect</h4>
                <p className="text-slate-600">Designer of the "Production-Ready" roadmap used by working professionals worldwide.</p>
              </div>
            </div>

            <div className="relative p-12 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl">
              <MessageSquare className="absolute top-6 right-6 text-white/10" size={120} />
              <p className="text-2xl md:text-3xl italic font-light leading-snug relative z-10">
                "We don't just teach tools; we build the mindset required to lead complex data projects at a global scale."
              </p>
              <p className="mt-6 text-cyan-400 font-bold">— Zuber Shaikh</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}