import { IndustryPageData } from "@/types/industries";

export const travelHospitalityData: IndustryPageData = {
  title: "Travel & Hospitality BPO Solutions | Claritiy",
  description: "24/7 guest services, booking management, and loyalty support for airlines, hotels, and travel agencies.",
  slug: "travel-hospitality",
  breadcrumb: "Travel & Hospitality",

  heroData: {
    badgeIcon: "Plane",
    badgeText: "Travel & Hospitality",
    headline: "Elevate Guest Experiences at Scale",
    subheading: "Deliver seamless 24/7 booking support, concierge services, and loyalty management to keep travelers coming back.",
    bullets: [
      "24/7 multilingual guest support",
      "Real-time GDS & PMS integration",
      "Loyalty program management",
      "Peak season surge capacity"
    ],
    primaryCta: "Boost Guest satisfaction",
    secondaryCta: "View Case Studies",
    visualIcon: "Plane",
    visualList: ["Reservation desks in action", "Loyalty platform dashboards", "Multilingual agent teams", "Real-time booking screens"],
    certifications: [
      { id: "c1", name: "PCI DSS" },
      { id: "c2", name: "ISO 27001" },
      { id: "c3", name: "GDPR" },
      { id: "c4", name: "IATA Accredited" }
    ],
    clientSuccess: {
      stat1: "200+ Travel & Hotel clients",
      stat2: "96% Guest satisfaction CSAT"
    }
  },

  services: {
    title: "Full-Spectrum Travel & Hospitality BPO",
    gridItems: [
      {
        title: "RESERVATIONS & BOOKING",
        features: ["Flight Reservations", "Hotel Bookings", "Car Rental Support", "Itinerary Management", "Group Bookings"]
      },
      {
        title: "GUEST SERVICES",
        features: ["24/7 Concierge", "Check-in/Check-out Support", "Special Requests", "Complaint Resolution", "Loyalty Inquiries"]
      },
      {
        title: "LOYALTY PROGRAMS",
        features: ["Points Management", "Tier Upgrades", "Redemption Support", "Member Retention", "Partner Rewards"]
      },
      {
        title: "BACK OFFICE",
        features: ["Invoice Processing", "Commission Reconciliation", "Refund Management", "Reporting & Analytics", "Data Entry"]
      },
      {
        title: "TRAVEL AGENCY SUPPORT",
        features: ["GDS Ticketing", "Visa Assistance", "Travel Insurance", "Package Customization", "Agent Training"]
      },
      {
        title: "CRISIS MANAGEMENT",
        features: ["Flight Disruption Rebooking", "Natural Disaster Response", "Medical Assistance Coord.", "Mass Cancellations", "Overflow Handling"]
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
