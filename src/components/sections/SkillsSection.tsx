import {
  SiCss,
  SiDocker,
  SiGit,
  SiGoland,
  SiKubernetes,
  SiNestjs,
  SiHtml5,
  SiJavascript,
  SiTypescript,
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
  SiSvelte,
} from 'react-icons/si'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animations'

const skills = [
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Golang', icon: SiGoland, color: '#00ADD8' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Svelte', icon: SiSvelte, color: '#FF3E00' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Cloudflare', icon: SiCloudflare, color: '#F48120' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-2">
      <AnimatedSection>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Tech Stack
          </h2>
          <p className="text-base text-muted-foreground">
            A selection of my recent work and contributions
          </p>
        </div>
      </AnimatedSection>

      <StaggerContainer className="flex flex-wrap gap-4" staggerDelay={0.03} delayChildren={0.1}>
        {skills.map((skill) => (
          <StaggerItem key={skill.name}>
            <div
              className="group relative flex items-center justify-center size-10 rounded-full transition-transform hover:scale-110"
              title={skill.name}
            >
              <skill.icon className="size-8" style={{ color: skill.color }} />
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
