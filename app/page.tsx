import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import StatsSection from "@/components/sections/StatsSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CaseVignettes from "@/components/sections/CaseVignettes";
import Testimonials from "@/components/sections/Testimonials";
import WhyRoundstone from "@/components/sections/WhyRoundstone";
import LeadershipStrip from "@/components/sections/LeadershipStrip";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <ServicesGrid />
      <CaseVignettes />
      <Testimonials />
      <WhyRoundstone />
      <LeadershipStrip />
      <FinalCTA />
    </div>
  );
}

