import React from "react";
import { Button } from "@/components/ui/Button";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

export default function AboutRoundstoneHome() {
  return (
    <Section bg="white" className="py-24">
      <Grid className="items-center">
        <div className="col-span-1 md:col-span-6 pr-0 md:pr-12">
          <FadeIn>
            <Text variant="caption" className="text-burntsienna font-semibold uppercase tracking-wider mb-4">
              About Roundstone
            </Text>
            <Heading level={2} className="mb-6">
              Built in Nigeria. Delivering since 2011.
            </Heading>
            <div className="space-y-6 text-palesky mb-10">
              <Text variant="body">
                Roundstone Consulting was established in 2011 to help organisations solve complex operational problems through practical, dependable technology.
              </Text>
              <Text variant="body">
                Over the past 15 years, our work has grown across government, financial services, development organisations and enterprise, with projects ranging from national digital platforms to the systems businesses rely on every day.
              </Text>
              <Text variant="body">
                Today, our multidisciplinary team brings together strategy, design, engineering and technology to help organisations build systems that work for today and are ready for what comes next.
              </Text>
            </div>
            <Button href="/about" variant="ghost">Our Story</Button>
          </FadeIn>
        </div>

        <div className="col-span-1 md:col-span-6 mt-12 md:mt-0">
          <FadeIn delay={0.2} direction="left">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg border border-mystic/50">
              {/* Note: Placeholder image path, please replace with actual image if available */}
              <Image
                src="/image/team/team-2.jpg"
                alt="Team"
                fill
                className="object-cover"
              />
              {/* <div className="absolute inset-0 bg-mystic flex items-center justify-center">
                <Text variant="caption" className="text-palesky font-medium">[Company Image Placeholder]</Text>
              </div> */}
            </div>
          </FadeIn>
        </div>
      </Grid>
    </Section>
  );
}
