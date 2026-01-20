import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ScrollAnimationWrapper } from '../common/scroll-animation-wrapper';

export function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-4rem)] min-h-[500px] items-center justify-center text-left">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Blending Design &amp; Technology
          </h1>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Hi, I&apos;m Joharie Kisiangani, a UX Engineer based at Ngazi. I specialize in building intuitive, user-centric digital products that bridge the gap between creative design and robust engineering.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={400}>
          <div className="mt-8 flex justify-start gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
