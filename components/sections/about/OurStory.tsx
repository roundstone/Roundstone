import React from "react";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

import { SECTORS } from "@/lib/constants";

export default function OurStory() {

  return (
    <>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-24 bg-white relative overflow-hidden">
        <Grid>
          <div className="col-span-1 md:col-span-12 lg:col-span-10 lg:col-start-2">
            <FadeIn>
              <Heading level={1} className="mb-12 max-w-4xl">
                Building Nigeria&apos;s digital backbone, one institution at a time.
              </Heading>
            </FadeIn>

            <Grid className="mt-16 md:mt-24">
              <div className="col-span-1 md:col-span-6 pr-0 md:pr-12">
                <FadeIn delay={0.1}>
                  <Text variant="body" className="mb-6 text-lg">
                    Roundstone Consulting was founded in 2011 and has spent over a decade helping private, state, and federal organisations across Nigeria modernise how they operate. What began as a software development practice has grown into a full-service technology partner — combining custom engineering, ERP consulting, and infrastructure expertise under one roof.
                  </Text>
                  <Text variant="body" className="mb-6 text-lg">
                    We&apos;re based in Kaduna, where our team of 25 designers, engineers, and consultants works across sectors that matter: healthcare, justice, financial inclusion, education, and public administration. Our approach is deliberately lean — we keep delivery close to our senior team, which means faster decisions, fewer handoffs, and software that&apos;s built to still be running in five years, not five months.
                  </Text>
                  <Text variant="body" className="text-lg font-medium text-biscay">
                    Every engagement comes with a six-month technical support guarantee. It&apos;s not a sales feature — it&apos;s how we think about the relationship.
                  </Text>
                </FadeIn>
              </div>

              <div className="col-span-1 md:col-span-6 mt-12 md:mt-0 lg:pl-12">
                <FadeIn delay={0.2} direction="left">
                  <div className="bg-mystic p-8 rounded-lg mb-8">
                    <Text variant="caption" className="text-burntsienna font-semibold uppercase tracking-wider mb-4">Our Mission</Text>
                    <Heading level={4} className="mb-0 text-biscay">
                      Empower organizations
                      with innovative and cost-effective
                      technology solutions that enhance their
                      productivity, efficiency, and
                      competitiveness in the marketplace.
                    </Heading>
                  </div>
                  <div className="bg-mystic p-8 rounded-lg">
                    <Text variant="caption" className="text-burntsienna font-semibold uppercase tracking-wider mb-4">Our Vision</Text>
                    <Heading level={4} className="mb-0 text-biscay">
                      To be the foremost provider of
                      innovative and cost-effective IT solutions
                      to organizations across Nigeria, Africa and
                      beyond.
                    </Heading>
                  </div>
                </FadeIn>
              </div>
            </Grid>
          </div>
        </Grid>
      </Section>

      {/* Sector Focus */}
      <div className="w-full bg-biscay py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <Text variant="caption" className="text-center mb-10 uppercase tracking-widest font-semibold text-mystic/60">
              Our Sector Focus
            </Text>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((sector, index) => (
              <StaggerItem 
                key={index} 
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-default"
              >
                {sector.icon}
                <Text variant="body" className="text-white font-medium text-lg leading-tight mb-4">
                  {sector.name}
                </Text>
                <div className="w-10 h-[2px] bg-white/20 group-hover:w-16 group-hover:bg-burntsienna transition-all duration-300"></div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </>
  );
}
