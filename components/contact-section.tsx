"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import { Reveal } from "./reveal"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@impressno.com",
      link: "mailto:hello@impressno.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Street, Tech City, TC 12345",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-left mb-6 sm:mb-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-neutral-900 mb-2 sm:mb-3 font-bold leading-tight">
              Get In <span className="italic font-light">Touch</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
              Ready to transform your digital presence? Let's discuss how we can help you achieve your goals.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Information */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100">
              <Reveal>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 bg-neutral-900 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                    Let's Start a Conversation
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-sm sm:text-base text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
                  Whether you need a custom software solution, want to explore innovative research opportunities,
                  or are looking to create positive societal impact through technology, we're here to help.
                </p>
              </Reveal>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="group block p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-all duration-300 border border-neutral-200/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-base text-neutral-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-neutral-600 text-sm">{info.content}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-neutral-900 rounded-xl flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Send us a message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 hover:border-neutral-400 placeholder-neutral-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 hover:border-neutral-400 placeholder-neutral-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 hover:border-neutral-400 placeholder-neutral-400"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 hover:border-neutral-400"
                    >
                      <option value="">Select a service</option>
                      <option value="software">Software Solutions</option>
                      <option value="research">Research & Innovation</option>
                      <option value="societal">Societal Impact</option>
                      <option value="all">All Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 hover:border-neutral-400 resize-none placeholder-neutral-400"
                    placeholder="Tell us about your project and how we can help you achieve your goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50"
                  disabled={isSubmitted}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
