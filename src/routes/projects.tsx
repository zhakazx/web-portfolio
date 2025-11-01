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
      <div className="max-w-6xl mx-auto px-6 py-12">
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

        {/* Projects List */}
        <div className="space-y-12">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="aspect-video lg:aspect-square bg-gray-100 flex items-center justify-center order-2 lg:order-1">
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
                <div className="p-8 flex flex-col justify-center order-1 lg:order-2">
                  <h2 className="text-2xl font-bold text-black mb-4">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.isPrivate ? (
                      <div className="space-y-2">
                        <button
                          disabled
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 rounded-md cursor-not-allowed"
                        >
                          <Lock className="w-4 h-4" />
                          Private Project
                        </button>
                        <p className="text-xs text-gray-500">
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
                            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
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
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
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