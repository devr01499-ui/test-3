import { IndustryPageData } from "@/types/industries";

export const governmentData: IndustryPageData = {
  title: "Government & Public Sector BPO Solutions | Claritiy",
  description: "Citizen services, case management, and administrative operations for federal, state, and local government institutions.",
  slug: "government",
  breadcrumb: "Government & Public Sector",

  heroData: {
    badgeIcon: "Building2",
    badgeText: "Government & Public Sector",
    headline: "Modernize Citizen Services at Scale",
    subheading: "Enable faster, more efficient government operations with compliant BPO solutions built for the public sector.",
    bullets: [
      "Citizen helplines & service portals",
      "Case management & benefits processing",
      "FedRAMP and FISMA compliant operations",
      "Multilingual citizen support services"
    ],
    primaryCta: "Modernize Public Ops",
    secondaryCta: "View Government Brief",
    visualIcon: "Building2",
    visualList: ["Citizen service portals", "Case management dashboards", "Benefits processing workflows", "Government data centers"],
    certifications: [
      { id: "c1", name: "FedRAMP" },
      { id: "c2", name: "FISMA" },
      { id: "c3", name: "NIST 800-53" },
      { id: "c4", name: "SOC 2 Type II" }
    ],
    clientSuccess: {
      stat1: "50+ Government agencies served",
      stat2: "92% Citizen satisfaction rate"
    }
  },

  services: {
    title: "Comprehensive Government BPO Support",
    gridItems: [
      {
        title: "CITIZEN SERVICES",
        features: ["311 Call Centers", "Online Portal Support", "Multilingual Helplines", "Permit Inquiries", "License Queries"]
      },
      {
        title: "CASE MANAGEMENT",
        features: ["Benefits Processing", "Claims Adjudication", "Case Updates", "Document Verification", "Appeals Handling"]
      },
      {
        title: "ADMINISTRATIVE OPS",
        features: ["Data Entry & Processing", "Records Management", "FOI/FOIA Processing", "Correspondence Mgmt", "Report Generation"]
      },
      {
        title: "BACK-OFFICE SUPPORT",
        features: ["Invoice Processing", "Procurement Support", "Financial Reconciliation", "Grant Management", "Audit Preparation"]
      },
      {
        title: "DIGITAL TRANSFORMATION",
        features: ["Legacy System Data Migration", "Portal Transition Support", "Digital Form Processing", "Citizen Onboarding", "Document Digitization"]
      },
      {
        title: "EMERGENCY MANAGEMENT",
        features: ["Disaster Relief Hotlines", "Emergency Information Lines", "Benefit Distribution", "Crisis Communication", "Coordination Support"]
      }
    ]
  },

  compliance: {
    title: "Government-Grade Security & Compliance",
    cards: [
      { title: "FEDERAL COMPLIANCE", bullets: ["FedRAMP Authorized", "FISMA Requirements", "NIST 800-53 Controls", "ITAR Awareness"] },
      { title: "DATA SOVEREIGNTY", bullets: ["US-Based Data Residency", "Clearance-Level Access", "PII Protection", "FOIA Compliance"] },
      { title: "OPERATIONAL SECURITY", bullets: ["Background Checked Staff", "Physical Security Controls", "Classified Handling Protocols", "24/7 SOC Monitoring"] }
    ],
    securityMeasures: [
      { id: "s1", text: "FedRAMP and FISMA compliant operating environment" },
      { id: "s2", text: "NIST 800-53 security controls implemented" },
      { id: "s3", text: "Background checks for all staff handling federal data" },
      { id: "s4", text: "US-based data residency and sovereignty" },
      { id: "s5", text: "Multi-factor authentication for all government portals" },
      { id: "s6", text: "Biometric access controls for secure facilities" },
      { id: "s7", text: "Annual cybersecurity training for all staff" },
      { id: "s8", text: "FOIA and privacy act compliance protocols" }
    ]
  },

  technology: {
    title: "Integrated with Government Platforms",
    categories: [
      { title: "CASE MGMT SYSTEMS", items: ["ServiceNow Gov", "Salesforce Gov Cloud", "Tyler Technologies", "Socrata", "OpenGov"] },
      { title: "CRM & CONTACT CENTER", items: ["Genesys Gov", "AWS GovCloud Connect", "Microsoft Teams Gov", "Avaya", "Five9"] },
      { title: "DATA & RECORDS", items: ["Laserfiche", "OpenText", "M-Files", "DocStar", "ELO ECM"] },
      { title: "FINANCIAL SYSTEMS", items: ["Oracle ERP Gov", "SAP S/4HANA Public Sector", "Infor CloudSuite", "CGI Advantage", "Oracle Financials"] },
      { title: "SECURITY PLATFORMS", items: ["Splunk Gov", "Palo Alto Networks", "CrowdStrike Gov", "Tenable.io", "SolarWinds"] },
      { title: "ANALYTICS", items: ["Tableau Gov", "Power BI Gov", "SAS Analytics", "Palantir", "Esri GIS"] }
    ]
  },

  segments: {
    title: "Serving Every Level of Government",
    tabs: ["All", "Federal", "State", "Local", "Defense"],
    items: [
      {
        name: "Federal", title: "FEDERAL AGENCIES",
        clientsCount: "20+",
        services: ["Citizen Help Centers", "Benefits Processing", "FOI Processing", "Data Entry"]
      },
      {
        name: "State", title: "STATE GOVERNMENT",
        clientsCount: "18+",
        services: ["DMV Support", "Health Benefits", "Tax Queries", "License Renewals"]
      },
      {
        name: "Local", title: "COUNTY & MUNICIPAL",
        clientsCount: "15+",
        services: ["311 Services", "Permit Support", "Utility Billing", "Parks & Rec"]
      },
      {
        name: "Defense", title: "DEFENSE & SECURITY AGENCIES",
        clientsCount: "5+",
        services: ["Admin Ops", "Logistics Support", "Records Mgmt", "Reporting"]
      }
    ]
  },

  metrics: {
    title: "Government Operations Performance",
    items: [
      { label: "Citizen Satisfaction Rate", value: "92%", progressPercent: 92 },
      { label: "Case Resolution Time", value: "35% Faster", progressPercent: 68 },
      { label: "Data Processing Accuracy", value: "99.7%", progressPercent: 99.7 },
      { label: "Cost Per Interaction Reduction", value: "40%", progressPercent: 72 }
    ]
  },

  cta: {
    primaryBtn: "Talk to a Government Expert",
    secondaryBtn: "Download Government Case Study"
  }
};
