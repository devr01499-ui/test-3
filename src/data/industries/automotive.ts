import { IndustryPageData } from "@/types/industries";

export const automotiveData: IndustryPageData = {
  title: "Automotive BPO Solutions | Claritiy",
  description: "Dealer support, parts management, warranty claims, and customer operations for automotive OEMs, dealers, and fleet managers.",
  slug: "automotive",
  breadcrumb: "Automotive",

  heroData: {
    badgeIcon: "Car",
    badgeText: "Institutional Automotive Mastery",
    headline: "Automotive Integrity: Advanced Global Lifecycle Orchestration",
    subheading: "Orchestrate complex automotive operations and enhance dealer performance with institutional-grade technical support and mission-critical warranty adjudication.",
    bullets: [
      "Institutional Dealer Network Stewardship & Coordination",
      "Carrier-Grade Warranty Claims Adjudication",
      "Strategic Parts Integrity & Inventory Orchestration",
      "Institutional EV & Connected Vehicle CX Support"
    ],
    primaryCta: "Architect Automotive Ops",
    secondaryCta: "Access Automotive Brief",
    visualIcon: "Car",
    visualList: ["Institutional Dealer Management Control", "Neural Warranty Adjudication Platforms", "Global Parts Inventory Hubs", "Mission-Critical Connected Car Consoles"],
    certifications: [
      { id: "c1", name: "ISO 27001:2022" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "IATF 16949 Mastered" },
      { id: "c4", name: "GDPR Verified" }
    ],
    clientSuccess: {
      stat1: "60+ Institutional Automotive Partners",
      stat2: "97.5% Dealer Satisfaction Index"
    }
  },

  services: {
    title: "End-to-End Institutional Automotive Solutions",
    gridItems: [
      {
        title: "STRATEGIC DEALER STEWARDSHIP",
        features: ["Institutional Dealer Helpdesk", "Neural Sales Lead Orchestration", "Strategic Finance & Insurance Ops", "High-Resolution Inventory Hubs", "Institutional Dealer Portal Support"]
      },
      {
        title: "MISSION-CRITICAL WARRANTY & RECALLS",
        features: ["Institutional Warranty Claims Adjudication", "Global Recall Lifecycle Management", "Strategic Technical Hotlines", "Neural Parts Return Coordination", "Institutional Goodwill Orchestration"]
      },
      {
        title: "PRECISION PARTS & ACCESSORIES",
        features: ["Institutional Parts Orchestration", "Neural Inventory Integrity", "Strategic Pricing Support Hubs", "Verified Return Authorizations", "Global Supplier Coordination Logic"]
      },
      {
        title: "INSTITUTIONAL CUSTOMER SERVICES",
        features: ["High-tier Owner Helplines", "Mission-Critical Roadside Coordination", "Strategic Connected Car Support", "Institutional EV Customer Support", "Frictionless Service Scheduling"]
      },
      {
        title: "STRATEGIC FLEET MANAGEMENT",
        features: ["Institutional Fleet Account Support", "Neural Telematics Data Operations", "Strategic Maintenance Orchestration", "Global Driver Support Lines", "Institutional Fuel Account Stewardship"]
      },
      {
        title: "REGULATORY BACK OFFICE",
        features: ["Institutional Invoice Processing", "Global Compliance Reporting", "Strategic Market Intelligence Support", "High-Precision Data Entry", "Regulatory Institutional Filings"]
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
