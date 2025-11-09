import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import AchievementsSection from '@/components/sections/AchievementsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import Separator from '@/components/Separator'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [activeSection, setActiveSection] = useState('about')

  // Handle smooth scrolling to sections
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'skills',
        'achievements',
        'projects',
        'contact',
      ]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const sectionId of sections) {
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
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-white">
        <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

        <main className="lg:ml-80 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8 lg:py-12 space-y-16 lg:space-y-20">
            <AboutSection />
            <Separator />
            <SkillsSection />
            <Separator />
            <AchievementsSection />
            <Separator />
            <ProjectsSection />
            <Separator />
            <ContactSection />
            <Footer />
          </div>
        </main>
      </div>
    </>
  )
}
