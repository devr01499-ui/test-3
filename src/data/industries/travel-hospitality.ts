import { IndustryPageData } from "@/types/industries";

export const travelHospitalityData: IndustryPageData = {
  title: "Travel & Hospitality BPO Solutions | Claritiy",
  description: "24/7 guest services, booking management, and loyalty support for airlines, hotels, and travel agencies.",
  slug: "travel-hospitality",
  breadcrumb: "Travel & Hospitality",

  heroData: {
    badgeIcon: "Plane",
    badgeText: "Institutional Guest Mastery",
    headline: "Travel Integrity: Advanced Guest Lifecycle & Booking Orchestration",
    subheading: "Elevate your global guest experiences with 24/7 institutional-grade booking support, concierge services, and mission-critical loyalty management.",
    bullets: [
      "24/7/365 Native Multilingual Guest Engagement Hubs",
      "Strategic Real-Time GDS & PMS Integrity Integration",
      "Institutional Loyalty Program Orchestration & Retention",
      "Mission-Critical Peak Season Surge Resilience"
    ],
    primaryCta: "Boost Guest Index",
    secondaryCta: "Access Travel Brief",
    visualIcon: "Plane",
    visualList: ["Institutional Reservation Control Centers", "Neural Loyalty Integrity Dashboards", "Global Multilingual Agent Hubs", "Mission-Critical Booking Resilience Screens"],
    certifications: [
      { id: "c1", name: "PCI DSS v4.0" },
      { id: "c2", name: "ISO 27001:2022" },
      { id: "c3", name: "GDPR Verified" },
      { id: "c4", name: "IATA Regulatory Accredited" }
    ],
    clientSuccess: {
      stat1: "200+ Institutional Travel Partners",
      stat2: "96.5% Verified Guest CSAT"
    }
  },

  services: {
    title: "Full-Spectrum Institutional Travel Solutions",
    gridItems: [
      {
        title: "STRATEGIC RESERVATIONS",
        features: ["Institutional Flight Reservations", "Neural Hotel Booking Hubs", "Strategic Car Rental Support", "Verified Itinerary Orchestration", "Institutional Group Booking Logic"]
      },
      {
        title: "GUEST STEWARDSHIP",
        features: ["24/7 Mission-Critical Concierge", "Neural Check-in/out Hubs", "Strategic Special Requests", "Verified Complaint Adjudication", "Institutional Loyalty Inquiries"]
      },
      {
        title: "LOYALTY ORCHESTRATION",
        features: ["Institutional Points Integrity", "Neural Tier Upgrade Logic", "Strategic Redemption Support", "Verified Member Retention", "Institutional Partner Reward Mesh"]
      },
      {
        title: "REGULATORY BACK OFFICE",
        features: ["Institutional Invoice Processing", "Verified Commission Reconciliation", "Neural Refund Adjudication", "Strategic Regulatory Analytics", "Precision Data Integrity"]
      },
      {
        title: "AGENCY ECOSYSTEM SUPPORT",
        features: ["Institutional GDS Ticketing", "Verified Visa Assistance", "Strategic Travel Insurance Ops", "Neural Package Customization", "Institutional Agent Excellence"]
      },
      {
        title: "MISSION-CRITICAL CRISIS OPS",
        features: ["Institutional Disruption Rebooking", "Neural Natural Disaster Response", "Strategic Medical Coordination", "Verified Mass Cancellation Logic", "Institutional Overflow Resilience"]
      }
    ]
  },

  compliance: {
    title: "Secure & Compliant Travel Operations",
    cards: [
      { title: "DATA PRIVACY", bullets: ["GDPR Compliant", "CCPA Aligned", "Encrypted PII Storage", "Consent Management"] },
      { title: "PAYMENT SECURITY", bullets: ["PCI DSS Level 1", "Tokenized Payments", "Fraud Prevention", "Secure Vaults"] },
      { title: "INDUSTRY STANDARDS", bullets: ["IATA Procedures", "ATOL Awareness", "NDC Compliant", "GDS Accuracy Checks"] }
    ],
    securityMeasures: [
      { id: "s1", text: "Encrypted passenger data at rest and in transit" },
      { id: "s2", text: "Multi-factor authentication for all agents" },
      { id: "s3", text: "PCI DSS compliant payment handling" },
      { id: "s4", text: "Role-based access for GDS systems" },
      { id: "s5", text: "24/7 fraud and anomaly monitoring" },
      { id: "s6", text: "Regular third-party security audits" },
      { id: "s7", text: "Disaster recovery and BCP protocols" },
      { id: "s8", text: "GDPR data subject request handling" }
    ]
  },

  technology: {
    title: "Integrated with Leading Travel Platforms",
    categories: [
      { title: "GDS SYSTEMS", items: ["Amadeus", "Sabre", "Travelport Galileo", "Worldspan", "Apollo"] },
      { title: "HOTEL PMS", items: ["Opera Cloud", "Cloudbeds", "Hotelogix", "RoomKey", "Mews"] },
      { title: "CRM & SUPPORT", items: ["Salesforce Travel Cloud", "Zendesk", "Freshdesk", "Genesys", "Five9"] },
      { title: "BOOKING ENGINES", items: ["Booking.com API", "Expedia Partner", "Airbnb for Work", "TravelClick", "Sabre Red"] },
      { title: "LOYALTY PLATFORMS", items: ["Comarch Loyalty", "Loyalty Ventures", "Points.com", "Aptech", "Agilysys"] },
      { title: "ANALYTICS", items: ["Tableau", "Power BI", "STR Data", "OTA Insight", "Custom Dashboards"] }
    ]
  },

  segments: {
    title: "Tailored Expertise Across Travel Verticals",
    tabs: ["All", "Airlines", "Hotels", "OTAs", "Cruise", "Tour Operators"],
    items: [
      {
        name: "Airlines", title: "AIRLINES & LOW-COST CARRIERS",
        clientsCount: "50+",
        services: ["Reservations", "Disruption Mgmt", "FFP Support", "Cargo Ops"]
      },
      {
        name: "Hotels", title: "HOTELS & RESORTS",
        clientsCount: "80+",
        services: ["Guest Relations", "Reservations", "Loyalty Mgmt", "Revenue Ops"]
      },
      {
        name: "OTAs", title: "ONLINE TRAVEL AGENCIES",
        clientsCount: "40+",
        services: ["Customer Support", "Supplier Relations", "Refunds", "Content Ops"]
      },
      {
        name: "Cruise", title: "CRUISE LINES",
        clientsCount: "15+",
        services: ["Booking Support", "Shore Excursions", "Loyalty Tiers", "Travel Docs"]
      },
      {
        name: "Tour Operators", title: "TOUR OPERATORS & DMCs",
        clientsCount: "30+",
        services: ["Itinerary Support", "B2B Partner Helpdesk", "Custom Packaging", "Invoicing"]
      }
    ]
  },

  metrics: {
    title: "Travel Operations Performance",
    items: [
      { label: "Booking Accuracy Rate", value: "99.7%", progressPercent: 99.7 },
      { label: "Guest CSAT Score", value: "96%", progressPercent: 96 },
      { label: "Average Handle Time Reduction", value: "30%", progressPercent: 70 },
      { label: "Peak Season Scalability", value: "3x", progressPercent: 85 }
    ]
  },

  cta: {
    primaryBtn: "Talk to a Travel Expert",
    secondaryBtn: "Download Travel Case Study"
  }
};
