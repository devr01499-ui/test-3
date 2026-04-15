import { Metadata } from "next";
import { IndustryHero } from "@/components/Industries/SharedTemplate/IndustryHero";
import { IndustryServices } from "@/components/Industries/SharedTemplate/IndustryServices";
import { IndustryCompliance } from "@/components/Industries/SharedTemplate/IndustryCompliance";
import { IndustryTechScale } from "@/components/Industries/SharedTemplate/IndustryTechScale";
import { IndustrySegments } from "@/components/Industries/SharedTemplate/IndustrySegments";
import { MetricsAndPricing } from "@/components/Solutions/SharedTemplate/MetricsAndPricing";
import { automotiveData } from "@/data/industries/automotive";

export const metadata: Metadata = {
  title: automotiveData.title,
  description: automotiveData.description,
};

export default function AutomotivePage() {
  const data = automotiveData;
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <IndustryHero data={data.heroData} breadcrumb={data.breadcrumb} />
      <IndustryServices data={data.services} />
      <IndustryCompliance data={data.compliance} />
      <IndustryTechScale data={data.technology} />
      <IndustrySegments data={data.segments} />
      <MetricsAndPricing metrics={data.metrics} pricing={{ title: "", models: [] }} />
      <section style={{ textAlign: "center", padding: "6rem 0", background: "var(--primary)", color: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "2rem" }}>Drive Your Automotive Business Forward</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button style={{ background: "white", color: "var(--primary)", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 700, border: "none" }}>{data.cta.primaryBtn}</button>
            <button style={{ background: "transparent", color: "white", border: "1px solid white", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 700 }}>{data.cta.secondaryBtn}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
