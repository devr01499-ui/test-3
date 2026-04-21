import { SolutionPageData } from "@/types/solutions";

export const contentModerationData: SolutionPageData = {
  title: "Trust & Safety Content Moderation | Claritiy",
  description: "Protect your brand and users with 24/7 AI-augmented content moderation. We review text, images, and video to ensure online safety.",
  slug: "content-moderation",
  breadcrumb: "Content Moderation",
  
  heroData: {
    badgeIcon: "ShieldAlert",
    badgeText: "Institutional Trust & Safety",
    headline: "Protect Your Institution: Advanced Integrity Architecture",
    subheading: "Secure your platforms and protect institutional brand equity with 24/7 AI-augmented content moderation. We merge neural vision with high-tier human nuance to ensure online safety and community resilience.",
    bullets: [
      "Multi-Modal Image, Video, & Neural Text Review",
      "Real-Time Institutional Live Stream Monitoring",
      "Advanced Psychological Resilience Programs",
      "Global 24/7/365 Coverage in 50+ Dialects"
    ],
    primaryCta: "Secure Your Ecosystem",
    secondaryCta: "Institutional Safety Review",
    visualIcon: "Eye",
    visualText: "Institutional Integrity & Moderation Control",
    metricsOverlay: [
      { value: "99.9%", label: "Moderation Precision" },
      { value: "Sub-60s", label: "Engagement Latency" },
      { value: "24/7/365", label: "Active Resilience" }
    ]
  },

  quickStats: [
    { icon: "Eye", text: "2B+ Items Reviewed" },
    { icon: "Clock", text: "<60s Live Turnaround" },
    { icon: "Shield", text: "Zero Brand Escalations" },
    { icon: "HeartPulse", text: "100% Agent Wellness Assured" }
  ],

  services: {
    title: "Institutional Safety Frameworks",
    items: [
      {
        title: "Neural Media Orchestration",
        icon: "Image",
        features: ["Neuro-Vision NSFW Screening", "Frame-By-Frame Integrity Analysis", "Mission-Critical Live Monitoring", "Institutional Deepfake Detection", "Intellectual Property Protection"]
      },
      {
        title: "Linguistic & Contextual Integrity",
        icon: "MessageSquareAlert",
        features: ["Institutional Anti-Toxicity Protocols", "Neural Spam & Bot Eradication", "Deep Sentiment Architecture", "Advanced Profanity Orchestration", "Institutional Audio/Podcast Review"]
      },
      {
        title: "Holistic Trust & Safety (T&S)",
        icon: "UserX",
        features: ["Zero-Trust Fraud Prevention", "Institutional Account Stewardship", "Neural Appeals Orchestration", "Dynamic Policy Enforcement", "Critical Threat Escalation Logic"]
      }
    ]
  },

  processFlow: {
    title: "Hybrid Moderation Engine",
    trigger: "User Uploads Content (UGC)",
    routerParams: "[AI Vision & NLP Classifier] Scans instantly for known severe violations",
    aiPath: { title: "Auto-Action", subtitle: "Block or Approve", color: "#10b981" },
    humanPath: { title: "Human Review", subtitle: "Nuanced Context", color: "#f59e0b" },
    qualityMonitor: "[Senior QA Team] Audits human decisions against policy guidelines",
    benefits: [
      { icon: "Cpu", text: "80% handled by zero-touch AI" },
      { icon: "Eye", text: "Complex cultural nuances caught" },
      { icon: "TrendingDown", text: "Massive reduction in toxic UGC" },
      { icon: "ShieldCheck", text: "Platform remains legally compliant" }
    ]
  },

  features: {
    title: "Trust & Safety Excellence",
    items: [
      { icon: "Cpu", title: "AI Pre-screening", bullets: ["Hash Matching", "Perceptual Hashing", "Optical Character Recognition", "NLP Sentiment"] },
      { icon: "Globe", title: "Cultural Context", bullets: ["In-country Natives", "Slang & Dialect Experts", "Regional Policy Variation", "50+ Languages"] },
      { icon: "Heart", title: "Moderator Wellness", bullets: ["On-site Psychologists", "Mandated Screen Breaks", "Blurring Technology", "Resilience Training"] },
      { icon: "Clock", title: "Sub-Minute SLAs", bullets: ["Real-time queues", "Traffic spike handling", "Live broadcast support", "Follow-the-sun models"] },
      { icon: "Lock", title: "Data Privacy", bullets: ["Clean Room Facilities", "No mobile phones allowed", "Encrypted transmission", "GDPR/CCPA compliant"] },
      { icon: "FileText", title: "Policy Development", bullets: ["Guideline drafting", "Edge-case logging", "Legal compliance", "Continuous updates"] },
      { icon: "Activity", title: "Trend Reporting", bullets: ["Threat vector analysis", "Coordinated attack detection", "Spam ring identification", "Weekly briefings"] },
      { icon: "Network", title: "API Integration", bullets: ["RESTful endpoints", "WebHook callbacks", "Direct CMS injection", "Platform agnostic"] }
    ]
  },

  useCases: {
    title: "Protecting Industry Giants",
    tabs: ["All", "Social Media", "Marketplaces", "Gaming"],
    items: [
      { icon: "📱", title: "Social Media Hate Speech", challenge: "A rapidly growing social app was overwhelmed by toxic comments and political hate speech requiring nuanced cultural understanding.", solution: "Deployed a team of 400 native speakers across 8 languages, augmented with an NLP sentiment classifier.", results: "99% toxic content blocked • <5 min response" },
      { icon: "🛒", title: "Marketplace Fraud Prevention", challenge: "Peer-to-peer marketplace facing severe losses due to counterfeit products and scam listings.", solution: "Integrated image hashing AI paired with specialized human fraud-detectives analyzing seller velocity and metadata.", results: "Fraud reduced by 85% • Safe buying restored" },
      { icon: "🎮", title: "Live Gaming Toxicity", challenge: "Esports tournament required real-time moderation of live streams and associated chat rooms to retain sponsors.", solution: "Utilized live audio-transcription bots passing flagged phrases directly to real-time human operators.", results: "Zero sponsor escalations • Clean broadcast" }
    ]
  },

  techStack: {
    title: "Moderation Ecosystem Integrations",
    categories: [
      { title: "AI Classifiers", items: ["Google Cloud Vision API", "AWS Rekognition", "Microsoft Content Moderator", "Hive Moderation", "Clarifai"] },
      { title: "Text & Audio", items: ["OpenAI Moderation API", "Perspective API", "CleanSpeak", "Transcribe", "Sift"] },
      { title: "Workflow Tools", items: ["Teleperformance Trust", "TaskUs Systems", "Zendesk", "Custom Webhooks", "Internal CMS"] }
    ]
  },

  pricing: {
    title: "Scaleable Moderation Pricing",
    models: [
      { title: "Per Action/Item", bestFor: "Fluctuating volumes of static images or text", priceValue: "Fractions", priceUnit: " of a cent" },
      { title: "Dedicated Trust Pods", bestFor: "Complex policy enforcement requiring nuance", priceValue: "From $2,000", priceUnit: "/FTE/mo", isPopular: true },
      { title: "Live Stream Hourly", bestFor: "Broadcasting, esports, and live events", priceValue: "From $25", priceUnit: "/hour" },
      { title: "Enterprise T&S", bestFor: "Full platform safety management + wellness", priceValue: "Custom", priceUnit: " pricing" }
    ]
  },

  metrics: {
    title: "Trust & Safety Benchmarks",
    items: [
      { label: "Overall Moderation Accuracy", value: "99.8%", progressPercent: 99.8 },
      { label: "AI Pre-screening Deflection", value: "82%", progressPercent: 82 },
      { label: "Live Queue TAT (Turnaround)", value: "<60 secs", progressPercent: 95 },
      { label: "False Positive Rate", value: "<1.5%", progressPercent: 98 },
      { label: "Agent Retention Rate (Wellness)", value: "85%", progressPercent: 85 },
      { label: "SLA Adherence (24/7)", value: "99.9%", progressPercent: 99.9 }
    ]
  },

  faqs: {
    title: "Content Moderation FAQs",
    items: [
      { q: "How do you protect the mental health of your moderators?", a: "Agent wellness is our highest priority. We implement mandatory psychological counseling, strict shift limitations, AI blurring of severe content (so humans only see outlines), and resilience training programs." },
      { q: "Can you handle nuances like sarcasm or political satire?", a: "Yes. While AI handles blatant violations (like explicit nudity), humans are essential for context. We hire in-country native speakers who intimately understand local slang, politics, and cultural satire to prevent false positives." }
    ]
  },

  related: {
    title: "Explore Related Services",
    items: [
      { title: "Data Entry & Processing", link: "/solutions/data-entry" },
      { title: "Customer Service", link: "/solutions/customer-service" },
      { title: "Email/Chat Support", link: "/solutions/email-chat" }
    ]
  },

  cta: {
    title: "Ready to Architect Your Community Integrity?",
    primaryBtn: "Talk to a T&S Architect",
    secondaryBtn1: "Review Resilience Policies",
    secondaryBtn2: "Institutional Tech Demo"
  }
};
