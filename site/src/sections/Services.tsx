import { motion } from "motion/react";
import React from "react";
import { MaskText } from "../components/ui/MaskText";
import { Cpu, PenTool, Globe, TrendingUp, Target, Layers } from "lucide-react";

const services = [
  { 
    title: "AI Onboarding & Enablement", 
    desc: "We don’t just deploy models; we bridge the gap between AI capability and team adoption. We deploy autonomous systems that reclaim 40% of your team's bandwidth.",
    tags: ["Workflow Mapping", "Custom Agent Deployment", "Executive Training"],
    icon: Cpu
  },
  { 
    title: "Design & Identity", 
    desc: "We engineer visual systems that command attention. From digital content to full-scale brand identities, we design assets that shape culture and drive action.",
    tags: ["Digital Content", "Campaigns", "Brand Identity", "Video"],
    icon: PenTool
  },
  { 
    title: "Web Platforms", 
    desc: "We build high-performance digital infrastructure. From scalable eCommerce platforms to custom native applications, we engineer technology that converts.",
    tags: ["ReactJS", "Shopify", "Custom Builds", "Native Apps"],
    icon: Globe
  },
  { 
    title: "Growth & Acquisition", 
    desc: "We buy attention and force growth. We deploy targeted paid media strategies to drive conversions, capture leads, and scale global awareness.",
    tags: ["Google Ads", "Meta", "TikTok", "LinkedIn"],
    icon: TrendingUp
  },
  {
    title: "Digital Strategy & Architecture",
    desc: "Data-backed roadmaps for market dominance. We align your tech stack, creative assets, and operational workflows with high-level business objectives to ensure every digital initiative drives measurable ROI.",
    tags: ["Market Positioning", "Stack Auditing", "ROI Forecasting"],
    icon: Target
  },
  {
    title: "Agile Project Orchestration",
    desc: "Flawless execution from kickoff to deployment. We turn complex, chaotic workflows into streamlined delivery pipelines, ruthlessly managing timelines, resources, and scope to protect your bottom line.",
    tags: ["Sprint Planning", "Resource Allocation", "Risk Mitigation"],
    icon: Layers
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {services.map((svc, i) => (
          <motion.div 
            key={svc.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
            className="group border-t border-paper/20 pt-8 flex flex-col h-full"
          >
            <div className="mb-6 text-paper/50 group-hover:text-acid transition-colors duration-300">
              <svc.icon className="w-8 h-8" strokeWidth={1.5} />
            </div>
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
