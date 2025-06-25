"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john@example.com",
      href: "mailto:john@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-dark-800 dark:via-dark-900 dark:to-primary/5"
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
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            Let's Build Something <span className="text-primary">Amazing Together</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss how we can help grow your business? I'd love to hear from you.
            Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed mb-8">
                Whether you're looking to build a new website, develop a custom application, or need strategic digital
                marketing support, I'm here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-dark-600 dark:text-dark-400 mb-1">{info.label}</div>
                    <div className="font-semibold text-dark-900 dark:text-white">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-dark-900 dark:text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-dark-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-dark-900 dark:text-white resize-none"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 dark:text-green-400 text-center font-medium"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 dark:text-red-400 text-center font-medium"
                >
                  ❌ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
