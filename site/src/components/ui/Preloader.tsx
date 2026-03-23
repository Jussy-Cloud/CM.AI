import { motion, useAnimation } from "motion/react";
import React, { useState, useEffect, useRef } from "react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'idle' | 'hovering' | 'collapse' | 'reveal'>('idle');
  const [progress, setProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number | undefined>(undefined);
  const progressRef = useRef(0);
  
  // Configuration for the orbiting dots
  const dots = [
    { id: 1, radius: 80, duration: 4, delay: 0, size: 6 },
    { id: 2, radius: 120, duration: 6, delay: 1, size: 4 },
    { id: 3, radius: 160, duration: 8, delay: 2, size: 5 },
    { id: 4, radius: 100, duration: 5, delay: 0.5, size: 4 },
    { id: 5, radius: 140, duration: 7, delay: 1.5, size: 3 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Auto-unlock after 4 seconds if the user doesn't interact
    const timeoutId = setTimeout(() => {
      if (phase === 'idle' || phase === 'hovering') {
        triggerUnlock();
      }
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [phase]);

  useEffect(() => {
    const updateProgress = () => {
      if (phase === 'hovering') {
        progressRef.current = Math.min(progressRef.current + 1.5, 100); // Fills in ~1.1 seconds at 60fps
        setProgress(progressRef.current);
        
        if (progressRef.current >= 100) {
          triggerUnlock();
          return; // Stop updating
        }
      } else if (phase === 'idle' && progressRef.current > 0) {
        progressRef.current = Math.max(progressRef.current - 3, 0); // Drains twice as fast
        setProgress(progressRef.current);
      }
      
      if (phase === 'idle' || phase === 'hovering') {
        requestRef.current = requestAnimationFrame(updateProgress);
      }
    };

    requestRef.current = requestAnimationFrame(updateProgress);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [phase]);

  const triggerUnlock = async () => {
    setPhase('collapse');
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    
    // Wait for collapse animation
    await new Promise(r => setTimeout(r, 1000));

    // Phase 3: Reveal
    setPhase('reveal');
    await new Promise(r => setTimeout(r, 800));
    
    onComplete();
  };

  const handleMouseEnter = () => {
    if (phase === 'idle') setPhase('hovering');
  };

  const handleMouseLeave = () => {
    if (phase === 'hovering') setPhase('idle');
  };

  // Calculate SVG circle properties for progress ring
  const ringRadius = 46;
  const circumference = 2 * Math.PI * ringRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      data-theme="dark"
      className="fixed inset-0 z-[9999] bg-[#050505] text-white flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={phase === 'reveal' ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Interactive Center */}
      <div 
        className="relative z-30 flex items-center justify-center cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        {/* Progress Ring */}
        <svg className="absolute w-32 h-32 -rotate-90 pointer-events-none" viewBox="0 0 100 100">
          <circle 
            cx="50" cy="50" r={ringRadius} 
            fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" 
          />
          <circle 
            cx="50" cy="50" r={ringRadius} 
            fill="none" stroke="#a3e635" strokeWidth="3" 
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-75 ease-linear drop-shadow-[0_0_8px_rgba(163,230,53,0.8)]"
          />
        </svg>

        {/* The Event Horizon (Ollie / Black Hole) */}
        <motion.div
          className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center"
          animate={
            phase === 'hovering' ? { 
              scale: [1, 1.1, 1],
              boxShadow: "0 0 40px 10px rgba(163, 230, 53, 0.4)",
              transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            } :
            phase === 'collapse' ? {
              scale: [1, 1.5, 0],
              boxShadow: "0 0 100px 20px rgba(163, 230, 53, 0.8)",
              transition: { duration: 0.8, times: [0, 0.4, 1], ease: "anticipate" }
            } :
            { 
              scale: 1, 
              boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.05)",
              transition: { duration: 0.4, ease: "backOut" } 
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
          className="absolute border border-white/10 rounded-full"
          style={{ width: 160, height: 160 }}
          animate={phase === 'collapse' ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backIn" }}
        />
        <motion.div 
          className="absolute border border-white/10 rounded-full"
          style={{ width: 240, height: 240 }}
          animate={phase === 'collapse' ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "backIn", delay: 0.1 }}
        />
        <motion.div 
          className="absolute border border-white/10 rounded-full"
          style={{ width: 320, height: 320 }}
          animate={phase === 'collapse' ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "backIn", delay: 0.2 }}
        />
      </div>

      {/* Instruction Text */}
      <motion.div
        className="absolute bottom-24 flex flex-col items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase"
        animate={phase === 'collapse' ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      >
        <div className="h-4 flex items-center justify-center">
          {phase === 'idle' && <span className="text-white/50">Hover to Initiate</span>}
          {phase === 'hovering' && <span className="text-acid animate-pulse">Establishing Uplink...</span>}
          {phase === 'collapse' && <span className="text-acid">System Online</span>}
        </div>
        <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-acid transition-all duration-75 ease-linear" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>

      {/* Orbiting Matter (Dots) */}
      {dots.map((dot) => (
        <OrbitingDot 
          key={dot.id} 
          {...dot} 
          phase={phase} 
        />
      ))}
    </motion.div>
  );
}

function OrbitingDot({ radius, duration, delay, size, phase }: { radius: number, duration: number, delay: number, size: number, phase: string }) {
  // Speed up rotation when hovering
  const currentDuration = phase === 'hovering' ? duration * 0.4 : duration;
  
  return (
    <motion.div
      className="absolute z-20 flex items-center justify-center pointer-events-none"
      initial={{ rotate: Math.random() * 360 }}
      animate={
        phase === 'collapse' 
          ? { rotate: 360 + (Math.random() * 360) + 180 } 
          : { rotate: 360 + (Math.random() * 360) } 
      }
      transition={
        phase === 'collapse'
          ? { duration: 1.5, ease: "backIn" }
          : { duration: currentDuration, repeat: Infinity, ease: "linear" }
      }
      style={{ width: 0, height: 0 }} 
    >
      <motion.div
        className="bg-acid rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)]"
        style={{ width: size, height: size }}
        initial={{ x: radius, opacity: 0 }}
        animate={
          phase === 'collapse'
            ? { 
                x: 0, 
                opacity: 0, 
                scale: 0,
                transition: { 
                  duration: 0.8, 
                  ease: [0.4, 0, 0.2, 1], 
                  delay: delay * 0.1 
                } 
              }
            : { x: radius, opacity: 1 }
        }
      />
    </motion.div>
  );
}
