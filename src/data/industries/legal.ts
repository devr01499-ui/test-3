import { IndustryPageData } from "@/types/industries";

export const legalData: IndustryPageData = {
  title: "Legal Services BPO Solutions | Claritiy",
  description: "Secure document management, legal research, paralegal support, and back-office operations for law firms and legal departments.",
  slug: "legal",
  breadcrumb: "Legal Services",

  heroData: {
    badgeIcon: "FileText",
    badgeText: "Institutional Legal Mastery",
    headline: "Legal Integrity: Advanced Process & Document Orchestration",
    subheading: "Empower your attorneys with institutional-grade document management and strategic paralegal support. We deliver scalable, attorney-supervised operational excellence.",
    bullets: [
      "Institutional Attorney-Supervised Document Review",
      "Strategic Legal Research & Global Case Preparation",
      "Rigorous Privileged Information Integrity Protocols",
      "Mission-Critical Court Filing & Deadline Orchestration"
    ],
    primaryCta: "Architect Legal Integrity",
    secondaryCta: "Access Legal Brief",
    visualIcon: "FileText",
    visualList: ["Institutional Document Review Hubs", "Neural Legal Research Dashboards", "Case Lifecycle Management Control", "Mission-Critical eDiscovery Mesh"],
    certifications: [
      { id: "c1", name: "ISO 27001:2022" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "GDPR Verified" },
      { id: "c4", name: "ABA Standards Compliant" }
    ],
    clientSuccess: {
      stat1: "80+ Institutional Law Partners",
      stat2: "99.95% Document Precision Index"
    }
  },

  services: {
    title: "Institutional Legal BPO Support",
    gridItems: [
      {
        title: "STRATEGIC DOCUMENT MANAGEMENT",
        features: ["Institutional Document Review", "Advanced Indexing & Coding", "Regulatory Contract Management", "Strategic Template Creation", "Secure Archive Stewardship"]
      },
      {
        title: "INSTITUTIONAL LEGAL RESEARCH",
        features: ["Strategic Case Law Research", "Regulatory Compliance Research", "Deep Precedent Analysis", "Expert Witness Resource Prep", "Strategic Legal Memo Drafting"]
      },
      {
        title: "MISSION-CRITICAL eDISCOVERY",
        features: ["Institutional Data Collection", "Advanced Processing & Filtering", "Rigorous Privilege Review", "Strategic Production Support", "Institutional Litigation Hold Mgmt"]
      },
      {
        title: "STRATEGIC PARALEGAL SERVICES",
        features: ["Institutional Case Preparation", "Strategic Court Filing Support", "High-Resolution Deposition Summaries", "Precision Exhibit Preparation", "Institutional Deadline Tracking"]
      },
      {
        title: "CONTRACT LIFECYCLE ARCHITECTURE",
        features: ["Strategic Contract Drafting", "Rigorous Review & Redlining", "Institutional Obligation Tracking", "Neural Renewal Management", "Secure Repository Stewardship"]
      },
      {
        title: "REGULATORY ADMIN & BILLING",
        features: ["Institutional Time & Billing Support", "Strategic Client Intake", "Matter Management Orchestration", "Verified Accounts Receivable", "Institutional Conflict Integrity Checks"]
      }
    ]
  },

  compliance: {
    title: "Attorney-Client Privilege & Data Security",
    cards: [
      { title: "CONFIDENTIALITY", bullets: ["Attorney-Client Privilege", "NDAs for All Staff", "Strict Access Controls", "Whistleblower Protocols"] },
      { title: "DATA SECURITY", bullets: ["AES-256 Encryption", "Secure Document Portals", "No-USB Workstations", "Air-Gapped Networks"] },
      { title: "REGULATORY COMPLIANCE", bullets: ["ABA Model Rules Alignment", "GDPR/CCPA Compliance", "State Bar Standards", "HIPAA (Health Litigation)"] }
    ],
    securityMeasures: [
      { id: "s1", text: "Attorney-client privilege protection protocols" },
      { id: "s2", text: "NDAs signed by every staff member pre-hire" },
      { id: "s3", text: "AES-256 encrypted document storage and transfer" },
      { id: "s4", text: "Secure, access-controlled document portals" },
      { id: "s5", text: "No-USB and no-print policies for sensitive matters" },
      { id: "s6", text: "Privilege log generation and tracking" },
      { id: "s7", text: "Regular ethics and compliance training" },
      { id: "s8", text: "Incident response and breach notification protocols" }
    ]
  },

  technology: {
    title: "Integrated with Leading Legal Platforms",
    categories: [
      { title: "CASE MANAGEMENT", items: ["Clio", "MyCase", "PracticePanther", "NetDocuments", "iManage"] },
      { title: "eDISCOVERY", items: ["Relativity", "Everlaw", "CaseCentral", "DISCO", "Nuix"] },
      { title: "CONTRACT MGMT", items: ["Ironclad", "DocuSign CLM", "ContractPodAi", "Icertis", "Agiloft"] },
      { title: "LEGAL RESEARCH", items: ["Westlaw", "LexisNexis", "Fastcase", "Bloomberg Law", "Casetext"] },
      { title: "TIME & BILLING", items: ["TimeSolv", "Bill4Time", "Tabs3", "Orion", "Elite 3E"] },
      { title: "COMMUNICATION", items: ["Zoom", "Microsoft Teams", "Slack", "Citrix", "Signal"] }
    ]
  },

  segments: {
    title: "Expertise Across Legal Practice Areas",
    tabs: ["All", "BigLaw", "In-House", "Litigation", "IP"],
    items: [
      {
        name: "BigLaw", title: "AM LAW 200 FIRMS",
        clientsCount: "30+",
        services: ["Document Review", "eDiscovery", "Paralegal Ops", "Admin Support"]
      },
      {
        name: "In-House", title: "CORPORATE LEGAL DEPARTMENTS",
        clientsCount: "25+",
        services: ["Contract Lifecycle", "Compliance Ops", "Matter Mgmt", "Outside Counsel Mgmt"]
      },
      {
        name: "Litigation", title: "LITIGATION SUPPORT FIRMS",
        clientsCount: "20+",
        services: ["Trial Prep", "Deposition Support", "Exhibit Mgmt", "Document Production"]
      },
      {
        name: "IP", title: "IP & PATENT FIRMS",
        clientsCount: "15+",
        services: ["Patent Research", "IP Docketing", "Opposition Support", "Trademark Monitoring"]
      }
    ]
  },

  metrics: {
    title: "Legal Operations Performance",
    items: [
      { label: "Document Review Accuracy", value: "99.9%", progressPercent: 99.9 },
      { label: "eDiscovery Cost Reduction", value: "45%", progressPercent: 75 },
      { label: "Contract Turnaround Time", value: "60% Faster", progressPercent: 80 },
      { label: "Data Security Incidents", value: "Zero", progressPercent: 100 }
    ]
  },

  cta: {
    primaryBtn: "Talk to a Legal Expert",
    secondaryBtn: "Download Legal Case Study"
  }
};
