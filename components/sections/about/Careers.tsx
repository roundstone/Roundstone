import React from "react";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export default function Careers() {
  return (
    <Section bg="white" className="border-t border-mystic">
      <Grid className="items-center">
        <div className="col-span-1 md:col-span-12 lg:col-span-6 pr-0 lg:pr-12 mb-12 lg:mb-0">
          <FadeIn>
            <Heading level={2} className="mb-6">Careers</Heading>
            <Text variant="lead" className="mb-8">
              We hire for curiosity and hold onto people through investment, not perks.
            </Text>
            <Text variant="body" className="mb-8">
              Every team member goes through structured onboarding and ongoing technical, product, QA, and customer-service training - because the software we ship is only as good as the people maintaining it.
            </Text>
          </FadeIn>
        </div>
        
        <div className="col-span-1 md:col-span-12 lg:col-span-5 lg:col-start-8">
          <FadeIn delay={0.2} direction="left">
            <div className="bg-mystic p-10 rounded-lg text-center border border-mystic/80 shadow-sm">
              <Heading level={4} className="mb-4">Current Openings</Heading>
              <Text variant="body" className="mb-8 text-palesky">
                We don&apos;t have any open roles at the moment, but we are always looking to meet talented engineers, designers, and consultants. Send us your CV, and we&apos;ll keep you in mind for future opportunities.
              </Text>
              <Button href="mailto:it@roundstoneconsulting.co.uk" variant="primary" className="w-full justify-center">
                Submit Your CV
              </Button>
            </div>
          </FadeIn>
        </div>
      </Grid>
    </Section>
  );
}
