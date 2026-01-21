import { Header } from "@/components/common/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Projects } from "@/components/landing/projects";
import { Testimonials } from "@/components/landing/testimonials";
import { About } from "@/components/landing/about";
import { Contact } from "@/components/landing/contact";
import { Intro } from "@/components/landing/intro";
import { ClientTicker } from "@/components/landing/client-ticker";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Intro />
        <ClientTicker />
        <Services />
        <Projects />
        <Testimonials />
        <About />
        <Contact />
      </main>
    </div>
  );
}
