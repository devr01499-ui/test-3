import styles from "./page.module.css";
import { HeroSection } from "@/components/Home/HeroSection";
import { SynergyShowcase } from "@/components/Home/SynergyShowcase";
import { ServicesCarousel } from "@/components/Home/ServicesCarousel";
import { IndustryExpertise } from "@/components/Home/IndustryExpertise";
import { AITechSpotlight } from "@/components/Home/AITechSpotlight";
import { ResultsDashboard } from "@/components/Home/ResultsDashboard";
import { SuccessStories } from "@/components/Home/SuccessStories";
import { LogoWall } from "@/components/Home/LogoWall";
import { PresenceMap } from "@/components/Home/PresenceMap";
import { ResourcesHub } from "@/components/Home/ResourcesHub";
import { ROICalculator } from "@/components/Home/ROICalculator";
import { ComplianceStrip } from "@/components/Home/ComplianceStrip";
import { FinalCTA } from "@/components/Home/FinalCTA";


export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <SynergyShowcase />
      <ServicesCarousel />
      <IndustryExpertise />
      <AITechSpotlight />
      <ResultsDashboard />
      <SuccessStories />
      <LogoWall />
      <PresenceMap />
      <ResourcesHub />
      <ROICalculator />
      <ComplianceStrip />
      <FinalCTA />
    </div>
  );
}
