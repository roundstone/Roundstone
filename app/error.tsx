"use client";

import { useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex-grow flex items-center pt-24 md:pt-32 min-h-[80vh]">
      <Section className="w-full text-center">
        <FadeIn className="max-w-xl mx-auto flex flex-col items-center">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-8">
            <AlertCircle className="w-10 h-10 text-red-500 stroke-[1.5]" />
          </div>
          <Heading level={3} className="mb-4">
            Something went wrong
          </Heading>
          <Text variant="body" className="text-palesky mb-10">
            We encountered an unexpected error processing your request. Our team has been notified.
          </Text>
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-biscay text-white font-medium rounded-full hover:bg-nearblack transition-colors"
          >
            Try again
          </button>
        </FadeIn>
      </Section>
    </main>
  );
}
