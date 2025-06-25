"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Server, TrendingUp, ArrowRight } from "lucide-react"

const CodewarsServices = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Code,
      title: "Full-Stack Websites",
      description:
        "Modern, responsive websites built with cutting-edge technologies. From concept to deployment, we create digital experiences that convert visitors into customers.",
      features: ["React & Next.js", "Mobile-First Design", "SEO Optimized", "Performance Focused"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Server,
      title: "Custom Systems & APIs",
      description:
        "Scalable backend solutions and APIs tailored to your business needs. We build robust systems that grow with your company and integrate seamlessly with existing tools.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security First"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Support",
      description:
        "Strategic digital marketing solutions to amplify your online presence. We combine technical expertise with marketing insights to drive measurable results.",
      features: ["Analytics Setup", "Conversion Optimization", "Performance Tracking", "Growth Strategy"],
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-primary/5 via-blue-50/50 to-white dark:from-primary/10 dark:via-dark-800 dark:to-dark-900"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            <span className="text-primary">Codewars</span> – We build, you grow.
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth through innovative technology
            and strategic marketing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-2xl p-8 group hover:shadow-2xl transition-all duration-500"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                    className="flex items-center text-dark-600 dark:text-dark-300"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals through innovative technology solutions and
              strategic digital marketing.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Book a Strategy Call <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CodewarsServices
