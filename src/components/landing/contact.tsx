import { ContactForm } from './contact-form';

export function Contact() {
  return (
    <section id="contact" className="bg-card text-card-foreground py-32 md:py-48 px-6 md:px-12 relative z-30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16">
            <div className="reveal-on-scroll">
                 <h2 className="text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-card-foreground">
                    Reach Out
                </h2>
            </div>
            <div className="reveal-on-scroll" style={{transitionDelay: '100ms'}}>
                <div className="max-w-md">
                    <h3 className="text-2xl md:text-3xl leading-snug mb-12">
                        Tell me about your idea.
                        <br />
                        I&apos;ll take it from there.
                    </h3>
                    <ContactForm />
                </div>
            </div>
        </div>

         <div className="mt-48 text-center text-muted-foreground/50 text-sm md:text-base font-code">
            &copy; {new Date().getFullYear()} Joharie Kisiangani. All Rights Reserved.
        </div>
      </div>
    </section>
  );
}
