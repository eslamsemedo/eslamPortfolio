"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code, Palette, Rocket, Users } from "lucide-react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Rocket, label: "Years Experience", value: "5+" },
    { icon: Palette, label: "Technologies", value: "20+" },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            Passionate About Creating <span className="text-primary">Digital Excellence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white dark:bg-dark-800 p-2 rounded-2xl shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="John Doe - Full Stack Developer"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in creating modern, scalable web
                applications that deliver exceptional user experiences. My passion lies in transforming complex problems
                into elegant, efficient solutions.
              </p>
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                I work with cutting-edge technologies including React, Next.js, TypeScript, and Node.js, while also
                providing strategic digital marketing support to help businesses grow their online presence.
              </p>
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 glass-card rounded-2xl"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-dark-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
