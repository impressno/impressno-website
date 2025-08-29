"use client"

import { motion } from "framer-motion"
import { Code, Search, Users, ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

const services = [
  {
    id: "software",
    title: "Software Solutions",
    description: "Custom software development tailored to your business needs. From web applications to mobile apps, we create scalable solutions that drive growth.",
    icon: Code,
    features: ["Custom Web Applications", "Mobile App Development", "API Integration", "Cloud Solutions"],
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "research",
    title: "Research & Innovation",
    description: "Cutting-edge research and development to keep your business ahead of the curve. We explore emerging technologies and innovative approaches.",
    icon: Search,
    features: ["Technology Research", "Market Analysis", "Innovation Strategy", "Proof of Concepts"],
    color: "green",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "societal",
    title: "Societal Impact",
    description: "Technology solutions that create positive societal change. We focus on sustainable development and social responsibility in all our projects.",
    icon: Users,
    features: ["Sustainable Development", "Social Impact Assessment", "Community Engagement", "Ethical Technology"],
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Our Services
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive solutions across three key areas, ensuring your digital transformation 
              is both innovative and impactful.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className={`inline-flex items-center text-sm font-medium text-${service.color}-600 hover:text-${service.color}-700 transition-colors group/btn`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
