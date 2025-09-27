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
    <section id="about" ref={containerRef} className="pt-6 pb-8 sm:pt-8 sm:pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-8 -left-32 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-rose-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-8 -right-32 w-56 h-56 lg:w-72 lg:h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-gradient-to-r from-green-500/3 to-rose-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12 items-stretch mb-8 sm:mb-12 lg:mb-16">
          {/* Text Content */}
          <motion.div style={{ y: textY }} className="order-2 lg:order-1 flex flex-col justify-center">
            <Reveal>
              <div className="mb-3 lg:mb-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-2 lg:mb-3 leading-tight">
                  Where <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">Innovation</span> Meets Impact
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm sm:text-base text-neutral-600 mb-2 lg:mb-3 leading-relaxed">
                We are a forward-thinking software consultancy that believes in the power of technology
                to transform businesses and create positive societal impact.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xs sm:text-sm text-neutral-600 mb-4 lg:mb-5 leading-relaxed">
                Our sustainable model focuses on tailoring applications to the unique needs of each customer,
                while carefully managing their digital footprints. We don't just build software – we craft
                digital experiences that drive growth, efficiency, and meaningful change.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-2">
                <motion.button
                  className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-rose-600 to-purple-600 text-white rounded-lg font-medium hover:from-rose-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg text-center text-xs sm:text-sm"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Story
                </motion.button>
                <motion.button
                  className="px-4 sm:px-5 py-2 sm:py-2.5 border border-neutral-300 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-300 text-center text-xs sm:text-sm"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Meet the Team
                </motion.button>
              </div>
            </Reveal>
          </motion.div>

          {/* Enhanced Image with overlays */}
          <motion.div
            className="relative h-[240px] sm:h-[280px] lg:h-full min-h-[300px] rounded-lg lg:rounded-xl overflow-hidden group order-1 lg:order-2"
            style={{ y: imageY }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration and innovation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 to-purple-600/10" />

            {/* Floating stats */}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                <motion.div
                  className="bg-white/20 backdrop-blur-md rounded-md p-1.5 sm:p-2 text-center border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white font-bold text-xs sm:text-sm">50+</div>
                  <div className="text-white/80 text-xs">Projects</div>
                </motion.div>
                <motion.div
                  className="bg-white/20 backdrop-blur-md rounded-md p-1.5 sm:p-2 text-center border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white font-bold text-xs sm:text-sm">25+</div>
                  <div className="text-white/80 text-xs">Clients</div>
                </motion.div>
                <motion.div
                  className="bg-white/20 backdrop-blur-md rounded-md p-1.5 sm:p-2 text-center border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white font-bold text-xs sm:text-sm">5+</div>
                  <div className="text-white/80 text-xs">Years</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}
