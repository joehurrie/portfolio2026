
"use client";

import { motion } from "framer-motion";

/**
 * Next.js Template component for page transitions.
 * Unlike layout.tsx, templates re-mount on every navigation,
 * allowing for fresh entry animations.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* 
        The Orange Curtain "Flash" 
        Sweeps from top (-100%) to bottom (100%) of the viewport
      */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ 
          duration: 0.9, 
          ease: [0.76, 0, 0.24, 1] 
        }}
        className="fixed inset-0 z-[100] bg-primary pointer-events-none"
      />
      
      {/* 
        The Page Content "Pull Up" 
        Slides up from 60px below to its original position
      */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 1.1, 
          ease: [0.23, 1, 0.32, 1],
          delay: 0.1 // Slight offset so the curtain flash leads the motion
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
