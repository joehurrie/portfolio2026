import { Header } from "@/components/common/header";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'testimonial-1');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="pt-24 relative z-10 bg-background pb-[15vh]">
        <section id="about" className="py-20 md:py-32 bg-background text-foreground">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal-on-scroll">
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                {/* Avatar and Headline container */}
                <div className="relative">
                  <div className="flex flex-wrap items-start">
                    {avatarImage && (
                      <div className="inline-block relative w-12 h-16 md:w-16 md:h-20 overflow-hidden rounded-md shrink-0 mr-6 mb-2 md:mt-2">
                        <Image
                          src={avatarImage.imageUrl}
                          alt={avatarImage.description}
                          fill
                          className="object-cover"
                          data-ai-hint={avatarImage.imageHint}
                        />
                      </div>
                    )}
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.05] flex-1">
                      I&apos;m a designer and art director with over 25 years of experience turning ideas into brands and products. I work closely with founders, marketing teams, and developers to create visual systems that scale — from brand strategy to launch-ready interfaces.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Body columns */}
            <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
                  I got my start in 2018, freelancing for early-stage startups while finishing design school. My first big break came working with Dapper Labs during the early Web3 wave — helping shape the look and feel of their product launches. Since then, I&apos;ve collaborated with teams at Polygon, Showtime, and smaller venture-backed startups across LA, London, and Tel Aviv.
                </p>
              </div>
              <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
                  Most of my work sits at the intersection of branding and product. Whether it&apos;s designing pitch decks that raise funding or interfaces that ship, I partner closely with founders and developers to bring bold ideas to life — fast and with intention.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 md:mt-32 flex justify-end reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 text-sm font-normal border-border/50 hover:bg-foreground hover:text-background transition-colors">
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
