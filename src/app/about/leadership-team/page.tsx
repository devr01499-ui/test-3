import { Metadata } from "next";
import { aboutData } from "@/data/about";
import { AboutTemplate } from "@/components/About/AboutTemplate";

const data = aboutData["leadership-team"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function LeadershipTeamPage() {
  return <AboutTemplate data={data} />;
}
