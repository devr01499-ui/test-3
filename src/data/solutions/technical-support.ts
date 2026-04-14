import { SolutionPageData } from "@/types/solutions";

export const technicalSupportData: SolutionPageData = {
  title: "IT & Technical Support Solutions | Claritiy",
  description: "Enterprise-grade IT helpdesk and technical troubleshooting powered by AI and expert L1/L2/L3 engineers.",
  slug: "technical-support",
  breadcrumb: "Technical Support",
  
  heroData: {
    badgeIcon: "Laptop",
    badgeText: "Technical Support",
    headline: "Uninterrupted Uptime, Unmatched Resolution",
    subheading: "Resolve complex technical issues faster with AI-augmented diagnostic tools and certified IT engineering teams.",
    bullets: [
      "Tier 1 to Tier 3 engineering support",
      "AI-driven initial diagnostics",
      "Hardware and software troubleshooting",
      "Stringent SLA guarantees"
    ],
    primaryCta: "Optimize Your IT",
    secondaryCta: "See Tech Demo",
    visualIcon: "Server",
    visualText: "IT Helpdesk & Monitoring Dashboard",
    metricsOverlay: [
      { value: "98%", label: "First Call Res." },
      { value: "<2min", label: "Avg Wait Time" },
      { value: "99.9%", label: "Platform Uptime" }
    ]
  },

  quickStats: [
    { icon: "TerminalSquare", text: "2M+ Tickets Resolved" },
    { icon: "Wrench", text: "95% L1 Resolution" },
    { icon: "Clock", text: "24/7/365 NOC Ops" },
    { icon: "ShieldCheck", text: "SOC 2 Compliant" }
  ],

  services: {
    title: "Comprehensive IT Helpdesk Services",
    items: [
      {
        title: "L1 Support & Triage",
        icon: "Headset",
        features: ["Password Resets", "Account Provisioning", "Basic Network Issues", "Software Installation", "Device Configuration"]
      },
      {
        title: "L2 & L3 Engineering",
        icon: "Code",
        features: ["Server Management", "Database Administration", "Cloud Infrastructure (AWS/Azure)", "Bug Triage", "Security Patching"]
      },
      {
        title: "Managed IT Services",
        icon: "Network",
        features: ["Network Monitoring", "Asset Management", "MDM Deployments", "Backup & Recovery", "Vendor Management"]
      }
    ]
  },

  processFlow: {
    title: "AI & Human Technical Workflow",
    trigger: "User Submits Ticket",
    routerParams: "[AI Diagnostic Engine] Scans logs, matches known issues",
    aiPath: { title: "Automated Fix", subtitle: "Self-Healing Scripts", color: "#10b981" },
    humanPath: { title: "L2 Engineer", subtitle: "Complex Troubleshooting", color: "#3b82f6" },
    qualityMonitor: "[Knowledge Base AI] Updates documentation instantly",
    benefits: [
      { icon: "Zap", text: "40% automated resolution rate" },
      { icon: "Users", text: "Direct routing to SMEs" },
      { icon: "FileText", text: "Automated root cause analysis" },
      { icon: "TrendingDown", text: "Zero downtime scaling" }
    ]
  },

  features: {
    title: "Advanced Technical Capabilities",
    items: [
      { icon: "Cpu", title: "AIOps Driven", bullets: ["Event Correlation", "Predictive Alerts", "Auto-remediation", "Log Analysis"] },
      { icon: "MonitorSmartphone", title: "Remote Control", bullets: ["Secure Screen Sharing", "Background Diagnostics", "Unattended Access", "Command Line Tools"] },
      { icon: "Globe", title: "Global NOC", bullets: ["Follow-the-star", "Multi-lingual IT", "Geo-redundancy", "Disaster Recovery"] },
      { icon: "Lock", title: "Strict Security", bullets: ["Zero Trust Network", "ISO 27001", "HIPAA/HITECH", "Endpoint Protection"] },
      { icon: "Settings", title: "ITSM Integration", bullets: ["ServiceNow", "Jira Service Desk", "Zendesk IT", "ConnectWise"] },
      { icon: "GraduationCap", title: "Certified Staff", bullets: ["AWS Certified", "CCNA/CCNP", "CompTIA A+", "Microsoft Azure Admin"] },
      { icon: "Activity", title: "Real-time Metrics", bullets: ["MTTR Tracking", "SLA Dashboards", "Agent Utilization", "Customer CSAT"] },
      { icon: "Database", title: "Knowledge Management", bullets: ["Article Suggestions", "Decision Trees", "Wiki Maintenance", "Community Forums"] }
    ]
  },

  useCases: {
    title: "Proven IT Solutions",
    tabs: ["All", "SaaS Platforms", "Enterprise Corporate", "Hardware Manufacturers"],
    items: [
      { icon: "☁️", title: "SaaS Product Support", challenge: "Scaling technical support for a rapidly growing developer-focused API product.", solution: "Deployed a customized L2 engineering pod with deep API troubleshooting skills and Jira integration.", results: "92% FCR • 15min Avg Resolution" },
      { icon: "🏢", title: "Corporate IT Helpdesk", challenge: "Transitioning a 10,000 employee enterprise to remote work overnight.", solution: "Implemented automated password resets and an AI chatbot for VPN troubleshooting, backed by 24/7 human agents.", results: "50% ticket deflection • 99% Uptime" },
      { icon: "💻", title: "Hardware Troubleshooting", challenge: "Supporting consumer electronics troubleshooting requiring complex diagnostic paths.", solution: "Created visual AI decision trees guiding agents and customers through hardware faults step-by-step.", results: "40% fewer product returns" }
    ]
  },

  techStack: {
    title: "Enterprise ITSM Ecosystem",
    categories: [
      { title: "Diagnostic & RMM", items: ["TeamViewer Tensor", "ConnectWise Automate", "Datto RMM", "Splunk", "Datadog"] },
      { title: "ITSM Platforms", items: ["ServiceNow", "Jira Service Management", "Freshservice", "ManageEngine", "BMC Helix"] },
      { title: "Identity & Cloud", items: ["Okta", "Azure Active Directory", "AWS Identity", "Google Workspace", "Jamf Pro"] }
    ]
  },

  pricing: {
    title: "Transparent IT Pricing",
    models: [
      { title: "Per Ticket", bestFor: "Fluctuating volumes and simple L1 queries", priceValue: "From $8.00", priceUnit: "/ticket" },
      { title: "Dedicated Pod", bestFor: "Deep product integration and complex L3 engineering", priceValue: "From $3,500", priceUnit: "/engineer/mo", isPopular: true },
      { title: "Per Device", bestFor: "Corporate helpdesk and asset management", priceValue: "From $25", priceUnit: "/device/mo" },
      { title: "Staff Augmentation", bestFor: "Temporary spikes or specific expertise requirements", priceValue: "Custom", priceUnit: " hourly" }
    ]
  },

  metrics: {
    title: "Engineering Excellence",
    items: [
      { label: "First Call Resolution (FCR)", value: "92.5%", progressPercent: 92.5 },
      { label: "Mean Time To Resolve (MTTR)", value: "18 mins", progressPercent: 90 },
      { label: "L1 to L2 Escalation Rate", value: "8.2%", progressPercent: 92 },
      { label: "CSAT on Tech Issues", value: "96.4%", progressPercent: 96.4 },
      { label: "Automated Ticket Deflection", value: "34%", progressPercent: 85 },
      { label: "SLA Adherence", value: "99.9%", progressPercent: 99.9 }
    ]
  },

  faqs: {
    title: "Technical Support FAQs",
    items: [
      { q: "Do your engineers have specific certifications?", a: "Yes, we hire and train staff based on your specific requirements including AWS, Azure, Microsoft, Cisco, and CompTIA certifications." },
      { q: "How do you handle access to our secure client environments?", a: "We operate within strict Zero-Trust frameworks, typically utilizing VDI (Virtual Desktop Infrastructure), VPNs with rigid conditional access, and hardware tokens." }
    ]
  },

  related: {
    title: "Explore Related Services",
    items: [
      { title: "Customer Service", link: "/solutions/customer-service" },
      { title: "Back Office Operations", link: "/solutions/back-office" },
      { title: "Data Entry & Processing", link: "/solutions/data-entry" }
    ]
  },

  cta: {
    title: "Ready to Upgrade Your Technical Support?",
    primaryBtn: "Talk to an Architect",
    secondaryBtn1: "Review Tech Case Studies",
    secondaryBtn2: "Security Overview"
  }
};
