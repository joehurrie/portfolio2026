
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ScrollHandler } from '@/components/common/scroll-handler';
import { BackToTop } from '@/components/common/back-to-top';
import { ThemeProvider } from '@/components/theme-provider';
import { SmoothScroll } from '@/components/common/smooth-scroll';

export const metadata: Metadata = {
  title: 'Joharie Kisiangani — Design & Strategy',
  description: 'A portfolio for Joharie Kisiangani, Web Designer & Art Director.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <div className="relative">
            {children}
          </div>
          <Toaster />
          <ScrollHandler />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
