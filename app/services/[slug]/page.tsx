import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import FinalCTA from "@/components/sections/FinalCTA";

import { constructMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return constructMetadata({ title: "Not Found" });
  
  return constructMetadata({
    title: `${service.title} | Roundstone Consulting`,
    description: service.desc,
  });
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="pt-24 md:pt-32">
      <Section bg="white" className="pb-12 md:pb-20">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-mystic rounded-full flex items-center justify-center mx-auto mb-8 text-biscay pt-5">
            {service.icon}
          </div>
          <Heading level={1} className="mb-6">
            {service.title}
          </Heading>
          <Text variant="lead" className="text-palesky">
            {service.desc}
          </Text>
        </FadeIn>
      </Section>
      
      {/* Capability List Placeholder */}
      <Section bg="mystic" className="py-20 md:py-32">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <Heading level={3} className="mb-6">
            Our Capabilities
          </Heading>
          <Text variant="body" className="text-palesky mb-8">
            Detailed capability lists, tools, and methodology for {service.title} will be populated here when content is available.
          </Text>
        </FadeIn>
      </Section>
      
      <FinalCTA />
    </main>
  );
}
