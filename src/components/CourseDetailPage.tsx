import React, { useState } from 'react';
import { Course } from '../types';
import { FormattedMathText } from './KatexMath';

interface CourseDetailPageProps {
  course: Course;
  onBack: () => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ course, onBack }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#course/${course.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-950/90 border border-slate-800 p-4 rounded-xl shadow-lg backdrop-blur-md">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-emerald-400 text-slate-200 hover:text-slate-950 border border-slate-800 rounded-lg text-xs font-bold uppercase font-mono transition cursor-pointer"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>← Back to Teaching</span>
        </button>

        <div className="flex items-center gap-2">
          {course.externalUrl && (
            <a
              href={course.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-bold uppercase font-mono transition"
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              <span>External Course Webpage</span>
            </a>
          )}
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded-lg text-xs font-bold uppercase font-mono transition shadow cursor-pointer"
          >
            <i className={`fa-solid ${copied ? 'fa-check' : 'fa-link'}`}></i>
            <span>{copied ? 'Link Copied!' : 'Copy Shareable Course Link'}</span>
          </button>
        </div>
      </div>

      {/* Course Header Hero Banner */}
      <section className="bg-slate-950/90 border-l-4 border-l-emerald-400 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {course.code && (
              <span className="bg-emerald-400 text-slate-950 px-3 py-1 font-mono font-black text-xs uppercase rounded">
                {course.code}
              </span>
            )}
            {course.semester && (
              <span className="bg-slate-900 border border-slate-800 text-emerald-400 px-3 py-1 font-mono text-xs font-bold rounded">
                [{course.semester}]
              </span>
            )}
            {course.level && (
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 font-mono text-xs rounded">
                {course.level}
              </span>
            )}
            {course.institution && (
              <span className="bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 font-mono text-xs rounded">
                {course.institution}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-mono">
            {course.name}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-3xl">
            <FormattedMathText text={course.description || ''} />
          </p>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80 font-mono text-xs">
          <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl space-y-1">
            <div className="text-slate-400 text-[10px] uppercase font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-user-tie text-emerald-400"></i>
              <span>Instructor</span>
            </div>
            <div className="font-semibold text-slate-200">{course.instructor || 'Dr. Yuan Shyong Ooi'}</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl space-y-1">
            <div className="text-slate-400 text-[10px] uppercase font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-clock text-emerald-400"></i>
              <span>Time & Location</span>
            </div>
            <div className="font-semibold text-slate-200">{course.time || 'TBA'}</div>
            <div className="text-slate-400 text-[11px]">{course.location || 'NUTN Campus'}</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl space-y-1">
            <div className="text-slate-400 text-[10px] uppercase font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-door-open text-emerald-400"></i>
              <span>Office Hours</span>
            </div>
            <div className="font-semibold text-slate-200">{course.officeHours || 'Tue & Thu 14:00 - 16:00'}</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl space-y-1">
            <div className="text-slate-400 text-[10px] uppercase font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-book text-emerald-400"></i>
              <span>Prerequisites</span>
            </div>
            <div className="font-semibold text-slate-200">{course.prerequisites || 'Calculus & Linear Algebra'}</div>
          </div>
        </div>
      </section>

      {/* Course Announcements */}
      {course.announcements && course.announcements.length > 0 && (
        <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-md space-y-4">
          <h2 className="text-lg font-bold uppercase font-mono text-white tracking-tight flex items-center gap-2 border-b border-slate-800 pb-3">
            <i className="fa-solid fa-bullhorn text-emerald-400"></i>
            <span>Course Announcements</span>
          </h2>
          <div className="space-y-3">
            {course.announcements.map((ann, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-1.5">
                <div className="flex items-center justify-between gap-2 font-mono text-xs">
                  <span className="font-bold text-emerald-400">{ann.title}</span>
                  <span className="text-slate-500 text-[11px]">{ann.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">{ann.content}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Content Grid: Syllabus + Materials */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Syllabus Breakdown & Textbook */}
        <div className="lg:col-span-2 space-y-8">
          {/* Syllabus Topics */}
          {course.syllabus && course.syllabus.length > 0 && (
            <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-md space-y-4">
              <h2 className="text-lg font-bold uppercase font-mono text-white tracking-tight flex items-center gap-2 border-b border-slate-800 pb-3">
                <i className="fa-solid fa-list-check text-emerald-400"></i>
                <span>Weekly Schedule & Syllabus Topics</span>
              </h2>
              <div className="space-y-3 font-mono">
                {course.syllabus.map((s, idx) => (
                  <div key={idx} className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-4 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="bg-emerald-400/10 text-emerald-400 px-2 py-0.5 rounded font-bold">{s.week || `Topic ${idx + 1}`}</span>
                      <span className="text-slate-200 font-bold">{s.topic}</span>
                    </div>
                    {s.description && (
                      <p className="text-xs text-slate-400 font-sans pt-1 leading-relaxed">{s.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Textbook & References */}
          {course.textbook && (
            <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-md space-y-3">
              <h2 className="text-lg font-bold uppercase font-mono text-white tracking-tight flex items-center gap-2 border-b border-slate-800 pb-3">
                <i className="fa-solid fa-book-open text-emerald-400"></i>
                <span>Textbook & Required Readings</span>
              </h2>
              <p className="text-sm text-slate-200 font-mono italic bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                {course.textbook}
              </p>
            </section>
          )}
        </div>

        {/* Right Column: Downloads & Materials */}
        <div className="space-y-8">
          {/* Materials & Downloads */}
          <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-md space-y-4">
            <h2 className="text-lg font-bold uppercase font-mono text-white tracking-tight flex items-center gap-2 border-b border-slate-800 pb-3">
              <i className="fa-solid fa-file-arrow-down text-emerald-400"></i>
              <span>Course Downloads</span>
            </h2>

            {course.materials && course.materials.length > 0 ? (
              <div className="space-y-2.5 font-mono text-xs">
                {course.materials.map((m, idx) => (
                  <a
                    key={idx}
                    href={m.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 p-3 bg-slate-900 hover:bg-emerald-400 text-slate-200 hover:text-slate-950 border border-slate-800/90 rounded-xl transition group shadow-sm"
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <i className={`fa-solid ${m.type === 'pdf' ? 'fa-file-pdf text-red-400' : m.type === 'notes' ? 'fa-file-lines text-emerald-400' : 'fa-download text-blue-400'} group-hover:text-slate-950`}></i>
                      <span className="font-semibold truncate">{m.title}</span>
                    </div>
                    <i className="fa-solid fa-arrow-down text-[10px] group-hover:translate-y-0.5 transition shrink-0"></i>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 font-mono">Lecture notes and assignments will be uploaded here during the semester.</p>
            )}
          </section>

          {/* Grading Policy */}
          {course.gradingPolicy && (
            <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-md space-y-3">
              <h2 className="text-lg font-bold uppercase font-mono text-white tracking-tight flex items-center gap-2 border-b border-slate-800 pb-3">
                <i className="fa-solid fa-chart-pie text-emerald-400"></i>
                <span>Grading Scheme</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                {course.gradingPolicy}
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
