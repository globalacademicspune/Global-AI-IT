'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Linkedin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const mentorData = [
  {
    key: 'zuber',
    name: 'Zuber Shaikh',
    followers: 'Founder & CEO | AI & Cloud Evangelist',
    experience: [
      'CEO of Global AIIT | 11+ Years IT Leadership',
      'Azure, GCP and AWS Certified Solutions Architect',
      'Trained 10,000+ professionals in AI, ML & Data Science',
      'Certified Ethical Hacker (CEH) & Cybersecurity Specialist',
      'Pioneer in AI-powered Smart Classroom ecosystems',
    ],
    quote: "My mission is to create India's smartest, AI-first education platform. We bridge the gap between technical complexity and real-world business impact.",
    imageUrl: '/zuber.jpeg',
    featured: true,
  },
  {
    key: 'anis-sayed',
    name: 'Anis Sayed',
    followers: 'Big Data DevOps Expert | Dubai, UAE',
    experience: [
      'Senior DevOps Engineer at Emirates NBD, Dubai',
      'Specialist in Enterprise-Scale Cloud Infrastructure',
      'Expert in Security, Compliance & Platform Stability',
      'AWS Certified Professional & Big Data Administrator',
    ],
    quote: "I focus on production-grade stability. My goal is to teach you how to manage and optimize mission-critical data platforms at a global scale.",
    imageUrl: '/anis.jpeg',
  },
  {
    key: 'sufiyan-sayyed',
    name: 'Sufiyan Sayyed',
    followers: 'Cloud & DevOps Architect | Riyadh, KSA',
    experience: [
      'Cloud Architect at CNTXT - Google Cloud Partner',
      '4X GCP Certified | AWS Certified Professional',
      'Specialist in Infrastructure as Code (Terraform) & Kubernetes',
      'Leading Digital Transformation for Enterprise Clients',
    ],
    quote: "I drive Google Cloud adoption across Saudi Arabia. I'll guide you through secure cloud foundations and scalable CI/CD pipelines.",
    imageUrl: '/sufiyan.png',
  },
  {
    key: 'saif-shaikh',
    name: 'Saif Shaikh', 
    followers: '9+ Years Experience | Greater Kuala Lumpur',
    experience: [
      'Senior Platform Specialist in CDP & HDP Ecosystems',
      'Expert in Cluster Administration & Security (Kerberos/AD)',
      'Master of Spark3, Kafka, and Oozie Automation',
      'Architecting Resilient Data Infrastructures on AWS',
    ],
    quote: "I empower organizations to leverage data platforms securely and at scale. I'm here to share the analytical depth required to master Cloudera.",
    imageUrl: '/saif.jpeg', 
  },
  {
    key: 'mukhtar-khan',
    name: 'Mukhtar Khan',
    followers: 'Linux Specialist & Systems Educator',
    experience: [
      'Expert in Linux Administration (RHEL/Ubuntu/CentOS)',
      'Specialist in Shell Scripting & System Automation',
      'Authority on Computer Fundamentals & Hardware Architecture',
      'Mentoring students in OS Security & Kernel Optimization',
    ],
    quote: "Mastering the command line is the foundation of all cloud technology. I focus on building your core computing strength from the ground up.",
    imageUrl: '/mukhtar.png',
  },
  {
    key: 'musaib-sabadiya',
    name: 'Musaib', 
    followers: 'Linux | Python | Apache NiFi Specialist',
    experience: [
      'Advanced Linux system administration for cloud and data platforms',
      'Python-based automation for operational workflows and data movement',
      'Apache NiFi specialist for designing and managing data flow pipelines',
      'Implementing secure, reliable and scalable data ingestion architectures',
    ],
    quote: "I believe the best way to learn cloud and data engineering is by building real systems. My goal is to make complex technologies simple, practical, and job-ready.",
    imageUrl: '/musaib.jpeg',
  },
]

export default function Mentor() {
  return (
    <section id="mentors" className="py-24 bg-transparent text-white relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-xs font-semibold tracking-wider text-ai-cyan uppercase">Industry Experts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Know Your <span className="bg-gradient-to-r from-ai-cyan to-ai-purple bg-clip-text text-transparent">Mentors</span></h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Learn from industry leaders who have built and scaled real-world data infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentorData.map((mentor) => (
            <Card key={mentor.key} className="bg-white/[0.01] border border-white/10 backdrop-blur-xl p-6 space-y-4 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:border-ai-cyan/40 flex flex-col w-full group relative overflow-hidden">
              <div className="flex flex-col items-center text-center">
                {mentor.key === 'zuber' ? (
                  <Link href="/zuber" className="cursor-pointer group/img">
                    <div className="w-36 h-36 rounded-full bg-ai-cyan/20 border border-white/10 overflow-hidden shadow-xl ring-0 group-hover/img:ring-4 ring-ai-cyan/40 transition-all">
                      <img src={mentor.imageUrl} alt={mentor.name} className="w-full h-full object-cover object-[center_20%]" />
                    </div>
                  </Link>
                ) : (
                  <div className="w-36 h-36 rounded-full bg-ai-purple/20 border border-white/10 overflow-hidden shadow-xl">
                    <img src={mentor.imageUrl} alt={mentor.name} className="w-full h-full object-cover object-[center_20%]" />
                  </div>
                )}

                {mentor.key === 'zuber' ? (
                  <Link href="/zuber" className="mt-4">
                    <h3 className="text-2xl font-bold tracking-tight text-white hover:text-ai-cyan transition-colors">{mentor.name}</h3>
                  </Link>
                ) : (
                  <h3 className="text-2xl font-bold tracking-tight text-white mt-4">{mentor.name}</h3>
                )}

                <p className="text-xs font-medium text-gray-400 flex items-center gap-1.5 mt-1.5 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                  <Linkedin size={13} className="text-ai-cyan" /> {mentor.followers}
                </p>
              </div>

              <ul className="space-y-2.5 border-y border-white/5 py-4 flex-grow">
                {mentor.experience.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-300 leading-snug">
                    <CheckCircle size={15} className="text-ai-cyan flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm leading-relaxed italic text-gray-400 pt-1 mb-4 relative pl-3 border-l-2 border-ai-purple/30">"{mentor.quote}"</p>

              {mentor.key === 'zuber' && (
                <Link href="/zuber" className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-ai-cyan to-ai-purple text-gray-950 font-bold hover:opacity-90 transition-all duration-300 text-sm shadow-md">
                  View Full Profile <ExternalLink size={14} />
                </Link>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}