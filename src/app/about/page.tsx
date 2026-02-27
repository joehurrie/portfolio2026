import { Header } from "@/components/common/header";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { AnimatedAboutCtaText } from "@/components/about/animated-about-cta";
import { AboutExperience } from "@/components/about/experience";
import { Footer } from "@/components/common/footer";

const archiveItems = [
  { id: '01', name: 'Vibrent', context: 'SOTD', source: 'Awwwards' },
  { id: '02', name: 'CoSpace', context: 'HM', source: 'Awwwards' },
  { id: '03', name: 'Formula Vintage', context: 'Dribbble Weekly Picks', source: 'Dribbble' },
  { id: '04', name: 'Bio Sun', context: 'Dribbble Weekly Picks', source: 'Dribbble' },
];

export default function AboutPage() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'testimonial-1');
  const ctaBgImage = PlaceHolderImages.find((img) => img.id === 'about-image');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="relative z-10 bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col pt-40 pb-20 md:pt-64 md:pb-32 bg-background text-foreground">
          <div className="container mx-auto max-w-7xl px-6 md:px-12 flex flex-col h-full">
            <div className="reveal-on-scroll">
              <div className="flex flex-wrap items-start">
                {avatarImage && (
                  <div className="inline-block relative w-16 h-24 md:w-20 md:h-28 overflow-hidden rounded-full shrink-0 mr-8 md:mr-12 mb-6 mt-2">
                    <Image
                      src="/about1.png"
                      alt="Joharie"
                      fill
                      className="object-cover grayscale"
                      data-ai-hint={avatarImage.imageHint}
                    />
                  </div>
                )}
                <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.95] flex-1 max-w-5xl">
                  I&apos;m a Web developer and UX designer specializing in digital products that bridge the gap between design and technology.
                </h2>
              </div>
            </div>

            <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 pb-12">
              <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg font-light">
                  I collaborate with entrepreneurs to build digital products that give unique appeal, solve business problems while maintaining user satisfaction. My work focuses on technical feasibility without compromising design intent.
                </p>
              </div>
              <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg font-light">
                  From creating brand assets to developing website and mobile apps I will help you launch your digital product for scaling in the market through modern technology and design.
                </p>
              </div>
            </div>

            <div className="mt-20 md:mt-32 flex justify-center reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Link href="/contact" className="cta-gradient-btn group">
                <span>
                  Let&apos;s Talk
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Showcase Section - Full Section Image Embed */}
        <section className="relative w-full h-[70vh] md:h-[100vh] bg-foreground overflow-hidden">
          <div className="w-full h-full reveal-on-scroll">
            <Image
              src="/img.png"
              alt="System Architecture"
              fill
              className="object-cover grayscale"
              data-ai-hint="system architecture"
              priority
            />
          </div>
        </section>

        {/* Archive Section */}
        <section className="py-24 md:py-32 lg:py-48 bg-background border-t border-border/50">
          <div className="container mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-16 md:mb-24 reveal-on-scroll">
              <span className="text-accent font-code text-xs md:text-sm tracking-[0.3em] uppercase">// Recognition and Archive</span>
            </div>
            <div className="flex flex-col w-full">
              {archiveItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="reveal-on-scroll group relative border-b border-border/50 first:border-t"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Link href="#" className="flex items-center w-full px-2 py-10 transition-all duration-300 ease-out group-hover:bg-accent group-hover:px-8">
                    <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1.5fr_1fr_1fr_auto] items-center w-full gap-8">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </span>
                      <span className="hidden md:block text-sm lg:text-lg text-muted-foreground group-hover:text-white/80 transition-colors duration-300 font-light">
                        {item.context}
                      </span>
                      <span className="hidden md:block text-sm lg:text-lg text-muted-foreground group-hover:text-white/80 transition-colors duration-300 font-light">
                        {item.source}
                      </span>
                      <div className="flex items-center justify-end gap-6">
                        <span className="font-code text-xs md:text-sm text-muted-foreground group-hover:hidden transition-all duration-300">
                          {item.id}
                        </span>
                        <ArrowUpRight className="hidden group-hover:block text-white h-6 w-6 animate-in fade-in slide-in-from-left-2 duration-300" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative h-[80vh] flex items-center bg-foreground overflow-hidden">
          {ctaBgImage && (
            <div className="absolute inset-0 z-0">
              <Image
                src="/extra.png"
                alt="Atmospheric Background"
                fill
                className="object-cover opacity-20 grayscale"
                data-ai-hint="atmospheric portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>
          )}
          <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
            <div className="reveal-on-scroll">
              <AnimatedAboutCtaText />
            </div>
          </div>
        </section>

        <AboutExperience />
      </main>
      <Footer />
    </div>
  );
}