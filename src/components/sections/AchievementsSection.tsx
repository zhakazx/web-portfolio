import { CheckCircle2, Medal, Trophy } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem, FadeIn } from '@/components/animations'

const achievements = [
  {
    id: 'lks-province',
    title: '1st Place, LKS Province South Sulawesi (2022)',
    icon: Trophy,
    description:
      'Successfully completed two modules demonstrating full-stack capabilities:',
    items: [
      {
        label: 'Frontend Development',
        text: 'Developed a custom webpage template from scratch using Vue.js.',
      },
      {
        label: 'Backend Development',
        text: 'Built and integrated a backend API using Laravel.',
      },
    ],
  },
  {
    id: 'lks-national',
    title: 'Medallion of Excellence, LKS National Indonesia (2022)',
    icon: Medal,
    description:
      'Achieved distinction by excelling in a comprehensive four-module competition:',
    items: [
      {
        label: 'Speed Test',
        text: 'Completed a multi-part challenge including UI components (landing page, masonry layout, data charts, image sliders) and backend logic (PHP internationalization, JSON data analytics).',
      },
      {
        label: 'CMS Module',
        text: 'Created a custom WordPress theme and plugin.',
      },
      {
        label: 'Client-Side Module',
        text: 'Developed a "Hexaria" game using Canvas or DOM.',
      },
      {
        label: 'Server-Side Module',
        text: 'Built a dynamic frontend application (Vue.js or ReactJS) integrated with a Laravel RESTful API.',
      },
    ],
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-2">
      <AnimatedSection>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-2 uppercase">
            Achievements
          </h2>
          <p className="text-base text-muted-foreground">
            Highlighting the awards and accomplishments from my journey so far.
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto space-y-8">
        <StaggerContainer staggerDelay={0.2} delayChildren={0.1}>
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <StaggerItem key={achievement.id}>
                <div className="border border-border p-6 bg-card">
                  <div className="flex items-start gap-4">
                    <FadeIn direction="right" delay={0.1}>
                      <div className="size-12 min-w-12 rounded-full bg-foreground text-primary-foreground flex items-center justify-center flex-shrink-0">
                        <Icon className="size-6" strokeWidth={2} />
                      </div>
                    </FadeIn>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-card-foreground">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-foreground/80 mt-2">
                        {achievement.description}
                      </p>
                      <StaggerContainer
                        className="mt-3 space-y-2"
                        staggerDelay={0.1}
                        delayChildren={0.3}
                      >
                        {achievement.items.map((item) => (
                          <StaggerItem key={item.label}>
                            <div className="flex gap-2 items-start">
                              <CheckCircle2 className="size-4 min-w-4 mt-0.5 text-foreground flex-shrink-0" />
                              <span className="text-sm text-foreground/80">
                                <span className="font-medium">{item.label}:</span>{' '}
                                {item.text}
                              </span>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
