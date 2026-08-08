import React from "react";
import { Button } from "@/components/ui/Button";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroBackgroundRings } from "@/components/ui/HeroBackgroundRings";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
      <HeroBackgroundRings />
      <Grid className="items-center">
        <div className="col-span-1 md:col-span-12 lg:col-span-7 pr-0 lg:pr-12 relative z-10">
          <FadeIn>
            <Heading level={1} className="mb-6 max-w-3xl">
              Technology infrastructure for Nigeria&apos;s most trusted institutions.
            </Heading>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <Text variant="lead" className="mb-10 max-w-2xl">
              Since 2011, Roundstone Consulting has designed, built, and supported the
              software behind government agencies, leading foundations, and everyday
              financial services used by millions of Nigerians.
            </Text>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary">
                Book a Consultation
              </Button>
              <Button href="/work" variant="ghost">
                View Our Work
              </Button>
            </div>
          </FadeIn>
        </div>
        
        <div className="col-span-1 md:col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
          <FadeIn delay={0.3} direction="left">
            <div className="aspect-[4/5] bg-mystic relative rounded-lg overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-biscay/20 mix-blend-multiply z-10 transition-opacity duration-700 hover:opacity-0 pointer-events-none"></div>
              <Image 
                src="/image/team/team.jpg"
                alt="Modern Professionals Collaborating"
                fill
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </Grid>
    </Section>
  );
}
