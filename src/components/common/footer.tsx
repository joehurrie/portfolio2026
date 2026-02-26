
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ];

  const contactDetails = [
    { label: "Office", value: "Ozeanblickstraße, Berlin 10115, Germany" },
    { label: "Mail", value: "hello@alexgraham.com" },
    { label: "Phone", value: "+49 30 12345678" },
  ];

  const portrait = PlaceHolderImages.find(img => img.id === 'footer-portrait');

  return (
    <footer className="relative z-0 min-h-screen w-full flex flex-col overflow-hidden bg-[#e5e5e5]">
      {/* Background Portrait Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {portrait && (
          <div className="relative w-full h-full md:w-[60vw] md:h-[90vh]">
            <Image
              src={portrait.imageUrl}
              alt={portrait.description}
              fill
              className="object-cover md:object-contain grayscale contrast-125 opacity-80"
              data-ai-hint={portrait.imageHint}
            />
          </div>
        )}
      </div>

      {/* Top Marquee Text Layer - Large Blend Effect Text */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-start justify-center pt-24 md:pt-32 overflow-hidden pointer-events-none mix-blend-difference text-white">
        <div className="flex animate-hero-marquee">
          <h1 className="shrink-0 text-huge font-semibold tracking-tighter leading-none px-8 whitespace-nowrap">
            Reach Out — Reach Out —
          </h1>
          <h1 className="shrink-0 text-huge font-semibold tracking-tighter leading-none px-8 whitespace-nowrap" aria-hidden="true">
            Reach Out — Reach Out —
          </h1>
        </div>
      </div>

      {/* CTA Button Layer - Centered over the portrait */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pt-32">
        <Button asChild size="lg" className="rounded-full group text-base md:text-xl py-6 md:py-8 px-8 md:px-12 bg-transparent border-2 border-accent text-accent animate-red-glow hover:bg-accent hover:text-accent-foreground transition-all">
          <Link href="/contact">
            Let's collaborate
          </Link>
        </Button>
      </div>

      {/* Bottom Info Layer - Office Details & Socials */}
      <div className="relative z-30 w-full mt-auto flex flex-col justify-end px-6 pb-8 md:px-12 md:pb-12 text-neutral-600">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-10">
          <div className="font-code text-xs md:text-sm space-y-1 text-center md:text-left">
            {contactDetails.map((detail) => (
              <p key={detail.label}>
                <span className="font-bold uppercase text-neutral-800">{detail.label}:</span> {detail.value}
              </p>
            ))}
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-8 md:gap-10">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-accent transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-neutral-400 group-hover:text-accent transition-colors" />
                  <span className="hidden sm:inline">{social.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-code mt-2">
              &copy; {new Date().getFullYear()} Joharie Kisiangani. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
