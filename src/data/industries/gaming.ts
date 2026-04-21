import { IndustryPageData } from "@/types/industries";

export const gamingData: IndustryPageData = {
  title: "Gaming & iGaming BPO Solutions | Claritiy",
  description: "Trust & Safety, community management, player support, and compliance operations for gaming platforms and iGaming operators.",
  slug: "gaming",
  breadcrumb: "Gaming & iGaming",

  heroData: {
    badgeIcon: "Gamepad2",
    badgeText: "Global Gaming Integrity Hub",
    headline: "Level Up: Advanced Player Ecosystems & Community Orchestration",
    subheading: "Deliver high-resolution player experiences and orchestrate safe, compliant gaming environments. We merge high-tier human empathy with neural community moderation.",
    bullets: [
      "24/7/365 Native Multilingual Player Engagement Hubs",
      "Institutional Trust & Safety & Neural Content Integrity",
      "Strategic iGaming Compliance & Responsible Play Ops",
      "Global Community Stewardship & Discord Orchestration"
    ],
    primaryCta: "Architect Player CX",
    secondaryCta: "Access Gaming Brief",
    visualIcon: "Gamepad2",
    visualList: ["Institutional Player Engagement Hubs", "Neural Community Integrity Controllers", "High-Resolution T&S Review Mesh", "iGaming Regulatory Compliance Dashboards"],
    certifications: [
      { id: "c1", name: "ISO 27001:2022" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "GamCare Institutional" },
      { id: "c4", name: "MGA/UKGC Regulatory Mastery" }
    ],
    clientSuccess: {
      stat1: "60+ Global Gaming Partners",
      stat2: "4.8/5 Institutional CSAT Index"
    }
  },

  services: {
    title: "Full-Spectrum Institutional Gaming BPO",
    gridItems: [
      {
        title: "STRATEGIC PLAYER SUPPORT",
        features: ["24/7 Mission-Critical In-Game Support", "Institutional Account Recovery Labs", "Hyper-Resolution Tech Support", "Verified Billing Integrity", "VIP Tier-1 Player Stewardship"]
      },
      {
        title: "INSTITUTIONAL TRUST & SAFETY",
        features: ["Neural Content Integrity Hubs", "Advanced Anti-Cheat Orchestration", "Zero-Tolerance Harassment Detection", "Verified Appeals Stewardship", "Strategic Account Sanction Logic"]
      },
      {
        title: "COMMUNITY ORCHESTRATION",
        features: ["Strategic Forum Stewardship", "Neural Discord & Social Mesh Mgmt", "Global Event Logistics Support", "Neural Bug Triage Pipelines", "Institutional Creator Ecosystems"]
      },
      {
        title: "iGAMING REGULATORY OPS",
        features: ["Institutional KYC & Age Integrity", "Strategic Responsible Play Hubs", "Neural Self-Exclusion Logic", "Global AML Integrity Monitoring", "Regulatory Reporting Orchestration"]
      },
      {
        title: "FRAUD & REVENUE INTEGRITY",
        features: ["Neural Payment Fraud Eradication", "Strategic Chargeback Adjudication", "Institutional Bonus Abuse Defense", "Deep Multi-Account Detection", "Neural Behavioral Risk Scoring"]
      },
      {
        title: "GLOBAL GAME LIVE STANDARDS",
        features: ["Mission-Critical Live Ops Support", "Institutional Tournament Orchestration", "Native Localization QA Mesh", "Strategic Beta Resource Support", "Institutional UAT Coordination"]
      }
    ]
  },

  compliance: {
    title: "Safe & Compliant Gaming Operations",
    cards: [
      { title: "RESPONSIBLE GAMBLING", bullets: ["GamCare Standards", "Self-Exclusion Mgmt", "Spend Limits Enforcement", "Player Health Monitoring"] },
      { title: "REGULATORY COMPLIANCE", bullets: ["MGA, UKGC Aligned", "AML/KYC Protocols", "Age Verification", "Jurisdiction Restrictions"] },
      { title: "TRUST & SAFETY", bullets: ["CSAM Protocols", "Content Safety", "Harassment Policies", "Platform Integrity"] }
    ],
    securityMeasures: [
      { id: "s1", text: "GamCare and responsible gambling protocols" },
      { id: "s2", text: "MGA and UKGC regulatory compliance alignment" },
      { id: "s3", text: "AES-256 encrypted player account data" },
      { id: "s4", text: "CSAM detection and mandatory reporting" },
      { id: "s5", text: "Multi-factor authentication for all player platforms" },
      { id: "s6", text: "Real-time AML transaction monitoring" },
      { id: "s7", text: "Self-exclusion registry integration (GAMSTOP etc.)" },
      { id: "s8", text: "Psychologically safe environments for T&S agents" }
    ]
  },

  technology: {
    title: "Integrated with Leading Gaming Platforms",
    categories: [
      { title: "GAME PLATFORMS", items: ["Steam", "Epic Games Store", "Unity Services", "Xbox Partner Center", "PlayStation Partner"] },
      { title: "iGAMING PLATFORMS", items: ["Kambi", "Sportech", "SBTech", "EveryMatrix", "Playtech"] },
      { title: "MODERATION TOOLS", items: ["ActiveFence", "Two Hat", "Jigsaw Perspective", "Hive Moderation", "Spectrum Labs"] },
      { title: "COMMUNITY", items: ["Discord", "Reddit", "Discourse", "Khoros", "Vanilla Forums"] },
      { title: "COMPLIANCE & KYC", items: ["Jumio", "Onfido", "GBG", "Sumsub", "Trulioo"] },
      { title: "ANALYTICS", items: ["GameAnalytics", "Amplitude", "Mixpanel", "Tableau", "Power BI"] }
    ]
  },

  segments: {
    title: "Expertise Across Gaming Verticals",
    tabs: ["All", "PC/Console", "Mobile", "iGaming", "Esports"],
    items: [
      {
        name: "PC/Console", title: "PC & CONSOLE GAMING",
        clientsCount: "20+",
        services: ["Player Support", "T&S Moderation", "Community Mgmt", "Technical Help Desk"]
      },
      {
        name: "Mobile", title: "MOBILE GAMING STUDIOS",
        clientsCount: "20+",
        services: ["In-App Support", "Payment Disputes", "Fraud Detection", "Community Ops"]
      },
      {
        name: "iGaming", title: "iGAMING & ONLINE CASINOS",
        clientsCount: "15+",
        services: ["KYC Onboarding", "Responsible Gambling", "AML Ops", "Player Care"]
      },
      {
        name: "Esports", title: "ESPORTS ORGANIZATIONS",
        clientsCount: "10+",
        services: ["Fan Community Mgmt", "Tournament Ops", "Broadcast Support", "Merchandise Ops"]
      }
    ]
  },

  metrics: {
    title: "Gaming Operations Performance",
    items: [
      { label: "Player Satisfaction Score", value: "4.7/5", progressPercent: 94 },
      { label: "Moderation Accuracy Rate", value: "98.5%", progressPercent: 98.5 },
      { label: "KYC Average Turnaround", value: "< 8 mins", progressPercent: 90 },
      { label: "Chargeback Win Rate", value: "78%", progressPercent: 78 }
    ]
  },

  cta: {
    primaryBtn: "Level Up Player Operations",
    secondaryBtn: "Download Gaming Case Study"
  }
};
