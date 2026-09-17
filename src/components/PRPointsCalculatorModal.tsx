import React, { useState } from 'react';
import { X, Award, CheckCircle2, AlertTriangle, ArrowRight, Calculator } from 'lucide-react';
import { PRPointsCriteria } from '../types';
import { calculatePRPoints } from '../services/api';
import { SITE_CONFIG } from '../data/site';

interface PRPointsCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const PRPointsCalculatorModal: React.FC<PRPointsCalculatorModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation
}) => {
  const [criteria, setCriteria] = useState<PRPointsCriteria>({
    ageGroup: '25-32',
    englishLevel: 'proficient',
    educationalQualification: 'degree_or_masters',
    australianStudy: true,
    specialistEducationalQualification: false,
    communityLanguageNaati: false,
    studyInRegionalAustralia: false,
    partnerSkills: 'single',
    professionalYear: false,
    overseasWorkExperience: 'none',
    australianWorkExperience: 'none'
  });

  if (!isOpen) return null;

  const { total, breakdown } = calculatePRPoints(criteria);
  const isPassingThreshold = total >= 65;

  return (
    <div
      id="pr-points-calculator-modal"
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f2b5c] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold">
                Australian PR Points Estimator
              </h3>
              <p className="text-xs text-blue-200">
                General Skilled Migration (Subclass 189, 190, 491) Self-Assessment
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Live Score Tally Banner */}
          <div
            className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isPassingThreshold
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl ${
                  isPassingThreshold ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'
                }`}
              >
                {total}
              </div>
              <div>
                <div className="font-extrabold text-base">
                  Estimated Total Points: {total} / 65 minimum
                </div>
                <div className="text-xs text-slate-600">
                  {isPassingThreshold
                    ? 'Eligible to submit an Expression of Interest (EOI) in SkillSelect.'
                    : 'Below 65 threshold. Consult Edutas for strategies to boost your score.'}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0f2b5c] hover:bg-[#163b78] shadow-md transition-colors shrink-0"
            >
              Book Official Review
            </button>
          </div>

          {/* Form Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            {/* Age */}
            <div>
              <label className="block font-bold text-slate-800 mb-1">Age Group</label>
              <select
                value={criteria.ageGroup}
                onChange={(e) => setCriteria({ ...criteria, ageGroup: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs font-medium"
              >
                <option value="18-24">18 to 24 years (25 pts)</option>
                <option value="25-32">25 to 32 years (30 pts)</option>
                <option value="33-39">33 to 39 years (25 pts)</option>
                <option value="40-44">40 to 44 years (15 pts)</option>
                <option value="45+">45+ years (0 pts - not eligible for GSM)</option>
              </select>
            </div>

            {/* English Level */}
            <div>
              <label className="block font-bold text-slate-800 mb-1">English Competency</label>
              <select
                value={criteria.englishLevel}
                onChange={(e) => setCriteria({ ...criteria, englishLevel: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs font-medium"
              >
                <option value="superior">Superior (IELTS 8.0 / PTE 79+) - 20 pts</option>
                <option value="proficient">Proficient (IELTS 7.0 / PTE 65+) - 10 pts</option>
                <option value="competent">Competent (IELTS 6.0 / PTE 50+) - 0 pts</option>
              </select>
            </div>

            {/* Qualification */}
            <div>
              <label className="block font-bold text-slate-800 mb-1">Highest Qualification</label>
              <select
                value={criteria.educationalQualification}
                onChange={(e) =>
                  setCriteria({ ...criteria, educationalQualification: e.target.value })
                }
                className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs font-medium"
              >
                <option value="doctorate">Doctorate (PhD) - 20 pts</option>
                <option value="degree_or_masters">Bachelor or Master Degree - 15 pts</option>
                <option value="diploma_or_trade">Diploma or Australian Trade Qualification - 10 pts</option>
                <option value="none">Other / High School - 0 pts</option>
              </select>
            </div>

            {/* Partner Status */}
            <div>
              <label className="block font-bold text-slate-800 mb-1">Partner / Relationship</label>
              <select
                value={criteria.partnerSkills}
                onChange={(e) => setCriteria({ ...criteria, partnerSkills: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-xs font-medium"
              >
                <option value="single">Single applicant - 10 pts</option>
                <option value="skilled_partner">Partner has skilled assessment &amp; competent English - 10 pts</option>
                <option value="aus_citizen_pr_partner">Partner is Australian citizen or PR - 10 pts</option>
                <option value="competent_english_partner">Partner has competent English only - 5 pts</option>
                <option value="none">Partner not meeting above - 0 pts</option>
              </select>
            </div>
          </div>

          {/* Australian Study & Bonus Checkboxes */}
          <div className="space-y-2.5 pt-2 border-t border-slate-100">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
              Australian Study &amp; Special Factors
            </h4>

            <label className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer border border-slate-200/70">
              <input
                type="checkbox"
                checked={criteria.australianStudy}
                onChange={(e) => setCriteria({ ...criteria, australianStudy: e.target.checked })}
                className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4"
              />
              <span className="text-xs text-slate-800 font-medium">
                Australian Study Requirement (completed at least 2 years CRICOS study in Australia) +5 pts
              </span>
            </label>

            <label className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer border border-slate-200/70">
              <input
                type="checkbox"
                checked={criteria.studyInRegionalAustralia}
                onChange={(e) =>
                  setCriteria({ ...criteria, studyInRegionalAustralia: e.target.checked })
                }
                className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4"
              />
              <span className="text-xs text-slate-800 font-medium">
                Regional Australian Study (studied in a designated regional area while living there) +5 pts
              </span>
            </label>

            <label className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer border border-slate-200/70">
              <input
                type="checkbox"
                checked={criteria.specialistEducationalQualification}
                onChange={(e) =>
                  setCriteria({
                    ...criteria,
                    specialistEducationalQualification: e.target.checked
                  })
                }
                className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4"
              />
              <span className="text-xs text-slate-800 font-medium">
                Specialist Qualification (Master by research or PhD in STEM fields in Australia) +10 pts
              </span>
            </label>

            <label className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer border border-slate-200/70">
              <input
                type="checkbox"
                checked={criteria.communityLanguageNaati}
                onChange={(e) =>
                  setCriteria({ ...criteria, communityLanguageNaati: e.target.checked })
                }
                className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4"
              />
              <span className="text-xs text-slate-800 font-medium">
                Credentialled Community Language (passed NAATI CCL exam) +5 pts
              </span>
            </label>

            <label className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer border border-slate-200/70">
              <input
                type="checkbox"
                checked={criteria.professionalYear}
                onChange={(e) =>
                  setCriteria({ ...criteria, professionalYear: e.target.checked })
                }
                className="rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4"
              />
              <span className="text-xs text-slate-800 font-medium">
                Professional Year Program (in Accounting, ICT/Computing, or Engineering) +5 pts
              </span>
            </label>
          </div>

          {/* Points Breakdown List */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">
              Your Current Points Breakdown:
            </h4>
            <div className="space-y-1 text-xs">
              {breakdown.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-slate-700 py-0.5">
                  <span>{item.label}</span>
                  <span className="font-bold text-[#0f2b5c]">+{item.points} pts</span>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="text-[11px] text-slate-500 leading-relaxed bg-slate-100 p-3 rounded-xl">
            <strong>Disclaimer: </strong> This calculator provides an indicative estimate based on
            Department of Home Affairs General Skilled Migration points table. It does not constitute
            migration advice. Actual visa eligibility and invitations depend on official assessing
            authorities and state nomination quotas.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Close Calculator
          </button>
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-red-600 hover:bg-red-700 shadow-md transition-colors"
          >
            Book Free Assessment with Edutas
          </button>
        </div>
      </div>
    </div>
  );
};
