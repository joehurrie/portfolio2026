import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AnimatedIntroText } from './animated-intro-text';

/**
 * Intro section with high-fidelity theme inversion logic.
 * Dark Mode: White block with Charcoal text.
 * Light Mode: Charcoal block with White text.
 */
export function Intro() {
    return (
        <section className="bg-foreground text-background min-h-screen relative flex flex-col justify-center py-24 md:py-32 transition-colors duration-700">
            <div className="sticky top-0 z-40 h-0 w-full pointer-events-none">
                <div className="absolute top-8 left-6 md:left-12 text-accent text-[10px] md:text-xs font-code tracking-widest uppercase">
                    // Intro
                </div>
            </div>
            <div className="w-full px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="mt-20 flex flex-col gap-12 md:gap-20">
                        <div className="reveal-on-scroll">
                            <AnimatedIntroText />
                        </div>

                        <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                            <div className="w-full flex justify-start md:justify-end">
                                <p className="text-background/80 text-lg md:text-2xl max-w-2xl leading-relaxed text-left md:text-right font-light transition-colors duration-700">
                                    Bringing your vision to life quickly and efficiently—whether it's branding, apps, or websites—I've got it covered, delivering smooth and effective solutions from start to finish.
                                </p>
                            </div>
                        </div>

                        <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                            <div className="flex justify-center mt-12">
                                <Link href="#projects" className="cta-gradient-btn group">
                                    <span className="flex items-center gap-3">
                                        See my Work
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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