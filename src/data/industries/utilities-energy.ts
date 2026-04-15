import { IndustryPageData } from "@/types/industries";

export const utilitiesEnergyData: IndustryPageData = {
  title: "Utilities & Energy BPO Solutions | Claritiy",
  description: "Reliable billing support, field service coordination, and customer management for energy, water, and utility providers.",
  slug: "utilities-energy",
  breadcrumb: "Utilities & Energy",

  heroData: {
    badgeIcon: "Zap",
    badgeText: "Utilities & Energy",
    headline: "Powering Reliable Utility Operations",
    subheading: "Deliver exceptional service to millions of customers with scalable billing, outage management, and field support operations.",
    bullets: [
      "Smart meter billing & query resolution",
      "Outage management & emergency dispatch",
      "Field service scheduling & coordination",
      "Energy deregulation switching support"
    ],
    primaryCta: "Optimize Utility Ops",
    secondaryCta: "View Energy Brief",
    visualIcon: "Zap",
    visualList: ["Smart meter billing screens", "Field service dispatch dashboards", "Outage management maps", "Customer self-service portals"],
    certifications: [
      { id: "c1", name: "ISO 27001" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "NERC CIP" },
      { id: "c4", name: "GDPR" }
    ],
    clientSuccess: {
      stat1: "90+ Utility clients globally",
      stat2: "99.5% Billing accuracy"
    }
  },

  services: {
    title: "Comprehensive Utilities & Energy BPO",
    gridItems: [
      {
        title: "BILLING & PAYMENTS",
        features: ["Bill Presentment", "AMI/Smart Meter Queries", "Payment Processing", "Dispute Resolution", "Arrears Management"]
      },
      {
        title: "CUSTOMER CARE",
        features: ["New Service Connections", "Outage Notifications", "Move-In/Move-Out", "Energy Efficiency Tips", "Rate Plan Inquiries"]
      },
      {
        title: "FIELD SERVICE SUPPORT",
        features: ["Technician Scheduling", "Work Order Management", "Meter Reading Support", "Safety Notifications", "Dispatch Coordination"]
      },
      {
        title: "OUTAGE MANAGEMENT",
        features: ["Emergency Hotlines", "Outage Ticketing", "ETA Communication", "Priority Customer Routing", "Post-Outage Follow-up"]
      },
      {
        title: "RENEWABLE ENERGY",
        features: ["Solar Incentive Support", "EV Charging Queries", "Net Metering", "Green Tariff Enrollment", "Rebate Processing"]
      },
      {
        title: "REGULATORY & COMPLIANCE",
        features: ["Low-Income Program Admin", "LIHEAP Processing", "Regulatory Reporting", "Tariff Administration", "Audit Support"]
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
