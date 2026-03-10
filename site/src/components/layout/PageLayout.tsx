import { motion } from "motion/react";
import React from "react";
import { MaskText } from "../ui/MaskText";

export function PageLayout({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="pt-40 pb-24 px-6 lg:px-12 min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl lg:text-9xl font-bold tracking-tighter uppercase mb-6">
          <MaskText>{title}</MaskText>
        </h1>
        <div className="text-2xl lg:text-4xl font-medium tracking-tight text-ink/80 mb-24">
          <MaskText delay={0.1}>{subtitle}</MaskText>
        </div>
        {children}
      </div>
    </motion.div>
  );
}
