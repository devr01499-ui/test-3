import { Metadata } from "next";
import { aiCapabilities } from "@/data/ai-capabilities";
import { AICapabilityTemplate } from "@/components/AITechnology/AICapabilityTemplate";

const data = aiCapabilities["predictive-analytics"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function PredictiveAnalyticsPage() {
  return <AICapabilityTemplate data={data} />;
}
