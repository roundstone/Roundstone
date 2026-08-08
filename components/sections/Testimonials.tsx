import React from "react";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <Section bg="mystic/20" className="py-24">
      <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
        <Text variant="caption" className="text-burntsienna font-semibold uppercase tracking-wider mb-4">Client Success</Text>
        <Heading level={2}>What our partners say</Heading>
      </FadeIn>
      
      <StaggerContainer>
        <Grid>
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i} className="col-span-1 md:col-span-12 lg:col-span-4 flex">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-mystic/50 flex flex-col w-full relative group hover:shadow-md hover:border-mystic transition-all duration-300">
                <Quote className="w-10 h-10 text-burntsienna/10 absolute top-8 left-8 rotate-180 group-hover:text-burntsienna/20 transition-colors" />
                <div className="flex-grow z-10 relative mt-4">
                  <p className="text-palesky font-medium leading-relaxed italic mb-8">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="z-10 mt-auto pt-6 border-t border-mystic/30">
                  <Heading level={6} className="mb-1 text-biscay uppercase tracking-wider text-sm">{testimonial.author}</Heading>
                  <Text variant="caption" className="text-palesky">{testimonial.role}</Text>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Grid>
      </StaggerContainer>
    </Section>
  );
}
