"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b border-white/[0.02]",
        isScrolled ? "bg-white/[0.02]" : "bg-white/[0.02]",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-12 lg:h-16 relative">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <a
              href="#"
              className="flex items-center gap-3 group"
              aria-label="Impressno Home"
            >
              <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                <Image
                  src="/impressno-logo.svg"
                  alt="Impressno Logo"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-110"
                />
              </div>
              <span
                className={cn(
                  "text-xl lg:text-2xl font-bold tracking-tight transition-colors",
                  isScrolled ? "text-neutral-900 hover:text-neutral-700" : "text-white hover:text-white/80",
                )}
              >
                IMPRESSNO
              </span>
            </a>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href.substring(1))
                }}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
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

          {/* Mobile menu button - placeholder for future implementation */}
          <div className="md:hidden">
            <motion.button
              className={cn(
                "p-2 rounded-md transition-colors",
                isScrolled ? "text-neutral-900" : "text-white"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
