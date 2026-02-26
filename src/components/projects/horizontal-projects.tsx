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
    description: 'A design that honors classic automotive heritage with a modern technical twist.',
    tag: 'Landing Page',
  },
  {
    id: 'project-2',
    year: '(2024)',
    title: 'Vibrent SOTD',
    description: 'A mobile-first social discovery platform engineered for high-performance interaction.',
    tag: 'Mobile Design',
  },
  {
    id: 'project-3',
    year: '(2023)',
    title: 'CoSpace HM',
    description: 'Future-forward collaborative workspace architecture focused on seamless navigation.',
    tag: 'Web App',
  },
  {
    id: 'project-2', // Reusing placeholder IDs for layout
    year: '(2023)',
    title: 'Bio Sun Tech',
    description: 'Minimalist interface for sustainable energy data visualization and monitoring.',
    tag: 'Innovation',
  },
  {
    id: 'project-1',
    year: '(2022)',
    title: 'Nocode Mate',
    description: 'Empowering creators with a scalable, accessible design system for modern web builds.',
    tag: 'Design System',
  }
];

export function HorizontalProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isOverImage, setIsOverImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPos = window.scrollY;

      if (scrollPos >= containerTop && scrollPos <= containerTop + containerHeight - windowHeight) {
        const relativeScroll = scrollPos - containerTop;
        const totalHorizontalScroll = (projects.length) * window.innerWidth;
        const progress = relativeScroll / (containerHeight - windowHeight);
        setTranslateX(progress * totalHorizontalScroll);
      } else if (scrollPos < containerTop) {
        setTranslateX(0);
      } else {
        setTranslateX((projects.length) * window.innerWidth);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
          className="flex h-full w-full transition-transform duration-100 ease-out"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {/* Section 0: Work Index Heading */}
          <section className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-6 md:px-12">
            <h1 className="text-7xl md:text-[15vw] font-bold tracking-tighter leading-none reveal-on-scroll is-visible">
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
                className="flex-shrink-0 w-screen h-full flex items-center justify-center px-6 md:px-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 w-full max-w-7xl items-center">
                  {/* Image Side */}
                  <div 
                    className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden cursor-none group"
                    onMouseEnter={() => setIsOverImage(true)}
                    onMouseLeave={() => setIsOverImage(false)}
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
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-8 left-8">
                       <span className="px-4 py-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-xs font-code text-white uppercase tracking-widest">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Info Side */}
                  <div className="flex flex-col">
                    <span className="font-code text-accent mb-6 text-xl tracking-tighter">{project.year}</span>
                    <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-8 leading-[0.9]">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-lg font-light mb-12">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 group cursor-pointer w-fit">
                      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                        <span className="text-foreground group-hover:text-accent-foreground transition-colors">→</span>
                      </div>
                      <span className="text-lg font-medium tracking-tight">Case Study</span>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
