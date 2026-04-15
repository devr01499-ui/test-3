import { IndustryPageData } from "@/types/industries";

export const insuranceData: IndustryPageData = {
  title: "Insurance BPO Solutions | Claritiy",
  description: "Accelerate claims processing, underwriting, and policy administration with expert insurance BPO services.",
  slug: "insurance",
  breadcrumb: "Insurance",

  heroData: {
    badgeIcon: "ShieldCheck",
    badgeText: "Insurance",
    headline: "Accelerate Claims & Underwriting at Scale",
    subheading: "Reduce processing times and improve policyholder satisfaction with dedicated insurance operations experts.",
    bullets: [
      "End-to-end claims lifecycle management",
      "Underwriting support & data extraction",
      "Policy administration & endorsements",
      "Fraud detection & investigation"
    ],
    primaryCta: "Streamline Claims",
    secondaryCta: "View Insurance Brief",
    visualIcon: "ShieldCheck",
    visualList: ["Claims processing workflows", "Underwriting data desks", "Fraud investigation screens", "Policy admin platforms"],
    certifications: [
      { id: "c1", name: "SOC 2 Type II" },
      { id: "c2", name: "ISO 27001" },
      { id: "c3", name: "PCI DSS" },
      { id: "c4", name: "GDPR" }
    ],
    clientSuccess: {
      stat1: "120+ Insurance carriers served",
      stat2: "40% Faster claims resolution"
    }
  },

  services: {
    title: "Complete Insurance Operations Support",
    gridItems: [
      {
        title: "CLAIMS MANAGEMENT",
        features: ["First Notice of Loss", "Claims Adjudication", "Settlement Processing", "Salvage & Recovery", "Litigation Support"]
      },
      {
        title: "UNDERWRITING SUPPORT",
        features: ["Risk Assessment Data", "Application Intake", "Document Indexing", "Rate Quoting", "Renewal Processing"]
      },
      {
        title: "POLICY ADMINISTRATION",
        features: ["New Business Setup", "Endorsements", "Cancellations & Reinstatements", "Billing Support", "Correspondence"]
      },
      {
        title: "FRAUD DETECTION",
        features: ["SIU Investigations", "Pattern Analysis", "Data Verification", "Third-party Checks", "Fraud Reporting"]
      },
      {
        title: "CUSTOMER SERVICES",
        features: ["Policyholder Inquiries", "Agent Support Line", "Claims Status Updates", "Omnichannel Support", "Retention Campaigns"]
      },
      {
        title: "ANALYTICS & REPORTING",
        features: ["Claims KPI Dashboards", "Loss Ratio Analysis", "Compliance Reporting", "Trend Analysis", "Actuarial Data Prep"]
      }
    ]
  },

  compliance: {
    title: "Regulatory-Grade Insurance Compliance",
    cards: [
      { title: "REGULATORY COMPLIANCE", bullets: ["State DOI Regulations", "NAIC Model Act Alignment", "GDPR & CCPA", "Prompt Pay Laws"] },
      { title: "DATA SECURITY", bullets: ["Encrypted Policy Data", "RBAC Controls", "No-USB Workstations", "VPN-only Access"] },
      { title: "AUDIT READINESS", bullets: ["Daily QA Monitoring", "Claims Audit Trails", "Full Documentation", "Third-party Audits"] }
    ],
    securityMeasures: [
      { id: "s1", text: "AES-256 encryption for all policy and claims data" },
      { id: "s2", text: "Multi-factor authentication for all platforms" },
      { id: "s3", text: "Role-based access control (RBAC)" },
      { id: "s4", text: "Clean desk and clean screen policies" },
      { id: "s5", text: "Dedicated SIU-trained investigators" },
      { id: "s6", text: "Regular penetration testing & vulnerability assessments" },
      { id: "s7", text: "Business continuity planning (BCP/DR)" },
      { id: "s8", text: "Full audit trails for all claim touch-points" }
    ]
  },

  technology: {
    title: "Integrated with Insurance Platforms",
    categories: [
      { title: "CLAIMS SYSTEMS", items: ["Guidewire ClaimCenter", "Duck Creek Claims", "Applied Epic", "Majesco Claims", "Snapsheet"] },
      { title: "POLICY ADMIN", items: ["Guidewire PolicyCenter", "Duck Creek Policy", "OneShield", "Majesco Policy", "ISCS SurePower"] },
      { title: "UNDERWRITING", items: ["Majesco Underwriting", "Snapsheet", "Intellect SEEC", "Applied Rater", "EZLynx"] },
      { title: "CRM & SUPPORT", items: ["Salesforce Insurance Cloud", "Zendesk", "ServiceNow", "Genesys Cloud", "Five9"] },
      { title: "FRAUD ANALYTICS", items: ["Verisk ISO ClaimSearch", "Shift Technology", "FRISS", "SAS Fraud Mgmt", "DataVisor"] },
      { title: "ANALYTICS & BI", items: ["Tableau", "Power BI", "Radar Live", "Snowflake", "Qlik"] }
    ]
  },

  segments: {
    title: "Expertise Across Insurance Lines",
    tabs: ["All", "P&C", "Life & Health", "Commercial", "Reinsurance"],
    items: [
      {
        name: "P&C", title: "PROPERTY & CASUALTY",
        clientsCount: "55+",
        services: ["Auto Claims", "Home Claims", "Adjusting Support", "Subrogation"]
      },
      {
        name: "Life & Health", title: "LIFE & HEALTH INSURANCE",
        clientsCount: "40+",
        services: ["Policy Admin", "Benefits Enrollment", "Claims Processing", "Member Services"]
      },
      {
        name: "Commercial", title: "COMMERCIAL LINES",
        clientsCount: "30+",
        services: ["Underwriting Triage", "Risk Surveys", "Mid-Term Adjustments", "Loss Control"]
      },
      {
        name: "Reinsurance", title: "REINSURANCE OPERATIONS",
        clientsCount: "10+",
        services: ["Treaty Accounting", "Loss Bordereaux", "Premium Settlements", "Reporting"]
      }
    ]
  },

  metrics: {
    title: "Insurance Processing Performance",
    items: [
      { label: "Claims Accuracy Rate", value: "99.5%", progressPercent: 99.5 },
      { label: "Cycle Time Reduction", value: "40%", progressPercent: 75 },
      { label: "Fraud Detection Rate", value: "92%", progressPercent: 92 },
      { label: "Client Retention Rate", value: "97%", progressPercent: 97 }
    ]
  },

  cta: {
    primaryBtn: "Talk to an Insurance Expert",
    secondaryBtn: "Download Insurance Case Study"
  }
};
