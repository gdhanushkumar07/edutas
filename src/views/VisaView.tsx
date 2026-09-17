import React from 'react';
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Briefcase,
  DollarSign,
  ShieldCheck,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { ConsultationSection } from '../components/ConsultationSection';

interface VisaViewProps {
  onOpenConsultation: () => void;
  onOpenPRCalculator: () => void;
}

export const VisaView: React.FC<VisaViewProps> = ({
  onOpenConsultation,
  onOpenPRCalculator
}) => {
  return (
    <div id="visa-guidance-page" className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0a1e3f] to-[#0f2b5c] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-400 bg-white/10 px-3 py-1 rounded-full">
            DEPARTMENT OF HOME AFFAIRS COMPLIANCE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 leading-tight">
            Australian Student Visa (Subclass 500) Guidance
          </h1>
          <p className="text-base text-slate-200 mt-4 leading-relaxed">
            Essential facts, eligibility requirements, financial thresholds, OSHC health cover, and work
            rights for international students studying in Australia.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-700 text-white shadow-lg transition-colors"
            >
              Consult with Edutas
            </button>
            <button
              onClick={onOpenPRCalculator}
              className="px-6 py-3 rounded-xl font-bold text-sm bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors"
            >
              PR Points Calculator
            </button>
          </div>
        </div>
      </section>

      {/* Mandatory Disclaimer */}
      <section className="bg-amber-50 border-b border-amber-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-xs sm:text-sm text-amber-950 leading-relaxed">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Legal Disclaimer: </span>
              {SITE_CONFIG.disclaimer}
            </div>
          </div>
        </div>
      </section>

      {/* Core Visa Pillars Grid */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Confirmation of Enrolment (CoE) */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f2b5c] flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">1. Valid CoE</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You must hold a valid electronic Confirmation of Enrolment (CoE) issued by a registered
                CRICOS education provider for a full-time course of study.
              </p>
            </div>

            {/* 2. Genuine Student (GS) Requirement */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">2. Genuine Student (GS)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Replaces the former GTE requirement. Focuses on your genuine intention to obtain an
                Australian qualification, ties to home country, and economic circumstances.
              </p>
            </div>

            {/* 3. Financial Capacity */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">3. Financial Capacity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Evidence of sufficient funds to cover 12 months of living expenses (approx. AUD $29,710 as
                of 2024 updates), plus course tuition and return travel costs.
              </p>
            </div>

            {/* 4. Overseas Student Health Cover (OSHC) */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">4. Health Cover (OSHC)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mandatory health insurance (OSHC) covering you from your arrival date until visa
                expiry through approved providers (Medibank, Allianz Care, Bupa, etc.).
              </p>
            </div>

            {/* 5. Work Rights Regulations */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">5. Student Work Rights</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Student visa holders are permitted to work up to <strong>48 hours per fortnight</strong> while course is in session, and unlimited hours during scheduled course vacations.
              </p>
            </div>

            {/* 6. English Competency */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">6. English Requirements</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Evidence of English proficiency: Minimum IELTS 6.0 overall (or PTE equivalent 50+) for
                direct bachelor or master degree entry, with higher requirements for specific health fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Checklist Accordion */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              PREPARATION CHECKLIST
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1e3f] mt-2">
              Essential Student Visa Checklist
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4 text-xs sm:text-sm">
            {[
              'Valid passport (minimum 6 months validity beyond intended stay)',
              'Electronic Confirmation of Enrolment (eCoE) from your Australian university',
              'Genuine Student (GS) statement addressing career objectives, economic prospects, and course relevance',
              'English language test scorecard (IELTS, PTE Academic, or TOEFL iBT)',
              'Certified copies of academic transcripts and graduation certificates',
              'Overseas Student Health Cover (OSHC) policy certificate',
              'Proof of financial capacity (bank statements, education loan sanction, or sponsor affidavit)',
              'Health examinations (chest X-ray & medical assessment by approved panel physician)',
              'Australian police checks or overseas police clearances if requested'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Consultation Section */}
      <ConsultationSection defaultService="student-visa" />
    </div>
  );
};
