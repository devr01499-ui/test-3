import { IndustryPageData } from "@/types/industries";

export const logisticsData: IndustryPageData = {
  title: "Logistics & Supply Chain BPO Solutions | Claritiy",
  description: "Optimize your supply chain with waybill processing, freight audit, tracking support, and customer operations for global logistics providers.",
  slug: "logistics",
  breadcrumb: "Logistics & Supply Chain",

  heroData: {
    badgeIcon: "Truck",
    badgeText: "Institutional Logistics Mastery",
    headline: "Supply Chain Integrity: Advanced Logistics & Global Orchestration",
    subheading: "Optimize your global supply chain with institutional-grade operations. We deliver high-precision waybill processing, freight adjudication, and mission-critical tracking support.",
    bullets: [
      "24/7/365 Mission-Critical Shipment Orchestration",
      "Institutional Freight Audit, Payment & Reconciliation",
      "Universal Customs Integrity & Regulatory Compliance",
      "Strategic Carrier & Vendor Ecosystem Management"
    ],
    primaryCta: "Architect Logistics Integrity",
    secondaryCta: "Access Supply Chain Brief",
    visualIcon: "Truck",
    visualList: ["Neural Freight Tracking Control Center", "Institutional Warehouse Resource Hubs", "Regulatory Customs Documentation Mesh", "Last-Mile Mission-Critical Coordination"],
    certifications: [
      { id: "c1", name: "ISO 27001:2022" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "C-TPAT Validated" },
      { id: "c4", name: "AEO Institutional Certified" }
    ],
    clientSuccess: {
      stat1: "130+ Institutional Logistics Partners",
      stat2: "99.9% Shipment Integrity Index"
    }
  },

  services: {
    title: "Institutional Logistics & Supply Chain BPO",
    gridItems: [
      {
        title: "STRATEGIC FREIGHT OPERATIONS",
        features: ["High-Velocity Waybill Processing", "Institutional Freight Audit & Payment", "Strategic Carrier Rate Orchestration", "Neural Load Planning Support", "Global Carrier Scheduling"]
      },
      {
        title: "MISSION-CRITICAL VISIBILITY",
        features: ["Neural Shipment Tracking", "Proactive Institutional Updates", "Strategic Exception Management", "Verified Delivery Confirmation", "Electronic POD Stewardship"]
      },
      {
        title: "GLOBAL CUSTOMS & INTEGRITY",
        features: ["Institutional Import/Export Documentation", "Precise HS Code Classification", "Regulatory Duty Orchestration", "Global Denied Party Screening", "Strategic Trade Compliance"]
      },
      {
        title: "INSTITUTIONAL CUSTOMER OPS",
        features: ["High-tier Logistics Helplines", "Precision Claims Management", "Institutional Order Inquiries", "Neural Returns Orchestration", "Strategic Complaint Resolution"]
      },
      {
        title: "STRATEGIC VENDOR STEWARDSHIP",
        features: ["Institutional Carrier Onboarding", "Performance Integrity Monitoring", "Strategic Contract Administration", "Neural Invoice Validation", "Institutional SLA Reporting"]
      },
      {
        title: "LOGISTICS DATA & ANALYTICS",
        features: ["Institutional Supply Chain KPIs", "Neural Demand Forecasting", "Network Optimization Logic", "Specialized Cost Analysis", "Institutional Custom Reporting"]
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
