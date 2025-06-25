"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useActionState } from "react"
// import { submitContactForm } from "../actions/contact"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Swal from "sweetalert2"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  // const [state, action, isPending] = useActionState(submitContactForm, null)


  const handleSubmit = async (e: React.FormEvent) => {
    // Handle form submission here
    // send to my email
    setIsLoading(true);
    e.preventDefault();

    console.log('Form data:', formData);

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setIsLoading(false);
    setFormData({ name: '', email: '', message: '' });

    const result = await res.json();
    if (result.success) {
      Swal.fire({
        title: "email sent",
        icon: "success",
        draggable: true
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-dark-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">Let's Work Together</h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary-600 mb-6">Get in Touch</h3>
              <p className="text-primary-600 text-lg mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. Drop me a message and
                let's create something incredible together.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "eslamsemedo@gmail.com", href: "mailto:eslamsemedo@gmail.com" },
                { icon: Phone, label: "Phone", value: "+201099600120", href: "tel:+201099600120" },
                { icon: MapPin, label: "Location", value: "Hurghada, Egypt", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-dark-900 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-xl">
                    <Icon className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-600">{label}</div>
                    <div className="text-primary-600">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-primary-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-primary-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-primary-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                // disabled={isPending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#0d3571] text-white rounded-2xl font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 bg-[#0d357134] mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 " size={20} />
                  </>
                )}
              </motion.button>

              {/* {state?.success && ( */}
              {false && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-green-800 dark:text-green-200"
                >
                  {/* {state.message} */}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
