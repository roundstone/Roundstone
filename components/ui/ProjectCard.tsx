import React from "react";
import Link from "next/link";
import { Heading, Text } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  client: string;
  sector: string;
  outcome: string;
  slug: string;
}

export function ProjectCard({ title, client, sector, outcome, slug }: ProjectCardProps) {
  return (
    <Link 
      href={`/work/${slug}`} 
      className="group block bg-white border border-mystic rounded p-6 hover:shadow-lg hover:border-mystic/50 transition-all duration-300 h-full flex flex-col"
    >
      <div className="mb-6 flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[11px] font-medium tracking-wider uppercase text-palesky bg-mystic/50 px-2 py-1 rounded">
            {sector}
          </span>
          <span className="text-[11px] font-medium tracking-wider uppercase text-palesky bg-mystic/50 px-2 py-1 rounded">
            {client}
          </span>
        </div>
        <Heading level={4} className="mb-3 group-hover:text-biscay/80 transition-colors">
          {title}
        </Heading>
        <Text variant="body" className="text-sm">
          {outcome}
        </Text>
      </div>
      
      <div className="mt-auto pt-4 border-t border-mystic flex items-center justify-between">
        <span className="text-burntsienna font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
          View details <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
