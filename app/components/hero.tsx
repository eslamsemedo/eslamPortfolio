"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Animated Background Blobs */}
      {/* <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute w-72 h-72 bg-[#4b63888a] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute  w-96 h-96 bg-[#bbe1fa88] rounded-full blur-3xl"
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-primary">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text  bg-[#3282B8]">
                Eslam Mokhtar
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-3xl mx-auto"
          >
            Full-Stack Developer crafting digital experiences that blend
            <span className="text-primary-600 font-semibold"> innovation</span> with
            <span className="text-primary-600 font-semibold"> functionality</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-primary rounded-2xl font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Let's Talk
              <ArrowRight className="ml-2" size={20} />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-2xl font-semibold hover:bg-primary-600 hover:text-blue-600 transition-colors"
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/eslamsemedo", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/eslam-mokhtar", label: "LinkedIn" },
              { icon: Mail, href: "mailto:eslamsemedo@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-3 rounded-full bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm border border-white/20  text-dark-600  hover:text-blue-600 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 "
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-dark-400 dark:border-dark-600 rounded-full flex justify-center "
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-[10px] h-[10px] bg-black rounded-full mt-2 "
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
