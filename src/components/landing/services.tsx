
"use client";

import { AnimatedCounter } from '@/components/common/animated-counter';
import { useState, useEffect, useRef } from 'react';

const servicesData = [
  {
    title: 'Branding & Marketing',
    description: 'Branding that builds trust and drives loyalty through clear visuals and messaging, transforming your business into an unforgettable online experience.',
    items: ['Brand Strategy and Messaging', 'Logo Design', 'Visual Identity', 'Brand Guidelines & Frameworks', 'Marketing Materials', 'Motion Design'],
  },
  {
    title: 'Website Design',
    description: 'Developing logical, scalable design systems that are precisely tailored to web and app applications.',
    items: ['Landing Pages', 'Corporate Websites', 'Blogs', 'E-commerce', 'Complex Websites'],
  },
  {
    title: 'Web Development',
    description: 'User-focused development that brings designs to life with clean, efficient code.',
    items: ['Framer, Webflow, or WordPress Builds', 'CMS Integration', 'SEO Optimization', 'Site Migrations'],
  },
  {
    title: 'Application Design',
    description: 'User-focused app design that maximizes usability and encourages retention.',
    items: ['Mobile Apps', 'Desktop Apps', 'Complex Systems', 'Design Systems Optimization'],
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    const refs = serviceRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="services" className="bg-background text-foreground relative py-24 md:py-32">
      <div className="sticky top-0 z-40 h-0">
        <div className="absolute top-8 left-6 md:left-12 text-accent text-xs md:text-sm font-code tracking-wide">
          // Services
        </div>
      </div>
      <div className="w-full px-6 md:px-12">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pt-16">
                <div className="hidden lg:block lg:col-span-5 relative select-none lg:sticky lg:top-32 self-start">
                    <div className="flex items-center justify-center lg:justify-start">
                        <AnimatedCounter
                            end={activeIndex + 1}
                            className="text-accent text-8xl md:text-[10rem] xl:text-[12rem] font-sans font-bold leading-none tracking-tighter"
                        />
                    </div>
                </div>

                <div className="md:col-span-12 lg:col-span-7 flex flex-col">
                    {servicesData.map((service, index) => (
                    <div
                        key={service.title}
                        ref={(el) => (serviceRefs.current[index] = el)}
                        data-index={index}
                        className="mb-24 md:mb-32 last:mb-0 reveal-on-scroll"
                    >
                            <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 hover:text-accent transition-colors cursor-default">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl leading-relaxed font-light">
                                {service.description}
                            </p>
                            
                            <div className="w-full flex flex-col border-t border-border/50">
                            {service.items.map((item, itemIndex) => (
                                <div key={item} className="group flex justify-between items-baseline py-4 md:py-5 border-b border-border/50 cursor-default">
                                    <span className="text-base md:text-lg font-normal text-neutral-500 group-hover:text-accent transition-colors">{item}</span>
                                    <span className="text-xs md:text-sm font-code text-neutral-500 group-hover:text-accent transition-colors font-bold">{String(itemIndex + 1).padStart(2, '0')}</span>
                                </div>
                            ))}
                            </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
