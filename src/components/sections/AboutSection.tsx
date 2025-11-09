import { Download, Briefcase } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function AboutSection() {
  return (
    <section id="about" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="w-52 h-52 lg:w-64 lg:h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <img src="/snow-close-up.jpg" alt="Zhaka Hidayat Yasir" className="w-52 h-52 lg:w-64 lg:h-64 rounded-lg" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4">
              Zhaka Hidayat Yasir
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6">
              Fullstack Developer & Tech Enthusiast
            </p>
            <p className="text-gray-700 leading-relaxed">
              Passionate fullstack developer with expertise in modern web technologies. 
              I love creating efficient, scalable solutions and turning complex problems 
              into elegant code. Always eager to learn new technologies and contribute 
              to meaningful projects.
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-row justify-center items-center gap-3 sm:gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 border-2 shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] bg-white text-black transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black shadow-[4px_4px_0_#9ca3af] hover:shadow-[2px_2px_0_#9ca3af] bg-black text-white transition-all"
              >
                <Briefcase className="w-4 h-4" />
                <span>View All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}