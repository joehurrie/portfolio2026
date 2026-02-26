import { Header } from "@/components/common/header";
import { HorizontalProjects } from "@/components/projects/horizontal-projects";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HorizontalProjects />
      </main>
    </div>
  );
}
