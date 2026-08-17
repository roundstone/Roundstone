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
            <Text variant="caption" className="text-burntsienna font-semibold uppercase tracking-widest mb-4 text-sm">
              Since 2011 · Kaduna, Nigeria
            </Text>
          </FadeIn>

          <FadeIn delay={0.05}>
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
            {/* Floating social proof badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-xl shadow-lg shadow-biscay/8 px-5 py-4 z-20 border border-mystic/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-burntsienna/10 rounded-full flex items-center justify-center">
                  <span className="text-burntsienna text-lg font-bold">13+</span>
                </div>
                <div>
                  <p className="text-biscay font-semibold text-sm">Years of Impact</p>
                  <p className="text-palesky text-xs">Government · Enterprise · Consumer</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Grid>
    </Section>
  );
}
