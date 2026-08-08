import React from "react";
import OurStory from "@/components/sections/about/OurStory";
import LeadershipBios from "@/components/sections/about/LeadershipBios";
import Careers from "@/components/sections/about/Careers";
import FinalCTA from "@/components/sections/FinalCTA";

import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "About Us | Roundstone Consulting",
  description: "Learn about Roundstone Consulting, our mission to build Nigeria's digital backbone, and the leadership team driving our strategy.",
});

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <OurStory />
      <LeadershipBios />
      <Careers />
      <FinalCTA />
    </div>
  );
}
