import { Metadata } from "next";
import { aboutData } from "@/data/about";
import { AboutTemplate } from "@/components/About/AboutTemplate";

const data = aboutData["awards-recognition"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function AwardsRecognitionPage() {
  return <AboutTemplate data={data} />;
}
