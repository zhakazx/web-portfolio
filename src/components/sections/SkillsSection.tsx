import {
  SiCss,
  SiDocker,
  SiGit,
  SiGoland,
  SiKubernetes,
  SiNestjs,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiRedis,
  SiSwagger,
  SiGooglecloud,
  SiCloudflare,
  SiBootstrap,
  SiSvelte
} from 'react-icons/si'
import { AnimatedSection, StaggerContainer, StaggerItem, FadeIn, HoverScale } from '@/components/animations'

const iconSize = 'size-4'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <SiHtml5 className={iconSize} />, color: '#E34F26' },
      { name: 'CSS', icon: <SiCss className={iconSize} />, color: '#1572B6' },
      { name: 'JavaScript', icon: <SiJavascript className={iconSize} />, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiJavascript className={iconSize} />, color: '#3178C6' },
      { name: 'React', icon: <SiReact className={iconSize} />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs className={iconSize} />, color: '#888888' },
      { name: 'Svelte', icon: <SiSvelte className={iconSize} />, color: '#FF3E00' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className={iconSize} />, color: '#06B6D4' },
      { name: 'Bootstrap', icon: <SiBootstrap className={iconSize} />, color: '#7952B3' }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP (Laravel)', icon: <SiLaravel className={iconSize} />, color: '#FF2D20' },
      { name: 'Golang', icon: <SiGoland className={iconSize} />, color: '#00ADD8' },
      { name: 'NestJS', icon: <SiNestjs className={iconSize} />, color: '#E0234E' },
      { name: 'Python', icon: <SiPython className={iconSize} />, color: '#3776AB' },
      { name: 'PostgreSQL', icon: <SiPostgresql className={iconSize} />, color: '#336791' },
      { name: 'MySQL', icon: <SiMysql className={iconSize} />, color: '#4479A1' },
      { name: 'Redis', icon: <SiRedis className={iconSize} />, color: '#DC382D' },
    ],
  },
  {
    title: 'Devops & Infrastructure',
    skills: [
      { name: 'Docker', icon: <SiDocker className={iconSize} />, color: '#2496ED' },
      { name: 'CI/CD', icon: <SiGit className={iconSize} />, color: '#F05032' },
      { name: 'Cloudflare', icon: <SiCloudflare className={iconSize} />, color: '#F48120' },
      { name: 'GCP', icon: <SiGooglecloud className={iconSize} />, color: '#4285F4' },
      { name: 'Kubernetes', icon: <SiKubernetes className={iconSize} />, color: '#326CE5' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit className={iconSize} />, color: '#F05032' },
      { name: 'Postman', icon: <SiPostman className={iconSize} />, color: '#FF6C37' },
      { name: 'Swagger', icon: <SiSwagger className={iconSize} />, color: '#85EA2D' },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-2">
      <AnimatedSection>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Skills & Technology
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            These are the languages, frameworks, and tools I professionally use to
            handle various aspects of web application development.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <FadeIn key={category.title} delay={categoryIndex * 0.15}>
            <HoverScale>
              <div className="bg-card border border-border p-6">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-lg lg:text-xl font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>

                <StaggerContainer
                  className="flex flex-wrap gap-3"
                  staggerDelay={0.05}
                  delayChildren={0.1}
                >
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <div
                        className="flex items-center gap-2 px-3 py-1.5 transition-colors cursor-default border"
                        style={{
                          borderColor: `${skill.color}40`,
                          backgroundColor: `${skill.color}15`,
                          color: skill.color,
                        }}
                      >
                        {skill.icon}
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </HoverScale>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
