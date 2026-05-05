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
      { name: 'HTML', icon: <SiHtml5 className={iconSize} /> },
      { name: 'CSS', icon: <SiCss className={iconSize} /> },
      { name: 'TypeScript', icon: <SiJavascript className={iconSize} /> },
      { name: 'JavaScript', icon: <SiJavascript className={iconSize} /> },
      { name: 'React', icon: <SiReact className={iconSize} /> },
      { name: 'Next.js', icon: <SiNextdotjs className={iconSize} /> },
      { name: 'Svelte', icon: <SiSvelte className={iconSize} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className={iconSize} /> },
      { name: 'Bootstrap', icon: <SiBootstrap className={iconSize} /> }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP (Laravel)', icon: <SiLaravel className={iconSize} /> },
      { name: 'Golang', icon: <SiGoland className={iconSize} /> },
      { name: 'NestJS', icon: <SiNestjs className={iconSize} /> },
      { name: 'Python', icon: <SiPython className={iconSize} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className={iconSize} /> },
      { name: 'MySQL', icon: <SiMysql className={iconSize} /> },
      { name: 'Redis', icon: <SiRedis className={iconSize} /> },
    ],
  },
  {
    title: 'Devops & Infrastructure',
    skills: [
      { name: 'Docker', icon: <SiDocker className={iconSize} /> },
      { name: 'CI/CD', icon: <SiGit className={iconSize} /> },
      { name: 'Cloudflare', icon: <SiCloudflare className={iconSize} /> },
      { name: 'GCP', icon: <SiGooglecloud className={iconSize} /> },
      { name: 'Kubernetes', icon: <SiKubernetes className={iconSize} /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit className={iconSize} /> },
      { name: 'Postman', icon: <SiPostman className={iconSize} /> },
      { name: 'Swagger', icon: <SiSwagger className={iconSize} /> },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-6">
      <AnimatedSection>
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4">
            Skills & Technology
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
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
                      <div className="flex items-center gap-2 bg-foreground text-primary-foreground px-3 py-1.5 hover:bg-foreground/90 transition-colors cursor-default">
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
