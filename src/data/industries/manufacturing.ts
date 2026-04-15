import { IndustryPageData } from "@/types/industries";

export const manufacturingData: IndustryPageData = {
  title: "Manufacturing BPO Solutions | Claritiy",
  description: "Supply chain, procurement, customer support, and back-office operations for industrial manufacturers of all sizes.",
  slug: "manufacturing",
  breadcrumb: "Manufacturing",

  heroData: {
    badgeIcon: "Factory",
    badgeText: "Manufacturing",
    headline: "Optimize Manufacturing Back-Office Operations",
    subheading: "From procurement to warranty support, our manufacturing BPO specialists keep your production lines free from administrative bottlenecks.",
    bullets: [
      "Procurement & purchase order management",
      "Warranty claims & returns processing",
      "Dealer & distributor support networks",
      "ERP data management & master data"
    ],
    primaryCta: "Streamline Manufacturing Ops",
    secondaryCta: "View Manufacturing Brief",
    visualIcon: "Factory",
    visualList: ["ERP management dashboards", "Procurement workflow screens", "Quality reporting platforms", "Supply chain coordination"],
    certifications: [
      { id: "c1", name: "ISO 9001" },
      { id: "c2", name: "ISO 27001" },
      { id: "c3", name: "SOC 2 Type II" },
      { id: "c4", name: "ITAR Aware" }
    ],
    clientSuccess: {
      stat1: "85+ Manufacturing clients",
      stat2: "99.3% Order accuracy rate"
    }
  },

  services: {
    title: "End-to-End Manufacturing BPO Support",
    gridItems: [
      {
        title: "PROCUREMENT SUPPORT",
        features: ["Purchase Order Processing", "Supplier Management", "Vendor Onboarding", "Invoice Matching", "Contract Administration"]
      },
      {
        title: "SUPPLY CHAIN OPS",
        features: ["Demand Planning Support", "Inventory Management", "Logistics Coordination", "BOM Management", "Lead Time Tracking"]
      },
      {
        title: "CUSTOMER & DEALER SUPPORT",
        features: ["Dealer Helpdesk", "Order Status Updates", "Technical Inquiries", "Parts Ordering", "Distributor Relations"]
      },
      {
        title: "WARRANTY & RETURNS",
        features: ["Warranty Claims Processing", "RMA Management", "Quality Issue Tracking", "Field Engineer Coordination", "Spare Parts Support"]
      },
      {
        title: "QUALITY & COMPLIANCE",
        features: ["CAPA Documentation", "NCR Processing", "Audit Support", "Regulatory Filings", "Inspection Scheduling"]
      },
      {
        title: "BACK-OFFICE OPERATIONS",
        features: ["ERP Data Entry", "Master Data Mgmt", "Financial Reconciliation", "HR Administrative Support", "Reporting & Analytics"]
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
