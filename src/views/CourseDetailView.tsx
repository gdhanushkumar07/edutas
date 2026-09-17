import React from 'react';
import {
  ArrowLeft,
  Clock,
  MapPin,
  Building2,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  DollarSign,
  ShieldCheck,
  Send
} from 'lucide-react';
import { Course } from '../types';
import { ConsultationSection } from '../components/ConsultationSection';

interface CourseDetailViewProps {
  course: Course;
  onBack: () => void;
  onOpenConsultation: () => void;
}

export const CourseDetailView: React.FC<CourseDetailViewProps> = ({
  course,
  onBack,
  onOpenConsultation
}) => {
  return (
    <div id={`course-detail-${course.slug}`} className="bg-white">
      {/* Course Header Banner */}
      <section className="bg-[#0a1e3f] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-red-600 text-white font-bold">
                  {course.degreeLevel}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200">
                  {course.discipline}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/30">
                  CRICOS Accredited
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {course.title}
              </h1>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span className="font-semibold text-white">{course.university}</span>
                <span>&bull;</span>
                <span>{course.campus}</span>
              </div>

              {/* Key Fast Facts Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <div className="text-slate-400">Duration</div>
                  <div className="font-bold text-white mt-0.5">{course.duration}</div>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <div className="text-slate-400">Intakes</div>
                  <div className="font-bold text-white mt-0.5">{course.intakes.join(', ')}</div>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <div className="text-slate-400">Location</div>
                  <div className="font-bold text-white mt-0.5">{course.location}</div>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <div className="text-slate-400">Study Mode</div>
                  <div className="font-bold text-white mt-0.5">{course.studyMode}</div>
                </div>
              </div>
            </div>

            {/* Application CTA Card */}
            <div className="lg:col-span-4 bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Indicative Tuition
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#0f2b5c] mt-1">
                {course.feeEstimate}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Scholarships available for eligible international students (up to 25% fee waiver).
              </p>

              <button
                onClick={onOpenConsultation}
                className="w-full mt-5 py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Apply for this Course</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Body */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-extrabold text-[#0a1e3f] mb-4">Course Overview</h2>
                <p className="text-base text-slate-600 leading-relaxed">{course.overview}</p>
              </div>

              {/* Eligibility & Entry Requirements */}
              <div>
                <h3 className="text-xl font-bold text-[#0a1e3f] mb-4">Entry &amp; English Requirements</h3>
                <div className="space-y-3">
                  {course.eligibility.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Outcomes */}
              <div>
                <h3 className="text-xl font-bold text-[#0a1e3f] mb-4">Australian Career Pathways</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.careerOutcomes.map((career, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-slate-800 text-xs sm:text-sm font-semibold"
                    >
                      <Briefcase className="w-4 h-4 text-[#0f2b5c] shrink-0" />
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ESOS & CRICOS Compliance */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
                <strong>CRICOS Registration: </strong> This qualification is registered on CRICOS for
                full-time delivery to international student visa (Subclass 500) holders in accordance
                with the ESOS National Code. Tuition fees, course units, and prerequisites are verified
                with provider institution requirements.
              </div>
            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-[16/10]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
                <h4 className="font-bold text-slate-900 text-sm">Need Help with Admissions?</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our Milton, Brisbane team coordinates directly with Australian university admissions
                  teams to secure your Offer Letter and handle Genuine Student (GS) compliance.
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-xl font-bold text-xs bg-[#0f2b5c] hover:bg-[#163b78] text-white shadow-xs transition-colors"
                >
                  Contact Admissions Team
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
