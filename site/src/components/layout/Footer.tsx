import { motion } from "motion/react";
import React from "react";
import { Ollie } from "../ui/Ollie";
import { CMLogo } from "../ui/CMLogo";
import { FooterGlobe } from "../3d/FooterGlobe";
import { MagneticButton } from "../ui/MagneticButton";

export function Footer() {
  const links = [
    { name: "Work", url: "/#work" },
    { name: "The Heart", url: "/heart" },
    { name: "Services", url: "/#services" },
    { name: "Careers", url: "/careers" }
  ];

  const socials = [
    { name: "Facebook", url: "https://www.facebook.com/ContentMerchants/" },
    { name: "Instagram", url: "https://www.instagram.com/contentmerchants/" },
    { name: "X", url: "https://x.com/ContentMerchant" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/10897917/admin/dashboard/" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UC89_mz1UYZuG9uYA7G4U8kA" },
    { name: "TikTok", url: "https://www.tiktok.com/@contentmerchants" }
  ];

  return (
    <footer data-theme="dark" className="bg-ink text-paper py-12 px-6 lg:px-12 border-t border-paper/10 select-none">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
        className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-6"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }} className="col-span-1 md:col-span-2">
          <div className="mb-6">
            <Ollie className="text-paper" eyeColor="var(--color-ink)" showText={false} />
          </div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-6">Content<br/>Merchants</h2>
          <div className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-acid">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acid opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-acid"></span>
            </span>
            Live System Status: Optimal
          </div>
        </motion.div>
        
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }}>
          <h4 className="font-mono text-xs uppercase tracking-widest text-paper/50 mb-6">Index</h4>
          <ul className="space-y-4 font-medium">
            {links.map(link => (
              <li key={link.name}><a href={link.url} className="hover:text-acid transition-colors">{link.name}</a></li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }}>
          <h4 className="font-mono text-xs uppercase tracking-widest text-paper/50 mb-6">Social</h4>
          <ul className="space-y-4 font-medium mb-8">
            {socials.map(social => (
              <li key={social.name}><a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-acid transition-colors">{social.name}</a></li>
            ))}
          </ul>
          <h4 className="font-mono text-xs uppercase tracking-widest text-paper/50 mb-6">Action</h4>
          <MagneticButton className="bg-acid text-ink px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-paper transition-colors duration-300 inline-block">
            Book an AI Audit
          </MagneticButton>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-24 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-end gap-8 font-mono text-xs uppercase tracking-widest text-paper/40"
      >
        <div className="flex flex-col items-start gap-6">
          <CMLogo className="h-16 w-auto text-paper" />
          <p>&copy; 2026 Content Merchants. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <FooterGlobe />
          <p>AI Forward Digital Excellence.</p>
        </div>
      </motion.div>
    </footer>
  );
}
