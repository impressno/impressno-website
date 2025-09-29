"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import { Reveal } from "./reveal"

const teamMembers = [
  {
    id: "1",
    name: "Madhuri",
    role: "CEO, Co-founder",
    image: "/board/Madhuri.jpg",
    bio: "Visionary leader driving innovation and strategic growth at Impressno.",
    linkedin: "https://www.linkedin.com/in/madhuri-cherukuri-055031184/",
  },
  {
    id: "2",
    name: "Gokulapriya",
    role: "Co-founder",
    image: "/board/Gokulapriya.jpg",
    bio: "Strategic co-founder focused on building impactful technology solutions.",
    linkedin: "https://www.linkedin.com/in/gokulapriya-raman-04105754/",
  },
  {
    id: "3",
    name: "Bhuvana",
    role: "Co-founder",
    image: "/board/Bhuvana.jpg",
    bio: "Innovative co-founder dedicated to creating meaningful technological impact.",
    linkedin: "https://www.linkedin.com/in/bhuvana-jayabalan-a6a3207a/",
  },
  {
    id: "4",
    name: "Ravindranath",
    role: "Advisory Board",
    image: "/board/Ravindranath.jpeg",
    bio: "Strategic advisor bringing deep industry expertise and guidance.",
    linkedin: "https://www.linkedin.com/in/ravindranath-cherukuri-3a651213/",
  },
  {
    id: "5",
    name: "Balamurugan",
    role: "Advisory Board",
    image: "/board/Balamurugan.jpg",
    bio: "Experienced advisor providing valuable insights and strategic direction.",
    linkedin: "https://www.linkedin.com/in/dr-balamurugan-m-896b4046/",
  },
]

export function TeamSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50" id="team">
      <div className="container-custom">
        <Reveal>
          <div className="text-left mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-neutral-900 mb-2 sm:mb-3 font-bold leading-tight">
              Meet Our <span className="italic font-light text-rose-600">Team</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
              Our diverse team of experts brings together creativity, technical excellence, and a passion for
              making a positive impact through technology.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* First row - 3 co-founders */}
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div
              key={member.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
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
                <div className="group relative bg-white overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Member Image */}
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* LinkedIn Link - Appears on Hover */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-rose-600 transition-colors touch-target"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-2.5 sm:p-3">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1">{member.name}</h3>
                    <p className="text-rose-600 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">{member.role}</p>
                    <p className="text-neutral-600 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row - 2 advisory board members */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-5 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {teamMembers.slice(3, 5).map((member, index) => (
            <motion.div
              key={member.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
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
              <Reveal delay={(index + 3) * 0.1}>
                <div className="group relative bg-white overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Member Image */}
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* LinkedIn Link - Appears on Hover */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-rose-600 transition-colors touch-target"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-2.5 sm:p-3">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1">{member.name}</h3>
                    <p className="text-rose-600 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">{member.role}</p>
                    <p className="text-neutral-600 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
