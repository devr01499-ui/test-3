import { IndustryPageData } from "@/types/industries";

export const nonProfitData: IndustryPageData = {
  title: "Non-Profit BPO Solutions | Claritiy",
  description: "Donor support, volunteer coordination, grant management, and administrative scaling for non-profit and charitable organizations.",
  slug: "non-profit",
  breadcrumb: "Non-Profit",

  heroData: {
    badgeIcon: "Heart",
    badgeText: "Institutional Mission Mastery",
    headline: "Mission Integrity: Advanced Non-Profit & Donor Orchestration",
    subheading: "Enable your non-profit to orchestrate massive global impact. We deliver institutional-grade donor stewardship, grant lifecycle management, and mission-critical administrative scaling.",
    bullets: [
      "Institutional Donor Acquisition & Strategic Stewardship Programs",
      "Strategic Grant Research, Writing & Regulatory Reporting",
      "Institutional Volunteer Orchestration & Coordination Hubs",
      "Mission-Aligned Staff with Deep Sector Integrity Expertise"
    ],
    primaryCta: "Amplify Your Mission",
    secondaryCta: "Access Non-Profit Brief",
    visualIcon: "Heart",
    visualList: ["Institutional Donor Management Hubs", "Neural Volunteer Coordination Centers", "Global Grant Tracking Meshes", "Mission-Critical Impact Reporting Screens"],
    certifications: [
      { id: "c1", name: "ISO 27001:2022 Verified" },
      { id: "c2", name: "SOC 2 Type II" },
      { id: "c3", name: "PCI DSS v4.0" },
      { id: "c4", name: "GDPR Verified" }
    ],
    clientSuccess: {
      stat1: "100+ Institutional Global Partners",
      stat2: "35% Verified Fundraising Lift"
    }
  },

  services: {
    title: "Full Institutional Non-Profit Support Solutions",
    gridItems: [
      {
        title: "STRATEGIC DONOR SERVICES",
        features: ["Institutional Donor Acquisition", "Verified Pledge Processing", "Strategic Major Donor Stewardship", "Neural Recurring Gift Management", "Institutional Lapsed Donor Win-back"]
      },
      {
        title: "FUNDRAISING ORCHESTRATION",
        features: ["Strategic Telefundraising Hubs", "Neural Direct Mail Operations", "Global Crowdfunding Support", "Institutional Event Fundraising", "Strategic Corporate Matching Logic"]
      },
      {
        title: "GRANT LIFECYCLE OPS",
        features: ["Institutional Grant Research", "Neural Application Support", "Regulatory Compliance Reporting", "Strategic Budget Tracking Hubs", "Institutional Funder Relations"]
      },
      {
        title: "VOLUNTEER ORCHESTRATION",
        features: ["Institutional Volunteer Recruitment", "Neural Scheduling & Coordination", "Strategic Training Administration", "Verified Hours Tracking", "Institutional Volunteer Comms"]
      },
      {
        title: "MISSION COMMUNICATIONS",
        features: ["Institutional Newsletter Operations", "Strategic Social Mesh Management", "Neural Annual Report Support", "Institutional Donor Comms", "Strategic Advocacy Campaigns"]
      },
      {
        title: "REGULATORY ADMIN OPS",
        features: ["Institutional Bookkeeping Support", "Strategic Board Meeting Admin", "Regulatory Compliance Filings", "Neural CRM Data Integrity", "Institutional Impact Reporting"]
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
