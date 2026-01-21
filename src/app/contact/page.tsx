import { Header } from "@/components/common/header";
import { ContactForm } from '@/components/landing/contact-form';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card text-card-foreground">
      <Header />
      <main className="flex-grow flex items-center relative z-10 bg-card pb-[15vh]">
        <section className="w-full py-20 md:py-32 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <h2 className="text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-card-foreground">
                        Reach Out
                    </h2>
                </div>
                <div>
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
             <div className="mt-32 text-center text-muted-foreground/50 text-sm md:text-base font-code">
                &copy; {new Date().getFullYear()} Joharie Kisiangani. All Rights Reserved.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
