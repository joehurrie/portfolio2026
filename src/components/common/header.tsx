
"use client";

import Link from 'next/link';
import { X, Menu, Sun, Moon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work Index' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const BeepingDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
  </span>
);

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-5 h-5" />;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110 focus:outline-none"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 stroke-[2px]" />
      ) : (
        <Moon className="w-5 h-5 stroke-[2px]" />
      )}
    </button>
  );
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 md:py-10">
      <Link 
        href="/" 
        className="group relative text-sm font-medium tracking-tight text-primary transition-colors"
      >
        Joharie Kisiangani
        <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-primary transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-full" />
      </Link>

      <div className="flex items-center gap-6">
        {/* Desktop Toggleable Navigation */}
        <nav className="hidden md:flex items-center">
          <div 
            className={cn(
              "flex items-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden",
              isDesktopMenuOpen ? "max-w-[500px] opacity-100 pr-10" : "max-w-0 opacity-0 pr-0"
            )}
          >
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-tight text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
              className="flex items-center gap-3 text-foreground transition-all duration-300 hover:scale-110 focus:outline-none"
            >
              <span className="hidden md:block text-sm font-medium tracking-tight">
                {isDesktopMenuOpen ? 'Close' : 'Menu'}
              </span>
              {isDesktopMenuOpen ? (
                <X className="w-5 h-5 stroke-[2px]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2px]" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 focus:outline-none">
                <Menu className="w-6 h-6 stroke-[2px]" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-background/90 backdrop-blur-3xl text-foreground p-0 w-full border-l-0 flex flex-col [&>button]:hidden animate-in slide-in-from-right duration-700"
            >
              <ScrollArea className="flex-1 w-full">
                <div className="flex flex-col justify-between min-h-screen py-24 px-8 relative">
                  <div className="absolute top-10 left-8">
                    <Link href="/" className="text-sm font-medium text-primary hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      Joharie Kisiangani
                    </Link>
                  </div>
                  <div className="absolute top-10 right-8">
                    <SheetClose asChild>
                      <button className="text-foreground/40 hover:text-primary transition-all duration-300 hover:scale-110 p-2">
                        <X className="w-6 h-6 stroke-[2px]" />
                      </button>
                    </SheetClose>
                  </div>
                  
                  <nav className="flex flex-col gap-6 text-3xl font-medium tracking-tighter mt-12">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-foreground hover:text-primary transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto pt-16 flex flex-col gap-10 border-t border-border/10">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-code text-foreground/30">Location</p>
                        <p className="text-sm font-medium tracking-tight">Nairobi, Kenya</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-code text-foreground/30">Availability</p>
                        <div className="flex items-center gap-3">
                          <BeepingDot />
                          <p className="text-sm font-medium tracking-tight">Remote, Worldwide</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-8">
                      <Link href="#" className="font-code text-[10px] text-foreground/30 hover:text-primary uppercase tracking-widest transition-colors">LinkedIn</Link>
                      <Link href="#" className="font-code text-[10px] text-foreground/30 hover:text-primary uppercase tracking-widest transition-colors">Twitter</Link>
                      <Link href="#" className="font-code text-[10px] text-foreground/30 hover:text-primary uppercase tracking-widest transition-colors">Instagram</Link>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
