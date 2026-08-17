"use client";

import { motion } from "framer-motion";

export function HeroBackgroundRings() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Warm gradient mesh blobs */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: 600,
          height: 600,
          top: -100,
          right: -100,
          background: "radial-gradient(circle, rgba(228,142,74,0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-[100px]"
        style={{
          width: 500,
          height: 500,
          bottom: -50,
          left: -100,
          background: "radial-gradient(circle, rgba(27,66,100,0.12) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute rounded-full blur-[80px]"
        style={{
          width: 300,
          height: 300,
          top: "40%",
          left: "30%",
          background: "radial-gradient(circle, rgba(247,201,126,0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Subtle geometric accents */}
      <motion.div
        className="absolute border border-burntsienna/10 rounded-full"
        style={{ width: 400, height: 400, bottom: -100, left: -150 }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute border border-biscay/8 rounded-full"
        style={{ width: 600, height: 600, top: -200, right: -200 }}
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}
