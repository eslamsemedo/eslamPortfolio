"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Server, TrendingUp, ArrowRight } from "lucide-react"

export default function CodewarsServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Code,
      title: "Full-Stack Websites",
      description:
        "Modern, responsive websites built with cutting-edge technologies that convert visitors into customers.",
      features: ["React & Next.js", "Mobile-First Design", "SEO Optimized", "Performance Focused"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Server,
      title: "Custom Systems & APIs",
      description: "Scalable backend solutions and APIs tailored to your business needs that grow with your company.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security First"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Support",
      description:
        "Strategic digital marketing solutions to amplify your online presence and drive measurable results.",
      features: ["Analytics Setup", "Conversion Optimization", "Performance Tracking", "Growth Strategy"],
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section
      id="services"
      className="py-20 w-full bg-gradient-to-br from-primary-50 to-blue-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600">
            <span className="text-primary-600">Codewars</span> – We build, you grow.
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth through innovative technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}

              // whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 group border border-slate-200"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ease-in-out duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-primary-600 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-primary-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-primary-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-2xl font-semibold hover:bg-[#0d3571] hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button> */}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals through innovative technology solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-[#0d3571] text-white rounded-2xl font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Book a Strategy Call <ArrowRight size={20} className="ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
