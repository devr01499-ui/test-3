import { Metadata } from "next";
import { HeroAndStats } from "@/components/Solutions/CustomerService/HeroAndStats";
import { ServicesAndFeatures } from "@/components/Solutions/CustomerService/ServicesAndFeatures";
import { UseCasesAndTech } from "@/components/Solutions/CustomerService/UseCasesAndTech";
import { MetricsAndPricing } from "@/components/Solutions/CustomerService/MetricsAndPricing";
import { FAQAndCTA } from "@/components/Solutions/CustomerService/FAQAndCTA";

export const metadata: Metadata = {
  title: "Customer Service Solutions | Claritiy",
  description: "Exceptional customer experiences with AI-powered support and human intelligence. 24/7 omnichannel coverage, over 50 languages.",
};

export default function CustomerServicePage() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <HeroAndStats />
      <ServicesAndFeatures />
      <UseCasesAndTech />
      <MetricsAndPricing />
      <FAQAndCTA />
    </div>
  );
}
