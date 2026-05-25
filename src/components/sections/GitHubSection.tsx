import { GitCommit } from 'lucide-react'
import { GitHubCalendar } from 'react-github-calendar'
import { motion } from 'framer-motion'

const githubUsername = 'zhakazx'

export default function GitHubSection() {
  return (
    <section id="github">
      {/* Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-card mb-8 overflow-x-auto"
      >
        <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2 uppercase">
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
    </section>
  )
}