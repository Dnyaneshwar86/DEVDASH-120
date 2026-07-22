import React, { useState, useEffect } from 'react';
import { Zap, Clock, CheckCircle2, GitCommit, ChevronDown, ChevronUp, Terminal } from 'lucide-react';

export const LiveSpeedWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(6480); // 1h 48m baseline
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, '0')}h : ${mins.toString().padStart(2, '0')}m : ${secs.toString().padStart(2, '0')}s`;
  };

  return (
    <div className="fixed top-20 right-4 z-40 flex flex-col items-end gap-2">
      {/* Floating Badge Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-[#00FF66]/50 shadow-[0_0_20px_rgba(0,255,106,0.25)] hover:border-[#00FF66] transition-all backdrop-blur-md cursor-pointer"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF66]"></span>
        </span>
        
        <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-[#00FF66] animate-bounce" />
          <span className="text-[#00FF66] font-extrabold">Built & Deployed in</span>
          <span className="bg-black/60 px-2 py-0.5 rounded text-amber-300 border border-amber-500/30">
            {formatTime(secondsElapsed).slice(0, 10)}
          </span>
        </span>

        {isOpen ? (
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
        )}
      </button>

      {/* Expanded Speed Analytics Panel */}
      {isOpen && (
        <div className="w-80 bg-[#0c0c16]/95 border border-white/15 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl text-xs space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <span className="font-space font-bold text-white flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00FF66]" /> 2-Hour Hyper Build Logs
            </span>
            <span className="bg-[#00FF66]/20 text-[#00FF66] px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border border-[#00FF66]/40">
              Vercel Live
            </span>
          </div>

          {/* Timeline Breakdown */}
          <div className="space-y-2 font-mono text-[11px]">
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF66]" /> Setup & Vite Config
              </span>
              <span className="text-slate-400">08 Mins</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF66]" /> AI Card Generator
              </span>
              <span className="text-slate-400">35 Mins</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF66]" /> Interactive Sandbox
              </span>
              <span className="text-slate-400">28 Mins</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF66]" /> GitHub & Monetization
              </span>
              <span className="text-slate-400">22 Mins</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF66]" /> Polish & Deployment
              </span>
              <span className="text-slate-400">15 Mins</span>
            </div>
          </div>

          <div className="bg-black/60 rounded-xl p-2.5 border border-white/5 font-mono text-[10px] text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-200">
              <Terminal className="w-3 h-3 text-[#a855f7]" /> git commit -m "feat: complete hyper-speed SaaS"
            </div>
            <div className="flex items-center gap-1 text-[#00FF66]">
              <GitCommit className="w-3 h-3" /> Commit SHA: 8f2a99c • Deployed 100% clean
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
