import React from 'react';
import { X, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const getTitle = () => {
    switch (type) {
      case 'privacy':
        return 'Privacy Policy';
      case 'terms':
        return 'Terms & Conditions';
      case 'disclaimer':
      default:
        return 'Australian Migration & Legal Disclaimer';
    }
  };

  return (
    <div
      id="legal-info-modal"
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#0f2b5c] text-white p-5 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-red-500" />
            <h3 className="text-lg font-bold">{getTitle()}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          {type === 'disclaimer' && (
            <>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-medium">
                {SITE_CONFIG.disclaimer}
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Regulatory Compliance</h4>
              <p>
                EDUTAS operates in strict compliance with the Education Services for Overseas Students
                Act 2000 (ESOS Act), National Code of Practice 2018, and Migration Act 1958 regulations.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">No Visa Guarantees</h4>
              <p>
                In accordance with consumer protection guidelines and Code of Conduct, EDUTAS does not
                promise or guarantee visa grants, migration outcomes, or employment placements in
                Australia. Final visa determinations rest exclusively with the Australian Department of
                Home Affairs.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                At EDUTAS, we are committed to protecting your personal information in accordance with
                the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth).
              </p>
              <h4 className="font-bold text-slate-900 text-sm">Information We Collect</h4>
              <p>
                When you request a consultation or course information, we collect your name, email,
                phone number, academic background, and study interests to provide relevant education
                consulting services.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">Use &amp; Disclosure</h4>
              <p>
                We use your details only to evaluate your course eligibility, communicate with you
                regarding your enquiries, and submit applications to authorized Australian universities
                with your explicit written consent. We never sell your personal data.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">Contact Us</h4>
              <p>
                If you have questions regarding your data, contact our privacy officer at{' '}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-red-600 underline">
                  {SITE_CONFIG.email}
                </a>
                .
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                By accessing or using the EDUTAS website, you agree to comply with these terms of use.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">Consultation Services</h4>
              <p>
                Consultations provided by EDUTAS are intended to assist students with course discovery,
                admissions procedures, and general education pathways. Individual migration advice is
                provided in accordance with Australian legal standards.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">Course &amp; Fee Accuracy</h4>
              <p>
                While EDUTAS makes every effort to keep tuition fee estimates and course durations
                up-to-date, university fees, intakes, and admission requirements are set directly by
                educational institutions and are subject to change.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl font-bold text-xs bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
