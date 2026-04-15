import { IndustryPageData } from "@/types/industries";

export const logisticsData: IndustryPageData = {
  title: "Logistics & Supply Chain BPO Solutions | Claritiy",
  description: "Optimize your supply chain with waybill processing, freight audit, tracking support, and customer operations for global logistics providers.",
  slug: "logistics",
  breadcrumb: "Logistics & Supply Chain",

  heroData: {
    badgeIcon: "Truck",
    badgeText: "Logistics & Supply Chain",
    headline: "Streamline Your Supply Chain Operations",
    subheading: "From freight audit to last-mile tracking, our logistics BPO experts keep your operations moving 24/7 at global scale.",
    bullets: [
      "24/7 shipment tracking & customer updates",
      "Freight audit, payment & reconciliation",
      "Customs documentation & compliance",
      "Carrier & vendor relationship management"
    ],
    primaryCta: "Optimize Logistics",
    secondaryCta: "View Supply Chain Brief",
    visualIcon: "Truck",
    visualList: ["Freight tracking dashboards", "Warehouse operations screens", "Customs documentation workflows", "Last-mile delivery coordination"],
    certifications: [
      { id: "c1", name: "ISO 27001" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "C-TPAT" },
      { id: "c4", name: "AEO Certified" }
    ],
    clientSuccess: {
      stat1: "130+ Logistics clients",
      stat2: "99.8% Shipment accuracy"
    }
  },

  services: {
    title: "Full-Service Logistics & Supply Chain BPO",
    gridItems: [
      {
        title: "FREIGHT OPERATIONS",
        features: ["Waybill Processing", "Freight Audit & Payment", "Rate Shopping", "Load Planning Support", "Carrier Scheduling"]
      },
      {
        title: "TRACKING & VISIBILITY",
        features: ["Shipment Tracking", "Proactive Customer Updates", "Exception Management", "Delivery Confirmation", "POD Collection"]
      },
      {
        title: "CUSTOMS & COMPLIANCE",
        features: ["Import/Export Docs", "HS Code Classification", "Duty Calculations", "Denied Party Screening", "Trade Compliance"]
      },
      {
        title: "CUSTOMER OPERATIONS",
        features: ["Customer Helplines", "Claims Management", "Order Inquiries", "Returns Processing", "Complaint Resolution"]
      },
      {
        title: "VENDOR MANAGEMENT",
        features: ["Carrier Onboarding", "Performance Monitoring", "Contract Administration", "Invoice Validation", "SLA Reporting"]
      },
      {
        title: "DATA & ANALYTICS",
        features: ["Supply Chain KPIs", "Demand Forecasting", "Network Optimization", "Cost Analysis", "Custom Reporting"]
      }
    ]
  },

  compliance: {
    title: "Secure & Compliant Logistics Operations",
    cards: [
      { title: "TRADE COMPLIANCE", bullets: ["C-TPAT Standards", "AEO Programme", "Denied Party Screening", "Export Controls"] },
      { title: "DATA SECURITY", bullets: ["Encrypted Freight Data", "Role-Based Access", "Carrier Portal Security", "ISO 27001 Certified"] },
      { title: "OPERATIONAL RESILIENCE", bullets: ["24/7 Monitoring", "BCP/DR Plans", "Redundant Infrastructure", "SLA Guarantee"] }
    ],
    securityMeasures: [
      { id: "s1", text: "C-TPAT and AEO compliant security protocols" },
      { id: "s2", text: "Encrypted cargo and shipment data handling" },
      { id: "s3", text: "Role-based access for TMS and WMS platforms" },
      { id: "s4", text: "Multi-factor authentication for all portals" },
      { id: "s5", text: "24/7 network monitoring for carrier data feeds" },
      { id: "s6", text: "Business continuity plans for peak seasons" },
      { id: "s7", text: "Regular third-party security assessments" },
      { id: "s8", text: "Denied party and sanctions list screening daily" }
    ]
  },

  technology: {
    title: "Integrated with Leading Logistics Platforms",
    categories: [
      { title: "TMS SYSTEMS", items: ["Oracle TMS", "JDA TMS", "MercuryGate", "BluJay TMS", "SAP TM"] },
      { title: "WMS PLATFORMS", items: ["Manhattan WMS", "Oracle WMS", "SAP EWM", "HighJump", "Infor WMS"] },
      { title: "CUSTOMS/TRADE", items: ["Descartes", "GTNexus", "Amber Road", "Integration Point", "Customs City"] },
      { title: "TRACKING", items: ["FourKites", "Project44", "Flexport", "Shippeo", "Controlant"] },
      { title: "CRM & SUPPORT", items: ["Salesforce Logistics Cloud", "Zendesk", "Freshdesk", "ServiceNow", "SAP Service Cloud"] },
      { title: "ANALYTICS", items: ["Tableau", "Power BI", "Llamasoft", "o9 Solutions", "Kinaxis"] }
    ]
  },

  segments: {
    title: "Expertise Across Logistics Verticals",
    tabs: ["All", "3PL", "Freight", "Last Mile", "Cold Chain"],
    items: [
      {
        name: "3PL", title: "3PL & FULFILLMENT PROVIDERS",
        clientsCount: "55+",
        services: ["Order Management", "Inventory Queries", "Returns Support", "Client Reporting"]
      },
      {
        name: "Freight", title: "FREIGHT CARRIERS & BROKERS",
        clientsCount: "40+",
        services: ["Freight Audit", "Carrier Relations", "Dispatch Support", "Claims Mgmt"]
      },
      {
        name: "Last Mile", title: "LAST-MILE DELIVERY",
        clientsCount: "25+",
        services: ["Customer Tracking", "Delivery Exceptions", "Driver Support", "Returns"]
      },
      {
        name: "Cold Chain", title: "COLD CHAIN LOGISTICS",
        clientsCount: "15+",
        services: ["Temperature Monitoring", "Compliance Docs", "Specialized Carrier Mgmt", "Incident Reporting"]
      }
    ]
  },

  metrics: {
    title: "Logistics Operations Performance",
    items: [
      { label: "Shipment Accuracy Rate", value: "99.8%", progressPercent: 99.8 },
      { label: "Freight Audit Savings", value: "8-12%", progressPercent: 80 },
      { label: "Customer CSAT Score", value: "95%", progressPercent: 95 },
      { label: "Claims Resolution Speed", value: "60% Faster", progressPercent: 78 }
    ]
  },

  cta: {
    primaryBtn: "Talk to a Logistics Expert",
    secondaryBtn: "Download Supply Chain Brief"
  }
};
