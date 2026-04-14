import { IndustryPageData } from "@/types/industries";

export const telecomData: IndustryPageData = {
  title: "Telecommunications BPO Solutions | Claritiy",
  description: "Scale your telecom operations with high-volume billing support, technical helpdesk, and AI-powered subscriber management.",
  slug: "telecom",
  breadcrumb: "Telecommunications",

  heroData: {
    badgeIcon: "PhoneCall",
    badgeText: "Telecommunications",
    headline: "Transforming Subscriber Experience at Scale",
    subheading: "Manage massive volume and complex technical support with AI-augmented agents and specialized billing operations.",
    bullets: [
      "24/7 technical support helpdesk",
      "High-volume billing & order ops",
      "Retention & churn management",
      "Cross-selling & upselling pods"
    ],
    primaryCta: "Optimize Telecom",
    secondaryCta: "Case Studies",
    visualIcon: "Signal",
    visualList: ["Network monitoring dashboards", "Billing dispute queues", "Subscriber lifecycle maps", "Multilingual support centers"],
    certifications: [
      { id: "c1", name: "PCI DSS" },
      { id: "c2", name: "ISO 9001" },
      { id: "c3", name: "GDPR" },
      { id: "c4", name: "SOC 2" }
    ],
    clientSuccess: {
      stat1: "50M+ Subscribers supported",
      stat2: "40% Lower support cost"
    }
  },

  services: {
    title: "High-Volume Telecom Solutions",
    gridItems: [
      {
        title: "CUSTOMER CARE",
        features: ["Inquiries & Support", "Account Management", "Plan Upgrades", "Roaming Support", "Multilingual Care"]
      },
      {
        title: "TECHNICAL SUPPORT",
        features: ["Connectivity Issues", "Hardware Troubleshooting", "App Support", "Network Outages", "Provisioning assistance"]
      },
      {
        title: "BILLING & PAYMENTS",
        features: ["Invoice Queries", "Payment Processing", "Collections support", "Dispute Resolution", "Dunning management"]
      },
      {
        title: "SALES & RETENTION",
        features: ["Win-back Campaigns", "Churn Prevention", "Outbound Sales", "Loyalty Programs", "New Subscriber Onboarding"]
      },
      {
        title: "BACK OFFICE",
        features: ["Order Entry", "Activation Support", "Data Management", "Documentation", "Inventory Tracking"]
      },
      {
        title: "DIGITAL SUPPORT",
        features: ["Social Media Care", "Live Chat & Messaging", "Self-service Support", "Automated IVR Support"]
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
