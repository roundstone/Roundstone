import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Search, BarChart2, PenTool, CheckCircle, Code, LifeBuoy, Rocket, ArrowRight } from "lucide-react";

export default function ProcessDiagram() {
  const steps = [
    { title: "Identify", icon: <Search className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Analyse", icon: <BarChart2 className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Design", icon: <PenTool className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Cost & Sign-off", icon: <CheckCircle className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Development", icon: <Code className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Support", icon: <LifeBuoy className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Launch", icon: <Rocket className="w-6 h-6 stroke-[1.5]" /> }
  ];

  return (
    <Section bg="white" className="overflow-hidden">
      <FadeIn className="mb-16 md:mb-24">
        <Heading level={2} className="text-center">Our Process</Heading>
        <Text variant="body" className="text-center mt-4 max-w-2xl mx-auto">
          A proven methodology designed to deliver institutional-grade solutions reliably.
        </Text>
      </FadeIn>
      
      <div className="relative max-w-[1280px] mx-auto w-full px-4 overflow-x-auto pb-8 hide-scrollbar">
        <StaggerContainer className="flex items-center min-w-max md:justify-center md:min-w-0">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <StaggerItem className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-mystic flex items-center justify-center text-biscay mb-4 transition-transform hover:scale-110">
                  {step.icon}
                </div>
                <Heading level={6} className="text-center text-sm md:text-base">{step.title}</Heading>
              </StaggerItem>
              {index < steps.length - 1 && (
                <StaggerItem className="hidden md:flex px-4 items-center">
                  <ArrowRight className="w-5 h-5 text-mystic stroke-2 mb-10" />
                </StaggerItem>
              )}
              {index < steps.length - 1 && (
                <div className="flex md:hidden px-4 items-center h-16 mb-[34px]">
                  <ArrowRight className="w-4 h-4 text-mystic stroke-2" />
                </div>
              )}
            </React.Fragment>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
