import { GitCommit, GitPullRequest, GitMerge, Star } from 'lucide-react'
import { GitHubCalendar } from 'react-github-calendar'
import type { Activity } from 'react-activity-calendar'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const githubUsername = 'zhakazx'

function ContributionStats({ contributions }: { contributions: Array<Activity> }) {
  const stats = {
    total: contributions.reduce((sum, day) => sum + day.count, 0),
    maxStreak: (() => {
      let maxStreak = 0
      let currentStreak = 0
      for (const day of contributions) {
        if (day.count > 0) {
          currentStreak++
          maxStreak = Math.max(maxStreak, currentStreak)
        } else {
          currentStreak = 0
        }
      }
      return maxStreak
    })(),
    activeDays: contributions.filter((day) => day.count > 0).length,
    longestGap: (() => {
      let maxGap = 0
      let currentGap = 0
      for (const day of contributions) {
        if (day.count === 0) {
          currentGap++
          maxGap = Math.max(maxGap, currentGap)
        } else {
          currentGap = 0
        }
      }
      return maxGap
    })(),
  }

  const statItems = [
    { label: 'Total Contributions', value: stats.total, icon: GitCommit },
    { label: 'Longest Streak', value: `${stats.maxStreak} days`, icon: Star },
    { label: 'Active Days', value: stats.activeDays, icon: GitPullRequest },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {statItems.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-card border border-border p-4 text-center"
          >
            <div className="flex justify-center mb-2">
              <div className="p-2 bg-muted rounded-lg">
                <Icon className="size-4 text-foreground" />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        )
      })}
    </div>
  )
}

function ContributionGraph({ contributions }: { contributions: Array<Activity> }) {
  // Get the last 30 weeks of data for the bar chart
  const recentData = contributions.slice(-210) // ~30 weeks
  const weeklyData: Array<{ week: string; count: number }> = []

  for (let i = 0; i < recentData.length; i += 7) {
    const weekSlice = recentData.slice(i, i + 7)
    const count = weekSlice.reduce((sum, day) => sum + day.count, 0)
    const date = new Date(weekSlice[0]?.date || '')
    weeklyData.push({
      week: `W${Math.ceil((date.getTime() / 1000 / 60 / 60 / 24 + date.getDay() + 1) / 7)}`,
      count,
    })
  }

  const maxCount = Math.max(...weeklyData.map((w) => w.count), 1)

  return (
    <div className="bg-card border border-border p-6">
      <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
        <GitMerge className="size-5" />
        Weekly Contribution Activity
      </h3>
      <div className="flex items-end gap-1 h-32">
        {weeklyData.slice(-52).map((week, index) => {
          const height = maxCount > 0 ? (week.count / maxCount) * 100 : 0
          return (
            <motion.div
              key={index}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.01, duration: 0.3 }}
              className="flex-1 bg-[#26a641] hover:bg-[#006d32] transition-colors rounded-t-sm origin-bottom relative group"
              style={{ height: `${Math.max(height, 4)}%` }}
            >
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-foreground text-primary-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {week.count} contributions
              </div>
            </motion.div>
          )
        })}
      </div>
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>52 weeks ago</span>
        <span>Now</span>
      </div>
    </div>
  )
}

export default function GitHubSection() {
  const [contributions, setContributions] = useState<Array<Activity>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // The GitHubCalendar component fetches data internally, but we need the raw data for our graph
    // We'll fetch it manually for the graph
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`
        )
        if (!response.ok) throw new Error('Failed to fetch')
        const data = await response.json()
        if (data.contributions) {
          setContributions(data.contributions)
        }
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section id="github" className="py-6">
      <div className="text-center mb-8 lg:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4"
        >
          GitHub Contributions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
        >
          My open source activity and code contributions over the past year.
        </motion.p>
      </div>

      {/* Stats Grid */}
      {!loading && contributions.length > 0 && (
        <div className="mb-8">
          <ContributionStats contributions={contributions} />
        </div>
      )}

      {/* Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-card border border-border p-6 mb-8 overflow-x-auto"
      >
        <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
          <GitCommit className="size-5" />
          Contribution Calendar
        </h3>
        <div className="min-w-[750px]">
          <GitHubCalendar
            username={githubUsername}
            colorScheme="light"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            style={{
              color: '#0a0a0a',
            }}
            labels={{
              months: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              totalCount: '{{count}} contributions in the last year',
              legend: {
                less: 'Less',
                more: 'More',
              },
            }}
          />
        </div>
      </motion.div>

      {/* Weekly Graph */}
      {!loading && contributions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <ContributionGraph contributions={contributions} />
        </motion.div>
      )}

      {/* GitHub Profile Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center mt-8"
      >
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] bg-background text-foreground transition-all text-sm lg:text-base"
        >
          <GithubIcon className="size-4" />
          View Full Profile
        </a>
      </motion.div>
    </section>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}
