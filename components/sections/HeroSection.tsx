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

          <FadeIn delay={0.05}>
            <Heading level={1} className="mb-6 max-w-3xl">
              Powering growth for leading institutions.
            </Heading>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Text variant="lead" className="mb-10 max-w-2xl">
              Roundstone is the technology partner for visionary institutions. We design, build and support digital solutions for government agencies, financial institutions, foundations and businesses.
            </Text>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary">
                Discuss a Project
              </Button>
              <Button href="/work" variant="ghost">
                View Our Work
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="col-span-1 md:col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
          <FadeIn delay={0.3} direction="left">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl shadow-biscay/10">
              {/* Warm overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-biscay/30 via-transparent to-burntsienna/10 z-10 pointer-events-none"></div>
              <Image
                src="/image/hero-infrastructure.jpg"
                alt="Technology infrastructure powering Nigeria's institutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </Grid>
    </Section>
  );
}
