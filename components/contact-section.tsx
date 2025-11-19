"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, User, MessageSquare } from "lucide-react"
import { Reveal } from "./reveal"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formDataObj = new FormData(e.currentTarget)
      formDataObj.append("access_key", "1943d750-62bd-40b3-b0c3-bcf12c8fea23") // Replace with your Web3Forms access key

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      })

      const data = await response.json()

      if (data.success) {
        setFormData({ name: '', email: '', message: '' })
        setSubmitStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error(data.message)
      }
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } catch (err) {
      console.error('Failed to send message:', err)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-neutral-900 mb-4 font-bold leading-tight">
              Get In <span className="italic font-light">Touch</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto mb-8">
              Ready to transform your digital presence? Let's discuss how we can help you achieve your goals.
            </p>
          </Reveal>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-neutral-100"
          >
              <div className="text-center mb-5">
                <motion.div 
                  className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mx-auto mb-3"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <MessageSquare className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-1">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">
                  Fill out the form below
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-neutral-700 mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <motion.div 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none"
                      animate={{ 
                        scale: focusedField === 'name' ? 1.1 : 1,
                        color: focusedField === 'name' ? "#171717" : "#737373"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <User className="w-5 h-5" />
                    </motion.div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      className="w-full pl-11 pr-4 py-2.5 text-sm border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 outline-none bg-white hover:border-neutral-300"
                      placeholder="Your Name"
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: focusedField === 'name' || formData.name ? "100%" : "0%"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-neutral-700 mb-1.5">
                    Your Email
                  </label>
                  <div className="relative">
                    <motion.div 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none"
                      animate={{ 
                        scale: focusedField === 'email' ? 1.1 : 1,
                        color: focusedField === 'email' ? "#171717" : "#737373"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      className="w-full pl-11 pr-4 py-2.5 text-sm border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 outline-none bg-white hover:border-neutral-300"
                      placeholder="Your Email"
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: focusedField === 'email' || formData.email ? "100%" : "0%"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-700 mb-1.5">
                    Message
                  </label>
                  <div className="relative">
                    <motion.div 
                      className="absolute left-3 top-3 z-10 pointer-events-none"
                      animate={{ 
                        scale: focusedField === 'message' ? 1.1 : 1,
                        color: focusedField === 'message' ? "#171717" : "#737373"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <MessageSquare className="w-5 h-5" />
                    </motion.div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      required
                      rows={4}
                      className="w-full pl-11 pr-4 py-2.5 text-sm border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-300 outline-none resize-none bg-white hover:border-neutral-300"
                      placeholder="Your Message"
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: focusedField === 'message' || formData.message ? "100%" : "0%"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neutral-900 text-white py-2.5 px-6 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                <div className="h-6 flex items-center justify-center">
                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-green-600 font-medium"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-600 font-medium"
                    >
                      Failed to send message. Please try again.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
    </section>
  )
}
