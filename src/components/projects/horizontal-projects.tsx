
"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

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
    id: 'project-2', 
    year: '(2022)',
    title: 'Fringe System',
    description: 'Minimalist interface for sustainable energy data visualization and monitoring. Built to bridge the gap between complex data and elegant design.',
    tags: ['Desktop App', 'Entertainment', 'Branding'],
  },
  {
    id: 'project-1',
    year: '(2022)',
    title: 'Nocode Mate',
    description: 'Empowering creators with a scalable, accessible design system for modern web builds. High-fidelity engineering meets minimal design.',
    tags: ['Design System', 'Development'],
  }
];

interface HorizontalProjectsProps {
  showHeading?: boolean;
}

export function HorizontalProjects({ showHeading = true }: HorizontalProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  
  const [translateX, setTranslateX] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isOverCard, setIsOverCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current || !scrollContentRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPos = window.scrollY;

      const totalHorizontalScroll = scrollContentRef.current.scrollWidth - window.innerWidth;
      const totalScrollableHeight = containerHeight - windowHeight;
      
      if (scrollPos >= containerTop && scrollPos <= containerTop + totalScrollableHeight) {
        const relativeScroll = scrollPos - containerTop;
        const progress = relativeScroll / totalScrollableHeight;
        
        const entryThreshold = 0.12;
        const exitThreshold = 0.92;
        
        if (progress < entryThreshold) {
          setTranslateX(0);
        } else if (progress > exitThreshold) {
          setTranslateX(totalHorizontalScroll);
        } else {
          const horizontalProgress = (progress - entryThreshold) / (exitThreshold - entryThreshold);
          setTranslateX(horizontalProgress * totalHorizontalScroll);
        }
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
      className="relative z-20" 
      style={{ height: `${(projects.length + (showHeading ? 3 : 2)) * 100}vh` }}
      onMouseMove={handleMouseMove}
    >
      <div 
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-foreground transition-colors duration-700"
      >
        {/* Custom Cursor */}
        <div 
          className={cn(
            "fixed pointer-events-none z-[100] w-28 h-28 rounded-full bg-accent text-accent-foreground hidden md:flex flex-col items-center justify-center font-semibold transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-lg scale-0 shadow-2xl",
            isOverCard && "scale-100"
          )}
          style={{ 
            left: cursorPos.x - 56, 
            top: cursorPos.y - 56,
          }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">View</span>
          <ArrowUpRight className="h-6 w-6" />
        </div>

        {/* Horizontal Scrolling Content */}
        <div 
          ref={scrollContentRef}
          className="flex h-full items-center will-change-transform"
          style={{ 
            transform: `translate3d(-${translateX}px, 0, 0)`,
          }}
        >
          {showHeading && (
            <section className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-6 md:px-24">
              <h1 className="text-7xl md:text-[15vw] font-bold tracking-tighter leading-none text-background transition-colors duration-700">
                Projects
              </h1>
              <div className="mt-8 flex items-center gap-4 text-background/40 font-code transition-colors duration-700">
                <span className="w-12 h-px bg-background/20"></span>
                <span>Scroll to explore</span>
              </div>
            </section>
          )}

          {projects.map((project, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <section 
                key={`${project.id}-${index}`} 
                className="flex-shrink-0 w-[94vw] md:w-[75vw] h-[75vh] md:h-[80vh] flex items-center justify-center px-3 md:px-8"
              >
                <div 
                  className="flex flex-col md:flex-row w-full h-full bg-foreground rounded-[2.5rem] overflow-hidden shadow-large group cursor-none border border-background/20"
                  onMouseEnter={() => setIsOverCard(true)}
                  onMouseLeave={() => setIsOverCard(false)}
                >
                  {/* Image Side */}
                  <div className="relative w-full h-1/2 md:h-full md:flex-[3] overflow-hidden">
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale"
                        data-ai-hint={imageData.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Info Side */}
                  <div className="p-8 md:p-12 md:flex-[1] flex flex-col justify-between bg-foreground text-background border-t md:border-t-0 md:border-l border-background/10">
                    <div>
                      <span className="font-code text-accent mb-4 block text-xs md:text-sm">
                        {project.year}
                      </span>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter mb-6 leading-[0.95] text-background">
                        {project.title}
                      </h2>
                      <p className="text-background/70 text-sm md:text-base leading-relaxed max-w-md font-light">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="mt-8 md:mt-0">
                      <div className="flex flex-col gap-0">
                        {project.tags.map((tag) => (
                          <div key={tag} className="py-2 md:py-3 border-t border-background/10 last:border-b last:border-background/10">
                            <span className="text-[10px] md:text-xs font-code text-accent uppercase tracking-widest">
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
          
          <div className="flex-shrink-0 w-[10vw] md:w-[20vw]" />
        </div>
      </div>
    </div>
  );
}
