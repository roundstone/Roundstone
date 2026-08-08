import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessDiagram from "@/components/sections/services/ProcessDiagram";
import FinalCTA from "@/components/sections/FinalCTA";

import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Services | Roundstone Consulting",
  description: "Discover our comprehensive suite of services, from bespoke software development to enterprise ERP implementations.",
});

export default function ServicesPage() {
  return (
    <main className="pt-24 md:pt-32">
      <Section bg="white" className="pb-12 md:pb-20">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <Heading level={1} className="mb-6">
            Technology that powers institutions.
          </Heading>
          <Text variant="lead" className="text-palesky">
            From bespoke software to secure infrastructure, we deliver the operational backbone for organisations that cannot afford downtime.
          </Text>
        </FadeIn>
      </Section>
      
      <ServicesGrid />
      
      <ProcessDiagram />
      
      <FinalCTA />
    </main>
  );
}
