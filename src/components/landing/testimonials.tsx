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
    <section id="testimonials" className="bg-background text-foreground py-32 md:py-48 md:min-h-screen flex flex-col md:justify-center relative overflow-hidden">
      <div className="absolute top-8 left-6 md:left-12 text-accent text-base md:text-lg font-code tracking-wide z-10">
        // Testimonials
      </div>
      
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Mobile: list view */}
        <div className="flex flex-col gap-16 md:hidden">
            {reversedTestimonials.map((testimonial, index) => (
                <div key={testimonial.id}>
                    <div className="font-code text-accent mb-4">
                        {String(testimonials.length - index).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                    </div>
                    <AnimatedTestimonialText text={testimonial.quote} />
                    <div className="mt-4">
                        <p className="font-code text-foreground text-lg">// {testimonial.name}</p>
                        <p className="font-code text-muted-foreground">{testimonial.company}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Desktop: single view */}
        <div className="hidden md:flex flex-col gap-8">
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
      </div>

      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex-col gap-4 z-20 hidden md:flex">
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
    </section>
  );
}
