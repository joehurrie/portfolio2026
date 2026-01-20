import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="absolute top-0 z-30 w-full">
      <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 text-foreground sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm font-medium">© Joharie Design & Strategy</span>
        </Link>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
