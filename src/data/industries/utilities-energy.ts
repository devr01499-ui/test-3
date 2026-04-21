import { IndustryPageData } from "@/types/industries";

export const utilitiesEnergyData: IndustryPageData = {
  title: "Utilities & Energy BPO Solutions | Claritiy",
  description: "Reliable billing support, field service coordination, and customer management for energy, water, and utility providers.",
  slug: "utilities-energy",
  breadcrumb: "Utilities & Energy",

  heroData: {
    badgeIcon: "Zap",
    badgeText: "Institutional Utility Mastery",
    headline: "Utility Integrity: Advanced Infrastructure & Billing Orchestration",
    subheading: "Orchestrate critical infrastructure support and enhance operational resilience with institutional-grade billing, outage management, and field resource coordination.",
    bullets: [
      "Institutional-Grade Smart Meter Billing & Neural Query Resolution",
      "Strategic Outage Management & Global Emergency Dispatch Hubs",
      "Institutional Field Service Orchestration & Resource Coordination",
      "Mission-Critical Energy Deregulation Switching Integrity Support"
    ],
    primaryCta: "Architect Utility Ops",
    secondaryCta: "Access Energy Brief",
    visualIcon: "Zap",
    visualList: ["Institutional Billing Integrity Hubs", "Neural Dispatch Orchestration Centers", "Global Outage Management Meshes", "Mission-Critical Self-Service Frameworks"],
    certifications: [
      { id: "c1", name: "ISO 27001:2022 Verified" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "NERC CIP Regulatory Standards" },
      { id: "c4", name: "GDPR Verified" }
    ],
    clientSuccess: {
      stat1: "90+ Institutional Global Partners",
      stat2: "99.95% Billing Integrity Index"
    }
  },

  services: {
    title: "Comprehensive Institutional Utilities Solutions",
    gridItems: [
      {
        title: "PRECISION BILLING & REVENUE",
        features: ["Institutional Bill Presentment", "Neural AMI/Smart Meter Queries", "Verified Payment Processing", "Strategic Dispute Adjudication", "Institutional Arrears Stewardship"]
      },
      {
        title: "STRATEGIC CUSTOMER CARE",
        features: ["Institutional Service Connections", "Neural Outage Notifications", "Strategic Move-In/Out Flow", "Global Energy Efficiency Intel", "Institutional Rate Plan Adjudication"]
      },
      {
        title: "FIELD RESOURCE ORCHESTRATION",
        features: ["Institutional Technician Scheduling", "Neural Work Order Lifecycle", "Strategic Meter Reading Hubs", "Global Safety Notifications", "Institutional Dispatch Orchestration"]
      },
      {
        title: "MISSION-CRITICAL OUTAGE OPS",
        features: ["Institutional Emergency Hotlines", "Neural Outage Adjudication", "Strategic ETA Communication", "Global Priority Routing Logic", "Institutional Post-Event Follow-up"]
      },
      {
        title: "RENEWABLE ECOSYSTEM OPS",
        features: ["Institutional Solar Incentive Support", "Neural EV Charging Intelligence", "Strategic Net Metering Flows", "Global Green Tariff Enrollment", "Institutional Rebate Adjudication"]
      },
      {
        title: "REGULATORY & PUBLIC COMPLIANCE",
        features: ["Institutional Low-Income Program Admin", "Neural LIHEAP Integrity Processing", "Strategic Regulatory Reporting", "Global Tariff Administration", "Institutional Audit Stewardship"]
      }
    ]
  },

  compliance: {
    title: "Utility-Grade Security & Compliance",
    cards: [
      { title: "CRITICAL INFRASTRUCTURE", bullets: ["NERC CIP Standards", "Cybersecurity Controls", "Operational Resilience", "Incident Response"] },
      { title: "DATA PROTECTION", bullets: ["Smart Meter Data Privacy", "Customer Consent Mgmt", "Encrypted Communications", "GDPR/CCPA Aligned"] },
      { title: "REGULATORY STANDARDS", bullets: ["FERC Compliance", "State PUC Rules", "Low-Income Program Mgmt", "Tariff Administration"] }
    ],
    securityMeasures: [
      { id: "s1", text: "NERC CIP compliant operations for critical infrastructure" },
      { id: "s2", text: "Smart meter data encryption at rest and in transit" },
      { id: "s3", text: "Network segmentation between utility systems" },
      { id: "s4", text: "Multi-factor authentication for dispatch systems" },
      { id: "s5", text: "24/7 security operations center monitoring" },
      { id: "s6", text: "Business continuity plans for outage scenarios" },
      { id: "s7", text: "Regular tabletop exercises for emergency scenarios" },
      { id: "s8", text: "Third-party security audits annually" }
    ]
  },

  technology: {
    title: "Integrated with Leading Utility Platforms",
    categories: [
      { title: "CIS/BILLING", items: ["Oracle CC&B", "SAP IS-U", "Cayenta", "Milsoft Utility Solutions", "Gentrack"] },
      { title: "OUTAGE MANAGEMENT", items: ["Oracle OMS", "Schneider ADMS", "GE ADMS", "Survalent SCADA", "Milsoft OMS"] },
      { title: "FIELD SERVICE", items: ["ClickSoftware", "Oracle FSM", "SAP Field Service", "IFS FSM", "ServiceMax"] },
      { title: "SMART METERING", items: ["Itron AMI", "Landis+Gyr", "Sensus", "Elster", "Aclara"] },
      { title: "CRM & SUPPORT", items: ["Salesforce Energy Cloud", "Zendesk", "ServiceNow", "Pegasystems", "Genesys"] },
      { title: "ANALYTICS", items: ["Tableau", "Power BI", "Oracle Analytics", "Esri GIS", "Snowflake"] }
    ]
  },

  segments: {
    title: "Tailored for Every Energy Sector",
    tabs: ["All", "Electric", "Gas", "Water", "Renewable"],
    items: [
      {
        name: "Electric", title: "ELECTRIC UTILITIES",
        clientsCount: "40+",
        services: ["Billing Support", "Outage Management", "Smart Meter Queries", "Connection Services"]
      },
      {
        name: "Gas", title: "NATURAL GAS PROVIDERS",
        clientsCount: "20+",
        services: ["Account Mgmt", "Emergency Line", "Meter Reading", "Safety Calls"]
      },
      {
        name: "Water", title: "WATER & WASTEWATER",
        clientsCount: "15+",
        services: ["Billing Disputes", "Conservation Programs", "Service Connections", "Leak Reports"]
      },
      {
        name: "Renewable", title: "RENEWABLE ENERGY PROVIDERS",
        clientsCount: "20+",
        services: ["Solar Onboarding", "Net Metering", "EV Incentives", "Green Tariff Enrollment"]
      }
    ]
  },

  metrics: {
    title: "Utility Operations Performance",
    items: [
      { label: "Billing Accuracy", value: "99.5%", progressPercent: 99.5 },
      { label: "Outage Response Time", value: "< 2 mins", progressPercent: 95 },
      { label: "First Contact Resolution", value: "88%", progressPercent: 88 },
      { label: "Operational Cost Reduction", value: "32%", progressPercent: 65 }
    ]
  },

  cta: {
    primaryBtn: "Talk to a Utilities Expert",
    secondaryBtn: "Download Energy Case Study"
  }
};
