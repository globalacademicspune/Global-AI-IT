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
      'Azure Solutions Architect Expert, GCP Professional & AWS Certified',
      'Trained 50,000+ professionals in AI & Big Data',
      'Certified Ethical Hacker (CEH) & Cybersecurity Specialist',
      'Pioneer in AI-powered Smart Classroom ecosystems',
    ],
    quote:
      "My mission is to create India's smartest, AI-first education platform. We bridge the gap between technical complexity and real-world business impact.",
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
    quote:
      "I focus on production-grade stability. My goal is to teach you how to manage and optimize mission-critical data platforms at a global scale.",
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
    quote:
      "I drive Google Cloud adoption across Saudi Arabia. I'll guide you through secure cloud foundations and scalable CI/CD pipelines.",
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
    quote:
      "I empower organizations to leverage data platforms securely and at scale. I'm here to share the analytical depth required to master Cloudera.",
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
    quote:
      "Mastering the command line is the foundation of all cloud technology. I focus on building your core computing strength from the ground up.",
    imageUrl: '/placeholder-mentor.png',
  },
  {
    key: 'musaib-sabadiya',
    name: 'Musaib Sabadiya',
    followers: 'Linux | Python | Apache NiFi Specialist',
    experience: [
      'Advanced Linux system administration for cloud and data platforms',
      'Python-based automation for operational workflows and data movement',
      'Apache NiFi specialist for designing and managing data flow pipelines',
      'Implementing secure, reliable and scalable data ingestion architectures',
    ],
    quote:
      "I believe the best way to learn cloud and data engineering is by building real systems. My goal is to make complex technologies simple, practical, and job-ready.",
    imageUrl: '/musaib.jpeg',
  },
]

export default function Mentor() {
  return (
    <section id="mentors" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Know Your Mentors
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Learn from industry leaders who have built and scaled real-world data
            infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {mentorData.map((mentor) => (
            <Card
              key={mentor.key}
              className="bg-white/10 text-white border-white/20 backdrop-blur-sm p-6 space-y-4 transition-all duration-300 transform hover:scale-[1.03] shadow-xl border-2 border-transparent hover:border-cyan-400 flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]"
            >
              <div className="flex flex-col items-center text-center">
                {mentor.key === 'zuber' ? (
                  <Link href="/zuber" className="cursor-pointer group">
                    <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-cyan-400 mb-6 overflow-hidden shadow-xl ring-0 group-hover:ring-4 ring-cyan-400/50 transition-all">
                      <img
                        src={mentor.imageUrl}
                        alt={`Picture of ${mentor.name}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-cyan-400 mb-6 overflow-hidden shadow-xl">
                    <img
                      src={mentor.imageUrl}
                      alt={`Picture of ${mentor.name}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}

                {mentor.key === 'zuber' ? (
                  <Link href="/zuber">
                    <h3 className="text-2xl font-bold mb-1 hover:text-cyan-400 transition-colors">
                      {mentor.name}
                    </h3>
                  </Link>
                ) : (
                  <h3 className="text-2xl font-bold mb-1">{mentor.name}</h3>
                )}

                <p className="text-sm opacity-80 flex items-center gap-2">
                  <Linkedin size={16} className="text-cyan-400" />
                  {mentor.followers}
                </p>
              </div>

              <ul className="space-y-2 border-y border-white/20 py-4 flex-grow">
                {mentor.experience.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle
                      size={16}
                      className="text-cyan-400 flex-shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm leading-relaxed italic opacity-90 pt-2 mb-4">
                "{mentor.quote}"
              </p>

              {mentor.key === 'zuber' && (
                <Link
                  href="/zuber"
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-cyan-400 text-primary font-bold hover:bg-cyan-300 transition-colors"
                >
                  View Full Profile <ExternalLink size={16} />
                </Link>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
