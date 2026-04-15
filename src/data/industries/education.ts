import { IndustryPageData } from "@/types/industries";

export const educationData: IndustryPageData = {
  title: "Education & E-learning BPO Solutions | Claritiy",
  description: "Student support, enrollment services, and administrative scaling for universities, colleges, and modern EdTech platforms.",
  slug: "education",
  breadcrumb: "Education & E-learning",

  heroData: {
    badgeIcon: "GraduationCap",
    badgeText: "Education & E-learning",
    headline: "Scale Student Success Operations",
    subheading: "Empower educational institutions with dedicated enrollment, student support, and academic administration services.",
    bullets: [
      "24/7 student helpdesk & tutoring support",
      "LMS integration & tech support",
      "Enrollment & admissions processing",
      "FERPA-compliant data handling"
    ],
    primaryCta: "Scale Your Institution",
    secondaryCta: "View EdTech Brief",
    visualIcon: "GraduationCap",
    visualList: ["Student support agents at work", "LMS dashboards & portals", "Enrollment processing workflows", "Virtual classroom support"],
    certifications: [
      { id: "c1", name: "FERPA" },
      { id: "c2", name: "COPPA" },
      { id: "c3", name: "ISO 27001" },
      { id: "c4", name: "SOC 2" }
    ],
    clientSuccess: {
      stat1: "180+ Educational institutions",
      stat2: "94% Student satisfaction rate"
    }
  },

  services: {
    title: "End-to-End Education BPO Solutions",
    gridItems: [
      {
        title: "STUDENT SERVICES",
        features: ["Admissions Inquiries", "Course Registration", "Financial Aid Help", "Transcript Requests", "24/7 Student Helpdesk"]
      },
      {
        title: "ENROLLMENT OPERATIONS",
        features: ["Application Processing", "Document Verification", "Fee Collection", "Offer Letter Generation", "Deferrals"]
      },
      {
        title: "LEARNING SUPPORT",
        features: ["LMS Technical Support", "Virtual Tutoring Coord.", "Attendance Tracking", "Assignment Submissions", "Grading Assistance"]
      },
      {
        title: "FACULTY & ADMIN SUPPORT",
        features: ["Scheduling Support", "Content Upload Assistance", "Faculty IT Helpdesk", "Reporting", "Newsletter Mgmt"]
      },
      {
        title: "ALUMNI & DONOR RELATIONS",
        features: ["Alumni Outreach", "Donation Processing", "Event Coordination", "Career Services Ops", "Newsletter Campaigns"]
      },
      {
        title: "COMPLIANCE & REPORTING",
        features: ["FERPA Compliance", "Title IV Reporting", "IPEDS Data Prep", "Audit Support", "Accreditation Docs"]
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
