"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Copy, CheckCircle } from "lucide-react"
import { Reveal } from "./reveal"

export function ContactSection() {
  const [isCopied, setIsCopied] = useState(false)
  const email = "ceo@impressno.in"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
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

        {/* Email Contact */}
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300 group"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="text-center">
              <motion.div 
                className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-neutral-800 group-hover:scale-110"
                whileHover={{ rotate: 5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">
                Contact Us
              </h3>

              <p className="text-sm text-neutral-600 mb-6">
                Send us an email and we'll get back to you soon
              </p>

              {/* Email with Copy Button */}
              <div className="border border-neutral-200 rounded-lg px-3 py-2 mb-4 bg-white/50 backdrop-blur-sm hover:border-neutral-300 transition-all duration-300 group/email">
                <div className="flex items-center justify-between gap-2">
                  <motion.a
                    href={`mailto:${email}`}
                    className="text-neutral-900 font-medium hover:text-neutral-700 transition-colors flex-1 min-w-0 group-hover/email:text-neutral-800"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {email}
                  </motion.a>
                  <motion.button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition-all duration-300 group relative overflow-hidden flex-shrink-0"
                    title="Copy email address"
                    initial={{ 
                      backgroundColor: "#171717",
                      scale: 1,
                      rotate: 0
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
                    }}
                    animate={isCopied ? {
                      backgroundColor: "#22c55e",
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    } : {
                      backgroundColor: "#171717",
                      scale: 1,
                      rotate: 0
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-lg"
                      initial={{ scale: 0, opacity: 0.8 }}
                      animate={isCopied ? { 
                        scale: [0, 1.5], 
                        opacity: [0.8, 0] 
                      } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Icon with animation */}
                    <motion.div
                      animate={isCopied ? { 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {isCopied ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.div>
                  </motion.button>
                </div>
              </div>

              {/* Fixed height container to prevent layout shift */}
              <div className="h-6 flex items-center justify-center">
                {isCopied && (
                  <motion.p
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    className="text-sm text-green-600 font-medium"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    Email copied to clipboard!
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
