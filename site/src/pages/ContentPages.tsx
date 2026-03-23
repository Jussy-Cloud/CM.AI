import { motion } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { BriefGenerator } from "../sections/BriefGenerator";

export function TheBrain() {
  return (
    <PageLayout 
      title="The Brain" 
      subtitle="Data Without Soul Is Noise. Art Without Strategy Is A Hobby."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-xl leading-relaxed">
          <p className="mb-6">We don't just "build sites" or "run ads"; we architect digital gravity experiences so compelling that the market has no choice but to pull toward them.</p>
          <p>Our strategic framework is built on deep market analysis, behavioral psychology, and relentless optimization. We find the edge of chaos and build your empire right on the fault line.</p>
        </div>
        <div className="bg-ink text-paper p-8 rounded-2xl">
          <h3 className="text-acid font-mono text-sm uppercase tracking-widest mb-8">Strategic Pillars</h3>
          <ul className="space-y-6 text-lg font-medium">
            <li className="flex items-center gap-4"><span className="text-acid">01</span> Market Dominance Mapping</li>
            <li className="flex items-center gap-4"><span className="text-acid">02</span> Behavioral Conversion Funnels</li>
            <li className="flex items-center gap-4"><span className="text-acid">03</span> Predictive Trend Analysis</li>
            <li className="flex items-center gap-4"><span className="text-acid">04</span> Brand Positioning & Architecture</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}

export function TheSoul() {
  return (
    <PageLayout 
      title="The Soul" 
      subtitle="Design That Works. Simple As That."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-ink text-paper p-8 rounded-2xl">
          <h3 className="text-acid font-mono text-sm uppercase tracking-widest mb-8">Our Services</h3>
          <ul className="space-y-6 text-lg font-medium">
            <li className="flex items-center gap-4"><span className="text-acid">01</span> Brand Identity & Visual Design</li>
            <li className="flex items-center gap-4"><span className="text-acid">02</span> Website & Digital Design</li>
            <li className="flex items-center gap-4"><span className="text-acid">03</span> Marketing & Campaign Assets</li>
            <li className="flex items-center gap-4"><span className="text-acid">04</span> Presentation & Content Design</li>
          </ul>
        </div>
        <div className="text-xl leading-relaxed">
          <p className="mb-6">We create clean, effective design that helps your brand look better and perform better. No fluff, no overthinking just solid creative done right.</p>
          <p className="mb-6">From brand identity to digital assets, everything we produce is built to be clear, consistent, and easy to use across your business.</p>
          <p className="mb-6">Good design shouldn’t confuse people it should guide them.</p>
          <p>We focus on clarity, consistency, and usability. Every piece of work is created to communicate your message properly and make your brand look professional across every touchpoint.</p>
        </div>
      </div>
    </PageLayout>
  );
}

export function TheEngine() {
  return (
    <>
      <PageLayout 
        title="The Engine Behind the Work" 
        subtitle="How We Build, Launch, and Scale Your Digital Presence"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-xl leading-relaxed">
            <p className="mb-6">This is where everything comes together.</p>
            <p className="mb-6">We build fast, reliable digital assets that are designed to perform whether it’s a website, landing page, or campaign rollout.</p>
            <p className="mb-6">No unnecessary complexity. No over engineering. Just the right tools and processes to get things live, working properly, and delivering results.</p>
            <p className="mb-6">We focus on speed, stability, and usability.</p>
            <p>Everything we build is easy to manage, easy to scale, and aligned with your marketing so you’re not stuck with a system that looks good but doesn’t actually work.</p>
          </div>
          <div className="bg-ink text-paper p-8 rounded-2xl">
            <h3 className="text-acid font-mono text-sm uppercase tracking-widest mb-8">What We Handle</h3>
            <ul className="space-y-6 text-lg font-medium">
              <li className="flex items-center gap-4"><span className="text-acid">01</span> Website Build & Deployment</li>
              <li className="flex items-center gap-4"><span className="text-acid">02</span> Landing Pages & Campaign Setup</li>
              <li className="flex items-center gap-4"><span className="text-acid">03</span> Tracking & Analytics Integration</li>
              <li className="flex items-center gap-4"><span className="text-acid">04</span> Ongoing Updates & Optimisation</li>
            </ul>
          </div>
        </div>
      </PageLayout>
      <BriefGenerator />
    </>
  );
}

export function TheCollective() {
  return (
    <PageLayout 
      title="The Collective" 
      subtitle="We Don't Just Deploy Models. We Bridge The Gap Between AI Capability And Team Adoption."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-ink text-paper p-8 rounded-2xl">
          <h3 className="text-acid font-mono text-sm uppercase tracking-widest mb-8">AI Enablement</h3>
          <ul className="space-y-6 text-lg font-medium">
            <li className="flex items-center gap-4"><span className="text-acid">01</span> Workflow Mapping</li>
            <li className="flex items-center gap-4"><span className="text-acid">02</span> Custom Agent Deployment</li>
            <li className="flex items-center gap-4"><span className="text-acid">03</span> Executive Training</li>
            <li className="flex items-center gap-4"><span className="text-acid">04</span> Operational ROI</li>
          </ul>
        </div>
        <div className="text-xl leading-relaxed">
          <p className="mb-6">We deploy autonomous systems that reclaim 40% of your team's bandwidth. We identify high impact bottlenecks in daily operations and build a 'synthetic workforce' to handle repetitive tasks.</p>
          <p>Our executive training onboards leadership on AI governance and strategic leverage, ensuring your team is equipped to dominate the new digital economy.</p>
        </div>
      </div>
    </PageLayout>
  );
}

export function PhilosophyPage() {
  return (
    <PageLayout 
      title="The Heart" 
      subtitle="We Don't Just Participate. We Dominate."
    >
      <div className="text-xl leading-relaxed space-y-8 max-w-4xl">
        <p>Content Merchants was born from a singular realization: the digital landscape is cluttered with noise, mediocrity, and brands that are merely participating. We exist to change that.</p>
        <p>Our philosophy is rooted in the concept of <strong>Digital Gravity</strong>. We believe that a brand shouldn't have to shout to be heard. Instead, by architecting experiences that are fundamentally superior strategically, creatively, and technically we create a gravitational pull that naturally attracts the market.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="p-8 border border-ink/10 rounded-2xl bg-white/50">
            <h3 className="bg-acid text-ink inline-block px-2 py-1 font-mono text-sm uppercase tracking-widest mb-4">01. Strategy First</h3>
            <p className="text-base">Data without soul is noise. We map the market, identify the fault lines, and position you exactly where you need to be before a single pixel is pushed.</p>
          </div>
          <div className="p-8 border border-ink/10 rounded-2xl bg-white/50">
            <h3 className="bg-acid text-ink inline-block px-2 py-1 font-mono text-sm uppercase tracking-widest mb-4">02. Unignorable Creative</h3>
            <p className="text-base">Safe is risky. We push the envelope until it tears, crafting visual narratives that bypass logic and strike directly at human emotion.</p>
          </div>
          <div className="p-8 border border-ink/10 rounded-2xl bg-white/50">
            <h3 className="bg-acid text-ink inline-block px-2 py-1 font-mono text-sm uppercase tracking-widest mb-4">03. Flawless Execution</h3>
            <p className="text-base">Vision without execution is hallucination. Our engineering team builds high performance, scalable platforms that refuse to break under pressure.</p>
          </div>
        </div>

        <p>We are a syndicate of misfits, obsessives, and savants. We operate with radical candor, relentless curiosity, and an ego less collaboration that ensures the best idea always wins. When you partner with Content Merchants, you are not hiring an agency; you are bolting on a high performance engine to your business.</p>
      </div>
    </PageLayout>
  );
}

export function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  
  return (
    <PageLayout 
      title="Careers" 
      subtitle="Join The Syndicate. Explore The Digital World With Us."
    >
      {submitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-2xl lg:text-4xl font-mono text-acid tracking-tight border border-acid/20 p-12 rounded-2xl bg-ink text-paper"
        >
          [ APPLICATION RECEIVED ]<br/><br/>
          <span className="text-paper text-xl">Your transmission has been intercepted. If your signature matches our frequency, we will make contact.</span>
        </motion.div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="max-w-2xl space-y-8 bg-ink text-paper p-8 lg:p-12 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-mono text-sm text-paper/50 uppercase tracking-widest">First Name</label>
              <input required type="text" className="w-full bg-transparent border-b border-paper/20 py-3 text-xl focus:border-acid outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-sm text-paper/50 uppercase tracking-widest">Last Name</label>
              <input required type="text" className="w-full bg-transparent border-b border-paper/20 py-3 text-xl focus:border-acid outline-none transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-mono text-sm text-paper/50 uppercase tracking-widest">Email Address</label>
            <input required type="email" className="w-full bg-transparent border-b border-paper/20 py-3 text-xl focus:border-acid outline-none transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-sm text-paper/50 uppercase tracking-widest">Portfolio / LinkedIn URL</label>
            <input required type="url" className="w-full bg-transparent border-b border-paper/20 py-3 text-xl focus:border-acid outline-none transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-sm text-paper/50 uppercase tracking-widest">Tell us about yourself</label>
            <textarea required rows={4} className="w-full bg-transparent border-b border-paper/20 py-3 text-xl focus:border-acid outline-none transition-colors resize-none"></textarea>
          </div>
          <button type="submit" className="bg-acid text-ink px-12 py-6 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-paper transition-colors duration-300 w-full md:w-auto">
            Submit Application
          </button>
        </form>
      )}
    </PageLayout>
  );
}
