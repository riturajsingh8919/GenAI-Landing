"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, CheckCircle } from "lucide-react";

// Helper to parse markdown-style bold and italic
function parseMarkdown(text) {
  if (!text) return text;

  const parts = [];
  let remaining = text;
  let key = 0;

  // Match **bold** and *italic*
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Check if it's bold or italic
    if (match[2]) {
      // Bold (**text**)
      parts.push(
        <strong key={key++} className="font-semibold text-white">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      // Italic (*text*)
      parts.push(
        <em key={key++} className="italic">
          {match[3]}
        </em>
      );
    }

    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function BlogDetail({ post }) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Purple Gradient Glow at Top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(86, 70, 163, 0.4) 0%, rgba(86, 70, 163, 0.15) 35%, rgba(86, 70, 163, 0.05) 55%, transparent 75%)",
        }}
      />

      {/* Article Header */}
      <article className="relative z-10 pt-32 md:pt-40 pb-16">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <span className="inline-block bg-[#5646a3]/80 text-white text-sm font-outfit font-medium px-4 py-1.5 rounded-full mb-6">
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="font-outfit text-4xl md:text-5xl text-white leading-[1.15] mb-8"
          >
            {post.title}
          </motion.h1>

          {/* Author and Read Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-10"
          >
            {/* Author Info */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 font-outfit text-sm">
                Written by
              </span>
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#5646a3]/30">
                  {post.author.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={1904}
                      height={2856}
                      className="object-top object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-xs font-medium">
                      {post.author.name.charAt(0)}
                    </div>
                  )}
                </div>
                <span className="text-white font-outfit text-sm font-medium">
                  {post.author.name}
                </span>
              </div>
            </div>

            {/* Read Time */}
            <span className="text-white/70 font-outfit text-sm border border-white/20 px-3 py-1 rounded-full">
              {post.readTime}
            </span>
          </motion.div>
        </header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="max-w-4xl mx-auto px-4 lg:px-8 mb-10"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Excerpt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="max-w-4xl mx-auto px-4 lg:px-8 mb-12"
        >
          <p className="text-gray-400 font-public-sans text-lg italic">
            {post.excerpt}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          className="max-w-4xl mx-auto px-4 lg:px-8"
        >
          {post.content.map((section, index) => (
            <ContentSection key={index} section={section} index={index} />
          ))}
        </motion.div>

        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto px-4 lg:px-8 mt-16 pt-8 border-t border-white/10"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-outfit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </motion.div>
      </article>
    </main>
  );
}

function ContentSection({ section, index }) {
  const delay = 0.1 * index;

  if (section.type === "disclaimer") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl"
      >
        <p className="text-gray-400 font-public-sans text-sm leading-relaxed italic">
          {section.text}
        </p>
      </motion.div>
    );
  }

  if (section.type === "numbered-section") {
    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="mb-12"
      >
        {/* Numbered Heading */}
        <h2 className="font-outfit text-2xl md:text-4xl text-white mb-6">
          {section.number}. {section.title}
        </h2>

        {/* Paragraphs */}
        {section.paragraphs?.map((para, pIndex) => (
          <p
            key={pIndex}
            className={`font-public-sans text-base md:text-lg leading-relaxed mb-4 ${
              para.highlight
                ? "text-gray-300 italic"
                : "text-gray-400"
            }`}
          >
            {parseMarkdown(para.text)}
          </p>
        ))}

        {/* Nutrients (for section 5) */}
        {section.nutrients && (
          <ul className="mb-4 space-y-2">
            {section.nutrients.map((nutrient, nIndex) => (
              <li
                key={nIndex}
                className="font-public-sans text-base md:text-lg text-gray-400"
              >
                <strong className="text-white font-semibold">
                  {nutrient.name}
                </strong>{" "}
                — {nutrient.description}
              </li>
            ))}
          </ul>
        )}

        {section.afterNutrients && (
          <p className="font-public-sans text-base md:text-lg text-gray-400 leading-relaxed mb-4">
            {section.afterNutrients}
          </p>
        )}

        {/* Subheading */}
        {section.subheading && (
          <p className="font-outfit text-white text-base md:text-lg font-medium mt-6 mb-3">
            {section.subheading}
          </p>
        )}

        {/* List */}
        {section.list && (
          <ul className="space-y-2 mb-4">
            {section.list.map((item, lIndex) => (
              <li
                key={lIndex}
                className="font-public-sans text-base md:text-lg text-gray-400 flex items-start gap-3"
              >
                <span className="text-[#5646a3]"><CheckCircle/></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Note */}
        {section.note && (
          <p className="font-public-sans text-base text-gray-500 italic mt-4">
            {section.note}
          </p>
        )}
      </motion.section>
    );
  }

  // Regular section
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-12"
    >
      {/* Section Heading */}
      {section.title && (
        <h2 className="font-outfit text-2xl md:text-3xl text-white mb-6">
          {section.title}
        </h2>
      )}

      {/* Paragraphs */}
      {section.paragraphs?.map((para, pIndex) => (
        <p
          key={pIndex}
          className={`font-public-sans text-base md:text-lg leading-relaxed mb-4 ${
            para.highlight ? "text-gray-300 italic" : "text-gray-400"
          }`}
        >
          {parseMarkdown(para.text)}
        </p>
      ))}

      {/* List */}
      {section.list && (
        <ul className="space-y-2 mb-4">
          {section.list.map((item, lIndex) => (
            <li
              key={lIndex}
              className="font-public-sans text-base md:text-lg text-gray-400 flex items-start gap-3"
            >
              <span className="text-[#5646a3]"><CheckCircle/></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* After List */}
      {section.afterList?.map((text, aIndex) => (
        <p
          key={aIndex}
          className="font-public-sans text-base md:text-lg text-gray-400 leading-relaxed mb-4"
        >
          {text}
        </p>
      ))}
    </motion.section>
  );
}
