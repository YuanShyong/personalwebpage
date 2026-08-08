import React from 'react';
import { HomeConfig } from '../types';
import { FormattedMathText } from './KatexMath';

interface HomeTabProps {
  home: HomeConfig;
  onNavigateTab: (tab: string) => void;
  onExplode?: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ home, onNavigateTab, onExplode }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
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
          <code className="hidden sm:inline-block text-[10px] bg-slate-900 p-1.5 border border-slate-800 text-slate-500 font-mono">
            Source: site.config.js
          </code>
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

        {/* Highlight Badge */}
        {home.highlightBadge && (
          <div className="mt-4 p-4 rounded-xl bg-slate-900 border-l-2 border-l-emerald-400 border border-slate-800 flex items-start gap-3.5 text-slate-200">
            <div className="p-2 bg-emerald-400/10 rounded-lg text-emerald-400 shrink-0">
              <i className={`fa-solid ${home.highlightBadge.icon || 'fa-award'} text-lg`}></i>
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base text-white font-mono uppercase">
                {home.highlightBadge.title}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {home.highlightBadge.description}
              </div>
            </div>
          </div>
        )}
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
          <div className="mt-6 pt-3 border-t border-slate-800/60">
            <code className="text-[10px] bg-slate-900 p-1.5 border border-slate-800 text-slate-500 font-mono">
              Source: research_config.json
            </code>
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
          <div className="mt-6 pt-3 border-t border-slate-800/60">
            <code className="text-[10px] bg-slate-900 p-1.5 border border-slate-800 text-slate-500 font-mono">
              Source: teaching_config.json
            </code>
          </div>
        </section>
      </div>
    </div>
  );
};
