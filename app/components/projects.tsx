"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Filter } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web Apps", "Open Source"]

  const projects = [
    {
      id: 1,
      title: "Ozone Fitness Platform",
      description: "Full-stack fitness platform solution with React, Next.js, and A personalized fitness platform combining smart training, progress tracking, and community motivation in one seamless experience.",
      image: "/projects/ozone.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Chadcn UI"],
      category: "Web Apps",
      github: "https://github.com/eslamsemedo/Ozone",
      live: "https://ozone-blush.vercel.app/",
    },
    {
      id: 2,
      title: "Code Wars",
      description: "CodeWars is a creative tech agency delivering tailored web development and marketing solutions to help businesses grow and stand out online.",
      image: "/projects/codewars.png",
      tags: ["React", "Next.js", "MongoDB", "Chadcn UI", "Tailwind CSS", "TypeScript"],
      category: "Web Apps",
      github: "https://github.com/eslamsemedo/codeWar",
      live: "https://code-war-two.vercel.app/",
    },
    {
      id: 3,
      title: "Clone LinkedIn",
      description: "Comprehensive React component library with TypeScript support.",
      image: "/projects/linkedin.png",
      tags: ["React", "Next.js", "TypeScript", "Node.js", "CSS", "Tailwind CSS", "Chadcn UI"],
      category: "Open Source",
      github: "https://github.com/eslamsemedo/linkedin-nextjs",
      live: "https://linkedin-nextjs-puce.vercel.app/",
    },
    {
      id: 4,
      title: "Sensor Ozone",
      description: "Real-time analytics dashboard with interactive charts and reporting.",
      image: "/projects/sensor.jpeg",
      tags: ["React", "Next.js", "TypeScript", "Node.js", "CSS", "Tailwind CSS", "Chadcn UI"],
      category: "Open Source",
      github: "https://github.com/eslamsemedo/sensor_ozone",
      live: "https://sensor-ozone.vercel.app/",
    },
    {
      id: 5,
      title: "MYSKY",
      description: "Premium travel services including safari trips, sea adventures, hotel bookings, and guided tours across Egypt and beyond.",
      image: "/projects/mysky.png",
      tags: ["React", "Next.js", "TypeScript", "Node.js", "CSS", "Tailwind CSS", "Chadcn UI"],
      category: "Open Source",
      github: "https://github.com/eslamsemedo/travel-agency",
      live: "https://mysky.blog/",
    },
    {
      id: 6,
      title: "SOLEX EDITING",
      description: "Expert academic editing, peer review, plagiarism checks, and journal-ready formatting to help your manuscript get accepted",
      image: "/projects/solex-editing.png",
      tags: ["React", "Next.js", "TypeScript", "Node.js", "CSS", "Tailwind CSS", "Chadcn UI"],
      category: "Open Source",
      github: "https://github.com/eslamsemedo/solex-editing",
      live: "https://www.solexediting.com/",
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 w-full bg-white dark:bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">Featured Projects</h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto mb-8">
            A showcase of my recent work across different technologies and project types
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter
                  ? "bg-primary-600 text-black shadow-lg"
                  : "bg-slate-100 text-primary-600 hover:bg-slate-200"
                  }`}
              >
                <Filter size={16} className="inline mr-2" />
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden group shadow-lg border border-slate-200"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/90 rounded-full text-primary-600 hover:bg-white transition-colors duration-300"
                    aria-label="View GitHub Repository"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/90 rounded-full text-primary-600 hover:bg-white transition-colors duration-300"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-primary-600 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-primary-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
