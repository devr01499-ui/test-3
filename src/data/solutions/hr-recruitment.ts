import { SolutionPageData } from "@/types/solutions";

export const hrRecruitmentData: SolutionPageData = {
  title: "HR & Recruitment Outsourcing | Claritiy",
  description: "Accelerate hiring, reduce cost-per-hire, and manage seamless global payroll with our comprehensive Recruitment Process Outsourcing (RPO).",
  slug: "hr-recruitment",
  breadcrumb: "HR & Recruitment",
  
  heroData: {
    badgeIcon: "Users",
    badgeText: "HR & Recruitment Process Outsourcing",
    headline: "Source Top Talent Faster. Manage Globally.",
    subheading: "Outsource your entire talent acquisition lifecycle and payroll administration to dedicated expert recruiters powered by AI sourcing models.",
    bullets: [
      "End-to-end Recruitment Process Outsourcing (RPO)",
      "Global payroll & compliance management",
      "Employee onboarding and record administration",
      "AI-driven candidate screening"
    ],
    primaryCta: "Scale Your Team",
    secondaryCta: "RPO Strategy Call",
    visualIcon: "Briefcase",
    visualText: "Applicant Tracking System Dashboard",
    metricsOverlay: [
      { value: "45%", label: "Faster Time-to-Fill" },
      { value: "50%", label: "Lower Cost/Hire" },
      { value: "98%", label: "Offer Acceptance" }
    ]
  },

  quickStats: [
    { icon: "UserPlus", text: "50k+ Placements Made" },
    { icon: "Clock", text: "Avg 14-Day Fill Time" },
    { icon: "TrendingDown", text: "50% Reduced Recruiting Cost" },
    { icon: "Globe", text: "Sourcing in 40+ Countries" }
  ],

  services: {
    title: "Comprehensive HR Services",
    items: [
      {
        title: "Talent Acquisition (RPO)",
        icon: "Search",
        features: ["Passive Candidate Sourcing", "Resume Screening using AI", "Interview Coordination", "Reference Checking", "Offer Negotiation"]
      },
      {
        title: "HR Administration",
        icon: "FileText",
        features: ["Employee Onboarding", "Benefits Administration", "Leave & Attendance Mgmt", "Employee Helpdesk", "Exit Interviews"]
      },
      {
        title: "Global Payroll Mgmt",
        icon: "DollarSign",
        features: ["Multi-country Payroll", "Tax Compliance & Filing", "Expense Reimbursements", "Statutory Reporting", "Vendor Management"]
      }
    ]
  },

  processFlow: {
    title: "AI & Human Sourcing Engine",
    trigger: "New Requisition Opened",
    routerParams: "[AI Matching Engine] Scrapes LinkedIn/DBs against JD semantics",
    aiPath: { title: "Automated Outreach", subtitle: "Initial Pre-Screening", color: "#6366f1" },
    humanPath: { title: "Expert Recruiter", subtitle: "Deep Behavioral Interview", color: "#f59e0b" },
    qualityMonitor: "[Hiring Manager Portal] Calibrates feedback to improve algorithms",
    benefits: [
      { icon: "Zap", text: "Hundreds of profiles screened instantly" },
      { icon: "ShieldAlert", text: "Bias-free initial filtering" },
      { icon: "UserCheck", text: "95% interview-to-hire ratio" },
      { icon: "TrendingDown", text: "Massive drop in agency fees" }
    ]
  },

  features: {
    title: "Next-Gen Recruitment Operations",
    items: [
      { icon: "Search", title: "Passive Sourcing", bullets: ["Boolean Operations", "LinkedIn Recruiter Exec", "GitHub/StackOverflow Scraping", "Competitor Mapping"] },
      { icon: "Cpu", title: "AI Screening", bullets: ["Semantic Resume Matching", "Automated Video Interv.", "Skill Assessment APIs", "Chatbot Scheduling"] },
      { icon: "Globe", title: "Global Compliance", bullets: ["Local Labor Laws", "E-Verify/Background Checks", "GDPR Data Processing", "Contractor Classification"] },
      { icon: "LineChart", title: "Analytics & Predictivity", bullets: ["Pipeline Dashboards", "Time-to-Fill Metrics", "Diversity Tracking", "Flight Risk Models"] },
      { icon: "Users", title: "Dedicated Pods", bullets: ["Industry-specific Tech/Healthcare Recruiters", "Sourcing Specialists", "Coordinators", "HR BPs"] },
      { icon: "Settings", title: "ATS Integration", bullets: ["Workday", "Greenhouse", "Lever", "BambooHR"] },
      { icon: "HeartHandshake", title: "Employer Branding", bullets: ["Candidate Experience Focus", "Net Promoter Scores", "Glassdoor Monitoring", "Campaign Management"] },
      { icon: "Scaling", title: "Flex Sourcing", bullets: ["High-Volume Hiring Bursts", "Executive Search", "Niche Skill Hunting", "University Recruiting"] }
    ]
  },

  useCases: {
    title: "Industry Proven RPO Success",
    tabs: ["All", "Tech Startups", "Healthcare", "BPO & Retail"],
    items: [
      { icon: "💻", title: "Hyper-growth Tech Scaling", challenge: "A Series C startup needed to triple their engineering headcount (150+ hires) in 6 months without paying 20% agency fees.", solution: "Embedded an entire dedicated sourcing pod utilizing Github/LinkedIn scraping, fully replacing external agencies.", results: "All 150 filled on time • $1.5M saved in fees" },
      { icon: "🏥", title: "Healthcare Volume Recruiting", challenge: "A hospital network faced a critical nursing shortage with a 45-day average time to fill.", solution: "Deployed AI screening chatbots and a dedicated credentialing team working 24/7 to process applications overnight.", results: "Time-to-fill reduced to 18 days • Cost/hire down 30%" },
      { icon: "🛒", title: "Seasonal Retail Hiring", challenge: "National retailer needed 5,000 seasonal workers onboarded within 30 days.", solution: "Executed a fully automated programmatic ad campaign tied to WhatsApp-based AI interviews and automated background checks.", results: "100% headcount met • Zero HR administrative burden" }
    ]
  },

  techStack: {
    title: "Modern HR Tech Ecosystem",
    categories: [
      { title: "ATS Platforms", items: ["Greenhouse", "Lever", "Workday Recruiting", "SmartRecruiters", "iCIMS"] },
      { title: "HRIS & Payroll", items: ["BambooHR", "Gusto", "Rippling", "Deel", "ADP Workforce Now"] },
      { title: "Sourcing & AI", items: ["LinkedIn Recruiter", "HireEZ", "Gem", "HackerRank", "Paradox AI"] }
    ]
  },

  pricing: {
    title: "Transparent RPO Models",
    models: [
      { title: "Dedicated Sourcer", bestFor: "Constant pipeline generation for steady growth", priceValue: "From $2,000", priceUnit: "/FTE/mo", isPopular: true },
      { title: "Project RPO", bestFor: "Spikes in hiring needs (e.g. 50 hires in 3 months)", priceValue: "Custom", priceUnit: " total cost" },
      { title: "Per Hire Fee", bestFor: "Exclusive search functions replacing traditional agencies", priceValue: "Flat Rate", priceUnit: " per tier" },
      { title: "Managed HR Admin", bestFor: "Ongoing onboarding, payroll, and employee support", priceValue: "From $15", priceUnit: "/employee/mo" }
    ]
  },

  metrics: {
    title: "Recruiting Performance",
    items: [
      { label: "Reduction in Cost-Per-Hire", value: "48%", progressPercent: 88 },
      { label: "Improvement in Time-to-Fill", value: "45%", progressPercent: 85 },
      { label: "Candidate Offer Acceptance Rate", value: "96%", progressPercent: 96 },
      { label: "First-Year Retention Rate", value: "92%", progressPercent: 92 },
      { label: "Hiring Manager Satisfaction", value: "4.8/5", progressPercent: 95 },
      { label: "Agency Fee Reduction", value: "100%", progressPercent: 100 }
    ]
  },

  faqs: {
    title: "HR & RPO FAQs",
    items: [
      { q: "How are you different from a traditional staffing agency?", a: "Unlike agencies that charge 15-25% per hire, our RPO acts as your embedded internal recruiting team. We charge a flat monthly operation fee, meaning if you hire 1 person or 50 people, your costs remain predictably low." },
      { q: "Can you manage our existing ATS?", a: "Yes, our recruiters are certified and trained on all major platforms including Greenhouse, Lever, Workday, and BambooHR. We work entirely within your systems and email domains." }
    ]
  },

  related: {
    title: "Explore Related Services",
    items: [
      { title: "Back Office Operations", link: "/solutions/back-office" },
      { title: "Finance & Accounting", link: "/solutions/finance-accounting" },
      { title: "Sales & Telemarketing", link: "/solutions/sales-telemarketing" }
    ]
  },

  cta: {
    title: "Ready to Transform Your Hiring?",
    primaryBtn: "Talk to a Talent Architect",
    secondaryBtn1: "RPO Cost Calculator",
    secondaryBtn2: "View Sourcing Tech"
  }
};
