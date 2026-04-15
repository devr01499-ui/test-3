import { IndustryPageData } from "@/types/industries";

export const realEstateData: IndustryPageData = {
  title: "Real Estate BPO Solutions | Claritiy",
  description: "Lead generation, tenant services, property management support, and transaction coordination for global real estate firms.",
  slug: "real-estate",
  breadcrumb: "Real Estate",

  heroData: {
    badgeIcon: "Home",
    badgeText: "Real Estate",
    headline: "Scale Your Real Estate Operations",
    subheading: "From lead qualification to lease administration, our real estate BPO experts keep your portfolio and agents highly productive.",
    bullets: [
      "24/7 lead capture & qualification",
      "Tenant helpdesk & lease management",
      "Title & escrow support services",
      "MLS data management & compliance"
    ],
    primaryCta: "Scale Real Estate Ops",
    secondaryCta: "View Real Estate Brief",
    visualIcon: "Home",
    visualList: ["Lead management dashboards", "Tenant portal helpdesks", "Transaction coordination screens", "Property data management"],
    certifications: [
      { id: "c1", name: "ISO 27001" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "RESPA Aligned" },
      { id: "c4", name: "GDPR" }
    ],
    clientSuccess: {
      stat1: "100+ Real estate clients",
      stat2: "4.8/5 Tenant satisfaction"
    }
  },

  services: {
    title: "Full-Service Real Estate BPO",
    gridItems: [
      {
        title: "LEAD MANAGEMENT",
        features: ["Inbound Lead Capture", "Lead Qualification", "Appointment Setting", "CRM Data Entry", "Follow-up Campaigns"]
      },
      {
        title: "TENANT SERVICES",
        features: ["24/7 Tenant Helpdesk", "Maintenance Dispatch", "Lease Inquiries", "Move-in/Move-out Support", "Rent Collection Ops"]
      },
      {
        title: "TRANSACTION SUPPORT",
        features: ["Transaction Coordination", "Title Research", "Escrow Support", "Document Management", "Closing Coordination"]
      },
      {
        title: "PROPERTY MANAGEMENT",
        features: ["Listing Administration", "MLS Data Management", "Inspection Scheduling", "HOA Support", "Vendor Coordination"]
      },
      {
        title: "MORTGAGE & TITLE",
        features: ["Mortgage Processing", "Title Search", "Lien Verification", "Document Prep", "Closing Disclosure Support"]
      },
      {
        title: "DATA & ANALYTICS",
        features: ["Market Research", "Comp Analysis Support", "Portfolio Reporting", "Vacancy Tracking", "Revenue Forecasting"]
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
