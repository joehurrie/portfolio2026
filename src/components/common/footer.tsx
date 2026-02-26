import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ];

  const contactDetails = [
      {label: "Office", value: "Ozeanblickstraße, Berlin 10115, Germany"},
      {label: "Mail", value: "hello@alexgraham.com"},
      {label: "Phone", value: "+49 30 12345678"},
  ]

  return (
    <footer className="sticky bottom-0 z-0 min-h-screen w-full flex flex-col overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about.png"
          alt="Contact background"
          fill
          className="w-full h-full object-cover object-[center_25%] md:hidden"
        />
        <Image
          src="/desk.png"
          alt="Contact background"
          fill
          className="w-full h-full object-cover object-[center_25%] hidden md:block"
        />
      </div>

      {/* Marquee Text Layer - Top positioning with theme grey */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-center pt-24 md:pt-32 overflow-hidden pointer-events-none text-muted-foreground">
        <div className="flex animate-hero-marquee opacity-10">
          <h1 className="shrink-0 text-huge font-semibold tracking-tighter leading-none px-8 whitespace-nowrap">
            - Reach out -
          </h1>
          <h1 className="shrink-0 text-huge font-semibold tracking-tighter leading-none px-8 whitespace-nowrap" aria-hidden="true">
            - Reach out -
          </h1>
        </div>
      </div>

      {/* CTA Button Layer - Centered for vertical balance */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <Button asChild size="lg" className="rounded-full group text-base md:text-xl py-6 md:py-8 px-8 md:px-12 bg-transparent border-2 border-accent text-accent animate-red-glow hover:bg-accent hover:text-accent-foreground transition-all">
            <Link href="/contact">
                Let's collaborate
            </Link>
        </Button>
      </div>

      {/* Bottom Info Layer - Clean theme-grey text and even spacing */}
      <div className="relative z-30 w-full h-full flex flex-col justify-end px-6 pb-8 md:px-12 md:pb-12 text-muted-foreground">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-10 border-t border-muted-foreground/20 pt-10">
            <div className="font-code text-xs md:text-sm space-y-3 text-center md:text-left">
                {contactDetails.map((detail) => (
                    <p key={detail.label}>
                        <span className="font-semibold opacity-70">{detail.label}:</span> {detail.value}
                    </p>
                ))}
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
                <div className="flex items-center gap-8 md:gap-12">
                    {socialLinks.map((social) => (
                        <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
                        >
                        <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        <span className="hidden sm:inline">{social.name}</span>
                        </Link>
                    ))}
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-code mt-4">
                    &copy; {new Date().getFullYear()} Joharie Kisiangani. All Rights Reserved.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
