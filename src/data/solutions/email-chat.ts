import { SolutionPageData } from "@/types/solutions";

export const emailChatData: SolutionPageData = {
  title: "Email & Chat Support Solutions | Claritiy",
  description: "Deliver instant, multi-lingual written support via Email, Live Chat, and Messaging apps using AI chatbots and expert hybrid agents.",
  slug: "email-chat",
  breadcrumb: "Email & Chat Support",
  heroData: {
    badgeIcon: "MessageCircle",
    badgeText: "Institutional Digital Engagement",
    headline: "Instant Resolution: Advanced Digital CX & Chat Orchestration",
    subheading: "Orchestrate thousands of concurrent institutional engagements across Email, Live Chat, and Global Messaging. We merge high-tier neural conversational models with expert digital support architecture.",
    bullets: [
      "Institutional Live Web Chat & Managed In-App Messaging",
      "Strategic Asynchronous Email Queue Orchestration",
      "Global Messaging Mesh (WhatsApp, SMS, Social DM)",
      "Advanced Neural Chatbot Pre-screening & Integration"
    ],
    primaryCta: "Architect Digital Support",
    secondaryCta: "Access Engagement Demo",
    visualIcon: "MessagesSquare",
    visualText: "Institutional Omnichannel Messaging Control Center",
    metricsOverlay: [
      { value: "Sub-15s", label: "Initial Engagement Latency" },
      { value: "Sub-1h", label: "Strategic Email TAT" },
      { value: "98.5%", label: "Verified CSAT Index" }
    ]
  },
  quickStats: [{ icon: "MessageSquare", text: "20M+ Chats Handled" }, { icon: "Clock", text: "<15s Avg Answer Time" }, { icon: "ThumbsUp", text: "98% Customer Satisfaction" }, { icon: "TrendingDown", text: "40% Deflection Rate" }],
  services: {
    title: "Institutional Digital Specialties",
    items: [
      {
        title: "Strategic Live Chat Support",
        icon: "MessageCircle",
        features: ["Institutional Pre-Sales Inquiries", "Complex Technical Troubleshooting", "LTV-Driven Cart Recovery", "Precision Account Stewardship"]
      },
      {
        title: "Enterprise Email Orchestration",
        icon: "Mail",
        features: ["Strategic Ticketing Lifecycle Management", "High-Resolution Escalation Protocols", "Institutional Billing Resolution", "Global Inquiry Management"]
      },
      {
        title: "Global Messaging & Social Mesh",
        icon: "Smartphone",
        features: ["Strategic WhatsApp Business Support", "Enterprise Social DM Management", "Institutional SMS Engagement", "Frictionless In-App Intercom Flows"]
      }
    ]
  },
  processFlow: {
    title: "Chat Routing Workflow", trigger: "Customer sends a message", routerParams: "[NLP Engine] Detects intent and urgency",
    aiPath: { title: "Chatbot Handle", subtitle: "Instant Answer", color: "#10b981" },
    humanPath: { title: "Live Agent", subtitle: "Complex Resolution", color: "#3b82f6" },
    qualityMonitor: "[QA Bot] Scans transcript for tone and accuracy",
    benefits: [{ icon: "Zap", text: "Instant acknowledgment" }, { icon: "Users", text: "Seamless human handoff" }, { icon: "BarChart", text: "Real-time CSAT tracking" }, { icon: "Shield", text: "Secure data handling" }]
  },
  features: {
    title: "Digital Support Capabilities", items: [
      { icon: "Cpu", title: "AI Augmentation", bullets: ["Smart Replies", "Auto-categorization", "Translation APIs", "Knowledge Base Sync"] },
      { icon: "Layers", title: "Concurrency", bullets: ["3-5 Chats per Agent", "High volume handling", "Queue management", "Routing rules"] },
      { icon: "Settings", title: "Platform Integration", bullets: ["Zendesk", "Intercom", "Salesforce", "Custom SDKs"] },
      { icon: "Globe", title: "Native Languages", bullets: ["50+ Dialects", "Contextual empathy", "Cultural awareness", "24/7 routing"] }
    ]
  },
  useCases: {
    title: "Success Stories", tabs: ["All", "E-Commerce", "SaaS"], items: [
      { icon: "🛒", title: "E-Commerce Holiday Spike", challenge: "Client faced 500% increase in order status queries.", solution: "Implemented WhatsApp bot for order tracking, deflecting 60% of chats.", results: "99% CSAT • Zero backlog" },
      { icon: "💻", title: "SaaS App Support", challenge: "Users needed instant guidance inside a complex software application.", solution: "Embedded an Intercom team with deep product knowledge to guide users.", results: "30% increase in product adoption" }
    ]
  },
  techStack: {
    title: "Supported Platforms", categories: [
      { title: "Chat Platforms", items: ["Intercom", "Drift", "LiveChat", "Zendesk Chat", "Olark"] },
      { title: "Email Ticketing", items: ["Zendesk", "Freshdesk", "Salesforce Service", "Kustomer", "Front"] },
      { title: "Messaging", items: ["WhatsApp Business API", "Twilio SMS", "Facebook Messenger", "WeChat"] }
    ]
  },
  pricing: {
    title: "Digital Pricing Models", models: [
      { title: "Shared Agent (Per Minute)", bestFor: "Low or highly variable chat volumes", priceValue: "From $0.90", priceUnit: "/min" },
      { title: "Dedicated Digital Pod", bestFor: "High volume concurrent chat and email", priceValue: "From $2,000", priceUnit: "/FTE/mo", isPopular: true },
      { title: "Per Ticket/Chat", bestFor: "Predictable, standardized queries", priceValue: "From $2.50", priceUnit: "/ticket" }
    ]
  },
  metrics: {
    title: "Digital KPIs", items: [
      { label: "First Response Time (Chat)", value: "14 secs", progressPercent: 95 },
      { label: "Email Turnaround Time", value: "< 1 Hour", progressPercent: 90 },
      { label: "Concurrency Rate", value: "3.2 Chats", progressPercent: 80 },
      { label: "CSAT Score", value: "98%", progressPercent: 98 }
    ]
  },
  faqs: {
    title: "Email & Chat FAQs", items: [
      { q: "How many chats can one agent handle?", a: "To ensure high quality, our trained agents handle a maximum of 3 concurrent chats for complex products, or up to 5 for simple retail queries." },
      { q: "Do you use translation software?", a: "We primarily utilize native speakers for cultural nuance, but can deploy enterprise-grade AI translation tools for rare languages or sudden unpredicted volume spikes." }
    ]
  },
  related: {
    title: "Explore Related Services", items: [
      { title: "Customer Service", link: "/solutions/customer-service" },
      { title: "Technical Support", link: "/solutions/technical-support" },
      { title: "Social Media Management", link: "/solutions/social-media" }
    ]
  },
  cta: {
    title: "Ready to Upgrade Your Digital Support?", primaryBtn: "Talk to an Expert", secondaryBtn1: "Review Chat SLAs", secondaryBtn2: "Pricing Guide"
  }
};
