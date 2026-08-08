"use client";

import { motion } from "framer-motion";

export function HeroBackgroundRings() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sienna Rings (Bottom Left) */}
      <motion.div
        className="absolute border-[1px] border-burntsienna rounded-full"
        style={{ width: 400, height: 400, bottom: -100, left: -150 }}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute border-[1.5px] border-burntsienna rounded-full"
        style={{ width: 130, height: 130, bottom: -30, left: -30 }}
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Biscay Rings (Top Right) */}
      <motion.div
        className="absolute border-[1px] border-biscay rounded-full"
        style={{ width: 500, height: 500, top: -150, right: -150 }}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute border-[1.5px] border-biscay rounded-full"
        style={{ width: 60, height: 60, top: 40, right: 60 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Decorative center ring */}
      <motion.div
        className="absolute border-[1px] border-mystic rounded-full"
        style={{ width: 800, height: 800, top: '50%', left: '50%', x: '-50%', y: '-50%' }}
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}
