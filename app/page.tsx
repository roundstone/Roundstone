import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import FeaturedImpact from "@/components/sections/FeaturedImpact";
import StatsSection from "@/components/sections/StatsSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProductsSection from "@/components/sections/ProductsSection";
import CaseVignettes from "@/components/sections/CaseVignettes";
import AboutRoundstoneHome from "@/components/sections/AboutRoundstoneHome";
import Testimonials from "@/components/sections/Testimonials";
import WhyRoundstone from "@/components/sections/WhyRoundstone";
import InsightsPreview from "@/components/sections/InsightsPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <TrustBar />
      <FeaturedImpact />
      <StatsSection />
      <ServicesGrid />
      <ProductsSection />
      <CaseVignettes />
      <AboutRoundstoneHome />
      <WhyRoundstone />
      <InsightsPreview />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
