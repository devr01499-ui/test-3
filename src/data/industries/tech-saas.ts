import { IndustryPageData } from "@/types/industries";

export const techSaasData: IndustryPageData = {
  title: "Technology & SaaS BPO Solutions | Claritiy",
  description: "Specialized BPO support for hyper-growth technology and SaaS companies, including technical helpdesk, RPO, and user support.",
  slug: "tech-saas",
  breadcrumb: "Technology & SaaS",

  heroData: {
    badgeIcon: "Laptop",
    badgeText: "Technology & SaaS",
    headline: "Scale Your SaaS with Specialized Support",
    subheading: "Focus on building your product while we handle complex technical support, user onboarding, and hyper-growth recruiting.",
    bullets: [
      "L1/L2 technical support engineers",
      "Seamless product onboarding",
      "SDR & appointment setting",
      "Specialized tech RPO"
    ],
    primaryCta: "Scale My Startup",
    secondaryCta: "View Portfolios",
    visualIcon: "Cpu",
    visualList: ["Developer support dashboards", "User onboarding flows", "Cloud infrastructure snapshots", "Agile team coordination"],
    certifications: [
      { id: "c1", name: "SOC 2 Type II" },
      { id: "c2", name: "ISO 27001" },
      { id: "c3", name: "GDPR" },
      { id: "c4", name: "AWS Partner" }
    ],
    clientSuccess: {
      stat1: "200+ Tech clients",
      stat2: "92% Tier 1 resolution"
    }
  },

  services: {
    title: "Support for the Modern Tech Stack",
    gridItems: [
      {
        title: "TECHNICAL SUPPORT",
        features: ["L1-L3 Troubleshooting", "API & Developer Support", "Bug Reporting & Triage", "Knowledge Base Mgmt", "Hardware Support"]
      },
      {
        title: "CUSTOMER SUCCESS",
        features: ["User Onboarding", "Account Management", "Churn Prevention", "Product Adoption", "Training & Webinars"]
      },
      {
        title: "SALES & REVENUE",
        features: ["SDR & Lead Gen", "Appointment Setting", "Inbound Closers", "Renewal Management", "Market Expansion"]
      },
      {
        title: "RECRUITING (RPO)",
        features: ["Tech Talent Sourcing", "Interview Scheduling", "Technical Screening", "Employer Branding"]
      },
      {
        title: "DIGITAL OPERATIONS",
        features: ["Content Moderation", "Data Labeling (AI)", "App Testing (QA)", "App Store Optimization"]
      },
      {
        title: "TRUST & SAFETY",
        features: ["Account Security", "Abuse Prevention", "Policy Enforcement", "Trust Audits"]
      }
    ]
  },

  compliance: {
    title: "Digital-First Security",
    cards: [
      { title: "DATA PRIVACY", bullets: ["GDPR Compliance", "CCPA/CPRA Ready", "Data Processing Agrmt", "Global Privacy Ops"] },
      { title: "INFRA SECURITY", bullets: ["ISO 27001 Certified", "Zero-Trust Access", "Encrypted Workstations", "Vulnerability Scans"] },
      { title: "SERVICE INTEGRITY", bullets: ["SOC 2 Type II Audited", "Strict SLA Adherence", "Change Management", "Uptime Monitoring"] }
    ],
    securityMeasures: [
      { id: "s1", text: "256-bit data encryption" },
      { id: "s2", text: "Multi-factor authentication (MFA)" },
      { id: "s3", text: "Secure, remote work protocols" },
      { id: "s4", text: "SOC 2 compliant facilities" },
      { id: "s5", text: "Continuous log monitoring" },
      { id: "s6", text: "Annual penetration testing" },
      { id: "s7", text: "Employee background checks" },
      { id: "s8", text: "Disaster recovery planning" }
    ]
  },

  technology: {
    title: "Integrated with the Tech Ecosystem",
    categories: [
      { title: "SUPPORT & HELPDESK", items: ["Zendesk", "Intercom", "Freshdesk", "Gorgias", "Front"] },
      { title: "CRM & SALES", items: ["Salesforce", "HubSpot", "Pipedrive", "Close.com", "Copper"] },
      { title: "COLLABORATION", items: ["Slack", "Microsoft Teams", "Notion", "Linear", "Jira"] },
      { title: "DEVELOPER TOOLS", items: ["GitHub", "GitLab", "Postman", "Datadog", "PagerDuty"] },
      { title: "RECRUITING", items: ["Greenhouse", "Lever", "Ashby", "Workable"] },
      { title: "ANALYTICS", items: ["Segment", "Mixpanel", "Amplitude", "FullStory", "Google Analytics 4"] }
    ]
  },

  segments: {
    title: "Specialized Software Support",
    tabs: ["All", "SaaS", "Fintech", "Mobile Apps", "AI/ML"],
    items: [
      {
        name: "SaaS", title: "SaaS & CLOUD PLATFORMS",
        clientsCount: "110+",
        services: ["Technical Support", "Onboarding", "Renewals"]
      },
      {
        name: "Fintech", title: "FINTECH & WEB3",
        clientsCount: "45+",
        services: ["Compliance", "Trust & Safety", "Support"]
      },
      {
        name: "Mobile Apps", title: "MOBILE & CONSUMER APPS",
        clientsCount: "70+",
        services: ["In-App Chat", "App Store Support", "Moderation"]
      },
      {
        name: "AI/ML", title: "AI & MACHINE LEARNING",
        clientsCount: "35+",
        services: ["Data Labeling", "Model Testing", "Dev Support"]
      }
    ]
  },

  metrics: {
    title: "Tech Performance Metrics",
    items: [
      { label: "First Contact Resolution", value: "85%", progressPercent: 85 },
      { label: "Onboarding Completion Rate", value: "92%", progressPercent: 92 },
      { label: "SLA Adherence on Tickets", value: "99.9%", progressPercent: 99.9 },
      { label: "Candidate Time-to-Hire", value: "14 days", progressPercent: 88 }
    ]
  },

  cta: {
    primaryBtn: "Scale Your SaaS",
    secondaryBtn: "Read Success Stories"
  }
};
