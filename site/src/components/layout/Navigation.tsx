import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Ollie } from "../ui/Ollie";
import { MagneticButton } from "../ui/MagneticButton";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);

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
          <span className="ml-2">Live System Status: Optimal</span>
        </div>
        <div className="flex items-center gap-4 relative">
          <div className="relative hidden md:block">
            <MagneticButton 
              onClick={() => setShowContactMenu(!showContactMenu)}
              className="bg-acid text-ink px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-paper transition-colors duration-300"
            >
              Book an AI Audit
            </MagneticButton>
            
            <AnimatePresence>
              {showContactMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 bg-ink text-paper p-4 rounded-2xl shadow-2xl flex flex-col gap-2 min-w-[240px] z-50 border border-paper/10"
                >
                  <a href="https://wa.me/27102881888" target="_blank" rel="noopener noreferrer" className="px-4 py-3 hover:bg-acid hover:text-ink rounded-xl transition-colors font-medium text-sm flex items-center gap-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    WhatsApp Us
                  </a>
                  <a href="mailto:contentmerchants@gmail.com" className="px-4 py-3 hover:bg-acid hover:text-ink rounded-xl transition-colors font-medium text-sm flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Email Us
                  </a>
                  <div className="pt-2 mt-2 border-t border-paper/10 px-4 pb-2">
                    <p className="text-xs text-paper/50 font-mono uppercase tracking-widest mb-1">Direct Contact</p>
                    <p className="text-sm font-medium">contentmerchants@gmail.com</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <MagneticButton onClick={() => setIsOpen(true)} className="bg-ink text-paper px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-acid hover:text-ink transition-colors duration-300">
            Menu
          </MagneticButton>
        </div>
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
                { label: "The Collective", desc: "Enablement", path: "/collective" },
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
