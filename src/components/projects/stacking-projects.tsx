
"use client";

import React from 'react';
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
  return (
    <section id="projects" className="relative bg-foreground transition-colors duration-500">
      <div className="sticky top-0 z-40 h-0">
        <div className="absolute top-8 left-6 md:left-12 text-accent text-xs md:text-sm font-code tracking-wide">
          // Projects
        </div>
      </div>

      {projects.map((project, index) => {
        const imageData = PlaceHolderImages.find(img => img.id === project.id);
        
        return (
          <div 
            key={`${project.id}-${index}`}
            className="sticky top-0 h-screen w-full flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden"
            style={{ zIndex: index + 1 }}
          >
            <div className="w-full max-w-7xl h-[80vh] bg-card rounded-[2rem] overflow-hidden border border-border/50 shadow-large flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-700">
              {/* Image Side */}
              <div className="relative w-full h-1/2 md:h-full md:flex-[2.5] overflow-hidden">
                {imageData && (
                  <Image
                    src={imageData.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover grayscale transition-transform duration-1000 hover:scale-105"
                    data-ai-hint={imageData.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Content Side */}
              <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-card text-card-foreground border-t md:border-t-0 md:border-l border-border/50">
                <div className="space-y-4 md:space-y-6">
                  <span className="font-code text-accent block text-xs md:text-sm">
                    {project.year}
                  </span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-none text-card-foreground">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md font-light">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 space-y-0">
                  <div className="border-t border-border/30">
                    {project.tags.map((tag) => (
                      <div key={tag} className="py-2 md:py-3 border-b border-border/30 flex justify-between items-center group cursor-default">
                        <span className="text-[10px] md:text-xs font-code text-muted-foreground group-hover:text-accent transition-colors uppercase tracking-[0.2em]">
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
