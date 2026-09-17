import React, { useState } from 'react';
import { Award, Compass, Globe, GraduationCap, ArrowRight, BookOpen, FileCheck, Plane, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/services';
import { Service } from '../types';

interface ServicesViewProps {
  onSelectService: (slug: string) => void;
  onOpenPRCalculator: () => void;
  onOpenConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onSelectService,
  onOpenPRCalculator,
  onOpenConsultation
}) => {
  const [filter, setFilter] = useState<'all' | 'primary' | 'other'>('all');

  const filteredServices =
    filter === 'all' ? SERVICES : SERVICES.filter((s) => s.category === filter);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-red-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-600" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-emerald-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-purple-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-600" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-indigo-600" />;
      default:
        return <FileCheck className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <div id="services-catalog-page" className="bg-slate-50/50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            OUR CONSULTANCY PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a1e3f] tracking-tight mt-4">
            Education &amp; Migration Services
          </h1>
          <p className="text-base text-slate-600 mt-3">
            Holistic, compliant support for international students: from initial course discovery and
            admissions to PR assessments and ongoing Australian onshore welfare.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'all'
                ? 'bg-[#0f2b5c] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Services ({SERVICES.length})
          </button>
          <button
            onClick={() => setFilter('primary')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'primary'
                ? 'bg-[#0f2b5c] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Core Services (4)
          </button>
          <button
            onClick={() => setFilter('other')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'other'
                ? 'bg-[#0f2b5c] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Additional Support (5)
          </button>
        </div>

        {/* PR Quick Estimator Highlight Card */}
        <div className="mb-12 bg-gradient-to-r from-[#0f2b5c] via-[#163b78] to-[#0a1e3f] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-400/20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">Australian PR Points Estimator</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Estimate your General Skilled Migration (Subclass 189, 190, 491) points based on age,
                qualifications, Australian study, and English proficiency with our live calculator.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenPRCalculator}
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white shadow-lg transition-colors shrink-0"
          >
            Launch Points Estimator
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: Service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center">
                  {renderIcon(service.iconName)}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium">
                  {service.category === 'primary' ? 'Core Service' : 'Additional Support'}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectService(service.slug)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-[#0f2b5c] bg-slate-50 hover:bg-red-600 hover:text-white border border-slate-200 hover:border-red-600 transition-all"
                  >
                    <span>View Service Details &amp; Process</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
