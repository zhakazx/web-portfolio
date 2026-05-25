import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animations'

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:zhakazx@gmail.com',
    icon: Mail,
    description: 'zhakazx@gmail.com',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/zhakazx',
    icon: Linkedin,
    description: 'Connect professionally',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/zhakazx',
    icon: Github,
    description: 'View my repositories',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/zhakazx',
    icon: Twitter,
    description: 'Follow for updates',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-2">
      <AnimatedSection>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>
        </div>
      </AnimatedSection>

      <StaggerContainer
        className="grid grid-cols-2 lg:grid-cols-4"
        staggerDelay={0.1}
        delayChildren={0.2}
      >
        {contactLinks.map((link) => {
          const Icon = link.icon
          return (
            <StaggerItem key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border p-4 lg:p-6 text-center transition-all hover:border-foreground block h-full"
                aria-label={`${link.label}: ${link.description}`}
              >
                <div className="flex justify-center mb-3 lg:mb-4">
                  <div className="p-2 lg:p-3 bg-muted rounded-lg group-hover:bg-foreground group-hover:text-primary-foreground transition-colors">
                    <Icon className="size-5 lg:size-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-card-foreground mb-1 lg:mb-2 text-sm lg:text-base">
                  {link.label}
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground leading-tight">
                  {link.description}
                </p>
              </a>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </section>
  )
}
