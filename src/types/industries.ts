export interface Cert {
  id: string;
  name: string;
}

export interface ClientSuccess {
  stat1: string;
  stat2: string;
}

export interface IndustryHeroData {
  badgeIcon: string;
  badgeText: string;
  headline: string;
  subheading: string;
  bullets: string[];
  primaryCta: string;
  secondaryCta: string;
  visualIcon: string;
  visualList: string[];
  certifications: Cert[];
  clientSuccess: ClientSuccess;
}

export interface ServiceGridItem {
  title: string;
  features: string[];
}

export interface IndustryServicesData {
  title: string;
  gridItems: ServiceGridItem[];
}

export interface SecurityMeasure {
  id: string;
  text: string;
}

export interface ComplianceCard {
  title: string;
  bullets: string[];
}

export interface IndustryComplianceData {
  title: string;
  cards: ComplianceCard[];
  securityMeasures: SecurityMeasure[];
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface IndustryTechData {
  title: string;
  categories: TechCategory[];
}

export interface SegmentTab {
  name: string; // Used as the tab key
  title: string; // e.g. "HOSPITALS & HEALTH SYSTEMS"
  clientsCount: string;
  services: string[];
}

export interface IndustrySegmentsData {
  title: string;
  tabs: string[]; // e.g. ["All", "Hospitals", "Clinics", "Payers"]
  items: SegmentTab[];
}

export interface SuccessMetric {
  label: string;
  value: string;
  progressPercent: number;
}

export interface IndustryPageData {
  title: string;
  description: string;
  slug: string;
  breadcrumb: string;
  
  heroData: IndustryHeroData;
  services: IndustryServicesData;
  compliance: IndustryComplianceData;
  technology: IndustryTechData;
  segments: IndustrySegmentsData;
  metrics: { title: string; items: SuccessMetric[] };
  faqs?: { title: string; items: { q: string, a: string }[] };
  
  cta: { primaryBtn: string; secondaryBtn: string };
}
