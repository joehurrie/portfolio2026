import { Header } from "@/components/common/header";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { AnimatedAboutCtaText } from "@/components/about/animated-about-cta";
import { AboutExperience } from "@/components/about/experience";
import { Footer } from "@/components/common/footer";

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
                      priority
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