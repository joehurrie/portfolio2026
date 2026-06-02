
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Mziqee',
    image: '/mziqee.PNG',
    description: 'A dynamic music product launch platform. Built to captivate, convert, and drive engagement.',
    tags: ['Landing Page', 'Website', 'E-commerce'],
    link: 'https://mziqee.vercel.app/', // TODO: Replace with live project URL
  },
  {
    title: 'The Haven',
    image: '/Haven.PNG',
    description: 'A premium real estate landing page engineered to bridge the gap between realtors and prospective homebuyers. Clean, compelling, and built to convert interest into action.',
    tags: ['Website', 'Real Estate'],
    link: 'https://thehaven-three.vercel.app/', // TODO: Replace with live project URL
  },
  {
    title: 'Doc IQ',
    image: '/DocIQ.PNG',
    description: 'An AI-powered document processing engine that transforms how businesses analyze, extract, and act on information. Intelligent automation for the modern workflow.',
    tags: ['Landing Page', 'SaaS', 'Website'],
    link: 'https://digi-ai-rho.vercel.app/', // TODO: Replace with live project URL
  },
  {
    title: 'Eco-Wise',
    image: '/eco.PNG',
    description: 'A sustainable e-commerce platform that puts eco-conscious products at your fingertips. Designed for the environmentally aware consumer seeking ethical purchasing without compromise.',
    tags: ['E-commerce', 'Website', 'Services'],
    link: 'https://eco-wise-navy.vercel.app/', // TODO: Replace with live project URL
  },
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

      {projects.map((project, index) => (
        <div
          key={`${project.title}-${index}`}
          className="sticky top-0 h-screen w-full flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden"
          style={{ zIndex: index + 1 }}
        >
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-7xl h-[80vh] bg-foreground rounded-[2rem] overflow-hidden border border-background/20 shadow-large flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-700 cursor-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Image Side */}
            <div className="relative w-full h-1/2 md:h-full md:flex-[2.5] overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content Side */}
            <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-foreground text-background border-t md:border-t-0 md:border-l border-background/10">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-none text-accent">
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
                      <span className="text-[10px] md:text-xs font-code text-accent uppercase tracking-[0.2em]">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
