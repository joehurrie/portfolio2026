"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 mix-blend-difference text-neutral-300 animate-slide-up-fade"
      style={{ animationDelay: '0.2s' }}
    >
      <Link href="/" className="text-base md:text-lg font-medium tracking-tight">
        Joharie Design & Strategy
      </Link>

      <nav className="hidden md:flex gap-10 text-base md:text-lg font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-transparent hover:text-white">
              <Menu size={32} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card text-card-foreground p-0">
             <nav className="flex flex-col items-center justify-center h-full gap-10 text-2xl font-medium">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
