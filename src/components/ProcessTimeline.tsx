import React, { useState } from 'react';
import { MessageSquare, FileText, Award, Plane, CheckCircle, ChevronDown, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/process';
import { ProcessStep } from '../types';

interface ProcessTimelineProps {
  onStartProcess?: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onStartProcess }) => {
  const [expandedStep, setExpandedStep] = useState<string>('01');

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Plane':
        return <Plane className="w-5 h-5" />;
      case 'CheckCircle':
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <section id="process-section" className="py-16 lg:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            STEPS TO PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3f] tracking-tight mt-3">
            Begin Your Journey to Build a Successful Professional Life in Australia
          </h2>
          <p className="text-base text-slate-600 mt-2">
            A clear, 5-stage roadmap designed to take you seamlessly from initial course selection
            through to university graduation and onshore career opportunities.
          </p>
        </div>

        {/* Desktop Connected Horizontal Stepper Bar */}
        <div className="hidden lg:block mb-12">
          <div className="relative flex items-center justify-between">
            {/* Horizontal connecting background line */}
            <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-slate-200 z-0" />
            <div
              className="absolute top-1/2 left-6 -translate-y-1/2 h-1 bg-gradient-to-r from-red-600 to-[#0f2b5c] z-0 transition-all duration-500"
              style={{
                width: `${(parseInt(expandedStep, 10) - 1) * 25}%`
              }}
            />

            {PROCESS_STEPS.map((step: ProcessStep) => {
              const isSelected = expandedStep === step.stepNumber;
              const isPassed = parseInt(step.stepNumber, 10) <= parseInt(expandedStep, 10);

              return (
                <button
                  key={step.stepNumber}
                  id={`timeline-step-btn-${step.stepNumber}`}
                  onClick={() => setExpandedStep(step.stepNumber)}
                  className="relative z-10 flex flex-col items-center group focus:outline-hidden"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-sm transition-all duration-300 border-2 shadow-sm ${
                      isSelected
                        ? 'bg-red-600 text-white border-red-600 scale-110 shadow-lg shadow-red-600/30 ring-4 ring-red-100'
                        : isPassed
                        ? 'bg-[#0f2b5c] text-white border-[#0f2b5c]'
                        : 'bg-white text-slate-600 border-slate-200 group-hover:border-red-300 group-hover:text-red-600'
                    }`}
                  >
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 mt-2">
                    STEP {step.stepNumber}
                  </span>
                  <span
                    className={`text-xs font-bold max-w-[130px] text-center mt-0.5 transition-colors ${
                      isSelected ? 'text-red-600' : 'text-slate-700'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Details Panel (Desktop) */}
        <div className="hidden lg:block">
          {PROCESS_STEPS.filter((s) => s.stepNumber === expandedStep).map((step: ProcessStep) => (
            <div
              key={step.stepNumber}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-md transition-all animate-in fade-in duration-300"
            >
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-red-600 text-white font-black text-sm tracking-wider">
                      STEP {step.stepNumber}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#0a1e3f]">{step.title}</h3>
                  </div>

                  <p className="text-sm font-semibold text-slate-700">{step.summary}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>

                <div className="col-span-5 bg-white rounded-2xl p-6 border border-slate-200/60 shadow-xs">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                    Key Deliverables &amp; Outcomes
                  </h4>
                  <ul className="space-y-2.5">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Accordion Steps List */}
        <div className="lg:hidden space-y-4">
          {PROCESS_STEPS.map((step: ProcessStep) => {
            const isOpen = expandedStep === step.stepNumber;
            return (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setExpandedStep(isOpen ? '' : step.stepNumber)}
                  className="w-full text-left p-4.5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black ${
                        isOpen ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {step.stepNumber}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{step.title}</div>
                      <div className="text-xs text-slate-500 line-clamp-1">{step.summary}</div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4.5 pt-0 bg-slate-50/50 border-t border-slate-100 space-y-3 text-xs sm:text-sm text-slate-600">
                    <p className="leading-relaxed mt-3">{step.description}</p>
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 space-y-2">
                      <div className="font-bold text-xs uppercase tracking-wider text-slate-400">
                        Deliverables:
                      </div>
                      {step.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {onStartProcess && (
          <div className="mt-12 text-center">
            <button
              onClick={onStartProcess}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-md shadow-red-600/20 active:scale-[0.98] transition-all"
            >
              <span>Begin Your Consultation Today</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
