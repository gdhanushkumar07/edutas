import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  FileCheck,
  Calendar,
  ChevronDown,
  ShieldCheck,
  Award,
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Service } from '../types';
import { ConsultationSection } from '../components/ConsultationSection';
import { SITE_CONFIG } from '../data/site';

interface ServiceDetailViewProps {
  service: Service;
  onBack: () => void;
  onOpenPRCalculator?: () => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBack,
  onOpenPRCalculator,
  onOpenConsultation
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div id={`service-detail-${service.slug}`} className="bg-white">
      {/* Service Hero */}
      <section className="bg-gradient-to-b from-[#0a1e3f] to-[#0f2b5c] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-400 bg-white/10 px-3 py-1 rounded-full">
                EDUTAS SERVICE PORTFOLIO
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                {service.shortDesc}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-7 py-3.5 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-700 text-white shadow-lg transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Consultation</span>
                </button>

                {service.slug === 'pr-assessment' && onOpenPRCalculator && (
                  <button
                    onClick={onOpenPRCalculator}
                    className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors flex items-center gap-2"
                  >
                    <Award className="w-4 h-4 text-red-400" />
                    <span>Open PR Points Calculator</span>
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] bg-slate-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column (8 cols): Overview, Who it is for, Process Steps, Required Docs */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-extrabold text-[#0a1e3f] mb-4">Service Overview</h2>
                <p className="text-base text-slate-600 leading-relaxed">{service.description}</p>
              </div>

              {/* Who Is It For */}
              {service.whoIsItFor && service.whoIsItFor.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-[#0a1e3f] mb-4">Who This Service Is For</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.whoIsItFor.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Steps */}
              {service.processSteps && service.processSteps.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-[#0a1e3f] mb-6">Our Assessment &amp; Service Process</h3>
                  <div className="space-y-4">
                    {service.processSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-200 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm sm:text-base text-slate-900">
                            {step.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Required Documents / Information */}
              {service.requiredDocs && service.requiredDocs.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                  <div className="flex items-center gap-2.5 mb-4">
                    <FileCheck className="w-5 h-5 text-red-600" />
                    <h3 className="text-lg font-bold text-slate-900">Required Information &amp; Documents</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {service.requiredDocs.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQs Accordion */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-[#0a1e3f] mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div
                          key={idx}
                          className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                        >
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                            className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                          >
                            <span className="font-bold text-xs sm:text-sm text-slate-900">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                                isOpen ? 'rotate-180 text-red-600' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                              <p className="mt-2">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Regulatory Disclaimer */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
                <strong>Notice: </strong> {SITE_CONFIG.disclaimer}
              </div>
            </div>

            {/* Right Column (4 cols): Quick Facts & Benefits */}
            <div className="lg:col-span-4 space-y-6">
              {/* Benefits Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
                <h3 className="text-base font-bold text-slate-900">Key Benefits</h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  {service.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Booking Card */}
              <div className="bg-[#0f2b5c] text-white rounded-2xl p-6 space-y-4 shadow-lg">
                <h3 className="text-base font-bold">Speak with our Advisors</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Book a confidential 1-on-1 session at our Milton office or online to assess your eligibility for this pathway.
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl font-bold text-xs bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors"
                >
                  Book Free Consultation
                </button>
                <div className="text-[11px] text-slate-300 text-center">
                  Direct Line: <a href={`tel:${SITE_CONFIG.primaryPhoneTel}`} className="underline font-bold text-white">{SITE_CONFIG.primaryPhone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Consultation Form with this service preselected */}
      <ConsultationSection defaultService={service.slug} />
    </div>
  );
};
