import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import AboutSection from '@/components/sections/AboutSection'
import GitHubSection from '@/components/sections/GitHubSection'
import SkillsSection from '@/components/sections/SkillsSection'
import AchievementsSection from '@/components/sections/AchievementsSection'
// import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
// import Separator from '@/components/Separator'
import Footer from '@/components/Footer'
// import LoadingScreen from '@/components/LoadingScreen'

const SECTIONS = [
  'about',
  'github',
  'skills',
  'achievements',
  'projects',
  'contact',
] as const

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const sectionId of SECTIONS) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* <LoadingScreen /> */}
      <div className="min-h-screen bg-background">
        <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

        <main className="lg:ml-80 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8 lg:py-12 space-y-16">
            <AboutSection />
            {/* <Separator /> */}
            <GitHubSection />
            {/* <Separator /> */}
            <SkillsSection />
            {/* <Separator /> */}
            <AchievementsSection />
            {/* <Separator /> */}
            {/* <ProjectsSection /> */}
            {/* <Separator /> */}
            <ContactSection />
            <Footer />
          </div>
        </main>
      </div>
    </>
  )
}

export const Route = createFileRoute('/')({ component: App })
