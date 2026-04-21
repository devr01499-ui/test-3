import { IndustryPageData } from "@/types/industries";

export const educationData: IndustryPageData = {
  title: "Education & E-learning BPO Solutions | Claritiy",
  description: "Student support, enrollment services, and administrative scaling for universities, colleges, and modern EdTech platforms.",
  slug: "education",
  breadcrumb: "Education & E-learning",

  heroData: {
    badgeIcon: "GraduationCap",
    badgeText: "Institutional Education Mastery",
    headline: "Educational Excellence: Advanced Student Lifecycle Orchestration",
    subheading: "Empower your institution with high-precision admissions, student support, and academic administration services. We deliver scalable, FERPA-grade operational integrity for global education leaders.",
    bullets: [
      "24/7/365 Institutional Student Helpdesk & Tutoring Support",
      "Strategic LMS Mesh & Technical Integration Support",
      "Institutional Enrollment & Admissions Lifecycle Orchestration",
      "Rigorous FERPA-Grade Student Data Integrity"
    ],
    primaryCta: "Architect Your Institution",
    secondaryCta: "Access EdTech Brief",
    visualIcon: "GraduationCap",
    visualList: ["Institutional Student Support Hubs", "LMS Mesh Control Centers", "Enrollment Lifecycle Pipelines", "Virtual Classroom Resilience Support"],
    certifications: [
      { id: "c1", name: "FERPA Compliant" },
      { id: "c2", name: "COPPA Verified" },
      { id: "c3", name: "ISO 27001:2022" },
      { id: "c4", name: "SOC 2 Type II" }
    ],
    clientSuccess: {
      stat1: "180+ Institutional Partners",
      stat2: "94.5% Verified Student CSAT"
    }
  },

  services: {
    title: "End-to-End Institutional Education Solutions",
    gridItems: [
      {
        title: "STRATEGIC STUDENT SERVICES",
        features: ["Institutional Admissions Inquiries", "Neural Course Registration Hubs", "Strategic Financial Aid Orchestration", "Verified Transcript Lifecycle", "24/7 Mission-Critical Student Helpdesk"]
      },
      {
        title: "ENROLLMENT LIFECYCLE OPS",
        features: ["Institutional Application Processing", "Rigorous Document Integrity Verification", "Secure Fee Collection Orchestration", "Strategic Offer Letter Generation", "Institutional Deferral Logic"]
      },
      {
        title: "NEURAL LEARNING SUPPORT",
        features: ["Institutional LMS Technical Mesh", "Strategic Virtual Tutoring Coordination", "Neural Attendance Tracking Hubs", "Verified Assignment Lifecycle", "Strategic Grading Support Assistance"]
      },
      {
        title: "FACULTY & ADMIN STEWARDSHIP",
        features: ["Institutional Scheduling Orchestration", "Neural Content Upload Hubs", "Strategic Faculty Technical Support", "Institutional Regulatory Reporting", "Strategic Newsletter Stewardship"]
      },
      {
        title: "ALUMNI & DONOR ORCHESTRATION",
        features: ["Strategic Alumni Lifecycle Engagement", "Secure Donation Integrity Processing", "Global Event Coordination Hubs", "Institutional Career Services Ops", "Neural Alumni Outreach Campaigns"]
      },
      {
        title: "REGULATORY COMPLIANCE",
        features: ["Institutional FERPA Integrity", "Strategic Title IV Reporting", "Neural IPEDS Data Orchestration", "Verified Audit Integrity Support", "Regulatory Accreditation Stewardship"]
      }
    ]
  },

  compliance: {
    title: "Student Data Privacy & Compliance",
    cards: [
      { title: "FERPA COMPLIANCE", bullets: ["Student Record Protection", "Parental Rights Mgmt", "Disclosure Policies", "Consent Workflow"] },
      { title: "DATA SECURITY", bullets: ["Encrypted Student Data", "RBAC Systems", "COPPA Requirements", "Secure LMS Access"] },
      { title: "INSTITUTIONAL STANDARDS", bullets: ["Accreditation Support", "IPEDS Reporting", "Title IX Awareness", "ADA Compliance"] }
    ],
    securityMeasures: [
      { id: "s1", text: "FERPA-compliant student record management" },
      { id: "s2", text: "Encrypted data storage for academic records" },
      { id: "s3", text: "Role-based access for faculty and student portals" },
      { id: "s4", text: "Multi-factor authentication on all platforms" },
      { id: "s5", text: "Secure file transfer and document storage" },
      { id: "s6", text: "Regular security audits and penetration testing" },
      { id: "s7", text: "COPPA safeguards for K-12 platforms" },
      { id: "s8", text: "Annual FERPA training for all staff" }
    ]
  },

  technology: {
    title: "Integrated with Leading EdTech Platforms",
    categories: [
      { title: "LMS PLATFORMS", items: ["Canvas", "Blackboard", "Moodle", "D2L Brightspace", "Schoology"] },
      { title: "SIS SYSTEMS", items: ["Ellucian Banner", "PowerSchool", "Infinite Campus", "Skyward", "Colleague"] },
      { title: "CRM & ENROLLMENT", items: ["Salesforce Education Cloud", "Slate CRM", "HubSpot", "TargetX", "Hobsons"] },
      { title: "VIRTUAL LEARNING", items: ["Zoom Education", "Microsoft Teams EDU", "Google Classroom", "Webex", "Adobe Connect"] },
      { title: "PAYMENT & FINANCE", items: ["Nelnet", "TouchNet", "CASHNet", "Flywire", "Stripe Education"] },
      { title: "ANALYTICS", items: ["Civitas Learning", "EAB Navigate", "Tableau", "Power BI", "Qualtrics"] }
    ]
  },

  segments: {
    title: "Serving Every Education Vertical",
    tabs: ["All", "Universities", "K-12", "EdTech", "Vocational"],
    items: [
      {
        name: "Universities", title: "COLLEGES & UNIVERSITIES",
        clientsCount: "80+",
        services: ["Admissions Support", "Financial Aid Ops", "Student Helpdesk", "Alumni Relations"]
      },
      {
        name: "K-12", title: "K-12 SCHOOL DISTRICTS",
        clientsCount: "40+",
        services: ["Parent Helplines", "Enrollment Ops", "Tech Support", "Attendance Mgmt"]
      },
      {
        name: "EdTech", title: "EDTECH PLATFORMS",
        clientsCount: "50+",
        services: ["User Onboarding", "LMS Support", "Subscription Mgmt", "Community Mgmt"]
      },
      {
        name: "Vocational", title: "VOCATIONAL & TRADE SCHOOLS",
        clientsCount: "25+",
        services: ["Enrollment Processing", "Career Services", "Compliance Docs", "Student Records"]
      }
    ]
  },

  metrics: {
    title: "Education Operations Metrics",
    items: [
      { label: "Enrollment Accuracy", value: "99.2%", progressPercent: 99.2 },
      { label: "Student CSAT Score", value: "94%", progressPercent: 94 },
      { label: "First Call Resolution", value: "87%", progressPercent: 87 },
      { label: "Cost Per Enrollment Reduction", value: "35%", progressPercent: 68 }
    ]
  },

  cta: {
    primaryBtn: "Talk to an Education Expert",
    secondaryBtn: "Download Education Case Study"
  }
};
