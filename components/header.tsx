"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { X, Menu } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  const navItems = [
    { name: "Services", href: "#services-bg" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "backdrop-blur-md border-b border-white/[0.02]",
          isScrolled ? "bg-white/90" : "bg-black/20",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20 relative">
            {/* Logo */}
            <motion.div className="flex-shrink-0 z-10" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <a
                href="#"
                className="flex items-center gap-2 sm:gap-3 group"
                aria-label="Impressno Home"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                  <Image
                    src="/impressno-logo.svg"
                    alt="Impressno Logo"
                    fill
                    className="object-contain transition-transform duration-200 group-hover:scale-110"
                  />
                </div>
                <span
                  className={cn(
                    "text-base sm:text-lg lg:text-xl font-bold tracking-tight transition-colors",
                    isScrolled ? "text-neutral-900 hover:text-neutral-700" : "text-white hover:text-white/80",
                  )}
                >
                  IMPRESSNO
                </span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href.substring(1))
                  }}
                  className={cn(
                    "text-sm lg:text-base font-medium transition-colors duration-200",
                    isScrolled
                      ? "text-neutral-700 hover:text-neutral-900"
                      : "text-white/90 hover:text-white"
                  )}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden z-10">
              <motion.button
                className={cn(
                  "relative p-2 rounded-lg transition-all duration-200 touch-manipulation mobile-button",
                  "bg-white/10 backdrop-blur-sm border border-white/20",
                  isScrolled 
                    ? "text-neutral-900 bg-neutral-100 border-neutral-200 hover:bg-neutral-200" 
                    : "text-white bg-white/10 border-white/20 hover:bg-white/20"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] md:hidden mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/60 mobile-nav-backdrop" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-white mobile-nav-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-200 bg-gradient-to-r from-neutral-50 to-white">
                  <div className="flex items-center gap-3">
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8">
                      <Image
                        src="/impressno-logo.svg"
                        alt="Impressno Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-neutral-900">
                      IMPRESSNO
                    </span>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-all duration-200 touch-manipulation mobile-button"
                    aria-label="Close menu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 sm:px-6 py-6 overflow-y-auto">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(item.href.substring(1))
                          }}
                          className="group flex items-center px-4 py-3 text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all duration-200 touch-manipulation mobile-button"
                        >
                          <span className="relative">
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full rounded-full" />
                          </span>
                          <motion.span
                            className="ml-auto text-neutral-400 group-hover:text-blue-500"
                            initial={{ x: -10, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-4 sm:p-6 border-t border-neutral-100 bg-neutral-50">
                  <p className="text-xs text-neutral-500 text-center">
                    © 2025 Impressno. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
