import React from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";

export default function FinalCTA() {
  return (
    <Section bg="biscay" className="text-center py-24 lg:py-32">
      <FadeIn>
        <Heading level={2} className="text-white mb-6">Have a project in mind?</Heading>
        <Text variant="lead" className="text-mystic max-w-2xl mx-auto mb-10">
          Let&apos;s discuss how we can build the technical foundation for your next major initiative.
        </Text>
        <Button href="/contact" variant="accent" className="px-8 py-4 text-lg">
          Book a Consultation
        </Button>
      </FadeIn>
    </Section>
  );
}
