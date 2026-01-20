import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    title: 'Branding & Marketing',
    description: 'Branding that builds trust and drives loyalty through clear visuals and messaging, transforming your business into an unforgettable online experience.',
    items: ['Brand Strategy and Messaging', 'Logo Design', 'Visual Identity', 'Brand Guidelines', 'Motion Design'],
  },
  {
    title: 'Website Design',
    description: 'Developing logical, scalable design systems that are precisely tailored to web and app applications.',
    items: ['Landing Pages', 'Corporate Websites', 'Blogs', 'E-commerce', 'Complex Websites'],
  },
  {
    title: 'Web Development',
    description: 'User-focused development that brings designs to life with clean, efficient code.',
    items: ['Framer, Webflow, or WordPress Builds', 'CMS Integration', 'SEO Optimization', 'Site Migrations'],
  },
  {
    title: 'Application Design',
    description: 'User-focused app design that maximizes usability and encourages retention.',
    items: ['Mobile Apps', 'Desktop Apps', 'Complex Systems', 'Design Systems Optimization'],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-card text-card-foreground py-32 md:py-48 px-6 md:px-12 relative">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-accent text-base md:text-lg font-code tracking-wide mb-24 reveal-on-scroll">
          // Services
        </div>

        {servicesData.map((service, index) => (
          <div key={service.title} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 mb-32 last:mb-0">
            <div className="lg:col-span-4 relative select-none lg:sticky lg:top-32 self-start">
                <div className="text-outline opacity-20 lg:opacity-100 lg:absolute lg:-top-32 lg:left-0 mix-blend-screen text-[18rem] md:text-[24rem] font-sans font-medium leading-none tracking-tighter">
                  {String(index + 1).padStart(2, '0')}
                </div>
            </div>

            <div className="lg:col-span-8 flex flex-col pt-8">
              <div className="reveal-on-scroll">
                <h3 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
                  {service.title}
                </h3>
              </div>
              <div className="reveal-on-scroll" style={{transitionDelay: '100ms'}}>
                <p className="text-muted-foreground text-xl md:text-2xl mb-24 max-w-2xl leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
              
              <div className="w-full flex flex-col gap-2">
                {service.items.map((item, itemIndex) => (
                  <div key={item} className="reveal-on-scroll" style={{transitionDelay: `${100 + itemIndex * 75}ms`}}>
                    <div className="group flex justify-between items-baseline py-10 border-b border-border/50 cursor-pointer hover:border-muted-foreground transition-colors">
                      <span className="text-2xl md:text-4xl font-normal text-muted-foreground group-hover:text-card-foreground group-hover:translate-x-4 transition-all duration-300">{item}</span>
                      <div className="flex items-center gap-4">
                        <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent h-8 w-8" />
                        <span className="text-base font-code text-muted-foreground/60 group-hover:text-accent">{String(itemIndex + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
