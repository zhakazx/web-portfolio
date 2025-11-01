import { Trophy, Medal, CheckCircle2 } from 'lucide-react'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-6">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-4">
          Achievements
        </h2>
        <p className="text-base lg:text-lg text-gray-600">
          Highlighting the awards and accomplishments from my journey so far.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Achievement 1 */}
        <div className="border border-gray-200 p-6 bg-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 min-w-12 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
              <Trophy className="w-6 h-6" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-black">1st Place, LKS Province South Sulawesi (2022)</h3>
              <p className="text-gray-700 mt-2">Successfully completed two modules demonstrating full-stack capabilities:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 min-w-4 mt-0.5 text-black flex-shrink-0" />
                  <span className="text-gray-700"><span className="font-medium">Frontend Development:</span> Developed a custom webpage template from scratch using Vue.js.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 min-w-4 mt-0.5 text-black flex-shrink-0" />
                  <span className="text-gray-700"><span className="font-medium">Backend Development:</span> Built and integrated a backend API using Laravel.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievement 2 */}
        <div className="border border-gray-200 p-6 bg-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 min-w-12 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
              <Medal className="w-6 h-6" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-black">Medallion of Excellence, LKS National Indonesia (2022)</h3>
              <p className="text-gray-700 mt-2">Achieved distinction by excelling in a comprehensive four-module competition:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 min-w-4 mt-0.5 text-black flex-shrink-0" />
                  <span className="text-gray-700"><span className="font-medium">Speed Test:</span> Completed a multi-part challenge including UI components (landing page, masonry layout, data charts, image sliders) and backend logic (PHP internationalization, JSON data analytics).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 min-w-4 mt-0.5 text-black flex-shrink-0" />
                  <span className="text-gray-700"><span className="font-medium">CMS Module:</span> Created a custom WordPress theme and plugin.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 min-w-4 mt-0.5 text-black flex-shrink-0" />
                  <span className="text-gray-700"><span className="font-medium">Client-Side Module:</span> Developed a "Hexaria" game using Canvas or DOM.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 min-w-4 mt-0.5 text-black flex-shrink-0" />
                  <span className="text-gray-700"><span className="font-medium">Server-Side Module:</span> Built a dynamic frontend application (Vue.js or ReactJS) integrated with a Laravel RESTful API.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}