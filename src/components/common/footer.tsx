
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const BeepingDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
  </span>
);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight) {
        // As the footer enters from bottom (rect.top decreases)
        // We calculate a subtle positive offset to push the image down 
        // relative to its bottom anchor, ensuring it never lifts off the floor.
        const scrolledIntoView = windowHeight - rect.top;
        setOffset(scrolledIntoView * 0.05);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer ref={footerRef} className="relative z-0 min-h-screen w-full flex flex-col overflow-hidden bg-background">
      {/* Background Container - Anchored to Bottom */}
      <div className="absolute inset-0 z-0 flex items-end justify-center overflow-hidden">
        <div 
          className="relative w-full h-[115vh] transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <Image
            src="/footer.png"
            alt="Hero background"
            fill
            className="w-full h-full object-cover object-bottom md:hidden"
            priority
          />
          <Image
            src="/footer.png"
            alt="Hero background"
            fill
            className="w-full h-full object-cover object-bottom hidden md:block"
            priority
          />
        </div>
      </div>

      {/* Marquee Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-start justify-center pt-24 md:pt-32 overflow-hidden pointer-events-none mix-blend-difference text-primary">
        <div className="flex animate-hero-marquee whitespace-nowrap">
          <h1 className="shrink-0 text-6xl md:text-8xl lg:text-[10vw] font-semibold tracking-tighter leading-none px-12">
            Start a Project Start a Project Start a Project Start a Project
          </h1>
          <h1 className="shrink-0 text-6xl md:text-8xl lg:text-[10vw] font-semibold tracking-tighter leading-none px-12" aria-hidden="true">
            Start a Project Start a Project Start a Project Start a Project
          </h1>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pt-20">
        <Link 
          href="/contact"
          className="cta-gradient-btn group"
        >
          <span className="text-base md:text-lg tracking-tight">
            Let&apos;s Build
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </span>
        </Link>
      </div>

      {/* Footer Meta Info */}
      <div className="relative z-30 w-full mt-auto flex flex-col justify-end px-6 pb-10 md:px-12 md:pb-12 text-muted-foreground/80">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-8">
          <div className="font-code text-[10px] md:text-xs space-y-2 text-center md:text-left tracking-wide">
            <p>
              <span className="font-bold uppercase opacity-100">Location:</span> Nairobi, Kenya
            </p>
            <p>
              <span className="font-bold uppercase opacity-100">Mail:</span> kisianganijoharie@gmail.com
            </p>
            <p>
              <span className="font-bold uppercase opacity-100">Phone:</span> 0758224285
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="font-bold uppercase opacity-100">Availability:</span>
              <div className="flex items-center gap-2">
                <BeepingDot />
                <span>Remote, Worldwide</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-6 md:gap-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium hover:text-primary transition-colors group"
                >
                  <social.icon className="h-4 w-4 text-neutral-500 group-hover:text-primary transition-colors" />
                  <span className="hidden sm:inline uppercase tracking-widest">{social.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-code mt-1">
              &copy; {new Date().getFullYear()} Joharie Kisiangani. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
