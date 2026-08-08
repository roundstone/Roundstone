import React from "react";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export default function WhyRoundstone() {
  const differentiators = [
    {
      title: "Lean, senior-led delivery",
      desc: "You work directly with the architects and engineers building your platform. No bloated account layers, just technical experts focused on your outcome."
    },
    {
      title: "Institutional-grade reliability",
      desc: "Our platforms are designed for government scale and financial compliance from day one, ensuring security and zero downtime when it matters most."
    },
    {
      title: "Full lifecycle ownership",
      desc: "From initial strategy to the final build, every engagement includes a comprehensive 6-month supported handover to guarantee smooth operations."
    }
  ];

  return (
    <Section bg="mystic">
      <Grid>
        <div className="col-span-1 lg:col-span-5 pr-0 lg:pr-12 mb-12 lg:mb-0">
          <FadeIn>
            <Heading level={2} className="mb-6">Why Roundstone?</Heading>
            <Text variant="body">
              Our approach is deliberately lean. We keep delivery close to our senior team, which means faster decisions, fewer handoffs, and software that&apos;s built to still be running in five years, not five months.
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
