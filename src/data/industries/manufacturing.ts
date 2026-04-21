import { IndustryPageData } from "@/types/industries";

export const manufacturingData: IndustryPageData = {
  title: "Manufacturing BPO Solutions | Claritiy",
  description: "Supply chain, procurement, customer support, and back-office operations for industrial manufacturers of all sizes.",
  slug: "manufacturing",
  breadcrumb: "Manufacturing",

  heroData: {
    badgeIcon: "Factory",
    badgeText: "Institutional Manufacturing Mastery",
    headline: "Manufacturing Integrity: Advanced Industrial Back-Office Orchestration",
    subheading: "Orchestrate complex industrial supply chains and enhance operational velocity with institutional-grade procurement and mission-critical production support.",
    bullets: [
      "Institutional-Grade procurement & Strategic Purchase Order Management",
      "Strategic Warranty Claims Adjudication & Global Returns Orchestration",
      "Institutional Dealer & Distributor Stewardship Networks",
      "Mission-Critical ERP Master Data Integrity & Synchronization"
    ],
    primaryCta: "Architect Manufacturing Ops",
    secondaryCta: "Access Manufacturing Brief",
    visualIcon: "Factory",
    visualList: ["Institutional ERP Management Hubs", "Neural Procurement Workflow Centers", "Global Quality Integrity Meshes", "Mission-Critical Supply Chain Orchestration Control"],
    certifications: [
      { id: "c1", name: "ISO 9001:2015 QMS Mastered" },
      { id: "c2", name: "ISO 27001:2022 Verified" },
      { id: "c3", name: "SOC 2 Type II" },
      { id: "c4", name: "ITAR Regulatory Aware" }
    ],
    clientSuccess: {
      stat1: "85+ Institutional Industrial Partners",
      stat2: "99.9% Order Integrity Index"
    }
  },

  services: {
    title: "End-to-End Institutional Manufacturing Solutions",
    gridItems: [
      {
        title: "STRATEGIC PROCUREMENT STEWARDSHIP",
        features: ["Institutional Purchase Order Lifecycle", "Neural Supplier Relationship Management", "Strategic Vendor Onboarding Hubs", "Verified Invoice Integrity Matching", "Institutional Contract Administration"]
      },
      {
        title: "MISSION-CRITICAL SUPPLY CHAIN",
        features: ["Institutional Demand Orchestration Support", "Neural Inventory Integrity Management", "Strategic Global Logistics Coordination", "Institutional BOM Integrity Ops", "Neural Lead Time Tracking Logic"]
      },
      {
        title: "INSTITUTIONAL PARTNER SUPPORT",
        features: ["Hyper-Resolution Dealer Helpdesk", "Neural Order Status Synchronization", "Strategic Industrial Tech Inquiries", "Institutional Spare Parts Orchestration", "Verified Distributor Ecosystem Stewardship"]
      },
      {
        title: "PRECISION WARRANTY & RETURNS",
        features: ["Institutional Warranty Claims Adjudication", "Global RMA Lifecycle Management", "Neural Quality Integrity Tracking", "Strategic Field Resource Coordination", "Institutional Spare Parts Pipelines"]
      },
      {
        title: "QUALITY & REGULATORY CARE",
        features: ["Institutional CAPA Documentation Hubs", "Neural NCR Integrity Processing", "Strategic Audit Readiness Support", "Regulatory Manufacturing Filings", "Institutional Inspection Scheduling Logic"]
      },
      {
        title: "REGULATORY BACK-OFFICE OPS",
        features: ["Institutional ERP Master Data Entry", "Precision Master Data Stewardship", "Verified Financial Reconciliation", "Strategic HR Administrative Support", "Institutional Regulatory Analytics"]
      }
    ]
  },

  compliance: {
    title: "Manufacturing-Grade Quality & Compliance",
    cards: [
      { title: "QUALITY STANDARDS", bullets: ["ISO 9001:2015 QMS", "IATF 16949 Support", "AS9100 Awareness", "Zero-Defect Commitment"] },
      { title: "DATA SECURITY", bullets: ["ERP Access Controls", "IP & Trade Secret Protection", "ITAR Awareness", "Encrypted Communications"] },
      { title: "ENVIRONMENTAL & SAFETY", bullets: ["ISO 14001 Support", "EHS Documentation", "OSHA Incident Reporting", "Sustainability Reporting"] }
    ],
    securityMeasures: [
      { id: "s1", text: "ISO 9001 quality management system alignment" },
      { id: "s2", text: "ITAR-aware handling of export-controlled data" },
      { id: "s3", text: "Encrypted ERP access for all back-office staff" },
      { id: "s4", text: "Role-based access for production and SAP systems" },
      { id: "s5", text: "Intellectual property and trade secret protection" },
      { id: "s6", text: "Regular quality audits and CAPA tracking" },
      { id: "s7", text: "Secure document management for engineering data" },
      { id: "s8", text: "Business continuity for supply chain disruptions" }
    ]
  },

  technology: {
    title: "Integrated with Leading Manufacturing Platforms",
    categories: [
      { title: "ERP SYSTEMS", items: ["SAP S/4HANA", "Oracle Manufacturing", "Microsoft Dynamics 365", "Epicor ERP", "Infor CloudSuite Ind."] },
      { title: "PLM SYSTEMS", items: ["Siemens Teamcenter", "PTC Windchill", "Dassault ENOVIA", "Arena PLM", "Autodesk Vault"] },
      { title: "QUALITY MGMT", items: ["ETQ Reliance", "Intelex", "MasterControl", "Sparta Systems", "Qualio"] },
      { title: "SUPPLY CHAIN", items: ["SAP Ariba", "Coupa", "Jaggaer", "Ivalua", "GEP SMART"] },
      { title: "CRM & DEALER SUPPORT", items: ["Salesforce Manufacturing Cloud", "Zendesk", "ServiceNow", "Freshdesk", "Microsoft Dynamics"] },
      { title: "ANALYTICS", items: ["Tableau", "Power BI", "SAP Analytics Cloud", "Snowflake", "Qlik"] }
    ]
  },

  segments: {
    title: "Expertise Across Manufacturing Sectors",
    tabs: ["All", "Industrial", "Automotive", "Aerospace", "Consumer Goods"],
    items: [
      {
        name: "Industrial", title: "INDUSTRIAL MANUFACTURERS",
        clientsCount: "35+",
        services: ["ERP Support", "Procurement Ops", "Dealer Network", "Quality Docs"]
      },
      {
        name: "Automotive", title: "AUTOMOTIVE SUPPLIERS (TIER 1/2)",
        clientsCount: "20+",
        services: ["IATF Compliance Docs", "EDI Processing", "Customer Claims", "Parts Mgmt"]
      },
      {
        name: "Aerospace", title: "AEROSPACE & DEFENSE",
        clientsCount: "10+",
        services: ["AS9100 Documentation", "ITAR Compliance", "Parts Traceability", "Export Support"]
      },
      {
        name: "Consumer Goods", title: "CONSUMER GOODS MANUFACTURERS",
        clientsCount: "20+",
        services: ["Order Management", "Retailer Support", "Returns Ops", "Product Launches"]
      }
    ]
  },

  metrics: {
    title: "Manufacturing Operations Performance",
    items: [
      { label: "Order Processing Accuracy", value: "99.3%", progressPercent: 99.3 },
      { label: "Procurement Cost Savings", value: "18%", progressPercent: 55 },
      { label: "Warranty Resolution Speed", value: "50% Faster", progressPercent: 78 },
      { label: "ERP Data Quality Improvement", value: "45%", progressPercent: 70 }
    ]
  },

  cta: {
    primaryBtn: "Talk to a Manufacturing Expert",
    secondaryBtn: "Download Manufacturing Case Study"
  }
};
