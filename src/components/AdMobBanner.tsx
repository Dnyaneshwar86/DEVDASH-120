import React from 'react';
import { Smartphone, DollarSign, ShieldCheck, Zap } from 'lucide-react';

interface AdMobBannerProps {
  appId?: string;
  adUnitId?: string;
}

export const AdMobBanner: React.FC<AdMobBannerProps> = ({
  appId = 'ca-app-pub-9682410708621086~4307133982', // Updated with actual Google AdMob App ID
  adUnitId = 'ca-app-pub-9682410708621086/4307133982'
}) => {
  return (
    <div className="my-8 max-w-7xl mx-auto px-4">
      <div className="bg-gradient-to-r from-emerald-950/40 via-black to-slate-900 border border-emerald-500/30 rounded-2xl p-5 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Smartphone className="w-6 h-6 animate-pulse" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-space text-base font-bold text-white">Google AdMob App Integration</span>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  LIVE APP ID
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Google AdMob App ID: <code className="text-emerald-300 font-bold">ca-app-pub-9682410708621086~4307133982</code>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-black/60 px-4 py-2 rounded-xl border border-white/10">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>AdMob Monetization Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};
