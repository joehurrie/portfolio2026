"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';

const projects = [
  {
    id: 'project-1',
    year: '(2024)',
    title: 'Formula Vintage',
    description: 'For Formula Vintage, we crafted a design that honors the rich heritage of classic cars while adding a modern twist. Combining timeless elegance with sleek, contemporary elements, we created an experience that appeals to both enthusiasts and newcomers, celebrating the past with a fresh perspective.',
    tags: ['Landing Page', 'Mobile App', 'Redesign'],
  },
  {
    id: 'project-2',
    year: '(2023)',
    title: 'E-commerce Platform Revamp',
    description: 'Redesigned a major e-commerce website, resulting in a 30% increase in user engagement and a more intuitive shopping experience.',
    tags: ['Web Design', 'E-commerce', 'Figma'],
  },
  {
    id: 'project-3',
    year: '(2022)',
    title: 'Mobile Banking App',
    description: 'Designed and co-developed a mobile banking application focused on accessibility and ease of use for a diverse user base.',
    tags: ['App Design', 'Fintech', 'React Native'],
  },
];

export function Projects() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current;
      const scrollContainer = scrollContainerRef.current;

      if (!section || !scrollContainer) return;

      const rect = section.getBoundingClientRect();
      const isFullViewportHeight = Math.abs(rect.height - window.innerHeight) <= 1;
      const isScrolledToTop = Math.abs(rect.top) <= 1;

      if (isFullViewportHeight && isScrolledToTop) {
        const { deltaY } = e;
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

        const atTop = scrollTop < 1;
        const atBottom = scrollTop >= scrollHeight - clientHeight - 1;

        if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) {
          e.preventDefault();

          if (scrollTimeoutRef.current) {
            return;
          }

          const scrollAmount = deltaY > 0 ? clientHeight : -clientHeight;
          scrollContainer.scrollBy({ top: scrollAmount, behavior: 'smooth' });

          scrollTimeoutRef.current = setTimeout(() => {
            scrollTimeoutRef.current = null;
          }, 800);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isMobile]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section ref={sectionRef} id="projects" className="bg-card text-card-foreground relative md:h-screen py-24 md:py-0">
       <div className="sticky top-0 z-40 h-0">
        <div className="absolute top-8 left-6 md:left-12 text-accent text-base md:text-lg font-code tracking-wide mt-16 md:mt-0">
          // Projects
        </div>
      </div>
      
      {/* Desktop scroll view */}
      <div
        ref={scrollContainerRef}
        className="hidden md:block h-full w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {projects.map((project) => {
          const imageData = PlaceHolderImages.find((img) => img.id === project.id);
          return (
            <div key={project.id} className="h-screen w-full snap-start flex items-center justify-center p-6 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto bg-background text-foreground p-6 md:p-8 rounded-2xl shadow-large h-[85vh] max-h-[800px]">
                {/* Left Column - Image */}
                <div
                  className="relative w-full h-full overflow-hidden rounded-lg cursor-none"
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  onMouseMove={handleMouseMove}
                >
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={imageData.description}
                      fill
                      data-ai-hint={imageData.imageHint}
                      className="object-cover"
                    />
                  )}
                  {hoveredProjectId === project.id && (
                    <Link href="#" className="absolute inset-0">
                      <div
                        className="absolute flex items-center justify-center w-28 h-28 rounded-full bg-accent text-accent-foreground font-semibold text-lg pointer-events-none animate-cursor-scale-in"
                        style={{
                          left: `${cursorPosition.x}px`,
                          top: `${cursorPosition.y}px`,
                        }}
                      >
                        View
                      </div>
                    </Link>
                  )}
                </div>
                {/* Right Column - Details */}
                <div className="flex flex-col py-4 overflow-y-auto">
                   <span className="font-code text-muted-foreground">{project.year}</span>
                   <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mt-2">{project.title}</h3>
                   <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                     {project.description}
                   </p>
                   <div className="mt-auto pt-8 border-t border-border/50 w-full">
                     <ul className="flex flex-col">
                       {project.tags.map(tag => (
                         <li key={tag} className="py-3 border-b border-border/50 text-lg text-foreground/80 font-medium">
                          {tag}
                         </li>
                       ))}
                     </ul>
                   </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile list view */}
      <div className="md:hidden flex flex-col gap-12 px-6 mt-16">
        {projects.map((project) => {
            const imageData = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <div key={project.id} className="w-full bg-background text-foreground p-6 rounded-2xl shadow-large">
                <div className="relative w-full h-64 overflow-hidden rounded-lg mb-6">
                  {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={imageData.description}
                        fill
                        data-ai-hint={imageData.imageHint}
                        className="object-cover"
                      />
                    )}
                </div>
                <div className="flex flex-col">
                   <span className="font-code text-muted-foreground">{project.year}</span>
                   <h3 className="text-3xl font-semibold tracking-tight mt-2">{project.title}</h3>
                   <p className="mt-4 text-muted-foreground text-base leading-relaxed">
                     {project.description}
                   </p>
                   <div className="mt-8 pt-8 border-t border-border/50 w-full">
                     <ul className="flex flex-col">
                       {project.tags.map(tag => (
                         <li key={tag} className="py-3 border-b border-border/50 text-lg text-foreground/80 font-medium">
                          {tag}
                         </li>
                       ))}
                     </ul>
                   </div>
                </div>
              </div>
            );
        })}
      </div>
    </section>
  );
}
