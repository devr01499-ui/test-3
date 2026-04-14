import { IndustryPageData } from "@/types/industries";

export const healthcareData: IndustryPageData = {
  title: "Healthcare & Medical BPO Solutions | Claritiy",
  description: "HIPAA-compliant healthcare BPO services supporting better patient outcomes through intelligent operations, medical billing, and clinical support.",
  slug: "healthcare",
  breadcrumb: "Healthcare & Medical",

  heroData: {
    badgeIcon: "HeartPulse",
    badgeText: "Healthcare & Medical",
    headline: "HIPAA-Compliant Healthcare BPO Services",
    subheading: "Supporting better patient outcomes through intelligent operations, revenue cycle management, and 24/7 dedicated medical support teams.",
    bullets: [
      "HIPAA compliant at every level",
      "Trained and certified medical staff",
      "24/7 patient support & triage",
      "Direct EHR/EMR integration"
    ],
    primaryCta: "Get Started",
    secondaryCta: "Case Studies",
    visualIcon: "Stethoscope",
    visualList: ["EHR interfaces synced in real-time", "Medical staff augmentation", "Patient care coordination scenes", "Technology integration pipelines"],
    certifications: [
      { id: "c1", name: "HIPAA" },
      { id: "c2", name: "HITRUST" },
      { id: "c3", name: "ISO 27001" },
      { id: "c4", name: "SOC 2" }
    ],
    clientSuccess: {
      stat1: "500+ Healthcare clients",
      stat2: "98.5% Patient satisfaction"
    }
  },

  services: {
    title: "Comprehensive Healthcare BPO Solutions",
    gridItems: [
      {
        title: "PATIENT SERVICES",
        features: ["Appointment Scheduling", "Patient Support", "Telehealth Support", "Insurance Verification", "Reminders"]
      },
      {
        title: "REVENUE CYCLE",
        features: ["Medical Billing", "Claims Processing", "Coding Services", "AR Management", "Payment Posting", "Denial Mgmt"]
      },
      {
        title: "CLINICAL SUPPORT",
        features: ["Prior Authorization", "Utilization Management", "Case Management", "Nurse Triage", "Clinical Review", "Documentation"]
      },
      {
        title: "ADMIN OPERATIONS",
        features: ["Medical Records Mgmt", "Data Entry", "Transcription", "Correspondence", "Reporting"]
      },
      {
        title: "PHARMACY SUPPORT",
        features: ["Prescription Processing", "Refill Management", "Benefits Verification", "PBM Support"]
      },
      {
        title: "CREDENTIALING",
        features: ["Provider Enrollment", "License Verification", "Background Checks", "Re-credentialing"]
      }
    ]
  },

  compliance: {
    title: "Industry-Leading Healthcare Compliance",
    cards: [
      { title: "HIPAA COMPLIANCE", bullets: ["PHI Protection", "Strict Access Controls", "Immutable Audit Logs", "Mandatory Training"] },
      { title: "HITRUST CERTIFIED", bullets: ["CSF v11 Validated", "Annual Assessment", "Third-party Audited", "Risk Management"] },
      { title: "SOC 2 TYPE 2", bullets: ["Security", "Availability", "Process Integrity", "Privacy Controls"] }
    ],
    securityMeasures: [
      { id: "s1", text: "256-bit encryption at rest and in transit" },
      { id: "s2", text: "Multi-factor authentication" },
      { id: "s3", text: "Role-based access control (RBAC)" },
      { id: "s4", text: "Regular penetration testing" },
      { id: "s5", text: "24/7 physical and network security monitoring" },
      { id: "s6", text: "Annual HIPAA compliance training" },
      { id: "s7", text: "Business Associate Agreements (BAA) enforced" },
      { id: "s8", text: "Incident response protocols" }
    ]
  },

  technology: {
    title: "Integrated with Leading Healthcare Platforms",
    categories: [
      { title: "EHR/EMR SYSTEMS", items: ["Epic", "Cerner", "Allscripts", "Meditech", "eClinicalWorks"] },
      { title: "PRACTICE MANAGEMENT", items: ["athenahealth", "AdvancedMD", "DrChrono", "Practice Fusion", "SimplePractice"] },
      { title: "BILLING SYSTEMS", items: ["Kareo", "eClinicalWorks Billing", "NextGen Financials", "CareCloud", "Office Ally"] },
      { title: "PAYER PORTALS", items: ["UnitedHealthcare", "Anthem", "Aetna", "Cigna", "Humana"] },
      { title: "TELEHEALTH", items: ["Teladoc", "Doxy.me", "Zoom for Healthcare", "VSee", "Amwell"] },
      { title: "DATA ANALYTICS", items: ["Tableau Server", "Microsoft Power BI", "Custom EHR Dashboards", "Looker", "Snowflake"] }
    ]
  },

  segments: {
    title: "Specialized Expertise Across Healthcare Sectors",
    tabs: ["All", "Hospitals", "Clinics", "Payers", "Pharma", "Labs"],
    items: [
      {
        name: "Hospitals", title: "HOSPITALS & HEALTH SYSTEMS",
        clientsCount: "150+",
        services: ["Patient Access", "Revenue Cycle", "Case Mgmt", "ED Support"]
      },
      {
        name: "Clinics", title: "PHYSICIAN PRACTICES",
        clientsCount: "200+",
        services: ["Scheduling", "Billing", "EHR Support", "Transcription"]
      },
      {
        name: "Payers", title: "HEALTH INSURANCE PAYERS",
        clientsCount: "80+",
        services: ["Claims Processing", "Member Services", "Prior Auth", "Appeals", "Provider Svcs"]
      },
      {
        name: "Pharma", title: "PHARMACEUTICAL COMPANIES",
        clientsCount: "45+",
        services: ["Patient Support", "Pharmacovigilance", "Adverse Events", "Reimbursement"]
      },
      {
        name: "Labs", title: "LABS & IMAGING CENTERS",
        clientsCount: "40+",
        services: ["Result Delivery", "Scheduling", "Data Entry", "Transcription"]
      }
    ]
  },

  metrics: {
    title: "Healthcare Delivery Metrics",
    items: [
      { label: "Claims First-Pass Accuracy", value: "98%", progressPercent: 98 },
      { label: "Denial Rate Reduction", value: "35%", progressPercent: 35 },
      { label: "Telehealth Wait Time", value: "< 2 mins", progressPercent: 95 },
      { label: "Compliance Breaches", value: "Zero", progressPercent: 100 }
    ]
  },

  cta: {
    primaryBtn: "Schedule Healthcare Consultation",
    secondaryBtn: "Download Healthcare Brief"
  }
};
