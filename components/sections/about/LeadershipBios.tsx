import React from "react";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

import Image from "next/image";
import { LEADERS } from "@/lib/constants";

export default function LeadershipBios() {

  return (
    <Section bg="mystic" id="team">
      <FadeIn className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
        <Heading level={2} className="mb-6">The Leadership Team</Heading>
        <Text variant="body" className="text-lg">
          Our senior team stays actively involved in every project, ensuring institutional knowledge translates directly into platform quality.
        </Text>
      </FadeIn>

      <StaggerContainer>
        <Grid className="gap-y-16">
          {LEADERS.map((leader, i) => (
            <StaggerItem key={i} className="col-span-1 md:col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 group">
              <div className="col-span-1 sm:col-span-5">
                <div className="aspect-4/5 rounded overflow-hidden relative  group-hover:grayscale-0 transition-all duration-500 shadow-sm">
                  {leader.image ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-palesky/50 text-sm font-medium">
                      [Portrait: {leader.name}]
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-1 sm:col-span-7 flex flex-col justify-center sm:pr-8">
                <Heading level={3} className="mb-2">{leader.name}</Heading>
                <Text variant="caption" className="text-burntsienna font-semibold uppercase tracking-wider mb-6 block">
                  {leader.role}
                </Text>
              </div>
            </StaggerItem>
          ))}
        </Grid>
      </StaggerContainer>
    </Section>
  );
}
