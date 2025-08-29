"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Target, Lightbulb, Heart, Recycle } from "lucide-react"
import { Reveal } from "./reveal"

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50])

  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We align technology solutions with your business objectives, ensuring every project delivers measurable value.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Embracing cutting-edge technologies and methodologies to keep your business ahead of the competition.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through transparent communication and dedicated support.",
    },
    {
      icon: Recycle,
      title: "Sustainable Approach",
      description: "Creating solutions that not only meet today's needs but are built to adapt and grow with your business.",
    },
  ]

  return (
    <section id="about" ref={containerRef} className="py-20 lg:py-32 bg-neutral-50">
      <div className="container-custom">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Text Content */}
          <motion.div style={{ y: textY }}>
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                About Impressno
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl text-neutral-600 mb-6 leading-relaxed">
                We are a forward-thinking software consultancy that believes in the power of technology
                to transform businesses and create positive societal impact.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Our sustainable model focuses on tailoring applications to the unique needs of each customer,
                while carefully managing their digital footprints. We don't just build software – we craft
                digital experiences that drive growth, efficiency, and meaningful change.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="px-8 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Story
                </motion.button>
                <motion.button
                  className="px-8 py-3 border border-neutral-300 text-neutral-900 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Meet the Team
                </motion.button>
              </div>
            </Reveal>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            style={{ y: imageY }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration and innovation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
