import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { AnimatedIntroText } from './animated-intro-text';

export function Intro() {
    return (
        <section className="bg-background text-foreground min-h-screen relative flex flex-col justify-center py-24 md:py-32">
            <div className="sticky top-0 z-40 h-0">
                <div className="absolute top-8 left-6 md:left-12 text-accent text-xs md:text-sm font-code tracking-wide">
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
                                <p className="text-foreground text-lg md:text-2xl max-w-2xl leading-relaxed text-left md:text-right font-light">
                                    Bringing your vision to life quickly and efficiently—whether it's branding, apps, or websites—I've got it covered, delivering smooth and effective solutions from start to finish.
                                </p>
                            </div>
                        </div>

                        <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                            <div className="flex justify-start md:justify-center mt-8">
                                <Button asChild size="lg" variant="outline" className="rounded-full group text-base md:text-lg py-6 px-10 border-foreground text-foreground hover:bg-foreground hover:text-background">
                                    <Link href="#projects" className="flex items-center gap-3">
                                        See my Work
                                        <ArrowRight className="h-5 w-5 text-neutral-400 group-hover:text-background transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}