import { motion } from "motion/react";
import React, { useState, useEffect } from "react";

export function HeroCosmicFlow() {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  // Configuration for the orbiting dots
  const dots = [
    { id: 1, radius: 100, duration: 8, delay: 0, size: 8 },
    { id: 2, radius: 160, duration: 12, delay: 1, size: 6 },
    { id: 3, radius: 220, duration: 16, delay: 2, size: 7 },
    { id: 4, radius: 130, duration: 10, delay: 0.5, size: 5 },
    { id: 5, radius: 190, duration: 14, delay: 1.5, size: 4 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the right pane
      // The right pane is roughly the right 5/12ths of the screen on desktop
      const x = (e.clientX / window.innerWidth - 0.75) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden cursor-crosshair">
      {/* Interactive Center */}
      <div 
        className="relative z-30 flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* The Event Horizon (Ollie / Black Hole) */}
        <motion.div
          className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center"
          animate={
            hovered ? { 
              scale: [1, 1.1, 1],
              boxShadow: "0 0 60px 15px rgba(163, 230, 53, 0.4)",
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            } : { 
              scale: 1, 
              boxShadow: "0 0 30px 5px rgba(255, 255, 255, 0.05)",
              transition: { duration: 0.8, ease: "easeOut" } 
            }
          }
        >
          {/* Ollie SVG Face */}
          <svg viewBox="0 0 40 40" className="w-full h-full text-white drop-shadow-2xl">
            <circle cx="20" cy="20" r="20" fill="currentColor" />
            <motion.circle 
              cx="14" cy="18" r="3.5" 
              fill="#050505" 
              animate={{ x: mouse.x, y: mouse.y }} 
              transition={{ type: "spring", stiffness: 150, damping: 20 }} 
            />
            <motion.circle 
              cx="26" cy="18" r="3.5" 
              fill="#050505" 
              animate={{ x: mouse.x, y: mouse.y }} 
              transition={{ type: "spring", stiffness: 150, damping: 20 }} 
            />
          </svg>
        </motion.div>
      </div>

      {/* Orbit Paths (Visual Rings) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="absolute border border-white/10 rounded-full transition-all duration-700"
          style={{ width: 200, height: 200 }}
          animate={{ scale: hovered ? 1.05 : 1, borderColor: hovered ? "rgba(163, 230, 53, 0.2)" : "rgba(255, 255, 255, 0.1)" }}
        />
        <motion.div 
          className="absolute border border-white/10 rounded-full transition-all duration-700"
          style={{ width: 320, height: 320 }}
          animate={{ scale: hovered ? 1.05 : 1, borderColor: hovered ? "rgba(163, 230, 53, 0.15)" : "rgba(255, 255, 255, 0.1)" }}
        />
        <motion.div 
          className="absolute border border-white/10 rounded-full transition-all duration-700"
          style={{ width: 440, height: 440 }}
          animate={{ scale: hovered ? 1.05 : 1, borderColor: hovered ? "rgba(163, 230, 53, 0.1)" : "rgba(255, 255, 255, 0.1)" }}
        />
      </div>

      {/* Data Ring (Rotating Text) */}
      <motion.div
        className="absolute z-0 flex items-center justify-center opacity-30 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: hovered ? 15 : 40, repeat: Infinity, ease: "linear" }}
      >
        <svg width="600" height="600" viewBox="0 0 600 600">
          <defs>
            <path id="heroTextPath" d="M 300, 300 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0" />
          </defs>
          <text fill="#a3e635" fontSize="12" fontFamily="monospace" letterSpacing="6px" fontWeight="bold">
            <textPath href="#heroTextPath" startOffset="0%">
              CONTENT MERCHANTS . DIGITAL EXCELLENCE . AI-FORWARD . ARCHITECTING GRAVITY .
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Orbiting Matter (Dots) */}
      {dots.map((dot) => (
        <OrbitingDot 
          key={dot.id} 
          {...dot} 
          hovered={hovered} 
        />
      ))}
    </div>
  );
}

function OrbitingDot({ radius, duration, size, hovered }: { radius: number, duration: number, size: number, hovered: boolean }) {
  // Speed up rotation when hovering
  const currentDuration = hovered ? duration * 0.3 : duration;
  
  return (
    <motion.div
      className="absolute z-20 flex items-center justify-center pointer-events-none"
      initial={{ rotate: Math.random() * 360 }}
      animate={{ rotate: 360 + 720 }}
      transition={{ duration: currentDuration * 3, repeat: Infinity, ease: "linear" }}
      style={{ width: 0, height: 0 }} 
    >
      <motion.div
        className="bg-acid rounded-full transition-all duration-500"
        style={{ 
          width: size, 
          height: size,
          boxShadow: hovered ? "0 0 15px rgba(163,230,53,0.8)" : "0 0 5px rgba(163,230,53,0.4)"
        }}
        initial={{ x: radius }}
        animate={{ x: hovered ? radius * 1.05 : radius }}
      />
    </motion.div>
  );
}
