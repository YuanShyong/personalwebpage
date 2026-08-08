import React, { useState } from 'react';

interface ConfigEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  researchJsText: string;
  teachingJsText: string;
  siteJsText: string;
  onApplyResearchConfig?: (newJs: string) => void;
  onApplyTeachingConfig?: (newJs: string) => void;
}

export const ConfigEditorModal: React.FC<ConfigEditorModalProps> = ({
  isOpen,
  onClose,
  researchJsText,
  teachingJsText,
  siteJsText,
}) => {
  const [activeTab, setActiveTab] = useState<'research' | 'teaching' | 'site'>('research');
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const getActiveText = () => {
    if (activeTab === 'research') return researchJsText;
    if (activeTab === 'teaching') return teachingJsText;
    return siteJsText;
  };

  const getFileName = () => {
    if (activeTab === 'research') return 'research.config.js';
    if (activeTab === 'teaching') return 'teaching.config.js';
    return 'site.config.js';
  };

  const handleCopy = () => {
    const text = getActiveText();
    navigator.clipboard.writeText(text);
    setCopied(getFileName());
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDownload = () => {
    const text = getActiveText();
    const filename = getFileName();
    const blob = new Blob([text], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden text-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/20 text-blue-400 rounded-lg">
              <i className="fa-solid fa-code text-lg"></i>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">GitHub Config Files Inspector</h3>
              <p className="text-xs text-slate-400">
                Your research and teaching data are separated into individual <code className="text-blue-300">config.js</code> files for easy GitHub editing.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-4 pt-2 gap-2">
          {[
            { id: 'research', name: 'research.config.js', icon: 'fa-microscope', badge: 'Separated' },
            { id: 'teaching', name: 'teaching.config.js', icon: 'fa-chalkboard-user', badge: 'Separated' },
            { id: 'site', name: 'site.config.js', icon: 'fa-user-gear', badge: 'General' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-mono text-xs sm:text-sm font-medium transition-all cursor-pointer border-t border-x ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-blue-400 border-slate-700/80 border-b-transparent shadow'
                  : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <i className={`fa-solid ${tab.icon}`}></i>
              <span>{tab.name}</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-blue-900/50 text-blue-300 rounded border border-blue-700/40">
                {tab.badge}
              </span>
            </button>
          ))}
        </div>

        {/* File Action Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-950/80 border-b border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span>Root file path: <code className="text-emerald-400 font-mono">/{getFileName()}</code></span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition cursor-pointer font-medium"
            >
              <i className="fa-regular fa-copy"></i>
              <span>{copied === getFileName() ? 'Copied to Clipboard!' : 'Copy File Content'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white transition cursor-pointer font-medium shadow"
            >
              <i className="fa-solid fa-download"></i>
              <span>Download {getFileName()}</span>
            </button>
          </div>
        </div>

        {/* Code Viewer Body */}
        <div className="flex-1 overflow-auto p-4 bg-slate-950 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed">
          <pre className="whitespace-pre-wrap font-mono select-all">
            {getActiveText()}
          </pre>
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <i className="fa-brands fa-github text-slate-300 text-base"></i>
            <span>Upload these files directly to your GitHub repository to update your website!</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium cursor-pointer transition"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
