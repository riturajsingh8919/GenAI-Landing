"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);
  const circumference = 2 * Math.PI * 24;

  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    
    // Direct DOM update for instant feedback - no React re-render needed
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = `${circumference * (1 - progress)}`;
    }
    
    // Only update visibility state when threshold is crossed
    const shouldBeVisible = scrollTop > 300;
    setIsVisible(prev => prev !== shouldBeVisible ? shouldBeVisible : prev);
  }, [circumference]);

  useEffect(() => {
    // Initial update
    updateProgress();
    
    // Use requestAnimationFrame for smooth updates
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-[#5646a3]/20 blur-xl scale-150 group-hover:bg-[#5646a3]/30 transition-all duration-300" />
          
          {/* Progress ring container */}
          <div className="relative w-14 h-14">
            {/* Background circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2.5"
              />
              {/* Progress circle - no CSS transition for instant updates */}
              <circle
                ref={circleRef}
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="#5646a3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
              />
            </svg>
            
            {/* Button inner */}
            <div className="absolute inset-1 rounded-full bg-[#0b101b]/90 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(86,70,163,0.5)] group-hover:shadow-[0_0_40px_-5px_rgba(86,70,163,0.7)] group-hover:border-[#5646a3]/50 transition-all duration-300">
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowUp 
                  size={22} 
                  className="text-white/80 group-hover:text-white transition-colors duration-200" 
                  strokeWidth={2.5}
                />
              </motion.div>
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
