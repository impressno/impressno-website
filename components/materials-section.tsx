"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "software",
    name: "Software Solutions",
    description:
      "Custom software development tailored to your business needs. From web applications to mobile apps, we create scalable solutions that drive growth.",
    backgroundImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new-source_bloom_max_1x.jpg-t1V6yfeAZKKcEvWEkPn7Pfx7hkHDMf.jpeg",
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "API Integration",
      "Cloud Solutions",
    ],
  },
  {
    id: "research",
    name: "Research & Innovation",
    description:
      "Cutting-edge research and development to keep your business ahead of the curve. We explore emerging technologies and innovative approaches.",
    backgroundImage: "/lunar-gray-interior.png",
    features: [
      "Technology Research",
      "Market Analysis",
      "Innovation Strategy",
      "Proof of Concepts",
    ],
  },
  {
    id: "societal",
    name: "Societal Impact",
    description:
      "Technology solutions that create positive societal change. We focus on sustainable development and social responsibility in all our projects.",
    backgroundImage: "/martian-red-interior.png",
    features: [
      "Sustainable Development",
      "Social Impact Assessment",
      "Community / Outreach Engagement",
      "Skill Development and Training",
    ],
  },
]

export function ServicesBackgroundSection() {
  const [activeService, setActiveService] = useState("software")
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const activeServiceData =
    services.find((s) => s.id === activeService) || services[0]

  // Auto-cycle through services
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return

    intervalRef.current = setInterval(() => {
      setActiveService(current => {
        const currentIndex = services.findIndex(s => s.id === current)
        const nextIndex = (currentIndex + 1) % services.length
        setDirection(1) // Always go forward for auto-play
        return services[nextIndex].id
      })
    }, 6000) // Change every 6 seconds (longer for smoother experience)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, isPaused])

  const handleServiceChange = (newServiceId: string) => {
    if (newServiceId === activeService) return

    const currentIndex = services.findIndex((s) => s.id === activeService)
    const newIndex = services.findIndex((s) => s.id === newServiceId)

    // Determine direction: positive for right, negative for left
    setDirection(newIndex > currentIndex ? 1 : -1)
    setActiveService(newServiceId)

    // Pause auto-play temporarily when user manually clicks
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume after 10 seconds
  }

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="services-bg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{
                opacity: service.id === activeService ? 1 : 0
              }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Image
                src={service.backgroundImage || "/placeholder.svg"}
                alt={`${service.name} background`}
                fill
                className="object-cover will-change-auto"
                priority={service.id === activeService}
                quality={90}
                loading={service.id === activeService ? "eager" : "lazy"}
              />
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundColor: activeService === 'software' ? 'rgba(0,0,0,0.35)' :
              activeService === 'research' ? 'rgba(0,0,0,0.45)' :
                'rgba(0,0,0,0.4)'
          }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      <div className="absolute top-16 sm:top-20 lg:top-[120px] left-0 right-0 z-10 px-4 sm:px-6">
        <div className="container-custom text-white">
          <Reveal>
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: -10
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <h2 className="font-bold mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight will-change-auto">
                      {activeServiceData.name}
                    </h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl mb-6 sm:mb-8">
                      {activeServiceData.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <ul className="space-y-3 sm:space-y-4">
                      {activeServiceData.features.map((feature: string, idx: number) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-sm sm:text-base lg:text-lg will-change-auto"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 0.7 + (idx * 0.1),
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1]
                          }}
                        >
                          <motion.span
                            className="inline-block w-2 h-2 rounded-full bg-white mr-3 flex-shrink-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              delay: 0.75 + (idx * 0.1),
                              duration: 0.3,
                              ease: [0.25, 0.1, 0.25, 1]
                            }}
                          />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-10 px-4 sm:px-6">
        <div className="container-custom">
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  className={cn(
                    "px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium backdrop-blur-md text-sm sm:text-base touch-target relative overflow-hidden border-2 transition-all duration-300",
                    activeService === service.id
                      ? "bg-white text-neutral-900 border-white shadow-2xl"
                      : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50",
                  )}
                  onClick={() => handleServiceChange(service.id)}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    backgroundColor: activeService === service.id ? "#ffffff" : "rgba(255,255,255,0.1)",
                    color: activeService === service.id ? "#171717" : "#ffffff",
                    borderColor: activeService === service.id ? "#ffffff" : "rgba(255,255,255,0.3)",
                    boxShadow: activeService === service.id ?
                      "0 25px 50px rgba(0,0,0,0.4)" :
                      "0 5px 15px rgba(0,0,0,0.1)"
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <motion.span
                    className="relative z-10"
                    animate={{
                      y: activeService === service.id ? 0 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.name}
                  </motion.span>

                  {/* Progress indicator for active service */}
                  {activeService === service.id && !isPaused && isAutoPlaying && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-white/50 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 6,
                        ease: "linear"
                      }}
                      key={`progress-${activeService}`}
                    />
                  )}

                  {/* Ripple effect on click */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: activeService === service.id ? 1.2 : 0,
                      opacity: activeService === service.id ? 0.2 : 0
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  />
                </motion.button>
              ))}
            </div>
          </Reveal>

          {/* Auto-play indicator */}
          <motion.div
            className="flex justify-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-white/50"
                animate={{
                  opacity: isPaused ? [0.3, 0.5, 0.3] : [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              />
              {/* <motion.span
                animate={{
                  opacity: isPaused ? 0.6 : 0.8
                }}
                transition={{ duration: 0.3 }}
              >
                {isPaused ? "Paused" : "Auto-playing"}
              </motion.span> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
