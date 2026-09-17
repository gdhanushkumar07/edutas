import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { SearchOverlay } from './components/SearchOverlay';
import { VideoModal } from './components/VideoModal';
import { PRPointsCalculatorModal } from './components/PRPointsCalculatorModal';
import { LegalModal } from './components/LegalModal';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { CoursesView } from './views/CoursesView';
import { CourseDetailView } from './views/CourseDetailView';
import { AdmissionsView } from './views/AdmissionsView';
import { VisaView } from './views/VisaView';
import { ContactView } from './views/ContactView';
import { FAQSection } from './components/FAQSection';

import { SERVICES } from './data/services';
import { COURSES } from './data/courses';

export default function App() {
  const [activeView, setActiveView] = useState<string>('home');
  const [activeParam, setActiveParam] = useState<string | undefined>(undefined);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPRCalculatorOpen, setIsPRCalculatorOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleNavigate = (view: string, subParam?: string) => {
    setActiveView(view);
    setActiveParam(subParam);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToConsultation = () => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById('consultation-section') || document.getElementById('home-consultation-section');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('consultation-section') || document.getElementById('home-consultation-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const selectedService = SERVICES.find((s) => s.slug === activeParam) || SERVICES[0];
  const selectedCourse = COURSES.find((c) => c.slug === activeParam) || COURSES[0];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-red-500 selection:text-white pb-16 md:pb-0">
      {/* Header Area */}
      <TopBar onOpenConsultation={scrollToConsultation} />
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenConsultation={scrollToConsultation}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {activeView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenConsultation={scrollToConsultation}
            onOpenVideo={() => setIsVideoOpen(true)}
            onOpenPRCalculator={() => setIsPRCalculatorOpen(true)}
          />
        )}

        {activeView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenConsultation={scrollToConsultation}
          />
        )}

        {activeView === 'services' && (
          <ServicesView
            onSelectService={(slug) => handleNavigate('service-detail', slug)}
            onOpenPRCalculator={() => setIsPRCalculatorOpen(true)}
            onOpenConsultation={scrollToConsultation}
          />
        )}

        {activeView === 'service-detail' && (
          <ServiceDetailView
            service={selectedService}
            onBack={() => handleNavigate('services')}
            onOpenPRCalculator={() => setIsPRCalculatorOpen(true)}
            onOpenConsultation={scrollToConsultation}
          />
        )}

        {activeView === 'courses' && (
          <CoursesView
            onSelectCourse={(slug) => handleNavigate('course-detail', slug)}
            onOpenConsultation={scrollToConsultation}
          />
        )}

        {activeView === 'course-detail' && (
          <CourseDetailView
            course={selectedCourse}
            onBack={() => handleNavigate('courses')}
            onOpenConsultation={scrollToConsultation}
          />
        )}

        {activeView === 'admissions' && (
          <AdmissionsView
            onNavigate={handleNavigate}
            onOpenConsultation={scrollToConsultation}
          />
        )}

        {activeView === 'visa' && (
          <VisaView
            onOpenConsultation={scrollToConsultation}
            onOpenPRCalculator={() => setIsPRCalculatorOpen(true)}
          />
        )}

        {activeView === 'faq' && (
          <div className="py-12">
            <FAQSection defaultCategory={activeParam || 'All'} />
          </div>
        )}

        {activeView === 'contact' && <ContactView />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Floating Fast-Action Controls */}
      <FloatingActions onOpenConsultation={scrollToConsultation} />

      {/* Global Modals & Overlays */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <PRPointsCalculatorModal
        isOpen={isPRCalculatorOpen}
        onClose={() => setIsPRCalculatorOpen(false)}
        onBookConsultation={scrollToConsultation}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
