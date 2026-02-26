
"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 'project-1',
    year: '(2024)',
    title: 'Formula Vintage',
    description: 'For Formula Vintage, we crafted a design that honors the rich heritage of classic cars while adding a modern twist. Combining timeless elegance with sleek, contemporary elements, we created an experience that appeals to both enthusiasts and newcomers.',
    tag: 'Landing Page',
  },
  {
    id: 'project-2',
    year: '(2023)',
    title: 'Vibrent SOTD',
    description: 'A mobile-first approach to social discovery. We engineered a platform that prioritizes speed and visual clarity, resulting in an award-winning interface that redefined community engagement.',
    tag: 'Mobile Design',
  },
  {
    id: 'project-3',
    year: '(2022)',
    title: 'CoSpace HM',
    description: 'Architecting the future of collaborative workspaces. Our system focuses on intuitive navigation and seamless transitions between individual focus and team synergy.',
    tag: 'Web App',
  },
  {
    id: 'project-1', // Reusing images for the index
    year: '(2024)',
    title: 'Bio Sun Tech',
    description: 'An exploration into sustainable technology interfaces. Minimalist aesthetics meet high-performance data visualization for a cleaner, greener digital future.',
    tag: 'Innovation',
  }
];

export function HorizontalProjects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // Horizontal scroll with wheel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      <div 
        className={cn(
          "fixed pointer-events-none z-[100] w-24 h-24 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-medium transition-transform duration-300 ease-out flex-col text-sm scale-0",
          hoveredId !== null && "scale-100"
        )}
        style={{ 
          left: cursorPos.x - 48, 
          top: cursorPos.y - 48,
          position: 'fixed'
        }}
      >
        View
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth gap-8 px-6 md:px-12 py-12 pb-24"
      >
        {projects.map((project, index) => {
          const imageData = PlaceHolderImages.find(img => img.id === `project-${(index % 3) + 1}`);
          
          return (
            <div 
              key={`${project.id}-${index}`}
              className="flex-shrink-0 flex gap-8 w-[90vw] md:w-[850px] group reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Side */}
              <div 
                className="relative w-1/2 aspect-[4/5] rounded-3xl overflow-hidden cursor-none"
                onMouseEnter={() => setHoveredId(index)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {imageData && (
                  <Image
                    src={imageData.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint={imageData.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Info Side */}
              <div className="w-1/2 flex flex-col justify-between py-4">
                <div>
                  <span className="font-code text-muted-foreground block mb-6">{project.year}</span>
                  <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 leading-none">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-12">
                  <span className="text-sm uppercase tracking-[0.2em] font-medium text-muted-foreground/60">
                    {project.tag}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Styles for hiding scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
