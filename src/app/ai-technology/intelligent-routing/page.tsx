import { Metadata } from "next";
import { aiCapabilities } from "@/data/ai-capabilities";
import { AICapabilityTemplate } from "@/components/AITechnology/AICapabilityTemplate";

const data = aiCapabilities["intelligent-routing"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function IntelligentRoutingPage() {
  return <AICapabilityTemplate data={data} />;
}
