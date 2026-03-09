import { motion } from "motion/react";
import React, { useState, useEffect } from "react";

export function Ollie({ className = "text-ink", eyeColor = "var(--color-paper)", showText = true }: { className?: string, eyeColor?: string, showText?: boolean }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <svg width="40" height="40" viewBox="0 0 40 40" className={className}>
        <circle cx="20" cy="20" r="18" fill="currentColor" />
        <motion.circle cx="14" cy="18" r="4" fill={eyeColor} animate={{ x: mouse.x, y: mouse.y }} transition={{ type: "spring", stiffness: 150, damping: 20 }} />
        <motion.circle cx="26" cy="18" r="4" fill={eyeColor} animate={{ x: mouse.x, y: mouse.y }} transition={{ type: "spring", stiffness: 150, damping: 20 }} />
      </svg>
      {showText && <span className="font-bold uppercase tracking-wider text-sm hidden md:block group-hover:text-acid transition-colors duration-300">Content Merchants</span>}
    </div>
  );
}
