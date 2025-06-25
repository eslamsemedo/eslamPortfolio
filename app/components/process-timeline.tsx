"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Palette, Code, Rocket } from "lucide-react"

export default function ProcessTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: Lightbulb,
      title: "Plan",
      description: "Understanding your goals, target audience, and project requirements through detailed consultation.",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating intuitive user experiences and visually appealing interfaces that align with your brand.",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Code,
      title: "Build",
      description: "Developing robust, scalable solutions using cutting-edge technologies and best practices.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Ensuring smooth deployment and providing ongoing support for optimal performance.",
      color: "from-green-400 to-green-600",
    },
  ]

  return (
    <section className="py-20 w-full bg-slate-50 " ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
            From Concept to <span className="text-primary-600">Launch</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Our proven 4-step process ensures every project is delivered on time and exceeds expectations
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-dark-700 transform -translate-y-1/2">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-primary-600 to-blue-400"
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Circle */}
                <div className="relative z-10 mx-auto w-16 h-16 mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    className={`w-full h-full rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center border border-slate-200">
                  <h3 className="text-xl font-bold text-primary-600 mb-3">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed">{step.description}</p>
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
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start gap-6"
            >
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg `}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <div className="bg-white rounded-2xl p-6 flex-1 border border-slate-200 ">
                <h3 className="text-xl font-bold text-primary-600 mb-3">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
