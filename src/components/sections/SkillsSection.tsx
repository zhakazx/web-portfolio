import {
  SiCss,
  SiDocker,
  SiGit,
  SiGoland,
  SiHono,
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
} from 'react-icons/si'

const iconSize = 'size-4'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <SiHtml5 className={iconSize} /> },
      { name: 'CSS', icon: <SiCss className={iconSize} /> },
      { name: 'JavaScript', icon: <SiJavascript className={iconSize} /> },
      { name: 'React', icon: <SiReact className={iconSize} /> },
      { name: 'Next.js', icon: <SiNextdotjs className={iconSize} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className={iconSize} /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP (Laravel)', icon: <SiLaravel className={iconSize} /> },
      { name: 'Golang', icon: <SiGoland className={iconSize} /> },
      { name: 'Hono', icon: <SiHono className={iconSize} /> },
      { name: 'Python', icon: <SiPython className={iconSize} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className={iconSize} /> },
      { name: 'MySQL', icon: <SiMysql className={iconSize} /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit className={iconSize} /> },
      { name: 'Docker', icon: <SiDocker className={iconSize} /> },
      { name: 'Postman', icon: <SiPostman className={iconSize} /> },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-6">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4">
          Skills & Technology
        </h2>
        <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          These are the languages, frameworks, and tools I professionally use to
          handle various aspects of web application development.
        </p>
      </div>

      <div className="grid gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-card border border-border p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-lg lg:text-xl font-semibold text-card-foreground">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-foreground text-primary-foreground px-3 py-1.5"
                >
                  {skill.icon}
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
