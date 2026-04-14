import { SolutionPageData } from "@/types/solutions";

export const dataEntryData: SolutionPageData = {
  title: "Data Entry & Processing Solutions | Claritiy",
  description: "Secure, high-volume data entry and processing. We combine AI-driven OCR extraction with human double-blind verification for 99.9% accuracy.",
  slug: "data-entry",
  breadcrumb: "Data Entry & Processing",
  
  heroData: {
    badgeIcon: "Keyboard",
    badgeText: "Data Entry & Processing",
    headline: "Perfect Data, Processed Instantly",
    subheading: "Stop drowning in unstructured paperwork. Digitize, categorize, and process massive volumes of information with absolute precision.",
    bullets: [
      "99.9% guaranteed accuracy via double-blind entry",
      "Advanced AI & OCR document extraction",
      "Strict data privacy (GDPR/ISO 27001 compliant)",
      "High-speed 24/7 processing centers"
    ],
    primaryCta: "Digitize Your Data",
    secondaryCta: "Accuracy Demo",
    visualIcon: "Database",
    visualText: "High-Volume Digitization Pipeline",
    metricsOverlay: [
      { value: "99.9%", label: "Accuracy Rate" },
      { value: "500K+", label: "Daily Transactions" },
      { value: "65%", label: "Cost Reduction" }
    ]
  },

  quickStats: [
    { icon: "FileDigit", text: "500M+ Records Processed" },
    { icon: "CheckCircle", text: "99.9% Guaranteed Accuracy" },
    { icon: "Shield", text: "100% GDPR/HIPAA Compliant" },
    { icon: "TrendingDown", text: "Up to 65% Cost Savings" }
  ],

  services: {
    title: "Comprehensive Data Solutions",
    items: [
      {
        title: "Offline/Online Data Entry",
        icon: "Keyboard",
        features: ["Handwritten Document Digitization", "Mailing List Compilation", "Form Processing", "E-book & PDF Conversion", "Image Tagging"]
      },
      {
        title: "Data Cleansing & Mining",
        icon: "Filter",
        features: ["Database De-duplication", "Web Scraping & Mining", "Missing Data Appending", "CRM CRM Cleanups", "Data Standardization"]
      },
      {
        title: "Transaction Processing",
        icon: "CreditCard",
        features: ["Invoice & PO Data Entry", "Healthcare Claims Typing", "Survey/Ballot Processing", "Rebates Processing", "Waybill Tracking"]
      }
    ]
  },

  processFlow: {
    title: "The Zero-Defect Processing Pipeline",
    trigger: "Unstructured Documents Received",
    routerParams: "[OCR Engine] Initial pass: Extracts text with AI confidence scoring",
    aiPath: { title: "High Confidence", subtitle: "Direct to Database", color: "#10b981" },
    humanPath: { title: "Low Confidence", subtitle: "Exception Routing", color: "#f59e0b" },
    qualityMonitor: "[Double-Blind Entry] Two disjoint agents re-key the data to find discrepancies",
    benefits: [
      { icon: "Cpu", text: "Fast initial digitization" },
      { icon: "ShieldAlert", text: "Human intellect on messy data" },
      { icon: "CheckSquare", text: "Mathmatical certainty on accuracy" },
      { icon: "Database", text: "Clean database injection" }
    ]
  },

  features: {
    title: "Unmatched Data Operations",
    items: [
      { icon: "Scan", title: "Advanced OCR", bullets: ["Machine Print Recognition", "ICR (Handwriting)", "OMR (Checkboxes)", "Barcode Extraction"] },
      { icon: "CheckSquare", title: "Double-blind Verification", bullets: ["Two operator logic", "Discrepancy alerting", "Supervisor review", "Statistical sampling"] },
      { icon: "Lock", title: "Ironclad Security", bullets: ["No-USB thick clients", "Paperless facilities", "Encrypted transmission", "Role-based access"] },
      { icon: "Globe", title: "Massive Workforces", bullets: ["Thousands of seats", "Multi-lingual capabilities", "Follow-the-sun 24/7", "Rapid burst scaling"] },
      { icon: "Settings", title: "Custom Integration", bullets: ["Direct SFTP drops", "API Webhooks", "Direct CRM injection", "Legacy system operation"] },
      { icon: "FileText", title: "Audit Trails", bullets: ["Time-stamped edits", "Operator ID tracking", "Version control", "Compliance reporting"] },
      { icon: "Network", title: "Process Engineering", bullets: ["Workflow optimization", "Custom interface building", "Lean six-sigma", "Bottleneck removal"] },
      { icon: "FolderCheck", title: "Multi-Format Handling", bullets: ["PDFs to Excel", "Images to SQL", "Paper to Cloud", "Audio to Text"] }
    ]
  },

  useCases: {
    title: "High-Volume Industry Use Cases",
    tabs: ["All", "Logistics", "Healthcare", "Legal/Real Estate"],
    items: [
      { icon: "🚚", title: "Waybill & BOL Processing", challenge: "A logistics giant was losing 2 days on border clearance due to manual data entry of messy handwritten Bills of Lading.", solution: "Implemented a 24/7 processing pod operating in a disjointed verification model, directly inputting into their custom ERP.", results: "Processing time cut from 48h to 2h • Zero customs fines" },
      { icon: "🏥", title: "Patient Record Digitization", challenge: "Hospital network needed to migrate 10 years of paper patient records into a new EHR system securely.", solution: "Deployed a closed-room, HIPAA-certified team utilizing OCR and manual verification to index millions of pages.", results: "99.99% critical field accuracy • 100% compliant" },
      { icon: "⚖️", title: "Lease Abstraction", challenge: "Commercial real estate firm acquired a portfolio of 5,000 properties and needed leases extracted into Yardi.", solution: "Specialized abstraction team read complex legal documents and keyed critical dates, rates, and clauses.", results: "Completed 3 months ahead of schedule" }
    ]
  },

  techStack: {
    title: "Leading Data Processing Technology",
    categories: [
      { title: "Extraction & OCR", items: ["ABBYY FlexiCapture", "AWS Textract", "Google Cloud Vision", "Kofax", "Rossum"] },
      { title: "Database & Injection", items: ["SQL Server", "Oracle", "MongoDB", "Salesforce CRM", "Microsoft Excel/Access"] },
      { title: "Security & Transport", items: ["Secure FTP", "AWS S3 GovCloud", "Citrix VDI", "Cisco VPNs", "AES-256 Encryption"] }
    ]
  },

  pricing: {
    title: "Flexible Processing Pricing",
    models: [
      { title: "Per Keystroke / Field", bestFor: "Highly variable, massively high-volume data", priceValue: "Fractions", priceUnit: " of a cent" },
      { title: "Dedicated Operator", bestFor: "Continuous daily tasks needing system knowledge", priceValue: "From $1,200", priceUnit: "/rep/mo", isPopular: true },
      { title: "Per Document", bestFor: "Invoice processing, claims, and standardized forms", priceValue: "From $0.15", priceUnit: "/doc" },
      { title: "Project Based", bestFor: "Legacy backlog digitization and data migrations", priceValue: "Custom", priceUnit: " total quote" }
    ]
  },

  metrics: {
    title: "Precision Benchmarks",
    items: [
      { label: "Overall Data Accuracy", value: "99.9%", progressPercent: 99.9 },
      { label: "Turnaround Time (TAT) Achievement", value: "99.5%", progressPercent: 99.5 },
      { label: "OCR Confidence Levels Achieved", value: "85%", progressPercent: 85 },
      { label: "Cost Savings vs Onshore", value: "65%", progressPercent: 85 },
      { label: "Average Volume Scalability", value: "+300% /wk", progressPercent: 100 },
      { label: "Security Incidents", value: "Zero", progressPercent: 100 }
    ]
  },

  faqs: {
    title: "Data Entry FAQs",
    items: [
      { q: "What is Double-Blind Verification?", a: "To achieve 99.9% accuracy, Operator A keys the data, and Operator B keys the same data blindly. The system compares the two. If there is a mismatch, it gets escalated to a QA supervisor. This mathematically eliminates typological errors." },
      { q: "Do you retain our data?", a: "No. Our thick-client VDIs process the data directly onto your servers, or we delete the transit files permanently upon database injection. Our facilities operate clean-room policies to prevent any data exfiltration." }
    ]
  },

  related: {
    title: "Explore Related Services",
    items: [
      { title: "Content Moderation", link: "/solutions/content-moderation" },
      { title: "Order Processing", link: "/solutions/order-processing" },
      { title: "Back Office Operations", link: "/solutions/back-office" }
    ]
  },

  cta: {
    title: "Ready to Achieve Perfect Data?",
    primaryBtn: "Discuss Your Blueprint",
    secondaryBtn1: "Calculate Validation Costs",
    secondaryBtn2: "Security Overview"
  }
};
