import { IndustryPageData } from "@/types/industries";

export const professionalServicesData: IndustryPageData = {
  title: "Professional Services BPO Solutions | Claritiy",
  description: "Administrative, front-office, and back-office scaling for consulting, accounting, marketing, and professional service firms.",
  slug: "professional-services",
  breadcrumb: "Professional Services",

  heroData: {
    badgeIcon: "Briefcase",
    badgeText: "Professional Services",
    headline: "Scale Your Firm Without Scaling Overhead",
    subheading: "Focus on delivering client value while our professional services BPO handles your administrative, billing, and front-office operations.",
    bullets: [
      "Front-office client reception & scheduling",
      "Time & billing management support",
      "Research, data entry & reporting",
      "Recruitment process outsourcing (RPO)"
    ],
    primaryCta: "Scale Your Firm",
    secondaryCta: "View Services Brief",
    visualIcon: "Briefcase",
    visualList: ["Client management dashboards", "Billing and time entry screens", "Research workflow platforms", "Talent acquisition portals"],
    certifications: [
      { id: "c1", name: "ISO 27001" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "GDPR" },
      { id: "c4", name: "CCPA" }
    ],
    clientSuccess: {
      stat1: "110+ Professional firms served",
      stat2: "40% Staff cost reduction"
    }
  },

  services: {
    title: "Comprehensive Professional Services BPO",
    gridItems: [
      {
        title: "FRONT OFFICE",
        features: ["Virtual Reception", "Client Intake & Onboarding", "Appointment Scheduling", "Meeting Coordination", "CRM Management"]
      },
      {
        title: "TIME & BILLING",
        features: ["Time Sheet Collection", "Invoice Generation", "Accounts Receivable", "Expense Processing", "WIP Reporting"]
      },
      {
        title: "RESEARCH & ANALYTICS",
        features: ["Market Research", "Competitive Intelligence", "Data Collection", "Report Writing", "Presentation Prep"]
      },
      {
        title: "RECRUITMENT (RPO)",
        features: ["Job Ad Management", "CV Screening", "Candidate Coordination", "Interview Scheduling", "Offer Management"]
      },
      {
        title: "MARKETING OPERATIONS",
        features: ["Lead Generation", "Content Scheduling", "Email Campaign Support", "Social Media Ops", "CRM Data Hygiene"]
      },
      {
        title: "KNOWLEDGE MANAGEMENT",
        features: ["Document Management", "Proposal Writing Support", "Knowledge Base Maintenance", "Taxonomy Creation", "Training Materials"]
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
