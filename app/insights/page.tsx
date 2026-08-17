import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Insights | Roundstone Consulting",
  description:
    "Perspectives from the Roundstone team on technology, digital transformation, AI, enterprise systems and the lessons we learn from solving real operational challenges.",
});

export default function InsightsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero */}
      <Section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <FadeIn>
          <Text
            variant="caption"
            className="text-burntsienna font-semibold uppercase tracking-widest mb-4"
          >
            Insights
          </Text>
          <Heading level={1} className="mb-6 max-w-3xl">
            News &amp; Insights
          </Heading>
          <Text variant="lead" className="max-w-2xl">
            Articles, updates, and perspectives from the team building
            technology for Nigeria&apos;s most trusted institutions.
          </Text>
        </FadeIn>
      </Section>

      {/* Coming Soon */}
      <Section bg="mystic" className="py-24 md:py-32">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto">
            <div className="w-16 h-16 bg-burntsienna/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-8 h-8 text-burntsienna"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9" />
                <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.855z" />
              </svg>
            </div>
            <Heading level={3} className="mb-4">
              Coming Soon
            </Heading>
            <Text variant="body" className="mb-8">
              We&apos;re preparing thoughtful content about technology,
              innovation, and digital transformation in Nigeria. Check back
              soon for articles, case study deep-dives, and industry insights.
            </Text>
            <Button href="/contact" variant="primary">
              Get Notified
            </Button>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
