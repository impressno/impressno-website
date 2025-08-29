"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"

const testimonials = [
  {
    id: "t1",
    name: "Alex P.",
    image: "/modern-armchair-pillows.png",
    quote: "The team delivered our project on time and exceeded expectations. Their software solutions are top-notch!",
    role: "Startup Founder",
  },
  {
    id: "t2",
    name: "Maria S.",
    image: "/modular-cushion-bench.png",
    quote: "Impressed by their research insights and innovative approach. We gained a real competitive edge.",
    role: "Product Manager",
  },
  {
    id: "t3",
    name: "David L.",
    image: "/cloud-white-sofa.png",
    quote: "Their commitment to societal impact is inspiring. We loved collaborating on our sustainability project!",
    role: "NGO Director",
  },
  {
    id: "t4",
    name: "Sophie W.",
    image: "/distressed-artistic-chair.png",
    quote: "Professional, creative, and always responsive. Highly recommend for any tech challenge.",
    role: "Business Owner",
  },
  {
    id: "t5",
    name: "Chris T.",
    image: "/green-modular-loveseat.png",
    quote: "The process was smooth and transparent. We felt supported every step of the way.",
    role: "Operations Lead",
  },
  {
    id: "t6",
    name: "Priya R.",
    image: "/braided-rope-loveseat.png",
    quote: "Their expertise in cloud and APIs helped us scale fast. Great results!",
    role: "CTO",
  },
  {
    id: "t7",
    name: "Liam F.",
    image: "/colorful-patchwork-sofa.png",
    quote: "A rare blend of technical skill and human touch. We’ll be back for future projects.",
    role: "Marketing Lead",
  },
  {
    id: "t8",
    name: "Elena M.",
    image: "/minimalist-boucle-loveseat.png",
    quote: "They made complex ideas simple and actionable. Our team learned a lot!",
    role: "Innovation Strategist",
  },
  {
    id: "t9",
    name: "Omar Z.",
    image: "/abstract-artistic-sofa.png",
    quote: "Truly collaborative and always thinking ahead. Our partnership was a success.",
    role: "Program Manager",
  },
  {
    id: "t10",
    name: "Grace K.",
    image: "/textured-cream-loveseat.png",
    quote: "We saw real impact from their work. Highly recommended for mission-driven teams.",
    role: "Social Enterprise CEO",
  },
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  const itemWidth = 320 // 320px (w-80) + 32px gap = 352px per item
  const totalWidth = testimonials.length * (itemWidth + 32) - 32 // subtract last gap
  const containerWidth = typeof window !== "undefined" ? window.innerWidth : 1200
  const maxDrag = Math.max(0, totalWidth - containerWidth + 48) // add padding

  return (
    <section ref={containerRef} className="py-20 lg:py-32 overflow-hidden">
      <div className="mb-12">
        <Reveal>
          <div className="container-custom text-center">
            <h2 className="text-neutral-900 mb-4 text-6xl font-normal">Collections</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our curated collections, each telling a unique story of craftsmanship and design philosophy.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-8 px-6"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.1}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex-shrink-0 w-80 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ filter: "blur(1px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                </motion.div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <motion.div
                    className="text-white"
                    initial={{ opacity: 0.85 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-lg font-medium mb-4">“{testimonial.quote}”</p>
                    <div className="mt-2">
                      <span className="block text-base font-bold">{testimonial.name}</span>
                      <span className="block text-xs opacity-80">{testimonial.role}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-neutral-500">← Drag to explore testimonials →</p>
      </div>
    </section>
  )
}
