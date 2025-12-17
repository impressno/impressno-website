"use client"
import { motion } from "framer-motion"
import { Mail, Copy, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function CareersPage() {
  const [copied, setCopied] = useState(false)
  const email = "cpo@impressno.in"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full">
        <section className="relative w-full py-20 sm:py-24 bg-neutral-50">
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-4"
                >
                  <div className="px-4 py-1.5 bg-neutral-900/5 border border-neutral-900/10 rounded-full">
                    <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                      Careers
                    </span>
                  </div>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3 tracking-tight">
                  Join Our Team
                </h1>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Looking to work with us? Send your resume or CV to our Chief Product Officer.
                </p>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
                    className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-4"
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </motion.div>

                  <h2 className="text-xl font-bold text-neutral-900 mb-2">
                    Get in Touch
                  </h2>

                  <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                    We're always looking for talented individuals passionate about technology.
                  </p>

                  {/* Email Display with Copy */}
                  <div className="w-full mb-6">
                    <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                      <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1.5 font-semibold">
                        Send Resume To
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <a
                          href={`mailto:${email}`}
                          className="text-lg font-bold text-neutral-900 hover:text-neutral-600 transition-colors duration-300"
                        >
                          {email}
                        </a>
                        <motion.button
                          onClick={copyToClipboard}
                          className="p-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-md transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          title="Copy email"
                        >
                          {copied ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </motion.button>
                      </div>
                      {copied && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-neutral-600 mt-2"
                        >
                          Email copied to clipboard!
                        </motion.p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
