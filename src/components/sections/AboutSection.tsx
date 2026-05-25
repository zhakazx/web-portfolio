import { Briefcase, Download, Github, Globe, Mail, MapPin } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { FaXTwitter } from 'react-icons/fa6'

export default function AboutSection() {
  return (
    <section id="about" className="pt-8">
      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src="/zhaka.jpg"
          alt="Zhaka Hidayat Yasir"
          className="size-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Zhaka Hidayat Yasir
          </h1>
          <p className="text-muted-foreground">Fullstack Developer</p>
        </div>
      </div>

      {/* Location / Email / Pronouns */}
      <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Location</p>
          <p className="flex items-center gap-1.5 text-sm text-foreground">
            <MapPin className="size-3.5" />
            Makassar, Indonesia
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</p>
          <p className="flex items-center gap-1.5 text-sm text-foreground">
            <Mail className="size-3.5" />
            zhakazx@gmail.com
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Pronouns</p>
          <p className="text-sm text-foreground">he/him</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-foreground/80 leading-relaxed mb-8">
        I build full-stack web products end-to-end, obsessing over small details
        that make software feel right to use. Currently working with{' '}
        <strong>TypeScript</strong>, <strong>React</strong>,{' '}
        <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 border-2 shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] bg-background text-foreground transition-all"
        >
          <Download className="size-4" />
          <span className="text-sm">Download CV</span>
        </a>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground shadow-[4px_4px_0_#9ca3af] hover:shadow-[2px_2px_0_#9ca3af] bg-foreground text-primary-foreground transition-all"
        >
          <Briefcase className="size-4" />
          <span className="text-sm">View All Projects</span>
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <a
          href="https://twitter.com/zhakazx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Twitter/X"
        >
          <FaXTwitter className="size-5" />
        </a>
        <a
          href="https://github.com/zhakazx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="size-5" />
        </a>
        <a
          href="https://zhakazx.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Website"
        >
          <Globe className="size-5" />
        </a>
        <a
          href="mailto:zhakazx@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Email"
        >
          <Mail className="size-5" />
        </a>
      </div>
    </section>
  )
}
