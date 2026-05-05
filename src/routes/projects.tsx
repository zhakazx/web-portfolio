import { useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink, Github, Lock } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import projectsData from '@/data/projects.json'

function ProjectCardImage({ project }: { project: Project }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="flex items-center justify-center w-full h-full text-muted-foreground">
        <div className="text-center">
          <div className="size-16 bg-muted rounded-lg mx-auto mb-2" />
          <p className="text-sm">{project.title}</p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
      onError={() => setHasError(true)}
    />
  )
}

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  const allProjects: Array<Project> = projectsData.all

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            All Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive collection of my work in web development, from
            enterprise applications to educational platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Project Image */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <ProjectCardImage project={project} />
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-card-foreground mb-3">
                  {project.title}
                </h2>

                <p className="text-foreground/80 mb-4 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="mb-4 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-foreground/80 text-xs rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-foreground/80 text-xs rounded-md border border-border">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 mt-auto">
                  {project.isPrivate ? (
                    <div>
                      <button
                        disabled
                        className={cn(
                          'w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm',
                          'bg-muted text-muted-foreground cursor-not-allowed'
                        )}
                        aria-label="Private project"
                      >
                        <Lock className="size-4" />
                        Private Project
                      </button>
                      <p className="text-xs text-muted-foreground mt-1 text-center">
                        Code confidential due to NDA
                      </p>
                    </div>
                  ) : (
                    <>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-foreground text-primary-foreground rounded-md hover:bg-foreground/90 transition-colors text-sm"
                        >
                          <ExternalLink className="size-4" />
                          Live Preview
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 border border-border text-foreground rounded-md hover:bg-muted transition-colors text-sm"
                        >
                          <Github className="size-4" />
                          Code
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Zhaka Hidayat Yasir. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}
