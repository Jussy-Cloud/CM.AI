/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Grain } from "./components/ui/Grain";
import { Preloader } from "./components/ui/Preloader";
import { Home } from "./pages/Home";
import { CareersPage, PhilosophyPage, TheBrain, TheCollective, TheEngine, TheSoul } from "./pages/ContentPages";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/brain" element={<TheBrain />} />
        <Route path="/soul" element={<TheSoul />} />
        <Route path="/engine" element={<TheEngine />} />
        <Route path="/collective" element={<TheCollective />} />
        <Route path="/heart" element={<PhilosophyPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <div className="bg-paper text-ink min-h-screen selection:bg-acid selection:text-ink">
        <CustomCursor />
        <Grain />
        
        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader key="preloader" onComplete={() => setLoading(false)} />
          ) : (
            <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Navigation />
              <AnimatedRoutes />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}
