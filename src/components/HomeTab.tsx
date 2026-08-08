import React from 'react';
import { HomeConfig } from '../types';
import { FormattedMathText } from './KatexMath';

interface HomeTabProps {
  home: HomeConfig;
  onNavigateTab: (tab: string) => void;
  onExplode?: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ home, onNavigateTab, onExplode }) => {
  const ann = home.announcement || home.highlightBadge;
  const isAnnEnabled = home.announcement ? home.announcement.enabled !== false : !!home.highlightBadge;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Featured Announcement Banner */}
      {ann && isAnnEnabled && (
        <section className="bg-slate-950/90 border-l-4 border-l-emerald-400 border border-emerald-500/30 rounded-xl p-5 sm:p-6 shadow-xl backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="p-3 bg-emerald-400/10 text-emerald-400 rounded-xl shrink-0 mt-0.5 sm:mt-0">
              <i className={`${ann.icon || 'fa-solid fa-bullhorn'} text-xl`}></i>
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                {ann.badge && (
                  <span className="bg-emerald-400 text-slate-950 px-2.5 py-0.5 text-[11px] font-extrabold font-mono uppercase tracking-wider rounded">
                    {ann.badge}
                  </span>
                )}
                {ann.date && (
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    [{ann.date}]
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-mono">
                {ann.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {ann.description}
              </p>
            </div>
          </div>
          {ann.link && (
            <a
              href={ann.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold uppercase font-mono rounded text-xs transition cursor-pointer flex items-center gap-1.5 shadow"
            >
              <span>Details</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          )}
        </section>
      )}

      {/* 01 About Section */}
      <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 sm:p-8 shadow-xl backdrop-blur-md space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
              01
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Biography & Profile
            </h2>
          </div>
        </div>

        <p className="text-base sm:text-lg font-mono text-emerald-400/90 leading-relaxed italic">
          "{home.tagline}"
        </p>

        <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
          {home.bioParagraphs.map((para, idx) => (
            <p key={idx}>
              <FormattedMathText text={para} />
            </p>
          ))}
        </div>
      </section>

      {/* 02 Interactive Simulation Box */}
      <section className="bg-slate-950/80 border-l-2 border-emerald-400 border-y border-r border-slate-800 p-6 rounded-xl shadow-xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
              02
            </div>
            <div className="bg-emerald-400 text-slate-950 px-2.5 py-0.5 text-[11px] font-bold uppercase font-mono tracking-wider">
              Active Node Simulation
            </div>
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-white mt-2">
            Topological Node Chaos & Physics
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Simulating particle interactions as a metaphor for information decay and mean curvature flows. Click anywhere on the viewport to detonate geometric node bursts!
          </p>
        </div>

        <button
          onClick={onExplode}
          className="shrink-0 bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-5 py-2.5 font-bold uppercase tracking-wider text-xs font-mono shadow-lg transition cursor-pointer flex items-center gap-2"
        >
          <i className="fa-solid fa-burst text-slate-950"></i>
          <span>Explode Nodes Now</span>
        </button>
      </section>

      {/* 03 Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Research Overview */}
        <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800 rounded-xl p-6 shadow-xl backdrop-blur-md flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400">
                  R
                </div>
                <h3 className="font-bold text-lg uppercase tracking-tight text-white">Research Focus</h3>
              </div>
              <button
                onClick={() => onNavigateTab('research')}
                className="text-xs font-mono text-emerald-400 hover:underline uppercase tracking-wider flex items-center gap-1 cursor-pointer"
              >
                <span>Explore</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Specializing in higher codimension minimal submanifolds, mean curvature flow (MCF) solitons, and non-linear geometric PDEs.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Minimal Submanifolds', 'Mean Curvature Flow', 'Translating Solitons', 'Geometric PDEs'].map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-1 bg-slate-900 text-slate-300 rounded border border-slate-800 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Overview */}
        <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800 rounded-xl p-6 shadow-xl backdrop-blur-md flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400">
                  T
                </div>
                <h3 className="font-bold text-lg uppercase tracking-tight text-white">Teaching</h3>
              </div>
              <button
                onClick={() => onNavigateTab('teaching')}
                className="text-xs font-mono text-emerald-400 hover:underline uppercase tracking-wider flex items-center gap-1 cursor-pointer"
              >
                <span>View</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Experienced instructor for Differential Geometry, Multivariable Calculus, Advanced Calculus, and Geometric Measure Theory.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['NUTN Courses', 'NTU Calculus', 'PNU GMT', 'Seminar Talks'].map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-1 bg-slate-900 text-slate-300 rounded border border-slate-800 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
