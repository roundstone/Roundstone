import React from "react";
import { Button } from "@/components/ui/Button";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InsightsPreview() {
  const latestInsights = [
    {
      title: "How AI is changing the landscape of public sector delivery",
      category: "AI & Data",
      date: "12 Oct 2026",
      href: "/insights", // placeholder
    },
    {
      title: "Modernising legacy systems without disrupting operations",
      category: "Digital Transformation",
      date: "28 Sep 2026",
      href: "/insights", // placeholder
    },
    {
      title: "Building secure digital identity infrastructure",
      category: "Public Sector Technology",
      date: "14 Sep 2026",
      href: "/insights", // placeholder
    }
  ];

  return (
    <Section bg="mystic/20" className="py-24">
      <FadeIn className="mb-16 max-w-3xl">
        <Text variant="caption" className="text-burntsienna font-semibold uppercase tracking-wider mb-4">
          Insights
        </Text>
        <Heading level={2} className="mb-6">Ideas for organisations building what comes next</Heading>
        <Text variant="lead">
          Perspectives from the Roundstone team on technology, digital transformation, AI, enterprise systems and the lessons we learn from solving real operational challenges.
        </Text>
      </FadeIn>

      <StaggerContainer>
        <Grid className="gap-y-12">
          {latestInsights.map((insight, i) => (
             <StaggerItem key={i} className="col-span-1 md:col-span-4 flex flex-col h-full bg-white p-8 rounded-xl shadow-sm border border-mystic/50 hover:shadow-md transition-shadow group">
               <div className="mb-6 flex justify-between items-center text-sm font-medium">
                 <span className="text-burntsienna bg-burntsienna/10 px-3 py-1 rounded-full">{insight.category}</span>
                 {/* <span className="text-palesky">{insight.date}</span> */}
               </div>
               <Heading level={4} className="mb-6 flex-grow group-hover:text-biscay/80 transition-colors">
                 {/* {insight.title} */}<></>
               </Heading>
               <Link href={insight.href} className="text-biscay font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                 Read Article <ArrowRight className="w-4 h-4" />
               </Link>
             </StaggerItem>
          ))}
        </Grid>
      </StaggerContainer>
      
      <FadeIn delay={0.3} className="mt-16 flex justify-center">
        <Button href="/insights" variant="ghost">View All Insights</Button>
      </FadeIn>
    </Section>
  );
}
