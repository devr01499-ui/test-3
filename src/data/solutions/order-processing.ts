import { SolutionPageData } from "@/types/solutions";

export const orderProcessingData: SolutionPageData = {
  title: "Order Processing Services | Claritiy",
  description: "Seamless end-to-end B2B and B2C order processing. From purchase order to fulfillment tracking with absolute precision.",
  slug: "order-processing",
  breadcrumb: "Order Processing",
  heroData: {
    badgeIcon: "ShoppingCart",
    badgeText: "Institutional Order Orchestration",
    headline: "Zero-Defect Fulfillment: Advanced Order Lifecycle Architecture",
    subheading: "Accelerate your global supply chain with institutional-grade order processing. We deliver scalable, high-precision orchestration from initial PO intake to final fulfillment tracking.",
    bullets: [
      "Institutional B2B Purchase Order (PO) Orchestration",
      "Enterprise E-Commerce Order Integrity Verification",
      "Global Returns & Reverse Logistics Management",
      "Real-Time Institutional Inventory Synchronization"
    ],
    primaryCta: "Architect Your Fulfillment",
    secondaryCta: "Access Processing Blueprint",
    visualIcon: "Package",
    visualText: "Institutional Order & Fulfillment Control Center",
    metricsOverlay: [
      { value: "99.95%", label: "Order Accuracy Index" },
      { value: "Sub-2h", label: "Entry Latency Performance" },
      { value: "30%+", label: "Admin OpEx Compression" }
    ]
  },
  quickStats: [{ icon: "PackageCheck", text: "10M+ Orders Processed" }, { icon: "Clock", text: "<2 Hour Turnaround" }, { icon: "Shield", text: "PCI DSS Compliant" }, { icon: "TrendingDown", text: "30% Reduction in Opex" }],
  services: {
    title: "End-to-End Institutional Management",
    items: [
      {
        title: "B2B Strategic Order Entry",
        icon: "FileText",
        features: ["Institutional PO Transcription", "Advanced EDI Discrepancy Resolution", "Quote-to-Cash Lifecycle Administration", "Strategic Credit Release Logic"]
      },
      {
        title: "Enterprise E-Commerce Operations",
        icon: "ShoppingCart",
        features: ["Strategic Fraud Integrity Review", "Global Fulfillment Routing", "Neural Dropship Orchestration", "Predictive Backorder Management"]
      },
      {
        title: "Institutional Reverse Logistics",
        icon: "ArrowLeftRight",
        features: ["High-Resolution RMA Generation", "Institutional Refund Orchestration", "Global Exchange Coordination", "Carrier-Grade Warranty Validation"]
      }
    ]
  },
  processFlow: {
    title: "Order Fulfillment Workflow", trigger: "Customer submits PO / Online Order", routerParams: "[RPA Engine] Extracts PO data into ERP",
    aiPath: { title: "Clean Order", subtitle: "Direct to Warehouse", color: "#10b981" },
    humanPath: { title: "Exception", subtitle: "Manual Verification", color: "#f59e0b" },
    qualityMonitor: "[Payment Gateway] Secures and validates transaction",
    benefits: [{ icon: "Zap", text: "Same-day processing" }, { icon: "ShieldAlert", text: "Fraud prevented" }, { icon: "CheckSquare", text: "Inventory aligned" }, { icon: "TrendingUp", text: "Faster revenue recognition" }]
  },
  features: {
    title: "Logistical Excellence", items: [
      { icon: "Cpu", title: "API Integrations", bullets: ["Shopify/Magento Hooks", "ERP Syncing", "Payment Gateways", "3PL connections"] },
      { icon: "Lock", title: "Secure Processing", bullets: ["PCI Compliance", "Tokenized Data", "Clean Room Ops", "Role-based Access"] },
      { icon: "Settings", title: "ERP Native", bullets: ["SAP Support", "NetSuite", "Oracle", "Microsoft Dynamics"] },
      { icon: "Activity", title: "Real-Time Tracking", bullets: ["SLA Dashboards", "Backlog Monitoring", "Error Rate Tracking", "Daily Readouts"] }
    ]
  },
  useCases: {
    title: "Proven Logistics Success", tabs: ["All", "Wholesale B2B", "Retail E-Commerce"], items: [
      { icon: "🏭", title: "B2B Wholesale POs", challenge: "Manufacturing firm had massive backlogs entering 100-page PDF Purchase Orders manually.", solution: "Deployed OCR extraction heavily audited by our data team to inject POs directly into SAP.", results: "Processing time cut from 3 days to 4 hours" },
      { icon: "🛒", title: "E-Commerce Fraud Review", challenge: "High-end retailer losing revenue due to automated fraud filters incorrectly declining good orders.", solution: "Trained human analysts to manually review flagged orders in 15 minutes before shipping cutoffs.", results: "$2M in false-positives saved annually" }
    ]
  },
  techStack: {
    title: "Supported Ecosystems", categories: [
      { title: "E-Commerce", items: ["Shopify Plus", "Magento", "BigCommerce", "Salesforce Commerce Cloud"] },
      { title: "ERPs", items: ["SAP", "Oracle NetSuite", "Microsoft Dynamics", "Infor"] },
      { title: "OMS / WMS", items: ["Manhattan Associates", "Fishbowl", "Orderhive", "ShipStation"] }
    ]
  },
  pricing: {
    title: "Order Processing Pricing", models: [
      { title: "Per Order / PO", bestFor: "Highly variable order volumes", priceValue: "From $0.50", priceUnit: "/order" },
      { title: "Dedicated Team", bestFor: "Complex B2B quotes and exceptions", priceValue: "From $1,500", priceUnit: "/FTE/mo", isPopular: true },
      { title: "Hybrid Model", bestFor: "Base team + volume burst capacity", priceValue: "Custom", priceUnit: " structure" }
    ]
  },
  metrics: {
    title: "Operational KPIs", items: [
      { label: "Order Entry Accuracy", value: "99.9%", progressPercent: 99.9 },
      { label: "Average Processing Time", value: "< 2 Hours", progressPercent: 95 },
      { label: "Exception Resolution TAT", value: "< 4 Hours", progressPercent: 90 },
      { label: "RMA Processing Speed", value: "24 Hours", progressPercent: 98 }
    ]
  },
  faqs: {
    title: "Order Processing FAQs", items: [
      { q: "Can you manage backorders and contact suppliers?", a: "Yes, our teams can operate across your entire supply chain, including following up with vendors, updating ETAs in your ERP, and notifying end-customers." },
      { q: "Is payment data secure?", a: "Absolutely. We are PCI DSS compliant, ensuring credit card numbers and financial data are never exposed or stored inappropriately." }
    ]
  },
  related: {
    title: "Explore Related Services", items: [
      { title: "Back Office Operations", link: "/solutions/back-office" },
      { title: "Data Entry & Processing", link: "/solutions/data-entry" },
      { title: "Customer Service", link: "/solutions/customer-service" }
    ]
  },
  cta: {
    title: "Ready to Architect Your Fulfillment Strategy?", primaryBtn: "Calculate Capacity", secondaryBtn1: "Review Cost Savings", secondaryBtn2: "Institutional Integration Brief"
  }
};
