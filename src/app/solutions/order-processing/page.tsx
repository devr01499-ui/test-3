import { Metadata } from "next";
import { HeroAndStats } from "@/components/Solutions/SharedTemplate/HeroAndStats";
import { ServicesAndFeatures } from "@/components/Solutions/SharedTemplate/ServicesAndFeatures";
import { UseCasesAndTech } from "@/components/Solutions/SharedTemplate/UseCasesAndTech";
import { MetricsAndPricing } from "@/components/Solutions/SharedTemplate/MetricsAndPricing";
import { FAQAndCTA } from "@/components/Solutions/SharedTemplate/FAQAndCTA";
import { orderProcessingData } from "@/data/solutions/order-processing";

export const metadata: Metadata = {
  title: orderProcessingData.title,
  description: orderProcessingData.description,
};

export default function OrderProcessingPage() {
  const data = orderProcessingData;
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <HeroAndStats heroData={data.heroData} quickStats={data.quickStats} breadcrumb={data.breadcrumb} />
      <ServicesAndFeatures services={data.services} processFlow={data.processFlow} features={data.features} />
      <UseCasesAndTech useCases={data.useCases} techStack={data.techStack} />
      <MetricsAndPricing pricing={data.pricing} metrics={data.metrics} />
      <FAQAndCTA faqs={data.faqs} related={data.related} cta={data.cta} />
    </div>
  );
}
