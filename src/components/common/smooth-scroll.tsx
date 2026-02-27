
"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * High-fidelity smooth scrolling component using Lenis.
 * Provides inertial/momentum scrolling across the entire application.
 */
export function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis with high-fidelity settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Request Animation Frame loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
