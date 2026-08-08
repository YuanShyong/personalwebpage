import React from 'react';
import { TeachingConfigData, Course } from '../types';
import { FormattedMathText } from './KatexMath';

interface TeachingTabProps {
  data: TeachingConfigData;
  onSelectCourse?: (course: Course) => void;
  onOpenInspector?: () => void;
}

export const TeachingTab: React.FC<TeachingTabProps> = ({ data, onSelectCourse }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
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
        </div>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
          {data.teachingStatement}
        </p>
      </section>

      {/* 02 Academic Teaching Experience & Course Lists */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
              02
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white">
              Academic Courses & Course Pages
            </h3>
          </div>
          <span className="text-xs font-mono text-emerald-400 font-semibold bg-slate-900 border border-slate-800 px-3 py-1 rounded hidden sm:inline-block">
            Click any course to view its dedicated webpage
          </span>
        </div>

        <div className="space-y-6">
          {data.experience.map((exp, i) => (
            <div
              key={i}
              className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-4 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-white font-mono">{exp.institution}</h4>
                  <div className="text-emerald-400 text-xs sm:text-sm font-semibold font-mono">{exp.role}</div>
                </div>
                <span className="self-start sm:self-auto text-xs font-semibold font-mono px-3 py-1 bg-slate-800 text-emerald-300 rounded-full border border-slate-700">
                  {exp.years}
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 font-sans">
                <span className="font-semibold text-slate-200">Main Subject Areas: </span>
                <span>{exp.courses}</span>
              </div>

              {/* Detailed Interactive Course Cards */}
              {exp.courseList && exp.courseList.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {exp.courseList.map((crs, cIdx) => (
                    <div
                      key={cIdx}
                      onClick={() => onSelectCourse && onSelectCourse(crs)}
                      className="bg-slate-950/90 border border-slate-800/90 hover:border-emerald-400 rounded-xl p-4 space-y-3 cursor-pointer transition group shadow-md flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-2 font-mono">
                          <span className="font-extrabold text-sm text-emerald-300 group-hover:text-emerald-400 transition flex items-center gap-1.5">
                            <i className="fa-solid fa-graduation-cap text-xs"></i>
                            <span>{crs.code ? `${crs.code}: ` : ''}{crs.name}</span>
                          </span>
                          {crs.semester && (
                            <span className="text-[10px] text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded font-mono">
                              {crs.semester}
                            </span>
                          )}
                        </div>
                        {crs.description && (
                          <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                            <FormattedMathText text={crs.description} />
                          </p>
                        )}
                      </div>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                        <span className="text-[11px] text-slate-400">
                          {crs.level || 'Undergraduate'}
                        </span>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:text-emerald-300 uppercase tracking-wider transition"
                        >
                          <span>Open Course Page</span>
                          <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition"></i>
                        </button>
                      </div>
                    </div>
                  ))}
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
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3 font-mono">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2 uppercase tracking-tight">
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
                <p className="text-xs text-slate-400 pt-1 italic font-sans">
                  "{data.officeHours.notes}"
                </p>
              )}
            </div>
          </div>
        )}

        {/* Student Resources */}
        {data.studentResources && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3 font-mono">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2 uppercase tracking-tight">
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
                      <div className="text-[11px] text-slate-400 font-sans">{res.description}</div>
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
