import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink, Github, Lock } from 'lucide-react'
import projectsData from '../data/projects.json'

export const Route = createFileRoute('/projects')({ component: ProjectsPage })

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

function ProjectsPage() {
  const allProjects: Project[] = projectsData.all

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            All Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A comprehensive collection of my work in web development, 
            from enterprise applications to educational platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
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

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-black mb-3">
                  {project.title}
                </h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="mb-4 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border">
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
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 rounded-md cursor-not-allowed text-sm"
                      >
                        <Lock className="w-4 h-4" />
                        Private Project
                      </button>
                      <p className="text-xs text-gray-500 mt-1 text-center">
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
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm"
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
                          className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm"
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

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2025 Zhaka Hidayat Yasir. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}