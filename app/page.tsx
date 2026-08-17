import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import FeaturedImpact from "@/components/sections/FeaturedImpact";
import StatsSection from "@/components/sections/StatsSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CaseVignettes from "@/components/sections/CaseVignettes";
import AboutRoundstoneHome from "@/components/sections/AboutRoundstoneHome";
import Testimonials from "@/components/sections/Testimonials";
import WhyRoundstone from "@/components/sections/WhyRoundstone";
import InsightsPreview from "@/components/sections/InsightsPreview";
import LeadershipStrip from "@/components/sections/LeadershipStrip";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <TrustBar />
      <FeaturedImpact />
      <StatsSection />
      <ServicesGrid />
      <CaseVignettes />
      <AboutRoundstoneHome />
      <WhyRoundstone />
      <InsightsPreview />
      <Testimonials />
      <LeadershipStrip />
      <FinalCTA />
    </div>
  );
}

