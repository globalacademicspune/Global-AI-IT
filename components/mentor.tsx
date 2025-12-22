'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Linkedin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const mentorData = [
  {
    key: 'zuber',
    name: 'Zuber Shaikh',
    followers: '500k+ Followers on LinkedIn, YouTube & Twitter',
    experience: [
      'Ex-Senior Engineer at Jio',
      'Ex-Senior Engineer at Barclays',
      'Founder & CEO of Global AIIT',
      'Trained 50K+ working professionals & students in Big Data & Cloud Computing',
    ],
    quote:
      "I have trained people who are now leading big teams at top product-based companies. It's not just a course to help you crack interviews; Interview cracking is just one part. The bigger part is to help you prepare so well that you can work on the hardest of projects with ease. Join us to master the technologies that power tomorrow's data infrastructure.",
    imageUrl: '/zuber.jpeg',
    featured: true,
  },
  {
    key: 'anis-sayed',
    name: 'Anis Sayed',
    followers: '150k+ Followers on LinkedIn',
    experience: [
      'Senior DevOps/Big Data Administrator at Emirates NBD, Dubai',
      'AWS Certified Professional',
      '8+ Years in Cloud & DevOps',
    ],
    quote:
      'Expert in managing enterprise-scale cloud infrastructure, emphasizing security, compliance, monitoring, and operational stability.',
    imageUrl: '/anis.jpeg',
  },
  {
    key: 'sufiyan-sayyed',
    name: 'Sufiyan Sayyed',
    followers: '100k+ Followers on Twitter',
    experience: [
      'Senior Cloud and DevOps Engineer at CNTXT, Saudi Arabia',
      '4X GCP Certified | AWS Certified Professional',
      '8+ Years in Cloud and DevOps',
    ],
    quote:
      'Guiding teams in designing, deploying, and operating scalable cloud and DevOps solutions, with a strong focus on CI/CD pipelines, infrastructure as code, and production-grade systems.',
    imageUrl: '/sufiyan.png',
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

        <div className="grid md:grid-cols-3 gap-8">
          {mentorData.map((mentor) => (
            <Card
              key={mentor.key}
              className="bg-white/10 text-white border-white/20 backdrop-blur-sm p-6 space-y-4 transition-all duration-300 transform hover:scale-[1.03] shadow-xl border-2 border-transparent hover:border-cyan-400 flex flex-col"
            >
              <div className="flex flex-col items-center text-center">
                {/* Image Link for Zuber */}
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

                {/* Name Link for Zuber */}
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

              {/* View Profile Button specifically for Zuber */}
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
