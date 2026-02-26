"use client";

import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work Index' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const MenuIcon = () => (
  <div className="flex flex-col gap-1.5 w-6 py-1">
    <div className="h-[1px] w-full bg-neutral-500 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0s' }} />
    <div className="h-[1px] w-full bg-neutral-500 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.4s' }} />
    <div className="h-[1px] w-full bg-neutral-500 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.8s' }} />
  </div>
);

const BeepingDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
  </span>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  return (
    <header 
      className={cn(
        "absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 md:py-12 mix-blend-difference text-neutral-400"
      )}
    >
      <Link href="/" className="text-base font-medium tracking-tight hover:text-white transition-colors">
        Joharie Kisiangani
      </Link>

      {/* Desktop Toggleable Linear Navigation */}
      <nav className="hidden md:flex items-center">
        <div 
          className={cn(
            "flex items-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden",
            isDesktopMenuOpen 
              ? "max-w-[600px] opacity-100 pr-10" 
              : "max-w-0 opacity-0 pr-0"
          )}
        >
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-code opacity-50 hover:opacity-100 hover:text-white transition-all duration-500 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <button 
          onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
          className="flex items-center gap-3 group"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-code font-bold text-neutral-500 group-hover:text-white transition-colors">
            {isDesktopMenuOpen ? 'Close' : 'Menu'}
          </span>
          {!isDesktopMenuOpen ? <MenuIcon /> : <X className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />}
        </button>
      </nav>

      {/* Mobile Menu Trigger */}
      <div className="flex md:hidden items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.2em] font-code font-bold text-neutral-500">Menu</span>
              <MenuIcon />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-background/80 backdrop-blur-xl text-foreground p-0 w-full border-r border-white/10 flex flex-col">
             <ScrollArea className="flex-1 w-full">
                <div className="flex flex-col justify-between min-h-[100dvh] py-24 px-8 relative">
                  <div className="absolute top-8 right-6">
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-neutral-500 hover:text-foreground h-10 w-10">
                        <X size={24} />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <nav className="flex flex-col gap-6 text-4xl font-semibold tracking-tighter mt-12">
                    {navLinks.map((link, index) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="hover:text-accent transition-all duration-500 hover:translate-x-4 block"
                          onClick={() => setIsOpen(false)}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="mt-auto pt-16 flex flex-col gap-8 border-t border-border/50">
                    <div className="space-y-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-code text-muted-foreground font-bold">Location</p>
                        <p className="text-lg font-light">Berlin, Germany</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-code text-muted-foreground font-bold">Availability</p>
                        <div className="flex items-center gap-3">
                          <BeepingDot />
                          <p className="text-lg font-light">Remote / Worldwide</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-8 opacity-60">
                      <Link href="#" className="font-code text-[10px] hover:text-accent transition-colors uppercase tracking-widest">LinkedIn</Link>
                      <Link href="#" className="font-code text-[10px] hover:text-accent transition-colors uppercase tracking-widest">Twitter</Link>
                      <Link href="#" className="font-code text-[10px] hover:text-accent transition-colors uppercase tracking-widest">Instagram</Link>
                    </div>
                  </div>
                </div>
             </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
