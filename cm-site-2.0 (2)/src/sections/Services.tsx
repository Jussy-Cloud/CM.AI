import { motion } from "motion/react";
import React from "react";
import { MaskText } from "../components/ui/MaskText";

const services = [
  { 
    title: "Design & Identity", 
    desc: "This is where we flex our creative muscles. From digital content and social campaigns to full-scale brand identities, we design visual systems that shape culture.",
    tags: ["Digital Content", "Campaigns", "Brand Identity", "Video"]
  },
  { 
    title: "Web Dev & Platforms", 
    desc: "Our engineers build anything you can imagine. From high-performance eCommerce platforms to custom native iOS and Android applications.",
    tags: ["ReactJS", "Shopify", "WordPress", "Custom Builds", "Native Apps"]
  },
  { 
    title: "Paid Media & Growth", 
    desc: "Enable 'beast mode' on your content. We buy the right attention at the right price to drive conversions, leads, and global awareness.",
    tags: ["Google Ads", "Meta", "TikTok", "LinkedIn"]
  }
];

export function Services() {
  return (
    <section id="services" data-theme="dark" className="py-32 px-6 lg:px-12 bg-ink text-paper border-t border-paper/10">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter uppercase leading-none">
          <MaskText>Our</MaskText><br/>
          <MaskText delay={0.1}>Capabilities</MaskText>
        </h2>
        <div className="max-w-sm text-paper/70 font-mono text-sm uppercase tracking-widest">
          <MaskText delay={0.2}>
            End-to-end digital execution designed to scale, adapt, and dominate.
          </MaskText>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {services.map((svc, i) => (
          <motion.div 
            key={svc.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
            className="group border-t border-paper/20 pt-8 flex flex-col h-full"
          >
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 group-hover:text-acid transition-colors duration-300">{svc.title}</h3>
            <p className="text-paper/70 text-lg leading-relaxed mb-8 flex-grow">{svc.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {svc.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full border border-paper/20 text-xs font-mono uppercase tracking-widest text-paper/60 group-hover:border-acid group-hover:bg-acid group-hover:text-ink transition-all duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
