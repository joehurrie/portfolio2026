import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Projects } from "@/components/landing/projects";
import { Testimonials } from "@/components/landing/testimonials";
import { About } from "@/components/landing/about";
import { Contact } from "@/components/landing/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
