import React from 'react';
import { ProfileConfig } from '../types';

interface HeroProfileProps {
  profile: ProfileConfig;
  onExplode?: () => void;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({ profile, onExplode }) => {
  return (
    <section className="relative my-6 bg-slate-950/80 border-l-4 border-l-emerald-400 border border-slate-800/90 rounded-xl p-6 sm:p-8 shadow-2xl backdrop-blur-md overflow-hidden">
      {/* Decorative emerald subtle radial glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
        {/* Avatar / Photo Container */}
        <div className="relative group cursor-pointer shrink-0" onClick={onExplode}>
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-emerald-400 shadow-xl bg-slate-900 flex items-center justify-center text-slate-400 transition-all duration-300">
            {profile.avatarImage ? (
              <img
                src={profile.avatarImage}
                alt={profile.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = '<i class="fa-solid fa-user-graduate text-5xl text-emerald-400"></i>';
                  }
                }}
              />
            ) : (
              <i className="fa-solid fa-user-graduate text-5xl text-emerald-400"></i>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 bg-emerald-400 text-slate-950 p-1.5 rounded-full shadow-lg border border-slate-950 text-xs" title="Click avatar to detonate node explosion!">
            <i className="fa-solid fa-burst text-slate-950 animate-spin"></i>
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                {profile.name}
              </h1>
              <span className="text-lg sm:text-xl font-mono text-slate-400">
                ({profile.chineseName})
              </span>
            </div>
            <p className="mt-2 text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase italic">
              [ {profile.role} ]
            </p>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 space-y-1.5 leading-relaxed font-sans">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <i className="fa-solid fa-building text-emerald-400 w-4 text-center"></i>
              <span>{profile.department}, {profile.institution}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <i className="fa-solid fa-envelope text-emerald-400 w-4 text-center"></i>
              <a href={`mailto:${profile.primaryEmail}`} className="text-emerald-300 hover:text-emerald-200 underline decoration-emerald-500/50 font-mono">
                {profile.primaryEmail}
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <i className="fa-solid fa-location-dot text-emerald-400 w-4 text-center"></i>
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Social Links Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 font-mono">
            {profile.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-tighter text-slate-300 hover:text-emerald-400 border-b border-transparent hover:border-emerald-400 pb-0.5 transition"
              >
                <i className={`${link.icon} text-emerald-400`}></i>
                <span>{link.name}</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px] opacity-60"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
