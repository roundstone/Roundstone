import React from "react";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";
import { STATS } from "../../lib/constants";

export default function StatsSection() {

  return (
    <Section bg="white" className="pt-20 pb-10">
      <Heading level={3} className="text-2xl font-bold text-biscay  mb-12">Roundstone at a glance</Heading>
      <StaggerContainer>
        <Grid>
          {STATS.map((stat, index) => {
            const isLast = index === STATS.length - 1;
            const borderClasses = isLast
              ? "py-8 md:py-0 mdpl-8"
              : "border-b md:border-b-0 lg:border-r border-mystic py-8 md:py-0";
            const firstClasses = index === 0 ? "md:pl-0 md:pr-8 pb-8 pt-0" : "";

            return (
              <StaggerItem key={index} className={`col-span-1 md:col-span-5 lg:col-span-3 text-center md:text-left flex flex-col justify-center h-full ${borderClasses} ${firstClasses}`}>
                {typeof stat.value === 'number' ? (
                  <Text variant="stat" className="flex items-baseline justify-center md:justify-start">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix ? <span className="text-2xl md:text-3xl font-serif text-biscay font-medium ml-1 tracking-normal">{stat.suffix}</span> : null}
                    />
                  </Text>
                ) : (
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-biscay font-medium leading-tight mb-2">
                    {stat.value}
                  </h3>
                )}
                <Text variant="body" className="mt-2 font-medium">{stat.label}</Text>
              </StaggerItem>
            );
          })}
        </Grid>
      </StaggerContainer>
    </Section>
  );
}

