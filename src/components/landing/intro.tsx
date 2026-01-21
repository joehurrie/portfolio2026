import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { AnimatedIntroText } from './animated-intro-text';

export function Intro() {
    return (
        <section className="bg-background text-foreground h-screen px-6 md:px-12 relative flex flex-col justify-center">
            <div className="sticky top-0 z-40 h-0">
                <div className="absolute top-8 left-6 md:left-12 text-accent text-base md:text-lg font-code tracking-wide">
                    // Intro
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto">
                <div className="mt-20 flex flex-col gap-24">
                    <div className="reveal-on-scroll">
                        <AnimatedIntroText />
                    </div>

                    <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <div className="w-full flex justify-end">
                            <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl leading-relaxed text-right font-light">
                                Bringing your vision to life quickly and efficiently—whether it's branding, apps, or websites—I've got it covered, delivering smooth and effective solutions from start to finish.
                            </p>
                        </div>
                    </div>

                    <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <div className="flex justify-center mt-12">
                             <Button asChild size="lg" variant="outline" className="rounded-full group text-lg md:text-xl py-7 px-10">
                                <Link href="#projects" className="flex items-center gap-3">
                                    See my Work
                                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
