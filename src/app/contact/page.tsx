import { Header } from "@/components/common/header";
import { ContactForm } from '@/components/landing/contact-form';
import { Footer } from "@/components/common/footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card text-card-foreground">
      <Header />
      <main className="flex-grow flex items-center relative z-10 bg-card pb-[10vh]">
        <section className="w-full py-24 md:py-32 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                <div>
                     <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-card-foreground leading-none">
                        Reach Out
                    </h2>
                </div>
                <div className="pt-4">
                    <div className="max-w-md">
                        <h3 className="text-xl md:text-2xl lg:text-3xl leading-snug mb-12 font-light">
                            Tell me about your idea.
                            <br />
                            I&apos;ll take it from there.
                        </h3>
                        <ContactForm />
                    </div>
                </div>
            </div>
             <div className="mt-32 text-center text-muted-foreground/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-code">
                &copy; {new Date().getFullYear()} Joharie Kisiangani. All Rights Reserved.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}