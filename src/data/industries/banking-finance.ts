import { IndustryPageData } from "@/types/industries";

export const bankingFinanceData: IndustryPageData = {
  title: "Banking & Financial Services BPO Solutions | Claritiy",
  description: "Secure and compliant financial operations for modern banks and fintechs, including accounts management, compliance, and support.",
  slug: "banking-finance",
  breadcrumb: "Banking & Finance",

  heroData: {
    badgeIcon: "Landmark",
    badgeText: "Institutional Banking Excellence",
    headline: "Financial Integrity: Advanced Banking & Regulatory Orchestration",
    subheading: "Scale your financial institution with absolute regulatory maturity. We deliver secure, bank-grade operations and institutional KYC/AML orchestration for global financial leaders.",
    bullets: [
      "SOC 2 Type II & ISO 27001:2022 Certified",
      "Institutional-Grade KYC/AML & Fraud Protocols",
      "24/7 Mission-Critical Financial Surveillance",
      "Dedicated Regulatory Compliance Architectures"
    ],
    primaryCta: "Architect Financial Integrity",
    secondaryCta: "Access Security Blueprint",
    visualIcon: "ShieldCheck",
    visualList: ["Neural Financial Data Encryption", "Institutional KYC/AML Control Hubs", "Global Financial Regulatory Reporting", "Bank-Grade Infrastructure Metrics"],
    certifications: [
      { id: "c1", name: "PCI DSS v4.0" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "ISO 27001:2022" },
      { id: "c4", name: "GDPR Compliant" }
    ],
    clientSuccess: {
      stat1: "150+ Institutional Banks",
      stat2: "Zero Regulatory Deviations"
    }
  },

  services: {
    title: "Institutional Financial Support Framework",
    gridItems: [
      {
        title: "STRATEGIC ACCOUNT SERVICES",
        features: ["Institutional Account Opening", "Advanced KYC & AML Orchestration", "Global Customer Onboarding", "Rigorous Document Verification", "Institutional Maintenance Support"]
      },
      {
        title: "LENDING OPERATIONS ARCHITECTURE",
        features: ["Strategic Loan Origination", "Neural Credit Scoring", "Institutional Underwriting Support", "Failsafe Closing & Disbursement", "Global Loan Servicing"]
      },
      {
        title: "PAYMENTS & CARDS ORCHESTRATION",
        features: ["Mission-Critical Transaction Processing", "Institutional Card Issuance Support", "Strategic Chargeback Management", "High-Resolution Fraud Investigation", "Institutional Reconciliations"]
      },
      {
        title: "REGULATORY COMPLIANCE & RISK",
        features: ["Institutional Regulatory Reporting", "Rigorous Internal Audits", "Strategic Risk Assessments", "Global Sanctions Screening", "Real-Time Transaction Monitoring"]
      },
      {
        title: "INSTITUTIONAL CUSTOMER CARE",
        features: ["Omnichannel Engagement Support", "Digital Banking Resilience Help", "Strategic Wealth Management Support", "Institutional Credit Card Queries", "High-Resolution Insurance Claims"]
      },
      {
        title: "STRATEGIC BACK OFFICE",
        features: ["High-Velocity Check Processing", "Institutional Statement Preparation", "Strategic Image Indexing", "Regulatory Tax Reporting", "Institutional Ledger Maintenance"]
      }
    ]
  },

  compliance: {
    title: "Bank-Grade Compliance",
    cards: [
      { title: "REGULATORY COMPLIANCE", bullets: ["Strict KYC/AML Protocols", "Anti-Bribery Policy", "Consumer Protection", "Privacy Regulations"] },
      { title: "DATA SECURITY", bullets: ["Encrypted Vaults", "Clean Room Policies", "No-USB Facilities", "Network Segmentation"] },
      { title: "AUDIT & ASSURANCE", bullets: ["Daily QA Audits", "Weekly Compliance Revs", "Annual External Audits", "Risk Mitigation"] }
    ],
    securityMeasures: [
      { id: "s1", text: "End-to-end data encryption (AES-256)" },
      { id: "s2", text: "Biometric access controls" },
      { id: "s3", text: "Clean office/Clean desk policies" },
      { id: "s4", text: "Secure, redundant infrastructure" },
      { id: "s5", text: "Dedicated security operations center" },
      { id: "s6", text: "Regular system penetration testing" },
      { id: "s7", text: "Strict logical access management" },
      { id: "s8", text: "Business associate agreements (BAA)" }
    ]
  },

  technology: {
    title: "Integrated with Financial Platforms",
    categories: [
      { title: "CORE BANKING", items: ["Temenos", "Oracle FLEXCUBE", "Infosys Finacle", "FIS", "Jack Henry"] },
      { title: "KYC & COMPLIANCE", items: ["Refinitiv World-Check", "LexisNexis", "Alloy", "ComplyAdvantage", "Jumio"] },
      { title: "CRM & SALES", items: ["Salesforce Financial Cloud", "Microsoft Dynamics", "nCino", "Pegasystems", "HubSpot"] },
      { title: "PAYMENTS", items: ["SWIFT", "Stripe", "Fiserv", "Global Payments", "Visa/Mastercard Networks"] },
      { title: "CRM & SUPPORT", items: ["Zendesk", "ServiceNow", "Genesys Cloud", "Five9", "Intercom"] },
      { title: "ANALYTICS & BI", items: ["Snowflake", "SAS Viya", "Tableau", "Power BI", "Custom Risk Models"] }
    ]
  },

  segments: {
    title: "Expertise Across Finance",
    tabs: ["All", "Retail Banking", "Fintech", "Investment", "Credit Unions"],
    items: [
      {
        name: "Retail Banking", title: "RETAIL & COMMERCIAL BANKING",
        clientsCount: "60+",
        services: ["Account Ops", "Mortgage Support", "Card Services"]
      },
      {
        name: "Fintech", title: "FINTECH & DIGITAL BANKING",
        clientsCount: "75+",
        services: ["Digital Onboarding", "Live Chat Support", "Wallet Mgmt"]
      },
      {
        name: "Investment", title: "INVESTMENT & WEALTH MGMT",
        clientsCount: "25+",
        services: ["Trade Reconciliation", "Portfolio Admin", "Client Reporting"]
      },
      {
        name: "Credit Unions", title: "CREDIT UNIONS & CO-OPS",
        clientsCount: "40+",
        services: ["Member Support", "Lending Ops", "Compliance Reporting"]
      }
    ]
  },

  metrics: {
    title: "Financial Performance Metrics",
    items: [
      { label: "Transaction Accuracy", value: "99.99%", progressPercent: 99.99 },
      { label: "KYC Turnaround Time", value: "< 2 hours", progressPercent: 95 },
      { label: "Compliance Pass Rate", value: "100%", progressPercent: 100 },
      { label: "Operational Cost Saving", value: "45%", progressPercent: 85 }
    ]
  },

  cta: {
    primaryBtn: "Talk to a Finance Expert",
    secondaryBtn: "Download Finance Case Study"
  }
};
