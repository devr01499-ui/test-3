import { IndustryPageData } from "@/types/industries";

export const ecommerceRetailData: IndustryPageData = {
  title: "E-commerce & Retail BPO Solutions | Claritiy",
  description: "Scale your retail operations with AI-powered order management, customer support, and omnichannel retail excellence.",
  slug: "ecommerce-retail",
  breadcrumb: "E-commerce & Retail",

  heroData: {
    badgeIcon: "ShoppingCart",
    badgeText: "E-commerce & Retail",
    headline: "Scale Your Retail Operations with AI",
    subheading: "Drive customer loyalty and handle peak season surges with intelligent order processing and 24/7 omnichannel support.",
    bullets: [
      "Omnichannel customer support",
      "AI-driven order management",
      "Seamless returns & refunds",
      "Real-time inventory sync"
    ],
    primaryCta: "Optimize Retail",
    secondaryCta: "Case Studies",
    visualIcon: "Package",
    visualList: ["Order fulfillment pipelines", "Customer service dashboards", "Inventory management scenes", "Technology integration"],
    certifications: [
      { id: "c1", name: "PCI DSS" },
      { id: "c2", name: "ISO 9001" },
      { id: "c3", name: "SOC 2" }
    ],
    clientSuccess: {
      stat1: "1000+ Retail clients",
      stat2: "99% Order accuracy"
    }
  },

  services: {
    title: "Comprehensive E-commerce Solutions",
    gridItems: [
      {
        title: "CUSTOMER CARE",
        features: ["Inquiries & Support", "Live Chat & Email", "Social Media Care", "Loyalty Programs", "Multilingual Support"]
      },
      {
        title: "ORDER MANAGEMENT",
        features: ["Order Entry & Verification", "Payment Processing", "Billing & Invoicing", "Fraud Prevention", "Subscription Billing"]
      },
      {
        title: "LOGISTICS & CX",
        features: ["Returns Management", "Refund Processing", "Delivery Coordination", "Stock Updates", "Supplier Support"]
      },
      {
        title: "SALES & GROWTH",
        features: ["Lead Qualification", "Upselling & Cross-selling", "Cart Abandonment Recovery", "Market Research"]
      },
      {
        title: "DIGITAL CATALOG",
        features: ["Product Information Mgmt", "Content Moderation", "Image Enhancement", "Price Monitoring"]
      },
      {
        title: "ADMIN OPERATIONS",
        features: ["Virtual Assistance", "Data Entry", "Inventory Audits", "Vendor Coordination"]
      }
    ]
  },

  compliance: {
    title: "Secure Retail Operations",
    cards: [
      { title: "PCI COMPLIANCE", bullets: ["Level 1 Service Provider", "Tokenized Payments", "Secure Data Handling", "Annual Audits"] },
      { title: "GDPR/CCPA", bullets: ["Data Privacy Protocls", "Right to Erasure", "Secure PII Storage", "Global Compliance"] },
      { title: "SOC 2 TYPE 2", bullets: ["Security Controls", "Availability Matrix", "Processing Integrity", "Privacy Standards"] }
    ],
    securityMeasures: [
      { id: "s1", text: "End-to-end payment encryption" },
      { id: "s2", text: "PCI DSS certified facilities" },
      { id: "s3", text: "Multi-factor authentication" },
      { id: "s4", text: "Secure data centers" },
      { id: "s5", text: "Real-time fraud monitoring" },
      { id: "s6", text: "Data privacy training" },
      { id: "s7", text: "Business continuity planning" },
      { id: "s8", text: "Secure remote access" }
    ]
  },

  technology: {
    title: "Integrated with Retail Platforms",
    categories: [
      { title: "E-COMMERCE PLATFORMS", items: ["Shopify Plus", "Magento (Adobe Commerce)", "BigCommerce", "Salesforce Commerce Cloud", "WooCommerce"] },
      { title: "OMS & ERP", items: ["NetSuite", "SAP", "Microsoft Dynamics 365", "Brightpearl", "Orderhive"] },
      { title: "CUSTOMER SERVICE", items: ["Zendesk", "Gorgias", "Freshdesk", "Intercom", "Gladly"] },
      { title: "PAYMENT GATEWAYS", items: ["Stripe", "PayPal", "Adyen", "Braintree", "Authorize.net"] },
      { title: "MARKETING & SALES", items: ["Klaviyo", "Mailchimp", "Attentive", "HubSpot", "Salesforce Sales Cloud"] },
      { title: "ANALYTICS", items: ["Tableau", "Power BI", "Google Analytics 4", "Mixpanel", "Amplitude"] }
    ]
  },

  segments: {
    title: "Serving All Retail Sectors",
    tabs: ["All", "Apparel", "Home", "Beauty", "Consumer Tech"],
    items: [
      {
        name: "Apparel", title: "APPAREL & FASHION",
        clientsCount: "300+",
        services: ["Customer Service", "Returns Mgmt", "Catalog Updates"]
      },
      {
        name: "Home", title: "HOME & LIFESTYLE",
        clientsCount: "250+",
        services: ["Order Processing", "Assembly Support", "Warranty Claims"]
      },
      {
        name: "Beauty", title: "BEAUTY & PERSONAL CARE",
        clientsCount: "180+",
        services: ["Subscription Mgmt", "Influencer Support", "Reviews Moderation"]
      },
      {
        name: "Consumer Tech", title: "CONSUMER ELECTRONICS",
        clientsCount: "120+",
        services: ["Tech Support", "RMA Processing", "Software Updates"]
      }
    ]
  },

  metrics: {
    title: "Retail Operational Metrics",
    items: [
      { label: "Average Response Time", value: "< 30 secs", progressPercent: 95 },
      { label: "Order Accuracy Rate", value: "99.9%", progressPercent: 99.9 },
      { label: "Customer Satisfaction (CSAT)", value: "94%", progressPercent: 94 },
      { label: "Refund Processing Speed", value: "< 24 hours", progressPercent: 98 }
    ]
  },

  cta: {
    primaryBtn: "Schedule Retail Consultation",
    secondaryBtn: "Download Retail Brief"
  }
};
