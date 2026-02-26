"use client";

import { useState, useEffect, useRef } from 'react';

export function AnimatedIntroText() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedHtml, setDisplayedHtml] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const originalText = "I'm a versatile <span class=\"text-accent\">designer who partners with founders</span> to turn ideas into real <span class=\"text-accent\">products.</span> I focus on clear interfaces, sharp decisions, and fast execution.";
  
  const textToProcess = originalText.replace(/&apos;/g, "'");

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

  useEffect(() => {
    if (isVisible) {
      let timeout: NodeJS.Timeout;

      timeout = setTimeout(() => {
        let currentIndex = 0;
        
        const type = () => {
          if (currentIndex < textToProcess.length) {
            let char = textToProcess[currentIndex];
            let partToAdd = char;
            let nextIndex = currentIndex + 1;

            if (char === '<') {
              const closingIndex = textToProcess.indexOf('>', currentIndex);
              if (closingIndex !== -1) {
                partToAdd = textToProcess.substring(currentIndex, closingIndex + 1);
                nextIndex = closingIndex + 1;
              }
            }
            
            setDisplayedHtml(prev => prev + partToAdd);
            currentIndex = nextIndex;
            timeout = setTimeout(type, 40);
          }
        };
        
        type();

      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, textToProcess]);

  return (
    <div ref={containerRef} className="relative w-full flex justify-end">
      <div className="relative text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-7xl min-h-[4.5em]">
        {/* Background Layer: Muted Grey Text */}
        <div 
          className="text-muted/10 select-none"
          dangerouslySetInnerHTML={{ __html: textToProcess }}
        />
        
        {/* Foreground Layer: Typing Animation */}
        <div 
          className="absolute top-0 left-0 text-foreground"
          dangerouslySetInnerHTML={{ __html: displayedHtml }}
        />
      </div>
    </div>
  );
}
