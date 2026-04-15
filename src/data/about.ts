export interface AboutPageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  iconName: string;
  headline: string;
  description: string;
  features: { title: string; description: string }[];
  stats?: { value: string; label: string }[];
  ctaText?: string;
}

export const aboutData: Record<string, AboutPageData> = {
  "company-overview": {
    slug: "company-overview",
    title: "About Us / Company Overview",
    metaTitle: "About Us | Claritiy",
    metaDescription: "Learn about Claritiy, the leading provider of AI-augmented BPO solutions for the modern enterprise.",
    iconName: "Globe",
    headline: "Redefining Enterprise Efficiency",
    description: "Claritiy is a global leader in AI-augmented Business Process Outsourcing. We blend purpose-built artificial intelligence with world-class human talent to transform how modern enterprises scale.",
    features: [
      { title: "Global Presence", description: "Operating across 15 countries with 40+ delivery centers to provide true follow-the-sun support." },
      { title: "AI-Native Architecture", description: "Born in the cloud with AI integrated into every operational layer, not just bolted on as an afterthought." },
      { title: "Industry Expertise", description: "Deep domain knowledge spanning 20+ industries, ensuring we understand the nuances of your business." },
      { title: "Data-Driven Approach", description: "Every decision, workflow, and process optimization is backed by hard data and predictive analytics." },
      { title: "Scalable Operations", description: "Proprietary frameworks that allow rapid ramping for seasonal spikes or hyper-growth phases." },
      { title: "Security First", description: "Enterprise-grade infrastructure compliant with SOC 2, ISO 27001, HIPAA, and GDPR standards." }
    ],
    stats: [
      { value: "50,000+", label: "Global Employees" },
      { value: "400+", label: "Enterprise Clients" },
      { value: "20+", label: "Industries Served" },
      { value: "99.9%", label: "Platform Uptime" }
    ],
    ctaText: "Discover Our Solutions"
  },
  "leadership-team": {
    slug: "leadership-team",
    title: "Leadership Team",
    metaTitle: "Leadership Team | Claritiy",
    metaDescription: "Meet the executive team driving innovation at Claritiy.",
    iconName: "Users",
    headline: "Visionary Leadership for a Hybrid Future",
    description: "Our leadership team brings together decades of expertise in operational excellence, artificial intelligence, and enterprise transformation to guide Claritiy's strategic vision.",
    features: [
      { title: "Chief Executive Officer", description: "Driving the global strategy and vision for AI-augmented enterprise scale." },
      { title: "Chief Operations Officer", description: "Ensuring flawless execution and delivery across 40+ global operational centers." },
      { title: "Chief Technology Officer", description: "Leading the development of our proprietary AI platform and technical infrastructure." },
      { title: "Chief Innovation Officer", description: "Pioneering the next generation of generative AI and human collaboration models." },
      { title: "Chief Revenue Officer", description: "Building lasting partnerships with global enterprises and expanding our market presence." },
      { title: "Chief People Officer", description: "Fostering a culture of continuous learning, diversity, and excellence for our 50,000+ employees." }
    ],
    ctaText: "Join Our Team"
  },
  "our-story": {
    slug: "our-story",
    title: "Our Story / History",
    metaTitle: "Our Story | Claritiy",
    metaDescription: "The journey of Claritiy from a disruptive startup to a global AI-BPO leader.",
    iconName: "TrendingUp",
    headline: "A Journey of Disruption & Excellence",
    description: "Founded on the belief that traditional outsourcing was broken, Claritiy emerged to bridge the gap between human empathy and artificial intelligence. Here is how we built the future of BPO.",
    features: [
      { title: "The Foundation", description: "Started with a vision to integrate AI into customer support, leading to our first proprietary predictive routing engine." },
      { title: "Global Expansion", description: "Scaled operations across three continents within the first five years to meet enterprise demand." },
      { title: "The Tech Evolution", description: "Launched our comprehensive AI platform, transforming from a service provider to a technology-enabled partner." },
      { title: "Industry Specialization", description: "Developing dedicated centers of excellence for Healthcare, Finance, and Tech & SaaS sectors." },
      { title: "Strategic Acquisitions", description: "Acquired specialized AI startups to bolster our NLP, computer vision, and predictive capabilities." },
      { title: "The Present & Future", description: "Today, we handle millions of interactions daily and continue to pioneer human-in-the-loop AI models." }
    ],
    ctaText: "See Our Timeline"
  },
  "mission-vision": {
    slug: "mission-vision-values",
    title: "Mission, Vision & Values",
    metaTitle: "Mission, Vision & Values | Claritiy",
    metaDescription: "Our guiding principles that shape Claritiy's culture and operations.",
    iconName: "Target",
    headline: "Driven by Purpose, Guided by Values",
    description: "Our mission is to empower enterprises with intelligent automation while elevating human potential. We envision a world where technology and talent work in perfect harmony.",
    features: [
      { title: "Mission", description: "To deliver transformative ROI for our clients through the seamless orchestration of artificial intelligence and human expertise." },
      { title: "Vision", description: "To be the undisputed global leader in intelligent operations, setting the standard for the future of work." },
      { title: "Integrity", description: "We operate with radical transparency, honoring our commitments and prioritizing data ethics above all." },
      { title: "Innovation", description: "We challenge the status quo, constantly seeking better, faster, and smarter ways to solve complex problems." },
      { title: "Empathy", description: "We design technology that augments rather than replaces human connection, maintaining empathy at the core of our service." },
      { title: "Excellence", description: "We are relentless in our pursuit of operational perfection, measuring success by the tangible value we create." }
    ],
    ctaText: "Read Our Culture Deck"
  },
  "certifications": {
    slug: "certifications-compliance",
    title: "Certifications & Compliance",
    metaTitle: "Certifications & Compliance | Claritiy",
    metaDescription: "Learn about Claritiy's enterprise-grade security and compliance standards.",
    iconName: "ShieldCheck",
    headline: "Security Built into Our DNA",
    description: "We handle the world's most sensitive data. Our comprehensive compliance framework ensures that your operations are secure, private, and fully aligned with global regulations.",
    features: [
      { title: "SOC 2 Type II", description: "Annual independent audits validating our controls over security, availability, and confidentiality." },
      { title: "ISO 27001", description: "Internationally recognized standard for information security management systems (ISMS)." },
      { title: "HIPAA Compliant", description: "Strict safeguards for protected health information (PHI), serving major healthcare providers securely." },
      { title: "GDPR / CCPA Ready", description: "Comprehensive data privacy frameworks protecting consumer rights across Europe, California, and globally." },
      { title: "PCI DSS Level 1", description: "Highest level of payment card industry security for processing financial transactions safely." },
      { title: "Zero Trust Architecture", description: "Internal security model requiring strict identity verification for every person and device." }
    ],
    stats: [
      { value: "100%", label: "Compliance Rate" },
      { value: "0", label: "Major Breaches" },
      { value: "256-bit", label: "Data Encryption" },
      { value: "24/7", label: "SOC Monitoring" }
    ],
    ctaText: "View Security Portal"
  },
  "partners-alliances": {
    slug: "partners-alliances",
    title: "Partners & Alliances",
    metaTitle: "Partners & Alliances | Claritiy",
    metaDescription: "Claritiy's strategic partnerships with leading technology and industry platforms.",
    iconName: "Share2",
    headline: "Better Together: Our Ecosystem",
    description: "We partner with the world's leading technology providers to build a seamless ecosystem that amplifies your existing tech stack and accelerates innovation.",
    features: [
      { title: "Cloud Providers", description: "Strategic partnerships with AWS, Google Cloud, and Microsoft Azure for scalable, reliable infrastructure." },
      { title: "AI Research Partners", description: "Collaborating with OpenAI, Anthropic, and leading universities to integrate cutting-edge LLMs." },
      { title: "CRM Platforms", description: "Deep integrations and certified partnerships with Salesforce, HubSpot, and Zendesk." },
      { title: "RPA Vendors", description: "Strategic alliances with UiPath and Automation Anywhere for seamless workflow automation." },
      { title: "Telecom Giants", description: "Direct routing and infrastructure partnerships with Cisco, Avaya, and Twilio for crystal-clear voice." },
      { title: "Industry Consortiums", description: "Active members of fintech, healthcare, and retail associations driving industry standards." }
    ],
    ctaText: "Become a Partner"
  },
  "awards-recognition": {
    slug: "awards-recognition",
    title: "Awards & Recognition",
    metaTitle: "Awards & Recognition | Claritiy",
    metaDescription: "Industry recognition and awards for Claritiy's BPO and AI excellence.",
    iconName: "Trophy",
    headline: "Recognized for Excellence",
    description: "Our commitment to innovation and client success has been consistently recognized by leading industry analysts, publications, and our peers.",
    features: [
      { title: "Gartner Magic Quadrant", description: "Named a Leader in Customer Service BPO for three consecutive years." },
      { title: "Everest Group PEAK Matrix", description: "Recognized as a Star Performer in Intelligent Automation in Business Processes." },
      { title: "AI Innovation Award", description: "Winner of the global AI Innovation in Enterprise Operations award." },
      { title: "Great Place to Work", description: "Certified as a Great Place to Work in 12 of our major global delivery locations." },
      { title: "Stevie Awards", description: "Gold Stevie winner for Sales & Customer Service excellence." },
      { title: "Fast Company", description: "Listed among the Most Innovative Companies in enterprise technology." }
    ],
    stats: [
      { value: "50+", label: "Industry Awards" },
      { value: "#1", label: "in AI Innovation" },
      { value: "12", label: "Top Employer Awards" },
      { value: "3x", label: "Gartner Leader" }
    ],
    ctaText: "See Full Press Kit"
  },
  "esg": {
    slug: "esg-sustainability",
    title: "ESG & Sustainability",
    metaTitle: "ESG & Sustainability | Claritiy",
    metaDescription: "Claritiy's commitment to Environmental, Social, and Governance (ESG) principles.",
    iconName: "Leaf",
    headline: "Operating with Integrity & Responsibility",
    description: "We believe that responsible business is good business. Our ESG framework ensures we create value for our clients while protecting the planet and uplifting our communities.",
    features: [
      { title: "Carbon Neutral Aim", description: "Committed to achieving net-zero carbon emissions across our global footprint by 2030." },
      { title: "Green Facilities", description: "Transitioning all operational centers to renewable energy and sustainable building standards (LEED)." },
      { title: "Ethical AI Governance", description: "Strict internal review boards to ensure our AI models are transparent, unbiased, and safe." },
      { title: "Data Privacy Standards", description: "Going beyond compliance to treat user data as a fundamental human right." },
      { title: "Supplier Code of Conduct", description: "Ensuring our entire supply chain matches our commitment to labor rights and environmental standards." },
      { title: "Transparent Reporting", description: "Publishing annual sustainability reports mapped to GRI and SASB frameworks." }
    ],
    ctaText: "Download ESG Report"
  },
  "diversity": {
    slug: "diversity-inclusion",
    title: "Diversity & Inclusion",
    metaTitle: "Diversity & Inclusion | Claritiy",
    metaDescription: "Building a culture of belonging and equity at Claritiy.",
    iconName: "Users",
    headline: "Strength in Our Differences",
    description: "We are building a culture where everyone belongs. We believe that diverse teams driving inclusive technology is the key to solving the world's most complex challenges.",
    features: [
      { title: "Global Representation", description: "Our workforce represents over 80 nationalities, speaking more than 40 languages." },
      { title: "Gender Equity", description: "Committed to 50/50 gender representation across all levels of leadership by 2028." },
      { title: "Pay Parity", description: "Conducting regular, independent audits to ensure equal pay for equal work across the globe." },
      { title: "Employee Resource Groups", description: "Sponsoring 10+ internal ERGs to foster community, mentorship, and advocacy." },
      { title: "Inclusive Hiring", description: "Using AI to eliminate bias in job descriptions and standardizing blind resume screening." },
      { title: "Accessibility Standard", description: "Ensuring our internal tools and external products are accessible to people of all abilities." }
    ],
    ctaText: "View D&I Report"
  },
  "community": {
    slug: "community-impact",
    title: "Community Impact",
    metaTitle: "Community Impact | Claritiy",
    metaDescription: "How Claritiy gives back through the Claritiy Foundation.",
    iconName: "Heart",
    headline: "Uplifting the Communities We Call Home",
    description: "Technology should be an equalizer. Through the Claritiy Foundation, we invest in digital literacy, education, and local development to create lasting social impact.",
    features: [
      { title: "Digital Literacy Programs", description: "Donating technology and training to underserved schools in our operational regions." },
      { title: "Skill Development", description: "Providing free contact center and tech training to marginalized youth to bridge the employment gap." },
      { title: "Employee Volunteering", description: "Offering 3 paid volunteer days annually for our team members to support local causes." },
      { title: "Disaster Relief", description: "Rapid response matching funds to support communities affected by natural disasters." },
      { title: "Local Sourcing", description: "Prioritizing local vendors to stimulate micro-economies around our global fulfillment centers." },
      { title: "Tech for Good", description: "Providing pro-bono AI implementation support for qualifying global non-profits." }
    ],
    stats: [
      { value: "100k+", label: "Volunteer Hours" },
      { value: "50+", label: "Schools Supported" },
      { value: "$2M+", label: "Given Annually" },
      { value: "10,000", label: "Lives Impacted" }
    ],
    ctaText: "Learn About The Foundation"
  }
};
