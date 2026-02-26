
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
      // Determine scroll direction for the animation
      // value > displayValue means scrolling forward (new number enters from right)
      setDirection(value > displayValue ? 'left' : 'right');
      setPrevValue(displayValue);
      setIsAnimating(true);
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      timeoutRef.current = setTimeout(() => {
        setDisplayValue(value);
        setIsAnimating(false);
      }, 700);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [value, displayValue]);

  // We use a strip [PrevValue][Value] or [Value][PrevValue] depending on direction
  return (
    <div className={cn("relative overflow-hidden inline-flex h-[1.1em] w-[2.2ch] items-center justify-center", className)}>
      <div 
        className={cn(
          "flex flex-row transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-[200%]",
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
