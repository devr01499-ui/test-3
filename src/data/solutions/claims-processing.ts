import { SolutionPageData } from "@/types/solutions";

export const claimsProcessingData: SolutionPageData = {
  title: "Claims Processing Operations | Claritiy",
  description: "Secure, HIPAA-compliant claims processing for Healthcare, Insurance, and Logistics. Digitize, verify, and adjudicate with 99.9% accuracy.",
  slug: "claims-processing",
  breadcrumb: "Claims Processing",
  heroData: {
    badgeIcon: "FileSignature",
    badgeText: "Institutional Adjudication Excellence",
    headline: "Accelerate Approvals: High-Precision Claims Orchestration",
    subheading: "Compress adjudication cycles and eliminate regulatory friction with AI-augmented diagnostic extraction and expert administrative teams specialized in institutional-grade claims processing.",
    bullets: [
      "Full-Spectrum Healthcare & Medical Adjudication",
      "Institutional Insurance & Property Claims Mesh",
      "High-Resolution Logistics & Freight Damage Claims",
      "Carrier-Grade Security (HIPAA & SOC 2 Type II)"
    ],
    primaryCta: "Compress Processing Cycles",
    secondaryCta: "Access Compliance Matrix",
    visualIcon: "ClipboardCheck",
    visualText: "Institutional Adjudication & Compliance Interface",
    metricsOverlay: [
      { value: "99.95%", label: "Adjudication Accuracy" },
      { value: "Sub-24h", label: "Cycle-Time Performance" },
      { value: "40%+", label: "Admin OpEx Compression" }
    ]
  },
  quickStats: [{ icon: "FileText", text: "5M+ Claims Processed" }, { icon: "ShieldCheck", text: "100% HIPAA Compliant" }, { icon: "Clock", text: "24 Hour Average TAT" }, { icon: "TrendingDown", text: "40% Admin Cost Saved" }],
  services: {
    title: "Institutional Claims Framework",
    items: [
      {
        title: "Healthcare Claims Mastery",
        icon: "Stethoscope",
        features: ["Neuro-ICR CMS-1500 & UB-04 Processing", "Strategic Medical Coding Verification", "Holistic Denial Management Logic", "Prior Authorization Orchestration"]
      },
      {
        title: "Enterprise Insurance Adjudication",
        icon: "Umbrella",
        features: ["Institutional FNOL Intake", "Advanced Policy Integrity Verification", "Precision Estimate Processing", "Unified Compliance Documentation"]
      },
      {
        title: "Global Logistics Claims Oversight",
        icon: "Truck",
        features: ["Damage & Shortage Resolution", "Strategic Bill of Lading Reconciliation", "Institutional Carrier Communication", "High-Resolution Settlement Processing"]
      }
    ]
  },
  processFlow: {
    title: "Secure Adjudication Workflow", trigger: "Claim Document Received", routerParams: "[OCR Extractor] Digitizes claim forms to structured data",
    aiPath: { title: "Rule Engine", subtitle: "Initial Validation", color: "#6366f1" },
    humanPath: { title: "Claims Processor", subtitle: "Adjudication Review", color: "#f59e0b" },
    qualityMonitor: "[Compliance Audit] Verifies against policy logic before final payout",
    benefits: [{ icon: "Zap", text: "Faster time to settlement" }, { icon: "Shield", text: "Zero compliance breaches" }, { icon: "Database", text: "Clean data injection" }, { icon: "CheckSquare", text: "Minimized claim denials" }]
  },
  features: {
    title: "Processing Capabilities", items: [
      { icon: "Cpu", title: "OCR Integration", bullets: ["Handwritten form reading", "Data validation", "Auto-routing", "Duplicate detection"] },
      { icon: "Lock", title: "Healthcare Security", bullets: ["HIPAA Certified", "PHI Protection", "Redacted views", "Encrypted transmission"] },
      { icon: "Settings", title: "System Agnostic", bullets: ["Epic & Cerner Hubs", "Guidewire Integration", "Custom API injections", "Legacy Mainframes"] },
      { icon: "Users", title: "Specialized Talent", bullets: ["Medical Coders", "Licensed Adjuster Support", "Trained Abstractors", "QA Supervisors"] }
    ]
  },
  useCases: {
    title: "Industry Applications", tabs: ["All", "Healthcare Clinics", "Auto Insurance"], items: [
      { icon: "🏥", title: "Medical Billing & Coding", challenge: "A network of clinics faced huge cash flow delays due to a 20% claim denial rate caused by coding errors.", solution: "Deployed a pod of AAPC-certified coders to review and scrub CMS-1500 forms prior to submission.", results: "Denial rate dropped to 2% • Cash flow accelerated" },
      { icon: "🚗", title: "Auto Insurance FNOL", challenge: "Insurer couldn't scale staff during hurricane season to handle First Notice of Loss claims.", solution: "Implemented a 24/7 offshore intake and indexing team to structure incoming damage reports into Guidewire.", results: "Same-day indexing achieved • Zero backlog" }
    ]
  },
  techStack: {
    title: "Supported Systems", categories: [
      { title: "Insurance Core", items: ["Guidewire ClaimCenter", "Duck Creek", "Applied Systems", "Majesco"] },
      { title: "Healthcare Systems", items: ["Epic", "Cerner", "Athenahealth", "eClinicalWorks", "Allscripts"] },
      { title: "RPA / OCR Tools", items: ["UiPath", "Kofax", "ABBYY", "AWS Textract"] }
    ]
  },
  pricing: {
    title: "Claims Pricing Models", models: [
      { title: "Per Claim", bestFor: "Predictable, standardized form processing", priceValue: "From $1.50", priceUnit: "/claim" },
      { title: "Dedicated Processors", bestFor: "Complex adjudication needing system access", priceValue: "From $1,800", priceUnit: "/FTE/mo", isPopular: true },
      { title: "Managed Denials Pod", bestFor: "Healthcare revenue cycle management", priceValue: "Custom", priceUnit: " structure" }
    ]
  },
  metrics: {
    title: "Operational KPIs", items: [
      { label: "Processing Accuracy", value: "99.9%", progressPercent: 99.9 },
      { label: "HIPAA Compliance Adherence", value: "100%", progressPercent: 100 },
      { label: "Turnaround Time (TAT)", value: "< 24 Hours", progressPercent: 98 },
      { label: "Denial Rate Reduction", value: "85%", progressPercent: 85 }
    ]
  },
  faqs: {
    title: "Claims Processing FAQs", items: [
      { q: "Do you have HIPAA certified staff?", a: "Yes, our healthcare teams undergo rigorous HIPAA training, and our facilities are physically and logically secured to ensure zero PHI breaches." },
      { q: "Can you handle handwritten UB-04 or CMS-1500 forms?", a: "Absolutely. We utilize advanced OCR to digitize handwriting, followed by strict human double-blind verification to guarantee 99.9% accuracy." }
    ]
  },
  related: {
    title: "Explore Related Services", items: [
      { title: "Data Entry & Processing", link: "/solutions/data-entry" },
      { title: "Finance & Accounting", link: "/solutions/finance-accounting" },
      { title: "Back Office Operations", link: "/solutions/back-office" }
    ]
  },
  cta: {
    title: "Ready to Streamline Your Claims?", primaryBtn: "Talk to a Claims Expert", secondaryBtn1: "Review HIPAA Security", secondaryBtn2: "Pricing Guide"
  }
};
