"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
// import { useTheme } from "./theme-provider"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={` px-7 fixed top-[10px] left-[100px] right-[100px] z-50 transition-all duration-300 rounded-2xl bg-[#0f4c7536]  backdrop-blur-md shadow-lg`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl  font-bold text-primary cursor-pointer">
            ES
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-dark-600 dark:text-dark-300 hover:text-primary  transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
            {/* <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors duration-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors duration-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-t border-dark-200/20 dark:border-dark-700/30"
          >
            <div className="container-custom py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-dark-600 dark:text-dark-300 hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
