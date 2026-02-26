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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (value !== displayValue) {
      setPrevValue(displayValue);
      setIsAnimating(true);
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      timeoutRef.current = setTimeout(() => {
        setDisplayValue(value);
        setIsAnimating(false);
      }, 600);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [value, displayValue]);

  return (
    <div className={cn("relative overflow-hidden inline-flex h-[1.1em] items-center", className)}>
      <div 
        className={cn(
          "flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]",
          isAnimating ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="h-[1.1em] flex items-center justify-center">
          {String(isAnimating ? prevValue : displayValue).padStart(2, '0')}
        </div>
        <div className="h-[1.1em] flex items-center justify-center">
          {String(value).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}
