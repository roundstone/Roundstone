import React from "react";
import Link from "next/link";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { LEADERS } from "@/lib/constants";

export default function LeadershipStrip() {

  return (
    <Section bg="white">
      <FadeIn className="flex justify-between items-end mb-16">
        <Heading level={2}>Leadership</Heading>
        <Link href="/about#team" className="text-burntsienna font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
          Meet the team <ArrowRight className="w-4 h-4" />
        </Link>
      </FadeIn>
      
      <StaggerContainer>
        <Grid>
          {LEADERS.map((leader, i) => (
            <StaggerItem key={i} className="col-span-1 md:col-span-6 lg:col-span-3 group">
              <div className="aspect-square bg-mystic/20 mb-6 rounded-xl overflow-hidden relative transition-all duration-500 shadow-sm border border-mystic/50 group-hover:shadow-md">
                 <div className="absolute inset-0 bg-biscay/5 z-10 group-hover:opacity-0 transition-opacity"></div>
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
              <Heading level={5} className="mb-1">{leader.name}</Heading>
              <Text variant="caption">{leader.role}</Text>
            </StaggerItem>
          ))}
        </Grid>
      </StaggerContainer>
    </Section>
  );
}
