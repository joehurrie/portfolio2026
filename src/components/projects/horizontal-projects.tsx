
"use client";

import React, { useRef, useState, useEffect } from 'react';
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
  {
    title: 'Ngazi',
    image: '/Ngazi.PNG',
    description: 'A SaaS platform empowering entrepreneurs to build, launch, and scale their digital products. From mobile apps to full web platforms — Ngazi turns vision into viable technology.',
    tags: ['SaaS', 'Mobile Apps', 'Web Development'],
    link: 'https://ngazi.vercel.app/', // TODO: Replace with live project URL
  },

  {
    title: 'AIR',
    image: '/Air.PNG',
    description: 'A sleek rental and booking platform tailored for urban homes. Designed for modern travelers seeking seamless city stays with curated local experiences.',
    tags: ['Real Estate', 'Travel', 'Booking'],
    link: 'https://alx-listing-app-deployed-gules-rho.vercel.app/', // TODO: Replace with live project URL
  },
  {
    title: 'Jet',
    image: '/jet.PNG',
    description: 'A data-driven sports prediction platform that delivers intelligent insights for informed betting decisions. Precision analytics meets an intuitive user experience.',
    tags: ['Landing Page', 'Website'],
    link: 'https://jet-betting-tips-git-email-joehurries-projects.vercel.app/', // TODO: Replace with live project URL
  },
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

          {projects.map((project, index) => (
            <section
              key={`${project.title}-${index}`}
              className="flex-shrink-0 w-[94vw] md:w-[75vw] h-[75vh] md:h-[80vh] flex items-center justify-center px-3 md:px-8"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row w-full h-full bg-foreground rounded-[2.5rem] overflow-hidden shadow-large group cursor-none border border-background/20"
                onMouseEnter={() => setIsOverCard(true)}
                onMouseLeave={() => setIsOverCard(false)}
              >
                {/* Image Side */}
                <div className="relative w-full h-1/2 md:h-full md:flex-[3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Info Side */}
                <div className="p-8 md:p-12 md:flex-[1] flex flex-col justify-between bg-foreground text-background border-t md:border-t-0 md:border-l border-background/10">
                  <div>
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
              </Link>
            </section>
          ))}

          <div className="flex-shrink-0 w-[10vw] md:w-[20vw]" />
        </div>
      </div>
    </div>
  );
}
