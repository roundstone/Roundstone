import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "404: Page Not Found | Roundstone Consulting",
};

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center pt-24 md:pt-32 min-h-[80vh]">
      <Section className="w-full text-center">
        <FadeIn className="max-w-2xl mx-auto flex flex-col items-center">
          <Heading level={1} className="text-[120px] md:text-[160px] leading-none text-mystic font-light mb-2 md:mb-4">
            404
          </Heading>
          <Heading level={3} className="mb-6">
            Page not found
          </Heading>
          <Text variant="body" className="text-palesky mb-10 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Text>
          <Button href="/" variant="primary">
            Return to Homepage
          </Button>
        </FadeIn>
      </Section>
    </main>
  );
}
