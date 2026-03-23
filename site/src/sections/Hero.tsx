import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { MagneticButton } from "../components/ui/MagneticButton";
import { MaskText } from "../components/ui/MaskText";
import { HeroSphere } from "../components/3d/Sphere";

const headlines = [
  ["AI-FORWARD", "DIGITAL", "EXCELLENCE"],
  ["Move Content.", "Move", "Markets."],
  ["Engineered", "For", "Attention."],
  ["The Content", "Economy.", "Mastered."],
  ["Campaigns", "That", "Command."]
];

function RotatingHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 
      className="text-[13vw] lg:text-[8.5vw] leading-[0.85] font-bold tracking-tighter uppercase flex flex-col min-h-[2.6em]"
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex} 
          className="flex flex-col"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.1 } },
            exit: { transition: { staggerChildren: 0.05 } }
          }}
        >
          {headlines[currentIndex].map((line, i) => (
            <div key={i} className="overflow-hidden inline-block pb-2">
              <motion.div
                variants={{
                  initial: { y: "100%", opacity: 0, filter: "blur(10px)", rotateX: -45 },
                  animate: { y: "0%", opacity: 1, filter: "blur(0px)", rotateX: 0, transition: { type: "spring", stiffness: 150, damping: 20 } },
                  exit: { y: "-100%", opacity: 0, filter: "blur(10px)", rotateX: 45, transition: { type: "spring", stiffness: 150, damping: 20 } }
                }}
                style={{ transformOrigin: "center center" }}
                className={i === headlines[currentIndex].length - 1 ? "text-ink" : ""}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </h1>
  );
}

export function Hero() {
  const [showContactMenu, setShowContactMenu] = useState(false);

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 border-b border-ink/10 pt-24 bg-paper text-ink">
      <div className="lg:col-span-7 flex flex-col justify-center p-6 lg:p-12 relative z-10">
        <div>
          <RotatingHeadline />
          <div className="mt-8 text-xl lg:text-2xl max-w-lg font-medium tracking-tight text-ink/80">
            <MaskText delay={0.3}>Content that connects. Community that grows. Campaigns that convert.</MaskText>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-4 relative"
        >
          <div className="relative">
            <MagneticButton 
              onClick={() => setShowContactMenu(!showContactMenu)}
              className="bg-ink text-paper px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-acid hover:text-ink transition-colors duration-300"
            >
              Let's Talk
            </MagneticButton>
            
            <AnimatePresence>
              {showContactMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 bg-ink text-paper p-4 rounded-2xl shadow-2xl flex flex-col gap-2 min-w-[240px] z-50 border border-paper/10"
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
          <a href="#work" className="inline-block">
            <MagneticButton className="bg-transparent border border-ink text-ink px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors duration-300">
              See Our Work
            </MagneticButton>
          </a>
        </motion.div>
      </div>
      
      <div className="lg:col-span-5 relative hidden lg:block bg-ink overflow-hidden border-l border-ink/10">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-[50%] opacity-30 blur-[100px] z-0"
          style={{
            background: 'conic-gradient(from 0deg, var(--color-acid), transparent, var(--color-acid), transparent)'
          }}
        />
        <HeroSphere />
        <div className="absolute bottom-12 right-12 z-20 text-paper/50 font-mono text-xs uppercase tracking-widest text-right pointer-events-none">
          <p>Global Node: Active</p>
          <p>Dimension: WWW</p>
          <p>Signal: Optimal</p>
        </div>
      </div>
    </section>
  );
}
