
"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/projects', label: 'Work Index' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  return (
    <header 
      className={cn(
        "absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 md:py-12 mix-blend-difference text-neutral-300"
      )}
    >
      <Link href="/" className="text-base md:text-lg font-medium tracking-tight hover:text-white transition-colors">
        Joharie Kisiangani
      </Link>

      {/* Desktop Toggleable Linear Navigation */}
      <nav className="hidden md:flex items-center">
        <div 
          className={cn(
            "flex items-center gap-10 lg:gap-14 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden",
            isDesktopMenuOpen 
              ? "max-w-[600px] opacity-100 pr-12" 
              : "max-w-0 opacity-0 pr-0"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-code opacity-50 hover:opacity-100 hover:text-white transition-all duration-500 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <button 
          onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
          className={cn(
            "text-[10px] md:text-xs uppercase tracking-[0.3em] font-code py-2.5 px-6 rounded-full transition-all duration-500 border border-white/10",
            isDesktopMenuOpen 
              ? "bg-white text-black border-white" 
              : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
          )}
        >
          {isDesktopMenuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile Menu Trigger */}
      <div className="flex md:hidden items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-neutral-400 hover:bg-transparent hover:text-white p-0 h-auto">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card text-card-foreground p-0 w-full border-l border-white/5 flex flex-col">
             <ScrollArea className="flex-1 w-full">
                <div className="flex flex-col items-center justify-center min-h-[100dvh] py-24 px-6 relative">
                  <div className="absolute top-8 right-6">
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white h-12 w-12">
                        <X size={32} />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <nav className="flex flex-col items-center gap-8 text-5xl font-semibold tracking-tighter w-full">
                    {navLinks.map((link, index) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="hover:text-accent transition-all duration-500 hover:translate-x-4 block text-center"
                          onClick={() => setIsOpen(false)}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="mt-20 grid grid-cols-1 gap-10 w-full max-w-xs text-center pt-12 border-t border-white/10">
                    <div className="flex flex-col gap-1">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-code text-accent font-bold">Inquiries</p>
                      <p className="text-lg font-light">hello@joharie.com</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-code text-accent font-bold">Location</p>
                      <p className="text-lg font-light">Berlin, Germany</p>
                    </div>
                  </div>
                  
                  <div className="mt-12 flex gap-8 opacity-40 hover:opacity-100 transition-opacity pb-12">
                    <Link href="#" className="font-code text-xs hover:text-accent transition-colors">LI</Link>
                    <Link href="#" className="font-code text-xs hover:text-accent transition-colors">TW</Link>
                    <Link href="#" className="font-code text-xs hover:text-accent transition-colors">IG</Link>
                  </div>
                </div>
             </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
