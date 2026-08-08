import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: "white" | "mystic" | "mystic/20" | "nearblack" | "biscay";
}

export function Section({ children, className, bg = "white", ...props }: SectionProps) {
  const bgColors = {
    white: "bg-white",
    mystic: "bg-mystic",
    "mystic/20": "bg-mystic/20",
    nearblack: "bg-nearblack",
    biscay: "bg-biscay",
  };

  return (
    <section
      className={cn(
        "py-12 md:py-24 lg:py-32 w-full",
        bgColors[bg],
        className
      )}
      {...props}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

export function Grid({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
