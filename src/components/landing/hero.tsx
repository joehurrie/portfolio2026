import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ScrollAnimationWrapper } from '../common/scroll-animation-wrapper';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const name = 'Joharie Kisiangani - ';
  // Repeat name to fill width for seamless scrolling
  const repeatedName = Array(20).fill(name).join('');

  return (
    <section className="relative flex h-[calc(100vh-4rem)] min-h-[500px] items-center justify-center text-left overflow-hidden bg-black">
      {/* Background Image */}
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover opacity-80"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      
      {/* Scrolling Text Overlay */}
      <div className="absolute inset-0 z-10 mix-blend-multiply bg-white pointer-events-none">
        <div className="absolute inset-0 flex items-center">
            <div className="w-max flex whitespace-nowrap animate-marquee-right [animation-play-state:running]">
                <span className="font-headline text-[10rem] lg:text-[14rem] xl:text-[18rem] font-black uppercase text-black">
                    {repeatedName}
                </span>
                <span className="font-headline text-[10rem] lg:text-[14rem] xl:text-[18rem] font-black uppercase text-black">
                    {repeatedName}
                </span>
            </div>
        </div>
      </div>
      
      {/* Foreground Content */}
      <div className="relative container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-20">
        <ScrollAnimationWrapper>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]">
            Blending Design &amp; Technology
          </h1>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white sm:text-xl [text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)]">
            Hi, I&apos;m Joharie Kisiangani, a UX Engineer based at Ngazi. I specialize in building intuitive, user-centric digital products that bridge the gap between creative design and robust engineering.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={400}>
          <div className="mt-8 flex justify-start gap-4">
            <Button asChild size="lg" className='bg-white text-black hover:bg-gray-200'>
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
