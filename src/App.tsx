import React, { useState, useEffect } from 'react';
import { siteConfig } from './config/site.config';
import { researchConfig } from './config/research.config';
import { teachingConfig } from './config/teaching.config';
import { Course } from './types';

import { PhysicsBackground } from './components/PhysicsBackground';
import { HeaderNav } from './components/HeaderNav';
import { HeroProfile } from './components/HeroProfile';
import { HomeTab } from './components/HomeTab';
import { ResearchTab } from './components/ResearchTab';
import { PublicationsTab } from './components/PublicationsTab';
import { TeachingTab } from './components/TeachingTab';
import { CourseDetailPage } from './components/CourseDetailPage';
import { MiscTab } from './components/MiscTab';
import { ContactTab } from './components/ContactTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [explodeTrigger, setExplodeTrigger] = useState<number>(0);

  // Helper to find all courses across all teaching experiences
  const allCourses: Course[] = teachingConfig.experience.flatMap(
    (exp) => exp.courseList || []
  );

  // Hash listener for direct shareable course links (e.g. #course/math-301-diff-geom)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#course/')) {
        const courseId = hash.replace('#course/', '');
        const found = allCourses.find((c) => c.id === courseId || c.code?.toLowerCase().replace(/\s+/g, '-') === courseId);
        if (found) {
          setSelectedCourse(found);
          setActiveTab('teaching');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [allCourses]);

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    window.location.hash = `#course/${course.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToTeaching = () => {
    setSelectedCourse(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab !== 'teaching') {
      setSelectedCourse(null);
      if (window.location.hash.startsWith('#course/')) {
        window.location.hash = '';
      }
    }
  };

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
        setActiveTab={handleTabChange}
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
              onNavigateTab={handleTabChange}
              onExplode={handleTriggerExplosion}
            />
          )}

          {activeTab === 'research' && (
            <ResearchTab
              data={researchConfig}
              talks={teachingConfig.talks}
            />
          )}

          {activeTab === 'publications' && (
            <PublicationsTab
              publications={researchConfig.publications}
            />
          )}

          {activeTab === 'teaching' && (
            selectedCourse ? (
              <CourseDetailPage
                course={selectedCourse}
                onBack={handleBackToTeaching}
              />
            ) : (
              <TeachingTab
                data={teachingConfig}
                onSelectCourse={handleSelectCourse}
              />
            )
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
            <span className="text-slate-400">Interactive Background Physics Enabled</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
