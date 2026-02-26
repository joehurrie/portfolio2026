
"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 'project-1',
    year: '(2024)',
    title: 'Super Pro',
    description: 'A design that honors classic automotive heritage with a modern technical twist.',
    tags: ['Desktop App', 'Mobile App'],
  },
  {
    id: 'project-2',
    year: '(2023)',
    title: 'Architech Buildings',
    description: 'A mobile-first social discovery platform engineered for high-performance interaction.',
    tags: ['Mobile App', 'Branding', 'Website Design'],
  },
  {
    id: 'project-3',
    year: '(2023)',
    title: 'Posnen Gallery',
    description: 'Future-forward collaborative workspace architecture focused on seamless navigation.',
    tags: ['Desktop App', 'Branding'],
  },
  {
    id: 'project-2',
    year: '(2022)',
    title: 'Fringe System',
    description: 'Minimalist interface for sustainable energy data visualization and monitoring.',
    tags: ['Desktop App', 'Entertainment', 'Branding'],
  },
  {
    id: 'project-1',
    year: '(2022)',
    title: 'Nocode Mate',
    description: 'Empowering creators with a scalable, accessible design system for modern web builds.',
    tags: ['Design System', 'Development'],
  }
];

export function HorizontalProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  
  const [translateX, setTranslateX] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isOverImage, setIsOverImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current || !scrollContentRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPos = window.scrollY;

      const totalHorizontalScroll = scrollContentRef.current.scrollWidth - window.innerWidth;

      if (scrollPos >= containerTop && scrollPos <= containerTop + containerHeight - windowHeight) {
        const relativeScroll = scrollPos - containerTop;
        const progress = relativeScroll / (containerHeight - windowHeight);
        setTranslateX(progress * totalHorizontalScroll);
      } else if (scrollPos < containerTop) {
        setTranslateX(0);
      } else {
        setTranslateX(totalHorizontalScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      ref={containerRef} 
      className="relative" 
      style={{ height: `${(projects.length + 1) * 100}vh` }}
      onMouseMove={handleMouseMove}
    >
      <div 
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-background"
      >
        {/* Custom Circular Cursor */}
        <div 
          className={cn(
            "fixed pointer-events-none z-[100] w-24 h-24 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-medium transition-transform duration-300 ease-out flex-col text-sm scale-0",
            isOverImage && "scale-100"
          )}
          style={{ 
            left: cursorPos.x - 48, 
            top: cursorPos.y - 48,
          }}
        >
          View
        </div>

        <div 
          ref={scrollContentRef}
          className="flex h-full items-center transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {/* Section 0: Work Index Heading */}
          <section className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-6 md:px-12">
            <h1 className="text-7xl md:text-[15vw] font-bold tracking-tighter leading-none">
              Work Index
            </h1>
            <div className="mt-8 flex items-center gap-4 text-muted-foreground font-code">
              <span className="w-12 h-px bg-border"></span>
              <span>Scroll to explore</span>
            </div>
          </section>

          {/* Project Sections */}
          {projects.map((project, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <section 
                key={`${project.id}-${index}`} 
                className="flex-shrink-0 w-[85vw] md:w-[75vw] h-[85vh] flex items-center justify-center px-4 md:px-8"
              >
                <div className="flex flex-col w-full h-full bg-white rounded-[2.5rem] overflow-hidden shadow-large group">
                  {/* Image Side */}
                  <div 
                    className="relative flex-1 w-full overflow-hidden cursor-none"
                    onMouseEnter={() => setIsOverImage(true)}
                    onMouseLeave={() => setIsOverImage(false)}
                  >
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                        data-ai-hint={imageData.imageHint}
                      />
                    )}
                  </div>

                  {/* Info Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-between bg-white text-black min-h-[300px]">
                    <div>
                      <span className="font-code text-muted-foreground mb-4 block text-sm md:text-base">
                        {project.year}
                      </span>
                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-6 leading-none">
                        {project.title}
                      </h2>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-black/10">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-sm md:text-lg font-light text-black/60 block w-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
          
          {/* Spacer at the end */}
          <div className="flex-shrink-0 w-[15vw] md:w-[25vw]" />
        </div>
      </div>
    </div>
  );
}
