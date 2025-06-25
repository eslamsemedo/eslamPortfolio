"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Atom } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    { name: "React", level: 95, icon: <Atom size={40} />, color: "from-blue-400 to-blue-600" },
    { name: "Next.js", level: 90, icon: "▲", color: "from-gray-700 to-gray-900" },
    { name: "TypeScript & JavaScript", level: 88, icon: "📘", color: "from-blue-500 to-blue-700" },
    { name: "Node.js", level: 85, icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "Python", level: 80, icon: "🐍", color: "from-yellow-400 to-yellow-600" },
    { name: "Tailwind CSS", level: 92, icon: "🎨", color: "from-cyan-400 to-cyan-600" },
    { name: "MySQL", level: 82, icon: "🐘", color: "from-blue-600 to-blue-800" },
    { name: "MongoDB", level: 78, icon: "🍃", color: "from-green-500 to-green-700" },
    { name: "Chadcn UI", level: 72, icon: "◉", color: "from-pink-400 to-pink-600" },
    { name: "Framer Motion", level: 85, icon: "🎭", color: "from-purple-400 to-purple-600" },
    { name: "Git", level: 85, icon: "🎭", color: "from-gray-400 to-gray-600" },
    { name: "OOP", level: 85, icon: "🎭", color: "from-orange-400 to-orange-600" },
    { name: "HTML5", level: 85, icon: "🎭", color: "from-yellow-400 to-yellow-600" },
    { name: "CCNA", level: 80, icon: "🎭", color: "from-blue-400 to-blue-600" },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-dark-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            My technical arsenal for building exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
              }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative group"
            >
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-2xl border border-slate-200 dark:border-dark-700">
                <div className="text-4xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-primary-600 mb-3">{skill.name}</h3>

                {/* Skill Level Bar */}
                <div className="w-full bg-slate-200 dark:bg-dark-700 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
                <span className="text-sm text-primary-600">{skill.level}%</span>

                {/* Hover Tooltip */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-dark-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap z-10"
                  >
                    {skill.level}% Proficiency
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-900" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
