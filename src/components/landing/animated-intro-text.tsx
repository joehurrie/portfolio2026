
"use client";

import { useState, useEffect, useRef } from 'react';

/**
 * High-fidelity intro text reveal component.
 * Maintains character-reveal animation on both desktop and mobile.
 */
export function AnimatedIntroText() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const originalText = "I help <span class=\"text-accent\">startups and founders</span> design and build <span class=\"text-accent\">digital products</span> that <span class=\"text-accent\">stand out</span>, align with their <span class=\"text-accent\">goals</span>, and connect with <span class=\"text-accent\">users</span>.";
  
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
      <div className="relative text-3xl md:text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tighter max-w-[1200px]">
        {/* Ghost Layer - Using background color logic */}
        <div 
          className="text-background/10 select-none [&_*]:text-background/10 transition-colors duration-700"
          dangerouslySetInnerHTML={{ __html: textToProcess }}
        />
        {/* Reveal Layer */}
        <div className="absolute top-0 left-0 text-background w-full pointer-events-none transition-colors duration-700">
          <span dangerouslySetInnerHTML={{ __html: getVisibleHtml() }} />
          <span className="invisible" dangerouslySetInnerHTML={{ __html: getInvisibleHtml() }} />
        </div>
      </div>
    </div>
  );
}
