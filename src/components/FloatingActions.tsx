import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';

interface FloatingActionsProps {
  onOpenConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenConsultation }) => {
  return (
    <>
      {/* Desktop Floating Pills (Bottom Right) */}
      <div
        id="floating-actions-desktop"
        className="fixed bottom-6 right-6 z-30 hidden md:flex flex-col items-end gap-3"
      >
        {/* WhatsApp Direct Chat */}
        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace('+', '')}?text=Hi%20Edutas,%20I'd%20like%20to%20know%20more%20about%20Australian%20courses%20and%20visas.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-900/20 hover:scale-105 active:scale-95 transition-all group"
          title="Chat with an Edutas Advisor on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Quick Call */}
        <a
          id="floating-call-btn"
          href={`tel:${SITE_CONFIG.primaryPhoneTel}`}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0f2b5c] hover:bg-[#163b78] text-white font-bold text-xs shadow-lg shadow-blue-950/20 hover:scale-105 active:scale-95 transition-all group"
          title="Call Edutas Office"
        >
          <Phone className="w-4 h-4 text-red-400" />
          <span>Call 0410 893 600</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          id="floating-consultation-btn"
          onClick={onOpenConsultation}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg shadow-red-900/20 hover:scale-105 active:scale-95 transition-all"
          title="Book an Education or Migration Consultation"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div
        id="floating-actions-mobile"
        className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl"
      >
        <a
          href={`tel:${SITE_CONFIG.primaryPhoneTel}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-red-600" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace('+', '')}?text=Hi%20Edutas,%20I'd%20like%20to%20enquire%20about%20study%20options.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-[1.5] inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Appt</span>
        </button>
      </div>
    </>
  );
};
