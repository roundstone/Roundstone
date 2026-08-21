import React from "react";
import Link from "next/link";
import { Section, Grid } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ArrowRight, Box } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

export default function ProductsSection() {
  const products = PORTFOLIO_PROJECTS.filter(project => project.sector === "Products");

  return (
    <Section bg="white">
      <FadeIn className="mb-16 md:mb-24">
        <Heading level={2} className="mb-6">Products & Systems</Heading>
        <Text variant="lead" className="max-w-3xl">
          Beyond bespoke software development, we offer ready-to-deploy products and systems. Whether you need direct solutions like RoundTrack or robust platforms that can be customised, rebranded, and deployed for your operations, we have you covered.
        </Text>
      </FadeIn>
      <StaggerContainer>
        <Grid>
          {products.map((product, index) => (
            <StaggerItem key={index} className="col-span-1 md:col-span-6 lg:col-span-4">
              <Link href={`/work/${product.slug}`} className="block bg-mystic/30 p-8 group hover:shadow-lg transition-all duration-300 rounded h-full border border-mystic/50">
                <Box className="w-8 h-8 text-burntsienna mb-6 stroke-[1.5]" />
                <Heading level={4} className="mb-4">{product.title}</Heading>
                <Text variant="body" className="mb-8">{product.outcome}</Text>
                <span className="text-burntsienna font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore {product.title} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Grid>
      </StaggerContainer>
    </Section>
  );
}
