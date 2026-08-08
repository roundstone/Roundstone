import React from "react";
import { Section, Grid } from "@/components/ui/Section";
import { Text } from "@/components/ui/Typography";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";
import { STATS } from "../../lib/constants";

export default function StatsSection() {

  return (
    <Section bg="white">
      <StaggerContainer>
        <Grid>
          {STATS.map((stat, index) => {
            const isLast = index === STATS.length - 1;
            const borderClasses = isLast 
              ? "py-8 md:py-0 md:pl-8" 
              : "border-b md:border-b-0 md:border-r border-mystic py-8 md:py-0 md:px-8";
            const firstClasses = index === 0 ? "md:pl-0 md:pr-8 pb-8 pt-0" : "";
            
            return (
              <StaggerItem key={index} className={`col-span-1 md:col-span-3 text-center md:text-left ${borderClasses} ${firstClasses}`}>
                <Text variant="stat">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </Text>
                <Text variant="body" className="mt-2 font-medium">{stat.label}</Text>
              </StaggerItem>
            );
          })}
        </Grid>
      </StaggerContainer>
    </Section>
  );
}

