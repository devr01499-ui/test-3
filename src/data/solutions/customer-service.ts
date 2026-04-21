import { SolutionPageData } from "@/types/solutions";

export const customerServiceData: SolutionPageData = {
  title: "Customer Service Solutions | Claritiy",
  description: "Exceptional customer experiences with AI-powered support and human intelligence. 24/7 omnichannel coverage, over 50 languages.",
  slug: "customer-service",
  breadcrumb: "Customer Service",
  
  heroData: {
    badgeIcon: "HeadphonesIcon",
    badgeText: "Customer Experience Mastery",
    headline: "Intelligent Omnichannel Support for Global Enterprises",
    subheading: "Harmonizing advanced neural architectures with high-tier human empathy. We deliver seamless, scalable, and secure customer support that drives institutional loyalty and operational resilience.",
    bullets: [
      "24/7 Global Omnichannel Redundancy",
      "Neural + Strategic Human Hybrid Model",
      "50+ Dialects & Cultural Native Experts",
      "Real-Time Sentiment AI & Strategic QA"
    ],
    primaryCta: "Deploy CX Platform",
    secondaryCta: "Request Strategy Brief",
    visualIcon: "Activity",
    visualText: "Neural Interface & Agent Intelligence Dashboard",
    metricsOverlay: [
      { value: "99.4%", label: "Verified CSAT Score" },
      { value: "Sub-20s", label: "Avg Response Time" },
      { value: "95.8%", label: "First Contact Resolution" }
    ]
  },

  quickStats: [
    { icon: "HeadphonesIcon", text: "5M+ Monthly Contacts" },
    { icon: "MessageSquare", text: "99.2% CSAT Avg" },
    { icon: "Activity", text: "<20s Response Time" },
    { icon: "Globe2", text: "50+ Languages" }
  ],

  services: {
    title: "Precision CX Architecture",
    items: [
      {
        title: "Intelligent Inbound Excellence",
        icon: "PhoneIncoming",
        features: ["Priority Voice Orchestration", "Predictive Email Management", "Neural Chat Interaction", "Omnichannel Social Triage", "Advanced Self-Service Logic"]
      },
      {
        title: "Proactive Outbound Strategy",
        icon: "PhoneOutgoing",
        features: ["Strategic Retention Campaigns", "Deep Sentiment Surveys", "Success Follow-ups", "LTV-Driven Upsell Management", "Contextual Win-Back Efforts"]
      },
      {
        title: "Unified Omnichannel Mesh",
        icon: "Repeat",
        features: ["Frictionless Cross-Channel Handover", "Historical Context Integrity", "Integrated Voice/Chat/SMS", "Native WhatsApp & Social CRM", "High-Resolution Video Support"]
      }
    ]
  },

  processFlow: {
    title: "The Perfect Balance of AI and Human Touch",
    trigger: "Customer Contact",
    routerParams: "[AI Router] Analyzes Intent, Sentiment, Complexity",
    aiPath: { title: "AI Bot", subtitle: "Simple Queries", color: "#10b981" },
    humanPath: { title: "Human Agent", subtitle: "Complex / Emotional", color: "#d97706" },
    qualityMonitor: "[AI Quality Monitor] Real-time feedback & learning",
    benefits: [
      { icon: "Cpu", text: "70% of queries resolved by AI" },
      { icon: "Users", text: "30% escalated to skilled agents" },
      { icon: "ShieldCheck", text: "100% quality monitored" },
      { icon: "BarChart3", text: "Continuous learning & improvement" }
    ]
  },

  features: {
    title: "Enterprise-Grade Capabilities",
    items: [
      { icon: "Cpu", title: "AI-Powered Automation", bullets: ["Intelligent Chatbots", "Predictive Routing", "Sentiment Analysis", "Automated QA"] },
      { icon: "BarChart3", title: "Real-Time Analytics", bullets: ["Live KPIs", "Custom Dashboards", "Automated Reports", "Actionable Insights"] },
      { icon: "Globe", title: "Multi-Language", bullets: ["50+ Languages", "Native Speakers", "Cultural Expertise", "Real-time Translation"] },
      { icon: "ShieldCheck", title: "Security & Compliance", bullets: ["ISO 27001 Certified", "SOC 2 Type II", "GDPR Compliant", "PCI DSS Secure"] },
      { icon: "Settings", title: "Deep Integration", bullets: ["CRM Sync", "Ticketing Systems", "Knowledge Bases", "Custom API Webhooks"] },
      { icon: "Users", title: "Expert Team", bullets: ["Rigorous Training", "Industry Experts", "Low Attrition", "Dedicated Managers"] },
      { icon: "Clock", title: "24/7/365 Ops", bullets: ["Follow-the-sun", "Peak Spikes Coverage", "Holiday Support", "Zero Downtime"] },
      { icon: "Scaling", title: "Scalability", bullets: ["Flex Capacity", "Global Delivery", "Rapid Ramp-up", "Burst Management"] }
    ]
  },

  useCases: {
    title: "Proven Solutions Across Scenarios",
    tabs: ["All", "Retail & E-commerce", "SaaS & Tech", "Healthcare", "Financial Services", "Telecommunications"],
    items: [
      { icon: "🛍️", title: "E-commerce Support", challenge: "Managing massive seasonal traffic spikes and high-anxiety shipping queries without bloating headcount.", solution: "Deployed AI bots for order tracking and simple returns, with flex-staffed human empathy for escalations.", results: "99% CSAT • 40% cost reduction" },
      { icon: "💻", title: "SaaS Technical Support", challenge: "Providing complex, multi-tiered technical troubleshooting 24/7 for a global enterprise user base.", solution: "Integrated a smart knowledge base with trained L1/L2 engineers and seamless CRM issue tracking.", results: "95% FCR • 30% faster resolution" },
      { icon: "🏥", title: "Healthcare Patient Care", challenge: "Handling sensitive patient data and appointment scheduling with strict HIPAA compliance and deep empathy.", solution: "Implemented secure AI triage leading into dedicated, trained medical support receptionists.", results: "98% satisfaction • 100% compliant" }
    ]
  },

  techStack: {
    title: "Powered by Leading Technology",
    categories: [
      { title: "AI & Automation", items: ["IBM Watson", "Google Dialogflow", "Amazon Lex", "Custom NLP Models", "Sentiment Analysis Engines"] },
      { title: "Core Platforms", items: ["Salesforce Service Cloud", "Microsoft Dynamics 365", "ServiceNow", "Genesys Cloud", "Five9 Contact Center"] },
      { title: "Integrations", items: ["Zendesk", "Freshdesk", "Intercom", "HubSpot CRM", "Custom REST/GraphQL APIs"] }
    ]
  },

  pricing: {
    title: "Flexible Pricing to Match Your Needs",
    models: [
      { title: "Pay Per Contact", bestFor: "Variable volume and seasonal spikes", priceValue: "From $3.50", priceUnit: "/contact" },
      { title: "Dedicated Team", bestFor: "Predictable operations and deep brand integration", priceValue: "From $2,500", priceUnit: "/agent/mo", isPopular: true },
      { title: "Outcome Based", bestFor: "Performance focus and specific KPIs", priceValue: "Custom", priceUnit: " pricing" },
      { title: "Hybrid Model", bestFor: "Complex needs requiring mixed structures", priceValue: "Custom", priceUnit: " pricing" }
    ]
  },

  metrics: {
    title: "Our Track Record",
    items: [
      { label: "Customer Satisfaction (CSAT)", value: "99.2%", progressPercent: 99.2 },
      { label: "First Contact Resolution (FCR)", value: "95.3%", progressPercent: 95.3 },
      { label: "Average Handle Time (AHT)", value: "4:23 min", progressPercent: 85 },
      { label: "Net Promoter Score (NPS)", value: "+72", progressPercent: 90 },
      { label: "SLA Compliance Requirement", value: "99.8%", progressPercent: 99.8 },
      { label: "Avg. Cost per Contact", value: "$4.20", progressPercent: 75 }
    ]
  },

  faqs: {
    title: "Frequently Asked Questions",
    items: [
      { q: "How do you ensure quality?", a: "We utilize AI-driven 100% quality monitoring." },
      { q: "What languages do you support?", a: "We natively support over 50 languages across our global delivery centers." }
    ]
  },

  related: {
    title: "You might also be interested in:",
    items: [
      { title: "Technical Support", link: "/solutions/technical-support" },
      { title: "Email/Chat Support", link: "/solutions/email-chat" },
      { title: "Social Media Management", link: "/solutions/social-media" }
    ]
  },

  cta: {
    title: "Ready to Architect Your Next-Gen Customer Experience?",
    primaryBtn: "Request Strategic Brief",
    secondaryBtn1: "Download Institutional Blueprint",
    secondaryBtn2: "Access Demo Environment"
  }
};
