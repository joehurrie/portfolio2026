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

/**
 * Testimonials section.
 * Standardized spacing for a high-fidelity feel.
 */
export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];
  const reversedTestimonials = [...testimonials].reverse();

  return (
    <section id="testimonials" className="bg-background text-foreground relative py-24 md:py-32 lg:py-48 min-h-screen flex flex-col justify-center">
      <div className="sticky top-0 z-40 h-0 w-full pointer-events-none">
        <div className="absolute top-8 left-6 md:left-12 text-accent text-[10px] md:text-xs font-code tracking-[0.3em] uppercase">
          // Testimonials
        </div>
      </div>
      
      <div className="w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile Layout: Static full-color list for better legibility */}
          <div className="mt-16 flex flex-col gap-32 md:hidden">
              {reversedTestimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="reveal-on-scroll">
                      <AnimatedTestimonialText text={testimonial.quote} />
                      <div className="mt-12 flex items-end justify-between border-t border-border/50 pt-8">
                        <div className="flex items-center gap-6">
                            {(() => {
                            const imageData = PlaceHolderImages.find((img) => img.id === testimonial.id);
                            return imageData ? (
                                <Image
                                src={imageData.imageUrl}
                                alt={`Avatar of ${testimonial.name}`}
                                width={56}
                                height={56}
                                data-ai-hint={imageData.imageHint}
                                className="w-14 h-14 rounded-full object-cover grayscale"
                                />
                            ) : null;
                            })()}
                            <div>
                                <p className="font-code text-foreground text-sm tracking-tight font-medium">// {testimonial.name}</p>
                                <p className="font-code text-muted-foreground text-[10px] uppercase tracking-[0.2em] mt-1">{testimonial.company}</p>
                            </div>
                        </div>
                        <div className="font-code text-accent text-xs tracking-widest">
                            {String(testimonials.length - index).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                        </div>
                      </div>
                  </div>
              ))}
          </div>

          {/* Desktop Layout: Interactive Single View with Reveal Animation */}
          <div className="hidden md:grid grid-cols-[1fr_auto] gap-32 items-center reveal-on-scroll">
            <div className="flex flex-col gap-16">
              <div className="font-code text-accent text-sm tracking-[0.3em]">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </div>

              <AnimatedTestimonialText
                key={`testimonial-${activeIndex}`} 
                text={activeTestimonial.quote}
              />
              
              <div className="mt-8 border-t border-border/50 pt-12 max-w-sm">
                <p className="font-code text-foreground text-2xl tracking-tighter font-medium">// {activeTestimonial.name}</p>
                <p className="font-code text-muted-foreground text-xs uppercase tracking-[0.3em] mt-2">{activeTestimonial.company}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              {testimonials.map((testimonial, index) => {
                const imageData = PlaceHolderImages.find((img) => img.id === testimonial.id);
                const isActive = activeIndex === index;
                
                return (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "relative w-20 h-20 rounded-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ring-offset-4 ring-offset-background group",
                      isActive ? 'ring-2 ring-accent scale-110' : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-105'
                    )}
                  >
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={`Avatar of ${testimonial.name}`}
                        fill
                        data-ai-hint={imageData.imageHint}
                        className={cn(
                          "object-cover transition-all duration-500",
                          isActive ? 'grayscale-0' : 'grayscale'
                        )}
                      />
                    )}
                    {isActive && (
                      <div className="absolute inset-0 ring-2 ring-accent rounded-full animate-ping opacity-20 pointer-events-none" />
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