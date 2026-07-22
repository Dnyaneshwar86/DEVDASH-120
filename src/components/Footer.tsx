import React from 'react';
import { Zap, ExternalLink, Globe, MessageSquare, Mail, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-10 px-4 lg:px-8 bg-[#06060c]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00FF66]/20 border border-[#00FF66]/40 shadow-[0_0_15px_rgba(0,255,106,0.3)]">
            <Zap className="w-4 h-4 text-[#00FF66]" />
          </div>
          <div className="text-left">
            <span className="font-space font-bold text-white text-base">
              DevDash <span className="text-[#00FF66]">120</span> | ShipInTwo ⚡
            </span>
            <p className="text-xs text-slate-400 font-mono">
              Built & Deployed on Wednesday, 22 July 2026 at 09:47 AM IST
            </p>
          </div>
        </div>

        {/* Clickable Social & Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300">
          <a
            href="https://github.com/Dnyaneshwar86/DEVDASH-120"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00FF66] hover:text-[#00FF66] transition-all flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5 text-[#00FF66]" /> GitHub Repo
          </a>

          <a
            href="https://wa.me/919682410708?text=Hi!%20I%20saw%20your%20DevDash%20120%20Micro-SaaS%20portfolio%20and%20want%20to%20hire%20you."
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Direct
          </a>

          <a
            href="mailto:dnyaneshwar.devdash120@gmail.com?subject=Hire%20Developer%20-%20DevDash%20120"
            className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> Email Me
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400 hover:text-purple-400 transition-all flex items-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5" /> X (Twitter)
          </a>
        </div>
      </div>
    </footer>
  );
};
