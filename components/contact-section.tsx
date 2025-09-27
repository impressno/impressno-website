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
    <section id="contact" className="relative py-4 sm:py-5 lg:py-6 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 -left-32 w-64 h-64 bg-neutral-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-neutral-200/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-neutral-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-neutral-500/30 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
      </motion.div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-5 lg:mb-6">
          <Reveal>
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4"
              whileInView={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Get In Touch
            </motion.h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to transform your digital presence? Let's discuss how we can help you achieve your goals.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 items-stretch">
          {/* Contact Information */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background glow effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-neutral-100/50 to-neutral-200/30 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl border border-neutral-100/50">
              <Reveal>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <motion.div 
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-neutral-900 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                    Let's Start a Conversation
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-xs text-neutral-600 mb-3 sm:mb-4 leading-relaxed">
                  Whether you need a custom software solution, want to explore innovative research opportunities, 
                  or are looking to create positive societal impact through technology, we're here to help.
                </p>
              </Reveal>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="relative group block p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-neutral-50/80 hover:bg-neutral-100/80 transition-all duration-300 border border-neutral-200/50 overflow-hidden touch-target"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex items-center space-x-3 sm:space-x-4">
                      <motion.div 
                        className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-neutral-900 rounded-lg flex items-center justify-center group-hover:bg-neutral-800 transition-colors shadow-md"
                        whileHover={{ rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base text-neutral-900 mb-1 group-hover:text-neutral-800 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-neutral-600 text-xs sm:text-sm break-all">{info.content}</p>
                      </div>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Form background glow */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-neutral-200/30 to-neutral-100/50 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-neutral-100/50">
              <motion.div
                className="flex items-center gap-3 mb-3 sm:mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-neutral-900 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Send className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </motion.div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900">Send us a message</h3>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-1.5 sm:space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1 sm:mb-1.5">
                      Name *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-neutral-300 rounded-lg sm:rounded-xl bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 hover:border-neutral-400 placeholder-neutral-400 text-sm sm:text-base"
                      placeholder="Your name"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1 sm:mb-1.5">
                      Email *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-neutral-300 rounded-lg sm:rounded-xl bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 hover:border-neutral-400 placeholder-neutral-400 text-sm sm:text-base"
                      placeholder="your@email.com"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1 sm:mb-1.5">
                      Company
                    </label>
                    <motion.input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-neutral-300 rounded-lg sm:rounded-xl bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 hover:border-neutral-400 placeholder-neutral-400 text-sm sm:text-base"
                      placeholder="Your company"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1 sm:mb-1.5">
                      Service Interest
                    </label>
                    <motion.select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-neutral-300 rounded-lg sm:rounded-xl bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 hover:border-neutral-400 text-sm sm:text-base"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <option value="">Select a service</option>
                      <option value="software">Software Solutions</option>
                      <option value="research">Research & Innovation</option>
                      <option value="societal">Societal Impact</option>
                      <option value="all">All Services</option>
                    </motion.select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1 sm:mb-1.5">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    required
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-neutral-300 rounded-lg sm:rounded-xl bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 hover:border-neutral-400 resize-none placeholder-neutral-400 text-sm sm:text-base"
                    placeholder="Tell us about your project and how we can help you achieve your goals..."
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="relative w-full bg-neutral-900 text-white py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium overflow-hidden group transition-all duration-300 shadow-lg hover:shadow-xl touch-target text-sm sm:text-base"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  disabled={isSubmitted}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={isHovering ? { scale: 1, opacity: 0 } : { scale: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <div className="relative flex items-center justify-center space-x-2">
                    {isSubmitted ? (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.div>
                        <span>Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <motion.div
                          animate={{ x: isHovering ? 2 : 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.div>
                        <span>Send Message</span>
                        <motion.div
                          animate={{ 
                            x: isHovering ? 4 : 0,
                            opacity: isHovering ? 1 : 0 
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
