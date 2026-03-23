import { motion } from "motion/react";
import React from "react";
import { Hero } from "../sections/Hero";
import LiveAssetTracker from "../components/LiveAssetTracker";
import { Metrics } from "../sections/Metrics";
import { LogoMarquee } from "../sections/LogoMarquee";
import { Portfolio } from "../sections/Portfolio";
import { Services } from "../sections/Services";
import { Philosophy } from "../sections/Philosophy";

export function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero />
      <LiveAssetTracker />
      <Metrics />
      <LogoMarquee />
      <Portfolio />
      <Services />
      <Philosophy />
    </motion.div>
  );
}
