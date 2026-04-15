import { IndustryPageData } from "@/types/industries";

export const cryptoFintechData: IndustryPageData = {
  title: "Cryptocurrency & Fintech BPO Solutions | Claritiy",
  description: "Compliance, KYC/AML, 24/7 customer support, and operations for the rapidly evolving crypto and fintech ecosystem.",
  slug: "crypto-fintech",
  breadcrumb: "Cryptocurrency & Fintech",

  heroData: {
    badgeIcon: "Bitcoin",
    badgeText: "Cryptocurrency & Fintech",
    headline: "Compliant Operations for the Web3 Economy",
    subheading: "Navigate the complex regulatory landscape and deliver world-class user experiences with our crypto and fintech BPO specialists.",
    bullets: [
      "KYC/AML onboarding & monitoring",
      "24/7 crypto user support & escalations",
      "Transaction monitoring & fraud detection",
      "Regulatory compliance across jurisdictions"
    ],
    primaryCta: "Build Compliant Ops",
    secondaryCta: "View Fintech Brief",
    visualIcon: "Bitcoin",
    visualList: ["KYC verification dashboards", "Transaction monitoring screens", "Crypto customer support portals", "Regulatory reporting platforms"],
    certifications: [
      { id: "c1", name: "ISO 27001" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "GDPR" },
      { id: "c4", name: "FinCEN Aligned" }
    ],
    clientSuccess: {
      stat1: "55+ Crypto & fintech clients",
      stat2: "< 5 min avg. KYC turnaround"
    }
  },

  services: {
    title: "Specialized Crypto & Fintech BPO Operations",
    gridItems: [
      {
        title: "KYC & ONBOARDING",
        features: ["Identity Verification", "Document Review", "Liveness Checks", "Adverse Media Screening", "Risk Scoring"]
      },
      {
        title: "AML & COMPLIANCE",
        features: ["Transaction Monitoring", "Suspicious Activity Reports (SAR)", "Sanctions Screening", "Risk-Based Reviews", "Regulatory Reporting"]
      },
      {
        title: "USER SUPPORT",
        features: ["24/7 Crypto Help Desk", "Wallet & Access Issues", "Transaction Disputes", "DeFi Product Support", "Onboarding Assistance"]
      },
      {
        title: "FRAUD OPERATIONS",
        features: ["Fraud Case Management", "Account Takeover Prevention", "Chargeback Management", "Pattern Analysis", "Escalation Handling"]
      },
      {
        title: "TRUST & SAFETY",
        features: ["Marketplace Content Review", "Scam Detection", "Community Guidelines Enforcement", "Phishing Investigations", "Appeals"]
      },
      {
        title: "BACK OFFICE",
        features: ["Reconciliation Support", "Reporting & Analytics", "Regulatory Filing Support", "Partner Onboarding", "Data Operations"]
      }
    ]
  },

  compliance: {
    title: "Regulatory-Grade Crypto Compliance",
    cards: [
      { title: "AML/BSA COMPLIANCE", bullets: ["FinCEN BSA Requirements", "SAR Filing Support", "FATF Standards", "Transaction Monitoring"] },
      { title: "DATA & PRIVACY", bullets: ["GDPR Compliant", "Encrypted User Data", "Right-to-Erasure Workflows", "Consent Management"] },
      { title: "SECURITY OPS", bullets: ["SOC 2 Certified", "Zero-Trust Architecture", "Immutable Audit Logs", "Incident Response"] }
    ],
    securityMeasures: [
      { id: "s1", text: "FinCEN BSA/AML compliant operating procedures" },
      { id: "s2", text: "Immutable audit logs for all KYC and SAR activities" },
      { id: "s3", text: "AES-256 encrypted user data storage" },
      { id: "s4", text: "Zero-trust network architecture for all access" },
      { id: "s5", text: "Multi-factor authentication on all crypto platforms" },
      { id: "s6", text: "FATF travel rule compliance workflows" },
      { id: "s7", text: "Real-time sanctions list screening (OFAC, EU, UN)" },
      { id: "s8", text: "Regular penetration testing of all systems" }
    ]
  },

  technology: {
    title: "Integrated with Leading Fintech Platforms",
    categories: [
      { title: "KYC/AML TOOLS", items: ["Jumio", "Onfido", "Persona", "Sumsub", "Sardine"] },
      { title: "TRANSACTION MONITORING", items: ["Chainalysis", "Elliptic", "TRM Labs", "Merkle Science", "CipherTrace"] },
      { title: "COMPLIANCE PLATFORMS", items: ["ComplyAdvantage", "Refinitiv World-Check", "ACAMS", "Actimize", "Napier"] },
      { title: "EXCHANGE PLATFORMS", items: ["Fireblocks", "Coinbase Prime", "BitGo", "Anchorage", "Circle API"] },
      { title: "CRM & SUPPORT", items: ["Zendesk", "Freshdesk", "Intercom", "Front", "Chatwoot"] },
      { title: "ANALYTICS", items: ["Dune Analytics", "Nansen", "Glassnode", "Tableau", "Power BI"] }
    ]
  },

  segments: {
    title: "Serving the Entire Web3 Ecosystem",
    tabs: ["All", "Exchanges", "DeFi", "Payments", "NFT/Gaming"],
    items: [
      {
        name: "Exchanges", title: "CRYPTO EXCHANGES & CUSTODIANS",
        clientsCount: "20+",
        services: ["KYC Onboarding", "User Support", "Fraud Ops", "AML Monitoring"]
      },
      {
        name: "DeFi", title: "DEFI PROTOCOLS & DAPPS",
        clientsCount: "12+",
        services: ["Community Support", "Smart Contract Queries", "Trust & Safety", "DAO Operations"]
      },
      {
        name: "Payments", title: "FINTECH PAYMENT COMPANIES",
        clientsCount: "15+",
        services: ["User Onboarding", "Transaction Disputes", "Compliance Ops", "Agent Banking"]
      },
      {
        name: "NFT/Gaming", title: "NFT MARKETPLACES & WEB3 GAMING",
        clientsCount: "10+",
        services: ["Marketplace Moderation", "User Support", "Dispute Resolution", "Creator Relations"]
      }
    ]
  },

  metrics: {
    title: "Crypto & Fintech Operations Performance",
    items: [
      { label: "KYC Approval Speed", value: "< 5 mins", progressPercent: 95 },
      { label: "False Positive Reduction", value: "60%", progressPercent: 82 },
      { label: "SAR Filing Accuracy", value: "100%", progressPercent: 100 },
      { label: "User CSAT Score", value: "91%", progressPercent: 91 }
    ]
  },

  cta: {
    primaryBtn: "Build Compliant Crypto Ops",
    secondaryBtn: "Download Fintech Case Study"
  }
};
