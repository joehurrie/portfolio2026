import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Joharie Kisiangani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
