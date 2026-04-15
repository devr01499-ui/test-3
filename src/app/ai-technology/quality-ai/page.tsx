import { Metadata } from "next";
import { aiCapabilities } from "@/data/ai-capabilities";
import { AICapabilityTemplate } from "@/components/AITechnology/AICapabilityTemplate";

const data = aiCapabilities["quality-ai"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function QualityAIPage() {
  return <AICapabilityTemplate data={data} />;
}
