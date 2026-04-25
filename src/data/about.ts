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
    metaTitle: "About Us | AI Infrastructure Leaders",
    metaDescription: "Claritiy transforms traditional business operations into AI-driven powerhouses. We specialize in BPO, Manufacturing, and Government AI infrastructure.",
    iconName: "Globe",
    headline: "Upgrading the Core of Global Business",
    description: "Claritiy was founded with a singular vision: to bridge the gap between 'old school' operations and the future of AI infrastructure. We don't just add AI; we rebuild the foundation of BPO, Manufacturing, Real Estate, and Government sectors for maximum efficiency.",
    features: [
      { title: "BPO Infrastructure 2.0", description: "Transforming traditional contact centers into intelligent hubs using neural process orchestration and AI-human hybrid models." },
      { title: "Manufacturing Intelligence", description: "Integrating AI into supply chains and floor operations to predict bottlenecks and optimize production cycles." },
      { title: "Real Estate AI Mesh", description: "Revolutionizing property management and valuation through predictive data layers and automated tenant interactions." },
      { title: "Gov-Tech AI Backbone", description: "Supporting government agencies in building secure, scalable AI infrastructure for citizen services and urban planning." },
      { title: "Professional Upgrading", description: "Helping working professionals transition to AI-augmented roles in a professional, fun, and engaging way." },
      { title: "Skill Maximization", description: "Using AI as the base layer to amplify human talent, ensuring every professional reaches their maximum output potential." }
    ],
    stats: [
      { value: "Jan 2025", label: "Operations Launched" },
      { value: "4+", label: "Key Sectors Transformed" },
      { value: "24/7", label: "AI Infrastructure Support" },
      { value: "100%", label: "Skill-Augmented Growth" }
    ],
    ctaText: "Upgrade Your Infrastructure"
  },
  "leadership-team": {
    slug: "leadership-team",
    title: "Leadership Team",
    metaTitle: "Leadership | AI Infrastructure Experts",
    metaDescription: "Meet the specialized team driving the AI infrastructure revolution across BPO, Manufacturing, and Government sectors.",
    iconName: "Users",
    headline: "A Unified Vision for AI-Human Collaboration",
    description: "Our leadership is composed of industry veterans and AI pioneers dedicated to upgrading traditional business models. We focus on strategic management styles that embrace technical innovation without losing the human touch.",
    features: [
      { title: "Executive Strategy Group", description: "Architects of our global AI infrastructure roadmap and sector-specific transformation strategies." },
      { title: "AI Operations Board", description: "Ensuring seamless integration of neural networks into BPO and Manufacturing workflows." },
      { title: "Technical Innovation Lab", description: "Pioneering the AI tools that professionals use to maximize their daily output and skill utility." },
      { title: "Gov-Tech Advisory", description: "Specialized consultants working with public sector leaders to deploy secure AI backbones." },
      { title: "People & Professional Growth", description: "Dedicated to making the transition to AI 'professional and fun' for all working team members." },
      { title: "Enterprise Scaling Team", description: "Managing the rapid deployment of AI mesh networks across diverse global industries." }
    ],
    ctaText: "Work With Our Experts"
  },
  "our-story": {
    slug: "our-story",
    title: "Our Story / History",
    metaTitle: "Our Story | The AI Revolution",
    metaDescription: "Founded in January 2025, Claritiy is on a mission to modernize old-school business operations with next-gen AI infrastructure.",
    iconName: "TrendingUp",
    headline: "The 2025 AI Infrastructure Mandate",
    description: "Claritiy launched in January 2025 to solve a critical problem: the world was talking about AI, but businesses were still running on 20th-century infrastructure. We stepped in to provide the base layer for the next industrial revolution.",
    features: [
      { title: "January 2025: The Launch", description: "Claritiy established its headquarters with a focus on upgrading 'old school' BPO and Manufacturing models." },
      { title: "Building the AI Base", description: "Successfully deployed our first AI infrastructure mesh, proving that traditional management styles could be enhanced by AI." },
      { title: "Professional Fun Initiative", description: "Launched our unique training program to help professionals upgrade their skills alongside AI tools." },
      { title: "Sector Expansion", description: "Broadened our impact into Real Estate and Government sectors, building the backbone for smart cities and automated property ops." },
      { title: "Maximum Output Realization", description: "Demonstrated 3x productivity gains for partners by utilizing human skills on top of an AI-base foundation." },
      { title: "The Future of Work", description: "Continuing to lead the charge in infrastucture-first AI adoption for a more efficient global economy." }
    ],
    ctaText: "Explore Our Journey"
  },
  "mission-vision": {
    slug: "mission-vision-values",
    title: "Mission, Vision & Values",
    metaTitle: "Mission & Vision | Transforming Infrastructure",
    metaDescription: "Our mission is to upgrade global business infrastructure with AI while amplifying human potential and professional joy.",
    iconName: "Target",
    headline: "Upgrading the World's Operations",
    description: "Our objective is clear: upgrade the infrastructure of traditional business operations with AI. We follow or upgrade established management styles to ensure a smooth but powerful transition to the future.",
    features: [
      { title: "Infrastructure First", description: "We believe the foundation of any business must be intelligent, scalable, and AI-native." },
      { title: "Human Skill Amplification", description: "We use AI as a base layer so that human creativity and expertise can achieve maximum output." },
      { title: "Professional Fun", description: "We ensure that the transition to AI is engaging and rewarding for the professionals driving the change." },
      { title: "Sector Mastery", description: "Deep specialization in BPO, Manufacturing, Real Estate, and Government infrastructure." },
      { title: "Ethical Integration", description: "Modernizing operations while maintaining the integrity and management excellence of our partners." },
      { title: "Scalable Excellence", description: "Building systems that grow with your business, from local real estate to global manufacturing." }
    ],
    ctaText: "Join the Vision"
  },
  "certifications": {
    slug: "certifications-compliance",
    title: "Certifications & Compliance",
    metaTitle: "Compliance | Secure AI Infrastructure",
    metaDescription: "Claritiy ensures all AI infrastructure deployments meet the highest global security and ethical standards.",
    iconName: "ShieldCheck",
    headline: "Trust in Every AI Connection",
    description: "Building AI infrastructure for Government and Manufacturing requires uncompromising security. Our systems are designed to meet the most stringent compliance mandates worldwide.",
    features: [
      { title: "Enterprise-Grade Security", description: "End-to-end encryption for all BPO and Manufacturing data processing." },
      { title: "Public Sector Compliance", description: "Meeting international standards for government data handling and AI ethics." },
      { title: "Real Estate Privacy", description: "Secure data layers protecting sensitive property and tenant information." },
      { title: "AI Transparency", description: "Auditable AI models that ensure decision-making is clear, unbiased, and compliant." },
      { title: "Global Data Ethics", description: "Adhering to GDPR, CCPA, and emerging AI regulations across 50+ countries." },
      { title: "Operational Continuity", description: "Redundant AI infrastructure ensuring 99.99% uptime for mission-critical sectors." }
    ],
    stats: [
      { value: "100%", label: "Secure Deployments" },
      { value: "Tier 4", label: "Data Infrastructure" },
      { value: "Military", label: "Grade Encryption" },
      { value: "24/7", label: "Compliance Monitoring" }
    ],
    ctaText: "Review Security Protocols"
  },
  "partners-alliances": {
    slug: "partners-alliances",
    title: "Partners & Alliances",
    metaTitle: "Partnerships | Building the AI Mesh",
    metaDescription: "We collaborate with technology leaders and government agencies to build the future of AI infrastructure.",
    iconName: "Share2",
    headline: "The Infrastructure Ecosystem",
    description: "We don't work in isolation. Claritiy partners with hardware giants, software pioneers, and industry associations to ensure our AI infrastructure is the best in the world.",
    features: [
      { title: "BPO Tech Partners", description: "Collaborating with CRM and Voice leaders to embed AI into the customer support backbone." },
      { title: "Manufacturing Alliances", description: "Working with IoT and Robotics firms to bridge the gap between physical and digital AI." },
      { title: "Gov-Tech Coalitions", description: "Active members of public-private partnerships focused on national AI infrastructure." },
      { title: "Real Estate Tech Hubs", description: "Partnering with Prop-Tech leaders to integrate AI into building management systems." },
      { title: "Professional Growth Partners", description: "Collaborating with educational platforms to help professionals upgrade their skills." },
      { title: "Global Cloud Mesh", description: "Leveraging the world's most powerful compute networks to run our proprietary AI layers." }
    ],
    ctaText: "Partner with Claritiy"
  },
  "awards-recognition": {
    slug: "awards-recognition",
    title: "Awards & Recognition",
    metaTitle: "Recognition | Leading AI Infrastructure",
    metaDescription: "Recognized for our innovative approach to upgrading traditional business infrastructure with AI.",
    iconName: "Trophy",
    headline: "Setting New Standards",
    description: "Since our launch in early 2025, Claritiy has been recognized as a disruptor in the BPO and Manufacturing sectors for our infrastructure-first approach to AI.",
    features: [
      { title: "Infrastructure Innovator 2025", description: "Awarded for excellence in BPO infrastructure transformation." },
      { title: "BPO Revolution Award", description: "Recognized for human-centric AI design in the contact center industry." },
      { title: "Manufacturing Tech Star", description: "Honored for pioneering AI predictive maintenance models in factory settings." },
      { title: "Gov-Tech Breakthrough", description: "Commended for helping public sectors adopt scalable AI backbones safely." },
      { title: "Real Estate AI Leader", description: "Recognized for transforming property management through intelligent automation." },
      { title: "Professional Growth Award", description: "Celebrating our 'fun' approach to professional AI skill upgrading." }
    ],
    stats: [
      { value: "2025", label: "Industry Breakout" },
      { value: "Top 5", label: "Infrastructure Firms" },
      { value: "Gold", label: "Standard in AI" },
      { value: "10+", label: "Global Accolades" }
    ],
    ctaText: "See Our Recognition"
  },
  "esg": {
    slug: "esg-sustainability",
    title: "ESG & Sustainability",
    metaTitle: "ESG | Sustainable AI Infrastructure",
    metaDescription: "We build AI infrastructure that is both powerful and responsible, focusing on energy efficiency and social impact.",
    iconName: "Leaf",
    headline: "Intelligent Growth, Responsible Future",
    description: "Sustainability is at the core of our AI infrastructure. We focus on energy-efficient compute and ensuring that the transition to AI benefits every professional.",
    features: [
      { title: "Green AI Compute", description: "Optimizing our infrastructure to minimize energy consumption and carbon footprint." },
      { title: "Sustainable Manufacturing", description: "Reducing waste in factories through AI-driven predictive logistics." },
      { title: "Social Impact Hubs", description: "Bringing AI infrastructure to emerging markets to create local professional opportunities." },
      { title: "Professional Well-being", description: "Designing AI that reduces burnout and enhances job satisfaction for workers." },
      { title: "Ethical Gov-Tech", description: "Ensuring public AI systems are transparent, fair, and serve the common good." },
      { title: "Sustainable Real Estate", description: "Using AI to optimize building energy usage and reduce environmental impact." }
    ],
    ctaText: "Our Sustainability Report"
  },
  "diversity": {
    slug: "diversity-inclusion",
    title: "Diversity & Inclusion",
    metaTitle: "Diversity | AI for Everyone",
    metaDescription: "We believe that diverse perspectives are essential for building the world's most effective AI infrastructure.",
    iconName: "Users",
    headline: "Inclusive Infrastructure",
    description: "A global AI infrastructure must be built by a global team. We prioritize diverse perspectives to ensure our AI models are fair and effective for everyone.",
    features: [
      { title: "Global Talent Mesh", description: "Recruiting from diverse backgrounds to bring unique insights to AI development." },
      { title: "Bias-Free AI Models", description: "Rigorous testing to ensure our infrastructure doesn't perpetuate social biases." },
      { title: "Professional Equity", description: "Ensuring every worker has the tools and support to upgrade to an AI-augmented role." },
      { title: "Accessible Tech", description: "Designing our AI interfaces to be usable by professionals of all ability levels." },
      { title: "Community-Led Growth", description: "Partnering with local groups to bring AI training to underrepresented communities." },
      { title: "Inclusive Governance", description: "Ensuring our leadership reflects the diversity of the industries we serve." }
    ],
    ctaText: "Explore Our D&I Mission"
  },
  "community": {
    slug: "community-impact",
    title: "Community Impact",
    metaTitle: "Impact | Uplifting Professionals",
    metaDescription: "We invest in the communities where we build AI infrastructure, focusing on skill development and local growth.",
    iconName: "Heart",
    headline: "Building More Than Just Tech",
    description: "Through the Claritiy Foundation, we help professionals in our communities upgrade their skills and prepare for an AI-augmented future in a fun, rewarding way.",
    features: [
      { title: "Professional Skill-Up Hubs", description: "Local centers where workers can learn to use AI as a base for their expertise." },
      { title: "BPO Community Grants", description: "Supporting local organizations that focus on worker education and digital literacy." },
      { title: "Manufacturing Apprenticeships", description: "Helping factory workers transition to tech-augmented roles through hands-on training." },
      { title: "Urban AI Initiatives", description: "Partnering with local governments to build smart, AI-powered public infrastructure." },
      { title: "Tech For Good Grants", description: "Providing pro-bono AI infrastructure support for non-profits in our operational areas." },
      { title: "Engaging Education", description: "Making AI learning fun and professional for the next generation of workers." }
    ],
    stats: [
      { value: "5000+", label: "Pros Upgraded" },
      { value: "20+", label: "Cities Supported" },
      { value: "1M+", label: "Invested in Skills" },
      { value: "100%", label: "Local Engagement" }
    ],
    ctaText: "Learn About Our Impact"
  }
};
