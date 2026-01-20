import { Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border/10 py-24 px-6 md:px-12 text-center relative z-30">
      <div className="reveal-on-scroll">
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter text-card-foreground mb-12">
          Let&apos;s Talk.
        </h2>
      </div>
      <div className="reveal-on-scroll" style={{transitionDelay: '100ms'}}>
        <Link href="mailto:joharie.kisiangani@email.com" className="inline-flex items-center gap-3 text-2xl md:text-3xl text-muted-foreground hover:text-accent transition-colors">
          <Mail className="h-8 w-8" />
          joharie.kisiangani@email.com
        </Link>
      </div>
      <div className="mt-24 text-muted-foreground/50 text-sm md:text-base font-code">
        &copy; {new Date().getFullYear()} Joharie Kisiangani. All Rights Reserved.
      </div>
    </footer>
  );
}
