import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import FinalCTA from "@/components/sections/FinalCTA";

import { constructMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return constructMetadata({ title: "Not Found" });
  
  return constructMetadata({
    title: `${project.title} | Roundstone Consulting`,
    description: project.outcome,
  });
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-24 md:pt-32">
      <Section bg="white" className="pb-12 md:pb-20">
        <FadeIn className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-[11px] font-medium tracking-wider uppercase text-palesky bg-mystic/50 px-3 py-1.5 rounded">
              {project.sector}
            </span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-palesky bg-mystic/50 px-3 py-1.5 rounded">
              {project.client}
            </span>
          </div>
          <Heading level={1} className="mb-6">
            {project.title}
          </Heading>
          <Text variant="lead" className="text-palesky">
            {project.outcome}
          </Text>
        </FadeIn>
      </Section>
      
      <Section bg="mystic" className="py-20 md:py-32">
        <Grid>
          <div className="col-span-1 md:col-span-12 lg:col-span-8 pr-0 lg:pr-12">
             <FadeIn>
              <Heading level={3} className="mb-4">The Challenge</Heading>
              <Text variant="body" className="text-palesky mb-12">
                Detailed project context, challenges faced, and the institutional problem being solved will be populated here when content is available.
              </Text>
              
              <Heading level={3} className="mb-4">Our Approach</Heading>
              <Text variant="body" className="text-palesky mb-12">
                The strategic approach, technical architecture decisions, and methodology used for delivery will be populated here.
              </Text>
              
              <Heading level={3} className="mb-4">What We Built</Heading>
              <ul className="list-disc pl-5 text-palesky space-y-3 mb-10">
                <li>Feature or capability description placeholder.</li>
                <li>Feature or capability description placeholder.</li>
                <li>Feature or capability description placeholder.</li>
              </ul>
             </FadeIn>
          </div>
          
          <div className="col-span-1 md:col-span-12 lg:col-span-4 mt-12 lg:mt-0">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded border border-mystic sticky top-32">
                <Heading level={6} className="mb-6 uppercase tracking-wider text-palesky text-sm">Impact & Outcomes</Heading>
                <ul className="space-y-8">
                  <li>
                    <strong className="block text-3xl text-biscay font-light mb-2">Metric</strong>
                    <span className="text-sm text-palesky">Quantifiable impact description placeholder.</span>
                  </li>
                  <li>
                    <strong className="block text-3xl text-biscay font-light mb-2">Metric</strong>
                    <span className="text-sm text-palesky">Quantifiable impact description placeholder.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </Grid>
      </Section>

      <FinalCTA />
    </main>
  );
}
