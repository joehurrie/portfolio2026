import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function About() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'testimonial-1');

  return (
    <section id="about" className="py-32 md:py-48 bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {avatarImage && (
              <div className="relative w-20 h-24 sm:w-24 sm:h-28 overflow-hidden rounded-lg shrink-0">
                <Image
                  src={avatarImage.imageUrl}
                  alt={avatarImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={avatarImage.imageHint}
                />
              </div>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              I&apos;m a designer and art director with over 25 years of experience turning ideas into brands and products. I work closely with founders, marketing teams, and developers to create visual systems that scale — from brand strategy to launch-ready interfaces.
            </h2>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-muted-foreground text-lg font-light">
          <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <p>
              I got my start in 2018, freelancing for early-stage startups while finishing design school. My first big break came working with Dapper Labs during the early Web3 wave — helping shape the look and feel of their product launches. Since then, I&apos;ve collaborated with teams at Polygon, Showtime, and smaller venture-backed startups across LA, London, and Tel Aviv.
            </p>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            <p>
              Most of my work sits at the intersection of branding and product. Whether it&apos;s designing pitch decks that raise funding or interfaces that ship, I partner closely with founders and developers to bring bold ideas to life — fast and with intention.
            </p>
          </div>
        </div>

        <div className="mt-24 flex justify-end">
          <div className="reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
             <Button asChild size="lg" variant="outline" className="rounded-full border-muted-foreground/50 text-foreground hover:bg-card hover:text-card-foreground hover:border-card transition-all duration-300 group text-lg md:text-xl py-7 px-10">
                <Link href="#contact" className="flex items-center gap-3">
                    Let&apos;s Talk
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
