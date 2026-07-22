import React from 'react';
import { Zap, Code, ShieldCheck, ShoppingCart, Send } from 'lucide-react';

interface NavbarProps {
  onOpenBuyModal: () => void;
  onOpenHireModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBuyModal, onOpenHireModal }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#09090f]/80 backdrop-blur-xl border-b border-white/10 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#00FF66]/20 via-[#a855f7]/20 to-black border border-[#00FF66]/40 group-hover:border-[#00FF66] transition-all shadow-[0_0_15px_rgba(0,255,106,0.3)]">
            <Zap className="w-5 h-5 text-[#00FF66] animate-pulse" />
            <span className="absolute -bottom-1 -right-1 text-[10px] font-mono font-bold text-[#a855f7] bg-black/90 px-1 rounded border border-[#a855f7]/50">
              &#123;&#125;
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-space text-xl font-extrabold tracking-tight text-white">
                DevDash <span className="text-[#00FF66] text-glow-neon">120</span>
              </span>
              <span className="bg-[#a855f7]/20 text-[#a855f7] border border-[#a855f7]/40 text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Micro-SaaS
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
              <span>⚡ ShipInTwo</span>
              <span className="text-slate-600">•</span>
              <span className="text-[#00FF66]">Live Build</span>
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#card-generator" className="hover:text-[#00FF66] transition-colors flex items-center gap-1.5">
            <Code className="w-4 h-4 text-[#00FF66]" /> Card AI Tool
          </a>
          <a href="#sandbox" className="hover:text-[#a855f7] transition-colors flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#a855f7]" /> Live Sandbox
          </a>
          <a href="#stats" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-cyan-400" /> GitHub Stats
          </a>
        </nav>

        {/* Quick CTA Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBuyModal}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/40 hover:bg-amber-500/20 hover:border-amber-400 transition-all glow-neon-yellow"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-amber-400" />
            <span>Buy Code ($49)</span>
          </button>
          
          <button
            onClick={onOpenHireModal}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-[#00FF66] text-black hover:bg-[#00e65c] shadow-[0_0_20px_rgba(0,255,106,0.5)] transition-all font-space active:scale-95"
          >
            <Send className="w-3.5 h-3.5 fill-black" />
            <span>Hire Me ($30/h)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
