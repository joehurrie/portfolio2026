"use client";

import { useState, useEffect, useRef } from 'react';
import { AnimatedCounter } from '@/components/common/animated-counter';

const statsData = [
  {
    number: 20,
    title: 'Completed Projects',
    description: 'A proven history of delivering impactful design solutions across a wide spectrum of industries and sectors. From startups to established brands, each project has added depth and adaptability to my skillset, ensuring technical feasibility meets design intent.',
  },
  {
    number: 5,
    title: 'Years of Experience',
    description: 'Years of demonstrated success and commitment to creating impactful solutions that drive measurable results in the field of UX Engineering and design systems. My focus remains on bridging the gap between aesthetics and scale.',
  },
  {
    number: 7,
    title: 'Awards & Honors',
    description: 'Recognition for excellence with awards and honors celebrating outstanding achievements in technical design. My work has been featured in leading industry publications, highlighting the intersection of clean code and minimalist interfaces.',
  },
];

export function AboutExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="bg-background text-foreground py-24 md:py-32 border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          
          {/* Left Column: Sticky Counter */}
          <div className="hidden md:block md:col-span-5 relative">
            <div className="sticky top-1/3 self-start flex justify-center lg:justify-start">
              <div className="relative">
                <div className="text-accent text-9xl lg:text-[12rem] xl:text-[15rem] font-bold leading-none tracking-tighter">
                    <AnimatedCounter end={statsData[activeIndex].number} />
                </div>
                <span className="absolute -top-4 -right-6 text-accent text-4xl lg:text-5xl font-bold font-code">+</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content Sections */}
          <div className="md:col-span-7 flex flex-col">
            {statsData.map((stat, index) => (
              <div
                key={stat.title}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-index={index}
                className="mb-32 md:mb-56 last:mb-0 reveal-on-scroll"
              >
                <div className="md:hidden mb-6">
                   <div className="inline-block relative">
                        <div className="text-accent text-7xl font-bold leading-none tracking-tighter">
                            <AnimatedCounter end={stat.number} />
                        </div>
                        <span className="absolute -top-2 -right-5 text-accent text-2xl font-bold font-code">+</span>
                   </div>
                </div>

                <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-6 text-foreground">
                  {stat.title}
                </h3>
                
                <div className="w-full h-px bg-border/50 mb-10" />
                
                <p className="text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed max-w-xl font-light">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}