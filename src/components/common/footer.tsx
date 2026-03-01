"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const BeepingDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
  </span>
);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ];

  return (
    <footer ref={footerRef} className="relative z-0 min-h-screen w-full flex flex-col overflow-hidden bg-background">
      {/* Background Container - Set to cover the entire section without parallax gaps */}
      <div className="absolute inset-0 z-0 flex items-end justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/footer1.png"
            alt="Footer background portrait"
            fill
            className="w-full h-full object-cover object-bottom"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/40 pointer-events-none" />
        </div>
      </div>

      {/* Marquee Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-start justify-center pt-32 md:pt-48 lg:pt-64 overflow-hidden pointer-events-none mix-blend-difference text-primary">
        <div className="flex animate-hero-marquee whitespace-nowrap">
          <h1 className="shrink-0 text-6xl md:text-8xl lg:text-[12vw] font-semibold tracking-tighter leading-none px-12">
            Start a Project Start a Project Start a Project Start a Project Start a Project 
          </h1>
          <h1 className="shrink-0 text-6xl md:text-8xl lg:text-[12vw] font-semibold tracking-tighter leading-none px-12" aria-hidden="true">
            Start a Project Start a Project Start a Project Start a Project Start a Project 
          </h1>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pt-32">
        <Link 
          href="/contact"
          className="cta-gradient-btn group"
        >
          <span className="text-base md:text-xl tracking-tight font-medium px-10 py-5">
            Let&apos;s Build
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </span>
        </Link>
      </div>

      {/* Footer Meta Info */}
      <div className="relative z-30 w-full mt-auto flex flex-col justify-end px-8 pb-12 md:px-16 md:pb-16 text-foreground">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-16 md:gap-8">
          <div className="font-code text-[11px] md:text-sm space-y-3 text-center md:text-left tracking-wide">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <span className="font-bold uppercase opacity-40">Location:</span> 
              <span className="font-medium">Nairobi, Kenya</span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <span className="font-bold uppercase opacity-40">Mail:</span> 
              <span className="font-medium underline underline-offset-4 hover:text-primary transition-colors">kisianganijoharie@gmail.com</span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <span className="font-bold uppercase opacity-40">Phone:</span> 
              <span className="font-medium">0758224285</span>
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
              <span className="font-bold uppercase opacity-40">Availability:</span>
              <div className="flex items-center gap-3 bg-foreground/5 px-4 py-2 rounded-full">
                <span className="font-medium">Remote, Worldwide</span>
                <BeepingDot />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-8 md:gap-12">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold hover:text-primary transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-neutral-500 group-hover:text-primary transition-colors" />
                  <span className="hidden sm:inline uppercase tracking-[0.2em]">{social.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 font-code mt-4">
              &copy; {new Date().getFullYear()} Joharie Kisiangani. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}