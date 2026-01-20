"use client";

import { useState, useEffect, useRef } from 'react';

export function AnimatedIntroText() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedHtml, setDisplayedHtml] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const originalText = "I&apos;m a versatile <span class=\"text-accent\">designer who<br />partners with founders</span> to turn ideas into<br />real <span class=\"text-accent\">products.</span> I focus on clear interfaces,<br />sharp decisions, and fast execution.";
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

      // Delay before starting animation
      timeout = setTimeout(() => {
        setIsTyping(true);
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
            timeout = setTimeout(type, 50); // Slower typing speed
          } else {
            setIsTyping(false); // Stop typing, hide cursor
          }
        };
        
        type();

      }, 200); // Initial delay

      return () => clearTimeout(timeout);
    }
  }, [isVisible, textToProcess]);

  return (
    <div ref={containerRef} className="relative w-full flex justify-end">
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium leading-[1.05] tracking-tight max-w-7xl min-h-[4.5em]">
        <span
          className="text-muted-foreground/20"
          dangerouslySetInnerHTML={{ __html: textToProcess }}
        />
        
        <span className="absolute top-0 left-0 w-full h-full">
          <span dangerouslySetInnerHTML={{ __html: displayedHtml }} />
          {isTyping && <span className="inline-block w-[3px] ml-1 h-[.9em] translate-y-[0.05em] bg-accent animate-pulse" />}
        </span>
      </h2>
    </div>
  );
}
