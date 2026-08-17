import React from "react";
import { Button } from "@/components/ui/Button";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";

import Image from "next/image";
import { VIGNETTES } from "@/lib/constants";

export default function CaseVignettes() {
  return (
    <Section bg="white">
      <FadeIn className="mb-16 md:mb-24 max-w-3xl">
        <Heading level={2} className="mb-6">Proof, not claims.</Heading>
        <Text variant="lead">
          Our work spans government, financial services, development organisations and enterprise. Here are some of the systems we have helped bring to life.
        </Text>
      </FadeIn>

      <div className="space-y-24">
        {VIGNETTES.map((v, i) => (
          <Grid key={i} className="items-center group">
            <div className={`col-span-1 md:col-span-6 ${v.reverse ? 'md:order-2' : ''}`}>
              <FadeIn direction={v.reverse ? "right" : "left"}>
                <div className="aspect-[4/3] bg-mystic/50 rounded-lg overflow-hidden relative transition-all duration-500 shadow-sm border border-mystic/50 group-hover:shadow-md">
                  {v.image ? (
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-palesky/50 font-medium">
                      [Image: {v.title}]
                    </div>
                  )}
                  <div className="absolute inset-0 bg-biscay/5 mix-blend-multiply group-hover:opacity-0 transition-opacity z-10"></div>
                </div>
              </FadeIn>
            </div>
            <div className={`col-span-1 md:col-span-6 ${v.reverse ? 'md:pr-12 lg:pr-24 md:order-1' : 'md:pl-12 lg:pl-24'}`}>
              <FadeIn direction={v.reverse ? "left" : "right"} delay={0.2}>
                <Text variant="caption" className="text-burntsienna font-semibold uppercase tracking-wider mb-4">{v.client}</Text>
                <Heading level={3} className="mb-4">{v.title}</Heading>
                <Text variant="body" className="mb-8">{v.desc}</Text>
                {v.href && <Button href={v.href} variant="ghost">View Case Study</Button>}
              </FadeIn>
            </div>
          </Grid>
        ))}
      </div>
    </Section>
  );
}
