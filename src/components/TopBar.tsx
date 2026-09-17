import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';

interface TopBarProps {
  onOpenConsultation?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenConsultation }) => {
  return (
    <div
      id="top-contact-bar"
      className="bg-[#0a1e3f] text-slate-200 text-xs border-b border-white/10 hidden md:block"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-2.5 gap-y-2">
          {/* Left: Physical Address & Office Hours */}
          <div className="flex items-center gap-6">
            <a
              id="topbar-address-link"
              href={SITE_CONFIG.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
              title="Open office location in Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-red-400 group-hover:scale-110 transition-transform shrink-0" />
              <span className="truncate max-w-xs lg:max-w-md">
                South Tower, Level 4, 339 Coronation Dr, Milton, QLD 4064
              </span>
            </a>

            <div className="hidden xl:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-300 shrink-0" />
              <span>Mon-Fri: 10:00–17:00 | Sat: 10:00–15:00</span>
            </div>
          </div>

          {/* Right: Phone Numbers & Direct Email */}
          <div className="flex items-center gap-4 lg:gap-6 ml-auto">
            <div className="flex items-center gap-3">
              <a
                id="topbar-phone-1"
                href={`tel:${SITE_CONFIG.primaryPhoneTel}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>{SITE_CONFIG.primaryPhone}</span>
              </a>

              <span className="text-slate-500">/</span>

              <a
                id="topbar-phone-2"
                href={`tel:${SITE_CONFIG.secondaryPhoneTel}`}
                className="hover:text-white transition-colors font-medium"
              >
                <span>{SITE_CONFIG.secondaryPhone}</span>
              </a>
            </div>

            <a
              id="topbar-email"
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-300 shrink-0" />
              <span>{SITE_CONFIG.email}</span>
            </a>

            <a
              id="topbar-whatsapp-chat"
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace('+', '')}?text=Hello%20Edutas,%20I%20would%20like%20to%20enquire%20about%20studying%20in%20Australia.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-600/90 hover:bg-emerald-600 text-white font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
