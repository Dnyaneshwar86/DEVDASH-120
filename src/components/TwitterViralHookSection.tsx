import React, { useState } from 'react';
import { Copy, Check, Share2, Sparkles, Zap, Share, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export const TwitterViralHookSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const tweetText = `I challenged myself to build and deploy a functional Micro-SaaS from scratch in under 2 hours.

⚡ Result: Built & Deployed in 112 mins.
🚀 Live Demo: https://devdash120.vercel.app
💻 GitHub Repo: https://github.com/sameer/ship-in-two

Need a dev who builds at lightning speed? My DMs are open. Let's talk! 🚀 #MicroSaaS #IndieHacker #BuildInPublic`;

  const copyHook = () => {
    navigator.clipboard.writeText(tweetText);
    setCopied(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 px-4 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="bg-gradient-to-br from-[#0c1220] via-[#090e18] to-black border border-cyan-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>🎯 VIRAL X (TWITTER) & LINKEDIN PROMO HOOK</span>
            </div>

            <h3 className="font-space text-3xl font-black text-white">
              Launch & Flex on <span className="text-cyan-400 text-glow-neon">X (Twitter) & LinkedIn</span>
            </h3>

            <p className="text-sm text-slate-300">
              Copy this high-energy viral hook to post on social media right after deploying your 112-minute project on Vercel!
            </p>

            <div className="bg-black/70 p-4 rounded-2xl border border-white/10 font-mono text-xs text-slate-200 leading-relaxed relative">
              <pre className="whitespace-pre-wrap font-mono">{tweetText}</pre>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full md:w-auto">
            <button
              onClick={copyHook}
              className="w-full md:w-auto px-8 py-4 rounded-2xl bg-cyan-400 text-black font-space font-extrabold text-sm uppercase tracking-wider hover:bg-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copied to Clipboard!' : '1-Click Copy Post Hook'}
            </button>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-white/30 transition-colors flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4 text-cyan-400" /> Post Directly to X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
