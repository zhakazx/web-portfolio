import { Link } from '@tanstack/react-router'
import { User, Code, Briefcase, Mail, Menu, X, Trophy } from 'lucide-react'
import { useState } from 'react'

interface SidebarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const handleNavigate = (section: string) => {
    onNavigate(section)
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors">
          <Code className="w-5 h-5" />
          <span className="font-semibold">Zhaka.Dev</span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-white flex flex-col transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header - Desktop Only */}
        <div className="hidden lg:block p-8">
          <Link to="/" className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors">
            <Code className="w-5 h-5" />
            <span className="font-semibold">Zhaka.Dev</span>
          </Link>
        </div>

        {/* Timeline Navigation */}
        <nav className="flex-1 p-8 pt-8 lg:pt-8">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200"></div>
            
            {/* Navigation Items */}
            <div className="space-y-8">
              {navItems.map((item, _) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                
                return (
                  <div key={item.id} className="relative flex items-center">
                    {/* Timeline Circle */}
                    <div className={`relative z-10 w-3 h-3 rounded-full border-2 transition-colors ${
                      isActive 
                        ? 'bg-black border-black' 
                        : 'bg-white border-gray-300'
                    }`}></div>
                    
                    {/* Navigation Button */}
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className={`ml-6 flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors group ${
                        isActive
                          ? 'text-black'
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      <Icon className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'
                      }`} />
                      <div>
                        <span className={`font-medium text-sm ${
                          isActive ? 'text-black' : 'text-gray-700 group-hover:text-black'
                        }`}>
                          {item.label}
                        </span>
                        <div className={`text-xs mt-0.5 ${
                          isActive ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-500'
                        }`}>
                          {item.id === 'about' && 'Get to know me'}
                          {item.id === 'skills' && 'Technical expertise'}
                          {item.id === 'projects' && 'My work showcase'}
                          {item.id === 'achievements' && 'Professional accomplishments'}
                          {item.id === 'contact' && "Let's connect"}
                        </div>
                      </div>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}