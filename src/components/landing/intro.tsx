import { ArrowRight } from 'lucide-react';
import { ScrollAnimationWrapper } from '../common/scroll-animation-wrapper';
import Link from 'next/link';
import { Button } from '../ui/button';

export function Intro() {
    return (
        <section className="bg-card text-card-foreground py-32 md:py-48 px-6 md:px-12 relative z-30 -mt-12 rounded-t-[3rem] md:rounded-t-[4rem]">
            <div className="max-w-[1400px] mx-auto">
                <div className="absolute top-16 left-6 md:left-12 text-accent text-base md:text-lg font-code tracking-wide">
                    // Intro
                </div>

                <div className="mt-20 flex flex-col gap-24">
                    <ScrollAnimationWrapper>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline leading-[1.05] tracking-tight text-center max-w-7xl mx-auto">
                            I&apos;m a versatile <span className="text-accent">designer who<br />partners with founders</span> to turn ideas into<br />real <span className="text-accent">products.</span> I focus on clear interfaces,<br />sharp decisions, and fast execution.
                        </h2>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper delay={100}>
                        <div className="w-full flex justify-end">
                            <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl leading-relaxed text-right font-light">
                                Bringing your vision to life quickly and efficiently—whether it&apos;s branding, apps, or websites—I&apos;ve got it covered, delivering smooth and effective solutions from start to finish.
                            </p>
                        </div>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper delay={200}>
                        <div className="flex justify-center mt-12">
                             <Button asChild size="lg" variant="outline" className="rounded-full border-muted-foreground/50 hover:bg-background hover:text-foreground hover:border-background transition-all duration-300 group text-lg md:text-xl py-7 px-10">
                                <Link href="#projects" className="flex items-center gap-3">
                                    See my Work
                                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </section>
    );
}
