"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoSection() {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const videoSectionRef = useRef(null);
  const videoCardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((st) => st.kill());

    const ctx = gsap.context(() => {
      // Set initial border radius for video card
      gsap.set(videoCardRef.current, {
        borderRadius: "48px",
      });

      // Hero CONTENT moves slowly upward (20px parallax) while hero stays sticky
      gsap.to(heroContentRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500",
          scrub: 1.5,
        },
      });

      // Video card border radius flattens as it scrolls up
      gsap.to(videoCardRef.current, {
        borderRadius: "24px",
        ease: "none",
        scrollTrigger: {
          trigger: videoSectionRef.current,
          start: "top 95%",
          end: "top 40%",
          scrub: 1.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section - STICKY so it stays while video scrolls over */}
      <section
        ref={heroRef}
        className="sticky top-0 flex flex-col items-center justify-center z-10 pt-40 pb-16"
      >
        <div
          ref={heroContentRef}
          className="container mx-auto px-4 lg:px-16 z-10 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <h1 className="font-outfit text-4xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.1] mb-6">
              Healthcare, built for <br />
              <span className="text-white/90">what comes next.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 font-public-sans font-light mb-10 leading-relaxed max-w-3xl"
          >
            GenAI Healthcare builds AI-native infrastructure for the next era of
            health.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <Link
              href="https://www.genaihealth.care/NxRing"
              className="group relative inline-flex items-center justify-center bg-[#5646a3] text-white px-10 py-5 rounded-full font-medium text-xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(86,70,163,0.5)] hover:shadow-[0_4px_10px_-2px_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(255,255,255,0.1),0_0_0_5px_rgba(98,20,217,0.32)] hover:backdrop-blur-[10px]"
            >
              <span className="font-outfit">Explore NexCura</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video Section - starts just below the fold, scrolls up over hero */}
      <section ref={videoSectionRef} className="relative w-full z-20">
        {/* Video Card - 400px mobile, 600px desktop */}
        <motion.div
          ref={videoCardRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="relative container mx-auto px-4 lg:px-16 overflow-hidden h-100 md:h-150"
        >
          {/* Video Background */}
          <div className="relative w-full h-full">
            <video
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-4xl"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent rounded-4xl"></div>
            {/* Content overlay */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <h3 className="text-3xl md:text-6xl lg:text-7xl text-white font-instrument-serif text-center max-w-4xl leading-tight px-6 drop-shadow-2xl">
                From data to intelligence.
              </h3>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
