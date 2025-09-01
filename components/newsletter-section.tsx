"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Mail } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"
import { AnimatedText } from "./animated-text"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(true)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setIsSubmitted(true)
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32">
      <div className="container-custom">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <BlurPanel className="p-6 sm:p-8 lg:p-12 bg-white/40 backdrop-blur-md grain-texture mx-4 sm:mx-0">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
                  <AnimatedText text="Join our community of innovators." delay={0.2} />
                </h2>
                <p className="text-base sm:text-lg text-neutral-600">
                  Get the latest on software, research, and societal impact. Receive exclusive updates, insights, and early access to our newest solutions.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={20} className="text-neutral-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setIsValid(true)
                      }}
                      placeholder="Enter your email address"
                      className={`w-full pl-12 pr-4 py-3 sm:py-4 bg-white/60 backdrop-blur-sm border rounded-full text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 text-sm sm:text-base ${!isValid ? "border-red-300 focus:ring-red-500" : "border-neutral-200"
                        }`}
                    />
                  </div>

                  {!isValid && (
                    <motion.p
                      className="text-sm text-red-600 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Please enter a valid email address
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    className="w-full bg-neutral-900 text-white py-3 sm:py-4 rounded-full font-medium hover:bg-neutral-800 transition-all duration-200 text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe to Newsletter
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-6 sm:py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Check size={20} className="text-green-600 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">Thank you for joining us!</h3>
                  <p className="text-sm sm:text-base text-neutral-600">
                    You're now subscribed. Stay tuned for updates on our services, innovation stories, and ways we're making a difference.
                  </p>
                </motion.div>
              )}

              <p className="text-xs text-neutral-500 text-center mt-4 sm:mt-6 px-2 sm:px-0">
                We respect your privacy. Unsubscribe at any time. Read our{' '}
                <a href="#" className="underline hover:text-neutral-700 transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
            </BlurPanel>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
