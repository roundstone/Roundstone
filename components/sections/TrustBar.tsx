"use client";

import React from "react";
import { Heading } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { TRUST_LOGOS } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustBar() {
  // Duplicate the logos to create a seamless infinite loop
  const duplicatedLogos = [...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <div className="w-full bg-white py-16 md:py-20 border-y border-mystic/60 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-10">
        <FadeIn>
          <Heading level={4} className="text-center text-biscay">
            Trusted by Leading Institutions
          </Heading>
        </FadeIn>
      </div>

      <div className="relative flex w-full">
        {/* Left and right fading edges for a polished look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10 hidden md:block pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10 hidden md:block pointer-events-none"></div>

        <motion.div
          className="flex items-center gap-16 md:gap-20 whitespace-nowrap min-w-max px-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 35, // slow, professional speed
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-40 h-20 hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
