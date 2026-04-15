import { IndustryPageData } from "@/types/industries";

export const automotiveData: IndustryPageData = {
  title: "Automotive BPO Solutions | Claritiy",
  description: "Dealer support, parts management, warranty claims, and customer operations for automotive OEMs, dealers, and fleet managers.",
  slug: "automotive",
  breadcrumb: "Automotive",

  heroData: {
    badgeIcon: "Car",
    badgeText: "Automotive",
    headline: "Drive Smarter Automotive Operations",
    subheading: "From dealer support to warranty management, our automotive BPO specialists keep your business in high gear.",
    bullets: [
      "Dealer network support & coordination",
      "Warranty claims processing & adjudication",
      "Parts ordering & inventory management",
      "Connected vehicle & EV customer support"
    ],
    primaryCta: "Accelerate Automotive Ops",
    secondaryCta: "View Automotive Brief",
    visualIcon: "Car",
    visualList: ["Dealer management dashboards", "Warranty claims platforms", "Parts inventory screens", "Connected car support consoles"],
    certifications: [
      { id: "c1", name: "ISO 27001" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "IATF 16949" },
      { id: "c4", name: "GDPR" }
    ],
    clientSuccess: {
      stat1: "60+ Automotive clients",
      stat2: "97% Dealer satisfaction score"
    }
  },

  services: {
    title: "End-to-End Automotive BPO Solutions",
    gridItems: [
      {
        title: "DEALER SUPPORT",
        features: ["Dealer Helpdesk", "Sales Lead Routing", "Finance & Insurance Ops", "Inventory Uploads", "Dealer Portal Support"]
      },
      {
        title: "WARRANTY & RECALLS",
        features: ["Warranty Claims Processing", "Recall Campaign Mgmt", "Technical Hotlines", "Parts Return Coordination", "Goodwill Processing"]
      },
      {
        title: "PARTS & ACCESSORIES",
        features: ["Parts Ordering", "Inventory Management", "Pricing Support", "Return Authorizations", "Supplier Coordination"]
      },
      {
        title: "CUSTOMER SERVICES",
        features: ["Owner Helplines", "Roadside Assistance Coord.", "Connected Car Support", "EV Customer Support", "Service Scheduling"]
      },
      {
        title: "FLEET MANAGEMENT",
        features: ["Fleet Account Support", "Telematics Data Ops", "Maintenance Scheduling", "Driver Support Lines", "Fuel Card Mgmt"]
      },
      {
        title: "BACK OFFICE",
        features: ["Invoice Processing", "Compliance Reporting", "Market Research Support", "Data Entry", "Regulatory Filings"]
      }
    ]
  },

  compliance: {
    title: "Automotive-Grade Compliance",
    cards: [
      { title: "QUALITY STANDARDS", bullets: ["IATF 16949 Awareness", "Zero-Defect Culture", "Root Cause Analysis", "Continuous Improvement"] },
      { title: "DATA SECURITY", bullets: ["Connected Vehicle Data Privacy", "Encrypted DMS Access", "GDPR Compliance", "CCPA Aligned"] },
      { title: "REGULATORY COMPLIANCE", bullets: ["NHTSA Recall Compliance", "Consumer Protection Laws", "Warranty Act Compliance", "Regional Regulations"] }
    ],
    securityMeasures: [
      { id: "s1", text: "Connected vehicle data handled under GDPR/CCPA" },
      { id: "s2", text: "Encrypted DMS and CRM access for all agents" },
      { id: "s3", text: "NHTSA recall campaign compliance protocols" },
      { id: "s4", text: "Role-based access for OEM and dealer platforms" },
      { id: "s5", text: "Multi-factor authentication for all portals" },
      { id: "s6", text: "Regular quality audits aligned to IATF standards" },
      { id: "s7", text: "Warranty fraud detection and prevention controls" },
      { id: "s8", text: "24/7 monitoring of critical dealer support lines" }
    ]
  },

  technology: {
    title: "Integrated with Leading Automotive Platforms",
    categories: [
      { title: "DMS SYSTEMS", items: ["CDK Global", "Reynolds & Reynolds", "Dealertrack", "Tekion", "DealSocket"] },
      { title: "WARRANTY SYSTEMS", items: ["Siemens Teamcenter", "PTC Windchill", "Tavant Warranty", "Mize Warranty", "ServiceBench"] },
      { title: "CRM & LEADS", items: ["Salesforce Automotive Cloud", "VinSolutions", "DealSocket CRM", "Elead CRM", "Momentum CRM"] },
      { title: "PARTS MGMT", items: ["CDK Parts Stocking", "Reynolds PartScan", "Epicor Activant", "ASR Pro", "AutoCat"] },
      { title: "FLEET TELEMATICS", items: ["Samsara", "Verizon Connect", "Geotab", "Trimble", "Wex Fleet"] },
      { title: "ANALYTICS", items: ["Tableau", "Power BI", "IHS Markit Data", "Dealer.com Analytics", "Snowflake"] }
    ]
  },

  segments: {
    title: "Expertise Across Automotive Verticals",
    tabs: ["All", "OEMs", "Dealers", "Fleet", "EV"],
    items: [
      {
        name: "OEMs", title: "AUTOMOTIVE OEMS",
        clientsCount: "15+",
        services: ["Dealer Network Support", "Warranty Ops", "Technical Hotlines", "Recall Mgmt"]
      },
      {
        name: "Dealers", title: "FRANCHISED DEALERS & GROUPS",
        clientsCount: "35+",
        services: ["Lead Management", "F&I Support", "Parts Ordering", "Service Scheduling"]
      },
      {
        name: "Fleet", title: "FLEET MANAGERS & RENTAL",
        clientsCount: "15+",
        services: ["Fleet Account Support", "Telematics Ops", "Driver Helplines", "Maintenance Mgmt"]
      },
      {
        name: "EV", title: "EV & MOBILITY COMPANIES",
        clientsCount: "10+",
        services: ["EV Owner Support", "Charging Network Help", "Software Update Mgmt", "Subscription Billing"]
      }
    ]
  },

  metrics: {
    title: "Automotive Operations Performance",
    items: [
      { label: "Warranty Accuracy Rate", value: "99.6%", progressPercent: 99.6 },
      { label: "Dealer CSAT Score", value: "97%", progressPercent: 97 },
      { label: "Parts Processing Speed", value: "40% Faster", progressPercent: 75 },
      { label: "Cost Per Claim Reduction", value: "30%", progressPercent: 65 }
    ]
  },

  cta: {
    primaryBtn: "Talk to an Automotive Expert",
    secondaryBtn: "Download Automotive Case Study"
  }
};
