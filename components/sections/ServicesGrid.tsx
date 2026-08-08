import React from "react";
import Link from "next/link";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";
import { SERVICES as services } from "@/lib/constants";


export default function ServicesGrid() {


  return (
    <Section bg="mystic">
      <FadeIn className="mb-16 md:mb-24">
        <Heading level={2}>Core Capabilities</Heading>
      </FadeIn>
      <StaggerContainer>
        <Grid>
          {services.map((service, index) => (
            <StaggerItem key={index} className="col-span-1 md:col-span-6 lg:col-span-3">
              <Link href={service.href} className="block bg-white p-8 group hover:shadow-lg transition-all duration-300 rounded h-full">
                {service.icon}
                <Heading level={4} className="mb-4">{service.title}</Heading>
                <Text variant="body" className="mb-8">{service.desc}</Text>
                <span className="text-burntsienna font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Grid>
      </StaggerContainer>
    </Section>
  );
}
