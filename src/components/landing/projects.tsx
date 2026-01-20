import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 'project-1',
    title: 'Ngazi Design System',
    description: 'Led the development of a comprehensive design system, improving product consistency and development efficiency across the company.',
    tags: ['UX/UI', 'Design System', 'React'],
  },
  {
    id: 'project-2',
    title: 'E-commerce Platform Revamp',
    description: 'Redesigned a major e-commerce website, resulting in a 30% increase in user engagement and a more intuitive shopping experience.',
    tags: ['Web Design', 'E-commerce', 'Figma'],
  },
  {
    id: 'project-3',
    title: 'Mobile Banking App',
    description: 'Designed and co-developed a mobile banking application focused on accessibility and ease of use for a diverse user base.',
    tags: ['App Design', 'Fintech', 'React Native'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">A glimpse into my work on intuitive digital products.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const imageData = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <div key={project.id} className="reveal-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
                <Card className="h-full overflow-hidden group bg-card text-card-foreground">
                  <div className="aspect-video overflow-hidden">
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={imageData.description}
                        width={600}
                        height={400}
                        data-ai-hint={imageData.imageHint}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-medium">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
