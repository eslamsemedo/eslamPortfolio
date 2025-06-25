"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Filter } from "lucide-react"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web Apps", "Open Source", "E-commerce"]

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Next.js, and Stripe integration. Features include user authentication, product management, and order processing.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      category: "E-commerce",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "Web Apps",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 3,
      title: "Open Source UI Library",
      description:
        "Comprehensive React component library with TypeScript support, extensive documentation, and accessibility features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "TypeScript", "Storybook", "CSS"],
      category: "Open Source",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive charts, data visualization, and customizable reporting features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
      category: "Web Apps",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      id: 5,
      title: "Restaurant Ordering System",
      description:
        "Complete restaurant management system with online ordering, payment processing, and inventory management.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Prisma", "PayPal", "Tailwind"],
      category: "E-commerce",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      id: 6,
      title: "Developer Tools CLI",
      description:
        "Command-line tool for developers to automate common tasks, with plugin system and extensive configuration options.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Node.js", "TypeScript", "CLI", "NPM"],
      category: "Open Source",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto mb-8">
            A showcase of my recent work, demonstrating expertise across different technologies and project types.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-lg"
                    : "bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700"
                }`}
              >
                <Filter size={16} className="inline mr-2" />
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-card rounded-2xl overflow-hidden group ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
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
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/90 rounded-full text-dark-900 hover:bg-white transition-colors duration-300"
                    aria-label="View GitHub Repository"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/90 rounded-full text-dark-900 hover:bg-white transition-colors duration-300"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-dark-600 dark:text-dark-300 mb-6">
            Want to see more of my work or discuss a potential project?
          </p>
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
