import React from "react";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export default function WhyRoundstone() {
  const differentiators = [
    {
      title: "Senior expertise stays involved",
      desc: "Our senior team remains closely involved throughout each engagement, helping decisions move faster and keeping delivery aligned with the client's objectives."
    },
    {
      title: "Built for demanding environments",
      desc: "Our experience includes government, finance and institutional systems where security, reliability and continuity are essential."
    },
    {
      title: "We stay beyond launch",
      desc: "Delivery does not end when a system goes live. Every engagement includes structured handover and post-launch support to help clients operate confidently."
    }
  ];

  return (
    <Section bg="mystic">
      <Grid>
        <div className="col-span-1 lg:col-span-5 pr-0 lg:pr-12 mb-12 lg:mb-0">
          <FadeIn>
            <Heading level={2} className="mb-6">Why Roundstone?</Heading>
            <Text variant="body">
              We combine experienced people, practical technology and a delivery approach built around long-term results.
            </Text>
          </FadeIn>
        </div>
        
        <div className="col-span-1 lg:col-span-6 lg:col-start-7">
          <StaggerContainer className="flex flex-col gap-10">
            {differentiators.map((diff, i) => (
              <StaggerItem key={i}>
                <Heading level={4} className="mb-3">{diff.title}</Heading>
                <Text variant="body">{diff.desc}</Text>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Grid>
    </Section>
  );
}
