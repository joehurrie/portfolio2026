
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
    description: 'A design that honors classic automotive heritage with a modern technical twist. We infused energy and personality into every detail, making the product stand out.',
    tags: ['Desktop App', 'Mobile App'],
  },
  {
    id: 'project-2',
    year: '(2023)',
    title: 'Architech Buildings',
    description: 'A mobile-first social discovery platform engineered for high-performance interaction and seamless architectural navigation.',
    tags: ['Mobile App', 'Branding', 'Website Design'],
  },
  {
    id: 'project-3',
    year: '(2023)',
    title: 'Posnen Gallery',
    description: 'Future-forward collaborative workspace architecture focused on high-fidelity visual presentation and minimal interfaces.',
    tags: ['Desktop App', 'Branding'],
  },
  {
    id: 'project-2', // Reusing placeholder ID for consistency
    year: '(2022)',
    title: 'Fringe System',
    description: 'Minimalist interface for sustainable energy data visualization and monitoring. Built to bridge the gap between complex data and elegant design.',
    tags: ['Desktop App', 'Entertainment', 'Branding'],
  },
  {
    id: 'project-1', // Reusing placeholder ID for consistency
    year: '(2022)',
    title: 'Nocode Mate',
    description: 'Empowering creators with a scalable, accessible design system for modern web builds. High-fidelity engineering meets minimal design.',
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

      // Total width of all project sections plus initial heading and spacer
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
        {/* Custom Circular Cursor - Visible only on Desktop */}
        <div 
          className={cn(
            "fixed pointer-events-none z-[100] w-24 h-24 rounded-full bg-accent text-accent-foreground hidden md:flex items-center justify-center font-medium transition-transform duration-300 ease-out text-sm scale-0",
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
          <section className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-6 md:px-24">
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
                className="flex-shrink-0 w-[85vw] md:w-[75vw] h-[75vh] md:h-[80vh] flex items-center justify-center px-4 md:px-8"
              >
                <div className="flex flex-col md:flex-row w-full h-full bg-white rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-large group">
                  
                  {/* Image Part - Active Cursor Region */}
                  <div 
                    className="relative w-full h-1/2 md:h-full md:flex-[1.2] overflow-hidden cursor-none"
                    onMouseEnter={() => setIsOverImage(true)}
                    onMouseLeave={() => setIsOverImage(false)}
                  >
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale"
                        data-ai-hint={imageData.imageHint}
                      />
                    )}
                    {/* Dark gradient overlay for image depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Info Part - Detailed Content */}
                  <div className="p-8 md:p-12 md:flex-1 flex flex-col justify-between bg-white text-black border-t md:border-t-0 md:border-l border-black/5">
                    <div>
                      <span className="font-code text-muted-foreground mb-4 block text-sm md:text-base">
                        {project.year}
                      </span>
                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-6 leading-[0.9]">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-md font-light">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="mt-8 md:mt-0">
                      <div className="flex flex-col gap-0">
                        {project.tags.map((tag) => (
                          <div key={tag} className="py-3 md:py-4 border-t border-black/10 last:border-b last:border-black/10">
                            <span className="text-sm md:text-lg font-light text-black/60 block w-full">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
          
          {/* Spacer at the end to allow the last card to be fully visible */}
          <div className="flex-shrink-0 w-[15vw] md:w-[25vw]" />
        </div>
      </div>
    </div>
  );
}
