"use client";

import { useState, useEffect, useRef } from 'react';

export function AnimatedIntroText() {
  const [revealedHtml, setRevealedHtml] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const originalText = "I&apos;m a versatile <span class=\"text-accent\">designer who<br />partners with founders</span> to turn ideas into<br />real <span class=\"text-accent\">products.</span> I focus on clear interfaces,<br />sharp decisions, and fast execution.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          setIsAnimating(true);
          
          const textWithTags = originalText.replace(/&apos;/g, "'");
          const tokens = textWithTags.match(/<[^>]+>|./g) || [];

          let currentIndex = 0;
          const intervalId = setInterval(() => {
            if (currentIndex < tokens.length) {
              setRevealedHtml(current => current + tokens[currentIndex]);
              currentIndex++;
            } else {
              clearInterval(intervalId);
              setAnimationComplete(true);
            }
          }, 35);

          observer.disconnect();
          return () => clearInterval(intervalId);
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
  }, [isAnimating]);

  return (
    <div ref={containerRef} className="relative w-full flex justify-end">
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium leading-[1.05] tracking-tight text-right max-w-7xl">
        <span 
          className="text-muted-foreground/20"
          dangerouslySetInnerHTML={{ __html: originalText.replace(/&apos;/g, "'") }}
        />
        
        <span className="absolute top-0 left-0 w-full h-full text-right">
          <span dangerouslySetInnerHTML={{ __html: revealedHtml }} />
          {isAnimating && !animationComplete && (
            <span style={{height: '0.9em', top: '0.1em'}} className="relative inline-block w-1 bg-accent animate-pulse ml-2" />
          )}
        </span>
      </h2>
    </div>
  );
}
