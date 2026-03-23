import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { MaskText } from "../components/ui/MaskText";

const caseStudies = [
  { id: 1, title: "Performance & Precision", client: "McLaren", videoId: "omen1COUC-I", stat: "550% Social Reach" },
  { id: 2, title: "Heritage & Lifestyle", client: "Boschendal", videoId: "539UvCC2R4Y", stat: "20X ROAS" },
  { id: 3, title: "Global Campaigns", client: "Coca-Cola", videoId: "-zpO_0gskoQ", stat: "200M+ Impressions" },
  { id: 6, title: "Streetwear Culture", client: "Fila", videoId: "nYF6wYmAzro", stat: "200M Video Views" },
  { id: 7, title: "Telecom & Connectivity", client: "MTN", videoId: "3QylA1MwHWE", stat: "No. 1 Trending" },
  { id: 12, title: "Viral Cravings", client: "Pizza Hut", videoId: "Jb_JKczzMn0", stat: "High Engagement" },
  { id: 11, title: "Cloud Storage & Collaboration", client: "Dropbox", videoId: "7f_gKHtJrkg", stat: "Global Adoption" },
  { id: 9, title: "Global Campaign", client: "Blue Origin", videoId: "i7KeN6-yQL0" },
  { id: 13, title: "Vehicle Lead Generation", client: "Automotive", videoId: "t73kAIYXsMU", stat: "High Conversion" },
];

function PortfolioItem({ study, index, scrollYProgress }: { study: any, index: number, scrollYProgress: any }) {
  const yOffset = (index % 2 === 0) ? 30 : -30;
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);

  const spans = [
    "col-span-12 md:col-span-7", 
    "col-span-12 md:col-span-5 md:mt-32", 
    "col-span-12 md:col-span-4", 
    "col-span-12 md:col-span-8 md:mt-48", 
    "col-span-12 md:col-span-6", 
    "col-span-12 md:col-span-6 md:mt-24", 
    "col-span-12 md:col-span-8", 
    "col-span-12 md:col-span-4 md:mt-32", 
    "col-span-12 md:col-span-5", 
    "col-span-12 md:col-span-7 md:mt-16", 
    "col-span-12 md:col-span-6", 
    "col-span-12 md:col-span-6 md:mt-40"
  ];

  return (
    <motion.div 
      style={{ y }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: (index % 3) * 0.1 }}
      className={`group relative overflow-hidden cursor-pointer bg-ink rounded-xl ${spans[index % spans.length]}`}
    >
      <div className="aspect-[4/3] md:aspect-auto md:h-[400px] w-full overflow-hidden relative">
        {study.videoId ? (
          <div className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:opacity-40">
            <iframe
              src={`https://www.youtube.com/embed/${study.videoId}?autoplay=1&mute=1&loop=1&playlist=${study.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ border: 0 }}
            />
          </div>
        ) : (
          <motion.img 
            src={study.img} 
            alt={study.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:opacity-40"
          />
        )}
      </div>
      <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-ink via-ink/80 to-transparent">
        <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <p className="text-acid font-mono text-sm uppercase tracking-widest mb-4">{study.client}</p>
            <h3 
              className="text-4xl md:text-5xl font-bold tracking-tight text-transparent group-hover:text-acid transition-colors duration-500"
              style={{ WebkitTextStroke: '1px var(--color-acid)' }}
            >
              {study.title}
            </h3>
          </div>
          {study.stat && (
            <div className="hidden md:block text-right">
              <p className="text-paper font-mono text-xs uppercase tracking-widest opacity-80 mb-1">Highlight</p>
              <p className="text-acid font-bold text-xl tracking-tight">{study.stat}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="work" ref={containerRef} className="py-24 px-6 lg:px-12 bg-paper text-ink overflow-hidden">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter uppercase leading-none">
          <MaskText>Digital Asset</MaskText><br/>
          <MaskText delay={0.1}>Management</MaskText>
        </h2>
        <div className="max-w-sm text-ink/70 font-mono text-sm uppercase tracking-widest">
          <MaskText delay={0.2}>
            We deploy full-spectrum digital excellence across design, paid media, web, and AI for the world's most ambitious brands.
          </MaskText>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        {caseStudies.map((study, i) => (
          <PortfolioItem key={study.id} study={study} index={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
