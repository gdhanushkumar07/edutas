import React from 'react';
import { ShieldCheck, Award, Users, MapPin, CheckCircle2, Phone, Calendar, ArrowRight, GraduationCap, HeartHandshake } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { StatsSection } from '../components/StatsSection';

interface AboutViewProps {
  onNavigate: (view: string, subParam?: string) => void;
  onOpenConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  return (
    <div id="about-page-view" className="bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            ABOUT EDUTAS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a1e3f] tracking-tight mt-4 leading-tight">
            Dedicated Education &amp; Migration Guidance in Australia
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Headquartered in Milton, Brisbane, EDUTAS provides strategic counselling for international students and professionals aiming to build successful academic and career futures in Australia.
          </p>
        </div>
      </section>

      {/* Main Story & Origins */}
      <section className="py-16 lg:py-20 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 aspect-[4/3] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="Edutas education consulting session"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0f2b5c] text-white p-5 rounded-2xl shadow-xl max-w-xs">
                <div className="text-3xl font-black text-red-500">10+ Years</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  Excellence in Australian Educational Consulting
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-3xl font-extrabold text-[#0a1e3f] leading-snug">
                Transparent Guidance Grounded in Genuine Student Outcomes
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Relocating across the world to pursue Australian higher education is one of the most
                consequential decisions a student and their family will ever make. It involves substantial
                financial investment, personal courage, and complex regulatory considerations.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At EDUTAS, we operate with honesty and precision. We never make unrealistic promises or
                guarantee migration outcomes. Instead, we provide thorough, objective assessments of your
                eligibility, advise you on compliant CRICOS courses, and prepare your application with the
                highest standards of integrity.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs sm:text-sm font-bold text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>CRICOS Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ESOS Act Aligned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Onshore Presence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Stats */}
      <StatsSection />

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              OUR MISSION &amp; VALUES
            </span>
            <h2 className="text-3xl font-extrabold text-[#0a1e3f] mt-3">
              Building Enduring Pathways for International Students
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f2b5c] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Academic Alignment</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Matching student academic strengths with programs offering genuine industry integration,
                recognized accreditations, and vibrant campus experiences.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Integrity &amp; Compliance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Strict adherence to Australian Department of Home Affairs Genuine Student guidelines
                and international student consumer protections.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Continuous Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ongoing guidance in Queensland from airport arrival, TFN application, and health insurance
                maintenance through to graduation and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Headquarters Details */}
      <section className="py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0f2b5c] text-white rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-white/10 px-3 py-1 rounded-full">
                VISIT US IN PERSON
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                South Tower, 339 Coronation Drive, Milton, QLD
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our Brisbane office is conveniently situated along the Coronation Drive riverfront in
                Milton, just minutes from the CBD and easily accessible via train, bus, and ferry.
              </p>
              <div className="text-xs text-slate-300 pt-2">
                Open Weekdays: 10:00 – 17:00 &bull; Saturdays: 10:00 – 15:00
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors"
              >
                Schedule Consultation
              </button>
              <a
                href={`tel:${SITE_CONFIG.primaryPhoneTel}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors text-center"
              >
                Call 0410 893 600
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
