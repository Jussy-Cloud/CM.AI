import { motion } from "motion/react";
import React from "react";

export function MaskText({ children, delay = 0, className = "" }: any) {
  return (
    <div className="overflow-hidden inline-block">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
