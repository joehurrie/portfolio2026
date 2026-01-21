"use client";

import { useState, useEffect } from 'react';

type AnimatedTestimonialTextProps = {
  text: string;
};

export function AnimatedTestimonialText({ text }: AnimatedTestimonialTextProps) {
  const [displayedHtml, setDisplayedHtml] = useState('');

  const textToProcess = text.replace(/&apos;/g, "'");
  const greyText = textToProcess.replace(/ class="text-accent"/g, '');

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Delay before starting animation
    timeout = setTimeout(() => {
      let currentIndex = 0;
      setDisplayedHtml(''); // Ensure it's cleared before typing
      
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
          timeout = setTimeout(type, 30);
        }
      };
      
      type();

    }, 100); // Initial delay

    return () => clearTimeout(timeout);
  }, [textToProcess]);

  return (
    <div className="relative">
      <blockquote className="text-3xl md:text-5xl font-medium leading-tight tracking-tight min-h-[8em] md:min-h-[6em]">
        <span
          className="text-muted-foreground/20"
          dangerouslySetInnerHTML={{ __html: greyText }}
        />
        
        <span className="absolute top-0 left-0 w-full h-full">
          <span dangerouslySetInnerHTML={{ __html: displayedHtml }} />
        </span>
      </blockquote>
    </div>
  );
}
