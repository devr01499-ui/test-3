export interface HeroData {
  badgeIcon: string;
  badgeText: string;
  headline: string;
  subheading: string;
  bullets: string[];
  primaryCta: string;
  secondaryCta: string;
  metricsOverlay: { value: string; label: string }[];
  visualIcon: string;
  visualText: string;
}

export interface QuickStat {
  icon: string;
  text: string;
}

export interface ServiceItem {
  title: string;
  icon: string;
  features: string[];
}

export interface ProcessFlow {
  title: string;
  trigger: string;
  routerParams: string;
  aiPath: { title: string; subtitle: string; color: string };
  humanPath: { title: string; subtitle: string; color: string };
  qualityMonitor: string;
  benefits: { icon: string; text: string }[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  bullets: string[];
}

export interface UseCase {
  icon: string;
  title: string;
  challenge: string;
  solution: string;
  results: string;
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface PricingModel {
  title: string;
  bestFor: string;
  priceValue: string;
  priceUnit: string;
  isPopular?: boolean;
}

export interface SuccessMetric {
  label: string;
  value: string;
  progressPercent: number;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface RelatedSolution {
  title: string;
  link: string;
}

export interface SolutionPageData {
  title: string;
  description: string;
  breadcrumb: string;
  heroData: HeroData;
  quickStats: QuickStat[];
  services: { title: string; items: ServiceItem[] };
  processFlow: ProcessFlow;
  features: { title: string; items: FeatureItem[] };
  useCases: { title: string; tabs: string[]; items: UseCase[] };
  techStack: { title: string; categories: TechCategory[] };
  pricing: { title: string; models: PricingModel[] };
  metrics: { title: string; items: SuccessMetric[] };
  faqs: { title: string; items: FAQ[] };
  related: { title: string; items: RelatedSolution[] };
  cta: { title: string; primaryBtn: string; secondaryBtn1: string; secondaryBtn2: string };
}
