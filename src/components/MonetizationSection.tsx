import React from 'react';
import { ShoppingCart, Send, Zap, ShieldCheck, DollarSign, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface MonetizationSectionProps {
  onOpenBuyModal: () => void;
  onOpenHireModal: () => void;
}

export const MonetizationSection: React.FC<MonetizationSectionProps> = ({ onOpenBuyModal, onOpenHireModal }) => {
  return (
    <section className="py-20 px-4 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00FF66]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold mb-4">
          <DollarSign className="w-4 h-4 text-amber-400" />
          <span>💳 DUAL MONETIZATION ENGINE</span>
        </div>
        <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Ready to Launch Your <span className="text-amber-400 text-glow-neon">Micro-SaaS?</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base">
          Get full commercial source code access or hire me to build your custom high-converting SaaS MVP in record time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Option 1: Buy Source Code ($49) - Yellow Glow */}
        <div className="bg-gradient-to-br from-[#18140a] via-[#120f07] to-black border border-amber-500/50 rounded-3xl p-8 shadow-[0_0_35px_rgba(245,158,11,0.2)] flex flex-col justify-between hover:border-amber-400 transition-all group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold border border-amber-500/40">
                Option 1 • Instant Code
              </span>
              <span className="font-space text-3xl font-black text-amber-400">$49</span>
            </div>

            <h3 className="font-space text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              Buy Source Code ($49)
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              Download complete production repository (Vite, React 19, Tailwind CSS v4, Card Generator, Sandbox, Widgets).
            </p>

            <div className="space-y-2.5 font-mono text-xs text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Full TypeScript Codebase + Commercial Rights
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Interactive Sandbox & Live Theme Engines
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Free Future Product Updates & Docs
              </div>
            </div>
          </div>

          <button
            onClick={onOpenBuyModal}
            className="w-full py-4 rounded-2xl bg-amber-500 text-black font-space font-extrabold text-sm uppercase tracking-wider hover:bg-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
          >
            <ShoppingCart className="w-5 h-5" /> Buy Source Code ($49)
          </button>
        </div>

        {/* Option 2: Hire Me for Custom Build ($30/hr) - Neon Green Glow */}
        <div className="bg-gradient-to-br from-[#0a1810] via-[#06120b] to-black border border-[#00FF66]/50 rounded-3xl p-8 shadow-[0_0_35px_rgba(0,255,106,0.2)] flex flex-col justify-between hover:border-[#00FF66] transition-all group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-[#00FF66]/20 text-[#00FF66] text-xs font-mono font-bold border border-[#00FF66]/40">
                Option 2 • Custom Build
              </span>
              <span className="font-space text-3xl font-black text-[#00FF66]">$30<span className="text-xs text-slate-400">/hr</span></span>
            </div>

            <h3 className="font-space text-2xl font-bold text-white mb-2 group-hover:text-[#00FF66] transition-colors">
              Hire Me for Custom Build ($30/hr)
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              Hire an expert full-stack developer to craft your customized SaaS product, API integration, or hyper portfolio.
            </p>

            <div className="space-y-2.5 font-mono text-xs text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66]" /> 2-Hour to 2-Day Guaranteed Delivery Speed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66]" /> Custom UI/UX, Glassmorphism & Dark Mode
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66]" /> Direct WhatsApp & Calendly Priority Support
              </div>
            </div>
          </div>

          <button
            onClick={onOpenHireModal}
            className="w-full py-4 rounded-2xl bg-[#00FF66] text-black font-space font-extrabold text-sm uppercase tracking-wider hover:bg-[#00e65c] shadow-[0_0_25px_rgba(0,255,106,0.5)] transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
          >
            <Send className="w-5 h-5 fill-black" /> Hire Me for Custom Build ($30/hr)
          </button>
        </div>
      </div>
    </section>
  );
};
