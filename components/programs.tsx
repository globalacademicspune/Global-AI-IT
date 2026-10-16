'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  CheckCircle2,
  Clock,
  Zap,
  X,
  BookOpen,
  Medal,
  Award,
  Crown,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react'

const courseTracks = [
  {
    title: 'AI & Machine Learning',
    category: 'AI/ML',
    duration: '20 weeks',
    level: 'Beginner to Advanced',
    description:
      'Build intelligent applications using machine learning, deep learning, and modern AI technologies.',
    topics: [
      'Python for Machine Learning',
      'NumPy, Pandas & Data Manipulation',
      'Data Visualization with Matplotlib & Seaborn',
      'Supervised Learning Algorithms',
      'Unsupervised Learning & Clustering',
      'Ensemble Methods & Random Forests',
      'Feature Engineering & Selection',
      'Neural Networks Basics',
      'Deep Learning with TensorFlow & PyTorch',
      'Computer Vision & Image Processing',
      'Natural Language Processing (NLP)',
      'Recommendation Systems',
      'Model Deployment & MLOps',
      'GenAI & LLMs',
    ],
  },
  {
    title: 'Data Science',
    category: 'Data Science',
    duration: '20 weeks',
    level: 'Beginner to Advanced',
    description:
      'Learn data analysis, visualization, statistical techniques, and predictive modelling.',
    topics: [
      'Python Programming for Data Science',
      'NumPy and Pandas',
      'Data Cleaning and Preprocessing',
      'Exploratory Data Analysis',
      'Statistics and Probability',
      'Data Visualization with Matplotlib and Seaborn',
      'SQL for Data Analysis',
      'Feature Engineering',
      'Regression and Classification',
      'Clustering and Segmentation',
      'Model Evaluation',
      'Business Intelligence Fundamentals',
      'Real-World Data Science Projects',
    ],
  },
  {
    title: 'Data Engineering & Big Data',
    category: 'Data Engineering',
    duration: '24 weeks',
    level: 'Beginner to Advanced',
    description:
      'Build scalable data pipelines and work with distributed data processing technologies.',
    topics: [
      'Hadoop Ecosystem Architecture',
      'HDFS & MapReduce',
      'Apache Spark Advanced',
      'Scala for Big Data',
      'Apache Kafka Advanced',
      'Stream Processing',
      'Apache Cassandra',
      'HBase & NoSQL Databases',
      'Apache Hive & Pig',
      'Spark SQL & DataFrames',
      'Machine Learning with Spark MLlib',
      'Delta Lake & Data Lakehouse',
      'Apache Flink',
      'Advanced Optimization Techniques',
      'Production Deployment & Monitoring',
      'Data Quality and Governance',
    ],
  },
  {
    title: 'DevOps',
    category: 'DevOps',
    duration: '16 weeks',
    level: 'Beginner to Advanced',
    description:
      'Learn CI/CD, automation, containerization, and reliable software delivery practices.',
    topics: [
      'Linux Fundamentals & Shell Scripting',
      'Git & Version Control',
      'Docker Containerization',
      'Docker Compose',
      'CI/CD Pipelines with Jenkins',
      'GitLab CI/CD',
      'GitHub Actions',
      'Infrastructure as Code with Terraform',
      'Ansible Configuration Management',
      'Kubernetes Basics',
      'Monitoring with Prometheus',
      'Logging and Observability',
      'AWS EC2 & Cloud Deployment',
    ],
  },
  {
    title: 'Kubernetes & Cloud Native',
    category: 'Kubernetes',
    duration: '18 weeks',
    level: 'Beginner to Advanced',
    description:
      'Master container orchestration, microservices, and cloud-native application platforms.',
    topics: [
      'Kubernetes Architecture & Concepts',
      'Pods, Deployments & Services',
      'ConfigMaps & Secrets',
      'Persistent Volumes & Storage',
      'Ingress & Network Policies',
      'StatefulSets & DaemonSets',
      'Helm Package Manager',
      'Kubernetes Operators',
      'Service Mesh with Istio',
      'Microservices Architecture',
      'Cloud-Native Development',
      'Kubernetes Security & RBAC',
      'Scaling & Performance Optimization',
    ],
  },
  {
    title: 'Cloud Solutions Architect',
    category: 'Cloud',
    duration: '16 weeks',
    level: 'Beginner to Advanced',
    description:
      'Design secure, scalable, and highly available cloud architectures across AWS, Azure, and GCP.',
    topics: [
      'Cloud Architecture Fundamentals',
      'Well-Architected Frameworks',
      'AWS VPC, Azure VNet & GCP VPC',
      'Identity & Access Management',
      'Cloud Security & Compliance',
      'Compute Services',
      'S3 and Cloud Storage',
      'Managed Database Services',
      'Serverless Architecture',
      'Docker & Kubernetes',
      'High Availability & Disaster Recovery',
      'Terraform & CloudFormation',
      'Monitoring and Logging',
      'Cost Optimization & Governance',
      'Hybrid and Multi-Cloud Architecture',
    ],
  },
  {
    title: 'Cybersecurity',
    category: 'Security',
    duration: '20 weeks',
    level: 'Beginner to Advanced',
    description:
      'Develop cybersecurity fundamentals through networking, system security, and defensive security labs.',
    topics: [
      'Networking Fundamentals',
      'OSI and TCP/IP Models',
      'Linux and Windows Security Fundamentals',
      'Security Principles and CIA Triad',
      'Firewalls and IDS/IPS',
      'DNS and Network Security',
      'Vulnerability Assessment Fundamentals',
      'Web Security and OWASP Top 10',
      'Security Logging and Monitoring',
      'Incident Response Fundamentals',
      'Endpoint Security',
      'Security Tools and Lab Practice',
      'Threat Detection and Mitigation',
      'Security Documentation and Reporting',
    ],
  },
]

const packages = [
  {
    id: 'bronze',
    name: 'BRONZE',
    subtitle: 'FOUNDATION',
    price: '$399',
    description: 'Build your foundation with core skills and structured learning.',
    Icon: Medal,
    accent: '#E9A77A',
    borderClass: 'border-orange-300/40 hover:border-orange-300/70',
    iconClass: 'text-orange-300',
    buttonClass:
      'bg-gradient-to-r from-orange-200 to-orange-400 text-slate-950 hover:opacity-90',
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
    featured: true,
    borderClass:
      'border-blue-400/80 shadow-[0_0_30px_rgba(59,130,246,0.16)]',
    iconClass: 'text-blue-300',
    buttonClass:
      'bg-gradient-to-r from-blue-300 to-blue-500 text-slate-950 hover:opacity-90',
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
    borderClass:
      'border-yellow-400/50 hover:border-yellow-300/80',
    iconClass: 'text-yellow-300',
    buttonClass:
      'bg-gradient-to-r from-yellow-200 to-yellow-500 text-slate-950 hover:opacity-90',
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

export default function Programs() {
  const [selectedTrack, setSelectedTrack] = useState(courseTracks[0].title)
  const [selectedPackage, setSelectedPackage] = useState<
    (typeof packages)[number] | null
  >(null)
  const [showSyllabus, setShowSyllabus] = useState(false)

  const activeTrack =
    courseTracks.find((track) => track.title === selectedTrack) ??
    courseTracks[0]

  return (
    <>
      <section
        id="programs-section"
        className="relative z-10 overflow-hidden bg-transparent py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-ai-cyan">
              Learn • Practice • Advance
            </p>

            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-ai-cyan to-ai-purple bg-clip-text text-transparent">
                Learning Path
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Select your course track and choose the learning package that
              matches your goals. Build practical skills with structured
              learning and expert guidance.
            </p>
          </div>

          <div className="mx-auto mb-14 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
            <label
              htmlFor="course-track"
              className="mb-3 block text-sm font-bold text-white"
            >
              1. Select Your Course Track
            </label>

            <select
              id="course-track"
              value={selectedTrack}
              onChange={(event) => setSelectedTrack(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-[#0b1220] px-4 py-4 text-sm font-semibold text-white outline-none transition focus:border-ai-cyan focus:ring-2 focus:ring-ai-cyan/20"
            >
              {courseTracks.map((track) => (
                <option key={track.title} value={track.title}>
                  {track.title}
                </option>
              ))}
            </select>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-gray-400">
                Selected track:{' '}
                <span className="font-semibold text-ai-cyan">
                  {activeTrack.title}
                </span>
              </p>

              <button
                type="button"
                onClick={() => setShowSyllabus(true)}
                className="inline-flex items-center gap-2 text-sm font-bold text-ai-cyan transition hover:text-white"
              >
                <BookOpen size={16} />
                View Course Syllabus
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Course: {activeTrack.title}
            </p>

            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
              2. Choose Your Package
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              All packages apply to your selected course track.
            </p>
          </div>

          <div className="grid items-stretch gap-7 md:grid-cols-3 md:gap-6">
            {packages.map((plan) => {
              const Icon = plan.Icon

              return (
                <div
                  key={plan.id}
                  className="relative flex min-w-0 flex-col pt-3"
                >
                  {plan.featured && (
                    <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-ai-cyan to-blue-500 px-5 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-slate-950 shadow-lg sm:text-xs">
                      Most Popular
                    </div>
                  )}

                  <Card
                    className={`flex h-full flex-col rounded-2xl border bg-[#080d18]/95 p-6 pt-9 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 sm:p-7 sm:pt-10 ${plan.borderClass}`}
                  >
                    <div className="mb-6 text-center">
                      <Icon
                        size={56}
                        strokeWidth={1.6}
                        className={`mx-auto mb-4 ${plan.iconClass}`}
                      />

                      <h4
                        className="text-2xl font-black tracking-[0.18em] text-white"
                        style={{ color: plan.accent }}
                      >
                        {plan.name}
                      </h4>

                      <p className="mt-1 text-xs font-semibold tracking-[0.22em] text-gray-400">
                        {plan.subtitle}
                      </p>

                      <div className="mt-6 flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                          {plan.price}
                        </span>
                        <span className="text-xs text-gray-400">
                          / per course
                        </span>
                      </div>

                      <p className="mt-5 min-h-[60px] text-sm leading-relaxed text-gray-400">
                        {plan.description}
                      </p>
                    </div>

                    <div
                      className="mb-6 border-y py-5"
                      style={{ borderColor: `${plan.accent}45` }}
                    >
                      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-300">
                        What&apos;s Included
                      </p>

                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-300"
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

                    <div className="mt-auto space-y-3">
                      <Button
                        type="button"
                        onClick={() => setSelectedPackage(plan)}
                        className={`w-full rounded-xl py-6 font-extrabold transition ${plan.buttonClass}`}
                      >
                        Choose {plan.name}
                        <ChevronRight size={17} className="ml-1" />
                      </Button>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPackage(plan)
                          setShowSyllabus(true)
                        }}
                        className="w-full py-2 text-xs font-semibold text-gray-400 transition hover:text-white"
                      >
                        View syllabus and package details
                      </button>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 border-y border-white/10 py-8 sm:grid-cols-4">
            {[
              {
                icon: BookOpen,
                title: '7 Learning Tracks',
                subtitle: 'Choose your course',
              },
              {
                icon: ShieldCheck,
                title: 'Practical Learning',
                subtitle: 'Build your skills',
              },
              {
                icon: Zap,
                title: 'Hands-on Projects',
                subtitle: 'Apply your knowledge',
              },
              {
                icon: Clock,
                title: 'Structured Training',
                subtitle: 'Follow a learning path',
              },
            ].map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 px-1 sm:px-3"
                >
                  <Icon size={25} className="shrink-0 text-ai-cyan" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {showSyllabus && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowSyllabus(false)
            }
          }}
        >
          <Card className="relative max-h-[88vh] w-full max-w-3xl space-y-6 overflow-y-auto rounded-2xl border border-white/10 bg-[#070a13] p-5 text-gray-200 sm:p-8">
            <button
              type="button"
              aria-label="Close syllabus"
              onClick={() => setShowSyllabus(false)}
              className="absolute right-5 top-5 rounded-lg p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={22} />
            </button>

            <div className="pr-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-ai-cyan">
                Course Overview
              </p>

              <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {activeTrack.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {activeTrack.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Track Duration
                </p>
                <p className="mt-1 font-bold text-white">
                  {activeTrack.duration}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Target Level
                </p>
                <p className="mt-1 text-sm font-bold text-ai-cyan">
                  {activeTrack.level}
                </p>
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <BookOpen size={19} className="text-ai-purple" />
                <h4 className="font-bold text-white">
                  Syllabus Domains Covered
                </h4>
              </div>

              <div className="grid max-h-[36vh] grid-cols-1 gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2">
                {activeTrack.topics.map((topic, index) => (
                  <div
                    key={`${activeTrack.title}-${index}`}
                    className="flex items-start gap-2.5 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-sm text-gray-300"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-ai-cyan"
                    />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedPackage && (
              <div className="rounded-xl border border-ai-cyan/20 bg-ai-cyan/5 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-ai-cyan">
                  Selected Package
                </p>

                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-extrabold text-white">
                    {selectedPackage.name} — {selectedPackage.subtitle}
                  </p>

                  <p className="text-xl font-black text-white">
                    {selectedPackage.price}
                    <span className="ml-1 text-xs font-normal text-gray-400">
                      / course
                    </span>
                  </p>
                </div>

                <ul className="mt-3 space-y-2">
                  {selectedPackage.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-ai-cyan"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href={`/career-roadmap?track=${encodeURIComponent(activeTrack.title)}${selectedPackage ? `&plan=${selectedPackage.id}` : ''}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ai-cyan to-ai-purple px-5 py-3.5 text-center text-sm font-extrabold text-slate-950 transition hover:opacity-90"
              >
                Continue to Career Roadmap
                <ChevronRight size={16} />
              </Link>

              <Button
                type="button"
                onClick={() => setShowSyllabus(false)}
                className="!flex-1 !border !border-white/20 !bg-slate-800 !py-6 !font-bold !text-white hover:!bg-slate-700"
              >
                Close Overview
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}