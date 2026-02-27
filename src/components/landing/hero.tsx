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
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 animate-clip-reveal origin-bottom">
        <Image
          src="/hero111.png"
          alt="Hero background"
          fill
          className="w-full h-full object-cover object-[center_25%] md:hidden"
          priority
        />
        <Image
          src="/desk.png"
          alt="Hero background"
          fill
          className="w-full h-full object-cover object-[center_25%] hidden md:block"
          priority
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pt-24 overflow-hidden pointer-events-none mix-blend-difference text-primary">
        <div className="flex animate-hero-marquee">
          <h1 className="shrink-0 text-7xl md:text-9xl lg:text-[12vw] font-semibold tracking-tighter leading-none px-8 whitespace-nowrap">
            Joharie Kisiangani
          </h1>
          <h1 className="shrink-0 text-7xl md:text-9xl lg:text-[12vw] font-semibold tracking-tighter leading-none px-8 whitespace-nowrap" aria-hidden="true">
            Joharie Kisiangani
          </h1>
        </div>
      </div>

      <div className="relative z-20 w-full h-full flex flex-col justify-end px-6 pb-8 md:px-12 md:pb-12">
        <div 
          className="flex flex-row justify-between items-end w-full animate-slide-up-fade"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="flex flex-row gap-6 md:gap-4 mb-2 md:mb-0 mix-blend-difference">
            {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-neutral-400 group-hover:text-accent transition-colors" />
                  <span className="hidden md:inline">{social.name}</span>
                </Link>
            ))}
          </div>

          <div className="text-right">
            <h2 className="text-xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight">
              <span className="block text-accent text-xs md:text-base mb-1 tracking-tight font-normal whitespace-nowrap uppercase font-code">// Product Designer</span>
              <span className="text-accent whitespace-nowrap">Web developer</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
