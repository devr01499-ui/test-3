import { IndustryPageData } from "@/types/industries";

export const governmentData: IndustryPageData = {
  title: "Government & Public Sector BPO Solutions | Claritiy",
  description: "Citizen services, case management, and administrative operations for federal, state, and local government institutions.",
  slug: "government",
  breadcrumb: "Government & Public Sector",

  heroData: {
    badgeIcon: "Building2",
    badgeText: "Institutional Government Mastery",
    headline: "Government Integrity: Advanced Public Process & Citizen Orchestration",
    subheading: "Modernize public institutional operations with mission-critical precision. We deliver scalable, compliant citizen services and advanced case management orchestration.",
    bullets: [
      "Institutional Citizen Helplines & Neural Service Portals",
      "Strategic Case Management & Verified Benefits Orchestration",
      "FedRAMP & FISMA Compliant Mission-Critical Operations",
      "Native Multilingual Citizen Support & Global Outreach"
    ],
    primaryCta: "Architect Public Ops",
    secondaryCta: "Access Government Brief",
    visualIcon: "Building2",
    visualList: ["Institutional Citizen Service Hubs", "Neural Case Management Control", "Verified Benefits Processing Meshes", "Institutional Public Data Integrity Centers"],
    certifications: [
      { id: "c1", name: "FedRAMP Authorized" },
      { id: "c2", name: "FISMA Compliant" },
      { id: "c3", name: "NIST 800-53 Verified" },
      { id: "c4", name: "SOC 2 Type II" }
    ],
    clientSuccess: {
      stat1: "50+ Institutional Government Partners",
      stat2: "92.5% Verified Citizen CSAT"
    }
  },

  services: {
    title: "Comprehensive Institutional Government Solutions",
    gridItems: [
      {
        title: "STRATEGIC CITIZEN SERVICES",
        features: ["Institutional 311 Contact Centers", "Neural Online Portal Orchestration", "Native Multilingual Helplines", "Verified Permit Adjudication", "Institutional License Queries"]
      },
      {
        title: "MISSION-CRITICAL CASE MGMT",
        features: ["Institutional Benefits Processing", "Neural Claims Adjudication", "Strategic Case Status Logic", "Verified Document Integrity", "Institutional Appeals Stewardship"]
      },
      {
        title: "REGULATORY ADMIN OPS",
        features: ["Institutional Data Integrity Processing", "Records Management Orchestration", "Verified FOI/FOIA Stewardship", "Strategic Correspondence Flow", "Institutional Regulatory Reporting"]
      },
      {
        title: "FEDERAL BACK-OFFICE OPS",
        features: ["Institutional Invoice Adjudication", "Strategic Procurement Orchestration", "Verified Financial Reconciliation", "Institutional Grant Lifecycle Mgmt", "Regulatory Audit Stewardship"]
      },
      {
        title: "NEURAL TRANSFORMATION",
        features: ["Institutional Legacy Migration", "Strategic Portal Transition Mesh", "Neural Digital Form Processing", "Institutional Citizen Onboarding", "Verified Document Digitization"]
      },
      {
        title: "MISSION-CRITICAL EMERGENCY",
        features: ["Institutional Disaster Relief Hubs", "Neural Emergency Info Lines", "Strategic Benefit Distribution", "Global Crisis Communication Mesh", "Institutional Coordination Support"]
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
