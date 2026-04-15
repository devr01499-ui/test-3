import { IndustryPageData } from "@/types/industries";

export const foodBeverageData: IndustryPageData = {
  title: "Food & Beverage BPO Solutions | Claritiy",
  description: "Order management, customer support, franchise operations, and supply chain assistance for the food & beverage industry.",
  slug: "food-beverage",
  breadcrumb: "Food & Beverage",

  heroData: {
    badgeIcon: "Utensils",
    badgeText: "Food & Beverage",
    headline: "Serve up Exceptional Food Operations",
    subheading: "Keep your kitchens, supply chains, and customers happy with dedicated F&B operations support around the clock.",
    bullets: [
      "24/7 order management & customer care",
      "Franchise & multi-unit support services",
      "Food safety compliance documentation",
      "Supply chain & vendor coordination"
    ],
    primaryCta: "Optimize F&B Operations",
    secondaryCta: "View F&B Brief",
    visualIcon: "Utensils",
    visualList: ["Order management platforms", "Franchise support dashboards", "Menu data management", "Supply chain coordination screens"],
    certifications: [
      { id: "c1", name: "ISO 22000" },
      { id: "c2", name: "FDA Food Safety" },
      { id: "c3", name: "ISO 27001" },
      { id: "c4", name: "PCI DSS" }
    ],
    clientSuccess: {
      stat1: "70+ F&B brands served",
      stat2: "98% Order accuracy rate"
    }
  },

  services: {
    title: "Full-Service F&B Operations Support",
    gridItems: [
      {
        title: "ORDER MANAGEMENT",
        features: ["Order Taking Support", "Online Order Assistance", "Delivery Coordination", "Order Status Updates", "Complaint Handling"]
      },
      {
        title: "CUSTOMER CARE",
        features: ["Guest Relations", "Allergen Inquiries", "Loyalty Program Support", "Gift Card Services", "Feedback Management"]
      },
      {
        title: "FRANCHISE SUPPORT",
        features: ["Franchisee Helpdesk", "Operations Compliance", "Marketing Material Dist.", "Training Admin", "Royalty Reporting"]
      },
      {
        title: "SUPPLY CHAIN",
        features: ["Supplier Coordination", "Purchase Order Processing", "Inventory Management", "Invoice Reconciliation", "Vendor Relations"]
      },
      {
        title: "FOOD SAFETY OPS",
        features: ["HACCP Documentation", "Audit Preparation", "Recall Management", "Health Code Compliance", "Incident Reports"]
      },
      {
        title: "DIGITAL OPERATIONS",
        features: ["Menu Data Management", "Digital Channel Support", "Review Response", "Social Media Moderation", "Delivery Platform Ops"]
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
