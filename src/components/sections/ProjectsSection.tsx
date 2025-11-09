import { ExternalLink, Github, Lock } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import projectsData from '@/data/projects.json'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  isPrivate: boolean
  liveUrl: string | null
  codeUrl: string | null
}

export default function ProjectsSection() {
  const featuredProjects: Project[] = projectsData.featured

  return (
    <section id="projects" className="py-6">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-4">
          Featured Projects
        </h2>
        <p className="text-base lg:text-lg text-gray-600">
          A selection of my recent work and contributions
        </p>
      </div>

      <div className="space-y-12 lg:space-y-16">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`grid lg:grid-cols-2 gap-6 lg:gap-8 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            {/* Project Image */}
            <div
              className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} order-1 lg:order-none`}
            >
              <div className="aspect-video bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex items-center justify-center w-full h-full text-gray-400">
                          <div class="text-center">
                            <div class="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                            <p class="text-sm">${project.title}</p>
                          </div>
                        </div>
                      `
                    }
                  }}
                />
              </div>
            </div>

            {/* Project Details */}
            <div
              className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} order-2 lg:order-none`}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-black mb-4">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm lg:text-base">
                {project.description}
              </p>

              {/* Technology Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 lg:px-3 py-1 bg-gray-100 text-gray-700 text-xs lg:text-sm border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {project.isPrivate ? (
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 cursor-not-allowed text-sm lg:text-base"
                  >
                    <Lock className="w-4 h-4" />
                    Private Project
                  </button>
                ) : (
                  <>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 border-2 shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] bg-white text-black transition-all text-sm lg:text-base"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Preview
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black shadow-[4px_4px_0_#9ca3af] hover:shadow-[2px_2px_0_#9ca3af] bg-black text-white transition-all text-sm lg:text-base"
                      >
                        <Github className="w-4 h-4" />
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

      {/* View All Projects Link */}
      <div className="text-center mt-12 lg:mt-16">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] bg-white text-black transition-all text-sm lg:text-base"
        >
          View All Projects
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
