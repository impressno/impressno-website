"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { QuickLookModal } from "./quick-look-modal"
import { Reveal } from "./reveal"

const featuredProducts = [
  {
    id: "core-1",
    name: "Strategic Focus",
    image: "/green-velvet-modular-chair.png",
    badge: "New" as const,
    materials: [
      "We align technology solutions with your business objectives, ensuring every project delivers measurable value."
    ],
    swatches: [],
    quickLookImages: [
      "/green-velvet-modular-chair.png",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    dimensions: "",
  },
  {
    id: "core-2",
    name: "Innovation First",
    image: "/terracotta-cloud-chair.png",
    badge: "New" as const,
    materials: [
      "Embracing cutting-edge technologies and methodologies to keep your business ahead of the competition."
    ],
    swatches: [],
    quickLookImages: [
      "/terracotta-cloud-chair.png",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    dimensions: "",
  },
  {
    id: "core-3",
    name: "Client-Centric",
    image: "/sage-copper-lounge-chair.png",
    badge: "Limited" as const,
    materials: [
      "Your success is our priority. We build lasting partnerships through transparent communication and dedicated support."
    ],
    swatches: [],
    quickLookImages: [
      "/sage-copper-lounge-chair.png",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    dimensions: "",
  },
]

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleQuickLook = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32" id="featured-products">
      <div className="container-custom">
        <Reveal>
          <div className="text-left mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-neutral-900 mb-3 sm:mb-4 font-bold leading-tight">
              Our <span className="italic font-light">Core Values</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl">
              These principles guide everything we do, from how we approach projects to how we build relationships with our clients.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  },
                },
              }}
            >
              <Reveal delay={index * 0.1}>
                <ProductCard product={product} onQuickLook={handleQuickLook} />
              </Reveal>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <QuickLookModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
