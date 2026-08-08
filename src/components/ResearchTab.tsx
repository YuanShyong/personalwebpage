import React, { useState } from 'react';
import { ResearchConfigData, Talk } from '../types';
import { FormattedMathText } from './KatexMath';

interface ResearchTabProps {
  data: ResearchConfigData;
  talks?: Talk[];
  onOpenInspector?: () => void;
}

export const ResearchTab: React.FC<ResearchTabProps> = ({ data, talks = [] }) => {
  const [talkFilter, setTalkFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredTalks = talks.filter((t) => {
    if (talkFilter === 'all') return true;
    return t.type === talkFilter;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
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

      {/* 02 Research Categories */}
      <section className="space-y-4">
        <div className="flex items-center gap-4 border-b border-slate-800 pb-3">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
            02
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

      {/* 03 Academic Talks & Seminars */}
      {talks.length > 0 && (
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
                03
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                Academic Talks & Presentations
              </h3>
            </div>

            {/* Talk Filters */}
            <div className="flex items-center gap-1.5 font-mono text-xs self-start sm:self-auto bg-slate-900 p-1 rounded-lg border border-slate-800">
              {(['all', 'upcoming', 'past'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTalkFilter(filter)}
                  className={`px-3 py-1 rounded text-xs uppercase font-bold transition cursor-pointer ${
                    talkFilter === filter
                      ? 'bg-emerald-400 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 font-sans">
            {filteredTalks.map((talk) => (
              <div
                key={talk.id}
                className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-5 shadow-lg backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-emerald-400 transition"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="bg-slate-900 border border-slate-800 text-emerald-400 px-2.5 py-0.5 rounded font-bold">
                      {talk.date}
                    </span>
                    {talk.type === 'upcoming' && (
                      <span className="bg-emerald-400 text-slate-950 px-2 py-0.5 text-[10px] uppercase font-black tracking-wider rounded">
                        Upcoming
                      </span>
                    )}
                    <span className="text-slate-400 font-semibold">{talk.event}</span>
                  </div>

                  {talk.title && (
                    <h4 className="text-base font-bold text-white font-mono">
                      <FormattedMathText text={talk.title} />
                    </h4>
                  )}

                  {talk.location && (
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                      <i className="fa-solid fa-location-dot text-emerald-400/80"></i>
                      <span>{talk.location}</span>
                    </p>
                  )}
                </div>

                {talk.link && (
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start md:self-center shrink-0 px-3.5 py-1.5 bg-slate-900 hover:bg-emerald-400 text-slate-200 hover:text-slate-950 border border-slate-800 rounded-lg text-xs font-mono uppercase font-bold transition flex items-center gap-1.5 shadow"
                  >
                    <span>Event Details</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

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
