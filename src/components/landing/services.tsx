import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimationWrapper } from '../common/scroll-animation-wrapper';
import { Megaphone, Globe, Code, AppWindow } from 'lucide-react';

const servicesData = [
  {
    icon: Megaphone,
    title: 'Branding & Marketing',
    description: 'Branding that builds trust and drives loyalty through clear visuals and messaging.',
    items: ['Brand Strategy & Messaging', 'Logo Design', 'Visual Identity', 'Brand Guidelines & Frameworks', 'Marketing materials', 'Motion Design'],
  },
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Developing logical, scalable design systems that are precisely tailored to web and app applications.',
    items: ['Landing Pages', 'Corporate Websites', 'Blogs', 'E-commerce', 'Complex Websites'],
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'User-focused development that brings designs to life with clean, efficient code.',
    items: ['Framer, Webflow, or WordPress Builds', 'CMS Integration', 'SEO Optimization', 'Site Migrations'],
  },
  {
    icon: AppWindow,
    title: 'Application Design',
    description: 'User-focused app design that maximizes usability and encourages retention.',
    items: ['Mobile Apps', 'Desktop Apps', 'Complex Systems', 'Design Systems Optimization'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">My Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">Crafting experiences from concept to code.</p>
          </div>
        </ScrollAnimationWrapper>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <ScrollAnimationWrapper key={service.title} delay={index * 150}>
              <Card className="h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-medium border hover:border-gray-800">
                <div className="absolute -top-8 -left-4 font-headline font-black text-[12rem] text-primary/5 -z-0 select-none leading-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <CardHeader className="flex flex-row items-center gap-4 z-10">
                  <service.icon className="h-8 w-8 text-accent" />
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col z-10">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm mt-auto border-t pt-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start justify-between">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
