'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Briefcase, MapPin, Clock, Search, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const openRoles = [
  {
    title: "Big Data Mentor",
    department: "Education",
    type: "Part-time / Weekends",
    location: "Remote",
    description: "Share your expertise in Hadoop, Spark, and Cloud architectures with the next generation of engineers."
  },
  {
    title: "Cloud Solutions Architect",
    department: "Consulting",
    type: "Full-time",
    location: "Greater Kuala Lumpur",
    description: "Design and implement scalable cloud foundations for our enterprise global partners."
  },
  {
    title: "Linux Systems Trainer",
    department: "Education",
    type: "Contract",
    location: "Pune / Remote",
    description: "Teach core computing fundamentals and advanced Linux administration to aspiring IT professionals."
  }
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Join the AIIT Mission</h1>
          <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
            We are looking for industry practitioners who are passionate about teaching and building the future of AI-driven education.
          </p>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary">Open Positions</h2>
            <p className="text-slate-500 mt-2">Find your next challenge at Global AIIT</p>
          </div>
          <div className="hidden md:block">
             <span className="text-sm font-bold text-cyan-600 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-100">
               {openRoles.length} Active Roles
             </span>
          </div>
        </div>

        <div className="grid gap-6">
          {openRoles.map((role, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-cyan-600 transition-colors">
                      {role.title}
                    </h3>
                    <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded uppercase tracking-wider">
                      {role.department}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5"><Clock size={16} className="text-cyan-500"/> {role.type}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={16} className="text-cyan-500"/> {role.location}</span>
                  </div>
                  
                  <p className="text-slate-600 max-w-2xl leading-relaxed">
                    {role.description}
                  </p>
                </div>
                
                <Button className="bg-primary text-white hover:bg-cyan-500 px-8 py-6 rounded-2xl font-bold flex items-center gap-2 group/btn">
                  Apply Now <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* General Inquiry */}
        <div className="mt-16 text-center bg-white p-12 rounded-3xl border border-dashed border-slate-300">
          <Search className="mx-auto text-slate-400 mb-4" size={48} />
          <h3 className="text-xl font-bold text-primary mb-2">Don't see a perfect fit?</h3>
          <p className="text-slate-500 mb-6">We are always looking for exceptional talent. Send us your resume anyway!</p>
          <a href="mailto:go.globalacademics.pune@gmail.com" className="text-cyan-600 font-bold hover:underline">
            go.globalacademics.pune@gmail.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}