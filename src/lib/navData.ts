import { 
  HeartPulse, ShoppingCart, Landmark, Laptop, 
  PhoneCall, Plane, ShieldCheck, GraduationCap, 
  Zap, Truck, Clapperboard, Home, Car, 
  Building2, PlusCircle, Briefcase, FileText,
  Bot, Mic, BarChart3, Repeat, Target, Brain, 
  Cpu, LayoutDashboard, MessageSquareText, Eye,
  Bitcoin, Gamepad2, Utensils, Factory, Heart,
  Scale
} from "lucide-react";

export const enhancedIndustries = [
  { name: "Healthcare & Medical", icon: HeartPulse, bullets: ["Institutional Claims", "Neural Prior Auth", "Precision Coding"] },
  { name: "Banking & Financial Services", icon: Landmark, bullets: ["Institutional Ops", "Neural Collections", "Compliance Integrity"] },
  { name: "E-commerce & Retail", icon: ShoppingCart, bullets: ["Institutional Order Mgmt", "Neural CX Hubs", "Fulfillment Ops"] },
  { name: "Technology & SaaS", icon: Laptop, bullets: ["Neural Tech Support", "Institutional Help Desk", "Success Ops"] },
  { name: "Telecommunications", icon: PhoneCall, bullets: ["Institutional Billing", "Neural Tech Care", "Activation Ops"] },
  { name: "Logistics & Supply Chain", icon: Truck, bullets: ["Institutional Tracking", "Neural Scheduling", "Customs Mesh"] },
  { name: "Insurance", icon: ShieldCheck, bullets: ["Institutional Underwriting", "Neural Claims", "Customer Integrity"] },
  { name: "Travel & Hospitality", icon: Plane, bullets: ["Institutional Booking", "Neural Guest Serv", "Concierge Ops"] },
  { name: "Education & E-Learning", icon: GraduationCap, bullets: ["Institutional Admissions", "Neural Student Support", "Admissions"] },
  { name: "Utilities & Energy", icon: Zap, bullets: ["Institutional Billing", "Neural Field Support", "Outage Ops"] },
  { name: "Media & Entertainment", icon: Clapperboard, bullets: ["Neural Content Mod", "Institutional Subscript", "Fan Support"] },
  { name: "Real Estate", icon: Home, bullets: ["Institutional Lead Gen", "Neural Showing Sch", "Tenant Integrity"] },
  { name: "Automotive", icon: Car, bullets: ["Institutional Dealer Supp", "Neural Roadside", "Parts Mastery"] },
  { name: "Government & Public", icon: Building2, bullets: ["Institutional Citizen Srv", "Neural Help Center", "Case Integrity"] },
  { name: "Crypto & Fintech", icon: Bitcoin, bullets: ["Institutional KYC/AML", "Neural Trading Supp", "Wallet Integrity"] },
  { name: "Legal Services", icon: Scale, bullets: ["Institutional Doc Review", "Neural Research", "Case Integrity"] },
  { name: "Manufacturing", icon: Factory, bullets: ["Institutional Supply Chain", "Neural Procurement", "Order Integrity"] },
  { name: "Non-Profit", icon: Heart, bullets: ["Institutional Donor Serv", "Neural Grants", "Mission Integrity"] },
  { name: "Gaming & Esports", icon: Gamepad2, bullets: ["Neural Player Support", "Institutional Mod", "Trust & Safety"] },
  { name: "Food & Beverage", icon: Utensils, bullets: ["Institutional Order Ops", "Neural Supply Chain", "Franchise Supp"] },
  { name: "Professional Services", icon: Briefcase, bullets: ["Institutional BPO", "Neural Research", "Admin Integrity"] }
];

export const enhancedSolutions = {
  byFunction: [
    { title: "Customer Experience", items: ["Customer Service", "Technical Support", "Help Desk", "Live Chat Support", "Social Media Mgmt"] },
    { title: "Sales & Revenue", items: ["Telemarketing", "Lead Generation", "Sales Support", "Appointment Setting", "Market Research"] },
    { title: "Back Office Operations", items: ["Data Entry", "Data Processing", "Document Management", "Order Processing", "Inventory Management", "Claims Processing"] },
    { title: "Finance & Accounting", items: ["Bookkeeping", "Accounts Payable", "Accounts Receivable", "Payroll Processing", "Tax Preparation", "Financial Analysis"] },
    { title: "HR & Talent", items: ["Recruitment Process", "Onboarding", "Payroll Services", "Benefits Admin", "Employee Support"] },
    { title: "Digital Services", items: ["Content Moderation", "Email Management", "Chat Support", "Virtual Assistance", "E-commerce Support"] }
  ],
  byCapability: [
    { title: "🤖 AI Chatbots", icon: "Bot" },
    { title: "🎙️ Voice AI", icon: "Mic" },
    { title: "📊 Predictive Analytics", icon: "BarChart3" },
    { title: "🔄 Process Automation", icon: "Repeat" },
    { title: "🎯 Smart Routing", icon: "Target" },
    { title: "😊 Sentiment Analysis", icon: "Brain" },
    { title: "🔍 Quality AI", icon: "ShieldCheck" },
    { title: "🧠 Machine Learning", icon: "Cpu" },
    { title: "📈 Analytics Dashboard", icon: "LayoutDashboard" },
    { title: "🗣️ NLP Processing", icon: "MessageSquareText" },
    { title: "👁️ Computer Vision", icon: "Eye" },
    { title: "⚡ RPA Integration", icon: "Zap" },
    { title: "🎓 Continuous Learning", icon: "GraduationCap" }
  ],
  specializations: ["Omnichannel AI", "Workforce AI", "Performance AI", "Training AI", "Integration AI"],
  byOutcome: ["Cost Reduction", "Quality Improvement", "Scalability", "Speed & Efficiency", "24/7 Availability"],
  stats: [
    { label: "40% Cost Savings", value: "40%" },
    { label: "99.5% Accuracy", value: "99.5%" },
    { label: "24/7 Operations", value: "24/7" },
    { label: "50+ Languages", value: "50+" }
  ],
  industrySpecific: ["Healthcare BPO", "E-commerce BPO", "Finance BPO", "Retail BPO", "[View All Industries]"],
  custom: ["Build Your Solution", "Enterprise Package", "Startup Package", "Consultation"],
  resources: ["Solution Guides", "Case Studies", "Webinars", "Whitepapers"]
};

export const enhancedServices = {
  core: [
    { title: "🎧 Contact Center", items: ["Inbound Support", "Outbound Sales", "Blended Services", "Multilingual", "Technical Support", "Customer Care", "Omnichannel"] },
    { title: "📊 Back Office", items: ["Data Management", "Transaction Proc.", "Document Processing", "Quality Assurance", "Compliance Support", "Audit Services"] },
    { title: "💰 Finance & Accounting", items: ["F&A Outsourcing", "R2R Services", "P2P Services", "O2C Services", "Tax Services", "Treasury Services"] },
    { title: "👥 HR Services", items: ["RPO Services", "Payroll Outsourcing", "Benefits Admin", "Learning & Dev", "HR Operations"] },
    { title: "📈 Analytics & Insights", items: ["Business Analytics", "Customer Analytics", "Performance Analytics", "Predictive Insights", "Real-time Dashboards"] }
  ],
  specialized: {
    vertical: ["Healthcare BPO", "Legal Process", "Insurance BPO", "Banking Operations", "Mortgage Processing", "Collections"],
    technical: ["IT Help Desk", "Level 1-3 Support", "Network Monitoring", "Software Support", "Hardware Support", "Cloud Support"],
    creative: ["Graphic Design", "Video Production", "Content Writing", "Digital Marketing", "Social Media Mgmt"],
    digital: ["Chat Moderation", "Social Listening", "Community Mgmt", "Reputation Mgmt", "Digital Marketing"],
    compliance: ["GDPR Compliance", "HIPAA Compliance", "PCI-DSS", "SOC 2", "ISO Certifications", "Industry-Specific"]
  },
  models: {
    onshore: ["USA Centers", "Canada Centers", "UK Centers", "Australia Centers"],
    nearshore: ["Mexico Centers", "Costa Rica", "Colombia", "Eastern Europe"],
    offshore: ["India Centers", "Philippines", "Egypt", "South Africa", "Southeast Asia"],
    hybrid: ["Multi-shore", "Follow-the-Sun", "Best-shore Strategy"],
    engagement: ["Dedicated Teams", "Shared Resources", "Hybrid Model", "Pay-per-Transaction", "Outcome-based", "Build-Operate-Transfer"],
    levels: ["Standard SLA", "Premium SLA", "Enterprise SLA", "Custom SLA"]
  }
};

export const enhancedAITech = {
  platforms: [
    { title: "🤖 Our AI Suite", items: ["AI Command Center", "Unified Dashboard", "Analytics Platform", "Integration Hub", "API Marketplace"] },
    { title: "🧠 Core AI Tech", items: ["Machine Learning", "Deep Learning", "Neural Networks", "NLP/NLU", "Computer Vision", "Reinforcement Learn"] },
    { title: "🔄 Process Automation", items: ["RPA Platform", "Workflow Automation", "Document AI", "Process Mining", "Smart Scheduling"] },
    { title: "🎙️ Speech & Voice", items: ["Speech Recognition", "Voice Analytics", "Emotion Detection", "Speaker ID", "Multi-language"] },
    { title: "👁️ Visual AI", items: ["Image Recognition", "OCR/ICR", "Video Analytics", "Face Recognition", "Document Intelligence"] },
    { title: "🛡️ AI Governance", items: ["Ethical AI", "Bias Detection", "Explainable AI", "Model Monitoring", "Compliance Tools"] }
  ],
  capabilities: [
    { title: "🗣️ Conversational AI", items: ["Chatbot Engine", "Voice Bots", "Virtual Assistants", "NLP Engine", "Dialog Management"] },
    { title: "📊 Analytics AI", items: ["Predictive Models", "Prescriptive AI", "Real-time Analytics", "Sentiment Analysis", "Trend Forecasting", "Performance Insights"] },
    { title: "🎯 Smart Operations", items: ["Intelligent Routing", "Workforce Optimization", "Quality Assurance AI", "Capacity Planning", "Skill-based Matching", "Auto-escalation"] },
    { title: "🤝 AI-Human Hybrid", items: ["Augmented Agents", "AI Coaching", "Real-time Assist", "Knowledge AI", "Decision Support"] }
  ],
  innovation: ["Innovation Team", "AI Patents", "Research Papers", "Technology Blog", "Beta Programs"],
  academy: ["Free Courses", "Certifications", "Workshops", "Webinars", "AI for Business"],
  useCases: ["Customer Service", "Sales Optimization", "Back Office Auto", "Fraud Detection", "Quality Assurance", "Workforce Planning"],
  resources: ["AI Whitepaper", "ROI Calculator", "AI Readiness Test", "Implementation Guide", "Success Stories"],
  stack: ["Cloud Infrastructure", "Security & Privacy", "Integration APIs", "Partner Ecosystem"],
  certifications: ["AI Safety Standards", "Data Privacy", "Security Compliance", "Industry Certs"]
};

// Industries already updated in the first chunk

export const enhancedResources = {
  learn: [
    { title: "Blog", items: ["AI & Automation", "Industry Insights", "Best Practices", "Technology", "Customer Success"] },
    { title: "Case Studies", items: ["By Industry", "By Solution", "By Challenge", "By Region"] },
    { title: "Guides & eBooks", items: ["Beginner's Guides", "Implementation", "Best Practices", "Industry Specific"] },
    { title: "Webinars & Events", items: ["Upcoming Webinars", "On-Demand Archive", "Workshops", "Conferences"] },
    { title: "Videos", items: ["Product Demos", "Tutorials", "Customer Stories", "Thought Leadership"] },
    { title: "Podcasts", items: ["BPO Insights Show", "AI Conversations", "Industry Leaders"] }
  ],
  tools: ["ROI Calculator", "Cost Estimator", "Capacity Planner", "Service Comparator", "AI Readiness Test", "SLA Calculator", "Pricing Estimator", "Savings Calculator", "RFP Template Gen"],
  resourceFiles: ["eBooks Library", "Solution Briefs", "Product Sheets", "Technical Docs", "API Documentation", "Integration Guides", "Compliance Docs"],
  insights: [
    { title: "REPORTS & DATA", items: ["Industry Reports", "White Papers", "Research Studies", "Academic Papers", "Executive Insights"] },
    { title: "ANALYST REPORTS", items: ["Gartner", "Forrester", "IDC", "Everest Group", "ISG"] },
    { title: "BENCHMARKS", items: ["Performance Metrics", "Cost Comparisons", "Quality Standards", "Industry Averages"] }
  ],
  trending: ["AI in Contact Centers", "Cost Reduction Guide", "Hybrid Work Models", "2024 Industry Report", "RPA Implementation"],
  academy: ["Online Courses", "Certifications", "Training Materials", "Skill Development", "Webinar Academy"],
  media: ["Infographics", "Videos", "Presentations", "Podcasts", "Customer Stories"],
  knowledge: ["FAQs", "Glossary", "How-To Articles", "Troubleshooting", "Documentation"]
};

export const enhancedAbout = {
  overview: [
    { title: "🏢 OVERVIEW", items: ["About Us", "Company Story", "Our Journey", "Timeline", "Milestones", "Company Facts"] },
    { title: "🌟 WHY US", items: ["Differentiators", "Competitive Edge", "Success Metrics", "Client Testimonials", "Industry Recognition"] },
    { title: "🤝 PARTNERSHIPS", items: ["Technology Partners", "Strategic Alliances", "Industry Associations", "Academic Partners", "Become a Partner"] },
    { title: "📜 CERTIFICATIONS", items: ["ISO 27001", "ISO 9001", "HIPAA", "PCI-DSS", "SOC 2", "GDPR Compliant"] },
    { title: "💼 CORPORATE", items: ["Corporate Profile", "Legal Information", "Terms & Conditions", "Privacy Policy", "Security Statement", "Cookie Policy"] },
    { title: "💰 INVESTORS", items: ["Investor Relations", "Financial Reports", "Annual Reports", "Quarterly Results", "Stock Information", "Corporate Calendar", "IR Contact"] }
  ],
  leadership: [
    { title: "👥 LEADERSHIP TEAM", items: ["Executive Team", "Board of Directors", "Advisory Board", "Regional Leaders"] },
    { title: "🎯 CULTURE & VALUES", items: ["Our Culture", "Employee Stories", "Work Environment", "Benefits & Perks", "Life at Company"] },
    { title: "🌱 SUSTAINABILITY", items: ["ESG Strategy", "Environmental", "Social Impact", "Diversity & Inclusion", "Corporate Governance"] },
    { title: "Ethics & Compliance", items: ["Code of Conduct", "Whistleblower Policy", "Policies"] }
  ],
  corporate: [
    { title: "📰 NEWSROOM", items: ["Press Releases", "News Articles", "Media Coverage", "Event Calendar", "Media Inquiries", "Press Kit"] },
    { title: "📺 MEDIA CENTER", items: ["Photo Gallery", "Video Library", "Brand Assets", "Logo Downloads", "Brand Guidelines"] },
    { title: "🏆 RECOGNITION", items: ["Awards Won", "Certifications", "Rankings", "Client Testimonials"] },
    { title: "🎓 THOUGHT LEADERSHIP", items: ["Executive Insights", "Keynote Speeches", "Published Articles", "Conference Talks", "Industry Contributions"] }
  ],
  stats: ["50+ Countries", "100K+ Employees", "25+ Years Experience", "$2B+ Annual Revenue", "1000+ Clients"]
};

export const regions = ["North America", "Latin America & Caribbean", "Europe", "Middle East & Africa", "Asia Pacific"];
