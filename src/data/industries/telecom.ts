import { IndustryPageData } from "@/types/industries";

export const telecomData: IndustryPageData = {
  title: "Telecommunications BPO Solutions | Claritiy",
  description: "Scale your telecom operations with high-volume billing support, technical helpdesk, and AI-powered subscriber management.",
  slug: "telecom",
  breadcrumb: "Telecommunications",

  heroData: {
    badgeIcon: "PhoneCall",
    badgeText: "Institutional Telecom Mastery",
    headline: "Telecom Integrity: Advanced Network & Subscriber Orchestration",
    subheading: "Manage massive scale and complex technical support with institutional-grade operations. We deliver mission-critical billing, connectivity, and subscriber lifecycle excellence.",
    bullets: [
      "24/7/365 Mission-Critical Technical Support & Network Hubs",
      "Institutional High-Volume Billing & Verified Order Orchestration",
      "Strategic Retention & Neural Churn Eradication Architectures",
      "Institutional Cross-Selling Mesh & Growth Orchestration Pods"
    ],
    primaryCta: "Architect Telecom Ops",
    secondaryCta: "Access Telecom Brief",
    visualIcon: "Signal",
    visualList: ["Institutional Network Monitoring Centers", "Neural Billing Dispute Integrity Hubs", "Global Subscriber Lifecycle Control", "Mission-Critical Multilingual Care Hubs"],
    certifications: [
      { id: "c1", name: "PCI DSS v4.0" },
      { id: "c2", name: "ISO 9001:2015 QMS" },
      { id: "c3", name: "GDPR Verified" },
      { id: "c4", name: "SOC 2 Type II" }
    ],
    clientSuccess: {
      stat1: "50M+ Institutional Subscribers",
      stat2: "40% Operational Latency Compression"
    }
  },

  services: {
    title: "High-Volume Institutional Telecom Solutions",
    gridItems: [
      {
        title: "STRATEGIC CUSTOMER CARE",
        features: ["Institutional Inquiries & Support", "Neural Account Lifecycle Management", "Strategic Plan Upgrade Orchestration", "Global Roaming Integrity Support", "Native Multilingual Engagement"]
      },
      {
        title: "MISSION-CRITICAL TECH SUPPORT",
        features: ["Neural Connectivity Resolution", "Institutional Hardware Troubleshooting", "Strategic App Ecosystem Support", "Global Network Outage Management", "Verified Provisioning Assistance"]
      },
      {
        title: "PRECISION BILLING & PAYMENTS",
        features: ["Institutional Invoice Adjudication", "Secure Payment Processing Mesh", "Verified Collections Stewardship", "Neural Dispute Resolution Hubs", "Institutional Dunning Management"]
      },
      {
        title: "STRATEGIC SALES & RETENTION",
        features: ["Institutional Win-back Architectures", "Neural Churn Eradication", "Strategic Outbound Growth Ops", "Global Loyalty Mesh Management", "Institutional Onboarding Orchestration"]
      },
      {
        title: "REGULATORY BACK OFFICE",
        features: ["Institutional Order Entry Flow", "Neural Activation Support Hubs", "Precision Master Data Management", "Regulatory Documentation Stewardship", "Institutional Inventory Tracking"]
      },
      {
        title: "NEURAL DIGITAL ENGAGEMENT",
        features: ["Institutional Social Mesh Care", "High-Resolution Live Chat Hubs", "Strategic Self-service Architectures", "Neural IVR Orchestration Support"]
      }
    ]
  },

  compliance: {
    title: "Telecom Standard Compliance",
    cards: [
      { title: "DATA PRIVACY", bullets: ["GDPR/CCPA Compliance", "CPNI Protection", "PII Security", "Global Regulations"] },
      { title: "SERVICE QUALITY", bullets: ["ISO 9001 Standards", "Strict SLA Audits", "NPS Tracking", "Performance Reviews"] },
      { title: "PAYMENT SECURITY", bullets: ["PCI DSS Certified", "Secure Gateways", "Tokenization", "Fraud Auditing"] }
    ],
    securityMeasures: [
      { id: "s1", text: "End-to-end data encryption" },
      { id: "s2", text: "Biometric & MFA access" },
      { id: "s3", text: "Physical security of facilities" },
      { id: "s4", text: "Network segmentation" },
      { id: "s5", text: "Regular security audits" },
      { id: "s6", text: "Secure remote management" },
      { id: "s7", text: "Employee compliance training" },
      { id: "s8", text: "Business continuity planning" }
    ]
  },

  technology: {
    title: "Telecom Platform Integrations",
    categories: [
      { title: "CRM & BILLING", items: ["Amdocs", "Oracle Communications", "Salesforce for Telecom", "Netcracker", "Microsoft Dynamics"] },
      { title: "TECHNICAL SUPPORT", items: ["Zendesk", "ServiceNow", "Genesys Cloud", "NICE CXone", "Five9"] },
      { title: "ANALYTICS & MONITORING", items: ["Splunk", "Datadog", "Tableau", "Power BI", "Custom Network Dashboards"] },
      { title: "MESSAGING & CHAT", items: ["WhatsApp Business", "LivePerson", "Intercom", "Twilio", "Infobip"] },
      { title: "MARKETING & SALES", items: ["HubSpot", "Eloqua", "Marketo", "Braze", "Insider"] },
      { title: "WORKFORCE", items: ["Verint", "NICE WFM", "Alia", " Calabrio", "Zoom WFM"] }
    ]
  },

  segments: {
    title: "Expertise Across Telecom",
    tabs: ["All", "Mobile Ops", "Broadband", "B2B Telecom", "Satellite"],
    items: [
      {
        name: "Mobile Ops", title: "MOBILE NETWORK OPERATORS",
        clientsCount: "12+",
        services: ["Sub Support", "Tech Help", "Plan Sales"]
      },
      {
        name: "Broadband", title: "BROADBAND & ISP",
        clientsCount: "25+",
        services: ["Connectivity Tech", "Installs Support", "Billing"]
      },
      {
        name: "B2B Telecom", title: "B2B & ENTERPRISE TELCO",
        clientsCount: "15+",
        services: ["Account Management", "SLA Support", "Solutioning"]
      },
      {
        name: "Satellite", title: "SATELLITE & NEW TECH",
        clientsCount: "8+",
        services: ["Activation Help", "Global Technical Care", "Hardware"]
      }
    ]
  },

  metrics: {
    title: "Telecom Operational Metrics",
    items: [
      { label: "First Contact Resolution", value: "82%", progressPercent: 82 },
      { label: "Average Handle Time", value: "320 secs", progressPercent: 88 },
      { label: "Net Promoter Score (NPS)", value: "72", progressPercent: 90 },
      { label: "Churn Reduction Rate", value: "15%", progressPercent: 85 }
    ]
  },

  cta: {
    primaryBtn: "Talk to a Telecom Expert",
    secondaryBtn: "Download Telecom Success Story"
  }
};
