import { Header } from "@/components/common/header";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'testimonial-1');
  const mobileShowcase = PlaceHolderImages.find((img) => img.id === 'project-3');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="relative z-10 bg-background">
        {/* Hero Section - Editorial Layout */}
        <section id="about-hero" className="h-screen flex flex-col pt-32 pb-12 md:pt-40 md:pb-20 bg-background text-foreground">
          <div className="container mx-auto max-w-7xl px-6 md:px-12 flex flex-col h-full">
            
            {/* Top Content: Avatar and Headline */}
            <div className="reveal-on-scroll">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                <div className="relative flex-1">
                  <div className="flex flex-wrap items-start">
                    {avatarImage && (
                      <div className="inline-block relative w-12 h-16 md:w-20 md:h-24 overflow-hidden rounded-md shrink-0 mr-8 mb-4 mt-2">
                        <Image
                          src={avatarImage.imageUrl}
                          alt="Joharie Kisiangani"
                          fill
                          className="object-cover grayscale"
                          data-ai-hint={avatarImage.imageHint}
                        />
                      </div>
                    )}
                    <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.95] flex-1">
                      I&apos;m a UX engineer specializing in design systems that bridge the gap between aesthetics and scale.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Content: Two Columns */}
            <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 pb-12 md:pb-0">
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

            {/* Bottom Content: CTA */}
            <div className="mt-8 md:mt-12 flex justify-end reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Button asChild variant="outline" className="rounded-full px-12 py-8 text-lg font-normal border-border/50 hover:bg-foreground hover:text-background transition-all">
                <Link href="/contact">
                  Let&apos;s Talk
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Showcase Section - Cinematic Perspective Mockup */}
        <section className="h-screen flex items-center justify-center bg-[#050505] overflow-hidden border-t border-white/5">
          <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full">
            <div className="reveal-on-scroll w-full max-w-5xl flex flex-col items-center">
              
              {/* Perspective Mockup Container */}
              <div className="relative w-full aspect-video flex items-center justify-center">
                <div 
                  className="relative w-[300px] md:w-[450px] aspect-[9/19] rounded-[3rem] border-[12px] border-[#1a1a1a] bg-black overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-out"
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
                  {/* Internal Screen Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>
                
                {/* Atmospheric Floor Reflection/Shadow */}
                <div 
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-black/40 blur-3xl rounded-full"
                  style={{ transform: 'perspective(1200px) rotateX(80deg)' }}
                />
              </div>

              <div className="mt-16 text-center space-y-3 opacity-40">
                <p className="text-xs uppercase tracking-[0.5em] text-white font-code">System Architecture</p>
                <p className="text-sm font-light text-white/60">High-fidelity engineering meets minimal design.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
