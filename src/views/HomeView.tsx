import React from 'react';
import { Hero } from '../components/Hero';
import { StatsSection } from '../components/StatsSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { CoursesSection } from '../components/CoursesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ConsultationSection } from '../components/ConsultationSection';
import { FAQSection } from '../components/FAQSection';
import { NewsletterSection } from '../components/NewsletterSection';

interface HomeViewProps {
  onNavigate: (view: string, subParam?: string) => void;
  onOpenConsultation: () => void;
  onOpenVideo: () => void;
  onOpenPRCalculator: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenVideo,
  onOpenPRCalculator
}) => {
  return (
    <div id="home-view-container" className="space-y-0">
      <Hero
        onGetStarted={() => onNavigate('courses')}
        onBookConsultation={onOpenConsultation}
        onExploreCourses={() => onNavigate('courses')}
      />

      <StatsSection />

      <AboutSection
        onLearnMore={() => onNavigate('about')}
        onContactUs={() => onNavigate('contact')}
      />

      <ServicesSection
        onSelectService={(slug) => onNavigate('service-detail', slug)}
        onViewAllServices={() => onNavigate('services')}
        onOpenPRCalculator={onOpenPRCalculator}
      />

      <CoursesSection
        onSelectCourse={(slug) => onNavigate('course-detail', slug)}
        onExploreAllCourses={() => onNavigate('courses')}
      />

      <WhyChooseUs
        onContactUs={() => onNavigate('contact')}
        onWatchVideo={onOpenVideo}
      />

      <ProcessTimeline onStartProcess={onOpenConsultation} />

      <ConsultationSection id="home-consultation-section" />

      <FAQSection />

      <NewsletterSection />
    </div>
  );
};
