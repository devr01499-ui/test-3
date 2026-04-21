import { IndustryPageData } from "@/types/industries";

export const foodBeverageData: IndustryPageData = {
  title: "Food & Beverage BPO Solutions | Claritiy",
  description: "Order management, customer support, franchise operations, and supply chain assistance for the food & beverage industry.",
  slug: "food-beverage",
  breadcrumb: "Food & Beverage",

  heroData: {
    badgeIcon: "Utensils",
    badgeText: "Institutional F&B Mastery",
    headline: "F&B Integrity: Advanced Lifecycle & Supply Chain Orchestration",
    subheading: "Orchestrate complex global food operations and enhance consumer trust with institutional-grade supply chain coordination and mission-critical customer care.",
    bullets: [
      "24/7/365 Institutional Order Management & Strategic Customer Care",
      "Strategic Franchise & Multi-Unit Support Lifecycle Services",
      "Institutional Food Safety Compliance & Verified Documentation Hubs",
      "Mission-Critical Supply Chain & Global Vendor Orchestration Meshes"
    ],
    primaryCta: "Architect F&B Ops",
    secondaryCta: "Access F&B Brief",
    visualIcon: "Utensils",
    visualList: ["Institutional Order Integrity Hubs", "Neural Franchise Stewardship Centers", "Global Menu Data Control Meshes", "Mission-Critical Supply Chain Orchestration Control"],
    certifications: [
      { id: "c1", name: "ISO 22000 Verified" },
      { id: "c2", name: "FDA Food Safety Standards" },
      { id: "c3", name: "ISO 27001:2022" },
      { id: "c4", name: "PCI DSS v4.0" }
    ],
    clientSuccess: {
      stat1: "70+ Institutional F&B Partners",
      stat2: "99.5% Order Integrity Index"
    }
  },

  services: {
    title: "Full-Service Institutional F&B Operations",
    gridItems: [
      {
        title: "STRATEGIC ORDER MANAGEMENT",
        features: ["Institutional Order Taking Support", "Neural Online Order Orchestration", "Verified Delivery Coordination", "Strategic Status Synchronization", "Institutional Complaint Adjudication"]
      },
      {
        title: "INSTITUTIONAL CUSTOMER CARE",
        features: ["Strategic Guest Relations Hubs", "Neural Allergen Inquiry Support", "Verified Loyalty Program Lifecycle", "Institutional Gift Card Services", "Global Feedback Adjudication"]
      },
      {
        title: "STRATEGIC FRANCHISE SUPPORT",
        features: ["Institutional Franchisee Helpdesk", "Neural Operations Compliance Mesh", "Strategic Marketing Asset Dist.", "Verified Training Administration", "Institutional Royalty Integrity Reporting"]
      },
      {
        title: "MISSION-CRITICAL SUPPLY CHAIN",
        features: ["Institutional Supplier Coordination", "Neural Purchase Order Lifecycle", "Strategic Inventory Integrity Ops", "Verified Invoice Reconciliation Hubs", "Institutional Vendor Relations"]
      },
      {
        title: "REGULATORY FOOD SAFETY",
        features: ["Institutional HACCP Documentation Hubs", "Neural Audit Readiness Support", "Strategic Recall Management Logic", "Verified Health Code Compliance", "Institutional Incident Adjudication"]
      },
      {
        title: "NEURAL DIGITAL OPS",
        features: ["Institutional Menu Data Stewardship", "Strategic Digital Channel Support", "Neural Unified Review Response", "Global Social Mesh Moderation", "Institutional Delivery Platform Ops"]
      }
    ]
  },

  compliance: {
    title: "Food Safety & Data Compliance",
    cards: [
      { title: "FOOD SAFETY", bullets: ["HACCP Compliance", "FDA Food Safety Rules", "ISO 22000 Awareness", "Recall Protocols"] },
      { title: "PAYMENT SECURITY", bullets: ["PCI DSS Compliant", "Tokenized Payments", "Secure POS Integration", "Chargeback Mgmt"] },
      { title: "FRANCHISE COMPLIANCE", bullets: ["FDD Procedures", "Brand Standard Monitoring", "Royalty Reporting", "Operational Audits"] }
    ],
    securityMeasures: [
      { id: "s1", text: "HACCP and food safety documentation workflows" },
      { id: "s2", text: "PCI DSS compliant order and payment handling" },
      { id: "s3", text: "Encrypted customer and supplier data storage" },
      { id: "s4", text: "Role-based access for POS and ordering systems" },
      { id: "s5", text: "Allergen information handling protocols" },
      { id: "s6", text: "Food recall management and consumer notification" },
      { id: "s7", text: "Secure franchise documentation and reporting" },
      { id: "s8", text: "24/7 monitoring of customer complaint queues" }
    ]
  },

  technology: {
    title: "Integrated with Leading F&B Platforms",
    categories: [
      { title: "POS SYSTEMS", items: ["Square", "Toast POS", "Lightspeed", "NCR Aloha", "Revel Systems"] },
      { title: "DELIVERY PLATFORMS", items: ["DoorDash Partner", "Uber Eats API", "Grubhub API", "Deliverect", "Olo"] },
      { title: "INVENTORY & ERP", items: ["MarketMan", "BlueCart", "xtraCHEF", "Compeat", "SAP S/4HANA"] },
      { title: "FRANCHISE MGMT", items: ["FranConnect", "Naranga", "Salesforce Franchise", "Revention", "RMS Point of Sale"] },
      { title: "CRM & LOYALTY", items: ["Paytronix", "Thanx", "Punchh", "LevelUp", "SpotOn"] },
      { title: "ANALYTICS", items: ["Tableau", "Power BI", "Restaurant365 Analytics", "Placer.ai", "Tenzo"] }
    ]
  },

  segments: {
    title: "Serving Every Food & Beverage Vertical",
    tabs: ["All", "QSR", "Full Service", "Delivery", "CPG"],
    items: [
      {
        name: "QSR", title: "QUICK SERVICE RESTAURANTS",
        clientsCount: "25+",
        services: ["Order Support", "Franchise Helpdesk", "Loyalty Ops", "Delivery Coord."]
      },
      {
        name: "Full Service", title: "FULL-SERVICE RESTAURANTS",
        clientsCount: "18+",
        services: ["Reservation Support", "Guest Relations", "Staff Admin", "Supply Coordination"]
      },
      {
        name: "Delivery", title: "FOOD DELIVERY PLATFORMS",
        clientsCount: "12+",
        services: ["Driver Support", "Restaurant Onboarding", "Customer Care", "Fraud Mgmt"]
      },
      {
        name: "CPG", title: "FOOD & BEVERAGE BRANDS (CPG)",
        clientsCount: "20+",
        services: ["Consumer Helplines", "Recall Mgmt", "Retailer Support", "Distribution Ops"]
      }
    ]
  },

  metrics: {
    title: "F&B Operations Performance",
    items: [
      { label: "Order Accuracy Rate", value: "98%", progressPercent: 98 },
      { label: "Customer CSAT Score", value: "95%", progressPercent: 95 },
      { label: "Franchise Support Resolution", value: "< 4 hrs", progressPercent: 90 },
      { label: "Supply Cost Reduction", value: "22%", progressPercent: 55 }
    ]
  },

  cta: {
    primaryBtn: "Talk to an F&B Expert",
    secondaryBtn: "Download F&B Case Study"
  }
};
