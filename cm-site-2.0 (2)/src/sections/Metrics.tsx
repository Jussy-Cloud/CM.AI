import { motion } from "motion/react";
import React from "react";
import { AnimatedNumber } from "../components/ui/AnimatedNumber";

export function Metrics() {
  const stats = [
    { value: "R100M+", label: "Media Spend Managed" },
    { value: "150+", label: "Web Projects Delivered" },
    { value: "20K+", label: "Campaigns Executed" },
    { value: "83+", label: "Global Clients" }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-acid text-ink border-t border-ink/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-ink/20">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
            className="flex flex-col items-center text-center pt-8 md:pt-0"
          >
            <h3 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-4">
              <AnimatedNumber value={stat.value} />
            </h3>
            <p className="font-mono text-xs uppercase tracking-widest opacity-80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
