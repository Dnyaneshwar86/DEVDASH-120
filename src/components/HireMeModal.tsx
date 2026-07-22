import React, { useState } from 'react';
import { X, Send, Calendar, MessageSquare, Clock, CheckCircle2, Zap, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    projectScope: 'micro-saas',
    timeline: '2-days',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0b1410] border border-[#00FF66]/50 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-[0_0_50px_rgba(0,255,106,0.25)] relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#00FF66]/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5 border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-[#00FF66] font-mono text-xs font-bold mb-2">
              <Zap className="w-4 h-4 text-[#00FF66]" /> DIRECT DEVELOPER BOOKING ($30/HR)
            </div>

            <h3 className="font-space text-2xl font-black text-white">
              Hire Me for <span className="text-[#00FF66] text-glow-neon">Custom Build</span>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Need a micro-SaaS, custom MVP, or React dashboard built in record speed? Let's build it together.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Name / Company</label>
                <input
                  type="text"
                  required
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00FF66]"
                  placeholder="e.g. Alex Rivera (Tech Lead)"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00FF66]"
                  placeholder="alex@company.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Project Type</label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00FF66]"
                  >
                    <option value="micro-saas">Hyper Micro-SaaS MVP</option>
                    <option value="portfolio">Custom Dev Portfolio</option>
                    <option value="dashboard">Next.js React Dashboard</option>
                    <option value="consulting">Hourly Code Review ($30/h)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Target Speed</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00FF66]"
                  >
                    <option value="2-hours">2-Hour Hyper Ship ⚡</option>
                    <option value="2-days">2-Day Production Ship</option>
                    <option value="1-week">1-Week Full SaaS</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Project Description</label>
                <textarea
                  rows={2}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00FF66] resize-none"
                  placeholder="Outline core features you want built..."
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#00FF66] text-black font-space font-extrabold text-xs uppercase tracking-wider hover:bg-[#00e65c] transition-all shadow-[0_0_20px_rgba(0,255,106,0.4)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 fill-black" /> Send Inquiry & Book ($30/h)
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hi%20Sameer,%20I%20want%20to%20hire%20you%20for%20a%20Custom%20Build"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 font-mono text-xs font-bold hover:bg-emerald-900 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Direct
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#00FF66]/20 text-[#00FF66] rounded-full flex items-center justify-center mx-auto border border-[#00FF66]">
              <CheckCircle2 className="w-10 h-10 text-[#00FF66]" />
            </div>
            <h3 className="font-space text-2xl font-black text-white">Inquiry Received! 🚀</h3>
            <p className="text-sm text-slate-300">
              I'll review your project requirements and respond to <strong>{formData.email}</strong> within 1 hour!
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-[#00FF66] text-black font-bold font-space text-xs uppercase"
            >
              Done & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
