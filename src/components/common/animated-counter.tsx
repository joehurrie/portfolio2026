"use client";

import { useEffect, useState, useRef } from 'react';

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({ end, duration = 400, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const startValue = count;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const newCount = Math.round(startValue + (end - startValue) * percentage);
      setCount(newCount);

      if (percentage < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration]);

  return (
    <span className={className}>
      {String(count).padStart(2, '0')}
    </span>
  );
}
