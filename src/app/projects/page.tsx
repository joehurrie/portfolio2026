
import { Header } from "@/components/common/header";
import { HorizontalProjects } from "@/components/projects/horizontal-projects";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-32 pb-12 md:pt-40">
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none reveal-on-scroll">
            Work Index
          </h1>
        </div>
        <HorizontalProjects />
      </main>
    </div>
  );
}
