import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '../common/scroll-animation-wrapper';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Aisha Omar',
    company: 'CEO, Tech Innovators',
    quote: 'Joharie has a unique talent for translating complex ideas into elegant, user-friendly designs. His work on our platform was transformative.',
  },
  {
    id: 'testimonial-2',
    name: 'Ben Carter',
    company: 'Product Manager, Creative Solutions',
    quote: "Working with Joharie was a pleasure. He's a true collaborator who deeply understands the intersection of design and development.",
  },
  {
    id: 'testimonial-3',
    name: 'Samantha Chen',
    company: 'Founder, Digital Ventures',
    quote: 'The design system Joharie built for us has streamlined our workflow and brought a new level of consistency to our products. Highly recommended!',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What My Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">Stories of success and collaboration.</p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={200}>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto mt-16"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const imageData = PlaceHolderImages.find((img) => img.id === testimonial.id);
                return (
                  <CarouselItem key={testimonial.name}>
                    <div className="p-1">
                      <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                          {imageData && (
                            <Image
                              src={imageData.imageUrl}
                              alt={`Avatar of ${testimonial.name}`}
                              width={80}
                              height={80}
                              data-ai-hint={imageData.imageHint}
                              className="rounded-full mb-4"
                            />
                          )}
                          <blockquote className="max-w-2xl text-lg font-medium">
                            &ldquo;{testimonial.quote}&rdquo;
                          </blockquote>
                          <p className="mt-4 font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="text-foreground border-muted-foreground hover:bg-muted" />
            <CarouselNext className="text-foreground border-muted-foreground hover:bg-muted" />
          </Carousel>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
