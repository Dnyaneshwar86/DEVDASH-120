import React, { useState } from 'react';
import type { SandboxConfig } from '../types/index';
import { Terminal, Play, Eye, RotateCcw, Check, Sparkles, Sliders, Code2 } from 'lucide-react';

export const InteractiveSandbox: React.FC = () => {
  const [config, setConfig] = useState<SandboxConfig>({
    headline: 'Build & Ship Micro-SaaS in 120 Minutes ⚡',
    accentColor: '#00FF66',
    borderRadius: 16,
    glassOpacity: 70,
    showBadge: true,
    ctaText: 'Get Started Now'
  });

  const [rawCode, setRawCode] = useState(JSON.stringify(config, null, 2));
  const [isApplied, setIsApplied] = useState(false);
  const [codeError, setCodeError] = useState('');

  const handleApplyCode = () => {
    try {
      const parsed = JSON.parse(rawCode);
      setConfig(parsed);
      setCodeError('');
      setIsApplied(true);
      setTimeout(() => setIsApplied(false), 2000);
    } catch (err: any) {
      setCodeError('Invalid JSON format! Check syntax.');
    }
  };

  const loadPreset = (type: 'cyber' | 'synth' | 'minimal') => {
    let preset: SandboxConfig;
    if (type === 'cyber') {
      preset = {
        headline: 'Lightning Speed Production Architecture ⚡',
        accentColor: '#00FF66',
        borderRadius: 20,
        glassOpacity: 85,
        showBadge: true,
        ctaText: 'Deploy to Vercel'
      };
    } else if (type === 'synth') {
      preset = {
        headline: 'Cyberpunk Synthwave Micro-SaaS Engine 🚀',
        accentColor: '#a855f7',
        borderRadius: 24,
        glassOpacity: 90,
        showBadge: true,
        ctaText: 'Explore Source Code'
      };
    } else {
      preset = {
        headline: 'Clean Minimalist Developer Portfolio 💎',
        accentColor: '#38bdf8',
        borderRadius: 12,
        glassOpacity: 50,
        showBadge: false,
        ctaText: 'Contact Developer'
      };
    }
    setConfig(preset);
    setRawCode(JSON.stringify(preset, null, 2));
    setCodeError('');
  };

  return (
    <section id="sandbox" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/30 text-[#a855f7] text-xs font-mono font-bold mb-4">
          <Terminal className="w-4 h-4 text-[#a855f7]" />
          <span>🎮 INTERACTIVE CODE SANDBOX</span>
        </div>
        <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Test & Edit <span className="text-[#a855f7] text-glow-purple">Live UI Code</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base">
          Modify the JSON config below or adjust the visual controls to see instant real-time changes reflected in the dynamic preview component!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Code Editor Panel */}
        <div className="lg:col-span-6 bg-[#0a0a14] border border-white/15 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
          {/* Header Bar */}
          <div className="bg-[#121222] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="font-mono text-xs text-slate-400 ml-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#00FF66]" /> dev-config.json
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => loadPreset('cyber')}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/30 hover:bg-[#00FF66]/20"
              >
                Cyber
              </button>
              <button
                onClick={() => loadPreset('synth')}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 hover:bg-purple-500/20"
              >
                Synth
              </button>
              <button
                onClick={() => loadPreset('minimal')}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/30 hover:bg-sky-500/20"
              >
                Minimal
              </button>
            </div>
          </div>

          {/* Textarea Code Input */}
          <div className="p-4 flex-1 flex flex-col font-mono text-xs text-emerald-400 bg-black/80">
            <textarea
              rows={12}
              value={rawCode}
              onChange={(e) => {
                setRawCode(e.target.value);
                try {
                  const parsed = JSON.parse(e.target.value);
                  setConfig(parsed);
                  setCodeError('');
                } catch (err) {
                  // Silent fail until user clicks apply or typing completes
                }
              }}
              className="w-full h-full bg-transparent text-slate-200 font-mono text-xs focus:outline-none resize-none leading-relaxed"
              spellCheck={false}
            />
            {codeError && (
              <p className="mt-2 text-xs font-mono text-red-400 bg-red-950/50 p-2 rounded border border-red-500/40">
                ⚠️ {codeError}
              </p>
            )}
          </div>

          {/* Action Bar */}
          <div className="bg-[#121222] p-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-[#00FF66]" /> Live Hot-Reload Active
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => loadPreset('cyber')}
                className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/5"
                title="Reset to default"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={handleApplyCode}
                className="px-4 py-1.5 rounded-lg bg-[#00FF66] text-black font-mono text-xs font-bold hover:bg-[#00e65c] transition-all flex items-center gap-1.5"
              >
                {isApplied ? <Check className="w-4 h-4" /> : <Play className="w-4 h-4 fill-black" />}
                {isApplied ? 'Applied!' : 'Run & Compile'}
              </button>
            </div>
          </div>
        </div>

        {/* Live Rendered Component Output */}
        <div className="lg:col-span-6 bg-[#0c0c1a] border border-white/15 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-cyan-400" /> Live Sandbox Component Output
            </span>
            <span
              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border"
              style={{
                borderColor: config.accentColor,
                color: config.accentColor,
                backgroundColor: `${config.accentColor}15`
              }}
            >
              Realtime Render
            </span>
          </div>

          {/* Dynamically Styled Card */}
          <div
            className="p-8 transition-all duration-300 relative border overflow-hidden"
            style={{
              borderRadius: `${config.borderRadius}px`,
              backgroundColor: `rgba(18, 18, 30, ${config.glassOpacity / 100})`,
              borderColor: `${config.accentColor}50`,
              boxShadow: `0 0 35px -5px ${config.accentColor}30`
            }}
          >
            {config.showBadge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4 border"
                style={{
                  borderColor: `${config.accentColor}60`,
                  color: config.accentColor,
                  backgroundColor: `${config.accentColor}20`
                }}
              >
                <Sparkles className="w-3.5 h-3.5" /> Live Sandbox Active
              </div>
            )}

            <h3 className="font-space text-2xl sm:text-3xl font-black text-white leading-tight">
              {config.headline || 'Dynamic Headline Placeholder'}
            </h3>

            <p className="mt-4 text-slate-300 text-sm leading-relaxed">
              This card's colors, typography borders, glass opacity, and button labels are dynamically generated from the live JSON code editor on the left.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                className="px-6 py-3 font-space text-sm font-bold text-black rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: config.accentColor,
                  boxShadow: `0 0 20px ${config.accentColor}60`
                }}
              >
                {config.ctaText || 'Get Started'}
              </button>

              <span className="text-xs font-mono text-slate-400">
                Radius: <strong className="text-white">{config.borderRadius}px</strong>
              </span>
            </div>
          </div>

          {/* Quick Slider Controls */}
          <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Border Radius</span>
                <span className="text-white">{config.borderRadius}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={config.borderRadius}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  const updated = { ...config, borderRadius: val };
                  setConfig(updated);
                  setRawCode(JSON.stringify(updated, null, 2));
                }}
                className="w-full accent-[#00FF66] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Glass Opacity</span>
                <span className="text-white">{config.glassOpacity}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={config.glassOpacity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  const updated = { ...config, glassOpacity: val };
                  setConfig(updated);
                  setRawCode(JSON.stringify(updated, null, 2));
                }}
                className="w-full accent-[#a855f7] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
