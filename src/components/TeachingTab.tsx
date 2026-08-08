import React, { useState } from 'react';
import { TeachingConfigData } from '../types';
import { FormattedMathText } from './KatexMath';

interface TeachingTabProps {
  data: TeachingConfigData;
  onOpenInspector: () => void;
}

export const TeachingTab: React.FC<TeachingTabProps> = ({ data, onOpenInspector }) => {
  const [talkFilter, setTalkFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredTalks = data.talks.filter((t) => {
    if (talkFilter === 'upcoming') return t.type === 'upcoming';
    if (talkFilter === 'past') return t.type === 'past';
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Separated Config Banner Notification */}
      <div className="bg-slate-950/90 border-l-4 border-l-emerald-400 border border-emerald-500/30 rounded-xl p-4 sm:p-5 shadow-xl backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-400/20 text-emerald-400 rounded-lg shrink-0">
            <i className="fa-solid fa-chalkboard-user text-lg"></i>
          </div>
          <div>
            <span className="font-bold text-white uppercase font-mono">Separated Configuration File:</span>
            <span className="text-slate-300 ml-1">
              All courses, teaching records, and talks are managed separately in <code className="text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded border border-emerald-500/30 font-mono">teaching.config.js</code>.
            </span>
          </div>
        </div>
        <button
          onClick={onOpenInspector}
          className="shrink-0 px-3 py-1.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold uppercase font-mono rounded text-xs cursor-pointer transition flex items-center gap-1.5 shadow"
        >
          <i className="fa-solid fa-code"></i>
          <span>View teaching.config.js</span>
        </button>
      </div>

      {/* 01 Teaching Philosophy */}
      <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 sm:p-8 shadow-xl backdrop-blur-md space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
              01
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Teaching Philosophy
            </h2>
          </div>
          <code className="hidden sm:inline-block text-[10px] bg-slate-900 p-1.5 border border-slate-800 text-slate-500 font-mono">
            Source: teaching.config.js
          </code>
        </div>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
          {data.teachingStatement}
        </p>
      </section>

      {/* 02 Academic Teaching Experience & Course Lists */}
      <section className="space-y-4">
        <div className="flex items-center gap-4 border-b border-slate-800 pb-3">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
            02
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-white">
            Academic Teaching Appointments & Courses
          </h3>
        </div>

        <div className="space-y-4">
          {data.experience.map((exp, i) => (
            <div
              key={i}
              className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-4 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-white">{exp.institution}</h4>
                  <div className="text-emerald-400 text-xs sm:text-sm font-medium">{exp.role}</div>
                </div>
                <span className="self-start sm:self-auto text-xs font-semibold px-2.5 py-1 bg-slate-800 text-emerald-300 rounded-full border border-slate-700">
                  {exp.years}
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-slate-200">Main Subject Areas: </span>
                <span>{exp.courses}</span>
              </div>

              {/* Detailed Courses */}
              {exp.courseList && exp.courseList.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {exp.courseList.map((crs, cIdx) => (
                    <div
                      key={cIdx}
                      className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-xs text-emerald-300">
                          {crs.code ? `${crs.code}: ` : ''}{crs.name}
                        </span>
                        {crs.semester && (
                          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                            {crs.semester}
                          </span>
                        )}
                      </div>
                      {crs.description && (
                        <p className="text-xs text-slate-400 leading-normal">
                          {crs.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 03 Upcoming & Past Seminar Talks */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
              03
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white">
              Talks, Colloquia & Presentations
            </h3>
          </div>

          <div className="flex bg-slate-900 p-1 border border-slate-800 font-mono text-xs self-start sm:self-auto">
            {(['all', 'upcoming', 'past'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setTalkFilter(filter)}
                className={`px-3 py-1 font-bold uppercase transition cursor-pointer ${
                  talkFilter === filter
                    ? 'bg-emerald-400 text-slate-950'
                    : 'text-slate-400 hover:text-emerald-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTalks.map((talk) => (
            <div
              key={talk.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-4 shadow-lg backdrop-blur-md space-y-2 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                    {talk.date}
                  </span>
                  {talk.type === 'upcoming' ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse">
                      Upcoming
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500">Past Seminar</span>
                  )}
                </div>

                <h4 className="font-bold text-sm sm:text-base text-white">
                  {talk.event}
                </h4>

                {talk.title && (
                  <p className="text-xs text-slate-300 italic mt-1">
                    "<FormattedMathText text={talk.title} />"
                  </p>
                )}

                {talk.location && (
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                    <i className="fa-solid fa-location-dot text-emerald-400"></i>
                    <span>{talk.location}</span>
                  </div>
                )}
              </div>

              {talk.link && (
                <div className="pt-2">
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    <span>Event Details & Abstract</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Office Hours & Student Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Office Hours */}
        {data.officeHours && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
              <i className="fa-solid fa-clock text-emerald-400"></i>
              <span>Office Hours for Students</span>
            </h3>
            <div className="text-xs sm:text-sm text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-calendar-days text-emerald-400 mt-1"></i>
                <div>
                  <strong className="text-white">Time: </strong>
                  <span>{data.officeHours.time}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-emerald-400 mt-1"></i>
                <div>
                  <strong className="text-white">Location: </strong>
                  <span>{data.officeHours.location}</span>
                </div>
              </div>
              {data.officeHours.notes && (
                <p className="text-xs text-slate-400 pt-1 italic">
                  "{data.officeHours.notes}"
                </p>
              )}
            </div>
          </div>
        )}

        {/* Student Resources */}
        {data.studentResources && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
              <i className="fa-solid fa-cubes text-emerald-400"></i>
              <span>Interactive Math & Student Tools</span>
            </h3>
            <div className="space-y-2">
              {data.studentResources.map((res, rIdx) => (
                <a
                  key={rIdx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 text-xs transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <i className={`${res.icon || 'fa-solid fa-link'} text-emerald-400 text-sm`}></i>
                    <div>
                      <div className="font-semibold text-white group-hover:text-emerald-300 transition">
                        {res.title}
                      </div>
                      <div className="text-[11px] text-slate-400">{res.description}</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-slate-500 group-hover:text-emerald-400 text-xs"></i>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
