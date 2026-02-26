"use client";

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPos = window.innerHeight + window.scrollY;
      
      // Reveal only when user reaches the bottom of the page (within 50px threshold)
      if (scrollPos >= scrollHeight - 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    // Check initial state
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-[60] flex h-14 w-14 items-center justify-center rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 active:scale-95 group",
        "bg-white/10 backdrop-blur-md border border-white/20 shadow-large",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ArrowUp 
        className="h-6 w-6 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]" 
        style={{ color: 'hsl(var(--accent))' }}
      />
      
      {/* Subtle outer glow on hover */}
      <div className="absolute inset-0 rounded-full border border-white/10 scale-110 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />
    </button>
  );
}