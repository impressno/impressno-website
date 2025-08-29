"use client"

import { useState } from "react"
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
      "Community Engagement",
      "Ethical Technology",
    ],
  },
]

export function ServicesBackgroundSection() {
  const [activeService, setActiveService] = useState("software")

  const activeServiceData =
    services.find((s) => s.id === activeService) || services[0]

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="services-bg">
      <div className="absolute inset-0 z-0">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="absolute inset-0"
            initial={{ opacity: service.id === activeService ? 1 : 0 }}
            animate={{ opacity: service.id === activeService ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={service.backgroundImage || "/placeholder.svg"}
              alt={`${service.name} background`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute top-[120px] left-0 right-0 z-10">
        <div className="container-custom text-white">
          <Reveal>
            <div>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-bold mb-6 text-7xl"
                >
                  <AnimatedText text={activeServiceData.name} delay={0.2} />
                </motion.h2>
              </AnimatePresence>
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                {activeServiceData.description}
              </p>
              <ul className="mt-8 space-y-3">
                {activeServiceData.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-lg">
                    <span className="inline-block w-2 h-2 rounded-full bg-white mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-custom">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  className={cn(
                    "px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md",
                    activeService === service.id
                      ? "bg-white text-neutral-900"
                      : "bg-white/20 text-white hover:bg-white/30",
                  )}
                  onClick={() => setActiveService(service.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service.name}
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
