import { Metadata } from "next";
import { aiCapabilities } from "@/data/ai-capabilities";
import { AICapabilityTemplate } from "@/components/AITechnology/AICapabilityTemplate";

const data = aiCapabilities["conversational-ai"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function ConversationalAIPage() {
  return <AICapabilityTemplate data={data} />;
}
