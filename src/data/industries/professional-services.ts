import { IndustryPageData } from "@/types/industries";

export const professionalServicesData: IndustryPageData = {
  title: "Professional Services BPO Solutions | Claritiy",
  description: "Administrative, front-office, and back-office scaling for consulting, accounting, marketing, and professional service firms.",
  slug: "professional-services",
  breadcrumb: "Professional Services",

  heroData: {
    badgeIcon: "Briefcase",
    badgeText: "Institutional Firm Mastery",
    headline: "Professional Integrity: Advanced Firm & Administrative Orchestration",
    subheading: "Focus on delivering high-tier client value while we orchestrate your institutional administrative, billing, and front-office operations with mission-critical precision.",
    bullets: [
      "Institutional Front-Office Client Reception & Strategic Scheduling",
      "Strategic Time & Billing Management & Institutional Revenue Integrity",
      "Global Research, Neural Data Entry & Regulatory Reporting",
      "Institutional Recruitment Process Outsourcing (RPO) & Global Talent Architecture"
    ],
    primaryCta: "Architect Your Firm",
    secondaryCta: "Access Services Brief",
    visualIcon: "Briefcase",
    visualList: ["Institutional Client Management Hubs", "Neural Billing & Time Integrity Centers", "Global Research Workflow Meshes", "Institutional Talent Acquisition Hubs"],
    certifications: [
      { id: "c1", name: "ISO 27001:2022 Verified" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "GDPR Verified" },
      { id: "c4", name: "CCPA Standards Aligned" }
    ],
    clientSuccess: {
      stat1: "110+ Institutional Global Partners",
      stat2: "40% Operational Latency Compression"
    }
  },

  services: {
    title: "Comprehensive Institutional Professional Services BPO",
    gridItems: [
      {
        title: "STRATEGIC FRONT OFFICE",
        features: ["Institutional Virtual Reception", "Neural Client Intake & Onboarding", "Strategic Appointment Orchestration", "Global Meeting Coordination Hubs", "Institutional CRM Integrity"]
      },
      {
        title: "PRECISION TIME & BILLING",
        features: ["Institutional Time Sheet Lifecycle", "Neural Invoice Integrity Generation", "Verified Accounts Receivable Hubs", "Strategic Expense Processing", "Institutional WIP Regulatory Reporting"]
      },
      {
        title: "RESEARCH & KNOWLEDGE OPS",
        features: ["Institutional Market Intelligence", "Neural Competitive Research Labs", "Strategic Data Collection Hubs", "Verified Report Integrity", "Institutional Presentation Stewardship"]
      },
      {
        title: "STRATEGIC RPO & TALENT",
        features: ["Institutional Job Ad Orchestration", "Neural CV Screening Labs", "Strategic Candidate Coordination", "Global Interview Scheduling Hubs", "Institutional Offer Integrity Management"]
      },
      {
        title: "NEURAL MARKETING OPS",
        features: ["Institutional Lead Generation", "Strategic Content Orchestration", "Neural Email Campaign Support", "Global Social Mesh Operations", "Institutional CRM Data Integrity"]
      },
      {
        title: "KNOWLEDGE ARCHITECTURE",
        features: ["Institutional Document Management", "Strategic Proposal Stewardship", "Neural Knowledge Base Maintenance", "Global Taxonomy Logic", "Institutional Training Materials"]
      }
    ]
  },

  compliance: {
    title: "Confidential & Compliant Operations",
    cards: [
      { title: "CLIENT CONFIDENTIALITY", bullets: ["NDA for All Staff", "Need-to-Know Access", "Secure File Handling", "No Data Commingling"] },
      { title: "DATA PROTECTION", bullets: ["GDPR Compliant", "CCPA Aligned", "Encrypted Communications", "ISO 27001 Certified"] },
      { title: "PROFESSIONAL STANDARDS", bullets: ["Industry Ethics Awareness", "CPD Support Protocols", "Conflict of Interest Mgmt", "Audit Readiness"] }
    ],
    securityMeasures: [
      { id: "s1", text: "NDAs signed by all staff before project assignment" },
      { id: "s2", text: "Encrypted document storage and transfer protocols" },
      { id: "s3", text: "Role-based access with project-level segregation" },
      { id: "s4", text: "GDPR and CCPA compliant data handling processes" },
      { id: "s5", text: "Conflict of interest screening for all engagements" },
      { id: "s6", text: "Secure remote work infrastructure and monitoring" },
      { id: "s7", text: "Client data never commingled across engagements" },
      { id: "s8", text: "Annual ethics and compliance training for all staff" }
    ]
  },

  technology: {
    title: "Integrated with Professional Services Platforms",
    categories: [
      { title: "PSA SYSTEMS", items: ["Salesforce PSA", "Microsoft Project", "Mavenlink", "Kantata", "BigTime"] },
      { title: "TIME & BILLING", items: ["Harvest", "TimeSolv", "Clio", "Bill4Time", "ClickTime"] },
      { title: "CRM & PIPELINE", items: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Monday.com"] },
      { title: "RPO TOOLS", items: ["LinkedIn Recruiter", "Greenhouse", "Lever", "Workday Recruiting", "SmartRecruiters"] },
      { title: "COMMUNICATIONS", items: ["Microsoft Teams", "Zoom", "Slack", "Asana", "Notion"] },
      { title: "ANALYTICS", items: ["Power BI", "Tableau", "Domo", "Looker", "Google Data Studio"] }
    ]
  },

  segments: {
    title: "Expertise Across Professional Firms",
    tabs: ["All", "Consulting", "Accounting", "Marketing", "Staffing"],
    items: [
      {
        name: "Consulting", title: "MANAGEMENT CONSULTING FIRMS",
        clientsCount: "35+",
        services: ["Research Ops", "Proposal Support", "Client Reporting", "Admin Scaling"]
      },
      {
        name: "Accounting", title: "ACCOUNTING & TAX FIRMS",
        clientsCount: "30+",
        services: ["Client Intake", "Data Entry", "Tax Season Scaling", "Billing Support"]
      },
      {
        name: "Marketing", title: "MARKETING & PR AGENCIES",
        clientsCount: "25+",
        services: ["Campaign Ops", "Social Mgmt", "Reporting", "Lead Generation"]
      },
      {
        name: "Staffing", title: "STAFFING & RECRUITMENT FIRMS",
        clientsCount: "20+",
        services: ["CV Screening", "Candidate Comms", "Job Ad Mgmt", "Compliance Checks"]
      }
    ]
  },

  metrics: {
    title: "Professional Services Performance",
    items: [
      { label: "Billing Accuracy Rate", value: "99.8%", progressPercent: 99.8 },
      { label: "Overhead Cost Reduction", value: "40%", progressPercent: 75 },
      { label: "CV-to-Hire Speed", value: "35% Faster", progressPercent: 70 },
      { label: "Client Retention Rate", value: "96%", progressPercent: 96 }
    ]
  },

  cta: {
    primaryBtn: "Talk to a Services Expert",
    secondaryBtn: "Download Services Case Study"
  }
};
