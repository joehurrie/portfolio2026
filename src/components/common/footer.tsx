
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [autoX, setAutoX] = useState(0);

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ];

  const contactDetails = [
    { label: "Office", value: "Berlin 10115, Germany" },
    { label: "Mail", value: "hello@joharie.com" },
    { label: "Phone", value: "+49 30 12345678" },
  ];

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setAutoX((prev) => (prev - 0.6) % 2000);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      if (rect.top < windowHeight) {
        const scrolledIntoView = windowHeight - rect.top;
        setOffset(scrolledIntoView * 0.1);
      }
      setScrollX(-scrollY * 0.4); 
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer ref={footerRef} className="relative z-0 min-h-screen w-full flex flex-col overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div 
          className="relative w-full h-[110%] md:w-[100vw] md:h-[105vh] transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${-offset}px)` }}
        >
          <Image
            src="/hero111.png"
            alt="Hero background"
            fill
            className="w-full h-full object-cover object-[center_25%] md:hidden"
            priority
          />
          <Image
            src="/desk.png"
            alt="Hero background"
            fill
            className="w-full h-full object-cover object-[center_25%] hidden md:block"
            priority
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 z-10 flex items-start justify-center pt-24 md:pt-32 overflow-hidden pointer-events-none mix-blend-difference text-primary">
        <div 
          className="flex whitespace-nowrap will-change-transform"
          style={{ transform: `translateX(calc(-33.33% + ${(autoX + scrollX) % 1000}px))` }}
        >
          <h1 className="shrink-0 text-6xl md:text-8xl lg:text-[10vw] font-semibold tracking-tighter leading-none px-6">
            Start a Project — Start a Project — Start a Project —
          </h1>
          <h1 className="shrink-0 text-6xl md:text-8xl lg:text-[10vw] font-semibold tracking-tighter leading-none px-6" aria-hidden="true">
            Start a Project — Start a Project — Start a Project —
          </h1>
        </div>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center pt-20">
        <div className="beam-button-container group">
          <div className="beam-border" />
          <Link 
            href="/contact"
            className="beam-content py-4 px-10 text-base md:text-lg font-medium tracking-tight text-white transition-all duration-300"
          >
            Let's collaborate
          </Link>
        </div>
      </div>

      <div className="relative z-30 w-full mt-auto flex flex-col justify-end px-6 pb-10 md:px-12 md:pb-12 text-muted-foreground/80">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-8">
          <div className="font-code text-[10px] md:text-xs space-y-1 text-center md:text-left tracking-wide">
            {contactDetails.map((detail) => (
              <p key={detail.label}>
                <span className="font-bold uppercase opacity-60">{detail.label}:</span> {detail.value}
              </p>
            ))}
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
