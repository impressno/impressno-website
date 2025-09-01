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
      { name: "Custom Development", href: "#services" },
      { name: "Consulting", href: "#services" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Approach", href: "#about" },
      { name: "Sustainability", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
    Support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Project Inquiry", href: "#contact" },
      { name: "Technical Support", href: "#contact" },
      { name: "Documentation", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ]

  const policyLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookies", href: "#" }
  ]

  return (
    <footer className="relative bg-white border-t border-neutral-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Shapes */}
        <motion.div 
          className="absolute -top-32 -left-20 w-80 h-80 bg-gradient-to-r from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -top-24 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/2 to-cyan-500/2 rounded-2xl blur-2xl rotate-12"
          animate={{ 
            rotate: [12, 45, 12],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -top-16 left-1/2 w-48 h-48 bg-gradient-to-r from-blue-500/2 to-cyan-500/2 rounded-3xl blur-xl rotate-45"
          animate={{ 
            x: [0, 25, 0],
            y: [0, -15, 0],
            rotate: [45, 135, 45]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 -right-10 w-48 h-48 bg-gradient-to-r from-blue-500/2 to-cyan-500/2 rounded-3xl blur-xl rotate-45"
          animate={{ 
            x: [0, 35, 0],
            y: [0, -25, 0],
            rotate: [45, 225, 45]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 left-1/3 w-56 h-56 bg-gradient-to-r from-blue-500/2 to-cyan-500/2 rounded-full blur-2xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-16 -right-16 w-72 h-72 bg-gradient-to-r from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl"
          animate={{ 
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[length:80px_80px]" />
        </div>
        
        {/* Top Gradient */}
        <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-b from-blue-500/1 to-transparent" />
        
        {/* Floating Dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/8 rounded-full"
              style={{
                left: `${15 + (i * 5)}%`,
                top: `${10 + (i * 4)}%`,
              }}
              animate={{
                opacity: [0.08, 0.15, 0.08],
                scale: [1, 1.2, 1],
                y: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container-custom py-8 sm:py-12 lg:py-16 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 sm:mb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 sm:mb-3 tracking-tight">IMPRESSNO</h3>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-3 sm:mb-4 shadow-sm" />
              </div>
              <p className="text-neutral-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base max-w-md">
                Where creativity and strategy meet. We create innovative software solutions that drive business growth
                while making a positive societal impact.
              </p>
              <div className="flex space-x-2 sm:space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center text-neutral-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl border border-blue-100/50 hover:border-transparent touch-target"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={18} className="sm:w-5 sm:h-5 transition-all duration-300" />
                    <span className="sr-only">Follow us on {social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
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
                    <h4 className="font-semibold text-neutral-900 text-xs sm:text-sm uppercase tracking-wider mb-1">{category}</h4>
                    <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-blue-400/60 to-cyan-400/60 rounded-full mb-3" />
                  </div>
                  <ul className="space-y-2 sm:space-y-2.5">
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
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full rounded-full" />
                          </span>
                          <ArrowUpRight size={12} className="sm:w-[14px] sm:h-[14px] ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-blue-500" />
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
          className="pt-4 sm:pt-6 border-t border-blue-100/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-8">
            <p className="text-xs sm:text-sm text-neutral-600 font-medium text-center">
              &copy; {currentYear} Impressno. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              {policyLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors duration-300 relative group font-medium touch-target"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full rounded-full" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
