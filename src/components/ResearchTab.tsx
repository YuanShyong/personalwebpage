import React from 'react';
import { ResearchConfigData } from '../types';
import { KatexMath, FormattedMathText } from './KatexMath';

interface ResearchTabProps {
  data: ResearchConfigData;
  onOpenInspector: () => void;
}

export const ResearchTab: React.FC<ResearchTabProps> = ({ data, onOpenInspector }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Separated Config Banner Notification */}
      <div className="bg-slate-950/90 border-l-4 border-l-emerald-400 border border-emerald-500/30 rounded-xl p-4 sm:p-5 shadow-xl backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-400/20 text-emerald-400 rounded-lg shrink-0">
            <i className="fa-solid fa-shapes text-lg"></i>
          </div>
          <div>
            <span className="font-bold text-white uppercase font-mono">Separated Configuration File:</span>
            <span className="text-slate-300 ml-1">
              All research categories, publications, and math topics are managed in <code className="text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded border border-emerald-500/30 font-mono">research.config.js</code>.
            </span>
          </div>
        </div>
      </div>

      {/* 01 Research Overview Statement */}
      <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 sm:p-8 shadow-xl backdrop-blur-md space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
              01
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Research Statement
            </h2>
          </div>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
          <FormattedMathText text={data.researchStatement} />
        </p>
      </section>

      {/* 02 Key Math Formula Topics */}
      {data.keyMathTopics && data.keyMathTopics.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-3">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
              02
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white">
              Key Mathematical Objects & Equations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.keyMathTopics.map((topic, i) => (
              <div
                key={i}
                className="bg-slate-950/80 border-l-2 border-emerald-500/30 border-y border-r border-slate-800/80 rounded-xl p-5 shadow-lg backdrop-blur-md space-y-2.5 transition hover:border-emerald-400/50"
              >
                <div className="font-bold text-sm text-emerald-400 font-mono uppercase">{topic.title}</div>
                <div className="p-3 bg-slate-900/90 rounded-lg text-center overflow-x-auto border border-slate-800 text-emerald-300 font-mono">
                  <KatexMath math={topic.formulaLaTeX} block={true} />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 03 Research Categories */}
      <section className="space-y-4">
        <div className="flex items-center gap-4 border-b border-slate-800 pb-3">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
            03
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-white">
            Research Themes & Problem Areas
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.researchCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-md space-y-4 transition hover:border-emerald-400"
            >
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                <div className="p-2.5 bg-emerald-400/10 text-emerald-400 rounded-xl">
                  <i className={`${cat.icon || 'fa-solid fa-shapes'} text-lg`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-base text-white uppercase tracking-tight font-mono">{cat.title}</h4>
                  {cat.description && (
                    <p className="text-xs text-slate-400">{cat.description}</p>
                  )}
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <i className="fa-solid fa-angle-right text-emerald-400 text-xs mt-1 shrink-0"></i>
                    <span>
                      <FormattedMathText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborators */}
      {data.collaborators && data.collaborators.length > 0 && (
        <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-md space-y-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-tight font-mono flex items-center gap-2 border-b border-slate-800 pb-3">
            <i className="fa-solid fa-users text-emerald-400"></i>
            <span>Co-Authors & Collaborators</span>
          </h3>
          <div className="flex flex-wrap gap-2.5 font-mono text-xs">
            {data.collaborators.map((c, idx) => (
              <a
                key={idx}
                href={c.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-emerald-400 text-slate-200 hover:text-slate-950 border border-slate-800 transition shadow-sm font-semibold uppercase"
              >
                <i className="fa-solid fa-user-graduate text-emerald-400"></i>
                <span>{c.name}</span>
                {c.institution && (
                  <span className="text-[10px] text-slate-400 font-normal">({c.institution})</span>
                )}
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
