"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:john@example.com", label: "Email" },
  ]

  return (
    <footer className="bg-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-primary mb-4">JD</div>
                <p className="text-dark-300 leading-relaxed mb-6 max-w-md">
                  Full Stack Developer & Digital Strategist passionate about creating exceptional digital experiences
                  that drive business growth.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-dark-800 rounded-2xl flex items-center justify-center text-dark-400 hover:text-primary hover:bg-dark-700 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className="text-dark-400 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-3">
                  <p className="text-dark-400">Ready to start your project?</p>
                  <a
                    href="mailto:john@example.com"
                    className="text-primary hover:text-blue-400 transition-colors duration-300 block"
                  >
                    john@example.com
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="text-primary hover:text-blue-400 transition-colors duration-300 block"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-dark-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-dark-400 text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-dark-400">
              <a href="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.button>
    </footer>
  )
}

export default Footer
