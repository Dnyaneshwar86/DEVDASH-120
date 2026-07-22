import React, { useEffect, useState } from 'react';
import { Sparkles, ExternalLink, Tag } from 'lucide-react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseBannerProps {
  client?: string;
  slot?: string;
  format?: string;
  responsive?: string;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  client = 'ca-pub-9682410708621086',
  slot = '1234567890',
  format = 'auto',
  responsive = 'true'
}) => {
  const [adIndex, setAdIndex] = useState(0);

  // Sponsored Ad rotation list for instant visual ad rendering
  const adsList = [
    {
      title: '⚡ Deploy Next.js & React Apps in 1-Click with Vercel Edge',
      desc: 'Experience 10x faster global CDN deployment, zero-config serverless functions & automatic HTTPS.',
      sponsor: 'Vercel Sponsor',
      tag: 'Cloud Hosting',
      cta: 'Claim $100 Free Credits',
      url: 'https://vercel.com',
      gradient: 'from-[#00FF66]/20 via-emerald-950 to-black',
      border: 'border-[#00FF66]/50',
      textAccent: 'text-[#00FF66]'
    },
    {
      title: '🚀 Accept Global Payments Instantly with Stripe & Razorpay',
      desc: 'Scale your SaaS revenue globally. 135+ currencies, UPI, Apple Pay, credit cards, and automated billing.',
      sponsor: 'Stripe & Razorpay Ads',
      tag: 'SaaS Monetization',
      cta: 'Start Integrating Free',
      url: 'https://stripe.com',
      gradient: 'from-purple-900/30 via-indigo-950 to-black',
      border: 'border-purple-500/50',
      textAccent: 'text-purple-400'
    },
    {
      title: '🤖 Build Next-Gen AI Apps with OpenAI GPT-4o API',
      desc: 'Integrate real-time speech, vision, dynamic reasoning, and high-speed LLM function calling.',
      sponsor: 'OpenAI Partner',
      tag: 'AI Technology',
      cta: 'Get Free API Key',
      url: 'https://openai.com',
      gradient: 'from-amber-950/40 via-yellow-950/20 to-black',
      border: 'border-amber-500/50',
      textAccent: 'text-amber-400'
    }
  ];

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      }
    } catch (err) {
      console.log('AdSense blocked by extension or not loaded:', err);
    }

    const interval = setInterval(() => {
      setAdIndex((prev) => (prev + 1) % adsList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentAd = adsList[adIndex];

  return (
    <div className="my-10 max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2 px-1">
        <span className="flex items-center gap-1.5 text-[#00FF66]">
          <Tag className="w-3.5 h-3.5" /> SPONSORED ADVERTISEMENT • GOOGLE ADSENSE (ca-pub-9682410708621086)
        </span>
        <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[10px]">
          Ad Unit #1
        </span>
      </div>

      {/* Google AdSense Dynamic Slot Unit with error-safe wrapper & SSR guard */}
      <div className="mb-4 w-full min-h-[90px] flex justify-center items-center overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-2">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '90px' }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      </div>

      {/* Instant Interactive Visual Sponsor Ad Banner */}
      <div className={`bg-gradient-to-r ${currentAd.gradient} border ${currentAd.border} rounded-2xl p-6 shadow-2xl transition-all duration-500 backdrop-blur-xl relative overflow-hidden group`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[10px] uppercase font-bold border border-white/20">
                {currentAd.sponsor}
              </span>
              <span className={`font-mono text-xs font-bold ${currentAd.textAccent} flex items-center gap-1`}>
                <Sparkles className="w-3.5 h-3.5" /> {currentAd.tag}
              </span>
            </div>

            <h4 className="font-space text-lg sm:text-xl font-black text-white group-hover:text-[#00FF66] transition-colors">
              {currentAd.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {currentAd.desc}
            </p>
          </div>

          <a
            href={currentAd.url}
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white text-black font-space font-extrabold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg active:scale-95"
          >
            <span>{currentAd.cta}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Rotation Dots */}
        <div className="mt-4 flex items-center justify-center gap-1.5 pt-2 border-t border-white/10">
          {adsList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setAdIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                adIndex === idx ? 'w-6 bg-[#00FF66]' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
