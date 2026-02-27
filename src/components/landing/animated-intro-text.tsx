
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
        {/* Ghost Layer */}
        <div 
          className="text-foreground/10 select-none [&_*]:text-foreground/10"
          dangerouslySetInnerHTML={{ __html: textToProcess }}
        />
        {/* Reveal Layer */}
        <div className="absolute top-0 left-0 text-foreground w-full pointer-events-none">
          <span dangerouslySetInnerHTML={{ __html: getVisibleHtml() }} />
          <span className="invisible" dangerouslySetInnerHTML={{ __html: getInvisibleHtml() }} />
        </div>
      </div>
    </div>
  );
}
