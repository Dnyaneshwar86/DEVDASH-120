import React, { useState } from 'react';
import type { CardData } from '../types/index';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { Sparkles, Download, Copy, Share2, QrCode, Check, RefreshCw, Mail, BadgeCheck, Layers } from 'lucide-react';

export const DigitalCardGenerator: React.FC = () => {
  const [card, setCard] = useState<CardData>({
    name: 'Sameer Deshmukh',
    role: 'Full-Stack SaaS Developer & AI Engineer',
    bio: 'Building high-conversion micro-SaaS products & micro-frontend architectures with 10x speed.',
    skills: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python AI'],
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    email: 'sameer@devdash120.io',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    theme: 'cyber',
    customColor: '#00FF66'
  });

  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [skillInput, setSkillInput] = useState('');

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00FF66', '#a855f7', '#3b82f6', '#f59e0b']
    });
  };

  const handleAddSkill = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!card.skills.includes(skillInput.trim())) {
        setCard({ ...card, skills: [...card.skills, skillInput.trim()] });
      }
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setCard({ ...card, skills: card.skills.filter(s => s !== skillToRemove) });
  };

  const copyCardData = () => {
    const cardText = `🚀 ${card.name} - ${card.role}\nBio: ${card.bio}\nSkills: ${card.skills.join(', ')}\nEmail: ${card.email}`;
    navigator.clipboard.writeText(cardText);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  const themeStyles = {
    cyber: 'bg-gradient-to-br from-[#0c0c1e] via-[#15122b] to-black border-[#00FF66]/50 shadow-[0_0_30px_rgba(0,255,106,0.25)]',
    matrix: 'bg-gradient-to-br from-black via-[#031d0d] to-[#011409] border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.25)]',
    synth: 'bg-gradient-to-br from-[#1a0b2e] via-[#2d124d] to-[#090314] border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.25)]',
    minimal: 'bg-slate-900/90 border-slate-700/60 shadow-xl',
    gold: 'bg-gradient-to-br from-[#1c1917] via-[#292524] to-black border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.25)]'
  };

  return (
    <section id="card-generator" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-mono font-bold mb-4">
          <Sparkles className="w-4 h-4 animate-spin text-[#00FF66]" />
          <span>⚡ CORE LIVE TOOL: 5-SECOND CARD GENERATOR</span>
        </div>
        <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Generate Your <span className="text-[#00FF66] text-glow-neon">AI Digital Dev Card</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base">
          Fill in your details below and instantly watch your high-converting digital business card come alive in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Controls Panel */}
        <div className="lg:col-span-6 bg-[#0e0e1a]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-xl space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="font-space text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#00FF66]" /> Developer Details
            </h3>
            <button
              onClick={() => {
                setCard({
                  name: 'Aarav Mehta',
                  role: 'Senior React & Micro-SaaS Architect',
                  bio: 'Crafting pixel-perfect web applications, custom micro-services, and scalable cloud solutions.',
                  skills: ['React', 'TypeScript', 'GraphQL', 'Docker', 'Vercel', 'PostgreSQL'],
                  github: 'https://github.com',
                  twitter: 'https://twitter.com',
                  linkedin: 'https://linkedin.com',
                  email: 'aarav@devdash120.io',
                  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
                  theme: 'synth',
                  customColor: '#a855f7'
                });
                triggerConfetti();
              }}
              className="text-xs font-mono text-[#00FF66] hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Sample Preset
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                value={card.name}
                onChange={(e) => setCard({ ...card, name: e.target.value })}
                className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors"
                placeholder="e.g. Sameer Deshmukh"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Role / Tech Title</label>
              <input
                type="text"
                value={card.role}
                onChange={(e) => setCard({ ...card, role: e.target.value })}
                className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors"
                placeholder="e.g. Full-Stack SaaS Developer"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">Short Bio / Tagline</label>
            <textarea
              rows={2}
              value={card.bio}
              onChange={(e) => setCard({ ...card, bio: e.target.value })}
              className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors resize-none"
              placeholder="Tell clients what you build..."
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">
              Tech Stack Skills (Press Enter to add)
            </label>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleAddSkill}
              className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors mb-2"
              placeholder="e.g. Next.js, Stripe, AWS..."
            />
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
              {card.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/30"
                >
                  {skill}
                  <button onClick={() => removeSkill(skill)} className="hover:text-red-400 font-bold ml-1">×</button>
                </span>
              ))}
            </div>
          </div>

          {/* Theme Selector */}
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-2">Select Theme Presets</label>
            <div className="grid grid-cols-5 gap-2">
              {[
                { id: 'cyber', label: 'Cyber', color: 'from-[#00FF66] to-purple-600' },
                { id: 'matrix', label: 'Matrix', color: 'from-emerald-400 to-green-800' },
                { id: 'synth', label: 'Synth', color: 'from-purple-500 to-pink-600' },
                { id: 'minimal', label: 'Dark', color: 'from-slate-700 to-slate-900' },
                { id: 'gold', label: 'Gold', color: 'from-amber-400 to-yellow-700' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setCard({ ...card, theme: t.id as any })}
                  className={`flex flex-col items-center gap-1 p-2 rounded-xl border text-[11px] font-mono transition-all ${
                    card.theme === t.id
                      ? 'border-[#00FF66] bg-white/10 font-bold scale-105'
                      : 'border-white/10 hover:border-white/30 bg-black/40'
                  }`}
                >
                  <div className={`w-full h-4 rounded bg-gradient-to-r ${t.color}`} />
                  <span className="text-slate-200">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Card Preview Panel */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span>
              Live Card Render Output
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowQR(!showQR)}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-white/30 flex items-center gap-1"
              >
                <QrCode className="w-3.5 h-3.5 text-[#00FF66]" /> {showQR ? 'Hide QR' : 'Show QR'}
              </button>
              <button
                onClick={copyCardData}
                className="px-3 py-1 rounded-md bg-[#00FF66]/20 border border-[#00FF66]/40 text-xs font-mono font-bold text-[#00FF66] hover:bg-[#00FF66]/30 flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy Data'}
              </button>
            </div>
          </div>

          {/* The Digital Card Component */}
          <div
            className={`relative rounded-3xl p-7 border backdrop-blur-2xl transition-all duration-300 ${
              themeStyles[card.theme]
            } group`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF66]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={card.avatar}
                  alt={card.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#00FF66]/60 shadow-[0_0_15px_rgba(0,255,106,0.3)] group-hover:scale-105 transition-transform"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-space text-2xl font-black text-white tracking-tight">
                      {card.name || 'Your Name'}
                    </h3>
                    <BadgeCheck className="w-5 h-5 text-[#00FF66]" />
                  </div>
                  <p className="text-xs font-mono text-[#00FF66] font-medium mt-0.5">
                    {card.role || 'Your Developer Title'}
                  </p>
                </div>
              </div>

              {showQR && (
                <div className="bg-white p-2 rounded-xl shadow-2xl animate-in zoom-in-95 duration-150">
                  <QRCodeSVG value={`https://devdash120.io/card/${encodeURIComponent(card.name)}`} size={70} />
                </div>
              )}
            </div>

            <p className="mt-5 text-sm text-slate-300 leading-relaxed font-normal">
              {card.bio || 'Your developer bio description will display here...'}
            </p>

            <div className="mt-6">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Verified Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {card.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-200 border border-white/10 hover:border-[#00FF66]/50 transition-colors"
                  >
                    ⚡ {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 pt-4 border-t border-white/10 flex items-center justify-between text-slate-400 text-xs">
              <div className="flex items-center gap-3 font-mono">
                <a href={card.github} target="_blank" rel="noreferrer" className="hover:text-[#00FF66] transition-colors">
                  GitHub
                </a>
                <a href={card.twitter} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  X / Twitter
                </a>
                <a href={card.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
                <a href={`mailto:${card.email}`} className="hover:text-amber-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="font-mono text-[10px] text-slate-400 flex items-center gap-1">
                <span>DevDash Card ID</span>
                <span className="text-[#00FF66] font-bold">#8F92</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => {
                triggerConfetti();
                alert('Card generated successfully! Check copied payload.');
              }}
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#00FF66] to-emerald-500 text-black font-space font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,255,106,0.3)]"
            >
              <Download className="w-4 h-4" /> Export Card Payload
            </button>

            <button
              onClick={copyCardData}
              className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Share2 className="w-4 h-4 text-[#a855f7]" /> Share Card
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
