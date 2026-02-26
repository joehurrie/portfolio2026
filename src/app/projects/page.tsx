import { Header } from "@/components/common/header";
import { HorizontalProjects } from "@/components/projects/horizontal-projects";
import { AboutExperience } from "@/components/about/experience";
import { Footer } from "@/components/common/footer";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Horizontal Projects Section (Sticky) */}
        <HorizontalProjects />
        
        {/* Awards/Experience Section (Normal Vertical Scroll) */}
        <div className="relative z-10 bg-background">
          <AboutExperience />
        </div>
      </main>
      
      {/* Global Footer (Large Portrait Reveal) */}
      <Footer />
    </div>
  );
}
