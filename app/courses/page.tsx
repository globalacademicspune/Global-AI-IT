
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  X,
  BookOpen,
  FolderKanban,
  Wrench,
  Target,
  GraduationCap,
} from 'lucide-react'

const packages = {
  bronze: { name: 'Bronze', price: '$399' },
  silver: { name: 'Silver', price: '$599' },
  gold: { name: 'Gold', price: '$699' },
}

const categories = [
  {
    id: 'ai',
    title: 'AI',
    description:
      'Build intelligent applications using machine learning, model evaluation, and practical AI engineering.',
    Icon: BrainCircuit,
    courses: [
      {
        title: 'AI & Machine Learning',
        tagline: 'Build, evaluate, and deploy intelligent solutions.',
        description:
          'Develop a strong foundation in Python, statistics, data preparation, machine learning algorithms, and neural networks. Progress from analysing datasets to training, evaluating, and deploying models for practical business problems. Learn to justify model choices, measure performance, identify limitations, and communicate results clearly.',
        outcomes: [
          'Prepare datasets and build reusable preprocessing workflows.',
          'Select, train, evaluate, and improve machine learning models.',
          'Understand overfitting, feature engineering, and model validation.',
          'Build and expose a trained model through an application or API.',
          'Document experiments, performance metrics, and model limitations.',
        ],
        tools: [
          'Python',
          'NumPy',
          'Pandas',
          'Scikit-learn',
          'Jupyter',
          'Matplotlib',
          'FastAPI',
          'Git',
        ],
        modules: [
          'Python Programming for AI and ML',
          'NumPy, Pandas and Data Preparation',
          'Statistics, Probability and Linear Algebra Essentials',
          'Exploratory Data Analysis and Data Visualization',
          'Feature Engineering and Data Preprocessing',
          'Supervised Learning: Regression and Classification',
          'Unsupervised Learning: Clustering and Dimensionality Reduction',
          'Model Evaluation, Cross-Validation and Hyperparameter Tuning',
          'Ensemble Learning and Model Selection',
          'Neural Networks and Deep Learning Fundamentals',
          'Model Serving, APIs and Deployment Fundamentals',
          'ML Experiment Tracking, Reproducibility and Responsible AI',
        ],
        projects: [
          {
            title: 'End-to-End Customer Churn Prediction',
            details:
              'Build a complete workflow from raw customer data through cleaning, feature engineering, model comparison, validation, and prediction. Explain which factors influence churn and how the business could use the results.',
            deliverable:
              'Reproducible ML pipeline, evaluation report, and prediction API.',
          },
          {
            title: 'Demand Forecasting and Business Analytics',
            details:
              'Analyse historical demand, establish a baseline, compare forecasting approaches, measure errors, and explain the business impact of inaccurate predictions.',
            deliverable:
              'Forecasting notebook, visual dashboard, and model comparison.',
          },
          {
            title: 'Production-Oriented ML Model Deployment',
            details:
              'Package a trained model behind an API, validate incoming requests, handle errors, write tests, and document the deployment and monitoring approach.',
            deliverable:
              'Version-controlled application, API documentation, tests, and deployment guide.',
          },
        ],
      },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    description:
      'Choose analytics, distributed big data platforms, or engineering pipelines and data infrastructure.',
    Icon: ChartNoAxesCombined,
    courses: [
      {
        title: 'Data Science',
        tagline: 'Turn data into measurable business insights.',
        description:
          'Learn to approach business problems using data exploration, statistical reasoning, visualisation, and predictive modelling. Build the ability to clean imperfect datasets, test hypotheses, select appropriate metrics, explain findings to stakeholders, and deliver analytical recommendations backed by evidence.',
        outcomes: [
          'Clean, validate, and explore structured datasets.',
          'Apply descriptive statistics and hypothesis testing appropriately.',
          'Build dashboards and communicate trends clearly.',
          'Develop and evaluate predictive models where appropriate.',
          'Translate analytical results into practical recommendations.',
        ],
        tools: [
          'Python',
          'Pandas',
          'NumPy',
          'SQL',
          'Jupyter',
          'Power BI',
          'Matplotlib',
          'Scikit-learn',
        ],
        modules: [
          'Python Programming for Data Analysis',
          'SQL Queries, Joins, Aggregations and Window Functions',
          'NumPy, Pandas and Data Manipulation',
          'Data Cleaning, Missing Values and Data Quality',
          'Descriptive Statistics and Probability',
          'Exploratory Data Analysis and Visualisation',
          'Sampling, Confidence Intervals and Hypothesis Testing',
          'Business Metrics and Analytical Problem Framing',
          'Power BI Dashboards and Data Storytelling',
          'Regression, Classification and Model Evaluation',
          'Time Series and Trend Analysis Fundamentals',
          'Analytical Reporting and Communicating Insights',
        ],
        projects: [
          {
            title: 'Retail Performance and Profitability Analysis',
            details:
              'Combine sales, product, customer, and regional datasets. Identify revenue and margin trends, investigate underperforming segments, and produce evidence-based recommendations.',
            deliverable:
              'SQL analysis, cleaned dataset, interactive dashboard, and executive report.',
          },
          {
            title: 'Customer Segmentation and Behaviour Analysis',
            details:
              'Explore purchasing patterns, create meaningful customer segments, compare their value, and explain how marketing teams could use the findings.',
            deliverable:
              'Segmentation analysis, visualisations, and actionable business recommendations.',
          },
          {
            title: 'Predictive Analytics Case Study',
            details:
              'Define a prediction problem, establish a baseline, prepare features, evaluate candidate models, and communicate performance and limitations to a non-technical audience.',
            deliverable:
              'Reproducible notebook, model evaluation report, and presentation.',
          },
        ],
      },
      {
        title: 'Big Data',
        tagline: 'Understand distributed data processing at scale.',
        description:
          'Learn how distributed storage and processing platforms handle datasets that exceed the capabilities of traditional single-machine systems. Explore Hadoop architecture, HDFS, YARN, Hive, Spark, and Kafka, while developing practical troubleshooting skills around storage, jobs, resource allocation, data formats, and pipeline reliability.',
        outcomes: [
          'Explain distributed storage, replication, partitioning, and processing.',
          'Work with HDFS and understand NameNode and DataNode responsibilities.',
          'Query distributed datasets using Hive and process data with Spark.',
          'Understand YARN resource allocation and job execution.',
          'Build and troubleshoot a basic batch or streaming pipeline.',
        ],
        tools: [
          'Hadoop',
          'HDFS',
          'YARN',
          'Hive',
          'Apache Spark',
          'Kafka',
          'Linux',
          'SQL',
        ],
        modules: [
          'Big Data Concepts and Distributed System Architecture',
          'Hadoop Ecosystem and Cluster Components',
          'HDFS Architecture, Blocks, Replication and Rack Awareness',
          'NameNode, DataNode and HDFS Operations',
          'YARN ResourceManager, NodeManager and Application Execution',
          'MapReduce Concepts and Distributed Processing',
          'Hive Tables, Partitions, Bucketing and Query Execution',
          'Apache Spark Architecture and DataFrame Processing',
          'Batch Processing, File Formats and Partitioning',
          'Kafka Topics, Partitions, Producers and Consumers',
          'Cluster Monitoring, Resource Contention and Troubleshooting',
          'Security, Governance and Production Operations Fundamentals',
        ],
        projects: [
          {
            title: 'Distributed Log Analytics Platform',
            details:
              'Ingest large volumes of sample application logs, store them in HDFS, transform and aggregate records, and analyse errors and traffic patterns with Hive or Spark.',
            deliverable:
              'Repeatable ingestion workflow, distributed storage layout, analytical queries, and performance report.',
          },
          {
            title: 'End-to-End Batch Processing Pipeline',
            details:
              'Design a pipeline that ingests raw files, validates schemas, transforms records, handles malformed data, and publishes curated datasets for downstream analytics.',
            deliverable:
              'Pipeline scripts, partitioned output datasets, validation checks, and operational documentation.',
          },
          {
            title: 'Streaming Events Analytics',
            details:
              'Generate sample events, publish them to Kafka, process incoming records, and calculate useful metrics. Document consumer offsets, failures, and recovery behaviour.',
            deliverable:
              'Working event pipeline, processing logic, monitoring notes, and demonstration results.',
          },
        ],
      },
      {
        title: 'Data Engineering',
        tagline: 'Design reliable pipelines from source to analytics.',
        description:
          'Learn to build maintainable data pipelines that ingest, validate, transform, store, and serve data for analytics and downstream applications. Emphasise data modelling, batch and streaming architectures, orchestration, data quality, observability, recovery, and cost-aware processing.',
        outcomes: [
          'Design ingestion and transformation pipelines.',
          'Write analytical SQL and reusable Python data-processing code.',
          'Choose suitable storage layouts and data formats.',
          'Implement validation, logging, retries, and recovery strategies.',
          'Explain pipeline dependencies, monitoring, and operational trade-offs.',
        ],
        tools: [
          'Python',
          'SQL',
          'Apache Spark',
          'Kafka',
          'Airflow',
          'PostgreSQL',
          'Docker',
          'Cloud Storage',
        ],
        modules: [
          'Data Engineering Principles and Architecture Patterns',
          'Advanced SQL, Joins, Window Functions and Query Optimisation',
          'Python for Ingestion and Transformation',
          'Relational Modelling, Dimensional Modelling and Data Warehousing',
          'ETL vs ELT and Pipeline Design',
          'APIs, Files, Databases and Event-Based Ingestion',
          'Data Formats, Partitioning and Schema Evolution',
          'Batch Processing with Apache Spark',
          'Streaming Concepts and Kafka Fundamentals',
          'Workflow Orchestration and Dependency Management',
          'Data Quality, Idempotency, Retries and Error Handling',
          'Monitoring, Lineage, Security and Pipeline Cost Management',
        ],
        projects: [
          {
            title: 'Production-Style Batch Data Platform',
            details:
              'Ingest data from multiple sources, apply schema checks, transform records, deduplicate data, and load curated tables. Make the pipeline safe to rerun and document failure recovery.',
            deliverable:
              'Modular pipeline, data model, quality checks, orchestration workflow, and operational runbook.',
          },
          {
            title: 'Real-Time Event Processing Pipeline',
            details:
              'Publish simulated business events, process streams, handle duplicate or late-arriving records, and deliver aggregated results for reporting.',
            deliverable:
              'Event ingestion and processing components, test scenarios, metrics, and architecture diagram.',
          },
          {
            title: 'Analytics Warehouse with Data Quality Controls',
            details:
              'Build a dimensional model, load fact and dimension tables, implement validation rules, and demonstrate how failed records are detected and reconciled.',
            deliverable:
              'Warehouse schema, transformation SQL, data-quality report, and sample business queries.',
          },
        ],
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    description:
      'Develop skills in automation, container orchestration, and secure cloud architecture.',
    Icon: Cloud,
    courses: [
      {
        title: 'DevOps',
        tagline: 'Automate delivery, infrastructure, and operations.',
        description:
          'Learn how development and operations teams collaborate to deliver software reliably. Build practical skills in Linux, version control, CI/CD, containers, infrastructure automation, monitoring, and incident troubleshooting. Focus on repeatable deployment workflows, release safety, observability, and operational documentation.',
        outcomes: [
          'Use Git-based workflows and manage code changes safely.',
          'Create CI/CD pipelines with build, test, and deployment stages.',
          'Package applications using containers.',
          'Automate infrastructure and configuration tasks.',
          'Monitor applications and investigate deployment failures.',
        ],
        tools: [
          'Linux',
          'Git',
          'GitHub',
          'Docker',
          'Jenkins',
          'Ansible',
          'Terraform',
          'Prometheus',
          'Grafana',
        ],
        modules: [
          'Linux Administration, Processes, Permissions and Shell Scripting',
          'Git, GitHub, Branching, Pull Requests and Release Management',
          'Build Automation and Continuous Integration',
          'Continuous Delivery and Deployment Strategies',
          'Docker Images, Containers, Volumes and Networking',
          'Container Registries and Image Management',
          'Infrastructure as Code with Terraform Fundamentals',
          'Configuration Management and Automation with Ansible',
          'Secrets, Environment Configuration and Deployment Security',
          'Application Monitoring, Metrics, Logs and Alerting',
          'Deployment Rollbacks, Troubleshooting and Incident Response',
          'DevOps Project Delivery and Operational Documentation',
        ],
        projects: [
          {
            title: 'Automated CI/CD Delivery Platform',
            details:
              'Build a pipeline that checks out source code, runs automated tests, builds a container image, publishes an artefact, and deploys to a test environment with validation and rollback steps.',
            deliverable:
              'Version-controlled pipeline, deployment configuration, test evidence, and release runbook.',
          },
          {
            title: 'Infrastructure Provisioning and Configuration',
            details:
              'Provision a repeatable test environment using infrastructure-as-code practices, configure hosts consistently, manage variables securely, and verify the deployed services.',
            deliverable:
              'Infrastructure code, configuration automation, validation checks, and teardown instructions.',
          },
          {
            title: 'Application Observability and Incident Drill',
            details:
              'Collect application metrics and logs, configure dashboards and alerts, introduce a controlled failure, and document the diagnosis, recovery, and prevention measures.',
            deliverable:
              'Monitoring dashboards, alert rules, incident timeline, and root-cause report.',
          },
        ],
      },
      {
        title: 'Kubernetes',
        tagline: 'Deploy and operate resilient containerised applications.',
        description:
          'Progress from container fundamentals to Kubernetes workloads, networking, storage, configuration, security, and troubleshooting. Learn how Kubernetes schedules and manages applications, how services expose workloads, and how teams investigate failed deployments, resource pressure, and application connectivity.',
        outcomes: [
          'Explain cluster architecture and control-plane responsibilities.',
          'Deploy and manage workloads using Kubernetes resources.',
          'Configure service discovery, persistent storage, and application settings.',
          'Apply resource requests, limits, probes, and rollout strategies.',
          'Troubleshoot workloads and understand security boundaries.',
        ],
        tools: [
          'Docker',
          'Kubernetes',
          'kubectl',
          'Helm',
          'YAML',
          'Prometheus',
          'Grafana',
          'Container Registry',
        ],
        modules: [
          'Container Fundamentals and Kubernetes Architecture',
          'Control Plane, Worker Nodes and Scheduling',
          'Pods, ReplicaSets, Deployments and StatefulSets',
          'Services, DNS, Ingress and Network Policies',
          'ConfigMaps, Secrets and Environment Configuration',
          'Persistent Volumes, Claims and Storage Classes',
          'Requests, Limits, Probes and Horizontal Scaling',
          'Rolling Updates, Rollbacks and Release Management',
          'Helm Charts and Reusable Deployment Packages',
          'RBAC, Service Accounts and Workload Security',
          'Logs, Events, Metrics and Cluster Troubleshooting',
          'Cluster Reliability, Backup Concepts and Operational Practices',
        ],
        projects: [
          {
            title: 'Multi-Tier Application on Kubernetes',
            details:
              'Deploy a frontend, backend, and database using suitable workload types. Configure service discovery, application settings, persistent storage, health checks, and controlled rollouts.',
            deliverable:
              'Kubernetes manifests or Helm chart, architecture diagram, deployment guide, and validation tests.',
          },
          {
            title: 'Resilient Deployment and Scaling Lab',
            details:
              'Configure resource requests and limits, readiness and liveness probes, replica scaling, and rolling updates. Simulate pod failures and investigate recovery behaviour.',
            deliverable:
              'Scaling configuration, test results, recovery observations, and troubleshooting notes.',
          },
          {
            title: 'Kubernetes Operations and Security Assessment',
            details:
              'Review permissions, service accounts, exposed services, resource pressure, and application logs. Apply least-privilege improvements and document operational risks.',
            deliverable:
              'Cluster assessment report, RBAC configuration, monitoring observations, and remediation checklist.',
          },
        ],
      },
      {
        title: 'Cloud Solutions Architect',
        tagline: 'Design secure, resilient, and cost-aware cloud systems.',
        description:
          'Learn to translate business and technical requirements into cloud architectures. Explore networking, identity, compute, storage, databases, availability, disaster recovery, security, monitoring, and cost optimisation. Focus on explaining architectural decisions and evaluating trade-offs rather than simply deploying individual services.',
        outcomes: [
          'Translate application requirements into architecture components.',
          'Design segmented cloud networks and access controls.',
          'Select compute, storage, and database services appropriately.',
          'Plan availability, backup, disaster recovery, and monitoring.',
          'Evaluate security, performance, reliability, and cost trade-offs.',
        ],
        tools: [
          'AWS',
          'Azure',
          'VPC / Virtual Network',
          'IAM',
          'Terraform',
          'Cloud Monitoring',
          'Load Balancers',
          'Architecture Diagrams',
        ],
        modules: [
          'Cloud Computing Models and Shared Responsibility',
          'Requirements Gathering and Architecture Design Principles',
          'Cloud Networking, Subnets, Routing and Network Segmentation',
          'Identity, Access Management and Least Privilege',
          'Compute, Storage, Databases and Service Selection',
          'Load Balancing, Autoscaling and High Availability',
          'Backup Strategy, Recovery Objectives and Disaster Recovery',
          'Encryption, Secrets and Security Monitoring',
          'Infrastructure as Code and Repeatable Environments',
          'Logging, Monitoring, Alerting and Operational Readiness',
          'Performance, Cost Estimation and Resource Optimisation',
          'Architecture Reviews, Trade-Offs and Technical Documentation',
        ],
        projects: [
          {
            title: 'Secure Three-Tier Cloud Architecture',
            details:
              'Design a web application with separate network tiers, controlled inbound and outbound access, application services, a private data layer, identity controls, and central monitoring.',
            deliverable:
              'Architecture diagram, network and security design, deployment plan, and estimated cost model.',
          },
          {
            title: 'High Availability and Disaster Recovery Design',
            details:
              'Define failure scenarios, backup and restore procedures, recovery objectives, redundancy requirements, and a validation plan for a business-critical application.',
            deliverable:
              'Resilience architecture, recovery runbook, risk register, and recovery-test plan.',
          },
          {
            title: 'Cloud Migration and Cost Optimisation Case Study',
            details:
              'Assess a sample on-premises application, map dependencies, compare migration approaches, identify security gaps, and propose a phased migration with cost and operational considerations.',
            deliverable:
              'Migration roadmap, target architecture, risk assessment, and cost comparison.',
          },
        ],
      },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description:
      'Learn defensive security, authorised testing, threat investigation, and incident response.',
    Icon: ShieldCheck,
    courses: [
      {
        title: 'Cybersecurity Engineering & Ethical Hacking',
        tagline: 'Assess risk, investigate threats, and strengthen systems.',
        description:
          'Develop practical security skills across networks, Linux and Windows systems, web applications, vulnerability management, and threat monitoring. Progress from security principles to structured, authorised testing and defensive investigation. Learn to validate findings, prioritise risks, recommend remediation, and communicate technical issues through professional reports. All offensive exercises should use approved lab environments or explicitly authorised targets.',
        outcomes: [
          'Analyse network traffic and identify common security weaknesses.',
          'Use approved tools to assess systems in controlled lab environments.',
          'Understand web vulnerabilities and verify defensive remediation.',
          'Investigate security logs and identify suspicious activity.',
          'Document risk, evidence, impact, and recommended corrective actions.',
        ],
        tools: [
          'Linux',
          'Windows',
          'Wireshark',
          'Nmap',
          'Burp Suite',
          'Kali Linux',
          'SIEM Platforms',
          'OWASP ZAP',
        ],
        modules: [
          'TCP/IP, DNS, Routing and Network Traffic Analysis',
          'Linux and Windows Administration for Security',
          'Security Architecture, CIA Triad and Risk Assessment',
          'Identity, Authentication, Access Control and Least Privilege',
          'Firewalls, VPNs, IDS/IPS and Network Security Monitoring',
          'Ethical Hacking Methodology and Rules of Engagement',
          'Reconnaissance, Scanning and Service Enumeration in a Lab',
          'Vulnerability Assessment, Risk Scoring and Remediation',
          'Web Security, OWASP Top 10 and Secure Authentication',
          'Security Tools: Wireshark, Nmap, Burp Suite and OWASP ZAP',
          'SIEM Concepts, Log Analysis and Threat Detection',
          'Incident Response, Evidence Handling and Digital Forensics Basics',
          'Cloud Security, System Hardening and Security Validation',
          'Security Reporting, Remediation Verification and Capstone Review',
        ],
        projects: [
          {
            title: 'Enterprise Network Security Assessment',
            details:
              'Map an authorised lab network, identify exposed services, analyse configurations, prioritise findings by risk, and validate remediation. Clearly distinguish confirmed findings from assumptions.',
            deliverable:
              'Network inventory, risk-ranked findings, remediation plan, and technical assessment report.',
          },
          {
            title: 'Web Application Security Testing Lab',
            details:
              'Test a deliberately vulnerable application for common authentication, access-control, input-validation, and session-management weaknesses. Reproduce findings safely and verify fixes after remediation.',
            deliverable:
              'Evidence-backed vulnerability report, severity assessment, and remediation validation results.',
          },
          {
            title: 'SOC Monitoring and Threat Investigation',
            details:
              'Analyse sample endpoint and network logs, identify suspicious indicators, correlate events, build a timeline, and document an investigation with recommended detection improvements.',
            deliverable:
              'Investigation timeline, detection queries or rules, evidence summary, and incident report.',
          },
          {
            title: 'Incident Response and Security Hardening Capstone',
            details:
              'Investigate a simulated compromise in a lab, determine scope, preserve relevant evidence, propose containment and recovery steps, harden affected systems, and validate security controls.',
            deliverable:
              'Incident response report, hardening checklist, recovery plan, and lessons-learned review.',
          },
        ],
      },
    ],
  },
]

type Course = (typeof categories)[number]['courses'][number]
type PackageId = keyof typeof packages

export default function CoursesPage() {
  const [planId, setPlanId] = useState<PackageId>('bronze')
  const [activeCategory, setActiveCategory] = useState('ai')
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  useEffect(() => {
    const queryPlan = new URLSearchParams(window.location.search).get('plan')

    if (queryPlan && queryPlan in packages) {
      setPlanId(queryPlan as PackageId)
    }
  }, [])

  const selectedPackage = packages[planId]
  const category =
    categories.find((item) => item.id === activeCategory) ?? categories[0]
  const CategoryIcon = category.Icon

  return (
    <main className="min-h-screen bg-[#050811] px-4 py-8 text-gray-100 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#pricing"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-cyan-300"
        >
          <ArrowLeft size={17} />
          Back to Packages
        </Link>

        {/* Header and selected package */}
        <section className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B1423] to-[#080D18] p-5 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            Explore Our Programs
          </p>

          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
            Find Your Learning Track
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base">
            Explore the course objectives, syllabus, tools, and practical
            projects before continuing to the next step.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 p-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Selected Package
              </p>
              <p className="mt-1 text-xl font-extrabold text-white">
                {selectedPackage.name}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Price per course</p>
              <p className="mt-1 text-2xl font-black text-white">
                {selectedPackage.price}
              </p>
            </div>

            <Link
              href="/#pricing"
              className="text-sm font-semibold text-cyan-300 hover:text-white"
            >
              Change package
            </Link>
          </div>
        </section>

        {/* Category selector */}
        <div className="mb-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {categories.map((item) => {
            const Icon = item.Icon
            const isActive = item.id === activeCategory

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveCategory(item.id)}
                aria-pressed={isActive}
                className={`rounded-xl border p-4 text-left transition sm:p-5 ${
                  isActive
                    ? 'border-cyan-400/70 bg-cyan-400/[0.08]'
                    : 'border-white/10 bg-white/[0.025] hover:border-white/30'
                }`}
              >
                <Icon
                  size={28}
                  className={isActive ? 'text-cyan-300' : 'text-gray-400'}
                />

                <h2 className="mt-3 font-bold text-white">{item.title}</h2>

                <p className="mt-1 text-xs text-gray-400">
                  {item.courses.length}{' '}
                  {item.courses.length === 1 ? 'course' : 'courses'}
                </p>
              </button>
            )
          })}
        </div>

        {/* Courses in selected category */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-8">
          <div className="mb-6 flex items-start gap-3">
            <CategoryIcon size={30} className="mt-1 shrink-0 text-cyan-300" />

            <div>
              <h2 className="text-2xl font-extrabold text-white">
                {category.title} Courses
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {category.description}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.courses.map((course) => (
              <button
                key={course.title}
                type="button"
                onClick={() => setSelectedCourse(course)}
                className="group flex min-h-48 flex-col rounded-xl border border-white/10 bg-[#080D18] p-5 text-left transition hover:border-cyan-400/60 hover:bg-cyan-400/[0.035]"
              >
                <div className="flex items-start justify-between gap-3">
                  <BookOpen size={22} className="shrink-0 text-cyan-300" />
                  <ChevronRight
                    size={18}
                    className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-cyan-300"
                  />
                </div>

                <h3 className="mt-4 font-bold text-white">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm leading-5 text-gray-400">
                  {course.tagline}
                </p>

                <span className="mt-auto pt-4 text-xs font-bold text-cyan-300">
                  Explore syllabus and projects →
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Expanded course overview */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onClick={() => setSelectedCourse(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-overview-title"
            className="max-h-[94dvh] w-full max-w-4xl overflow-y-auto rounded-t-2xl border border-white/10 bg-[#080D18] shadow-2xl sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal title */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-[#080D18]/95 p-5 backdrop-blur sm:p-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Course Overview
                </p>

                <h2
                  id="course-overview-title"
                  className="mt-2 text-2xl font-extrabold text-white sm:text-3xl"
                >
                  {selectedCourse.title}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Target level: Beginner to Advanced
                </p>
              </div>

              <button
                type="button"
                aria-label="Close course overview"
                onClick={() => setSelectedCourse(null)}
                className="rounded-lg border border-white/10 p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-8 p-5 sm:p-7">
              {/* Course introduction */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-white">
                  <BookOpen size={19} className="text-cyan-300" />
                  About This Course
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {selectedCourse.description}
                </p>
              </div>

              {/* Learning outcomes */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-white">
                  <Target size={19} className="text-cyan-300" />
                  What You&apos;ll Learn
                </h3>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {selectedCourse.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] p-3 text-sm leading-6 text-gray-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-emerald-400"
                      />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Syllabus */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-white">
                  <GraduationCap size={20} className="text-cyan-300" />
                  Detailed Syllabus
                </h3>

                <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                  {selectedCourse.modules.map((module, index) => (
                    <li
                      key={module}
                      className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-white/[0.025] p-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cyan-400/10 text-xs font-bold text-cyan-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="pt-1 text-sm leading-5 text-gray-300">
                        {module}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tools */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-white">
                  <Wrench size={19} className="text-cyan-300" />
                  Tools and Technologies
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedCourse.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-2 text-xs font-semibold text-cyan-100"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Practical projects */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-white">
                  <FolderKanban size={19} className="text-cyan-300" />
                  Hands-on Projects and Capstone Work
                </h3>

                <div className="mt-4 space-y-4">
                  {selectedCourse.projects.map((project, index) => (
                    <article
                      key={project.title}
                      className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.035] to-transparent p-4 sm:p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-400/10 text-sm font-extrabold text-indigo-300">
                          {index + 1}
                        </span>

                        <div className="min-w-0">
                          <h4 className="font-bold leading-6 text-white">
                            {project.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-gray-400">
                            {project.details}
                          </p>

                          <div className="mt-3 rounded-lg border border-emerald-400/10 bg-emerald-400/[0.04] p-3">
                            <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-emerald-300">
                              Expected Deliverable
                            </p>
                            <p className="mt-1 text-sm leading-5 text-gray-300">
                              {project.deliverable}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <p className="text-xs leading-5 text-gray-500">
                The modules and projects are proposed curriculum outlines.
                Final delivery, duration, tools, and package inclusions should
                be confirmed against the actual training programme before
                enrollment.
              </p>
            </div>

            {/* Modal actions */}
            <div className="sticky bottom-0 flex flex-col gap-3 border-t border-white/10 bg-[#080D18]/95 p-5 backdrop-blur sm:flex-row sm:p-6">
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="rounded-xl border border-white/15 bg-slate-800 px-5 py-3 font-bold text-white transition hover:bg-slate-700 sm:flex-1"
              >
                Close Overview
              </button>

              <Link
                href={`/career-roadmap?track=${encodeURIComponent(selectedCourse.title)}&plan=${planId}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-3 text-center font-extrabold text-slate-950 transition hover:brightness-110 sm:flex-1"
              >
                Continue to Career Roadmap
                <ChevronRight size={17} />
              </Link>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
