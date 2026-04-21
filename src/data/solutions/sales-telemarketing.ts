import { SolutionPageData } from "@/types/solutions";

export const salesTelemarketingData: SolutionPageData = {
  title: "Sales & Telemarketing Solutions | Claritiy",
  description: "Drive explosive revenue growth with AI-powered lead generation, appointment setting, and expert outbound sales teams.",
  slug: "sales-telemarketing",
  breadcrumb: "Sales & Telemarketing",
  
  heroData: {
    badgeIcon: "TrendingUp",
    badgeText: "High-Performance Sales Orchestration",
    headline: "Accelerate Revenue: Advanced Growth & Sales Architecture",
    subheading: "Drive exponential revenue growth by merging predictive neural dialing with high-tier human persuasion. We deliver scalable, performance-driven sales ecosystems for global enterprises.",
    bullets: [
      "Institutional B2B & B2C Growth Operations",
      "Strategic Lead Qualification Architecture",
      "Predictive Neural Dialing & Intent Mapping",
      "Performance-Augmented Revenue Share Models"
    ],
    primaryCta: "Drive Institutional Growth",
    secondaryCta: "Access Revenue Blueprint",
    visualIcon: "LineChart",
    visualText: "Institutional Sales CRM & Pipeline Control",
    metricsOverlay: [
      { value: "35%+", label: "Conversion Velocity Lift" },
      { value: "3x", label: "Pipeline Density Growth" },
      { value: "48h", label: "Global Campaign Deployment" }
    ]
  },

  quickStats: [
    { icon: "PhoneForwarded", text: "10M+ Monthly Calls" },
    { icon: "Target", text: "40% Lead Qual. Rate" },
    { icon: "DollarSign", text: "$500M+ Revenue Gen." },
    { icon: "Users", text: "3000+ Sales Reps" }
  ],

  services: {
    title: "Institutional Sales Architecture",
    items: [
      {
        title: "B2B Strategic Lead Generation",
        icon: "Briefcase",
        features: ["Account-Based Marketing Logic", "High-Resolution Cold Outreach", "Institutional List Architecture", "Market Intelligence Surveys", "Executive Follow-up Orchestration"]
      },
      {
        title: "Precision Appointment Setting",
        icon: "CalendarCheck",
        features: ["Institutional Decision Maker Access", "Frictionless Calendar Integration", "High-Resolution Qualification Frameworks", "Strategic Engagement Triggers", "Failsafe Rescheduling Protocols"]
      },
      {
        title: "Full-Cycle Revenue Operations",
        icon: "Award",
        features: ["High-Impact Inbound Closing", "Strategic Multi-Channel Telesales", "LTV-Driven Upsell Orchestration", "Institutional Contract Negotiation", "Neural Win-Back & Retention Logic"]
      }
    ]
  },

  processFlow: {
    title: "The Intelligent Sales Engine",
    trigger: "Raw Data / Lead List Imported",
    routerParams: "[AI Intent Engine] Scores leads based on behavior & demographics",
    aiPath: { title: "Automated Nurture", subtitle: "Email/SMS Sequences", color: "#6366f1" },
    humanPath: { title: "Top Closer", subtitle: "High-Intent Live Call", color: "#f59e0b" },
    qualityMonitor: "[Speech Analytics] Measures pitch compliance & sentiment",
    benefits: [
      { icon: "Target", text: "80% reduction in wasted calls" },
      { icon: "Zap", text: "Hot leads routed instantly" },
      { icon: "TrendingUp", text: "Dynamic script adjustment" },
      { icon: "BarChart", text: "Real-time pipeline visibility" }
    ]
  },

  features: {
    title: "High-Performance Sales Stack",
    items: [
      { icon: "Phone", title: "Predictive Dialers", bullets: ["Zero Dead Air", "Local Presence Dialing", "Voicemail Drop", "Answering Machine Detection"] },
      { icon: "BrainCircuit", title: "Speech Analytics", bullets: ["Sentiment Analysis", "Script Adherence", "Objection Analysis", "Automated QA"] },
      { icon: "Target", title: "Lead Scoring", bullets: ["Machine Learning Models", "Digital Body Language", "Firmographic Data", "Propensity to Buy"] },
      { icon: "ShieldCheck", title: "Compliance Strictness", bullets: ["TCPA Compliant", "DNC Scrubbing", "Call Recording Laws", "GDPR/CCPA"] },
      { icon: "Settings", title: "CRM Syncing", bullets: ["Salesforce", "Target Integration", "HubSpot", "Pipedrive"] },
      { icon: "Mic", title: "Native Speakers", bullets: ["Accent Neutralization", "Cultural Training", "Local Insights", "50+ Languages"] },
      { icon: "LineChart", title: "Custom Dashboards", bullets: ["Live Call Monitoring", "Conversion Rates", "Revenue Tracked", "Agent Leaderboards"] },
      { icon: "GraduationCap", title: "Continuous Coaching", bullets: ["Call Whispering", "Roleplay Sessions", "Rebuttal Training", "Peer Reviews"] }
    ]
  },

  useCases: {
    title: "Industry Proven Outbound Strategies",
    tabs: ["All", "Software & IT", "Financial Services", "Solar & Energy"],
    items: [
      { icon: "💻", title: "SaaS Appointment Setting", challenge: "AEs were spending 70% of their time prospecting rather than closing complex software deals.", solution: "Dedicated SDR team utilizing intent data to pre-qualify and set demo appointments directly into AE calendars.", results: "300% increase in demos • 40% higher close rate" },
      { icon: "💳", title: "Financial Product Upsell", challenge: "A major bank needed to cross-sell insurance products to existing account holders compliantly.", solution: "Deployed licensed telesales agents equipped with AI prompts analyzing customer holding data in real-time.", results: "18% conversion rate • Zero compliance breaches" },
      { icon: "☀️", title: "Solar Lead Qualification", challenge: "High volume of low-quality leads wasting closer time and increasing CPA.", solution: "Implemented strict BANT qualification frameworks via AI dialers and specialized human presales teams.", results: "50% reduction in CPA • 90% show rate" }
    ]
  },

  techStack: {
    title: "Optimized Outbound Architecture",
    categories: [
      { title: "Dialers & Telephony", items: ["Five9", "NICE CXone", "Dialpad", "RingCentral", "ViciDial"] },
      { title: "CRM & Pipeline", items: ["Salesforce Sales Cloud", "HubSpot Sales Hub", "Pipedrive", "Close.com", "Zoho CRM"] },
      { title: "Data & Intent", items: ["ZoomInfo", "Apollo.io", "Cognism", "Clearbit", "LinkedIn Sales Navigator"] }
    ]
  },

  pricing: {
    title: "Results-Oriented Pricing",
    models: [
      { title: "Dedicated SDRs", bestFor: "B2B companies needing consistent pipeline generation", priceValue: "From $2,800", priceUnit: "/rep/mo", isPopular: true },
      { title: "Pay Per Appointment", bestFor: "Strict CPA requirements and proven funnels", priceValue: "Custom", priceUnit: " per meeting" },
      { title: "Revenue Share", bestFor: "Full-cycle sales partnerships with shared risk", priceValue: "10-30%", priceUnit: " of closed won" },
      { title: "Blended Hourly + Bonus", bestFor: "Complex sales cycles needing baseline operational coverage", priceValue: "Custom", priceUnit: " structure" }
    ]
  },

  metrics: {
    title: "Sales Velocity Indicators",
    items: [
      { label: "Lead to Demo Conversion", value: "34%", progressPercent: 85 },
      { label: "Attempt to Contact Rate", value: "42%", progressPercent: 80 },
      { label: "Meeting Show Rate", value: "88%", progressPercent: 88 },
      { label: "QA Script Adherence", value: "98.5%", progressPercent: 98.5 },
      { label: "Agent Utilization", value: "85%", progressPercent: 85 },
      { label: "Target Quota Attainment", value: "112%", progressPercent: 95 }
    ]
  },

  faqs: {
    title: "Sales & Telemarketing FAQs",
    items: [
      { q: "How do you avoid the 'telemarketer' sound?", a: "We hire strictly for conversational intelligence and utilize framework-based approaches (like Challenger or SPIN) rather than rigidly reading verbatim scripts." },
      { q: "Do you provide the lead lists?", a: "We can operate seamlessly with your provided CRM data, or our Data Generation team can utilize our premium intent data tools to build highly targeted lists for your campaigns." }
    ]
  },

  related: {
    title: "Explore Related Services",
    items: [
      { title: "Customer Service", link: "/solutions/customer-service" },
      { title: "Order Processing", link: "/solutions/order-processing" },
      { title: "Back Office Operations", link: "/solutions/back-office" }
    ]
  },

  cta: {
    title: "Ready to Supercharge Your Institutional Pipeline?",
    primaryBtn: "Talk to a Revenue Architect",
    secondaryBtn1: "Review Growth Case Studies",
    secondaryBtn2: "Pricing Structure Overview"
  }
};
