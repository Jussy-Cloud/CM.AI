import { motion } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { BriefGenerator } from "../sections/BriefGenerator";

export function TheBrain() {
  return (
    <PageLayout 
      title="The Brain" 
      subtitle="Data without soul is noise. Art without strategy is a hobby."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-xl leading-relaxed">
          <p className="mb-6">We don't just "build sites" or "run ads"; we architect digital gravity—experiences so compelling that the market has no choice but to pull toward them.</p>
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
      subtitle="Push the envelope until it tears. The Un-ignorable."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-ink text-paper p-8 rounded-2xl">
          <h3 className="text-acid font-mono text-sm uppercase tracking-widest mb-8">Creative Arsenal</h3>
          <ul className="space-y-6 text-lg font-medium">
            <li className="flex items-center gap-4"><span className="text-acid">01</span> Visual Systems & Identity</li>
            <li className="flex items-center gap-4"><span className="text-acid">02</span> Kinetic Typography & Motion</li>
            <li className="flex items-center gap-4"><span className="text-acid">03</span> High-Fidelity Prototyping</li>
            <li className="flex items-center gap-4"><span className="text-acid">04</span> Immersive 3D & WebGL</li>
          </ul>
        </div>
        <div className="text-xl leading-relaxed">
          <p className="mb-6">Design should feel living, breathing, and slightly dangerous. It should challenge the user to interact, rather than just scroll.</p>
          <p>We craft visual narratives that bypass the logical brain and strike directly at human emotion. Every pixel is intentional. Every interaction is a statement.</p>
        </div>
      </div>
    </PageLayout>
  );
}

export function TheEngine() {
  return (
    <>
      <PageLayout 
        title="The Engine" 
        subtitle="Architecting Digital Gravity. The Tech Stack."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-xl leading-relaxed">
            <p className="mb-6">This is where the vision becomes reality. Our engineering team builds high-performance, scalable platforms that refuse to break under pressure.</p>
            <p>From custom React/Next.js frontends to robust headless commerce backends, we deploy the exact right technology to give you an unfair advantage.</p>
          </div>
          <div className="bg-ink text-paper p-8 rounded-2xl">
            <h3 className="text-acid font-mono text-sm uppercase tracking-widest mb-8">Technical Capabilities</h3>
            <ul className="space-y-6 text-lg font-medium">
              <li className="flex items-center gap-4"><span className="text-acid">01</span> Headless Architecture</li>
              <li className="flex items-center gap-4"><span className="text-acid">02</span> AI Integration & Automation</li>
              <li className="flex items-center gap-4"><span className="text-acid">03</span> WebGL & Creative Coding</li>
              <li className="flex items-center gap-4"><span className="text-acid">04</span> Performance Optimization</li>
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
      subtitle="Humans. Not Resources. The minds behind the machine."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-ink text-paper p-8 rounded-2xl">
          <h3 className="text-acid font-mono text-sm uppercase tracking-widest mb-8">Our DNA</h3>
          <ul className="space-y-6 text-lg font-medium">
            <li className="flex items-center gap-4"><span className="text-acid">01</span> Radical Candor</li>
            <li className="flex items-center gap-4"><span className="text-acid">02</span> Relentless Curiosity</li>
            <li className="flex items-center gap-4"><span className="text-acid">03</span> Ego-less Collaboration</li>
            <li className="flex items-center gap-4"><span className="text-acid">04</span> Bias Toward Action</li>
          </ul>
        </div>
        <div className="text-xl leading-relaxed">
          <p className="mb-6">We are a syndicate of misfits, obsessives, and savants. We don't hire for "culture fit"; we hire for culture add.</p>
          <p>Our team operates as a plug-and-play extension of your own, scaling up or down based on the exact velocity your project requires.</p>
        </div>
      </div>
    </PageLayout>
  );
}

export function PhilosophyPage() {
  return (
    <PageLayout 
      title="The Heart" 
      subtitle="We don't just participate. We dominate."
    >
      <div className="text-xl leading-relaxed space-y-8 max-w-4xl">
        <p>Content Merchants was born from a singular realization: the digital landscape is cluttered with noise, mediocrity, and brands that are merely participating. We exist to change that.</p>
        <p>Our philosophy is rooted in the concept of <strong>Digital Gravity</strong>. We believe that a brand shouldn't have to shout to be heard. Instead, by architecting experiences that are fundamentally superior—strategically, creatively, and technically—we create a gravitational pull that naturally attracts the market.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="p-8 border border-ink/10 rounded-2xl bg-white/50">
            <h3 className="bg-acid text-ink inline-block px-2 py-1 font-mono text-sm uppercase tracking-widest mb-4">01. Strategy First</h3>
            <p className="text-base">Data without soul is noise. We map the market, identify the fault lines, and position you exactly where you need to be before a single pixel is pushed.</p>
          </div>
          <div className="p-8 border border-ink/10 rounded-2xl bg-white/50">
            <h3 className="bg-acid text-ink inline-block px-2 py-1 font-mono text-sm uppercase tracking-widest mb-4">02. Un-ignorable Creative</h3>
            <p className="text-base">Safe is risky. We push the envelope until it tears, crafting visual narratives that bypass logic and strike directly at human emotion.</p>
          </div>
          <div className="p-8 border border-ink/10 rounded-2xl bg-white/50">
            <h3 className="bg-acid text-ink inline-block px-2 py-1 font-mono text-sm uppercase tracking-widest mb-4">03. Flawless Execution</h3>
            <p className="text-base">Vision without execution is hallucination. Our engineering team builds high-performance, scalable platforms that refuse to break under pressure.</p>
          </div>
        </div>

        <p>We are a syndicate of misfits, obsessives, and savants. We operate with radical candor, relentless curiosity, and an ego-less collaboration that ensures the best idea always wins. When you partner with Content Merchants, you are not hiring an agency; you are bolting on a high-performance engine to your business.</p>
      </div>
    </PageLayout>
  );
}

export function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  
  return (
    <PageLayout 
      title="Careers" 
      subtitle="Join the syndicate. Explore the digital world with us."
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
