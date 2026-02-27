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
        <section className="min-h-screen flex flex-col pt-32 pb-12 md:pt-48 md:pb-24 bg-background text-foreground">
          <div className="container mx-auto max-w-7xl px-6 md:px-12 flex flex-col h-full">
            <div className="reveal-on-scroll">
              <div className="flex flex-wrap items-start">
                {avatarImage && (
                  <div className="inline-block relative w-16 h-24 md:w-16 md:h-30 overflow-hidden rounded-full shrink-0 mr-6 md:mr-10 mb-4 mt-4">
                    <Image
                      src="/about1.png"
                      alt="Joharie"
                      fill
                      className="object-cover grayscale"
                      data-ai-hint={avatarImage.imageHint}
                    />
                  </div>
                )}
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-[0.95] flex-1 max-w-5xl">
                  I&apos;m a Web developer and UX designer specializing in digital products that bridge the gap between design and technology.
                </h2>
              </div>
            </div>

            <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 pb-12 md:pb-0 pt-20">
              <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg font-light">
                  I collaborate with entrepreneurs to build digital products that give unique appeal, solve business problems while maintaining user satisfaction. My work focuses on technical feasibility without compromising design intent, ensuring every design is as performant as it is beautiful.
                </p>
              </div>
              <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg font-light">
                  From creating brand assets to developing website and mobile apps I will help you launch your digital product for scaling in the market through modern technology and design.
                </p>
              </div>
            </div>

            <div className="mt-16 md:mt-24 flex justify-center reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Link href="/contact" className="cta-gradient-btn group">
                <span>
                  Let&apos;s Talk
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Showcase Section - Full Section Image Embed */}
        <section className="relative w-full h-[60vh] md:h-[90vh] bg-foreground overflow-hidden">
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
        <section className="py-24 md:py-32 bg-background border-t border-border/50">
          <div className="container mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-12 md:mb-16 reveal-on-scroll">
              <span className="text-accent font-code text-xs md:text-sm tracking-widest uppercase">// Recognition and Archive</span>
            </div>
            <div className="flex flex-col w-full">
              {archiveItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="reveal-on-scroll group relative border-b border-border/50 first:border-t"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Link href="#" className="flex items-center w-full px-2 py-8 transition-all duration-300 ease-out group-hover:bg-accent group-hover:px-6">
                    <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1.5fr_1fr_1fr_auto] items-center w-full gap-8">
                      <span className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </span>
                      <span className="hidden md:block text-sm lg:text-base text-muted-foreground group-hover:text-white/80 transition-colors duration-300 font-light">
                        {item.context}
                      </span>
                      <span className="hidden md:block text-sm lg:text-base text-muted-foreground group-hover:text-white/80 transition-colors duration-300 font-light">
                        {item.source}
                      </span>
                      <div className="flex items-center justify-end gap-4 md:gap-6">
                        <span className="font-code text-xs md:text-sm text-muted-foreground group-hover:hidden transition-all duration-300">
                          {item.id}
                        </span>
                        <ArrowUpRight className="hidden group-hover:block text-white h-5 w-5 animate-in fade-in slide-in-from-left-2 duration-300" />
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
