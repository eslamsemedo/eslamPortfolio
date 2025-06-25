"use client"

import { motion } from "framer-motion"
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full text-primary-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">John Doe</h3>
            <p className="text-primary-600 mb-4">
              Full-Stack Developer crafting digital experiences with passion and precision.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/eslamsemedo", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/eslam-mokhtar", label: "LinkedIn" },
                { icon: Mail, href: "mailto:eslamsemedo@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-lg bg-dark-800 hover:bg-primary-600 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-primary-600 hover:text-[#0d3571] transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-primary-600">
              <p>Web Development</p>
              <p>Mobile Apps</p>
              <p>UI/UX Design</p>
              <p>Consulting</p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-600 mb-4 md:mb-0">© 2024 John Doe. All rights reserved.</p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-primary-600 rounded-full hover:bg-primary-700 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
