import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, Mail, Search, Instagram, Facebook, TrendingUp, Activity, TrendingDown } from 'lucide-react';

const ACCENT = "#E4FF00"; 

const initialAssets = [
  { id: 'google', name: 'Google Search', icon: Search, value: 4500, trend: +2.4 },
  { id: 'meta', name: 'Meta Ads', icon: Facebook, value: 3200, trend: +1.8 },
  { id: 'insta', name: 'Instagram', icon: Instagram, value: 5100, trend: +3.2 },
  { id: 'web', name: 'Web Traffic', icon: Globe, value: 8900, trend: +0.5 },
  { id: 'email', name: 'Email Marketing', icon: Mail, value: 2100, trend: +4.1 },
];

export default function LiveAssetTracker() {
  const [assets, setAssets] = useState(initialAssets);
  const [history, setHistory] = useState(Array(20).fill(50));

  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(prev => prev.map(asset => {
        const volatility = Math.random() * 100 - 30; 
        const newValue = Math.max(1000, asset.value + volatility);
        const newTrend = ((newValue - asset.value) / asset.value) * 100;
        return { ...asset, value: newValue, trend: newTrend };
      }));
      setHistory(prev => {
        const next = [...prev.slice(1), prev[prev.length - 1] + (Math.random() * 10 - 4)];
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const maxHistory = Math.max(...history);
  const minHistory = Math.min(...history);
  const range = maxHistory - minHistory || 1;
  const points = history.map((val, i) => {
    const x = (i / (history.length - 1)) * 100;
    const y = 100 - ((val - minHistory) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl font-mono overflow-hidden relative my-12">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polyline points={points} fill="none" stroke={ACCENT} strokeWidth="0.5" vectorEffect="non-scaling-stroke" className="transition-all duration-1000 ease-linear"/>
        </svg>
      </div>
      <div className="flex justify-between items-center mb-8 relative z-10 border-b border-[#222] pb-4">
        <div>
          <h2 className="text-white text-xl md:text-2xl font-bold tracking-widest uppercase">Digital Asset Exchange</h2>
          <p className="text-zinc-500 text-sm mt-1">LIVE PERFORMANCE TICKER • PORTFOLIO AGGREGATE</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: ACCENT }}></span><span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: ACCENT }}></span></span>
          <span className="text-zinc-400 text-sm">MARKET OPEN</span>
        </div>
      </div>
      <div className="space-y-6 relative z-10">
        {assets.map((asset) => {
          const Icon = asset.icon;
          const isPositive = asset.trend >= 0;
          const barWidth = Math.min(100, (asset.value / 10000) * 100);
          return (
            <div key={asset.id} className="group">
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-3 text-white"><Icon size={18} className="text-zinc-400 group-hover:text-white transition-colors" /><span className="font-semibold tracking-wide">{asset.name}</span></div>
                <div className="text-right"><div className="text-lg text-white font-medium">{Math.round(asset.value).toLocaleString()} <span className="text-zinc-500 text-sm">VOL</span></div><div className={`text-sm flex items-center justify-end gap-1 ${isPositive ? 'text-[#E4FF00]' : 'text-red-500'}`}>{isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}{Math.abs(asset.trend).toFixed(2)}%</div></div>
              </div>
              <div className="w-full bg-[#1a1a1a] h-3 rounded-full overflow-hidden flex"><motion.div initial={{ width: 0 }} animate={{ width: `${barWidth}%` }} transition={{ type: "spring", stiffness: 50, damping: 15 }} className="h-full rounded-full" style={{ backgroundColor: ACCENT }} /></div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 pt-4 border-t border-[#222] relative z-10 flex items-center justify-between text-xs text-zinc-500 overflow-hidden">
        <div className="flex items-center gap-2 whitespace-nowrap"><Activity size={14} style={{ color: ACCENT }} /><span>SYSTEM UPDATE: REAL TIME FEED ACTIVE</span></div>
        <div className="uppercase tracking-widest text-right">Powered by CM.AI</div>
      </div>
    </div>
  );
}
