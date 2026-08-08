import React from 'react';
import { ContactConfig } from '../types';

interface ContactTabProps {
  contact: ContactConfig;
}

export const ContactTab: React.FC<ContactTabProps> = ({ contact }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 sm:p-8 shadow-xl backdrop-blur-md space-y-6">
        <div className="flex items-center gap-4 border-b border-slate-800/80 pb-4">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
            01
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Contact & Location Details
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="text-xs text-emerald-400 font-mono font-bold uppercase tracking-wider">
                Affiliation & Department
              </div>
              <div className="font-bold text-white text-base">
                {contact.affiliation}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="text-xs text-emerald-400 font-mono font-bold uppercase tracking-wider">
                Primary Email
              </div>
              <div>
                <a
                  href={`mailto:${contact.primaryEmail}`}
                  className="font-bold text-emerald-300 hover:text-white underline text-base font-mono"
                >
                  {contact.primaryEmail}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="text-xs text-emerald-400 font-mono font-bold uppercase tracking-wider">
                Permanent Email
              </div>
              <div>
                <a
                  href={`mailto:${contact.permanentEmail}`}
                  className="font-bold text-emerald-300 hover:text-white underline text-base font-mono"
                >
                  {contact.permanentEmail}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="text-xs text-emerald-400 font-mono font-bold uppercase tracking-wider">
                Campus Location & Address
              </div>
              <div className="flex items-start gap-2.5">
                <i className="fa-solid fa-map-location-dot text-emerald-400 text-lg mt-0.5"></i>
                <div className="leading-relaxed font-medium text-slate-200">
                  {contact.address}
                </div>
              </div>
              {contact.office && (
                <div className="text-xs text-slate-400 pt-1 border-t border-slate-800/80 font-mono">
                  Office: <span className="text-slate-200 font-medium">{contact.office}</span>
                </div>
              )}
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border-l-2 border-l-emerald-400 border border-slate-800 text-slate-200 text-xs leading-relaxed space-y-2">
              <div className="font-bold text-sm text-white font-mono uppercase flex items-center gap-1.5">
                <i className="fa-solid fa-circle-info text-emerald-400"></i>
                <span>Prospective Students & Research Inquiries</span>
              </div>
              <p className="font-sans">
                Dr. Yuan Shyong Ooi welcomes inquiries regarding graduate research, undergraduate research projects, or seminar invitations in Differential Geometry and Geometric Analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
