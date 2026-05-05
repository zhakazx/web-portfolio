export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: Array<string>
  isPrivate: boolean
  liveUrl: string | null
  codeUrl: string | null
}

export interface ProjectsData {
  featured: Array<Project>
  all: Array<Project>
}
