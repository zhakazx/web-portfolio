import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  Briefcase,
  Code,
  Github,
  Mail,
  Menu,
  Trophy,
  User,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { id: 'about', label: 'About', icon: User, description: 'Get to know me' },
  { id: 'github', label: 'GitHub', icon: Github, description: 'Open source activity' },
  { id: 'skills', label: 'Skills', icon: Code, description: 'Technical expertise' },
  { id: 'achievements', label: 'Achievements', icon: Trophy, description: 'Professional accomplishments' },
  { id: 'projects', label: 'Projects', icon: Briefcase, description: 'My work showcase' },
  { id: 'contact', label: 'Contact', icon: Mail, description: "Let's connect" },
]

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavigate = (section: string) => {
    onNavigate(section)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden bg-background border-b border-border px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
        >
          <Code className="size-5" />
          <span className="font-semibold">Zhaka.Dev</span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-80 bg-background flex flex-col transform transition-transform duration-300 ease-in-out',
          isMobileMenuOpen
            ? 'translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Header - Desktop Only */}
        <div className="hidden lg:block p-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            <Code className="size-5" />
            <span className="font-semibold">Zhaka.Dev</span>
          </Link>
        </div>

        {/* Timeline Navigation */}
        <nav className="flex-1 p-8 pt-8 lg:pt-8" aria-label="Main navigation">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-border" />

            {/* Navigation Items */}
            <div className="space-y-8">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id

                return (
                  <div key={item.id} className="relative flex items-center">
                    {/* Timeline Circle */}
                    <div
                      className={cn(
                        'relative z-10 size-3 rounded-full border-2 transition-colors',
                        isActive
                          ? 'bg-primary border-primary'
                          : 'bg-background border-border'
                      )}
                    />

                    {/* Navigation Button */}
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className={cn(
                        'ml-6 flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors group',
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <Icon
                        className={cn(
                          'size-4 transition-colors',
                          isActive
                            ? 'text-foreground'
                            : 'text-muted-foreground group-hover:text-muted-foreground'
                        )}
                      />
                      <div>
                        <span
                          className={cn(
                            'font-medium text-sm',
                            isActive
                              ? 'text-foreground'
                              : 'text-foreground group-hover:text-foreground'
                          )}
                        >
                          {item.label}
                        </span>
                        <div
                          className={cn(
                            'text-xs mt-0.5',
                            isActive
                              ? 'text-muted-foreground'
                              : 'text-muted-foreground group-hover:text-muted-foreground'
                          )}
                        >
                          {item.description}
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
