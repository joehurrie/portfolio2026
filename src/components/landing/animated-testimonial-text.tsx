
"use client";

import { useState, useEffect, useRef } from 'react';

type AnimatedTestimonialTextProps = {
  text: string;
};

export function AnimatedTestimonialText({ text }: AnimatedTestimonialTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Clean the text and handle common entities
  const textToProcess = text.replace(/&apos;/g, "'").replace(/&quot;/g, '"');

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
        
        // Skip over HTML tags so they render atomically
        if (textToProcess[currentIndex] === '<') {
          const closingIndex = textToProcess.indexOf('>', currentIndex);
          if (closingIndex !== -1) {
            nextIndex = closingIndex + 1;
          }
        }
        
        setCurrentIndex(nextIndex);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, currentIndex, textToProcess]);

  const balanceTags = (html: string) => {
    const openSpans = (html.match(/<span/g) || []).length;
    const closedSpans = (html.match(/<\/span>/g) || []).length;
    let balanced = html;
    for (let i = 0; i < openSpans - closedSpans; i++) {
      balanced += '</span>';
    }
    return balanced;
  };

  const getVisibleHtml = () => {
    const visiblePart = textToProcess.substring(0, currentIndex);
    return balanceTags(visiblePart);
  };

  const getInvisibleHtml = () => {
    const invisiblePart = textToProcess.substring(currentIndex);
    return balanceTags(invisiblePart);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative text-3xl md:text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tighter min-h-[4em]">
        {/* Background Layer: Ghost/Muted Text */}
        <div 
          className="text-foreground/10 select-none [&_*]:text-foreground/10"
          dangerouslySetInnerHTML={{ __html: textToProcess }}
        />
        
        {/* Foreground Layer: Animated Character Reveal (Black/White and Orange) */}
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
