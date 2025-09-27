"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"
import { Reveal } from "./reveal"

const teamMembers = [
  {
    id: "1",
    name: "Mrs. Venu Madhuri Ch",
    role: "CEO, Co-Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80&fm=webp",
    bio: "Full-stack developer with 10+ years of experience in building scalable software solutions.",
    specialties: ["Software Architecture", "Team Leadership", "Strategic Planning"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "2",
    name: "Cherukuri Ravindranadh",
    role: "Research Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80&fm=webp",
    bio: "PhD in Computer Science with expertise in AI/ML and emerging technology research.",
    specialties: ["AI/ML Research", "Innovation Strategy", "Technology Assessment"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "3",
    name: "Gokula Priya",
    role: "Societal Impact Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80&fm=webp",
    bio: "Social entrepreneur focused on creating technology solutions that drive positive change.",
    specialties: ["Social Impact", "Sustainable Development", "Community Engagement"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-white to-gray-50" id="team">
      <div className="container-custom">
        <Reveal>
          <div className="text-left mb-4 sm:mb-5 lg:mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-neutral-900 mb-2 sm:mb-3 font-bold leading-tight">
              Meet Our <span className="italic font-light text-rose-600">Team</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
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
          {teamMembers.map((member, index) => (
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

                    {/* Social Links - Appear on Hover */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <motion.a
                        href={member.social.linkedin}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-rose-600 transition-colors touch-target"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-purple-400 transition-colors touch-target"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </motion.a>
                      <motion.a
                        href={member.social.github}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-neutral-900 transition-colors touch-target"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-2.5 sm:p-3">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1">{member.name}</h3>
                    <p className="text-rose-600 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">{member.role}</p>
                    <p className="text-neutral-600 text-xs leading-relaxed mb-1.5 sm:mb-2">{member.bio}</p>

                    {/* Specialties */}
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Specialties</p>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-gray-100 text-neutral-700 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
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
