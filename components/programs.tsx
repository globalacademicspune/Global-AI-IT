"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Zap, X, BookOpen } from "lucide-react"
import { useState } from "react"
import Link from 'next/link'

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null)

  const programs = [
    {
      title: "DevOps Mastery Program",
      description: "Learn CI/CD pipelines, containerization, and infrastructure automation for modern deployment",
      duration: "16 weeks",
      level: "Beginner to Intermediate",
      price: "",
      badge: "New",
      features: ["Live Classes", "Hands-on Labs", "Docker & Kubernetes", "Certificate"],
      category: "DevOps",
      topics: [
        "Linux Fundamentals & Shell Scripting", "Git & Version Control", "Docker Containerization",
        "Docker Compose & Multi-container Apps", "CI/CD Pipelines with Jenkins", "GitLab CI/CD",
        "GitHub Actions", "Infrastructure as Code (Terraform)", "Ansible Configuration Management",
        "Kubernetes Basics", "Monitoring & Logging (Prometheus, ELK)", "AWS EC2 & Cloud Deployment",
      ],
    },
    {
      title: "Kubernetes & Cloud Native",
      description: "Master container orchestration, microservices, and cloud-native application development",
      duration: "18 weeks",
      level: "Intermediate",
      price: "",
      badge: "Best Value",
      features: ["1-on-1 Mentoring", "Real Projects", "Cloud Platforms", "Certificate"],
      featured: true,
      category: "Kubernetes",
      topics: [
        "Kubernetes Architecture & Concepts", "Pods, Deployments & Services", "ConfigMaps & Secrets",
        "Persistent Volumes & Storage", "Ingress & Network Policies", "StatefulSets & DaemonSets",
        "Helm Package Manager", "Kubernetes Operators", "Service Mesh (Istio)", "Microservices Architecture",
        "Cloud-Native Development", "Kubernetes Security & RBAC", "Scaling & Performance Optimization",
      ],
    },
    {
      title: "AI & Machine Learning Bootcamp",
      description: "Comprehensive program in AI, deep learning, and machine learning model deployment",
      duration: "20 weeks",
      level: "Intermediate to Advanced",
      price: "",
      badge: "Most Popular",
      features: ["Live Classes", "Project-Based Learning", "Industry Mentors", "Certificate"],
      category: "AI/ML",
      topics: [
        "Python for Machine Learning", "NumPy, Pandas & Data Manipulation", "Data Visualization with Matplotlib & Seaborn",
        "Supervised Learning Algorithms", "Unsupervised Learning & Clustering", "Ensemble Methods & Random Forests",
        "Feature Engineering & Selection", "Neural Networks Basics", "Deep Learning with TensorFlow & PyTorch",
        "Computer Vision & Image Processing", "Natural Language Processing (NLP)", "Recommendation Systems",
        "Model Deployment & MLOps", "GenAI & LLMs (ChatGPT, Hugging Face)",
      ],
    },
    {
      title: "Cloud Solutions Architect Program",
      description: "Design, deploy, and manage secure, scalable, and highly available cloud architectures across AWS, Microsoft Azure, and Google Cloud Platform (GCP).",
      duration: "16 weeks",
      level: "Intermediate to Advanced",
      price: "",
      badge: "Architect Track",
      features: ["Live Classes", "Architecture Design Labs", "Multi-Cloud Case Studies (AWS, Azure, GCP)", "Certification Prep (AWS, Azure & GCP)"],
      category: "Big Data",
      topics: [
        "Cloud Architecture Fundamentals & Well-Architected Frameworks", "Cloud Networking (AWS VPC, Azure VNet, GCP VPC)",
        "Identity & Access Management (AWS IAM, Azure AD, GCP IAM)", "Cloud Security & Compliance",
        "Compute Services (EC2, Azure VM Scale Sets)", "Storage Services (S3, Azure Blob Storage)",
        "Database Services (RDS, DynamoDB, Cosmos DB)", "Serverless Architecture (AWS Lambda, Azure Functions)",
        "Containers & Orchestration (Docker, Kubernetes)", "High Availability & Disaster Recovery",
        "Infrastructure as Code (Terraform, CloudFormation)", "Monitoring & Logging (CloudWatch, Azure Monitor)",
        "Cost Optimization & Governance", "Hybrid & Multi-Cloud Architecture Strategy",
      ],
    },
    {
      title: "Ultimate Big Data Masters",
      description: "Comprehensive program covering all big data technologies and frameworks",
      duration: "24 weeks",
      level: "Intermediate to Advanced",
      price: "",
      badge: "Best Value",
      features: ["1-on-1 Mentoring", "Job Placement Support", "Industry Projects", "Certificate"],
      featured: true,
      category: "Big Data",
      topics: [
        "Hadoop Ecosystem Architecture", "HDFS & MapReduce", "Apache Spark Advanced", "Scala for Big Data",
        "Apache Kafka Advanced", "Stream Processing", "Apache Cassandra", "HBase & NoSQL Databases",
        "Apache Hive & Pig", "Spark SQL & DataFrames", "Machine Learning with Spark MLlib",
        "Delta Lake & Data Lakehouse", "Apache Flink", "Advanced Optimization Techniques", "Production Deployment & Monitoring",
      ],
    },
    {
      title: "Advanced Data Engineering Program",
      description: "Advanced techniques and optimization strategies for experienced engineers",
      duration: "20 weeks",
      level: "Advanced",
      price: "",
      badge: "Expert Level",
      features: ["Custom Projects", "Career Coaching", "Networking", "Certificate"],
      category: "Big Data",
      topics: [
        "Performance Tuning & Optimization", "Distributed Systems Design", "Advanced Spark Optimization",
        "Cost Optimization in Cloud", "Real-time Analytics", "Advanced Kafka Patterns", "Stream Processing Architecture",
        "Data Quality & Testing", "Data Governance & Compliance", "Security & Encryption", "Advanced Schema Design",
        "Capacity Planning", "Troubleshooting & Debugging", "High-Availability Systems", "Industry Best Practices",
      ],
    },
  ]

  return (
    <>
      <section id="programs-section" className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Professional Programs</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Choose the program that fits your career goals and experience level</p>
          </div>

          {/* Emerging Tech Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-10 tracking-tight text-white border-l-4 border-ai-cyan pl-4">Emerging Technologies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {programs.filter((p) => p.category !== "Big Data").map((program) => (
                <div key={program.title} className="relative group">
                  {program.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-ai-cyan to-ai-purple text-gray-950 px-4 py-0.5 rounded-full text-xs font-bold z-10 shadow-lg">
                      {program.badge}
                    </div>
                  )}
                  <Card className={`h-full border backdrop-blur-md p-8 flex flex-col justify-between transition-all duration-500 rounded-2xl bg-white/[0.01] hover:shadow-[0_15px_30px_rgba(0,210,255,0.08)] ${program.featured ? 'border-ai-cyan/40 hover:border-ai-cyan' : 'border-white/10 hover:border-ai-purple/50'}`}>
                    <div className="space-y-5">
                      <span className="inline-block bg-white/5 border border-white/10 text-ai-cyan px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase">{program.level}</span>
                      <h4 className="text-2xl font-bold text-white tracking-tight group-hover:text-ai-cyan transition-colors">{program.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{program.description}</p>
                      <div className="flex gap-4 border-y border-white/5 py-4 text-xs text-gray-300 font-medium">
                        <div className="flex items-center gap-1.5"><Clock size={14} className="text-ai-cyan" /> {program.duration}</div>
                        <div className="flex items-center gap-1.5"><Zap size={14} className="text-ai-purple" /> {program.category}</div>
                      </div>
                      <div className="space-y-2.5 pt-2">
                        {program.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs text-gray-400"><CheckCircle2 size={14} className="text-ai-cyan shrink-0" />{f}</div>
                        ))}
                      </div>
                    </div>
                    <Button onClick={() => setSelectedProgram(program)} className="w-full font-bold mt-8 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer">Learn More</Button>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Big Data Section */}
          <div>
            <h3 className="text-2xl font-bold mb-10 tracking-tight text-white border-l-4 border-ai-purple pl-4">Big Data & Engineering</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {programs.filter((p) => p.category === "Big Data").map((program) => (
                <div key={program.title} className="relative group">
                  {program.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-ai-cyan to-ai-purple text-gray-950 px-4 py-0.5 rounded-full text-xs font-bold z-10 shadow-lg">
                      {program.badge}
                    </div>
                  )}
                  <Card className={`h-full border backdrop-blur-md p-8 flex flex-col justify-between transition-all duration-500 rounded-2xl bg-white/[0.01] hover:shadow-[0_15px_30px_rgba(99,102,241,0.08)] ${program.featured ? 'border-ai-purple/40 hover:border-ai-purple' : 'border-white/10 hover:border-ai-cyan/30'}`}>
                    <div className="space-y-5">
                      <span className="inline-block bg-white/5 border border-white/10 text-ai-purple px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase">{program.level}</span>
                      <h4 className="text-2xl font-bold text-white tracking-tight group-hover:text-ai-purple transition-colors">{program.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{program.description}</p>
                      <div className="flex gap-4 border-y border-white/5 py-4 text-xs text-gray-300 font-medium">
                        <div className="flex items-center gap-1.5"><Clock size={14} className="text-ai-purple" /> {program.duration}</div>
                        <div className="flex items-center gap-1.5"><Zap size={14} className="text-ai-cyan" /> Architecture</div>
                      </div>
                      <div className="space-y-2.5 pt-2">
                        {program.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs text-gray-400"><CheckCircle2 size={14} className="text-ai-purple shrink-0" />{f}</div>
                        ))}
                      </div>
                    </div>
                    <Button onClick={() => setSelectedProgram(program)} className="w-full font-bold mt-8 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer">Learn More</Button>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Topics Overlay Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#070a13] border border-white/10 p-8 rounded-2xl relative space-y-6 text-gray-200">
            <button onClick={() => setSelectedProgram(null)} className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors"><X size={22} /></button>
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">{selectedProgram.title}</h2>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">{selectedProgram.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm font-medium">
              <div><p className="text-xs text-gray-500 font-mono">TRACK DURATION</p><p className="text-white font-bold mt-0.5">{selectedProgram.duration}</p></div>
              <div><p className="text-xs text-gray-500 font-mono">TARGET LEVEL</p><p className="text-ai-cyan font-bold mt-0.5">{selectedProgram.level}</p></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-bold"><BookOpen size={18} className="text-ai-purple" /><h3>Syllabus Domains Covered</h3></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[30vh] overflow-y-auto pr-1">
                {selectedProgram.topics.map((topic: string, i: number) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.01] border border-white/5 text-xs text-gray-300 font-medium"><CheckCircle2 size={14} className="text-ai-cyan shrink-0 mt-0.5" /><span>{topic}</span></div>
                ))}
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <Link href="/career-roadmap" className="flex-1 py-3 text-center rounded-xl bg-gradient-to-r from-ai-cyan to-ai-purple text-gray-950 font-bold text-sm shadow-md hover:opacity-90 transition-all">Apply & Build Roadmap</Link>
              <Button variant="outline" onClick={() => setSelectedProgram(null)} className="flex-1 py-3 font-bold text-sm rounded-xl border-white/10 text-white hover:bg-white/5 cursor-pointer">Close Overview</Button>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}