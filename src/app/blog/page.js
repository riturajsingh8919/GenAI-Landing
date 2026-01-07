"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "5 Evidence-Based Ways to Boost Testosterone Levels in Men",
    category: "Men's Health",
    image: "/blog-01.png",
    slug: "boost-testosterone-levels",
  },
  {
    id: 2,
    title: "The Science of Sleep: How Quality Rest Transforms Your Health",
    category: "Wellness",
    image: "/blog-01.png",
    slug: "science-of-sleep",
  },
];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Purple Gradient Glow at Top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(86, 70, 163, 0.35) 0%, rgba(86, 70, 163, 0.15) 30%, rgba(86, 70, 163, 0.05) 50%, transparent 70%)",
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-16 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-outfit text-5xl md:text-7xl text-white font-thin mb-6"
        >
          The Blog
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 font-public-sans font-light max-w-xl leading-relaxed"
        >
          Expert insights on health, performance, and longevity — grounded in
          data, science, and real-world experience.
        </motion.p>
      </section>

      {/* Blog Cards Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 lg:px-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.7 + index * 0.1,
              }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={3195}
                    height={1535}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Title */}
                <h2 className="font-outfit text-lg md:text-xl font-medium text-white mb-2 leading-snug group-hover:text-gray-200 transition-colors duration-200">
                  {post.title}
                </h2>

                {/* Category */}
                <span className="font-outfit text-base text-gray-500">
                  {post.category}
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}