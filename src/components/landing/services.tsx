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
        <div className="absolute top-8 left-6 md:left-12 text-accent text-base md:text-lg font-code tracking-wide">
          // Services
        </div>
      </div>
      <div className="w-full px-6 md:px-12">
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pt-24">
                <div className="hidden lg:block lg:col-span-5 relative select-none lg:sticky lg:top-32 self-start">
                    <div className="flex items-center justify-center lg:justify-start">
                        <AnimatedCounter
                            end={activeIndex + 1}
                            className="text-outline text-[16rem] font-sans font-medium leading-none tracking-tighter"
                        />
                    </div>
                </div>

                <div className="lg:col-span-7 flex flex-col">
                    {servicesData.map((service, index) => (
                    <div
                        key={service.title}
                        ref={(el) => (serviceRefs.current[index] = el)}
                        data-index={index}
                        className="service-section mb-48 last:mb-0"
                    >
                        <div className="reveal-on-scroll">
                        <h3 className="text-5xl font-medium tracking-tight mb-6">
                            {service.title}
                        </h3>
                        </div>
                        <div className="reveal-on-scroll" style={{transitionDelay: '100ms'}}>
                        <p className="text-muted-foreground text-xl mb-12 max-w-2xl leading-relaxed font-light">
                            {service.description}
                        </p>
                        </div>
                        
                        <div className="w-full flex flex-col border-t border-border/50">
                        {service.items.map((item, itemIndex) => (
                            <div key={item} className="reveal-on-scroll" style={{transitionDelay: `${100 + itemIndex * 75}ms`}}>
                            <div className="flex justify-between items-baseline py-6 border-b border-border/50">
                                <span className="text-xl font-normal text-foreground">{item}</span>
                                <span className="text-base font-code text-muted-foreground/60">{String(itemIndex + 1).padStart(2, '0')}</span>
                            </div>
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
