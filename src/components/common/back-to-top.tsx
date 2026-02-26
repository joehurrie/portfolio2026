"use client";

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down more than 50% or fixed 1000px
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
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
        "fixed bottom-8 right-8 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-large transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 active:scale-95 group",
        isVisible ? "translate-y-0 opacity-100 rotate-0" : "translate-y-20 opacity-0 rotate-180"
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" />
      <div className="absolute inset-0 rounded-full border border-white/20 scale-110 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
    </button>
  );
}