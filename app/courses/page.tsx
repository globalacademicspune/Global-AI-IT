
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

type CourseProject = {
  title: string
  details: string
  deliverable: string
}

function makeCourse(
  title: string,
  tagline: string,
  description: string,
  tools: string[],
  modules: string[],
  outcomes: string[],
  projects: CourseProject[],
) {
  return { title, tagline, description, tools, modules, outcomes, projects }
}

const categories = [
  {
    id: 'ai',
    title: 'AI',
    description:
      'Build, deploy, automate, and operate AI and machine-learning systems reliably in production.',
    Icon: BrainCircuit,
    courses: [
      makeCourse(
        'AIOps',
        'Apply AI and analytics to IT operations and incident response.',
        'Learn how telemetry, logs, metrics, and events can be analysed to improve IT operations. Explore anomaly detection, event correlation, alert noise reduction, incident prioritisation, and AI-assisted root-cause investigation. Emphasis is placed on explainable findings, operational safety, and human review before high-impact actions.',
        ['Python', 'SQL', 'Linux', 'Prometheus', 'Grafana', 'ELK / OpenSearch', 'Scikit-learn', 'Jupyter'],
        ['AIOps Concepts and IT Operations Data', 'Collecting and Normalising Logs, Metrics and Events', 'Python for Operations Analytics', 'Time-Series Analysis and Baseline Creation', 'Anomaly Detection and Alert Noise Reduction', 'Event Correlation and Incident Prioritisation', 'Root-Cause Analysis and Service Dependencies', 'Dashboards, SLOs and Operational Metrics', 'Integrating Monitoring Data with Automation', 'Explainability, Privacy and Safe AI-Assisted Operations', 'Model Evaluation and False-Positive Management', 'AIOps Capstone and Runbook Documentation'],
        ['Collect and prepare operational telemetry for analysis.', 'Detect unusual behaviour and explain why an alert was raised.', 'Correlate related events to help prioritise incidents.', 'Build dashboards and operational analytics workflows.', 'Document safe response actions and measure detection quality.'],
        [
          { title: 'Infrastructure Anomaly Detection', details: 'Analyse sample CPU, memory, disk, and service metrics; establish baselines and detect unusual patterns with documented thresholds.', deliverable: 'Reproducible analysis notebook, anomaly report, and dashboard.' },
          { title: 'Alert Correlation and Incident Triage', details: 'Use simulated monitoring events to group related alerts, rank likely incidents, and prepare a human-reviewed investigation summary.', deliverable: 'Event-correlation workflow, triage rules, and incident runbook.' },
          { title: 'AIOps Operations Capstone', details: 'Combine telemetry ingestion, anomaly detection, visualisation, and an auditable response recommendation workflow.', deliverable: 'Demonstration pipeline, evaluation notes, dashboard, and operational documentation.' },
        ],
      ),
      makeCourse(
        'MLOps',
        'Build reproducible, deployable, and monitored machine-learning workflows.',
        'Learn to take machine-learning models from experimentation into repeatable delivery workflows. Cover experiment tracking, data and model versioning, testing, packaging, CI/CD, model serving, monitoring, drift detection, and rollback. The course connects ML development practices with software engineering and production operations.',
        ['Python', 'Scikit-learn', 'MLflow', 'Git', 'Docker', 'FastAPI', 'GitHub Actions', 'Prometheus', 'Grafana'],
        ['MLOps Lifecycle and Reference Architecture', 'Reproducible Python Environments and Git Workflows', 'Data Validation and Dataset Versioning', 'Experiment Tracking and Model Registry Concepts', 'Training Pipelines and Configuration Management', 'Model Testing, Evaluation and Approval Gates', 'Packaging Models and Serving with APIs', 'Docker and Container Image Management', 'CI/CD for Machine-Learning Applications', 'Model Monitoring, Drift and Performance Degradation', 'Deployment Strategies, Rollback and Governance', 'End-to-End MLOps Capstone'],
        ['Track experiments and version model artefacts reproducibly.', 'Create repeatable training and validation pipelines.', 'Package and deploy models through a service endpoint.', 'Automate testing and delivery with CI/CD practices.', 'Monitor deployed models and plan safe rollback procedures.'],
        [
          { title: 'Reproducible Training Pipeline', details: 'Build a version-controlled training workflow with data checks, configuration, experiment tracking, and evaluation gates.', deliverable: 'Pipeline code, tracked experiments, and model evaluation report.' },
          { title: 'Containerised Model API', details: 'Serve a trained model through an API, package it in a container, and add request validation and automated tests.', deliverable: 'Container image, API documentation, tests, and deployment instructions.' },
          { title: 'Model Monitoring and Release Workflow', details: 'Create a release pipeline and monitor sample prediction data for quality or drift signals, with documented rollback criteria.', deliverable: 'CI/CD workflow, monitoring dashboard, and model operations runbook.' },
        ],
      ),
    ],
  },
  {
    id: 'data',
    title: 'Data',
    description:
      'Choose analytics, big-data platforms, cloud data engineering, and modern data platforms.',
    Icon: ChartNoAxesCombined,
    courses: [
      makeCourse('Data Science', 'Turn data into measurable business insights.', 'Learn data exploration, statistical reasoning, visualisation, and predictive modelling. Practise cleaning imperfect datasets, testing hypotheses, selecting metrics, and presenting evidence-based recommendations.', ['Python', 'Pandas', 'NumPy', 'SQL', 'Jupyter', 'Power BI', 'Matplotlib', 'Scikit-learn'], ['Python for Data Analysis', 'SQL Queries, Joins and Window Functions', 'Data Cleaning and Quality Checks', 'Descriptive Statistics and Probability', 'Exploratory Data Analysis', 'Data Visualisation and Storytelling', 'Hypothesis Testing and Sampling', 'Business Metrics and Problem Framing', 'Power BI Dashboards', 'Regression and Classification Fundamentals', 'Model Evaluation and Validation', 'Communicating Analytical Findings'], ['Clean and explore structured datasets.', 'Use statistics to investigate business questions.', 'Build clear visualisations and dashboards.', 'Evaluate basic predictive models responsibly.', 'Translate findings into practical recommendations.'], [{ title: 'Retail Performance Analysis', details: 'Explore sales, products, and regional data to find trends and underperforming segments.', deliverable: 'SQL analysis, dashboard, and executive summary.' }, { title: 'Customer Segmentation', details: 'Analyse customer behaviour and create interpretable segments for business use.', deliverable: 'Segmentation notebook and visual report.' }, { title: 'Predictive Analytics Case Study', details: 'Prepare features, compare baseline models, and explain performance limitations.', deliverable: 'Reproducible notebook and model evaluation report.' }]),
      makeCourse('Big Data', 'Process and troubleshoot distributed data at scale.', 'Explore distributed storage and processing using Hadoop, HDFS, YARN, Hive, Spark, and Kafka. Practise cluster concepts, data processing, resource allocation, and pipeline troubleshooting.', ['Hadoop', 'HDFS', 'YARN', 'Hive', 'Apache Spark', 'Kafka', 'Linux', 'SQL'], ['Big Data Concepts and Distributed Architecture', 'Hadoop Ecosystem Components', 'HDFS Blocks, Replication and Rack Awareness', 'NameNode and DataNode Operations', 'YARN ResourceManager and NodeManager', 'MapReduce Processing Concepts', 'Hive Tables, Partitions and Query Execution', 'Spark DataFrames and Distributed Processing', 'Batch Processing and File Formats', 'Kafka Topics, Producers and Consumers', 'Resource Contention and Cluster Monitoring', 'Security and Production Troubleshooting'], ['Explain core Hadoop and distributed-system components.', 'Operate basic HDFS workflows and understand replication.', 'Query and process datasets with Hive and Spark.', 'Understand YARN scheduling and resource allocation.', 'Investigate common pipeline and cluster issues.'], [{ title: 'Distributed Log Analytics', details: 'Store sample logs, transform records, and analyse errors using distributed tools.', deliverable: 'Ingestion workflow, queries, and performance notes.' }, { title: 'Batch Processing Pipeline', details: 'Validate input files, transform records, and publish partitioned output.', deliverable: 'Repeatable pipeline, validation checks, and runbook.' }, { title: 'Streaming Events Analytics', details: 'Publish simulated events and calculate useful metrics from a stream.', deliverable: 'Working demo, processing logic, and recovery notes.' }]),
      makeCourse('Azure Data Engineer', 'Build data pipelines and analytics platforms on Microsoft Azure.', 'Learn to ingest, transform, store, and serve data using Azure data services. Cover pipeline orchestration, lake storage, scalable processing, security, monitoring, and reliable delivery practices.', ['Azure Data Factory', 'Azure Data Lake Storage', 'Azure Databricks', 'Apache Spark', 'Synapse Analytics', 'Python', 'SQL', 'Git'], ['Azure Data Engineering Architecture', 'Azure Identity and Access Fundamentals', 'Data Lake Storage and Access Controls', 'Batch Ingestion with Azure Data Factory', 'Pipeline Parameters, Triggers and Dependencies', 'Transformations with SQL and Spark', 'Lakehouse and Delta Table Concepts', 'Data Modelling and Serving Analytics', 'Data Quality and Schema Evolution', 'Monitoring, Logging and Failure Recovery', 'Performance and Cost Optimisation', 'Azure Data Engineering Capstone'], ['Design a basic Azure data platform.', 'Build and parameterise ingestion pipelines.', 'Transform data using SQL and Spark.', 'Apply access controls and data-quality checks.', 'Monitor pipelines and investigate failures.'], [{ title: 'Azure Lakehouse Pipeline', details: 'Ingest sample data into a lake, transform it, and publish curated tables.', deliverable: 'Pipeline design, transformation code, and quality checks.' }, { title: 'Incremental Data Ingestion', details: 'Build a parameterised pipeline that handles incremental loads and failures.', deliverable: 'Pipeline configuration, validation results, and recovery guide.' }, { title: 'Azure Analytics Delivery', details: 'Prepare curated datasets for reporting and document monitoring and access controls.', deliverable: 'Data model, dashboard-ready tables, and operational runbook.' }]),
      makeCourse('AWS Data Engineer', 'Design secure and scalable data pipelines on AWS.', 'Develop practical skills for cloud data ingestion, transformation, cataloguing, orchestration, and analytics on AWS. Emphasise IAM, data-lake organisation, monitoring, reliability, and cost-aware design.', ['Amazon S3', 'AWS Glue', 'Amazon Athena', 'AWS Lambda', 'Amazon Redshift', 'IAM', 'CloudWatch', 'Python', 'SQL'], ['AWS Data Engineering Architecture', 'IAM Roles and Least-Privilege Access', 'S3 Data Lake Layouts and Lifecycle Policies', 'Ingestion Patterns and Event-Driven Workflows', 'AWS Glue Jobs and Data Catalog', 'Data Transformation with Python and Spark', 'Querying Lake Data with Athena', 'Warehouse Fundamentals with Redshift', 'Orchestration and Dependency Management', 'Data Quality and Schema Evolution', 'CloudWatch Monitoring and Failure Recovery', 'AWS Data Engineering Capstone'], ['Design a secure S3-based data lake.', 'Build ingestion and transformation workflows.', 'Catalogue and query data for analytics.', 'Use IAM and monitoring services appropriately.', 'Evaluate reliability and cost trade-offs.'], [{ title: 'S3 Data Lake', details: 'Organise raw and curated data, apply access policies, and query datasets.', deliverable: 'Lake layout, catalog definitions, and query examples.' }, { title: 'Automated ETL Workflow', details: 'Create a repeatable ingestion and transformation process with validation.', deliverable: 'ETL code, orchestration design, and test results.' }, { title: 'Operational Data Pipeline', details: 'Add monitoring, failure handling, and cost considerations to a cloud pipeline.', deliverable: 'Architecture diagram, alert plan, and runbook.' }]),
      makeCourse('GCP Data Engineer', 'Build analytics pipelines and data platforms on Google Cloud.', 'Learn Google Cloud data engineering patterns for ingestion, transformation, orchestration, and analytics. Explore scalable processing, access controls, data quality, observability, and cost-aware pipeline design.', ['BigQuery', 'Cloud Storage', 'Dataflow', 'Pub/Sub', 'Dataproc', 'Cloud Composer', 'IAM', 'Python', 'SQL'], ['Google Cloud Data Platform Architecture', 'IAM and Service Account Fundamentals', 'Cloud Storage and Data Lake Organisation', 'Batch Ingestion and File Processing', 'BigQuery Tables, SQL and Partitioning', 'Dataflow and Apache Beam Concepts', 'Pub/Sub Streaming Fundamentals', 'Dataproc and Spark Workloads', 'Workflow Orchestration with Cloud Composer', 'Data Quality and Schema Management', 'Monitoring, Security and Cost Control', 'GCP Data Engineering Capstone'], ['Select suitable GCP data services for common patterns.', 'Load and transform data for analytics.', 'Use BigQuery effectively for analytical queries.', 'Understand batch and streaming architectures.', 'Monitor pipelines and manage access securely.'], [{ title: 'BigQuery Analytics Platform', details: 'Load sample data, model analytical tables, and optimise queries using partitioning.', deliverable: 'Dataset design, SQL scripts, and query-performance notes.' }, { title: 'Streaming Events Pipeline', details: 'Design a Pub/Sub-based event flow and process incoming records.', deliverable: 'Pipeline diagram, transformation logic, and validation results.' }, { title: 'Orchestrated Data Workflow', details: 'Coordinate pipeline tasks and document monitoring and recovery paths.', deliverable: 'Workflow definition, operational dashboard plan, and runbook.' }]),
      makeCourse('Cloudera Administration', 'Administer, secure, and troubleshoot Cloudera data platforms.', 'Learn core administration practices for Cloudera CDH/CDP-style environments, including cluster services, configuration, monitoring, HDFS, YARN, security, and operational troubleshooting. Exact coverage depends on the platform version and lab environment available.', ['Cloudera Manager', 'CDH / CDP', 'HDFS', 'YARN', 'Hive', 'Kerberos', 'Ranger', 'Linux', 'ZooKeeper'], ['Cloudera Platform Architecture and Deployment Models', 'Cloudera Manager Services and Host Management', 'Cluster Installation and Configuration Concepts', 'HDFS Nameservices, Storage and Health Checks', 'YARN Queues, Schedulers and Resource Contention', 'Hive Services and Dependency Checks', 'Kerberos Principals, Keytabs and Service Security', 'Ranger Policies and Access Control', 'Monitoring, Alerts and Service Logs', 'Capacity, Performance and Disk Management', 'Incident Triage, RCA and Change Control', 'Cloudera Administration Capstone'], ['Navigate cluster management and service health views.', 'Explain HDFS and YARN operational responsibilities.', 'Investigate alerts using logs and service metrics.', 'Understand Kerberos and Ranger security controls.', 'Document troubleshooting steps and root-cause findings.'], [{ title: 'Cluster Health Assessment', details: 'Review a lab cluster’s services, storage, alerts, and resource utilisation.', deliverable: 'Health-check report and prioritised remediation list.' }, { title: 'Secure Service Configuration', details: 'Map service identities and access policies in a controlled lab environment.', deliverable: 'Security checklist and validation evidence.' }, { title: 'Production Incident RCA', details: 'Investigate a simulated service degradation using logs, metrics, and dependencies.', deliverable: 'Incident timeline, root-cause analysis, and prevention plan.' }]),
      makeCourse('Databricks', 'Build lakehouse pipelines with Apache Spark and Delta Lake.', 'Explore Databricks workspace concepts, Spark transformations, Delta Lake tables, workflow orchestration, access controls, and production pipeline practices for batch and streaming workloads.', ['Databricks', 'Apache Spark', 'PySpark', 'Delta Lake', 'SQL', 'Unity Catalog', 'Workflows', 'Git'], ['Lakehouse Architecture and Workspace Fundamentals', 'Spark DataFrames and Distributed Execution', 'Ingestion and DataFrame Transformations', 'Delta Tables, ACID and Transaction Logs', 'Bronze, Silver and Gold Data Layers', 'Schema Enforcement and Evolution', 'Batch and Streaming Pipeline Patterns', 'Jobs, Workflows and Dependencies', 'Data Governance and Access Controls', 'Testing, Monitoring and Performance Tuning', 'CI/CD and Reproducible Deployments', 'Databricks Lakehouse Capstone'], ['Transform data using Spark DataFrames and SQL.', 'Design a layered lakehouse pipeline.', 'Manage Delta tables and schema changes.', 'Orchestrate and monitor data jobs.', 'Apply governance and performance practices.'], [{ title: 'Bronze-Silver-Gold Lakehouse', details: 'Ingest raw records, validate and clean them, and publish curated analytical tables.', deliverable: 'Layered notebooks, Delta tables, and quality checks.' }, { title: 'Incremental Data Processing', details: 'Build an incremental pipeline and handle duplicate or late-arriving data.', deliverable: 'Pipeline code, test cases, and operational notes.' }, { title: 'Lakehouse Performance Review', details: 'Measure a workload, inspect query behaviour, and document optimisation choices.', deliverable: 'Benchmark report and recommended improvements.' }]),
      makeCourse('Snowflake', 'Design governed, scalable cloud data warehouses.', 'Learn Snowflake architecture, SQL analytics, data loading, warehouse sizing, semi-structured data, sharing, access controls, and performance management. Practise reliable ELT patterns and governance for analytics teams.', ['Snowflake', 'SQL', 'SnowSQL', 'Python', 'Stages', 'Streams and Tasks', 'RBAC', 'BI Tools'], ['Snowflake Architecture and Virtual Warehouses', 'Databases, Schemas and Table Design', 'Loading Data from Stages', 'Advanced SQL and Analytical Functions', 'Semi-Structured Data with VARIANT', 'Warehouse Sizing and Query Performance', 'Micro-Partitions and Pruning Concepts', 'Streams, Tasks and Incremental ELT', 'Roles, Grants and Access Governance', 'Data Sharing and Secure Views', 'Monitoring, Cost Control and Troubleshooting', 'Snowflake Analytics Capstone'], ['Load and query structured and semi-structured data.', 'Design analytical tables and transformations.', 'Use roles and grants to control access.', 'Understand warehouse performance and cost levers.', 'Build incremental ELT workflows.'], [{ title: 'Cloud Warehouse Build', details: 'Load sample source data and create analytics-ready schemas and views.', deliverable: 'Warehouse schema, loading scripts, and business queries.' }, { title: 'Incremental ELT Pipeline', details: 'Model incremental changes and automate downstream transformations.', deliverable: 'Streams/tasks design, transformation SQL, and validation tests.' }, { title: 'Performance and Cost Assessment', details: 'Review sample query workloads and propose sizing and optimisation changes.', deliverable: 'Query review, cost observations, and recommendations.' }]),
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    description:
      'Build cloud-specific DevOps and solutions-architecture skills, alongside Kubernetes.',
    Icon: Cloud,
    courses: [
      makeCourse('AWS DevOps Engineer', 'Automate software delivery and operations on AWS.', 'Build AWS-focused delivery workflows using source control, CI/CD, infrastructure as code, containers, monitoring, and secure deployment practices. Labs should use a sandbox account and follow cost and access safeguards.', ['AWS', 'IAM', 'CodePipeline', 'CodeBuild', 'CloudFormation', 'Docker', 'ECR', 'CloudWatch', 'Terraform'], ['AWS DevOps Architecture and Shared Responsibility', 'IAM Roles, Policies and Secure Credentials', 'Git Workflows and Release Strategies', 'CI/CD with AWS Developer Tools', 'Infrastructure as Code with CloudFormation or Terraform', 'Container Images and Amazon ECR', 'Deployments to Compute and Container Services', 'Secrets and Configuration Management', 'CloudWatch Logs, Metrics and Alarms', 'Rollback, Blue-Green and Canary Concepts', 'Cost Controls and Operational Security', 'AWS DevOps Capstone'], ['Create a repeatable build and deployment workflow.', 'Provision infrastructure using code.', 'Apply secure IAM and secret-management practices.', 'Monitor deployments and investigate failures.', 'Plan rollback and release validation.'], [{ title: 'AWS CI/CD Pipeline', details: 'Build, test, package, and deploy a sample application in a sandbox.', deliverable: 'Pipeline definition, test evidence, and release runbook.' }, { title: 'Infrastructure as Code', details: 'Provision a small environment with controlled configuration and teardown.', deliverable: 'Reusable IaC templates and validation checklist.' }, { title: 'Deployment Observability', details: 'Add deployment alarms and rehearse a rollback for a simulated failure.', deliverable: 'Dashboard, alarm plan, and incident notes.' }]),
      makeCourse('Azure DevOps Engineer', 'Deliver applications through Azure-native DevOps workflows.', 'Learn Azure Repos, Pipelines, artifacts, infrastructure automation, deployment strategies, security, and monitoring. Build repeatable delivery processes with approvals, testing, and rollback planning.', ['Azure DevOps', 'Azure Pipelines', 'Git', 'Azure Repos', 'Azure Artifacts', 'Terraform', 'Docker', 'Azure Monitor'], ['Azure DevOps Organisation and Project Structure', 'Repos, Branch Policies and Pull Requests', 'YAML Pipeline Fundamentals', 'Build, Test and Artifact Publishing', 'Pipeline Variables, Templates and Secrets', 'Infrastructure as Code for Azure', 'Container Build and Registry Workflows', 'Deployments to Azure Compute Services', 'Approvals, Environments and Release Gates', 'Monitoring, Logs and Deployment Diagnostics', 'Rollback and Release Governance', 'Azure DevOps Capstone'], ['Manage source code and branch protections.', 'Create YAML-based CI/CD pipelines.', 'Publish artefacts and manage secrets safely.', 'Automate infrastructure and application deployment.', 'Use monitoring and rollback practices.'], [{ title: 'Azure CI/CD Delivery', details: 'Create a pipeline that builds, tests, and deploys a sample application.', deliverable: 'Pipeline YAML, test evidence, and deployment guide.' }, { title: 'Reusable Pipeline Templates', details: 'Refactor common stages into templates and parameterise environments.', deliverable: 'Reusable templates and example environment configurations.' }, { title: 'Release Governance Lab', details: 'Add approvals, deployment validation, and a rollback path.', deliverable: 'Release workflow, validation checklist, and runbook.' }]),
      makeCourse('GCP DevOps Engineer', 'Automate builds, deployments, and observability on Google Cloud.', 'Develop Google Cloud delivery workflows covering build automation, container images, deployment, infrastructure as code, service monitoring, security, and release reliability.', ['Google Cloud', 'Cloud Build', 'Artifact Registry', 'GKE', 'Cloud Deploy', 'Terraform', 'IAM', 'Cloud Logging', 'Cloud Monitoring'], ['GCP DevOps Architecture and IAM', 'Git Workflows and Branch Controls', 'Cloud Build Triggers and Build Steps', 'Artifact Registry and Image Security', 'Infrastructure as Code with Terraform', 'Deploying Applications to GCP Services', 'GKE Delivery Fundamentals', 'Cloud Deploy and Release Promotion', 'Secrets and Environment Configuration', 'Cloud Logging, Monitoring and Alerting', 'Rollbacks, Reliability and Cost Controls', 'GCP DevOps Capstone'], ['Create automated build and test workflows.', 'Store and deploy versioned artefacts.', 'Provision infrastructure repeatably.', 'Monitor application and deployment health.', 'Apply secure release and rollback practices.'], [{ title: 'Automated GCP Delivery', details: 'Build and deploy a sample application using a repeatable cloud pipeline.', deliverable: 'Pipeline configuration, artefact flow, and deployment guide.' }, { title: 'Container Release Workflow', details: 'Build a container image and promote it through test and staging environments.', deliverable: 'Image workflow, environment configuration, and validation results.' }, { title: 'Monitoring and Recovery Lab', details: 'Create monitoring signals and practise recovery from a controlled deployment issue.', deliverable: 'Dashboard plan, incident runbook, and rollback steps.' }]),
      makeCourse('AWS Solutions Architect', 'Design secure, resilient, and cost-aware AWS architectures.', 'Translate business requirements into AWS architecture decisions across networking, identity, compute, storage, databases, resilience, security, monitoring, and cost management. Focus on explaining trade-offs and validating designs.', ['AWS', 'VPC', 'IAM', 'EC2', 'S3', 'RDS', 'ELB', 'Auto Scaling', 'CloudWatch', 'Well-Architected Framework'], ['AWS Well-Architected Principles', 'Requirements and Architecture Trade-Offs', 'VPC, Subnets, Routing and Security Groups', 'IAM and Workload Identity', 'Compute Selection and Scaling', 'S3, EBS and EFS Storage Choices', 'Relational and NoSQL Database Selection', 'Load Balancing and High Availability', 'Backup, Disaster Recovery and Recovery Objectives', 'Logging, Monitoring and Security Services', 'Cost Estimation and Optimisation', 'AWS Architecture Capstone'], ['Design a segmented and secure AWS network.', 'Select suitable compute, storage, and database services.', 'Plan availability, backup, and recovery.', 'Apply identity and monitoring controls.', 'Explain performance, security, and cost trade-offs.'], [{ title: 'Secure Three-Tier AWS Design', details: 'Design network, application, and data tiers with restricted access paths.', deliverable: 'Architecture diagram, security rules, and deployment plan.' }, { title: 'High Availability and Recovery', details: 'Compare failure scenarios and define backup and recovery approaches.', deliverable: 'Resilience design, recovery objectives, and test plan.' }, { title: 'Migration and Cost Case Study', details: 'Assess a sample application and recommend a phased cloud design.', deliverable: 'Target architecture, risk register, and cost estimate.' }]),
      makeCourse('Azure Solutions Architect', 'Design secure, resilient architectures on Microsoft Azure.', 'Plan Azure solutions across identity, virtual networks, compute, storage, databases, governance, monitoring, resilience, and cost. Learn to document design decisions and map business requirements to appropriate services.', ['Microsoft Azure', 'Azure Virtual Network', 'Microsoft Entra ID', 'Azure Compute', 'Azure Storage', 'Azure SQL', 'Azure Monitor', 'Azure Policy', 'Bicep / Terraform'], ['Azure Architecture and Well-Architected Principles', 'Requirements and Landing Zone Concepts', 'Virtual Networks, Subnets and Connectivity', 'Identity, RBAC and Managed Identities', 'Compute and Application Hosting Choices', 'Storage and Database Architecture', 'Load Balancing and Availability Zones', 'Backup, Recovery and Business Continuity', 'Governance, Policy and Security Baselines', 'Monitoring, Logging and Alerting', 'Cost Management and Resource Optimisation', 'Azure Architecture Capstone'], ['Design Azure network and identity boundaries.', 'Choose compute and data services for requirements.', 'Plan high availability and recovery.', 'Apply governance and monitoring controls.', 'Estimate cost and document architecture decisions.'], [{ title: 'Secure Azure Application Design', details: 'Design a multi-tier application with identity controls and private data access.', deliverable: 'Architecture diagram, access model, and deployment plan.' }, { title: 'Business Continuity Design', details: 'Map recovery requirements to backup, redundancy, and failover options.', deliverable: 'Recovery plan, risk assessment, and validation checklist.' }, { title: 'Azure Migration Assessment', details: 'Assess sample workloads and define a secure, cost-aware target architecture.', deliverable: 'Migration roadmap, target design, and cost assumptions.' }]),
      makeCourse('GCP Solutions Architect', 'Design reliable and secure systems on Google Cloud.', 'Learn to architect Google Cloud solutions across networking, identity, compute, storage, databases, data services, resilience, observability, governance, and cost optimisation.', ['Google Cloud', 'VPC', 'IAM', 'Compute Engine', 'Cloud Storage', 'Cloud SQL', 'GKE', 'Cloud Monitoring', 'Terraform'], ['Google Cloud Architecture Framework', 'Requirements and Project Organisation', 'VPC Networks, Subnets and Firewall Rules', 'IAM, Service Accounts and Workload Identity', 'Compute and Container Service Selection', 'Storage and Database Design', 'Load Balancing and Resilient Services', 'Backup, Disaster Recovery and Recovery Planning', 'Security Controls and Governance', 'Logging, Monitoring and Reliability', 'Cost Management and Performance Trade-Offs', 'GCP Solutions Architecture Capstone'], ['Design cloud network and identity boundaries.', 'Select compute, storage, and database services.', 'Plan resilience and recovery options.', 'Apply security and monitoring practices.', 'Document cost and architecture trade-offs.'], [{ title: 'Secure GCP Web Platform', details: 'Design a multi-tier application with controlled network paths and protected data.', deliverable: 'Architecture diagram, security plan, and deployment notes.' }, { title: 'Resilient Service Design', details: 'Evaluate availability, backup, and recovery choices for a business workload.', deliverable: 'Resilience plan and recovery test checklist.' }, { title: 'Cloud Migration Blueprint', details: 'Map sample workload needs to GCP services and plan staged migration.', deliverable: 'Target architecture, migration phases, and cost assumptions.' }]),
      makeCourse('Kubernetes', 'Deploy, scale, secure, and troubleshoot containerised applications.', 'Progress from container fundamentals to Kubernetes workloads, networking, storage, configuration, security, and troubleshooting. Practise scheduling, services, rollouts, resource management, and incident investigation.', ['Docker', 'Kubernetes', 'kubectl', 'Helm', 'YAML', 'Prometheus', 'Grafana', 'Container Registry'], ['Container Fundamentals and Kubernetes Architecture', 'Control Plane, Worker Nodes and Scheduling', 'Pods, ReplicaSets and Deployments', 'StatefulSets, DaemonSets and Jobs', 'Services, DNS, Ingress and Network Policies', 'ConfigMaps, Secrets and Environment Configuration', 'Persistent Volumes and Storage Classes', 'Requests, Limits, Probes and Autoscaling', 'Rolling Updates and Rollbacks', 'Helm Charts and Release Management', 'RBAC and Workload Security', 'Logs, Events and Cluster Troubleshooting'], ['Explain control-plane and worker responsibilities.', 'Deploy workloads and expose services.', 'Configure storage, secrets, and health probes.', 'Manage resources and rolling releases.', 'Troubleshoot workload and connectivity failures.'], [{ title: 'Multi-Tier Application', details: 'Deploy frontend, backend, and database components with appropriate resources and service discovery.', deliverable: 'Manifests or Helm chart, architecture diagram, and deployment guide.' }, { title: 'Scaling and Recovery Lab', details: 'Configure probes, scaling, and rolling updates, then simulate pod failures.', deliverable: 'Configuration, test evidence, and recovery notes.' }, { title: 'Kubernetes Security Review', details: 'Review RBAC, service accounts, exposed services, and workload configuration.', deliverable: 'Assessment report and least-privilege remediation.' }]),
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description:
      'Choose focused tracks in networking, defensive security, authorised testing, and incident response.',
    Icon: ShieldCheck,
    courses: [
      makeCourse('Networking & Network Security', 'Understand traffic flows and protect network infrastructure.', 'Build foundations in networking and network defence, from TCP/IP and subnetting to routing, DNS, firewalls, VPNs, and traffic analysis. Practice only in owned or authorised lab environments.', ['TCP/IP', 'DNS', 'Wireshark', 'Firewalls', 'VPN', 'Nmap', 'Linux'], ['OSI and TCP/IP Models', 'IPv4, IPv6 and Subnetting', 'Routing, Switching and VLANs', 'DNS, DHCP and Core Network Services', 'Ports, Protocols and Service Discovery', 'Firewall Rules and Network Segmentation', 'VPN Concepts and Secure Connectivity', 'Packet Capture and Traffic Analysis', 'IDS/IPS and Network Monitoring', 'Network Troubleshooting and Documentation'], ['Explain common network protocols and traffic flows.', 'Plan subnets and interpret routing behaviour.', 'Analyse packet captures for expected and suspicious activity.', 'Describe firewall, VPN, and segmentation controls.', 'Document network findings and remediation.'], [{ title: 'Network Traffic Investigation', details: 'Analyse provided packet captures and explain key connections and anomalies.', deliverable: 'Traffic analysis notes and evidence screenshots.' }, { title: 'Segmentation Design', details: 'Design subnets and firewall rules for a small sample environment.', deliverable: 'Network diagram and rule justification.' }, { title: 'Network Security Assessment', details: 'Review an authorised lab network configuration and prioritise improvements.', deliverable: 'Risk-ranked findings and remediation plan.' }]),
      makeCourse('Security Fundamentals', 'Apply core security principles to systems and organisations.', 'Learn foundational security concepts including the CIA triad, risk assessment, authentication, access control, cryptography basics, firewalls, secure configuration, and security policy. Connect concepts to practical system-hardening decisions.', ['CIA Triad', 'IAM', 'MFA', 'Firewalls', 'Encryption', 'Linux', 'Windows', 'Security Baselines'], ['CIA Triad and Security Principles', 'Threats, Vulnerabilities and Risk', 'Risk Assessment and Treatment', 'Authentication, MFA and Access Control', 'Least Privilege and Account Management', 'Encryption, Hashing and Certificates', 'Firewalls, VPNs and Endpoint Protection', 'Secure Configuration and Patch Management', 'Backup, Recovery and Business Continuity', 'Security Policies and Compliance Concepts'], ['Explain confidentiality, integrity, and availability.', 'Identify threats and assess basic risks.', 'Apply least privilege and stronger authentication.', 'Describe encryption and secure communication basics.', 'Create a practical system-hardening checklist.'], [{ title: 'Risk Assessment Exercise', details: 'Assess a sample organisation’s assets, threats, and weaknesses.', deliverable: 'Risk register and prioritised treatment plan.' }, { title: 'System Hardening Checklist', details: 'Review a lab system against baseline security practices.', deliverable: 'Hardening checklist and validation record.' }, { title: 'Access Control Design', details: 'Create role-based access recommendations for a sample team.', deliverable: 'Access matrix and policy rationale.' }]),
      makeCourse('Ethical Hacking & Penetration Testing', 'Assess vulnerabilities in approved lab environments.', 'Learn a structured, authorised testing process: scope definition, reconnaissance, scanning, validation, risk rating, evidence handling, and remediation reporting. Practical testing must be limited to intentionally vulnerable labs or systems with explicit permission.', ['Kali Linux', 'Nmap', 'Burp Suite', 'OWASP ZAP', 'Metasploit', 'Linux', 'Wireshark'], ['Rules of Engagement and Scope Definition', 'Reconnaissance and Asset Discovery', 'Scanning and Service Enumeration in a Lab', 'Vulnerability Identification and Validation', 'Risk Rating and Prioritisation', 'Authentication and Access-Control Testing', 'Web Application Testing Methodology', 'Safe Exploitation Concepts in Training Labs', 'Evidence Collection and Reproducibility', 'Remediation and Retesting', 'Professional Reporting and Ethics'], ['Define authorised scope and testing boundaries.', 'Enumerate services in a controlled lab.', 'Validate findings without unnecessary impact.', 'Rank vulnerabilities by evidence and risk.', 'Write remediation-focused assessment reports.'], [{ title: 'Authorised Lab Assessment', details: 'Assess a deliberately vulnerable lab target according to a written scope.', deliverable: 'Evidence-based findings and remediation report.' }, { title: 'Vulnerability Validation Lab', details: 'Reproduce selected training-lab findings and verify fixes after remediation.', deliverable: 'Reproduction notes and retest evidence.' }, { title: 'Penetration Test Report', details: 'Consolidate findings, severity, impact, and corrective recommendations.', deliverable: 'Executive summary and technical report.' }]),
      makeCourse('Linux & Windows System Fundamentals', 'Understand operating systems and secure their configuration.', 'Learn core Linux and Windows administration concepts that support security work: users, permissions, processes, services, filesystems, logs, patching, and system hardening.', ['Linux', 'Bash', 'Windows', 'PowerShell', 'Event Viewer', 'systemd', 'NTFS', 'File Permissions'], ['Operating-System Architecture and Processes', 'Linux Filesystem and Essential Commands', 'Linux Users, Groups and Permissions', 'Services, Processes and Systemd', 'Shell Scripting and Automation Basics', 'Windows Accounts, Groups and NTFS Permissions', 'Windows Services and Task Scheduler', 'System Logs and Event Viewer', 'Patch Management and Secure Baselines', 'Host Firewall and Remote Access Controls', 'Backup and Recovery Fundamentals'], ['Navigate Linux and Windows administration tools.', 'Manage accounts, permissions, and services.', 'Inspect logs and investigate basic system issues.', 'Apply patching and hardening practices.', 'Automate simple administrative checks.'], [{ title: 'Linux Administration Lab', details: 'Create users, configure permissions, manage services, and inspect system logs.', deliverable: 'Command record and hardening checklist.' }, { title: 'Windows Security Baseline', details: 'Review local accounts, permissions, firewall settings, and event logs in a lab.', deliverable: 'Baseline report and recommended changes.' }, { title: 'System Audit Script', details: 'Write a simple script to collect selected system and security configuration data.', deliverable: 'Script, sample output, and usage notes.' }]),
      makeCourse('Web Application Security', 'Identify and remediate common web application weaknesses.', 'Study web architecture, sessions, authentication, access control, input validation, and common OWASP risks. Use deliberately vulnerable applications and approved testing tools to learn safe verification and remediation.', ['HTTP', 'OWASP Top 10', 'Burp Suite', 'OWASP ZAP', 'Browser DevTools', 'JavaScript', 'SQL'], ['HTTP Requests, Responses and Browser Security', 'Authentication and Session Management', 'Access Control and Authorisation Checks', 'Input Validation and Output Encoding', 'SQL Injection Concepts in a Safe Lab', 'Cross-Site Scripting and Prevention', 'CSRF and Request Integrity', 'Security Headers and TLS Basics', 'File Upload and API Security', 'Testing with Burp Suite or OWASP ZAP', 'Secure Development and Retesting'], ['Explain common web attack classes and their impact.', 'Test a deliberately vulnerable application safely.', 'Recognise authentication and access-control weaknesses.', 'Recommend secure coding and configuration fixes.', 'Verify remediation through repeatable tests.'], [{ title: 'OWASP Lab Assessment', details: 'Test a training application for selected common weaknesses.', deliverable: 'Findings report with evidence and severity.' }, { title: 'Secure-Fix Verification', details: 'Apply or review fixes and repeat the tests to confirm behaviour.', deliverable: 'Before-and-after test evidence.' }, { title: 'Web Security Review', details: 'Review headers, sessions, access controls, and input handling in a sample app.', deliverable: 'Security checklist and remediation plan.' }]),
      makeCourse('Database Security', 'Protect database access, data, and audit trails.', 'Learn database security principles for SQL and NoSQL environments, including authentication, least privilege, encryption, auditing, backups, secure configuration, and protection against common query-related risks.', ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'RBAC', 'TLS', 'Audit Logs', 'Backup Tools'], ['Database Security Principles and Threats', 'Database Accounts, Roles and Least Privilege', 'Authentication and Credential Handling', 'SQL Injection Prevention and Parameterised Queries', 'Encryption in Transit and at Rest', 'Sensitive Data Classification and Masking', 'Auditing, Logging and Monitoring', 'Backup, Restore and Recovery Testing', 'Secure Configuration and Patch Management', 'NoSQL Access Controls and Data Protection'], ['Create least-privilege database roles.', 'Explain secure query patterns and injection prevention.', 'Protect sensitive data with appropriate controls.', 'Configure auditing and review access activity.', 'Plan and validate database backup recovery.'], [{ title: 'Database Access Review', details: 'Review sample roles and grants and reduce excessive permissions.', deliverable: 'Access matrix and revised grant plan.' }, { title: 'Secure Query Lab', details: 'Compare unsafe query construction with parameterised queries in a lab.', deliverable: 'Test cases and secure coding notes.' }, { title: 'Database Recovery Drill', details: 'Document and validate a sample backup and restore workflow.', deliverable: 'Recovery steps and validation record.' }]),
      makeCourse('Security Tools & Platforms', 'Use common tools for visibility, assessment, and defence.', 'Build familiarity with common defensive and authorised assessment tools. Learn how to choose tools for a task, interpret results, preserve evidence, and avoid treating tool output as confirmed findings without validation.', ['Nmap', 'Wireshark', 'Burp Suite', 'OWASP ZAP', 'Kali Linux', 'SIEM', 'VirtualBox', 'Git'], ['Lab Safety, Scope and Evidence Handling', 'Virtual Machines and Isolated Lab Networks', 'Nmap for Approved Asset Discovery', 'Wireshark Packet Capture and Filters', 'Burp Suite and OWASP ZAP Fundamentals', 'Kali Linux Tool Environment', 'Log Collection and SIEM Concepts', 'Alert Review and Evidence Correlation', 'Tool Output Validation and False Positives', 'Reporting, Reproducibility and Cleanup'], ['Set up an isolated cybersecurity lab.', 'Choose appropriate tools for defined tasks.', 'Interpret basic scan and packet-capture output.', 'Validate findings and identify false positives.', 'Preserve evidence and write reproducible notes.'], [{ title: 'Isolated Security Lab', details: 'Build a virtual lab with clear network boundaries and test targets.', deliverable: 'Lab diagram and setup checklist.' }, { title: 'Tool Comparison Exercise', details: 'Compare outputs from approved tools against a training target.', deliverable: 'Results comparison and validation notes.' }, { title: 'Evidence and Reporting Workflow', details: 'Collect and organise evidence for a simulated security finding.', deliverable: 'Evidence register and concise technical report.' }]),
      makeCourse('Threat Detection & Defense', 'Recognise suspicious behaviour and strengthen defences.', 'Explore common threat patterns, endpoint and network signals, malware concepts, phishing, social engineering, detection logic, and defensive response. Use sample logs and safe simulations rather than live malicious activity.', ['SIEM', 'Sysmon', 'Windows Event Logs', 'Linux Logs', 'MITRE ATT&CK', 'YARA Concepts', 'Wireshark'], ['Threat Landscape and Common Attack Patterns', 'Malware Types and Defensive Indicators', 'Phishing and Social Engineering Awareness', 'Endpoint and Network Telemetry', 'Log Sources and Event Normalisation', 'MITRE ATT&CK Concepts', 'Detection Logic and Alert Tuning', 'Indicators of Compromise and Context', 'False Positives and Detection Validation', 'Containment and Defensive Response', 'Lessons Learned and Detection Improvement'], ['Recognise common threat indicators in sample data.', 'Map suspicious behaviour to defensive concepts.', 'Build basic detection logic from provided logs.', 'Triage alerts and reduce false positives.', 'Recommend containment and prevention steps.'], [{ title: 'Threat Hunting with Sample Logs', details: 'Search provided endpoint and network logs for suspicious patterns.', deliverable: 'Hunt queries, evidence notes, and findings summary.' }, { title: 'Detection Rule Exercise', details: 'Create and validate a simple rule against benign and simulated suspicious events.', deliverable: 'Detection logic, test cases, and tuning notes.' }, { title: 'Defensive Response Scenario', details: 'Review a simulated incident and plan containment and recovery steps.', deliverable: 'Response checklist and lessons-learned report.' }]),
      makeCourse('SOC Analyst & Incident Response', 'Triage alerts, investigate incidents, and document response.', 'Learn the workflows of a security operations centre, including alert triage, log correlation, incident classification, evidence preservation, escalation, containment, recovery, and post-incident improvement.', ['SIEM', 'Windows Event Logs', 'Linux Logs', 'EDR Concepts', 'MITRE ATT&CK', 'Ticketing Tools', 'Incident Runbooks'], ['SOC Roles, Triage and Escalation', 'Log Sources and Time Normalisation', 'Alert Validation and Prioritisation', 'Event Correlation and Investigation Timelines', 'Identity and Endpoint Investigation Basics', 'Network Evidence and Indicators', 'Incident Classification and Severity', 'Evidence Preservation and Chain of Custody Concepts', 'Containment, Eradication and Recovery', 'Communication and Stakeholder Updates', 'Post-Incident Review and Detection Improvement'], ['Triage and prioritise sample security alerts.', 'Correlate events into an investigation timeline.', 'Document evidence and escalation decisions.', 'Explain incident containment and recovery stages.', 'Prepare a clear incident report and lessons learned.'], [{ title: 'SOC Alert Triage', details: 'Review sample alerts, distinguish benign from suspicious events, and document escalation decisions.', deliverable: 'Triage worksheet and investigation notes.' }, { title: 'Incident Timeline Investigation', details: 'Correlate provided logs into a timeline and identify evidence gaps.', deliverable: 'Timeline, evidence register, and incident summary.' }, { title: 'Incident Response Tabletop', details: 'Walk through a simulated incident from detection through recovery and review.', deliverable: 'Response plan, communications draft, and lessons-learned report.' }]),
      makeCourse('Cybersecurity Career & Lab Portfolio', 'Turn hands-on practice into clear, professional evidence.', 'Develop safe lab habits and a portfolio of documented cybersecurity exercises. Focus on Git-based evidence, lab reports, remediation recommendations, communication, interview preparation, and professional ethics.', ['Git', 'GitHub', 'Markdown', 'VirtualBox', 'Linux', 'Wireshark', 'Nmap', 'Report Templates'], ['Professional Ethics and Authorised Practice', 'Setting Up a Safe Home Lab', 'Writing Reproducible Lab Notes', 'Git and Version Control for Security Work', 'Technical Report Structure and Evidence', 'Risk and Remediation Communication', 'Portfolio Selection and Presentation', 'Resume and LinkedIn Project Descriptions', 'Interview Scenario Practice', 'Continuous Learning and Certification Planning'], ['Build and document an isolated practice lab.', 'Keep reproducible notes and version-controlled evidence.', 'Write findings for technical and non-technical readers.', 'Present projects clearly in a professional portfolio.', 'Prepare for scenario-based interviews ethically.'], [{ title: 'Cybersecurity Lab Portfolio', details: 'Document several safe lab exercises with scope, steps, findings, and remediation.', deliverable: 'Version-controlled portfolio with clear reports.' }, { title: 'Security Findings Presentation', details: 'Present a sample finding, its impact, evidence, and practical fix.', deliverable: 'Short presentation and technical report.' }, { title: 'Interview Scenario Workbook', details: 'Write structured responses to troubleshooting, risk, and incident scenarios.', deliverable: 'Scenario workbook and project talking points.' }]),
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
