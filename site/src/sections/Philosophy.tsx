import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MaskText } from "../components/ui/MaskText";

export function Philosophy() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section ref={targetRef} data-theme="dark" className="h-[300vh] relative bg-ink text-paper">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[300vw]">
          <div className="w-screen flex-shrink-0 px-6 lg:px-12 flex flex-col justify-center">
            <h2 className="text-[10vw] font-bold tracking-tighter uppercase leading-[0.85]">
              <MaskText>Shape</MaskText><br/>
              <MaskText delay={0.1}>Culture</MaskText>
            </h2>
          </div>
          <div className="w-screen flex-shrink-0 px-6 lg:px-12 flex flex-col justify-center">
            <h2 className="text-[10vw] font-bold tracking-tighter uppercase leading-[0.85] text-paper/20">
              <MaskText>Through</MaskText><br/>
              <MaskText delay={0.1}>Narrative</MaskText>
            </h2>
          </div>
          <div className="w-screen flex-shrink-0 px-6 lg:px-12 flex flex-col justify-center">
            <div className="max-w-3xl">
              <div className="text-3xl lg:text-5xl font-medium tracking-tight leading-tight">
                <MaskText>We Engineer Cultural Moments That Convert.</MaskText>
                <MaskText delay={0.1}>Our Systems Are Designed To Scale, Adapt, And Dominate.</MaskText>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Link to="/heart" className="mt-12 inline-block border-b-2 border-paper pb-1 text-lg font-bold uppercase tracking-wider hover:text-acid hover:border-acid transition-colors">
                  Read the Manifesto
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
