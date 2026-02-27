
"use client";

import { useState, useEffect, useRef } from 'react';

/**
 * High-fidelity About CTA text reveal component.
 * Maintains reveal effect on both desktop and mobile.
 */
export function AnimatedAboutCtaText() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const originalText = "Distinctive design for <span class=\"text-accent\">brands with taste</span> — built to <span class=\"text-accent\">stand apart</span> in a world of sameness.";
  
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
      <div className="relative text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] tracking-tighter max-w-5xl">
        <div 
          className="text-white/10 select-none [&_*]:text-white/10"
          dangerouslySetInnerHTML={{ __html: textToProcess }}
        />
        
        <div className="absolute top-0 left-0 text-white w-full pointer-events-none">
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
