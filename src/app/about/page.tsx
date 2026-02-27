import { Header } from "@/components/common/header";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from 'lucide-react';
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
  const mobileShowcase = PlaceHolderImages.find((img) => img.id === 'project-3');
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
                  <div className="inline-block relative w-12 h-14 md:w-16 md:h-20 overflow-hidden rounded-md shrink-0 mr-6 md:mr-10 mb-4 mt-2">
                    <Image
                      src={avatarImage.imageUrl}
                      alt="Joharie Kisiangani"
                      fill
                      className="object-cover grayscale"
                      data-ai-hint={avatarImage.imageHint}
                    />
                  </div>
                )}
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-[0.95] flex-1 max-w-5xl">
                  I&apos;m a UX engineer specializing in design systems that bridge the gap between aesthetics and scale.
                </h2>
              </div>
            </div>

            <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 pb-12 md:pb-0 pt-20">
              <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg font-light">
                  I collaborate with engineering teams to architect resilient interfaces. My work focuses on technical feasibility without compromising design intent, ensuring every component is as performant as it is beautiful.
                </p>
              </div>
              <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg font-light">
                  From optimizing React render cycles to building accessible foundations in Tailwind, I engineer the systems that power modern digital products. I transform high-fidelity visions into scalable production code.
                </p>
              </div>
            </div>

            <div className="mt-16 md:mt-24 flex justify-center reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Let&apos;s Talk
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="h-screen flex items-center justify-center bg-[#36454F] overflow-hidden border-t border-white/5">
          <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full">
            <div className="reveal-on-scroll w-full max-w-5xl flex flex-col items-center">
              <div className="relative w-full aspect-video flex items-center justify-center">
                <div 
                  className="relative w-[280px] md:w-[400px] aspect-[9/19] rounded-[2.5rem] border-[10px] border-background/20 bg-background overflow-hidden shadow-large transition-all duration-1000 ease-out"
                  style={{ 
                    transform: 'perspective(1200px) rotateX(20deg) rotateY(-15deg) rotateZ(5deg)',
                    boxShadow: '-20px 40px 80px rgba(0,0,0,0.8)'
                  }}
                >
                  {mobileShowcase && (
                    <Image
                      src={mobileShowcase.imageUrl}
                      alt="UX Showcase"
                      fill
                      className="object-cover grayscale opacity-90"
                      data-ai-hint="mobile app interface"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="mt-12 text-center space-y-2 opacity-40">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white font-code">System Architecture</p>
                <p className="text-xs md:text-sm font-light text-white/60">High-fidelity engineering meets minimal design.</p>
              </div>
            </div>
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
        <section className="relative h-[80vh] flex items-center bg-[#36454F] overflow-hidden">
          {ctaBgImage && (
            <div className="absolute inset-0 z-0">
              <Image
                src={ctaBgImage.imageUrl}
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
