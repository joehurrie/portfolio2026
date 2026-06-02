
"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
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
    title: 'Eco-Wise',
    image: '/eco.PNG',
    description: 'A sustainable e-commerce platform that puts eco-conscious products at your fingertips. Designed for the environmentally aware consumer seeking ethical purchasing without compromise.',
    tags: ['E-commerce', 'Website', 'Services'],
    link: 'https://eco-wise-navy.vercel.app/', // TODO: Replace with live project URL
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
];

export function Projects() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="projects" className="bg-card text-card-foreground relative py-24 md:py-32">
      <div className="sticky top-0 z-40 h-0">
        <div className="absolute top-8 left-6 md:left-12 text-accent text-[10px] md:text-xs font-code tracking-widest uppercase mt-16 md:mt-0">
          // Projects
        </div>
      </div>

      {/* Desktop scroll view */}
      <div className="hidden md:flex flex-col items-center">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="min-h-[90vh] w-full max-w-7xl flex items-center justify-center p-6 md:p-12 reveal-on-scroll"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto bg-background text-foreground p-6 md:p-8 rounded-2xl shadow-large min-h-[70vh] max-h-[800px] cursor-none relative"
              onMouseEnter={() => setHoveredProjectId(project.title)}
              onMouseLeave={() => setHoveredProjectId(null)}
              onMouseMove={handleMouseMove}
            >
              {/* Left Column - Image */}
              <div className="relative w-full h-64 md:h-full overflow-hidden rounded-lg group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Right Column - Details */}
              <div className="flex flex-col py-4 overflow-y-auto">
                <h3 className="text-3xl lg:text-5xl font-semibold tracking-tight mt-2">{project.title}</h3>
                <p className="mt-4 text-muted-foreground text-sm lg:text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto pt-8 border-t border-border/50 w-full">
                  <ul className="flex flex-col">
                    {project.tags.map(tag => (
                      <li key={tag} className="py-2 lg:py-3 border-b border-border/50 text-base lg:text-lg text-foreground/80 font-medium">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tracking Cursor Button */}
              {hoveredProjectId === project.title && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-50 pointer-events-none"
                >
                  <div
                    className="absolute flex flex-col items-center justify-center w-28 h-28 rounded-full bg-accent text-accent-foreground font-semibold shadow-2xl animate-cursor-scale-in"
                    style={{
                      left: `${cursorPosition.x}px`,
                      top: `${cursorPosition.y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">View</span>
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile list view */}
      <div className="md:hidden flex flex-col gap-12 px-6 mt-16">
        {projects.map((project, index) => (
          <Link
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-background text-foreground p-6 rounded-2xl shadow-large reveal-on-scroll block"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative w-full h-64 overflow-hidden rounded-lg mb-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
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
          </Link>
        ))}
      </div>
    </section>
  );
}
