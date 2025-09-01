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
    <section id="about" ref={containerRef} className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 -left-40 w-60 h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-40 w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-green-500/3 to-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch mb-12 sm:mb-16 lg:mb-24">
          {/* Text Content */}
          <motion.div style={{ y: textY }} className="order-2 lg:order-1 flex flex-col justify-center">
            <Reveal>
              <div className="mb-4 lg:mb-6">
                <span className="inline-block px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-3 lg:mb-4">
                  About Impressno
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 lg:mb-4 leading-tight">
                  Where <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Innovation</span> Meets Impact
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-neutral-600 mb-3 lg:mb-4 leading-relaxed">
                We are a forward-thinking software consultancy that believes in the power of technology
                to transform businesses and create positive societal impact.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base text-neutral-600 mb-5 lg:mb-6 leading-relaxed">
                Our sustainable model focuses on tailoring applications to the unique needs of each customer,
                while carefully managing their digital footprints. We don't just build software – we craft
                digital experiences that drive growth, efficiency, and meaningful change.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg text-center text-sm sm:text-base"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Story
                </motion.button>
                <motion.button
                  className="px-5 sm:px-6 py-2.5 sm:py-3 border border-neutral-300 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-300 text-center text-sm sm:text-base"
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
            className="relative h-[320px] sm:h-[360px] lg:h-full min-h-[400px] rounded-xl lg:rounded-2xl overflow-hidden group order-1 lg:order-2"
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
            
            {/* Floating stats */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-md p-2 sm:p-3 text-center border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white font-bold text-sm sm:text-base">50+</div>
                  <div className="text-white/80 text-xs">Projects</div>
                </motion.div>
                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-md p-2 sm:p-3 text-center border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white font-bold text-sm sm:text-base">25+</div>
                  <div className="text-white/80 text-xs">Clients</div>
                </motion.div>
                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-md p-2 sm:p-3 text-center border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white font-bold text-sm sm:text-base">5+</div>
                  <div className="text-white/80 text-xs">Years</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-0">
          <Reveal>
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <span className="inline-block px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Our Core Values
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
                What <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Drives</span> Us
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                These principles guide everything we do, from how we approach projects to how we build relationships with our clients.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 h-full shadow-md border border-neutral-100 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="relative inline-flex">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-neutral-600 leading-relaxed text-xs sm:text-sm">
                    {value.description}
                  </p>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-500/20 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
