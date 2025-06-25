"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 w-full bg-white dark:bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-[90%] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-[#0d3571] rounded-2xl transform rotate-6"></div>
              <Image
                src="/eslam.jpg"
                alt="John Doe"
                width={400}
                height={400}
                layout="responsive"

                className="relative rounded-2xl shadow-2xl object-cover opacity-85"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-primary-600 ">
              Building the Future, One Line at a Time
            </h3>

            <div className="space-y-4 text-primary-600 text-lg leading-relaxed">
              <p>
                With over 2 years of experience in full-stack development, I specialize in creating scalable web
                applications that deliver exceptional user experiences. My journey began with a curiosity about how
                things work, which evolved into a passion for building digital solutions.
              </p>

              <p>
                I believe in the power of clean code, thoughtful design, and continuous learning. When I'm not coding,
                you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge
                with the developer community.
              </p>

              <p>
                My approach combines technical expertise with creative problem-solving, ensuring that every project not
                only functions flawlessly but also provides an intuitive and engaging user experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { number: "10+", label: "Projects Completed" },
                { number: "2+", label: "Years Experience" },
                { number: "5+", label: "Happy Clients" },
                { number: "100%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-primary-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
