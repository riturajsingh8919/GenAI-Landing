"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-10 left-0 right-0 z-50 flex justify-center w-full px-4 text-white"
    >
      <div className="relative w-full md:w-auto flex justify-center">
        <motion.nav
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`bg-[#0b101b]/80 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden relative z-50
            ${
              isOpen
                ? "rounded-[32px] w-full max-w-md mx-auto"
                : "rounded-full px-6 py-4 w-full md:w-auto max-w-[95%] sm:max-w-fit mx-auto"
            }
          `}
        >
          {/* Static Header Row that doesn't change layout */}
          <div className={`flex items-center justify-between w-full ${isOpen ? "p-6 pb-2" : ""}`}>
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group shrink-0" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={751}
                height={119}
                className="w-[150px] md:w-[198px] h-auto object-contain"
              />
            </Link>

             {/* Desktop Nav Items (Hidden on Mobile) */}
            <div className={`hidden md:flex items-center gap-8 ${isOpen ? "hidden" : "ml-8"}`}>
               <Link
                href="/team"
                className="text-base font-outfit text-white px-4 py-2 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                Our Team
              </Link>
               <Link
                href="/nexcura"
                className="bg-[#5646a3] text-white text-base font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_#5646a3] hover:shadow-[0_4px_10px_-2px_rgba(255,255,255,0.05),0_2px_2px_-1px_rgba(255,255,255,0.1),0_0_0_5px_rgba(98,20,217,0.32)] hover:backdrop-blur-[10px] font-outfit whitespace-nowrap"
              >
                NexCura
              </Link>
            </div>


            {/* Mobile Toggle Button (Fixed Position in Header) */}
            <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white p-1 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center cursor-pointer relative z-50"
                  style={{ width: 28, height: 28 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                      >
                        <X size={28} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                         className="absolute"
                      >
                        <Menu size={28} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
            </div>
          </div>

          {/* Collapsible Mobile Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden w-full overflow-hidden"
              >
                <div className="px-6 pb-6 pt-4 flex flex-col gap-6">
                  <Link
                    href="/team"
                    className="text-lg font-outfit text-white hover:text-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/nexcura"
                    className="text-lg font-outfit text-white hover:text-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    NexCura
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </motion.div>
  );
}
