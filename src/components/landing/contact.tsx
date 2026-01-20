import { ContactForm } from './contact-form';
import { ScrollAnimationWrapper } from '../common/scroll-animation-wrapper';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const contactDetails = [
    { icon: Mail, text: 'joharie.kisiangani@email.com', href: 'mailto:joharie.kisiangani@email.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Linkedin, text: 'linkedin.com/in/joharie', href: '#' },
    { icon: Github, text: 'github.com/joharie', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s Connect</h2>
            <p className="mt-4 text-lg text-muted-foreground">Have a project in mind or just want to say hello? I&apos;d love to hear from you.</p>
          </div>
        </ScrollAnimationWrapper>
        
        <div className="mt-16 grid max-w-4xl mx-auto gap-12 md:grid-cols-2">
          <ScrollAnimationWrapper delay={100}>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <ul className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <detail.icon className="h-5 w-5 text-accent" />
                    <Link href={detail.href} className="text-muted-foreground hover:text-foreground transition-colors break-all">
                      {detail.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
