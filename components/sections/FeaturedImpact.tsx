import React from "react";
import { Button } from "@/components/ui/Button";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export default function FeaturedImpact() {
  const steps = [
    {
      title: "The Challenge",
      desc: "Our clients often operate in complex environments where manual processes, disconnected systems or outdated technology make it difficult to work efficiently and serve people effectively."
    },
    {
      title: "The Approach",
      desc: "We work closely with client teams to understand how the organisation operates, identify what needs to change and design a solution around real operational requirements."
    },
    {
      title: "The Result",
      desc: "Digital systems that are practical, secure, scalable and built to continue delivering value after launch."
    }
  ];

  return (
    <Section bg="biscay" className="py-24 text-white">
      <FadeIn className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
        <Heading level={2} className="mb-6 text-white">From challenge to working solution</Heading>
        <Text variant="lead" className="text-mystic/90">
          Great technology starts with understanding the problem before building the solution.
        </Text>
      </FadeIn>

      <StaggerContainer>
        <Grid className="gap-y-12">
          {steps.map((step, i) => (
            <StaggerItem key={i} className="col-span-1 md:col-span-4 bg-white/5 border border-white/10 p-8 rounded-xl">
              <Text variant="caption" className="text-burntsienna font-semibold uppercase tracking-wider mb-4">
                Step 0{i + 1}
              </Text>
              <Heading level={4} className="mb-4 text-white">{step.title}</Heading>
              <Text variant="body" className="text-mystic/80">{step.desc}</Text>
            </StaggerItem>
          ))}
        </Grid>
      </StaggerContainer>

      <FadeIn delay={0.4} className="mt-16 text-center">
        <Button href="/work" variant="primary">Explore Our Work</Button>
      </FadeIn>
    </Section>
  );
}
