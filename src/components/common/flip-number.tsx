
"use client";

import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FlipNumberProps {
  value: number;
  className?: string;
}

export function FlipNumber({ value, className }: FlipNumberProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [prevValue, setPrevValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (value !== displayValue) {
      // Determine scroll direction for the reel effect
      setDirection(value > displayValue ? 'left' : 'right');
      setPrevValue(displayValue);
      setIsAnimating(true);
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      timeoutRef.current = setTimeout(() => {
        setDisplayValue(value);
        setIsAnimating(false);
      }, 800); // Slightly longer for a more cinematic "settle"
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [value, displayValue]);

  // The "Lottery Reel" effect:
  // We show a horizontal strip. When animating 'left', the current value is on the left and the new one slides in from the right.
  // When animating 'right', the current value is on the right and the new one slides in from the left.
  
  return (
    <div className={cn("relative overflow-hidden inline-flex h-[1.1em] w-[2ch] items-center justify-center", className)}>
      <div 
        className={cn(
          "flex flex-row w-[200%] transition-transform duration-800 ease-[cubic-bezier(0.23,1,0.32,1)]",
          direction === 'left' 
            ? (isAnimating ? "translate-x-[-50%]" : "translate-x-0")
            : (isAnimating ? "translate-x-0" : "translate-x-[-50%]")
        )}
      >
        {direction === 'left' ? (
          <>
            <div className="w-1/2 flex items-center justify-center shrink-0">
              {String(isAnimating ? prevValue : displayValue).padStart(2, '0')}
            </div>
            <div className="w-1/2 flex items-center justify-center shrink-0">
              {String(value).padStart(2, '0')}
            </div>
          </>
        ) : (
          <>
            <div className="w-1/2 flex items-center justify-center shrink-0">
              {String(value).padStart(2, '0')}
            </div>
            <div className="w-1/2 flex items-center justify-center shrink-0">
              {String(isAnimating ? prevValue : displayValue).padStart(2, '0')}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
