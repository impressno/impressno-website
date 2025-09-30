"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"

// Count-up animation component
function CountUpAnimation({ 
  target, 
  suffix = "", 
  duration = 1200 
}: { 
  target: number; 
  suffix?: string; 
  duration?: number 
}) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          const startTime = Date.now()
          const increment = target / (duration / 16) // Calculate increment per frame for consistent speed
          
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Linear progression for consistent speed
            const currentCount = Math.floor(progress * target)
            
            setCount(currentCount)
            
            if (progress >= 1) {
              clearInterval(timer)
              setCount(target)
            }
          }, 16) // 60fps for smooth animation
          
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasStarted, target, duration])

  // Fallback: Show target number if animation doesn't start within 2 seconds
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!hasStarted) {
        setCount(target)
      }
    }, 2000)

    return () => clearTimeout(fallbackTimer)
  }, [hasStarted, target])

  return (
    <div ref={ref} className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3 leading-none tracking-tight">
      {count}{suffix}
    </div>
  )
}

export function StatsSection() {
  const stats = [
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 25, suffix: "+", label: "Happy Clients" },
    { value: 5, suffix: "+", label: "Years Experience" }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-neutral-900 mb-4 sm:mb-6 font-bold leading-tight tracking-tight">
              Our <span className="italic font-light text-neutral-700">Impact</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              These numbers represent our commitment to delivering exceptional results and making a meaningful difference.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group text-center"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="bg-white/80 backdrop-blur-lg border border-neutral-200/50 rounded-3xl p-6 sm:p-7 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:border-neutral-300/70 relative overflow-hidden">
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/0 to-neutral-100/0 group-hover:from-neutral-50/50 group-hover:to-neutral-100/20 transition-all duration-500 rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Count-up number */}
                  <CountUpAnimation target={stat.value} suffix={stat.suffix} duration={1000} />
                  
                  {/* Label with professional typography */}
                  <div className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-800 tracking-wide leading-tight">
                    {stat.label}
                  </div>
                  
                  {/* Professional accent line */}
                  <motion.div 
                    className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-neutral-400 to-transparent mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    transition={{ duration: 1, delay: index * 0.3 + 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-neutral-100/30 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}