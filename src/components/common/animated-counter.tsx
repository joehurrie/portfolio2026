"use client";

import { useEffect, useState, useRef } from 'react';

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({ end, duration = 800, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            const newCount = Math.floor(percentage * end);
            setCount(newCount);

            if (percentage < 1) {
              animationFrameId.current = requestAnimationFrame(animate);
            } else {
              setCount(end); // Ensure it ends on the correct value
            }
          };

          animationFrameId.current = requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Start animation when 50% of the element is visible
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {String(count).padStart(2, '0')}
    </span>
  );
}
