import React from 'react';
import { Zap, Code, ShieldCheck, ArrowRight, Play, Sparkles, Star, GitCommit } from 'lucide-react';

interface HeroProps {
  onOpenBuyModal: () => void;
  onOpenHireModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBuyModal, onOpenHireModal }) => {
  return (
    <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic Background Neon Blobs */}
      <div className="absolute -top-30 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#00FF66]/20 via-purple-600/20 to-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
        {/* Speed Pill Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#00FF66]/40 backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,106,0.2)] max-w-full">
          <Zap className="w-4 h-4 text-[#00FF66] animate-bounce shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono font-bold text-white truncate">
            2-HOUR HYPER BUILD: <span className="text-[#00FF66]">LIVE & DEPLOYED</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping shrink-0"></span>
        </div>

        {/* Hero Title */}
        <h1 className="font-space text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15]">
          Lightning Fast <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#00FF66] via-emerald-400 to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,255,106,0.4)]">
            Micro-SaaS & Portfolio Engine
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Craft high-conversion AI digital cards, test live editable UI sandboxes, verify GitHub contribution proof, and monetize instantly.
        </p>

        {/* Mobile Responsive Stacked Call To Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <button
            onClick={onOpenBuyModal}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-amber-500 text-black font-space font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>Buy Source Code ($49)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenHireModal}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#00FF66] text-black font-space font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-[#00e65c] shadow-[0_0_30px_rgba(0,255,106,0.5)] transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Zap className="w-4 h-4 fill-black" />
            <span>Hire Me for Custom Build ($30/h)</span>
          </button>
        </div>

        {/* Live Metrics Trust Banner */}
        <div className="pt-8 sm:pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
          <div className="bg-white/5 border border-white/10 p-3 sm:p-3.5 rounded-xl backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block">Build Speed</span>
            <span className="font-space text-base sm:text-lg font-bold text-[#00FF66]">01h : 48m</span>
          </div>

          <div className="bg-white/5 border border-white/10 p-3 sm:p-3.5 rounded-xl backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block">Tech Framework</span>
            <span className="font-space text-base sm:text-lg font-bold text-white truncate block">Vite + React 19</span>
          </div>

          <div className="bg-white/5 border border-white/10 p-3 sm:p-3.5 rounded-xl backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block">Live Features</span>
            <span className="font-space text-base sm:text-lg font-bold text-[#a855f7]">5 Core Modules</span>
          </div>

          <div className="bg-white/5 border border-white/10 p-3 sm:p-3.5 rounded-xl backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block">Status</span>
            <span className="font-space text-base sm:text-lg font-bold text-cyan-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span> Deployed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
