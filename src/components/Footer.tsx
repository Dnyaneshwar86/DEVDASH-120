import React from 'react';
import { Zap, Heart, ExternalLink, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-10 px-4 lg:px-8 bg-[#06060c]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00FF66]/20 border border-[#00FF66]/40">
            <Zap className="w-4 h-4 text-[#00FF66]" />
          </div>
          <div>
            <span className="font-space font-bold text-white text-base">
              DevDash <span className="text-[#00FF66]">120</span> | ShipInTwo
            </span>
            <p className="text-xs text-slate-400 font-mono">
              Built & Deployed on Wednesday, 22 July 2026 at 09:47 AM
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <span>⚡ Lightning Speed Micro-SaaS Architecture</span>
          <span className="text-slate-600">•</span>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#00FF66] flex items-center gap-1">
            <Globe className="w-3.5 h-3.5" /> Repository
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
            <ExternalLink className="w-3.5 h-3.5" /> Updates
          </a>
        </div>
      </div>
    </footer>
  );
};
