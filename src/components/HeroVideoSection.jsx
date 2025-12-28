"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoSection() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline that animates both elements
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=250vh", // Very long scroll distance for slower animation
          scrub: 1.5, // Increased scrub for smoother/slower animation
          pin: true,
          anticipatePin: 1,
        },
      })
      .to(heroRef.current, {
        y: -80, // Hero moves 80px slowly
        ease: "none",
      }, 0)
      .to(videoRef.current, {
        y: "-70vh", // Video moves up slower to overlap hero
        ease: "none",
      }, 0);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex flex-col items-center justify-center pt-40 pb-20">
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

      {/* Video Section */}
      <section ref={videoRef} className="relative w-full overflow-hidden bg-background z-50">
        {/* Video Card */}
        <div className="relative w-full max-w-[90%] mx-auto h-[400px] md:h-[600px] rounded-[30px] overflow-hidden group">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full bg-[#1a0b2e]">
            <video
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <h3 className="text-4xl md:text-8xl text-white font-instrument-serif text-center max-w-4xl leading-tight px-4 drop-shadow-lg">
              From data to intelligence.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
