import { Metadata } from "next";
import { IndustryHero } from "@/components/Industries/SharedTemplate/IndustryHero";
import { IndustryServices } from "@/components/Industries/SharedTemplate/IndustryServices";
import { IndustryCompliance } from "@/components/Industries/SharedTemplate/IndustryCompliance";
import { IndustryTechScale } from "@/components/Industries/SharedTemplate/IndustryTechScale";
import { IndustrySegments } from "@/components/Industries/SharedTemplate/IndustrySegments";
import { MetricsAndPricing } from "@/components/Solutions/SharedTemplate/MetricsAndPricing";
import { ecommerceRetailData } from "@/data/industries/ecommerce-retail";

export const metadata: Metadata = {
  title: ecommerceRetailData.title,
  description: ecommerceRetailData.description,
};

export default function EcommerceRetailPage() {
  const data = ecommerceRetailData;
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <IndustryHero data={data.heroData} breadcrumb={data.breadcrumb} />
      <IndustryServices data={data.services} />
      <IndustryCompliance data={data.compliance} />
      <IndustryTechScale data={data.technology} />
      <IndustrySegments data={data.segments} />
      <MetricsAndPricing metrics={data.metrics} pricing={{title: "", models: []}} />
      <section style={{ textAlign: "center", padding: "6rem 0", background: "var(--primary)", color: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "2rem" }}>Scale Your Retail Operations Today</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button style={{ background: "white", color: "var(--primary)", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 700, border: "none" }}>{data.cta.primaryBtn}</button>
            <button style={{ background: "transparent", color: "white", border: "1px solid white", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 700 }}>{data.cta.secondaryBtn}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
