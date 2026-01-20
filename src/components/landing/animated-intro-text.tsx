"use client";

import { useState, useEffect, useRef } from 'react';

export function AnimatedIntroText() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const originalText = "I&apos;m a versatile <span class=\"text-accent\">designer who<br />partners with founders</span> to turn ideas into<br />real <span class=\"text-accent\">products.</span> I focus on clear interfaces,<br />sharp decisions, and fast execution.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full flex justify-end">
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium leading-[1.05] tracking-tight text-right max-w-7xl">
        <span 
          className="text-muted-foreground/20"
          dangerouslySetInnerHTML={{ __html: originalText.replace(/&apos;/g, "'") }}
        />
        
        {isVisible && (
            <span className="absolute top-0 left-0 w-full h-full text-right opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <span dangerouslySetInnerHTML={{ __html: originalText.replace(/&apos;/g, "'") }} />
            </span>
        )}
      </h2>
    </div>
  );
}
