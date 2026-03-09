import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";

export function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 150, damping: 20, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 150, damping: 20, mass: 0.5 });

  const [variant, setVariant] = useState("default");
  const [text, setText] = useState("");
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      const target = e.target as HTMLElement;
      const discoveryEl = target.closest('[data-cursor="discovery"]');
      const actionEl = target.closest('button, a, [data-cursor="action"]');
      const infoEl = target.closest('[data-cursor="info"]');
      const darkEl = target.closest('[data-theme="dark"]');

      if (darkEl) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }

      if (discoveryEl) {
        setVariant("discovery");
        setText("PLAY");
      } else if (infoEl) {
        setVariant("info");
        setText(infoEl.getAttribute("data-cursor-text") || "View");
      } else if (actionEl) {
        setVariant("action");
        setText("");
      } else {
        setVariant("default");
        setText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isReducedMotion) return null;

  const variants = {
    default: { width: 32, height: 32, backgroundColor: "transparent", border: "1.5px solid currentColor" },
    discovery: { width: 150, height: 150, backgroundColor: "currentColor", border: "0px solid transparent" },
    action: { width: 64, height: 64, backgroundColor: "transparent", border: "1.5px solid currentColor" },
    info: { width: 80, height: 80, backgroundColor: "currentColor", border: "0px solid transparent" }
  };

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] hidden md:block ${isDark || variant === 'discovery' || variant === 'info' ? 'text-paper' : 'text-ink'}`}>
      <motion.div
        className="absolute w-2 h-2 bg-current rounded-full"
        style={{ left: dotX, top: dotY, x: "-50%", y: "-50%" }}
      />
      <motion.div
        className="absolute rounded-full flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-center overflow-hidden"
        style={{ left: ringX, top: ringY, x: "-50%", y: "-50%" }}
        animate={variant}
        variants={variants}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {text && (
            <motion.span
              key={text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="whitespace-nowrap"
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
