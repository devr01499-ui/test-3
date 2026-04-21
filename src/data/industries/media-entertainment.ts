import { IndustryPageData } from "@/types/industries";

export const mediaEntertainmentData: IndustryPageData = {
  title: "Media & Entertainment BPO Solutions | Claritiy",
  description: "Content moderation, subscription management, and fan support for streaming platforms, publishers, and entertainment giants.",
  slug: "media-entertainment",
  breadcrumb: "Media & Entertainment",

  heroData: {
    badgeIcon: "Clapperboard",
    badgeText: "Global Media Integrity Hub",
    headline: "Media Excellence: Advanced Audience & Content Orchestration",
    subheading: "Orchestrate complex media ecoystems and enhance fan engagement with institutional-grade content moderation and mission-critical subscriber retention services.",
    bullets: [
      "Institutional-Grade Neural Content Moderation at Scale",
      "Strategic Subscriber Acquisition & Retention Lifecycle",
      "24/7/365 Native Multilingual Fan Engagement Hubs",
      "Institutional Royalty & IP Rights Integrity Support"
    ],
    primaryCta: "Architect Media Ops",
    secondaryCta: "Access Media Brief",
    visualIcon: "Clapperboard",
    visualList: ["Institutional Content Integrity Hubs", "Neural Subscriber Lifecycle Control", "Global Fan Community Resilience", "Streaming Performance Integrity Panels"],
    certifications: [
      { id: "c1", name: "ISO 27001:2022" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "GDPR Verified" },
      { id: "c4", name: "COPPA Standards Compliant" }
    ],
    clientSuccess: {
      stat1: "75+ Institutional Media Partners",
      stat2: "99.9% Content Integrity Index"
    }
  },

  services: {
    title: "Complete Institutional Media & Entertainment BPO",
    gridItems: [
      {
        title: "NEURAL CONTENT INTEGRITY",
        features: ["Institutional UGC Moderation", "High-Resolution Video/Image Review", "Strategic Guidelines Orchestration", "Neural Hate Speech Detection", "Verified Appeals Stewardship"]
      },
      {
        title: "STRATEGIC SUBSCRIBER CARE",
        features: ["Institutional Acquisition Support", "Verified Billing Integrity", "Strategic Plan Orchestration", "Neural Churn Eradication", "Institutional Win-back Campaigns"]
      },
      {
        title: "GLOBAL FAN STEWARDSHIP",
        features: ["Mission-Critical Live Event Support", "Strategic Social Mesh Response", "Native Multilingual Engagement", "Verified Ticketing Integrity", "VIP Fan Ecosystem Relations"]
      },
      {
        title: "RIGHTS & IP INTEGRITY",
        features: ["Institutional Rights Clearance", "Verified Royalty Stewardship", "Strategic Licensing Admin", "Neural ISRC/ISWC Processing", "Institutional Dispute Adjudication"]
      },
      {
        title: "NEURAL DIGITAL OPS",
        features: ["Institutional Metadata Stewardship", "Advanced Content Tagging Labs", "High-Resolution Subtitle QC", "Global Localization Support", "Institutional Digital Asset Hubs"]
      },
      {
        title: "MEDIA ANALYTICS & BI",
        features: ["Institutional Audience Intelligence", "Neural Churn Architectures", "Strategic Content Performance", "Global Social Listening Mesh", "Institutional A/B Logic Support"]
      }
    ]
  },

  compliance: {
    title: "Trust & Safety at Scale",
    cards: [
      { title: "CONTENT SAFETY", bullets: ["CSAM Protocols", "DSA/DMCA Compliance", "Community Guidelines", "Escalation Workflows"] },
      { title: "DATA PRIVACY", bullets: ["GDPR Compliant", "COPPA for Minors", "Data Minimization", "User Consent Mgmt"] },
      { title: "OPS SECURITY", bullets: ["Agent Wellness Programs", "Psychological Support", "Content Exposure Limits", "Secure Environments"] }
    ],
    securityMeasures: [
      { id: "s1", text: "CSAM detection and mandatory reporting protocols" },
      { id: "s2", text: "GDPR and COPPA compliant data handling" },
      { id: "s3", text: "Psychologically safe moderation environments" },
      { id: "s4", text: "Multi-factor authentication for content platforms" },
      { id: "s5", text: "AI + human moderation hybrid workflows" },
      { id: "s6", text: "Encrypted subscriber and personal data storage" },
      { id: "s7", text: "DMCA compliance and takedown procedures" },
      { id: "s8", text: "Secure digital asset management protocols" }
    ]
  },

  technology: {
    title: "Integrated with Leading Media Platforms",
    categories: [
      { title: "STREAMING PLATFORMS", items: ["Brightcove", "JW Player", "Kaltura", "Vimeo OTT", "Muvi"] },
      { title: "CMS SYSTEMS", items: ["WordPress VIP", "Contentful", "Adobe Experience Manager", "Drupal", "Sitecore"] },
      { title: "MODERATION TOOLS", items: ["Two Hat", "Jigsaw Perspective API", "Hive Moderation", "Besedo", "ActiveFence"] },
      { title: "CRM & SUPPORT", items: ["Zendesk", "Salesforce", "Freshdesk", "Intercom", "Sprinklr"] },
      { title: "ROYALTIES & RIGHTS", items: ["Counterpoint Royalty", "RoyaltyShare", "Synchtank", "Music Reports", "Songspace"] },
      { title: "ANALYTICS", items: ["Amplitude", "Mixpanel", "Tableau", "Power BI", "Conviva"] }
    ]
  },

  segments: {
    title: "Expertise Across Media Verticals",
    tabs: ["All", "Streaming", "Publishing", "Music", "Live Events"],
    items: [
      {
        name: "Streaming", title: "STREAMING & OTT PLATFORMS",
        clientsCount: "30+",
        services: ["Subscriber Care", "Content Moderation", "Churn Prevention", "Metadata Ops"]
      },
      {
        name: "Publishing", title: "DIGITAL PUBLISHERS",
        clientsCount: "20+",
        services: ["Editorial Support", "Audience Services", "Ad Ops Support", "Subscriber Mgmt"]
      },
      {
        name: "Music", title: "MUSIC LABELS & DISTRIBUTORS",
        clientsCount: "15+",
        services: ["Royalty Processing", "Fan Support", "Rights Clearance", "Distribution Ops"]
      },
      {
        name: "Live Events", title: "LIVE EVENTS & TICKETING",
        clientsCount: "10+",
        services: ["Ticket Support", "Artist Relations", "Event Ops", "VIP Concierge"]
      }
    ]
  },

  metrics: {
    title: "Media Operations Performance",
    items: [
      { label: "Content Moderation Accuracy", value: "99.2%", progressPercent: 99.2 },
      { label: "Subscriber CSAT Score", value: "93%", progressPercent: 93 },
      { label: "Churn Rate Reduction", value: "25%", progressPercent: 60 },
      { label: "Content Processing Speed", value: "3x Faster", progressPercent: 82 }
    ]
  },

  cta: {
    primaryBtn: "Talk to a Media Expert",
    secondaryBtn: "Download Media Case Study"
  }
};
