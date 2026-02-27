
"use client";

import React, { useState, useRef } from 'react';
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
    description: 'We redefined the concept of modern living by creating a design that challenges conventional boundaries. Focusing on comfort, functionality, and unexpected elements, we transformed the ordinary into something extraordinary.',
    tags: ['Mobile App', 'Branding', 'Website Design'],
  },
  {
    id: 'project-3',
    year: '(2023)',
    title: 'Posnen Gallery',
    description: 'Future-forward collaborative workspace architecture focused on high-fidelity visual presentation and minimal interfaces.',
    tags: ['Desktop App', 'Branding'],
  }
];

export function StackingProjects() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="projects" className="relative bg-foreground transition-colors duration-700">
      <div className="sticky top-0 z-40 h-0 w-full pointer-events-none">
        <div className="absolute top-8 left-6 md:left-12 text-accent text-[10px] md:text-xs font-code tracking-widest uppercase">
          // Projects
        </div>
      </div>

      {/* Global Custom Cursor for this section */}
      <div 
        className={cn(
          "fixed pointer-events-none z-[100] w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent text-accent-foreground flex flex-col items-center justify-center font-semibold transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl scale-0",
          isHovering && "scale-100"
        )}
        style={{ 
          left: cursorPos.x - (isHovering ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 48 : 64) : 0), 
          top: cursorPos.y - (isHovering ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 48 : 64) : 0),
          position: 'fixed'
        }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">View</span>
        <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8" />
      </div>

      {projects.map((project, index) => {
        const imageData = PlaceHolderImages.find(img => img.id === project.id);
        
        return (
          <div 
            key={`${project.id}-${index}`}
            className="sticky top-0 h-screen w-full flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden"
            style={{ zIndex: index + 1 }}
          >
            <div 
              className="w-full max-w-7xl h-[80vh] bg-foreground rounded-[2rem] overflow-hidden border border-background/20 shadow-large flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-700 cursor-none"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleMouseMove}
            >
              {/* Image Side */}
              <div className="relative w-full h-1/2 md:h-full md:flex-[2.5] overflow-hidden group">
                {imageData && (
                  <Image
                    src={imageData.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                    data-ai-hint={imageData.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Content Side */}
              <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-foreground text-background border-t md:border-t-0 md:border-l border-background/10">
                <div className="space-y-4 md:space-y-6">
                  <span className="font-code text-accent block text-xs md:text-sm">
                    {project.year}
                  </span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-none text-background">
                    {project.title}
                  </h2>
                  <p className="text-background/70 text-sm md:text-base leading-relaxed max-w-md font-light">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 space-y-0">
                  <div className="border-t border-background/10">
                    {project.tags.map((tag) => (
                      <div key={tag} className="py-2 md:py-3 border-b border-background/10 flex justify-between items-center group cursor-default">
                        <span className="text-[10px] md:text-xs font-code text-background/60 group-hover:text-accent transition-colors uppercase tracking-[0.2em]">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
