import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

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
    <section id="contact" className="py-6">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4">
          Get In Touch
        </h2>
        <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology and development.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4">
        {contactLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border p-4 lg:p-6 text-center transition-all hover:border-foreground"
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
          )
        })}
      </div>
    </section>
  )
}
