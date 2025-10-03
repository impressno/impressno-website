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
    image: "/board/Madhuri.png",
    bio: "Visionary leader driving innovation and strategic growth at Impressno.",
    linkedin: "https://www.linkedin.com/in/madhuri-cherukuri-055031184/",
  },
  {
    id: "2",
    name: "Gokulapriya",
    role: "Founder",
    image: "/board/Gokulapriya.png",
    bio: "Strategic co-founder focused on building impactful technology solutions.",
    linkedin: "https://www.linkedin.com/in/gokulapriya-raman-04105754/",
  },
  {
    id: "3",
    name: "Bhuvana",
    role: "Co-founder",
    image: "/board/Bhuvana.png",
    bio: "Innovative co-founder dedicated to creating meaningful technological impact.",
    linkedin: "https://www.linkedin.com/in/bhuvana-jayabalan-a6a3207a/",
  },
  {
    id: "4",
    name: "Ravindranath",
    role: "Advisory Board",
    image: "/board/Ravindranath.png",
    bio: "Strategic advisor bringing deep industry expertise and guidance.",
    linkedin: "https://www.linkedin.com/in/ravindranath-cherukuri-3a651213/",
  },
  {
    id: "5",
    name: "Balamurugan",
    role: "Advisory Board",
    image: "/board/Balamurugan.png",
    bio: "Experienced advisor providing valuable insights and strategic direction.",
    linkedin: "https://www.linkedin.com/in/dr-balamurugan-m-896b4046/",
  },
]

export function TeamSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-16 bg-neutral-50" id="team">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-12">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Meet Our <span className="italic font-light text-neutral-700">Team</span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Meet the people behind our success. Our leadership team combines decades of industry experience with a passion for innovation and excellence.
            </p>
          </Reveal>
        </div>

        {/* Leadership Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.slice(0, 3).map((member, index) => (
              <Reveal key={member.id} delay={index * 0.15}>
                <motion.div
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center p-6 lg:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                    {/* Modern Avatar */}
                    <div className="relative inline-block mb-4">
                      <div className="relative w-32 h-32 lg:w-36 lg:h-36 rounded-2xl overflow-hidden bg-white shadow-lg">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 1024px) 128px, 144px"
                        />
                      </div>

                      {/* LinkedIn Icon */}
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-3 -right-3 w-10 h-10 bg-white rounded-xl shadow-lg border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-neutral-900 hover:border-neutral-900 transition-all duration-300"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={18} />
                      </motion.a>
                    </div>

                    {/* Member Info */}
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-2">{member.name}</h3>
                      <p className="text-neutral-800 font-semibold text-base lg:text-lg mb-4">{member.role}</p>
                      <p className="text-neutral-600 text-sm lg:text-base leading-relaxed max-w-sm mx-auto">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Advisory Board Section */}
        <div>
          <Reveal>
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">Advisory Board</h3>
              <div className="w-16 h-1 bg-neutral-900 mx-auto rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {teamMembers.slice(3, 5).map((member, index) => (
              <Reveal key={member.id} delay={(index + 3) * 0.15}>
                <motion.div
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-6 p-6 lg:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                    {/* Horizontal Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden bg-neutral-100 shadow-sm">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 1024px) 80px, 96px"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg lg:text-xl font-bold text-neutral-900 mb-1">{member.name}</h4>
                          <p className="text-neutral-800 font-semibold text-sm lg:text-base">{member.role}</p>
                        </div>

                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 hover:text-white hover:bg-neutral-900 transition-colors flex-shrink-0"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin size={16} />
                        </motion.a>
                      </div>

                      <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
