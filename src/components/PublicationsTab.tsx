import React, { useState } from 'react';
import { Publication } from '../types';
import { FormattedMathText } from './KatexMath';

interface PublicationsTabProps {
  publications: Publication[];
  onOpenInspector?: () => void;
}

export const PublicationsTab: React.FC<PublicationsTabProps> = ({ publications }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeBibtex, setActiveBibtex] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Extract all tags
  const allTags = Array.from(
    new Set(publications.flatMap((p) => p.tags || []))
  );

  const filtered = publications.filter((pub) => {
    const matchesSearch =
      searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = !selectedTag || (pub.tags && pub.tags.includes(selectedTag));

    return matchesSearch && matchesTag;
  });

  const handleCopyBibtex = (id: string, bibtex?: string) => {
    if (!bibtex) return;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header & Search Bar */}
      <section className="bg-slate-950/80 border-l-2 border-emerald-500/40 border-y border-r border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold font-mono text-emerald-400 shrink-0">
              01
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Publications & Preprints
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-sans">
                Peer-reviewed journal articles and research preprints in geometric analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Search Input & Tags */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1 font-mono">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-emerald-400 text-xs"></i>
            <input
              type="text"
              placeholder="Search by title, author, journal, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-400 rounded pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Tag Chips */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 uppercase font-bold transition cursor-pointer ${
                selectedTag === null
                  ? 'bg-emerald-400 text-slate-950 shadow'
                  : 'bg-slate-900 text-slate-400 hover:text-emerald-400 border border-slate-800'
              }`}
            >
              All ({publications.length})
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-2.5 py-1.5 uppercase font-bold transition cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-emerald-400 text-slate-950 shadow'
                    : 'bg-slate-900/90 text-slate-400 hover:text-emerald-400 border border-slate-800'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Publications List */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-12 bg-slate-900/60 rounded-2xl border border-slate-800 text-slate-400 text-sm">
            No publications found matching "{searchQuery}".
          </div>
        ) : (
          filtered.map((pub) => (
            <div
              key={pub.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3 transition group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-blue-300 transition">
                  <FormattedMathText text={pub.title} />
                </h3>
                <span className="self-start sm:self-auto shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800 text-blue-300 border border-slate-700">
                  {pub.year}
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                <FormattedMathText text={pub.authors} />
              </div>

              <div className="text-xs sm:text-sm italic text-blue-400 font-serif">
                {pub.journal}
              </div>

              {pub.abstract && (
                <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <FormattedMathText text={pub.abstract} />
                </p>
              )}

              {/* Tag Chips & Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags?.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 font-medium transition cursor-pointer"
                    >
                      <i className="fa-solid fa-file-pdf"></i>
                      <span>PDF</span>
                    </a>
                  )}

                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition"
                    >
                      <i className="fa-solid fa-link text-blue-400"></i>
                      <span>DOI</span>
                    </a>
                  )}

                  {pub.arxiv && (
                    <a
                      href={`https://arxiv.org/abs/${pub.arxiv}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition"
                    >
                      <i className="fa-solid fa-file-lines text-amber-400"></i>
                      <span>arXiv</span>
                    </a>
                  )}

                  {pub.bibtex && (
                    <button
                      onClick={() =>
                        setActiveBibtex(activeBibtex === pub.id ? null : pub.id)
                      }
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-medium transition cursor-pointer"
                    >
                      <i className="fa-solid fa-quote-left text-slate-400"></i>
                      <span>BibTeX</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Collapsible BibTeX Display */}
              {activeBibtex === pub.id && pub.bibtex && (
                <div className="pt-2 animate-in fade-in">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 relative group/bib">
                    <pre className="whitespace-pre-wrap overflow-x-auto">
                      {pub.bibtex}
                    </pre>
                    <button
                      onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                      className="absolute top-2 right-2 px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-sans font-medium transition"
                    >
                      {copiedId === pub.id ? 'Copied!' : 'Copy BibTeX'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
