"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-40">
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h1 className="font-outfit text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.1] mb-6">
            Healthcare, built for <br />
            <span className="text-white/90">what comes next.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-400 font-public-sans font-light mb-10 leading-relaxed"
        >
          GenAI Healthcare builds AI-native infrastructure for the next era of health.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <Link
            href="/explore"
            className="group relative inline-flex items-center justify-center bg-[#5646a3] text-white px-8 py-4 rounded-full font-medium text-xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(86,70,163,0.5)] hover:shadow-[0_4px_10px_-2px_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(255,255,255,0.1),0_0_0_5px_rgba(98,20,217,0.32)] hover:backdrop-blur-[10px]"
          >
            <span className="font-outfit">Explore NexCura</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
