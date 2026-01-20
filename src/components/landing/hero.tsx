import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ];

  return (
    <header className="relative min-h-[110vh] w-full flex flex-col overflow-hidden bg-secondary">
      {/* Background Image Container with Clip Animation */}
      <div className="absolute inset-0 z-0 animate-clip-reveal origin-bottom">
        {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="w-full h-full object-cover grayscale contrast-125 object-[center_25%]"
              data-ai-hint={heroImage.imageHint}
              priority
            />
        )}
        {/* Gradient Overlay for text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Massive Name Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none mix-blend-overlay">
        <h1 
          className="text-huge font-semibold tracking-tighter leading-none text-foreground text-center w-full animate-slide-up-fade" 
          style={{ animationDelay: '0.5s' }}
        >
          Joharie Kisiangani
        </h1>
      </div>

      {/* Floating UI Elements */}
      <div className="relative z-20 w-full h-full flex flex-col justify-end flex-grow px-6 pb-12 md:px-12">
        <div 
          className="flex flex-col md:flex-row justify-between items-end w-full pb-8 md:pb-16 animate-slide-up-fade"
          style={{ animationDelay: '0.8s' }}
        >
          {/* Social Links */}
          <div className="flex flex-col gap-4 mb-12 md:mb-0">
            {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base md:text-lg font-medium text-foreground hover:text-accent transition-colors group"
                >
                  <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent" />
                  <span>{social.name}</span>
                </Link>
            ))}
          </div>

          {/* Role/Subtitle */}
          <div className="text-right">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] text-foreground">
              <span className="block opacity-60 text-3xl md:text-4xl lg:text-5xl mb-2 tracking-tight font-normal text-muted-foreground">// UX Engineer</span>
              Art Director
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}
