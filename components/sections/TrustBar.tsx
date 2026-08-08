"use client";

import React from "react";
import { Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { TRUST_LOGOS } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustBar() {
  // Duplicate the logos to create a seamless infinite loop
  const duplicatedLogos = [...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <div className="w-full bg-mystic/5 py-12 border-y border-mystic/80 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-8">
        <FadeIn>
          <Text variant="caption" className="text-center uppercase tracking-widest font-semibold text-palesky">
            Trusted By Leading Institutions
          </Text>
        </FadeIn>
      </div>
      
      <div className="relative flex w-full">
        {/* Left and right fading edges for a polished look */}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-mystic to-transparent z-10 hidden md:block pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-mystic to-transparent z-10 hidden md:block pointer-events-none"></div>
        
        <motion.div
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap min-w-max px-8"
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
              className="relative w-32 h-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center shrink-0 mix-blend-multiply"
            >
              <Image 
                src={logo.image}
                alt={logo.name}
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
