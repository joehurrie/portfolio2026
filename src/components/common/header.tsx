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

  return (
    <header 
      className={cn(
        "absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 md:py-12 mix-blend-difference text-neutral-300 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
      )}
    >
      <Link href="/" className="text-base md:text-lg font-medium tracking-tight hover:text-white transition-colors">
        Joharie Kisiangani
      </Link>

      <div className="flex items-center gap-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-neutral-400 hover:bg-transparent hover:text-white group p-0 h-auto">
              <span className="hidden md:inline text-sm uppercase tracking-widest font-code opacity-60 group-hover:opacity-100 transition-opacity">Menu</span>
              <Menu size={24} className="md:size-32" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card text-card-foreground p-0 w-full border-l border-white/5 flex flex-col">
             <ScrollArea className="flex-1 w-full">
                <div className="flex flex-col items-center justify-center min-h-[100dvh] py-24 px-6 relative">
                  <div className="absolute top-8 right-6 md:right-12">
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white h-12 w-12">
                        <X size={32} />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <nav className="flex flex-col items-center gap-6 md:gap-10 text-5xl md:text-8xl font-semibold tracking-tighter w-full max-w-4xl mx-auto">
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

                  <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-xl text-center md:text-left pt-12 border-t border-white/10">
                    <div className="flex flex-col gap-2">
                      <p className="text-xs uppercase tracking-[0.3em] font-code text-accent font-bold">Inquiries</p>
                      <p className="text-lg md:text-xl font-light">hello@joharie.com</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs uppercase tracking-[0.3em] font-code text-accent font-bold">Location</p>
                      <p className="text-lg md:text-xl font-light">Berlin, Germany</p>
                    </div>
                  </div>
                  
                  <div className="mt-12 flex gap-8 opacity-40 hover:opacity-100 transition-opacity pb-12">
                    <Link href="#" className="font-code text-sm hover:text-accent transition-colors">LI</Link>
                    <Link href="#" className="font-code text-sm hover:text-accent transition-colors">TW</Link>
                    <Link href="#" className="font-code text-sm hover:text-accent transition-colors">IG</Link>
                  </div>
                </div>
             </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}