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
    <footer className="sticky bottom-0 z-0 min-h-screen w-full flex flex-col overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.jpg"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden pointer-events-none mix-blend-difference text-white">
        <div className="flex animate-hero-marquee">
          <h1 className="shrink-0 text-huge font-semibold tracking-tighter leading-none px-8 whitespace-nowrap">
            - Reach out -
          </h1>
          <h1 className="shrink-0 text-huge font-semibold tracking-tighter leading-none px-8 whitespace-nowrap" aria-hidden="true">
            - Reach out -
          </h1>
        </div>
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pt-24 md:pt-32">
        <Button asChild size="lg" className="rounded-full group text-base md:text-xl py-6 md:py-8 px-8 md:px-12 bg-transparent border-2 border-accent text-accent animate-red-glow hover:bg-accent hover:text-accent-foreground transition-all">
            <Link href="/contact">
                Let's collaborate
            </Link>
        </Button>
      </div>

      <div className="relative z-30 w-full h-full flex flex-col justify-end flex-grow px-6 pb-12 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end w-full pb-8 md:pb-16 gap-8">
            <div className="text-white font-code text-xs md:text-sm space-y-1">
                {contactDetails.map((detail) => (
                    <p key={detail.label}>
                        <span className="font-semibold">{detail.label}:</span> {detail.value}
                    </p>
                ))}
            </div>
            <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                    <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors group"
                    >
                    <social.icon className="h-5 w-5 text-neutral-300 group-hover:text-accent" />
                    <span>{social.name}</span>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}