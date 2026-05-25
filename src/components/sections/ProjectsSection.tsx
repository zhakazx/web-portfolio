import { useState } from 'react'
import { ExternalLink, Github, Lock } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import projectsData from '@/data/projects.json'
import { AnimatedSection, StaggerContainer, StaggerItem, FadeIn } from '@/components/animations'

function ProjectImage({ project }: { project: Project }) {
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
      className="w-full h-full object-cover rounded-lg"
      onError={() => setHasError(true)}
    />
  )
}

export default function ProjectsSection() {
  const featuredProjects: Array<Project> = projectsData.featured

  return (
    <section id="projects" className="py-2">
      <AnimatedSection>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-base text-muted-foreground">
            A selection of my recent work and contributions
          </p>
        </div>
      </AnimatedSection>

      <div className="space-y-12">
        <StaggerContainer staggerDelay={0.25} delayChildren={0.1}>
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1

            return (
              <StaggerItem key={project.id}>
                <div
                  className={cn(
                    'grid lg:grid-cols-2 gap-6 items-center',
                    isReversed && 'lg:grid-flow-col-dense'
                  )}
                >
                  {/* Project Image */}
                  <FadeIn
                    direction={isReversed ? 'left' : 'right'}
                    delay={0.1}
                    className={cn(
                      'order-1 lg:order-none',
                      isReversed && 'lg:col-start-2'
                    )}
                  >
                    <div className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center overflow-hidden">
                      <ProjectImage project={project} />
                    </div>
                  </FadeIn>

                  {/* Project Details */}
                  <div
                    className={cn(
                      'order-2 lg:order-none',
                      isReversed && 'lg:col-start-1'
                    )}
                  >
                    <StaggerContainer staggerDelay={0.1} delayChildren={0.2}>
                      <StaggerItem>
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                          {project.title}
                        </h3>
                      </StaggerItem>

                      <StaggerItem>
                        <p className="text-foreground/80 mb-6 leading-relaxed text-sm lg:text-base">
                          {project.description}
                        </p>
                      </StaggerItem>

                      {/* Technology Stack */}
                      <StaggerItem>
                        <div className="mb-6">
                          <StaggerContainer
                            className="flex flex-wrap gap-2"
                            staggerDelay={0.05}
                            delayChildren={0.1}
                          >
                            {project.technologies.map((tech) => (
                              <StaggerItem key={tech}>
                                <span className="px-2 lg:px-3 py-1 bg-muted text-foreground/80 text-xs lg:text-sm border-border">
                                  {tech}
                                </span>
                              </StaggerItem>
                            ))}
                          </StaggerContainer>
                        </div>
                      </StaggerItem>

                      {/* Action Buttons */}
                      <StaggerItem>
                        <div className="flex flex-col sm:flex-row gap-3 mb-2">
                          {project.isPrivate ? (
                            <button
                              disabled
                              className="flex items-center justify-center gap-2 px-4 py-2 bg-muted text-muted-foreground cursor-not-allowed text-sm lg:text-base"
                              aria-label="Private project"
                            >
                              <Lock className="size-4" />
                              Private Project
                            </button>
                          ) : (
                            <>
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] bg-background text-foreground transition-all text-sm lg:text-base"
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
                                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-foreground shadow-[4px_4px_0_#9ca3af] hover:shadow-[2px_2px_0_#9ca3af] bg-foreground text-primary-foreground transition-all text-sm lg:text-base"
                                >
                                  <Github className="size-4" />
                                  Code
                                </a>
                              )}
                            </>
                          )}
                        </div>
                      </StaggerItem>
                    </StaggerContainer>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>

      {/* View All Projects Link */}
      <FadeIn delay={0.3} className="text-center mt-12 lg:mt-16">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] bg-background text-foreground transition-all text-sm lg:text-base"
        >
          View All Projects
          <ExternalLink className="size-4" />
        </Link>
      </FadeIn>
    </section>
  )
}
