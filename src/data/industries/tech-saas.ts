import { IndustryPageData } from "@/types/industries";

export const techSaasData: IndustryPageData = {
  title: "Technology & SaaS BPO Solutions | Claritiy",
  description: "Specialized BPO support for hyper-growth technology and SaaS companies, including technical helpdesk, RPO, and user support.",
  slug: "tech-saas",
  breadcrumb: "Technology & SaaS",

  heroData: {
    badgeIcon: "Laptop",
    badgeText: "High-Growth SaaS Architecture",
    headline: "Scale Without Failure: Neural SaaS Success Orchestration",
    subheading: "Accelerate your product roadmap while we orchestrate complex technical support, user lifecycle success, and hyper-growth talent acquisition.",
    bullets: [
      "Tier 1-3 Specialized Technical Support Engineers",
      "Institutional Frictionless User Onboarding Flows",
      "Strategic SaaS Revenue & Growth Operations",
      "High-Velocity Technology RPO Architectures"
    ],
    primaryCta: "Architect Your Scale",
    secondaryCta: "Access Growth Portfolio",
    visualIcon: "Cpu",
    visualList: ["Developer Knowledge Mesh Dashboards", "Frictionless Onboarding Architectures", "Neural Cloud Resource Control", "Agile Product Lifecycle Hubs"],
    certifications: [
      { id: "c1", name: "SOC 2 Type II" },
      { id: "c2", name: "ISO 27001:2022" },
      { id: "c3", name: "GDPR Verified" },
      { id: "c4", name: "Cloud Partner Status" }
    ],
    clientSuccess: {
      stat1: "200+ High-Growth SaaS Partners",
      stat2: "92% FCR Precision Rating"
    }
  },

  services: {
    title: "Institutional Support for the Modern Tech Stack",
    gridItems: [
      {
        title: "STRATEGIC TECHNICAL SUPPORT",
        features: ["L1-L3 High-tier Troubleshooting", "API & Developer Experience Support", "Neural Bug Reporting & Triage", "Institutional Knowledge Base Orchestration", "Strategic Hardware Asset Support"]
      },
      {
        title: "NEURAL CUSTOMER SUCCESS",
        features: ["Institutional User Onboarding", "Strategic Lifecycle Account Management", "Predictive Churn Prevention Logic", "Hyper-Adoption Product Strategies", "Expert Technology Training & Webinars"]
      },
      {
        title: "STRATEGIC SALES & REVENUE",
        features: ["High-Velocity SDR & Lead Generation", "Institutional Appointment Setting", "High-Impact Inbound Closers", "Strategic Renewal Lifecycle Management", "Global Market Expansion Logic"]
      },
      {
        title: "TECHNOLOGY RECRUITING (RPO)",
        features: ["Institutional Tech Talent Sourcing", "Strategic Interview Orchestration", "Rigorous Technical Screening Hubs", "Enterprise Employer Branding Logic"]
      },
      {
        title: "DIGITAL NEURAL OPERATIONS",
        features: ["Institutional Content Moderation", "Advanced Neural Data Labeling (AI)", "High-Resolution App Testing (QA)", "Strategic App Store Optimization"]
      },
      {
        title: "INSTITUTIONAL TRUST & SAFETY",
        features: ["Zero-Trust Account Security", "Advanced Abuse Prevention Logic", "Dynamic Policy Enforcement Hubs", "Institutional Trust & Safety Audits"]
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
