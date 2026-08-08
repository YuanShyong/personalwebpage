import React from 'react';
import { ProfileConfig } from '../types';

interface HeaderNavProps {
  profile: ProfileConfig;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConfigInspector?: () => void;
  onTriggerExplosion?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  profile,
  activeTab,
  setActiveTab,
  onOpenConfigInspector,
  onTriggerExplosion,
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-house' },
    { id: 'research', label: 'Research', icon: 'fa-shapes' },
    { id: 'publications', label: 'Publications', icon: 'fa-book-bookmark' },
    { id: 'teaching', label: 'Teaching & Talks', icon: 'fa-chalkboard-user' },
    { id: 'misc', label: 'CV & Links', icon: 'fa-file-pdf' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-emerald-500/30 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand / Name Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('home')}
            className="text-left group cursor-pointer"
          >
            <div className="font-black text-xl sm:text-2xl text-slate-100 uppercase tracking-tighter group-hover:text-emerald-400 transition flex items-center gap-2">
              <span>{profile.name}</span>
              <span className="text-xs font-mono font-normal text-slate-400 normal-case hidden sm:inline">
                ({profile.chineseName})
              </span>
            </div>
            <p className="mt-0.5 text-emerald-400 font-mono text-[11px] sm:text-xs tracking-widest uppercase italic">
              [ Differential Geometry & Geometric Analysis ]
            </p>
          </button>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1.5 font-mono">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase transition cursor-pointer ${
                  isActive
                    ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20'
                    : 'text-slate-300 hover:text-emerald-400 border-b border-transparent hover:border-emerald-400 pb-0.5'
                }`}
              >
                <i className={`fa-solid ${item.icon} text-[10px]`}></i>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Tools & Active Node Simulation Status */}
        <div className="flex items-center gap-3">
          <div className="text-right flex flex-col items-end">
            <button
              onClick={onTriggerExplosion}
              className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition cursor-pointer shadow"
              title="Click to explode node simulation!"
            >
              Active Node Simulation
            </button>
            <p className="text-slate-500 font-mono text-[9px] sm:text-[10px] tracking-widest mt-0.5">
              CLICK ANYWHERE TO EXPLODE
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu Bar */}
      <div className="md:hidden flex overflow-x-auto gap-2 px-4 py-2 bg-slate-950 border-t border-slate-800 scrollbar-none font-mono">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-bold uppercase whitespace-nowrap transition cursor-pointer ${
              activeTab === item.id
                ? 'bg-emerald-400 text-slate-950'
                : 'text-slate-300 hover:text-emerald-400'
            }`}
          >
            <i className={`fa-solid ${item.icon} text-[10px]`}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </header>
  );
};
