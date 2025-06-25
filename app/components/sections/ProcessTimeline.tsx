"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Palette, Code, Rocket } from "lucide-react"

const ProcessTimeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: Lightbulb,
      title: "Plan",
      description:
        "We start by understanding your goals, target audience, and project requirements. Through detailed consultation, we create a comprehensive roadmap for success.",
      color: "from-yellow-400 to-yellow-600",
      delay: 0.2,
    },
    {
      icon: Palette,
      title: "Design",
      description:
        "Our design phase focuses on creating intuitive user experiences and visually appealing interfaces that align with your brand and engage your audience.",
      color: "from-pink-400 to-pink-600",
      delay: 0.4,
    },
    {
      icon: Code,
      title: "Build",
      description:
        "Using cutting-edge technologies and best practices, we develop robust, scalable solutions that meet your specifications and exceed expectations.",
      color: "from-blue-400 to-blue-600",
      delay: 0.6,
    },
    {
      icon: Rocket,
      title: "Launch",
      description:
        "We ensure a smooth deployment and provide ongoing support to help you achieve your business objectives and maintain optimal performance.",
      color: "from-green-400 to-green-600",
      delay: 0.8,
    },
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            From Concept to <span className="text-primary">Launch</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Our proven 4-step process ensures every project is delivered on time, within budget, and exceeds
            expectations.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-dark-200 dark:bg-dark-700 transform -translate-y-1/2">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-primary to-blue-400"
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: step.delay }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 mx-auto w-16 h-16 mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: step.delay + 0.2 }}
                    className={`w-full h-full rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                <div className="glass-card rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="flex items-start gap-6"
            >
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: step.delay + 0.2 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <div className="glass-card rounded-2xl p-6 flex-1">
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-dark-600 dark:text-dark-300 mb-6">Ready to start your project with our proven process?</p>
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessTimeline
