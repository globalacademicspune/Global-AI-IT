"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Zap, X, BookOpen } from 'lucide-react'
import { useState } from "react"

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null)

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
        "Linux Fundamentals & Shell Scripting",
        "Git & Version Control",
        "Docker Containerization",
        "Docker Compose & Multi-container Apps",
        "CI/CD Pipelines with Jenkins",
        "GitLab CI/CD",
        "GitHub Actions",
        "Infrastructure as Code (Terraform)",
        "Ansible Configuration Management",
        "Kubernetes Basics",
        "Monitoring & Logging (Prometheus, ELK)",
        "AWS EC2 & Cloud Deployment",
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
        "Kubernetes Architecture & Concepts",
        "Pods, Deployments & Services",
        "ConfigMaps & Secrets",
        "Persistent Volumes & Storage",
        "Ingress & Network Policies",
        "StatefulSets & DaemonSets",
        "Helm Package Manager",
        "Kubernetes Operators",
        "Service Mesh (Istio)",
        "Microservices Architecture",
        "Cloud-Native Development",
        "Kubernetes Security & RBAC",
        "Scaling & Performance Optimization",
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
        "Python for Machine Learning",
        "NumPy, Pandas & Data Manipulation",
        "Data Visualization with Matplotlib & Seaborn",
        "Supervised Learning Algorithms",
        "Unsupervised Learning & Clustering",
        "Ensemble Methods & Random Forests",
        "Feature Engineering & Selection",
        "Neural Networks Basics",
        "Deep Learning with TensorFlow & PyTorch",
        "Computer Vision & Image Processing",
        "Natural Language Processing (NLP)",
        "Recommendation Systems",
        "Model Deployment & MLOps",
        "GenAI & LLMs (ChatGPT, Hugging Face)",
      ],
    },
    {
      title: "Elite Data Engineering Program",
      description: "For professionals transitioning to data engineering with hands-on projects",
      duration: "14 weeks",
      level: "Beginner to Intermediate",
      price: "",
      badge: "Most Popular",
      features: ["Live Classes", "Project-Based Learning", "Lifetime Access", "Certificate"],
      category: "Big Data",
      topics: [
        "SQL & Database Fundamentals",
        "Data Warehousing Concepts",
        "ETL Process Design",
        "Apache Kafka Basics",
        "Apache Spark Fundamentals",
        "PySpark for Data Processing",
        "Data Pipelines & Orchestration",
        "Apache Airflow Basics",
        "Dimensional Modeling",
        "Star Schema & Snowflake Schema",
        "Cloud Data Warehouses (Snowflake, BigQuery)",
        "Python for Data Engineering",
        "Real-time Data Processing",
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
        "Hadoop Ecosystem Architecture",
        "HDFS & MapReduce",
        "Apache Spark Advanced",
        "Scala for Big Data",
        "Apache Kafka Advanced",
        "Stream Processing",
        "Apache Cassandra",
        "HBase & NoSQL Databases",
        "Apache Hive & Pig",
        "Spark SQL & DataFrames",
        "Machine Learning with Spark MLlib",
        "Delta Lake & Data Lakehouse",
        "Apache Flink",
        "Advanced Optimization Techniques",
        "Production Deployment & Monitoring",
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
        "Performance Tuning & Optimization",
        "Distributed Systems Design",
        "Advanced Spark Optimization",
        "Cost Optimization in Cloud",
        "Real-time Analytics",
        "Advanced Kafka Patterns",
        "Stream Processing Architecture",
        "Data Quality & Testing",
        "Data Governance & Compliance",
        "Security & Encryption",
        "Advanced Schema Design",
        "Capacity Planning",
        "Troubleshooting & Debugging",
        "High-Availability Systems",
        "Industry Best Practices",
      ],
    },
  ]

  return (
    <>
      <section id="programs" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Professional Programs</h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Choose the program that fits your career goals and experience level
            </p>
          </div>

          {/* DevOps, Kubernetes & AI/ML Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-foreground">Emerging Technologies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {programs
                .filter((p) => p.category !== "Big Data")
                .map((program) => (
                  <div key={program.title} className="relative">
                    {program.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                        {program.badge}
                      </div>
                    )}
                    <Card
                      className={`h-full border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                        program.featured
                          ? "border-primary bg-gradient-to-br from-blue-50 to-cyan-50"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      <div className="p-8 space-y-6 flex flex-col h-full">
                        <div>
                          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                            {program.level}
                          </div>
                          <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                          <p className="text-foreground/70">{program.description}</p>
                        </div>

                        <div className="space-y-3 border-y border-border/30 py-4">
                          <div className="flex items-center gap-2">
                            <Clock size={18} className="text-primary" />
                            <span className="text-sm">
                              <span className="font-semibold">Duration:</span> {program.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap size={18} className="text-accent" />
                            <span className="text-sm">
                              <span className="font-semibold">Level:</span> {program.level}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {program.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex-grow"></div>

                        <div className="space-y-3">
                          <div className="text-3xl font-bold text-primary">{program.price}</div>
                          <Button
                            onClick={() => setSelectedProgram(program)}
                            className={`w-full font-semibold transition-all duration-300 ${
                              program.featured
                                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg"
                                : "bg-primary hover:bg-primary/90 text-primary-foreground"
                            }`}
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
            </div>
          </div>

          {/* Big Data Courses Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">Big Data & Engineering</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {programs
                .filter((p) => p.category === "Big Data")
                .map((program) => (
                  <div key={program.title} className="relative">
                    {program.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                        {program.badge}
                      </div>
                    )}
                    <Card
                      className={`h-full border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                        program.featured
                          ? "border-primary bg-gradient-to-br from-blue-50 to-cyan-50"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      <div className="p-8 space-y-6 flex flex-col h-full">
                        <div>
                          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                            {program.level}
                          </div>
                          <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                          <p className="text-foreground/70">{program.description}</p>
                        </div>

                        <div className="space-y-3 border-y border-border/30 py-4">
                          <div className="flex items-center gap-2">
                            <Clock size={18} className="text-primary" />
                            <span className="text-sm">
                              <span className="font-semibold">Duration:</span> {program.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap size={18} className="text-accent" />
                            <span className="text-sm">
                              <span className="font-semibold">Level:</span> {program.level}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {program.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex-grow"></div>

                        <div className="space-y-3">
                          <div className="text-3xl font-bold text-primary">{program.price}</div>
                          <Button
                            onClick={() => setSelectedProgram(program)}
                            className={`w-full font-semibold transition-all duration-300 ${
                              program.featured
                                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg"
                                : "bg-primary hover:bg-primary/90 text-primary-foreground"
                            }`}
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for course topics */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">{selectedProgram.title}</h2>
                  <p className="text-foreground/60">{selectedProgram.description}</p>
                </div>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 p-4 bg-blue-50 rounded-lg">
                <div>
                  <p className="text-sm text-foreground/60">Duration</p>
                  <p className="font-semibold">{selectedProgram.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Level</p>
                  <p className="font-semibold">{selectedProgram.level}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Price</p>
                  <p className="font-semibold text-primary">{selectedProgram.price}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen size={24} className="text-primary" />
                  <h3 className="text-2xl font-bold">Topics Covered</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProgram.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-border/30"
                    >
                      <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold">
                  Enroll Now
                </Button>
                <Button
                  onClick={() => setSelectedProgram(null)}
                  variant="outline"
                  className="flex-1 font-semibold"
                >
                  Close
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}