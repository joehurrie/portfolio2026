import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Hero() {

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0 animate-clip-reveal origin-bottom">
        <Image
          src="/hero.jpg"
          alt="Joharie Kisiangani Profile"
          fill
          className="w-full h-full object-cover grayscale contrast-125 object-[center_25%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden pointer-events-none mix-blend-difference text-white">
        <div className="flex animate-hero-marquee">
          <h1 className="shrink-0 text-huge font-semibold tracking-tighter leading-none px-8 whitespace-nowrap">
            joharie kisiangani
          </h1>
          <h1 className="shrink-0 text-huge font-semibold tracking-tighter leading-none px-8 whitespace-nowrap" aria-hidden="true">
            joharie kisiangani
          </h1>
        </div>
      </div>

      <div className="relative z-20 w-full h-full flex flex-col justify-end flex-grow px-6 pb-12 md:px-12">
        <div 
          className="flex flex-col md:flex-row justify-between items-end w-full pb-8 md:pb-16 animate-slide-up-fade"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="flex flex-col gap-4 mb-12 md:mb-0">
            {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base md:text-lg font-medium text-white hover:text-accent transition-colors group"
                >
                  <social.icon className="h-6 w-6 text-neutral-300 group-hover:text-accent" />
                  <span>{social.name}</span>
                </Link>
            ))}
          </div>

          <div className="text-right">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[0.9] text-white">
              <span className="block opacity-60 text-3xl md:text-4xl lg:text-5xl mb-2 tracking-tight font-normal">//Product Designer</span>
              UX Engineer
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
