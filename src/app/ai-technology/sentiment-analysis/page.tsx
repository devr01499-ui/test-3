import { Metadata } from "next";
import { aiCapabilities } from "@/data/ai-capabilities";
import { AICapabilityTemplate } from "@/components/AITechnology/AICapabilityTemplate";

const data = aiCapabilities["sentiment-analysis"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function SentimentAnalysisPage() {
  return <AICapabilityTemplate data={data} />;
}
