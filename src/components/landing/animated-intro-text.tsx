
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
        
        // If we hit an opening tag, skip to the end of it to keep HTML valid
        if (textToProcess[currentIndex] === '<') {
          const closingIndex = textToProcess.indexOf('>', currentIndex);
          if (closingIndex !== -1) {
            nextIndex = closingIndex + 1;
          }
        }
        
        setCurrentIndex(nextIndex);
      }, 30); // Steady typing speed
      return () => clearTimeout(timeout);
    }
  }, [isVisible, currentIndex, textToProcess]);

  // Helper to ensure tags are balanced in a partial string
  const balanceTags = (html: string) => {
    const openSpans = (html.match(/<span/g) || []).length;
    const closedSpans = (html.match(/<\/span>/g) || []).length;
    let balanced = html;
    for (let i = 0; i < openSpans - closedSpans; i++) {
      balanced += '</span>';
    }
    return balanced;
  };

  // The secret to stable wrapping: 
  // Render the FULL text in the foreground, but make the "untyped" part invisible.
  // This ensures the layout engine sees the exact same words for wrapping in both layers.
  const getVisibleHtml = () => {
    const visiblePart = textToProcess.substring(0, currentIndex);
    return balanceTags(visiblePart);
  };

  const getInvisibleHtml = () => {
    const invisiblePart = textToProcess.substring(currentIndex);
    // If we are in the middle of a tag, this is complex, 
    // but standard typewriter usually handles character offsets.
    // For simplicity, we balance the "invisible" part as its own fragment.
    return balanceTags(invisiblePart);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.15] tracking-tight max-w-[1400px]">
        {/* Background Layer: Constant Grey Ghost Text */}
        <div 
          className="text-foreground/5 select-none"
          dangerouslySetInnerHTML={{ __html: textToProcess }}
        />
        
        {/* Foreground Layer: Typing Animation */}
        {/* We use visibility: hidden on the remainder to maintain perfect wrapping */}
        <div className="absolute top-0 left-0 text-foreground w-full pointer-events-none">
          <span dangerouslySetInnerHTML={{ __html: getVisibleHtml() }} />
          <span 
            className="invisible"
            dangerouslySetInnerHTML={{ __html: getInvisibleHtml() }} 
          />
        </div>
      </div>
    </div>
  );
}
