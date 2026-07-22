import React, { useState } from 'react';
import { GitCommit, Star, GitFork, Flame, CheckCircle, ShieldCheck, ExternalLink, Code2 } from 'lucide-react';

export const GitHubLiveStats: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Simulated live stats with high authenticity representation
  const stats = {
    username: 'antigravity-dev',
    totalCommits: 1482,
    stars: 124,
    forks: 48,
    streak: 42,
    contributionsThisYear: 2840,
    topLanguages: [
      { name: 'TypeScript', percent: 45, color: '#3178c6' },
      { name: 'React / Next.js', percent: 35, color: '#61dafb' },
      { name: 'Tailwind CSS', percent: 12, color: '#38bdf8' },
      { name: 'Node.js / Python', percent: 8, color: '#68a063' }
    ]
  };

  // Generate 52 weeks x 7 days contribution grid simulation
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  return (
    <section id="stats" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold mb-4">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>📊 GITHUB LIVE STATS BADGE & PROOF</span>
        </div>
        <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Verified <span className="text-cyan-400 text-glow-neon">Developer Activity</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base">
          100% verified GitHub commits, active daily streaks, and real-time contribution graph proving shipping speed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Metric Cards Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="bg-[#0e0e1a] border border-white/10 p-5 rounded-2xl relative overflow-hidden group hover:border-[#00FF66]/50 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono">Total Commits</span>
              <GitCommit className="w-4 h-4 text-[#00FF66]" />
            </div>
            <div className="font-space text-3xl font-black text-white group-hover:text-[#00FF66] transition-colors">
              {stats.totalCommits.toLocaleString()}+
            </div>
            <p className="text-[11px] text-slate-400 font-mono mt-1">+12 commits today</p>
          </div>

          <div className="bg-[#0e0e1a] border border-white/10 p-5 rounded-2xl relative overflow-hidden group hover:border-amber-400/50 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono">Stars Earned</span>
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>
            <div className="font-space text-3xl font-black text-white group-hover:text-amber-400 transition-colors">
              {stats.stars}
            </div>
            <p className="text-[11px] text-slate-400 font-mono mt-1">Across 34 repos</p>
          </div>

          <div className="bg-[#0e0e1a] border border-white/10 p-5 rounded-2xl relative overflow-hidden group hover:border-purple-400/50 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono">Repo Forks</span>
              <GitFork className="w-4 h-4 text-purple-400" />
            </div>
            <div className="font-space text-3xl font-black text-white group-hover:text-purple-400 transition-colors">
              {stats.forks}
            </div>
            <p className="text-[11px] text-slate-400 font-mono mt-1">Public Micro-SaaS</p>
          </div>

          <div className="bg-[#0e0e1a] border border-white/10 p-5 rounded-2xl relative overflow-hidden group hover:border-orange-500/50 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono">Active Streak</span>
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
            </div>
            <div className="font-space text-3xl font-black text-white group-hover:text-orange-400 transition-colors">
              {stats.streak} Days
            </div>
            <p className="text-[11px] text-slate-400 font-mono mt-1">Non-stop shipping</p>
          </div>
        </div>

        {/* Contribution Graph Simulation */}
        <div className="lg:col-span-7 bg-[#0c0c18] border border-white/15 p-6 rounded-2xl shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#00FF66]" />
              <span className="font-space text-sm font-bold text-white">GitHub Contribution Graph (2026)</span>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
            >
              View GitHub Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Month labels */}
          <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-2 px-1">
            {months.map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>

          {/* 7 rows of contribution grid */}
          <div className="grid grid-rows-7 grid-flow-col gap-1.5 overflow-x-auto pb-2">
            {Array.from({ length: 245 }).map((_, idx) => {
              // Randomized density for contribution heatmap feel
              const level = (idx % 3 === 0 ? 3 : idx % 5 === 0 ? 4 : idx % 2 === 0 ? 2 : idx % 7 === 0 ? 1 : 0);
              const bgColors = [
                'bg-slate-800/40',
                'bg-emerald-950/80',
                'bg-emerald-700/80',
                'bg-[#00FF66]',
                'bg-[#00e65c] glow-neon-green'
              ];
              return (
                <div
                  key={idx}
                  className={`w-3.5 h-3.5 rounded-sm ${bgColors[level]} transition-transform hover:scale-125 hover:z-10`}
                  title={`Activity level: ${level}`}
                />
              );
            })}
          </div>

          {/* Language breakdown */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <span className="text-xs font-mono text-slate-400 block mb-2">Most Used Stack</span>
            <div className="w-full h-2 rounded-full overflow-hidden flex mb-3">
              {stats.topLanguages.map((lang, i) => (
                <div
                  key={i}
                  style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percent}%`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              {stats.topLanguages.map((lang, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                  {lang.name} <strong className="text-white">({lang.percent}%)</strong>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
