import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AnimatedIntroText } from './animated-intro-text';

/**
 * Intro section with high-fidelity theme inversion logic.
 * Standardized spacing for cinematic flow.
 */
export function Intro() {
    return (
        <section className="bg-foreground text-background min-h-screen relative flex flex-col justify-center py-24 md:py-32 lg:py-48 transition-colors duration-700">
            <div className="sticky top-0 z-40 h-0 w-full pointer-events-none">
                <div className="absolute top-8 left-6 md:left-12 text-accent text-[10px] md:text-xs font-code tracking-[0.3em] uppercase">
                    // Intro
                </div>
            </div>
            <div className="w-full px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mt-20 flex flex-col gap-24 md:gap-32">
                        <div className="reveal-on-scroll">
                            <AnimatedIntroText />
                        </div>

                        <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                            <div className="w-full flex justify-start md:justify-end">
                                <p className="text-background/80 text-xl md:text-3xl lg:text-4xl max-w-3xl leading-relaxed text-left md:text-right font-light transition-colors duration-700">
                                    Bringing your vision to life quickly and efficiently, whether it's branding, apps, or websites—I've got it covered, delivering effective solutions that scale your operations.
                                </p>
                            </div>
                        </div>

                        <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                            <div className="flex justify-center mt-12 md:mt-24">
                                <Link href="#projects" className="cta-gradient-btn group">
                                    <span className="flex items-center gap-3">
                                        My Work
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}