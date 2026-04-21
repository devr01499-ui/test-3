import { IndustryPageData } from "@/types/industries";

export const realEstateData: IndustryPageData = {
  title: "Real Estate BPO Solutions | Claritiy",
  description: "Lead generation, tenant services, property management support, and transaction coordination for global real estate firms.",
  slug: "real-estate",
  breadcrumb: "Real Estate",

  heroData: {
    badgeIcon: "Home",
    badgeText: "Institutional Real Estate Mastery",
    headline: "Real Estate Integrity: Advanced Portfolio & Transaction Orchestration",
    subheading: "Empower your real estate institution with high-precision lead qualification, tenant stewardship, and architectural lease administration. We deliver scalable, RESPA-grade operational integrity.",
    bullets: [
      "24/7/365 Institutional Lead Capture & Qualification Hubs",
      "Strategic Tenant Helpdesk & Lease Lifecycle Management",
      "Institutional Title, Escrow & Transaction Support",
      "Global MLS Data Orchestration & Regulatory Compliance"
    ],
    primaryCta: "Architect Real Estate Ops",
    secondaryCta: "Access Real Estate Brief",
    visualIcon: "Home",
    visualList: ["Institutional Lead Management Hubs", "Tenant Stewardship Control Centers", "Transaction Coordination Resilience Hubs", "Global Property Data Integrity Mesh"],
    certifications: [
      { id: "c1", name: "ISO 27001:2022" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "RESPA Institutional Aligned" },
      { id: "c4", name: "GDPR Verified" }
    ],
    clientSuccess: {
      stat1: "100+ Institutional Partners",
      stat2: "4.8/5 Verified Tenant CSAT Index"
    }
  },

  services: {
    title: "Full-Service Institutional Real Estate BPO",
    gridItems: [
      {
        title: "STRATEGIC LEAD MANAGEMENT",
        features: ["Institutional Inbound Capture", "Neural Lead Qualification", "Strategic Appointment Setting", "Institutional CRM Integrity", "Precision Follow-up Campaigns"]
      },
      {
        title: "TENANT STEWARDSHIP",
        features: ["24/7 Mission-Critical Helpdesk", "Neural Maintenance Dispatch", "Institutional Lease Inquiries", "Strategic Move-in/out Support", "Secure Rent Collection Ops"]
      },
      {
        title: "TRANSACTION ORCHESTRATION",
        features: ["Institutional Transaction Coordination", "High-Resolution Title Research", "Strategic Escrow Integrity Support", "Neural Document Stewardship", "Verified Closing Coordination"]
      },
      {
        title: "PROPERTY ADMINISTRATION",
        features: ["Institutional Listing Stewardship", "Global MLS Data Integrity", "Neural Inspection Scheduling", "Strategic HOA Support Hubs", "Institutional Vendor Coordination"]
      },
      {
        title: "MORTGAGE & TITLE INTEGRITY",
        features: ["Institutional Mortgage Processing", "High-Resolution Title Search", "Strategic Lien Verification", "Neural Document Preparation", "Verified Closing Disclosure Support"]
      },
      {
        title: "REAL ESTATE ANALYTICS",
        features: ["Institutional Market Intelligence", "Neural Comp Analysis Support", "Strategic Portfolio Reporting", "Global Vacancy Tracking Hubs", "Precision Revenue Forecasting"]
      }
    ]
  },

  compliance: {
    title: "Compliant Real Estate Operations",
    cards: [
      { title: "TRANSACTION COMPLIANCE", bullets: ["RESPA Aligned", "TRID Procedures", "Anti-Money Laundering", "Fair Housing Act"] },
      { title: "DATA SECURITY", bullets: ["Encrypted Client Data", "Role-Based Access", "Document Vault Security", "E-signature Compliance"] },
      { title: "LICENSING & STANDARDS", bullets: ["Licensed Staff Oversight", "MLS Rule Compliance", "NAR Code of Ethics Aware", "State Law Awareness"] }
    ],
    securityMeasures: [
      { id: "s1", text: "RESPA and TRID compliant transaction workflows" },
      { id: "s2", text: "Encrypted storage of all property and client data" },
      { id: "s3", text: "Role-based access for CRM and document management" },
      { id: "s4", text: "E-signature compliance (DocuSign, Adobe Sign)" },
      { id: "s5", text: "AML screening for high-value transactions" },
      { id: "s6", text: "Regular security audits and penetration testing" },
      { id: "s7", text: "Fair Housing Act training for all agents" },
      { id: "s8", text: "Secure disposal of sensitive transaction documents" }
    ]
  },

  technology: {
    title: "Integrated with Leading Real Estate Platforms",
    categories: [
      { title: "CRM SYSTEMS", items: ["Salesforce Real Estate", "kvCORE", "Follow Up Boss", "LionDesk", "Top Producer"] },
      { title: "PROPERTY MGMT", items: ["Yardi Voyager", "AppFolio", "Buildium", "MRI Software", "RealPage"] },
      { title: "TRANSACTION MGMT", items: ["Dotloop", "SkySlope", "Transaction Desk", "DocuSign", "Glide"] },
      { title: "LISTING PLATFORMS", items: ["Zillow Premier Agent", "Realtor.com", "MLS Grid", "Homes.com", "Redfin Partner"] },
      { title: "TITLE & ESCROW", items: ["SoftPro", "RamQuest", "Qualia", "ResWare", "Landtech"] },
      { title: "ANALYTICS", items: ["CoStar", "CBRE Insights", "Tableau", "Power BI", "ArcGIS"] }
    ]
  },

  segments: {
    title: "Expertise Across Real Estate Verticals",
    tabs: ["All", "Residential", "Commercial", "PropMgmt", "Mortgage"],
    items: [
      {
        name: "Residential", title: "RESIDENTIAL BROKERAGES",
        clientsCount: "50+",
        services: ["Lead Qualification", "Transaction Coord.", "Listing Admin", "Agent Support"]
      },
      {
        name: "Commercial", title: "COMMERCIAL REAL ESTATE",
        clientsCount: "25+",
        services: ["Tenant Inquiries", "Lease Admin", "Property Research", "Portfolio Reporting"]
      },
      {
        name: "PropMgmt", title: "PROPERTY MANAGEMENT FIRMS",
        clientsCount: "30+",
        services: ["Tenant Helpdesk", "Maintenance Dispatch", "Rent Collection", "Vendor Mgmt"]
      },
      {
        name: "Mortgage", title: "MORTGAGE COMPANIES",
        clientsCount: "20+",
        services: ["Loan Processing", "Title Search", "Underwriting Support", "Compliance Docs"]
      }
    ]
  },

  metrics: {
    title: "Real Estate Operations Performance",
    items: [
      { label: "Lead Conversion Rate", value: "+28%", progressPercent: 72 },
      { label: "Tenant CSAT Score", value: "4.8/5", progressPercent: 96 },
      { label: "Transaction Cycle Time", value: "25% Faster", progressPercent: 65 },
      { label: "Operational Cost Reduction", value: "38%", progressPercent: 70 }
    ]
  },

  cta: {
    primaryBtn: "Talk to a Real Estate Expert",
    secondaryBtn: "Download Real Estate Case Study"
  }
};
