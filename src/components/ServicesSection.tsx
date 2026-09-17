import React, { useState } from 'react';
import { Award, Compass, Globe, GraduationCap, ArrowRight, BookOpen, FileCheck, Plane, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/services';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (slug: string) => void;
  onViewAllServices: () => void;
  onOpenPRCalculator?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onViewAllServices,
  onOpenPRCalculator
}) => {
  const [activeTab, setActiveTab] = useState<'primary' | 'other'>('primary');

  const primaryServices = SERVICES.filter((s) => s.category === 'primary');
  const otherServices = SERVICES.filter((s) => s.category === 'other');
  const displayedServices = activeTab === 'primary' ? primaryServices : otherServices;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-red-600" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-purple-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-600" />;
      case 'FileCheck':
      default:
        return <FileCheck className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section
      id="services-section"
      className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              SERVICES WE PROVIDE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3f] tracking-tight mt-3">
              One Platform for Education &amp; Migration Services in Australia
            </h2>
            <p className="text-base text-slate-600 mt-2">
              From choosing accredited university degrees to skilled PR pathway roadmaps, we support
              your transition to Australia with structured expertise.
            </p>
          </div>

          {/* Service Switcher Tabs */}
          <div className="flex items-center gap-2 bg-slate-200/70 p-1.5 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('primary')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'primary'
                  ? 'bg-white text-[#0f2b5c] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Core Services (4)
            </button>
            <button
              onClick={() => setActiveTab('other')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'other'
                  ? 'bg-white text-[#0f2b5c] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Additional Support (5)
            </button>
          </div>
        </div>

        {/* PR Quick Pre-Check Banner */}
        {onOpenPRCalculator && (
          <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0f2b5c] to-[#163b78] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base">Interested in Australian PR Points?</h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Calculate your indicative General Skilled Migration score with our points estimator tool.
                </p>
              </div>
            </div>
            <button
              id="services-pr-calculator-btn"
              onClick={onOpenPRCalculator}
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors shrink-0"
            >
              Calculate PR Points Now
            </button>
          </div>
        )}

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service: Service) => (
            <div
              key={service.id}
              id={`service-card-${service.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white shadow-md flex items-center justify-center">
                  {renderIcon(service.iconName)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Explore Services Button */}
                <button
                  id={`explore-service-btn-${service.slug}`}
                  onClick={() => onSelectService(service.slug)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-[#0f2b5c] bg-slate-50 hover:bg-red-50 hover:text-red-600 border border-slate-200 hover:border-red-200 transition-all group/btn"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link to Full Services Catalog */}
        <div className="mt-12 text-center">
          <button
            id="view-all-services-cta"
            onClick={onViewAllServices}
            className="inline-flex items-center gap-2 font-bold text-sm text-[#0f2b5c] hover:text-red-600 transition-colors"
          >
            <span>Explore all education and migration services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
