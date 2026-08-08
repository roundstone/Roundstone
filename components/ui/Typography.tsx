import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Heading({
  children,
  level = 2,
  className,
  as,
}: {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: any;
}) {
  const Component = as || `h${level}`;
  
  const levels = {
    1: "text-4xl md:text-5xl lg:text-7xl font-serif text-biscay font-bold leading-tight",
    2: "text-3xl md:text-4xl lg:text-5xl font-serif text-biscay font-bold leading-tight",
    3: "text-2xl md:text-3xl lg:text-4xl font-serif text-biscay font-semibold leading-tight",
    4: "text-xl md:text-2xl font-serif text-biscay font-semibold leading-snug",
    5: "text-lg md:text-xl font-serif text-biscay font-medium leading-snug",
    6: "text-base md:text-lg font-serif text-biscay font-medium leading-snug",
  };

  return (
    <Component className={cn(levels[level], className)}>
      {children}
    </Component>
  );
}

export function Text({
  children,
  className,
  variant = "body",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "body" | "lead" | "caption" | "stat";
}) {
  const variants = {
    body: "text-base md:text-lg text-palesky leading-relaxed",
    lead: "text-lg md:text-xl text-palesky leading-relaxed font-medium",
    caption: "text-sm text-palesky leading-normal",
    stat: "text-5xl md:text-7xl font-sans font-light tabular-nums text-biscay tracking-tight",
  };

  return (
    <p className={cn(variants[variant], className)}>
      {children}
    </p>
  );
}
