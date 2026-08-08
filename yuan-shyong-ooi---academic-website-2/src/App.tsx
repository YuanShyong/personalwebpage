import React, { useState } from 'react';
import { siteConfig } from './config/site.config';
import { researchConfig } from './config/research.config';
import { teachingConfig } from './config/teaching.config';

import { PhysicsBackground } from './components/PhysicsBackground';
import { HeaderNav } from './components/HeaderNav';
import { HeroProfile } from './components/HeroProfile';
import { HomeTab } from './components/HomeTab';
import { ResearchTab } from './components/ResearchTab';
import { PublicationsTab } from './components/PublicationsTab';
import { TeachingTab } from './components/TeachingTab';
import { MiscTab } from './components/MiscTab';
import { ContactTab } from './components/ContactTab';
import { ConfigEditorModal } from './components/ConfigEditorModal';

// Raw JS string representation for the code viewer modal
import rawResearchJs from '../research.config.js?raw';
import rawTeachingJs from '../teaching.config.js?raw';
import rawSiteJs from '../site.config.js?raw';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(false);
  const [explodeTrigger, setExplodeTrigger] = useState<number>(0);

  const handleTriggerExplosion = () => {
    setExplodeTrigger((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans text-slate-100 bg-slate-950 selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Interactive Physics Simulation Background Canvas */}
      <PhysicsBackground
        mode="constellation"
        colorTheme="academic"
      />

      {/* Top Sticky Header Navigation */}
      <HeaderNav
        profile={siteConfig.profile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConfigInspector={() => setIsInspectorOpen(true)}
        onTriggerExplosion={handleTriggerExplosion}
      />

      {/* Main Container */}
      <div className="relative z-10 flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-4">
        {/* Profile Hero Card */}
        <HeroProfile
          profile={siteConfig.profile}
          onExplode={handleTriggerExplosion}
        />

        {/* Tab Content Router */}
        <main className="mb-12">
          {activeTab === 'home' && (
            <HomeTab
              home={siteConfig.home}
              onNavigateTab={setActiveTab}
              onExplode={handleTriggerExplosion}
            />
          )}

          {activeTab === 'research' && (
            <ResearchTab
              data={researchConfig}
              onOpenInspector={() => setIsInspectorOpen(true)}
            />
          )}

          {activeTab === 'publications' && (
            <PublicationsTab
              publications={researchConfig.publications}
              onOpenInspector={() => setIsInspectorOpen(true)}
            />
          )}

          {activeTab === 'teaching' && (
            <TeachingTab
              data={teachingConfig}
              onOpenInspector={() => setIsInspectorOpen(true)}
            />
          )}

          {activeTab === 'misc' && (
            <MiscTab miscLinks={siteConfig.miscLinks} />
          )}

          {activeTab === 'contact' && (
            <ContactTab contact={siteConfig.contact} />
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-400 space-y-2">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.profile.name} ({siteConfig.profile.chineseName}). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-500">
            <span>{siteConfig.profile.institution}</span>
            <span>•</span>
            <button
              onClick={() => setIsInspectorOpen(true)}
              className="text-blue-400 hover:text-blue-300 underline font-mono cursor-pointer"
            >
              Separated research.config.js & teaching.config.js
            </button>
            <span>•</span>
            <span className="text-slate-400">Interactive Background Physics Enabled</span>
          </div>
        </footer>
      </div>

      {/* GitHub Config Files Code Inspector Modal */}
      <ConfigEditorModal
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
        researchJsText={rawResearchJs}
        teachingJsText={rawTeachingJs}
        siteJsText={rawSiteJs}
      />
    </div>
  );
}
