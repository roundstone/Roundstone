import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactDetails from "@/components/sections/contact/ContactDetails";

import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact | Roundstone Consulting",
  description: "Get in touch with Roundstone Consulting to discuss your project.",
});

export default function ContactPage() {
  return (
    <main className="pt-24 md:pt-32 bg-mystic/10 min-h-screen">
      <Section className="pb-20">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <FadeIn>
              <ContactDetails />
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </Section>
    </main>
  );
}
