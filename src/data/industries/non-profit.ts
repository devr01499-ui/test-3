import { IndustryPageData } from "@/types/industries";

export const nonProfitData: IndustryPageData = {
  title: "Non-Profit BPO Solutions | Claritiy",
  description: "Donor support, volunteer coordination, grant management, and administrative scaling for non-profit and charitable organizations.",
  slug: "non-profit",
  breadcrumb: "Non-Profit",

  heroData: {
    badgeIcon: "Heart",
    badgeText: "Non-Profit",
    headline: "Scale Your Mission, Not Your Overhead",
    subheading: "Enable your non-profit to do more good with expert donor support, volunteer coordination, and administrative operations.",
    bullets: [
      "Donor acquisition & stewardship programs",
      "Grant research, writing & reporting support",
      "Volunteer management & coordination",
      "Mission-aligned staff with sector expertise"
    ],
    primaryCta: "Amplify Your Mission",
    secondaryCta: "View Non-Profit Brief",
    visualIcon: "Heart",
    visualList: ["Donor management dashboards", "Volunteer coordination platforms", "Grant tracking systems", "Impact reporting screens"],
    certifications: [
      { id: "c1", name: "ISO 27001" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "PCI DSS" },
      { id: "c4", name: "GDPR" }
    ],
    clientSuccess: {
      stat1: "100+ Non-profits served globally",
      stat2: "35% Average fundraising lift"
    }
  },

  services: {
    title: "Full Non-Profit Operations Support",
    gridItems: [
      {
        title: "DONOR SERVICES",
        features: ["Donor Acquisition", "Pledge Processing", "Major Donor Stewardship", "Recurring Gift Mgmt", "Lapsed Donor Win-back"]
      },
      {
        title: "FUNDRAISING SUPPORT",
        features: ["Telefundraising", "Direct Mail Ops", "Crowdfunding Support", "Event Fundraising", "Corporate Matching"]
      },
      {
        title: "GRANT MANAGEMENT",
        features: ["Grant Research", "Application Support", "Compliance Reporting", "Budget Tracking", "Funder Relations"]
      },
      {
        title: "VOLUNTEER MANAGEMENT",
        features: ["Volunteer Recruitment", "Scheduling & Coordination", "Training Admin", "Hours Tracking", "Volunteer Comms"]
      },
      {
        title: "COMMUNICATIONS",
        features: ["Newsletter Operations", "Social Media Mgmt", "Annual Report Support", "Donor Comms", "Advocacy Campaigns"]
      },
      {
        title: "ADMINISTRATIVE OPS",
        features: ["Bookkeeping Support", "Board Meeting Admin", "Compliance Filings", "CRM Data Hygiene", "Impact Reporting"]
      }
    ]
  },

  compliance: {
    title: "Compliant & Transparent Non-Profit Operations",
    cards: [
      { title: "FISCAL COMPLIANCE", bullets: ["990 Filing Support", "Audit Trail Maintenance", "Board Reporting", "Restricted Fund Tracking"] },
      { title: "DONOR PRIVACY", bullets: ["GDPR Compliant", "No Donor Selling", "Secure Donation Processing", "Opt-out Management"] },
      { title: "FUNDRAISING STANDARDS", bullets: ["AFP Ethics Code Alignment", "State Charitable Registration", "PCI DSS Payments", "Truthful Solicitation"] }
    ],
    securityMeasures: [
      { id: "s1", text: "PCI DSS compliant online donation processing" },
      { id: "s2", text: "Encrypted donor personal and financial data" },
      { id: "s3", text: "Role-based access for all CRM platforms" },
      { id: "s4", text: "GDPR-compliant donor data management" },
      { id: "s5", text: "Strict no-donor-list-selling policy" },
      { id: "s6", text: "Audit trails for all donations and grants" },
      { id: "s7", text: "Annual staff training on AFP ethics standards" },
      { id: "s8", text: "Secure disposal of donor correspondence" }
    ]
  },

  technology: {
    title: "Integrated with Leading Non-Profit Platforms",
    categories: [
      { title: "DONOR MGMT (CRM)", items: ["Salesforce NPSP", "Blackbaud Raiser's Edge", "DonorPerfect", "Bloomerang", "NeonCRM"] },
      { title: "FUNDRAISING", items: ["Classy", "Donorbox", "Fundly", "GoFundMe Charity", "Qgiv"] },
      { title: "VOLUNTEER MGMT", items: ["VolunteerHub", "Better Impact", "Galaxy Digital", "SignUpGenius", "Volgistics"] },
      { title: "GRANT MGMT", items: ["Submittable", "Fluxx", "Foundant", "Blackbaud Grants Mgmt", "Salesforce Grants"] },
      { title: "COMMUNICATIONS", items: ["Constant Contact", "Mailchimp", "Hootsuite", "Canva Pro", "HubSpot Non-Profit"] },
      { title: "ANALYTICS", items: ["Tableau Non-Profit", "Power BI", "Google Data Studio", "Instrumentl", "Causeview"] }
    ]
  },

  segments: {
    title: "Supporting Diverse Mission Types",
    tabs: ["All", "Healthcare", "Education", "Environment", "Social Services"],
    items: [
      {
        name: "Healthcare", title: "HEALTH-FOCUSED NON-PROFITS",
        clientsCount: "25+",
        services: ["Patient Fund Mgmt", "Donor Stewardship", "Grant Reporting", "Volunteer Coord."]
      },
      {
        name: "Education", title: "EDUCATION FOUNDATIONS",
        clientsCount: "30+",
        services: ["Scholarship Admin", "Alumni Giving", "Major Gift Ops", "Event Support"]
      },
      {
        name: "Environment", title: "ENVIRONMENTAL ORGS",
        clientsCount: "20+",
        services: ["Membership Mgmt", "Campaign Support", "Advocacy Ops", "Data Management"]
      },
      {
        name: "Social Services", title: "SOCIAL SERVICES AGENCIES",
        clientsCount: "25+",
        services: ["Case Management", "Volunteer Mgmt", "Grant Compliance", "Community Outreach"]
      }
    ]
  },

  metrics: {
    title: "Non-Profit Impact Metrics",
    items: [
      { label: "Donor Retention Rate Lift", value: "+35%", progressPercent: 75 },
      { label: "Administrative Cost Reduction", value: "42%", progressPercent: 78 },
      { label: "Grant Success Rate", value: "68%", progressPercent: 68 },
      { label: "Volunteer Satisfaction Score", value: "4.7/5", progressPercent: 94 }
    ]
  },

  cta: {
    primaryBtn: "Scale Your Mission Today",
    secondaryBtn: "Download Non-Profit Case Study"
  }
};
