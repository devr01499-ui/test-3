import { SolutionPageData } from "@/types/solutions";

export const backOfficeData: SolutionPageData = {
  title: "Back Office Operations Solutions | Claritiy",
  description: "Streamline your administrative workloads with hyper-efficient back office operations utilizing AI automation and expert management.",
  slug: "back-office-operations",
  breadcrumb: "Back Office Operations",
  
  heroData: {
    badgeIcon: "Layers",
    badgeText: "Back Office Operations",
    headline: "Flawless Execution Behind the Scenes",
    subheading: "Eliminate bottlenecks, reduce operational overhead by up to 60%, and let your core team focus entirely on strategic growth.",
    bullets: [
      "Process automation workflows",
      "Rigorous six-sigma quality control",
      "Scalable administrative support",
      "Strict data compliance (ISO/GDPR)"
    ],
    primaryCta: "Streamline Operations",
    secondaryCta: "Watch Workflow Demo",
    visualIcon: "Workflow",
    visualText: "Automated Processing Pipeline",
    metricsOverlay: [
      { value: "99.9%", label: "Accuracy Rate" },
      { value: "60%", label: "Cost Reduction" },
      { value: "3x", label: "Processing Speed" }
    ]
  },

  quickStats: [
    { icon: "FileText", text: "50M+ Documents Processed" },
    { icon: "CheckCircle2", text: "99.9% Defect-Free Quality" },
    { icon: "TrendingDown", text: "Average 60% Cost Savings" },
    { icon: "Shield", text: "Bank-Grade Security" }
  ],

  services: {
    title: "Comprehensive Back Office Support",
    items: [
      {
        title: "Data Management",
        icon: "Database",
        features: ["Data Entry & Digitization", "Data Cleansing", "CRM Database Management", "Data Mining", "Catalog Management"]
      },
      {
        title: "Financial & Administrative",
        icon: "Calculator",
        features: ["Invoice Processing", "Expense Auditing", "Virtual Assistants", "Document Verification", "Compliance Checking"]
      },
      {
        title: "E-Commerce Support",
        icon: "ShoppingCart",
        features: ["Inventory Management", "Order Fulfillment Processing", "Refund Processing", "Product Listing", "Competitor Price Monitoring"]
      }
    ]
  },

  processFlow: {
    title: "Human-in-the-Loop Automation",
    trigger: "Raw Data / Tasks Received",
    routerParams: "[RPA Engine] Extracts, categorizes, and processes data using OCR and AI",
    aiPath: { title: "Straight Through Processing", subtitle: "Zero Human Touch", color: "#10b981" },
    humanPath: { title: "Exception Handling", subtitle: "Expert Verification", color: "#6366f1" },
    qualityMonitor: "[Algorithmic Auditing] Flags anomalies for secondary review",
    benefits: [
      { icon: "Zap", text: "85% tasks fully automated" },
      { icon: "ShieldAlert", text: "Complex edge-cases resolved" },
      { icon: "CheckSquare", text: "100% data integrity verified" },
      { icon: "TrendingDown", text: "Massive reduction in SLA times" }
    ]
  },

  features: {
    title: "Operational Excellence",
    items: [
      { icon: "Cpu", title: "RPA Integration", bullets: ["Optical Character Recognition", "Robotic Process Automation", "Machine Learning Extraction", "API Bridges"] },
      { icon: "BarChart", title: "Process Engineering", bullets: ["Six Sigma Methodologies", "Lean Operations", "Workflow Mapping", "Continuous Improvement"] },
      { icon: "Lock", title: "Data Security", bullets: ["Clean Room Operations", "No-USB Policies", "Network Segmentation", "ISO 27001 Certification"] },
      { icon: "Globe", title: "Global Labor Arbitrage", bullets: ["Follow-the-sun processing", "Cost-effective centers", "Redundant locations", "BCP readiness"] },
      { icon: "Eye", title: "Complete Transparency", bullets: ["Real-time Reporting", "Time-tracking", "Error Rate Monitoring", "Volume Forecasting"] },
      { icon: "Users", title: "Dedicated Pods", bullets: ["Domain Experts", "Subject Matter Specialists", "Low Attrition", "Cross-trained Teams"] },
      { icon: "Scaling", title: "Elastic Scalability", bullets: ["Rapid ramp-up", "Seasonal burst capacity", "Cross-functional resources", "Volume flexing"] },
      { icon: "CheckCircle", title: "Quality Assurance", bullets: ["Double-blind entry", "Randomized auditing", "Custom QA rubrics", "Feedback loops"] }
    ]
  },

  useCases: {
    title: "Streamlined Industry Back Offices",
    tabs: ["All", "Logistics", "Healthcare", "E-commerce"],
    items: [
      { icon: "🚚", title: "Logistics Waybill Processing", challenge: "A global courier struggled with manual data entry for thousands of handwritten waybills daily, causing severe dispatch delays.", solution: "Integrated OCR AI to digitize 80% of waybills instantly, with our back-office team processing the illegible 20% exceptions 24/7.", results: "4x increase in speed • 99.8% accuracy" },
      { icon: "🏥", title: "Healthcare Claims Verification", challenge: "Medical billing provider faced high denial rates due to coding errors and administrative backlogs.", solution: "Deployed a dedicated pod of HIPAA-certified medical coders and abstractors using automated compliance software.", results: "35% fewer claims denied • 50% cost drop" },
      { icon: "🛒", title: "E-Commerce Catalog Management", challenge: "Online retailer expanding to 100,000+ SKUs needed constant price updating, image formatting, and copywriting.", solution: "Created a continuous workflow pulling competitor data, optimizing descriptions for SEO, and managing inventory syncs.", results: "100% SKU accuracy • 2x catalog size" }
    ]
  },

  techStack: {
    title: "Enterprise Automation Software",
    categories: [
      { title: "RPA & Automation", items: ["UiPath", "Automation Anywhere", "Blue Prism", "Microsoft Power Automate", "Zapier/Make"] },
      { title: "OCR & Data Extraction", items: ["ABBYY FlexiCapture", "Google Cloud DocumentAI", "AWS Textract", "Kofax", "Rossum"] },
      { title: "Project & Task Management", items: ["Asana", "Jira", "Monday.com", "Smartsheet", "Trello"] }
    ]
  },

  pricing: {
    title: "Efficient Cost Structures",
    models: [
      { title: "Per Transaction", bestFor: "Highly standardized, predictable repetitive tasks", priceValue: "From $0.15", priceUnit: "/item" },
      { title: "Dedicated Resource", bestFor: "Ongoing administrative support and complex work", priceValue: "From $1,500", priceUnit: "/FTE/mo", isPopular: true },
      { title: "Project Based", bestFor: "One-off data migrations or massive digitization projects", priceValue: "Custom", priceUnit: " quote" },
      { title: "Managed Services", bestFor: "Complete end-to-end departmental outsourcing", priceValue: "Custom", priceUnit: " structure" }
    ]
  },

  metrics: {
    title: "Performance Benchmarks",
    items: [
      { label: "Data Quality / Accuracy", value: "99.9%", progressPercent: 99.9 },
      { label: "Task SLA Adherence", value: "99.5%", progressPercent: 99.5 },
      { label: "Straight Through Processing (STP)", value: "82%", progressPercent: 82 },
      { label: "Operational Cost Reduction", value: "60%", progressPercent: 85 },
      { label: "Average Turnaround Time", value: "<4 hours", progressPercent: 95 },
      { label: "Client Retention Rate", value: "98%", progressPercent: 98 }
    ]
  },

  faqs: {
    title: "Back Office Operations FAQs",
    items: [
      { q: "How do you guarantee data accuracy?", a: "We utilize multi-tiered verification including Double-Key Data Entry for critical fields, algorithmic validation rules, and comprehensive Six Sigma QA processes to achieve 99.9% accuracy." },
      { q: "Can your team work directly inside our proprietary software?", a: "Absolutely. We routinely operate via secure VPNs directly inside our clients' custom ERPs, CRMs, or inventory systems with strict access controls." }
    ]
  },

  related: {
    title: "Explore Related Services",
    items: [
      { title: "Data Entry & Processing", link: "/solutions/data-entry" },
      { title: "Finance & Accounting", link: "/solutions/finance-accounting" },
      { title: "Content Moderation", link: "/solutions/content-moderation" }
    ]
  },

  cta: {
    title: "Ready to Optimize Your Operations?",
    primaryBtn: "Discuss Your Processes",
    secondaryBtn1: "View Automation Case Studies",
    secondaryBtn2: "Security Compliance"
  }
};
