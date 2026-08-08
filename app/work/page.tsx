import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import PortfolioSection from "@/components/sections/work/PortfolioSection";
import FinalCTA from "@/components/sections/FinalCTA";

import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Work | Roundstone Consulting",
  description: "Explore our portfolio of projects across government, enterprise, and consumer sectors.",
});

export default function WorkPage() {
  return (
    <main className="pt-24 md:pt-32">
      <Section bg="white" className="pb-8 md:pb-12">
        <FadeIn className="max-w-3xl">
          <Heading level={1} className="mb-6">
            Proof, not just claims.
          </Heading>
          <Text variant="lead" className="text-palesky">
            A selection of the platforms, portals, and products we&apos;ve built for Nigeria&apos;s leading institutions and emerging businesses.
          </Text>
        </FadeIn>
      </Section>
      
      <PortfolioSection />
      
      <FinalCTA />
    </main>
  );
}
