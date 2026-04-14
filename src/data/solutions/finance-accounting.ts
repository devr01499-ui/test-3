import { SolutionPageData } from "@/types/solutions";

export const financeAccountingData: SolutionPageData = {
  title: "Finance & Accounting Solutions | Claritiy",
  description: "Secure, compliant, and highly accurate outsourced finance and accounting operations powered by CPA-led teams and AI automation.",
  slug: "finance-accounting",
  breadcrumb: "Finance & Accounting",
  
  heroData: {
    badgeIcon: "Banknote",
    badgeText: "Finance & Accounting",
    headline: "Precision Accounting, Automated Scale",
    subheading: "Transform your finance department from a cost center to a strategic asset. Outsource routine accounting safely under CPA supervision.",
    bullets: [
      "End-to-end Accounts Payable & Receivable",
      "Month-end close and reconciliation",
      "US GAAP & IFRS compliant reporting",
      "SOC 2 Type II strict environments"
    ],
    primaryCta: "Optimize Finance",
    secondaryCta: "View Security Specs",
    visualIcon: "PieChart",
    visualText: "Financial Analytics & Ledger",
    metricsOverlay: [
      { value: "0%", label: "Compliance Breaches" },
      { value: "40%", label: "Dept. Cost Savings" },
      { value: "3 Days", label: "Faster Month Close" }
    ]
  },

  quickStats: [
    { icon: "Calculator", text: "$10B+ Managed Books" },
    { icon: "Shield", text: "ISO-27001 Certified" },
    { icon: "TrendingDown", text: "40% Cost Reduction" },
    { icon: "Users", text: "Certified CPAs" }
  ],

  services: {
    title: "Complete F&A Outsourcing",
    items: [
      {
        title: "Procure-to-Pay (P2P)",
        icon: "CreditCard",
        features: ["Invoice Processing via OCR", "Vendor Master Management", "Expense Claim Audits", "Payment Processing Support", "AP Aging Analysis"]
      },
      {
        title: "Order-to-Cash (O2C)",
        icon: "TrendingUp",
        features: ["Customer Billing & Invoicing", "Credit Verification", "Cash Application", "Collections & Dunning", "Dispute Management"]
      },
      {
        title: "Record-to-Report (R2R)",
        icon: "FileSpreadsheet",
        features: ["General Ledger Mgmt", "Bank Reconciliations", "Fixed Asset Accounting", "Month/Year-End Close", "Financial Statement Prep"]
      }
    ]
  },

  processFlow: {
    title: "Secure Financial Workflow",
    trigger: "Raw Invoices / Financial Data Fetched",
    routerParams: "[OCR Bot] Extracts data, validates against PO databases",
    aiPath: { title: "Auto-Match (3-Way)", subtitle: "Posted to Ledger", color: "#10b981" },
    humanPath: { title: "CPA Exception Audit", subtitle: "Manual Reconciliation", color: "#6366f1" },
    qualityMonitor: "[Algorithmic Audit] Flags duplicates or anomalies pre-payment",
    benefits: [
      { icon: "Zap", text: "90% AP automation rate" },
      { icon: "ShieldAlert", text: "Zero overpayments / duplicates" },
      { icon: "CheckSquare", text: "100% GAAP compliant ledgers" },
      { icon: "Clock", text: "Real-time visibility into cash flow" }
    ]
  },

  features: {
    title: "F&A Excellence",
    items: [
      { icon: "Cpu", title: "Intelligent Automation", bullets: ["OCR Data Extraction", "RPA Data Entry", "Automated Matching", "Predictive Forecasting"] },
      { icon: "ShieldCheck", title: "Compliance Heavy", bullets: ["US GAAP", "IFRS Standards", "Sarbanes-Oxley (SOX)", "Strict segregation of duties"] },
      { icon: "Lock", title: "Bank-Grade Security", bullets: ["PCI DSS Certified", "Clean Desk Policy", "Restricted Access Zones", "Encrypted Data at Rest"] },
      { icon: "Settings", title: "ERP Native Integration", bullets: ["SAP & Oracle", "NetSuite", "QuickBooks Enterprise", "Microsoft Dynamics"] },
      { icon: "LineChart", title: "Advanced Analytics", bullets: ["Cash Flow Projections", "Working Capital Metrics", "Custom KPI Dashboards", "EBITDA Tracking"] },
      { icon: "GraduationCap", title: "Qualified Talent", bullets: ["CPA Leadership", "ACCA Certified", "Finance Degreed Agents", "Continuous Training"] },
      { icon: "Scaling", title: "Scalable Resources", bullets: ["Tax Season Bursts", "M&A Integration Support", "Audit Prep Teams", "Flexible Capacity"] },
      { icon: "FolderCheck", title: "Process Standardization", bullets: ["SOP Documentation", "Best Practice Impl.", "Continuous Benchmarking", "Workflow Optimization"] }
    ]
  },

  useCases: {
    title: "Industry Specific F&A Models",
    tabs: ["All", "SaaS Startups", "Healthcare Providers", "Enterprise Logistics"],
    items: [
      { icon: "🚀", title: "SaaS ASC-606 Revenue Recognition", challenge: "Series B startup struggling with complex delayed revenue recognition rules across thousands of tiered subscription contracts.", solution: "Deployed a specialized pod of CPAs utilizing NetSuite to map and automate complex amortization schedules.", results: "100% audit pass rate • Zero reporting delays" },
      { icon: "🏥", title: "Healthcare Revenue Cycle", challenge: "Hospital network facing massive delays in AP processing and high DSO (Days Sales Outstanding).", solution: "Implemented robotic process automation for 3-way matching and dedicated specialists for denied claims follow-up.", results: "DSO reduced by 14 days • 60% AP cost cut" },
      { icon: "🚢", title: "Logistics Invoice Auditing", challenge: "Global freight forwarded losing margins due to incorrect supplier invoicing and duplications.", solution: "Integrated OCR algorithms to audit 100% of vendor invoices against rate cards prior to final CPA approval.", results: "$2.4M saved in overpayments year-1" }
    ]
  },

  techStack: {
    title: "Finance & ERP Ecosystem",
    categories: [
      { title: "Enterprise ERPs", items: ["Oracle NetSuite", "SAP S/4HANA", "Microsoft Dynamics 365", "Sage Intacct", "Workday"] },
      { title: "SMB Accounting", items: ["QuickBooks Online/Desktop", "Xero", "FreshBooks", "Zoho Books", "Wave"] },
      { title: "Automation & AP", items: ["Bill.com", "Expensify", "Ramp", "UiPath (F&A specific)", "BlackLine"] }
    ]
  },

  pricing: {
    title: "Financial Outsourcing Pricing",
    models: [
      { title: "Fractional Accounting", bestFor: "Small businesses needing ongoing bookkeeping", priceValue: "From $1,200", priceUnit: "/mo" },
      { title: "Dedicated AP/AR Pods", bestFor: "Mid-market companies scaling financial operations", priceValue: "From $2,200", priceUnit: "/FTE/mo", isPopular: true },
      { title: "Per Invoice (AP)", bestFor: "High-volume, highly standardized accounts payable", priceValue: "From $0.80", priceUnit: "/invoice" },
      { title: "CPA Controller Services", bestFor: "Audit prep, complex compliance, and process mapping", priceValue: "Custom", priceUnit: " hourly" }
    ]
  },

  metrics: {
    title: "Financial KPIs Delivered",
    items: [
      { label: "Invoice Processing Accuracy", value: "99.8%", progressPercent: 99.8 },
      { label: "Days Sales Outstanding (DSO) Reduction", value: "30%", progressPercent: 80 },
      { label: "Month-End Close Acceleration", value: "45%", progressPercent: 85 },
      { label: "GAAP Compliance Rating", value: "100%", progressPercent: 100 },
      { label: "Operational Cost Reduction", value: "50%", progressPercent: 75 },
      { label: "Audit Finding Decrease", value: "92%", progressPercent: 92 }
    ]
  },

  faqs: {
    title: "Finance & Accounting FAQs",
    items: [
      { q: "How do you ensure data security for financial records?", a: "We operate in ISO-27001 and SOC 2 Type II certified environments. This includes hardware restrictions (no USBs, no dual monitors), strict network firewalls, and operating directly on client VPNs." },
      { q: "Who manages the offshore accounting teams?", a: "Every F&A pod is overseen by experienced, often US-credentialed CPAs or ACCA-qualified finance managers to ensure rigorous adherence to international accounting standards." }
    ]
  },

  related: {
    title: "Explore Related Services",
    items: [
      { title: "Back Office Operations", link: "/solutions/back-office" },
      { title: "Order Processing", link: "/solutions/order-processing" },
      { title: "Claims Processing", link: "/solutions/claims-processing" }
    ]
  },

  cta: {
    title: "Ready to Secure Your Financial Operations?",
    primaryBtn: "Talk to a Financial Architect",
    secondaryBtn1: "Review Cost Savings",
    secondaryBtn2: "Security Compliance Details"
  }
};
