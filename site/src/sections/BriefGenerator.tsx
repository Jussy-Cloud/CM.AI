import { motion } from "motion/react";
import React, { useState } from "react";
import { MagneticButton } from "../components/ui/MagneticButton";

export function BriefGenerator() {
  const [goal, setGoal] = useState("Dominate a Market");
  const [timeline, setTimeline] = useState("Q3 2026");
  const [budget, setBudget] = useState("R10k - R1m");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Transmitting to CRM (justin@contentmerchants.com):", { goal, timeline, budget, ...formData });
    setStep(3);
  };

  return (
    <section data-theme="dark" className="py-32 px-6 lg:px-12 bg-ink text-paper border-t border-paper/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase mb-12">
          Stop Participating.<br/>
          <span className="text-acid">Start Dominating.</span>
        </h2>
        
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="text-2xl lg:text-4xl font-medium leading-relaxed tracking-tight flex flex-wrap items-center gap-y-6">
              <span>"I want to</span>
              <div className="relative mx-4 inline-block">
                <select 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="appearance-none bg-transparent border-b-2 border-acid text-acid outline-none cursor-pointer text-center hover:bg-acid/10 transition-colors pr-8 py-1"
                  data-cursor="action"
                >
                  <option value="Dominate a Market" className="bg-ink text-paper">Dominate a Market</option>
                  <option value="Launch a Brand" className="bg-ink text-paper">Launch a Brand</option>
                  <option value="Scale Revenue" className="bg-ink text-paper">Scale Revenue</option>
                  <option value="Go Viral" className="bg-ink text-paper">Go Viral</option>
                </select>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-acid text-sm">▼</span>
              </div>
              <span>by</span>
              <div className="relative mx-4 inline-block">
                <select 
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="appearance-none bg-transparent border-b-2 border-acid text-acid outline-none cursor-pointer text-center hover:bg-acid/10 transition-colors pr-8 py-1"
                  data-cursor="action"
                >
                  <option value="Q3 2026" className="bg-ink text-paper">Q3 2026</option>
                  <option value="Next Month" className="bg-ink text-paper">Next Month</option>
                  <option value="End of Year" className="bg-ink text-paper">End of Year</option>
                  <option value="ASAP" className="bg-ink text-paper">ASAP</option>
                </select>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-acid text-sm">▼</span>
              </div>
              <span>with a budget of</span>
              <div className="relative mx-4 inline-block">
                <select 
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="appearance-none bg-transparent border-b-2 border-acid text-acid outline-none cursor-pointer text-center hover:bg-acid/10 transition-colors pr-8 py-1"
                  data-cursor="action"
                >
                  <option value="R10k - R1m" className="bg-ink text-paper">R10k - R1m</option>
                  <option value="R500k - R1m" className="bg-ink text-paper">R500k - R1m</option>
                  <option value="R1m+" className="bg-ink text-paper">R1m+</option>
                  <option value="To Be Decided" className="bg-ink text-paper">To Be Decided</option>
                </select>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-acid text-sm">▼</span>
              </div>
              <span>."</span>
            </div>

            <div className="mt-16">
              <MagneticButton 
                onClick={() => setStep(2)}
                className="bg-acid text-ink px-12 py-6 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-paper transition-colors duration-300"
              >
                Initiate Sequence
              </MagneticButton>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.form 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            onSubmit={handleSubmit}
            className="space-y-8 max-w-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-mono text-sm text-paper/50 uppercase tracking-widest">First Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b border-paper/20 py-3 text-xl focus:border-acid outline-none transition-colors text-paper" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-sm text-paper/50 uppercase tracking-widest">Surname</label>
                <input required type="text" value={formData.surname} onChange={e => setFormData({...formData, surname: e.target.value})} className="w-full bg-transparent border-b border-paper/20 py-3 text-xl focus:border-acid outline-none transition-colors text-paper" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-mono text-sm text-paper/50 uppercase tracking-widest">Email</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-transparent border-b border-paper/20 py-3 text-xl focus:border-acid outline-none transition-colors text-paper" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-sm text-paper/50 uppercase tracking-widest">Company</label>
                <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-transparent border-b border-paper/20 py-3 text-xl focus:border-acid outline-none transition-colors text-paper" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-sm text-paper/50 uppercase tracking-widest">Message</label>
              <textarea required rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-transparent border-b border-paper/20 py-3 text-xl focus:border-acid outline-none transition-colors resize-none text-paper"></textarea>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button type="button" onClick={() => setStep(1)} className="px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider border border-paper/20 hover:bg-paper/10 transition-colors duration-300">
                Back
              </button>
              <button type="submit" className="bg-acid text-ink px-12 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-paper transition-colors duration-300">
                Transmit to CRM
              </button>
            </div>
          </motion.form>
        )}

        {step === 3 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-2xl lg:text-4xl font-mono text-acid tracking-tight"
          >
            [ SEQUENCE INITIATED ]<br/><br/>
            <span className="text-paper text-xl">Your brief has been logged into the CM mainframe. Justin and our operatives will make contact shortly.</span>
          </motion.div>
        )}
      </div>
      
      {/* Background noise/grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-acid/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
