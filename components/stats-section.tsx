"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"

export function StatsSection() {
  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container-custom">
        <Reveal>
          <div className="text-left mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-neutral-900 mb-2 sm:mb-3 font-bold leading-tight">
              Our <span className="italic font-light">Impact</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
              These numbers represent our commitment to delivering exceptional results and making a meaningful difference.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            className="group text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="bg-white/70 backdrop-blur-sm border border-black/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="text-7xl font-black text-black mb-4 leading-none">50+</div>
              <div className="text-black/80 text-lg font-medium tracking-wide">Projects Delivered</div>
              <div className="mt-4 w-12 h-0.5 bg-black mx-auto opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          <motion.div
            className="group text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="bg-white/70 backdrop-blur-sm border border-black/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="text-7xl font-black text-black mb-4 leading-none">25+</div>
              <div className="text-black/80 text-lg font-medium tracking-wide">Happy Clients</div>
              <div className="mt-4 w-12 h-0.5 bg-black mx-auto opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          <motion.div
            className="group text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="bg-white/70 backdrop-blur-sm border border-black/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="text-7xl font-black text-black mb-4 leading-none">5+</div>
              <div className="text-black/80 text-lg font-medium tracking-wide">Years Experience</div>
              <div className="mt-4 w-12 h-0.5 bg-black mx-auto opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}