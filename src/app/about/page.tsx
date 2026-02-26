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
        {/* Hero Section */}
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
                    <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.05] flex-1">
                      I&apos;m a UX engineer and design systems specialist bridging the gap between high-fidelity design and scalable production code. I work with founders to architect resilient interfaces.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Content: Two Columns */}
            <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 pb-12 md:pb-0">
              <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                  My background sits at the intersection of aesthetics and accessibility. I collaborate with engineering teams to build component libraries that scale, focusing on technical feasibility without compromising design intent.
                </p>
              </div>
              <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                  I don&apos;t just design interfaces; I engineer the systems that power them. Whether it&apos;s optimizing React performance or architecting foundations in Tailwind, my goal is shipping quality products that feel as good as they look.
                </p>
              </div>
            </div>

            {/* Bottom Content: CTA */}
            <div className="mt-8 md:mt-12 flex justify-end reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Button asChild variant="outline" className="rounded-full px-10 py-7 text-base font-normal border-border/50 hover:bg-foreground hover:text-background transition-all">
                <Link href="/contact">
                  Let&apos;s Talk
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="h-screen flex items-center justify-center bg-background overflow-hidden border-t border-border/10">
          <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
            <div className="reveal-on-scroll w-full max-w-md">
              <div className="relative aspect-[9/19] w-full rounded-[3.5rem] border-[12px] border-muted bg-muted overflow-hidden shadow-2xl">
                {mobileShowcase && (
                  <Image
                    src={mobileShowcase.imageUrl}
                    alt="UX Showcase"
                    fill
                    className="object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-in-out"
                    data-ai-hint="mobile interface design"
                  />
                )}
                {/* Minimal Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
              </div>
              <div className="mt-12 text-center space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-code">Mobile Interface Design</p>
                <p className="text-lg font-light text-foreground/60">Seamless interaction meets scalable systems.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
