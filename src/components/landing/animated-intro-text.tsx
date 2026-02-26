
"use client";

import { useState, useEffect, useRef } from 'react';

export function AnimatedIntroText() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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
      { threshold: 0.1 }
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
    if (isVisible && currentIndex < textToProcess.length) {
      const timeout = setTimeout(() => {
        let nextIndex = currentIndex + 1;
        
        // Skip HTML tags so they appear instantly
        if (textToProcess[currentIndex] === '<') {
          const closingIndex = textToProcess.indexOf('>', currentIndex);
          if (closingIndex !== -1) {
            nextIndex = closingIndex + 1;
          }
        }
        
        setCurrentIndex(nextIndex);
      }, 35);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, currentIndex, textToProcess]);

  // Construct partial HTML while ensuring tags like <span> are properly closed
  const getPartialHtml = (index: number) => {
    let html = textToProcess.substring(0, index);
    
    const openSpans = (html.match(/<span/g) || []).length;
    const closedSpans = (html.match(/<\/span>/g) || []).length;
    
    for (let i = 0; i < openSpans - closedSpans; i++) {
      html += '</span>';
    }
    
    return html;
  };

  const displayedHtml = getPartialHtml(currentIndex);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.15] tracking-tight max-w-[1400px]">
        {/* Background Layer: Muted Ghost Text */}
        <div 
          className="text-foreground/5 select-none"
          dangerouslySetInnerHTML={{ __html: textToProcess }}
        />
        
        {/* Foreground Layer: Typing Animation */}
        <div 
          className="absolute top-0 left-0 text-foreground w-full"
          dangerouslySetInnerHTML={{ __html: displayedHtml }}
        />
      </div>
    </div>
  );
}
