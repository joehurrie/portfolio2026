
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

  // Clean the text and handle common entities
  const textToProcess = text.replace(/&apos;/g, "'").replace(/&quot;/g, '"');

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 } // Lower threshold for better trigger reliability
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

  // Reset animation when text changes (e.g., when cycling testimonials)
  useEffect(() => {
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (mounted && !isMobile && isVisible && currentIndex < textToProcess.length) {
      const timeout = setTimeout(() => {
        let nextIndex = currentIndex + 1;
        
        // Skip over HTML tags to keep the render valid
        if (textToProcess[currentIndex] === '<') {
          const closingIndex = textToProcess.indexOf('>', currentIndex);
          if (closingIndex !== -1) {
            nextIndex = closingIndex + 1;
          }
        }
        
        setCurrentIndex(nextIndex);
      }, 15); // Slightly faster typing for better feel
      return () => clearTimeout(timeout);
    }
  }, [mounted, isVisible, currentIndex, textToProcess, isMobile]);

  // Ensure HTML tags are balanced during partial render
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

  // Fallback for SSR or Mobile
  if (!mounted || isMobile) {
    return (
      <blockquote className="relative text-3xl md:text-5xl font-medium leading-tight tracking-tight text-foreground">
        <span dangerouslySetInnerHTML={{ __html: textToProcess }} />
      </blockquote>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <blockquote className="relative text-3xl md:text-5xl font-medium leading-tight tracking-tight min-h-[5em]">
        {/* Background Layer: Ghost Text */}
        <div 
          className="text-foreground/10 select-none [&_*]:text-foreground/10"
          dangerouslySetInnerHTML={{ __html: textToProcess }}
        />
        
        {/* Foreground Layer: Animated Text */}
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
