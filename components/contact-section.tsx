"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Copy, CheckCircle } from "lucide-react"
import { Reveal } from "./reveal"

export function ContactSection() {
  const [isCopied, setIsCopied] = useState(false)
  const email = "ceo@impressno.com"

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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-neutral-50">
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
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">
                Contact Us
              </h3>

              <p className="text-sm text-neutral-600 mb-6">
                Send us an email and we'll get back to you soon
              </p>

              {/* Email with Copy Button */}
              <div className="bg-neutral-50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${email}`}
                    className="text-neutral-900 font-medium hover:text-neutral-700 transition-colors"
                  >
                    {email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-3 p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition-all duration-300 group"
                    title="Copy email address"
                  >
                    {isCopied ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {isCopied && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-600 font-medium"
                >
                  Email copied to clipboard!
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
