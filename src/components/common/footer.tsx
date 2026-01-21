import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

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
          className="w-full h-full object-cover contrast-125 object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent"></div>
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

      <div className="relative z-20 w-full h-full flex flex-col justify-end flex-grow px-6 pb-12 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end w-full pb-8 md:pb-16">
            <div className="text-white font-code text-sm space-y-1 mb-8 md:mb-0">
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
