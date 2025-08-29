"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"
import { Reveal } from "./reveal"

const teamMembers = [
  {
    id: "1",
    name: "Alex Chen",
    role: "CEO & Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
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
    name: "Sarah Johnson",
    role: "Research Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
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
    name: "Marcus Rodriguez",
    role: "Societal Impact Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50" id="team">
      <div className="container-custom">
        <Reveal>
          <div className="text-left mb-16">
            <h2 className="text-4xl text-neutral-900 mb-4 lg:text-6xl font-bold">
              Meet Our <span className="italic font-light text-blue-600">Team</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
              Our diverse team of experts brings together creativity, technical excellence, and a passion for 
              making a positive impact through technology.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <div className="group relative bg-white overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Member Image */}
                  <div className="relative overflow-hidden aspect-[4/5]">
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Social Links - Appear on Hover */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <motion.a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-blue-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={18} />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter size={18} />
                      </motion.a>
                      <motion.a
                        href={member.social.github}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-neutral-900 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    
                    {/* Specialties */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Specialties</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-neutral-700 text-xs rounded-full"
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
