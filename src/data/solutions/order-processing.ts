import { SolutionPageData } from "@/types/solutions";

export const orderProcessingData: SolutionPageData = {
  title: "Order Processing Services | Claritiy",
  description: "Seamless end-to-end B2B and B2C order processing. From purchase order to fulfillment tracking with absolute precision.",
  slug: "order-processing",
  breadcrumb: "Order Processing",
  heroData: {
    badgeIcon: "ShoppingCart", badgeText: "Order Processing", headline: "Fulfill Orders Faster. Zero Errors.", subheading: "Accelerate your supply chain by outsourcing sales order entry, payment verification, and fulfillment administration.", bullets: ["B2B Purchase Order (PO) Processing", "E-commerce order verification", "Returns and refund management", "Inventory synchronization"], primaryCta: "Streamline Orders", secondaryCta: "See Processing Demo", visualIcon: "Package", visualText: "Order Management System", metricsOverlay: [{ value: "99.9%", label: "Order Accuracy" }, { value: "<2h", label: "Entry TAT" }, { value: "30%", label: "Cost Savings" }]
  },
  quickStats: [{ icon: "PackageCheck", text: "10M+ Orders Processed" }, { icon: "Clock", text: "<2 Hour Turnaround" }, { icon: "Shield", text: "PCI DSS Compliant" }, { icon: "TrendingDown", text: "30% Reduction in Opex" }],
  services: {
    title: "End-to-End Order Management", items: [
      { title: "B2B Order Entry", icon: "FileText", features: ["Purchase Order transcription", "EDI discrepancy resolution", "Quote-to-cash administration", "Credit hold releases"] },
      { title: "E-Commerce Operations", icon: "ShoppingCart", features: ["Fraud flag review", "Fulfillment routing", "Dropship coordination", "Backorder management"] },
      { title: "Reverse Logistics", icon: "ArrowLeftRight", features: ["RMA generation", "Refund processing", "Exchange coordination", "Warranty validation"] }
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
    title: "Ready to Accelerate Fulfillment?", primaryBtn: "Process More Orders", secondaryBtn1: "Review Cost Savings", secondaryBtn2: "Discuss Integration"
  }
};
