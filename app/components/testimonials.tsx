"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "zeyad",
      role: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with John was an absolute game-changer for our business. His technical expertise and strategic thinking helped us launch our platform ahead of schedule.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, E-commerce Plus",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The e-commerce solution John built for us increased our conversion rate by 40% within the first month. His understanding of both technical implementation and user experience is exceptional.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "John's digital marketing support and technical implementation helped us scale from 10K to 100K monthly visitors. His data-driven approach is remarkable.",
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
    <section className="py-20 bg-white " ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
            What Clients <span className="text-primary-600">Say</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my amazing clients have to say
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
                  <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-slate-200">
                    <Quote className="w-12 h-12 text-primary-600/20 mx-auto mb-6" />

                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-primary-600 leading-relaxed mb-8 italic">
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
                        <div className="font-semibold text-primary-600">{testimonial.name}</div>
                        <div className="text-sm text-primary-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-10 border border-slate-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-primary-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-10 border border-slate-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-primary-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#0d3571] w-8" : "bg-slate-300 hover:bg-slate-400"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
