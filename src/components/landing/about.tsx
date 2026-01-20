import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '../common/scroll-animation-wrapper';

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');

  return (
    <section id="about" className="py-20 sm:py-28 bg-card text-card-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <ScrollAnimationWrapper>
            <div className="aspect-square relative overflow-hidden shadow-lg">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={200}>
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                I am a passionate UX Engineer with a mission to create digital experiences that are not only beautiful but also functional, accessible, and enjoyable for everyone. With a background in both design and computer science, I thrive at the intersection of these two worlds.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                At Ngazi, and in my freelance work, I focus on a human-centered approach. I believe that the best products come from a deep understanding of user needs, combined with clean code and scalable design systems. I enjoy tackling complex problems and turning them into simple, intuitive solutions.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                When I&apos;m not crafting pixels and code, you can find me exploring new technologies, contributing to open-source projects, or hiking in the great outdoors.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
