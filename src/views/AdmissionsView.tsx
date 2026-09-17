import React from 'react';
import {
  GraduationCap,
  FileCheck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Building2,
  Send
} from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { ConsultationSection } from '../components/ConsultationSection';

interface AdmissionsViewProps {
  onNavigate: (view: string, subParam?: string) => void;
  onOpenConsultation: () => void;
}

export const AdmissionsView: React.FC<AdmissionsViewProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  return (
    <div id="admissions-guide-page" className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0a1e3f] to-[#0f2b5c] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-400 bg-white/10 px-3 py-1 rounded-full">
            ADMISSIONS &amp; UNIVERSITY PATHWAYS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 leading-tight">
            Australian University Admissions &amp; Enrolment Guide
          </h1>
          <p className="text-base text-slate-200 mt-4 leading-relaxed">
            Navigate university entry requirements, Genuine Student (GS) criteria, Offer Letters, and
            Confirmation of Enrolment (CoE) with accredited Australian guidance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-700 text-white shadow-lg transition-colors"
            >
              Start Your Admission
            </button>
            <button
              onClick={() => onNavigate('courses')}
              className="px-6 py-3 rounded-xl font-bold text-sm bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors"
            >
              Browse Accredited Courses
            </button>
          </div>
        </div>
      </section>

      {/* 5-Step Admissions Lifecycle */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              STEP-BY-STEP PATHWAY
            </span>
            <h2 className="text-3xl font-extrabold text-[#0a1e3f] mt-2">
              How the Australian Admission Process Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Course Discovery',
                desc: 'Assess your prior academics, English test scores, career goals, and preferred Australian state/city.'
              },
              {
                step: '02',
                title: 'University Shortlist',
                desc: 'Compare CRICOS accredited universities, tuition costs, scholarships, and campus facilities.'
              },
              {
                step: '03',
                title: 'Offer Letter',
                desc: 'Edutas submits your formal application. Receive a Conditional or Unconditional Offer Letter.'
              },
              {
                step: '04',
                title: 'GS & Acceptance',
                desc: 'Satisfy university Genuine Student (GS) assessment and pay initial deposit to secure your place.'
              },
              {
                step: '05',
                title: 'Electronic CoE',
                desc: 'Receive the official Confirmation of Enrolment (CoE) required to lodge your Student Visa.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black text-red-600">{item.step}</div>
                  <h3 className="font-bold text-base text-slate-900 mt-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intakes & Timelines */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                PLAN YOUR INTAKE
              </span>
              <h2 className="text-3xl font-extrabold text-[#0a1e3f]">
                Australian University Academic Intakes
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Most Australian universities operate on a Semester (2 intakes per year) or Trimester
                (3 intakes per year) calendar. We recommend applying at least 3 to 4 months prior to
                allow ample time for GS verification and visa processing.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-slate-900">Semester 1 (February / March)</div>
                    <div className="text-xs text-slate-500">The primary and largest intake for all Australian universities.</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-slate-900">Semester 2 (July / August)</div>
                    <div className="text-xs text-slate-500">Mid-year intake available for most undergraduate &amp; postgraduate degrees.</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-slate-900">Trimester 3 (October / November)</div>
                    <div className="text-xs text-slate-500">Offered by specific universities (e.g. Griffith, Deakin) for fast-tracked study.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0f2b5c] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-2xl font-extrabold">Need Admission Assistance?</h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Edutas provides full-cycle support at zero extra agency cost for authorized university
                partners. Our team evaluates your documents, requests application fee waivers where
                available, and facilitates direct communication with university admissions staff.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors"
                >
                  Book Free Admissions Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Consultation Section */}
      <ConsultationSection defaultService="admissions" />
    </div>
  );
};
