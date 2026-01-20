import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const name = 'Joharie Kisiangani - ';
  const repeatedName = Array(20).fill(name).join('');

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ];

  return (
    <section className="relative flex h-screen min-h-[700px] flex-col justify-end overflow-hidden bg-secondary text-foreground">
      {/* Background Image */}
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-[80%_50%] opacity-80"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        </div>
      )}

      {/* Scrolling Text Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white mix-blend-multiply">
        <div className="absolute inset-0 flex items-center">
          <div className="flex w-max animate-marquee-ltr whitespace-nowrap [animation-play-state:running]">
            <span className="font-headline text-[10rem] font-black uppercase text-black lg:text-[14rem] xl:text-[18rem]">
              {repeatedName}
            </span>
            <span className="font-headline text-[10rem] font-black uppercase text-black lg:text-[14rem] xl:text-[18rem]">
              {repeatedName}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-20 container mx-auto flex w-full max-w-7xl items-end justify-between px-4 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              <social.icon className="h-4 w-4" />
              <span>{social.name}</span>
            </Link>
          ))}
        </div>

        <div className="text-right">
          <h2 className="font-body text-xl font-medium tracking-tight text-foreground">
            // UX Engineer
          </h2>
          <h2 className="font-body text-xl font-medium tracking-tight text-foreground">
            Art Director <ArrowRight className="inline h-5 w-5" />
          </h2>
        </div>
      </div>
    </section>
  );
}
