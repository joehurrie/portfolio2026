
"use client";

import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type AnimatedTestimonialTextProps = {
  text: string;
};

export function AnimatedTestimonialText({ text }: AnimatedTestimonialTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const textToProcess = text.replace(/&apos;/g, "'");

  useEffect(() => {
    setMounted(true);
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
    if (!isMobile && isVisible && currentIndex < textToProcess.length) {
      const timeout = setTimeout(() => {
        let nextIndex = currentIndex + 1;
        
        if (textToProcess[currentIndex] === '<') {
          const closingIndex = textToProcess.indexOf('>', currentIndex);
          if (closingIndex !== -1) {
            nextIndex = closingIndex + 1;
          }
        }
        
        setCurrentIndex(nextIndex);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, currentIndex, textToProcess, isMobile]);

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

  if (!mounted || isMobile) {
    return (
      <blockquote className="relative text-3xl md:text-5xl font-medium leading-tight tracking-tight text-foreground">
        <span dangerouslySetInnerHTML={{ __html: textToProcess }} />
      </blockquote>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <blockquote className="relative text-3xl md:text-5xl font-medium leading-tight tracking-tight min-h-[8em] md:min-h-[6em]">
        <div 
          className="text-foreground/10 select-none [&_*]:text-foreground/10"
          dangerouslySetInnerHTML={{ __html: textToProcess }}
        />
        
        <div className="absolute top-0 left-0 text-foreground w-full pointer-events-none">
          <span dangerouslySetInnerHTML={{ __html: getVisibleHtml() }} />
          <span 
            className="invisible"
            dangerouslySetInnerHTML={{ __html: getInvisibleHtml() }} 
          />
        </div>
      </blockquote>
    </div>
  );
}
