
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

export function StackingProjects() {
  return (
    <section id="projects" className="relative bg-background">
      {/* Section Label */}
      <div className="sticky top-0 z-40 h-0">
        <div className="absolute top-8 left-6 md:left-12 text-accent text-base md:text-lg font-code tracking-wide">
          // Projects
        </div>
      </div>

      {projects.map((project, index) => {
        const imageData = PlaceHolderImages.find(img => img.id === project.id);
        
        return (
          <div 
            key={`${project.id}-${index}`}
            className="sticky top-0 h-screen w-full flex items-center justify-center p-4 md:p-12 overflow-hidden"
            style={{ zIndex: index + 1 }}
          >
            <div className="w-full max-w-7xl h-[85vh] md:h-[80vh] bg-card rounded-[2.5rem] overflow-hidden border border-border/50 shadow-large flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-700">
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
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between bg-card text-card-foreground border-t md:border-t-0 md:border-l border-border/50">
                <div className="space-y-6">
                  <span className="font-code text-accent block text-xs md:text-sm">
                    {project.year}
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter leading-[0.9] text-card-foreground">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-md font-light">
                    {project.description}
                  </p>
                </div>

                <div className="mt-12 space-y-0">
                  <div className="border-t border-border/30">
                    {project.tags.map((tag) => (
                      <div key={tag} className="py-3 md:py-4 border-b border-border/30 flex justify-between items-center group cursor-default">
                        <span className="text-xs md:text-sm font-code text-muted-foreground group-hover:text-accent transition-colors uppercase tracking-widest">
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
