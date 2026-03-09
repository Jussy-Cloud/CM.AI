import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Ollie } from "../ui/Ollie";
import { MagneticButton } from "../ui/MagneticButton";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-6 lg:px-12 backdrop-blur-[20px] bg-paper/80 border-b border-ink/10">
        <Link to="/">
          <Ollie />
        </Link>
        <div className="hidden md:flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-acid bg-[#0a0a0a] border border-white/10 px-4 py-2 rounded-full shadow-sm">
          <div className="relative flex items-center justify-center w-4 h-4">
            {/* Core */}
            <div className="w-1.5 h-1.5 bg-acid rounded-full shadow-[0_0_8px_rgba(132,204,22,0.6)] z-10" />
            
            {/* Inner Orbit */}
            <motion.div 
              className="absolute border border-acid/30 rounded-full w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-acid rounded-full" />
            </motion.div>

            {/* Outer Orbit */}
            <motion.div 
              className="absolute border border-acid/20 rounded-full w-[180%] h-[180%]"
              animate={{ rotate: -360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0.5 h-0.5 bg-acid rounded-full" />
            </motion.div>
          </div>
          <span className="ml-2">SYSTEMS OPTIMAL: PERFORMANCE MODE ACTIVE</span>
        </div>
        <MagneticButton onClick={() => setIsOpen(true)} className="bg-ink text-paper px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-acid hover:text-ink transition-colors duration-300">
          Menu
        </MagneticButton>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className={`fixed inset-0 z-50 flex flex-col justify-center px-6 lg:px-12 transition-colors duration-500 ${hoveredLink ? 'bg-acid text-ink' : 'bg-ink text-paper'}`}
          >
            <div className="absolute top-6 right-6 lg:top-6 lg:right-12">
              <MagneticButton onClick={() => setIsOpen(false)} className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${hoveredLink ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>
                Close
              </MagneticButton>
            </div>
            <nav className="flex flex-col gap-2 lg:gap-4">
              {[
                { label: "The Brain", desc: "Strategy", path: "/brain" },
                { label: "The Soul", desc: "Creative", path: "/soul" },
                { label: "The Engine", desc: "Tech", path: "/engine" },
                { label: "The Heart", desc: "Manifesto", path: "/heart" }
              ].map((item, i) => (
                <div key={item.label} className="overflow-hidden">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredLink(true)}
                    onMouseLeave={() => setHoveredLink(false)}
                    className="flex items-center gap-4 text-[12vw] lg:text-[8vw] font-bold tracking-tighter uppercase leading-[0.85] hover:pl-8 transition-all duration-300 origin-left"
                    data-cursor="action"
                  >
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 * i }}
                      className="flex items-center gap-4"
                    >
                      {item.label}
                      <span className="text-sm lg:text-2xl font-mono tracking-widest opacity-50 hidden md:block">[{item.desc}]</span>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
