import React from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "ghost";
  href?: string;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      primary: "bg-biscay text-white hover:bg-nearblack focus:ring-biscay",
      accent: "bg-burntsienna text-white hover:bg-opacity-90 focus:ring-burntsienna",
      ghost: "bg-transparent border border-biscay text-biscay hover:bg-mystic focus:ring-biscay",
    };

    const compStyles = cn(baseStyles, variants[variant], className);

    if (href) {
      return (
        <Link href={href} className={compStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={compStyles} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
