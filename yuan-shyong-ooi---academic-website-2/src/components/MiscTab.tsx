import React from 'react';
import { MiscLink } from '../types';

interface MiscTabProps {
  miscLinks: MiscLink[];
}

export const MiscTab: React.FC<MiscTabProps> = ({ miscLinks }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 sm:p-8 shadow-xl backdrop-blur-md space-y-6">
        <div className="flex items-center gap-4 border-b border-slate-800/80 pb-4">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
            01
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Curriculum Vitae & External Links
          </h2>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed font-sans">
          Access Dr. Yuan Shyong Ooi's official academic CV, research genealogy, arXiv repositories, and interactive math projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {miscLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-emerald-400/50 transition-all shadow-md group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-400/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <i className={`${item.icon || (item.isPdf ? 'fa-solid fa-file-pdf' : 'fa-solid fa-arrow-up-right-from-square')} text-lg`}></i>
                </div>
                <div>
                  <div className="font-bold text-sm text-white uppercase tracking-tight font-mono group-hover:text-emerald-300 transition">
                    {item.name}
                  </div>
                  {item.category && (
                    <div className="text-[10px] text-slate-400 font-mono">
                      Category: {item.category}
                    </div>
                  )}
                </div>
              </div>

              <i className="fa-solid fa-chevron-right text-slate-500 group-hover:text-emerald-400 text-xs transition-transform group-hover:translate-x-1"></i>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
