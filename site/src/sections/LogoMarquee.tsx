import { motion } from "motion/react";
import React from "react";

export function LogoMarquee() {
  const clients = [
    "McLaren", "Boschendal", "Vespa", "Pizza Hut", "University of Oxford", 
    "BBC", "Fila", "Jägermeister", "Daytona", "Rolls-Royce", 
    "Dropbox", "Aston Martin", "Sorbet", "MTN"
  ];
  
  // Duplicate the list multiple times to ensure a very long continuous scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="w-full bg-ink py-16 relative z-30 border-y border-paper/10 overflow-hidden">
      <motion.div 
        animate={{ x: ["0%", "-25%"] }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-12 md:gap-20 items-center"
      >
        {duplicatedClients.map((client, i) => (
          <span 
            key={i} 
            className="text-[#E5E5E5] text-2xl md:text-3xl font-sans font-light uppercase tracking-[0.15em] opacity-70 hover:opacity-100 hover:text-acid transition-all duration-300 cursor-default px-4"
          >
            {client}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
