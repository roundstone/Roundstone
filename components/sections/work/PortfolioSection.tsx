"use client";

import React, { useState } from "react";
import { Section, Grid } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

const FILTERS = [
  "All",
  "Public Sector (B2G)",
  "Enterprise & Foundations (B2B)",
  "Products (B2C)"
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    return project.sector === activeFilter;
  });

  return (
    <Section bg="white" className="pt-0">
      <FadeIn className="mb-12">
        <div className="flex flex-wrap gap-3 overflow-x-auto hide-scrollbar pb-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-biscay text-white shadow-md"
                  : "bg-mystic/40 text-palesky hover:bg-mystic hover:text-biscay"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </FadeIn>

      <StaggerContainer key={activeFilter}>
        <Grid>
          {filteredProjects.map((project) => (
            <StaggerItem key={project.slug} className="col-span-1 md:col-span-6 lg:col-span-4">
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </Grid>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-palesky">
            No projects found for this category.
          </div>
        )}
      </StaggerContainer>
    </Section>
  );
}
