"use client";

import Image from 'next/image';
import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedTestimonialText } from './animated-testimonial-text';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Aisha Omar',
    company: 'CEO, Tech Innovators',
    quote: 'Joharie has a unique talent for translating <span class="text-accent">complex ideas into elegant</span>, user-friendly designs. His work on our platform was <span class="text-accent">transformative</span>.',
  },
  {
    id: 'testimonial-2',
    name: 'Ben Carter',
    company: 'Product Manager, Creative Solutions',
    quote: "Working with Joharie was a pleasure. He's a <span class=\"text-accent\">true collaborator</span> who deeply understands the intersection of <span class=\"text-accent\">design and development</span>.",
  },
  {
    id: 'testimonial-3',
    name: 'Samantha Chen',
    company: 'Founder, Digital Ventures',
    quote: 'The design system Joharie built for us has <span class=\"text-accent\">streamlined our workflow</span> and brought a new level of consistency to our products. <span class=\"text-accent\">Highly recommended!</span>',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];
  const reversedTestimonials = [...testimonials].reverse();

  return (
    <section id="testimonials" className="bg-background text-foreground relative md:h-screen py-24 md:py-0">
      <div className="sticky top-0 z-40 h-0">
        <div className="absolute top-8 left-6 md:left-12 text-accent text-base md:text-lg font-code tracking-wide">
          // Testimonials
        </div>
      </div>
      
      <div className="md:h-full w-full flex md:items-center px-6 md:px-12">
        <div className="w-full">
          {/* Mobile: list view */}
          <div className="flex flex-col gap-16 md:hidden">
              {reversedTestimonials.map((testimonial, index) => (
                  <div key={testimonial.id}>
                      <div className="font-code text-accent mb-4">
                          {String(testimonials.length - index).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                      </div>
                      <AnimatedTestimonialText text={testimonial.quote} />
                      <div className="mt-8 flex items-center gap-4">
                        {(() => {
                          const imageData = PlaceHolderImages.find((img) => img.id === testimonial.id);
                          return imageData ? (
                            <Image
                              src={imageData.imageUrl}
                              alt={`Avatar of ${testimonial.name}`}
                              width={48}
                              height={48}
                              data-ai-hint={imageData.imageHint}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          ) : null;
                        })()}
                        <div>
                            <p className="font-code text-foreground text-lg">// {testimonial.name}</p>
                            <p className="font-code text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                  </div>
              ))}
          </div>

          {/* Desktop: single view */}
          <div className="hidden md:grid grid-cols-[1fr_auto] items-center gap-24">
            <div className="flex flex-col gap-8">
              <div className="font-code text-accent">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </div>

              <AnimatedTestimonialText
                key={activeIndex} 
                text={activeTestimonial.quote}
              />
              
              <div className="mt-4">
                <p className="font-code text-foreground text-lg">// {activeTestimonial.name}</p>
                <p className="font-code text-muted-foreground">{activeTestimonial.company}</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {testimonials.map((testimonial, index) => {
                const imageData = PlaceHolderImages.find((img) => img.id === testimonial.id);
                return (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden transition-all duration-300 ring-offset-4 ring-offset-background",
                      activeIndex === index ? 'ring-2 ring-accent scale-110' : 'opacity-50 hover:opacity-100 hover:scale-105'
                    )}
                  >
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={`Avatar of ${testimonial.name}`}
                        width={64}
                        height={64}
                        data-ai-hint={imageData.imageHint}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
