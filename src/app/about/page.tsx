import { Header } from "@/components/common/header";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'testimonial-1');

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <Header />
      <main className="relative z-10 bg-background h-screen">
        <section id="about" className="h-full flex flex-col pt-32 pb-12 md:pt-40 md:pb-20 bg-background text-foreground">
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
                          alt={avatarImage.description}
                          fill
                          className="object-cover"
                          data-ai-hint={avatarImage.imageHint}
                        />
                      </div>
                    )}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.05] flex-1">
                      I&apos;m a UX engineer and design systems specialist bridging the gap between high-fidelity design and scalable production code. I work with founders and engineering teams to architect resilient interfaces that ship.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Content: Two Columns */}
            <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 pb-12 md:pb-0">
              <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                  My background sits at the intersection of aesthetics and accessibility. Since 2018, I&apos;ve collaborated with venture-backed startups to build component libraries and design systems that scale. I focus on technical feasibility without compromising on the &quot;magic&quot; of the original design intent.
                </p>
              </div>
              <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                  I don&apos;t just design interfaces; I engineer the systems that power them. Whether it&apos;s optimizing React performance or architecting themeable foundations in Tailwind, my goal is always the same: shipping quality products that feel as good as they look.
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
      </main>
    </div>
  );
}
