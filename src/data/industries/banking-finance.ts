import { IndustryPageData } from "@/types/industries";

export const bankingFinanceData: IndustryPageData = {
  title: "Banking & Financial Services BPO Solutions | Claritiy",
  description: "Secure and compliant financial operations for modern banks and fintechs, including accounts management, compliance, and support.",
  slug: "banking-finance",
  breadcrumb: "Banking & Finance",

  heroData: {
    badgeIcon: "Landmark",
    badgeText: "Banking & Finance",
    headline: "Secure & Compliant Financial Operations",
    subheading: "Partner with a professional BPO to scale your financial services safely, ensuring the highest standards of security and compliance.",
    bullets: [
      "SOC 2 & ISO 27001 certified",
      "Robust KYC/AML procedures",
      "24/7 fraud monitoring",
      "Dedicated compliance teams"
    ],
    primaryCta: "Optimize Finance",
    secondaryCta: "View Security",
    visualIcon: "ShieldCheck",
    visualList: ["Encrypted data processing", "KYC/AML verification desks", "Financial reporting scenes", "Secure facility snapshots"],
    certifications: [
      { id: "c1", name: "PCI DSS" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "ISO 27001" },
      { id: "c4", name: "GDPR" }
    ],
    clientSuccess: {
      stat1: "150+ Financial clients",
      stat2: "99.9% Compliance rating"
    }
  },

  services: {
    title: "End-to-End Financial Support",
    gridItems: [
      {
        title: "ACCOUNT SERVICES",
        features: ["Account Opening", "KYC & AML Checks", "Customer Onboarding", "Document Verification", "Maintenance Support"]
      },
      {
        title: "LENDING OPERATIONS",
        features: ["Loan Origination", "Credit Scoring", "Underwriting Support", "Closing & Disbursement", "Loan Servicing"]
      },
      {
        title: "PAYMENTS & CARDS",
        features: ["Transaction Processing", "Card Issuance Support", "Chargeback Mgmt", "Fraud Investigation", "Reconciliations"]
      },
      {
        title: "COMPLIANCE & RISK",
        features: ["Regulatory Reporting", "Internal Audits", "Risk Assessments", "Sanctions Screening", "Transaction Monitoring"]
      },
      {
        title: "CUSTOMER CARE",
        features: ["Omnichannel Support", "Digital Banking Help", "Wealth Mgmt Support", "Credit Card Queries", "Insurance Claims"]
      },
      {
        title: "BACK OFFICE",
        features: ["Check Processing", "Statement Prep", "Image Indexing", "Tax Reporting", "Ledger Maintenance"]
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
