"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with John was an absolute game-changer for our business. His technical expertise and strategic thinking helped us launch our platform ahead of schedule and under budget. The attention to detail and commitment to quality is unmatched.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, E-commerce Plus",
      company: "E-commerce Plus",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The e-commerce solution John built for us increased our conversion rate by 40% within the first month. His understanding of both technical implementation and user experience design is exceptional. Highly recommended!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      company: "GrowthCo",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "John's digital marketing support and technical implementation helped us scale from 10K to 100K monthly visitors. His data-driven approach and ability to translate complex technical concepts into actionable strategies is remarkable.",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO, InnovateLab",
      company: "InnovateLab",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The custom API and backend system John developed has been running flawlessly for over a year. His code quality, documentation, and ongoing support have been exceptional. A true professional.",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what some of my amazing clients have to say about working together.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card rounded-2xl p-8 md:p-12 text-center relative"
                  >
                    <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />

                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-dark-600 dark:text-dark-300 leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center justify-center gap-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-dark-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-sm text-dark-600 dark:text-dark-400">{testimonial.role}</div>
                        <div className="text-sm text-primary">{testimonial.company}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-dark-800 transition-colors duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-dark-600 dark:text-dark-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-dark-800 transition-colors duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-dark-600 dark:text-dark-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-dark-300 dark:bg-dark-600 hover:bg-dark-400 dark:hover:bg-dark-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
