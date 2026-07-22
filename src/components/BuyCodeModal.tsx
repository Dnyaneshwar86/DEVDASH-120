import React, { useState } from 'react';
import { X, ShoppingCart, CheckCircle, ShieldCheck, Zap, Download, CreditCard, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BuyCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BuyCodeModal: React.FC<BuyCodeModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<'single' | 'agency'>('single');
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchased, setPurchased] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPurchased(true);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e0e1b] border border-amber-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-[0_0_50px_rgba(245,158,11,0.25)] relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5 border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {!purchased ? (
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold mb-2">
              <ShoppingCart className="w-4 h-4" /> INSTANT SOURCE CODE ACCESS
            </div>

            <h3 className="font-space text-2xl font-black text-white">
              Own <span className="text-amber-400">DevDash 120</span> Full Source Code
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Get complete production Vite + React + TypeScript + Tailwind source code with commercial usage license.
            </p>

            {/* License Selection */}
            <div className="mt-5 space-y-3">
              <div
                onClick={() => setSelectedPlan('single')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedPlan === 'single'
                    ? 'border-amber-400 bg-amber-500/10'
                    : 'border-white/10 bg-black/40 hover:border-white/30'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-space font-bold text-white text-base">Standard Developer License</span>
                  <span className="font-space font-black text-2xl text-amber-400">$49</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Single project / SaaS deployment license with full rights.</p>
              </div>

              <div
                onClick={() => setSelectedPlan('agency')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedPlan === 'agency'
                    ? 'border-amber-400 bg-amber-500/10'
                    : 'border-white/10 bg-black/40 hover:border-white/30'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-space font-bold text-white text-base">Agency & Unlimited License</span>
                  <span className="font-space font-black text-2xl text-amber-400">$129</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Unlimited commercial client builds & custom white-label.</p>
              </div>
            </div>

            {/* Features Checklist */}
            <div className="mt-5 space-y-2 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" /> Full Vite + React 19 + TypeScript Codebase
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" /> AI Card Generator + Realtime Sandbox Engine
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" /> Live Build Speed Tracker Widget + GitHub Proof
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" /> 1-Click Vercel / Netlify Deployment Ready
              </div>
            </div>

            {/* Action Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="mt-6 w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black font-space font-extrabold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity shadow-[0_0_25px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Zap className="w-4 h-4 animate-spin text-black" /> Processing Payment...
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" /> Buy Now on Gumroad / Stripe (${selectedPlan === 'single' ? '49' : '129'})
                </>
              )}
            </button>

            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-mono text-slate-400">
              <Lock className="w-3 h-3 text-amber-400" /> 256-Bit SSL Encrypted Instant Digital Download
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-400">
              <CheckCircle className="w-10 h-10 text-amber-400" />
            </div>
            <h3 className="font-space text-2xl font-black text-white">Purchase Confirmed! 🎉</h3>
            <p className="text-sm text-slate-300">
              Thank you! Your full source code download zip and license key have been generated.
            </p>
            <div className="bg-black/60 p-4 rounded-xl border border-white/10 font-mono text-xs text-amber-300">
              License Key: DEVDASH-120-SHIP-2026-X99
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-amber-400 text-black font-bold font-space text-xs uppercase"
            >
              Download Zip & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
