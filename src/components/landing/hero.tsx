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
          src="/hero1.jpg"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pt-32 md:pt-48 overflow-hidden pointer-events-none mix-blend-difference text-white">
        <div className="flex animate-hero-marquee">
          <h1 className="shrink-0 text-huge font-semibold tracking-tighter leading-none px-8 whitespace-nowrap">
            Joharie Kisiangani
          </h1>
          <h1 className="shrink-0 text-huge font-semibold tracking-tighter leading-none px-8 whitespace-nowrap" aria-hidden="true">
            Joharie Kisiangani
          </h1>
        </div>
      </div>

      <div className="relative z-20 w-full h-full flex flex-col justify-end px-6 pb-8 md:px-12 md:pb-12">
        <div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end w-full animate-slide-up-fade"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="flex flex-row md:flex-col gap-6 md:gap-4 mb-8 md:mb-0">
            {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base md:text-lg font-medium text-white/80 hover:text-accent transition-colors group"
                >
                  <social.icon className="h-6 w-6 text-white/80 group-hover:text-accent" />
                  <span className="hidden md:inline">{social.name}</span>
                </Link>
            ))}
          </div>

          <div className="text-left md:text-right">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter leading-[0.85]">
              <span className="block text-accent text-3xl md:text-4xl lg:text-5xl mb-2 tracking-tight font-normal">//Product Designer</span>
              <span className="text-accent">UX Engineer</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
