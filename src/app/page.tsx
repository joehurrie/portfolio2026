import { Header } from "@/components/common/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Projects } from "@/components/landing/projects";
import { Testimonials } from "@/components/landing/testimonials";
import { Intro } from "@/components/landing/intro";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="relative z-10 bg-background pb-[15vh]">
        <Hero />
        <Intro />
        <Services />
        <Projects />
        <Testimonials />
      </main>
    </div>
  );
}
