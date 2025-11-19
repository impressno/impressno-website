"use client"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: "Software Solutions", href: "#services" },
      { name: "Research & Innovation", href: "#services" },
      { name: "Societal Impact", href: "#services" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
    Support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Project Inquiry", href: "#contact" },
      { name: "Technical Support", href: "#contact" }
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/impressnosolutions?igsh=MTNsbzV5dm1keXQ3dQ==" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ]

  const policyLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookies", href: "#" }
  ]

  return (
    <footer className="relative bg-neutral-50 w-full">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-20 w-80 h-80 bg-gradient-to-r from-rose-500/2 to-purple-500/2 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 -right-16 w-72 h-72 bg-gradient-to-r from-rose-500/2 to-purple-500/2 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-custom py-8 sm:py-12 lg:py-16 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 mb-4 sm:mb-5">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-1.5 tracking-tight">IMPRESSNO</h3>
                <div className="w-8 sm:w-10 h-1 bg-neutral-900 rounded-full mb-1.5 sm:mb-2 shadow-sm" />
              </div>
              <p className="text-neutral-700 mb-2 sm:mb-3 leading-relaxed text-xs sm:text-sm max-w-md">
                Where Creativity & Strategy Meet. We create innovative software solutions that drive business growth
                while making a positive societal impact.
              </p>
              <div className="flex space-x-2 sm:space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="group w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center text-neutral-600 hover:text-white hover:bg-neutral-900 transition-all duration-300 hover:shadow-xl border border-neutral-200 hover:border-neutral-900 touch-target"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={14} className="sm:w-4 sm:h-4 transition-all duration-300" />
                    <span className="sr-only">Follow us on {social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 lg:gap-5">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-xs uppercase tracking-wider mb-1">{category}</h4>
                    <div className="w-4 sm:w-6 h-0.5 bg-neutral-900 rounded-full mb-2" />
                  </div>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {links.map((link, linkIndex) => (
                      <li key={link.name}>
                        <motion.a
                          href={link.href}
                          className="text-neutral-600 hover:text-neutral-900 transition-all duration-300 group flex items-center text-xs sm:text-sm font-medium touch-target"
                          whileHover={{ x: 4 }}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (linkIndex * 0.05) }}
                          viewport={{ once: true }}
                        >
                          <span className="relative">
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full rounded-full" />
                          </span>
                          <ArrowUpRight size={12} className="sm:w-[14px] sm:h-[14px] ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-neutral-900" />
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-3 sm:pt-4 border-t border-neutral-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <p className="text-xs sm:text-sm text-neutral-600 font-medium text-center sm:text-left">
              &copy; {currentYear} Impressno. All rights reserved.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
              {policyLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors duration-300 relative group font-medium touch-target whitespace-nowrap py-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full rounded-full" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
