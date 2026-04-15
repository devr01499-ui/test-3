import { IndustryPageData } from "@/types/industries";

export const mediaEntertainmentData: IndustryPageData = {
  title: "Media & Entertainment BPO Solutions | Claritiy",
  description: "Content moderation, subscription management, and fan support for streaming platforms, publishers, and entertainment giants.",
  slug: "media-entertainment",
  breadcrumb: "Media & Entertainment",

  heroData: {
    badgeIcon: "Clapperboard",
    badgeText: "Media & Entertainment",
    headline: "Power Your Content & Fan Operations",
    subheading: "From content moderation to subscriber retention, we support media brands in delivering exceptional audience experiences at scale.",
    bullets: [
      "AI-assisted content moderation at scale",
      "Subscriber acquisition & retention",
      "Multilingual fan support 24/7",
      "Royalty & rights management support"
    ],
    primaryCta: "Scale Media Operations",
    secondaryCta: "View Media Brief",
    visualIcon: "Clapperboard",
    visualList: ["Content moderation dashboards", "Subscriber management screens", "Fan community platforms", "Streaming analytics panels"],
    certifications: [
      { id: "c1", name: "ISO 27001" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "GDPR" },
      { id: "c4", name: "COPPA" }
    ],
    clientSuccess: {
      stat1: "75+ Media & streaming clients",
      stat2: "99.2% Content accuracy rate"
    }
  },

  services: {
    title: "Complete Media & Entertainment BPO",
    gridItems: [
      {
        title: "CONTENT MODERATION",
        features: ["UGC Moderation", "Video & Image Review", "Community Guidelines Enforcement", "Hate Speech Detection", "Appeals Handling"]
      },
      {
        title: "SUBSCRIBER SERVICES",
        features: ["Acquisition Support", "Billing Inquiries", "Plan Upgrades", "Churn Prevention", "Win-back Campaigns"]
      },
      {
        title: "FAN & AUDIENCE SUPPORT",
        features: ["Live Event Support", "Social Media Response", "Multilingual Help", "Ticketing Inquiries", "VIP Fan Relations"]
      },
      {
        title: "RIGHTS & ROYALTIES",
        features: ["Rights Clearance Support", "Royalty Statements", "Licensing Admin", "ISRC/ISWC Processing", "Dispute Handling"]
      },
      {
        title: "DIGITAL OPERATIONS",
        features: ["Metadata Management", "Content Tagging", "Subtitle QC", "Localization Support", "Digital Asset Mgmt"]
      },
      {
        title: "ANALYTICS & INSIGHTS",
        features: ["Audience Analytics", "Churn Modeling", "Content Performance", "Social Listening", "A/B Test Support"]
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
