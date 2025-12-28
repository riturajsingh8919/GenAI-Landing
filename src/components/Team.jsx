"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ramesh Sundarajan",
    role: "Co-Founder & CEO",
    image: "/team/ramesh.webp",
  },
  {
    name: "Kalyan Gudladana",
    role: "Co-Founder & CTO",
    image: "/team/kalyan.webp",
  },
  {
    name: "Daniel Botelho, MD",
    role: "Co-Founder & CMO",
    image: "/team/daniel.webp",
  },
  {
    name: "James Porter",
    role: "Chief of Staff",
    image: "/team/james.webp",
  },
  {
    name: "Roshan Rahamathullah",
    role: "Executive Director of Sales",
    image: "/team/roshan.webp",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Team() {
  return (
    <section className="py-20 md:py-32" id="team">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-outfit text-4xl md:text-5xl lg:text-6xl text-white mb-12 md:mb-16"
        >
          Meet the team.
        </motion.h2>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-4/5 overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Member Info */}
              <div className="space-y-1">
                <h3 className="font-outfit text-lg md:text-2xl text-white font-medium">
                  {member.name}
                </h3>
                <p className="font-public-sans text-sm md:text-base text-gray-400">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}