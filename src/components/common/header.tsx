
"use client";

import Link from 'next/link';
import { X, Menu } from 'lucide-react';
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

const BeepingDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
  </span>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  return (
    <header 
      className={cn(
        "absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 md:py-12"
      )}
    >
      <Link href="/" className="text-base font-medium tracking-tight text-foreground hover:text-accent transition-colors">
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
              className="text-xs uppercase tracking-[0.2em] font-code text-foreground hover:text-accent transition-all duration-300 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <button 
          onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
          className="flex items-center gap-3 group text-foreground hover:text-accent transition-colors focus:outline-none"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-code font-bold">
            {isDesktopMenuOpen ? 'Close' : 'Menu'}
          </span>
          {!isDesktopMenuOpen ? (
            <Menu className="w-6 h-6 stroke-[3px]" />
          ) : (
            <X className="w-6 h-6 stroke-[3px]" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Trigger */}
      <div className="flex md:hidden items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="flex items-center gap-3 text-foreground hover:text-accent transition-colors focus:outline-none">
              <span className="text-xs uppercase tracking-[0.2em] font-code font-bold">Menu</span>
              <Menu className="w-6 h-6 stroke-[3px]" />
            </button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="bg-background/95 backdrop-blur-2xl text-foreground p-0 w-full border-l border-border/10 flex flex-col [&>button]:hidden animate-in slide-in-from-right duration-500"
          >
             <ScrollArea className="flex-1 w-full">
                <div className="flex flex-col justify-between min-h-[100dvh] py-24 px-8 relative">
                  <div className="absolute top-8 left-6">
                     <Link href="/" className="text-base font-medium tracking-tight text-foreground/60 hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                        Joharie Kisiangani
                    </Link>
                  </div>
                  <div className="absolute top-8 right-6">
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-accent h-10 w-10">
                        <X size={24} strokeWidth={3} />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <nav className="flex flex-col gap-8 text-3xl font-medium tracking-tighter mt-12">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 block"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="mt-auto pt-16 flex flex-col gap-8 border-t border-border/10">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-code text-foreground/40 font-bold">Location</p>
                        <p className="text-base font-medium">Nairobi, Kenya</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-code text-foreground/40 font-bold">Availability</p>
                        <div className="flex items-center gap-2">
                          <BeepingDot />
                          <p className="text-base font-medium">Remote, Worldwide</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-8">
                      <Link href="#" className="font-code text-[10px] text-foreground/40 hover:text-accent transition-colors uppercase tracking-widest">LinkedIn</Link>
                      <Link href="#" className="font-code text-[10px] text-foreground/40 hover:text-accent transition-colors uppercase tracking-widest">Twitter</Link>
                      <Link href="#" className="font-code text-[10px] text-foreground/40 hover:text-accent transition-colors uppercase tracking-widest">Instagram</Link>
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
