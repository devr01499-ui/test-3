import { IndustryPageData } from "@/types/industries";

export const gamingData: IndustryPageData = {
  title: "Gaming & iGaming BPO Solutions | Claritiy",
  description: "Trust & Safety, community management, player support, and compliance operations for gaming platforms and iGaming operators.",
  slug: "gaming",
  breadcrumb: "Gaming & iGaming",

  heroData: {
    badgeIcon: "Gamepad2",
    badgeText: "Gaming & iGaming",
    headline: "Level Up Your Player Operations",
    subheading: "Deliver exceptional player experiences and maintain a safe, compliant gaming environment with our dedicated gaming BPO specialists.",
    bullets: [
      "24/7 multilingual player support",
      "Trust & Safety and content moderation",
      "iGaming compliance & responsible gambling",
      "Community management at global scale"
    ],
    primaryCta: "Enhance Player Experience",
    secondaryCta: "View Gaming Brief",
    visualIcon: "Gamepad2",
    visualList: ["Player support dashboards", "Community moderation platforms", "Trust & safety review screens", "iGaming compliance portals"],
    certifications: [
      { id: "c1", name: "ISO 27001" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "GamCare" },
      { id: "c4", name: "MGA Licensed" }
    ],
    clientSuccess: {
      stat1: "60+ Gaming & iGaming clients",
      stat2: "4.7/5 Player satisfaction score"
    }
  },

  services: {
    title: "Full-Spectrum Gaming & iGaming BPO",
    gridItems: [
      {
        title: "PLAYER SUPPORT",
        features: ["24/7 In-Game Help", "Account Recovery", "Technical Support", "Billing Disputes", "VIP Player Services"]
      },
      {
        title: "TRUST & SAFETY",
        features: ["Content Moderation", "Cheating Detection", "Harassment Reports", "Appeals Handling", "Ban Reviews"]
      },
      {
        title: "COMMUNITY MANAGEMENT",
        features: ["Forum Moderation", "Discord & Social Mgmt", "Event Support", "Bug Reporting Triage", "Creator Relations"]
      },
      {
        title: "iGAMING COMPLIANCE",
        features: ["KYC & Age Verification", "Responsible Gambling Tools", "Self-Exclusion Mgmt", "AML Monitoring", "Regulatory Reporting"]
      },
      {
        title: "FRAUD & CHARGEBACK",
        features: ["Payment Fraud Detection", "Chargeback Management", "Bonus Abuse Detection", "Multi-Account Detection", "Risk Scoring"]
      },
      {
        title: "GAME OPERATIONS",
        features: ["Live Ops Support", "Tournament Admin", "Localization QA", "Beta Test Support", "UAT Coordination"]
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
