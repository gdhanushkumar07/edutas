import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (view: string, subParam?: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  return (
    <footer id="main-site-footer" className="bg-[#07152b] text-slate-300 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="md" onClick={() => onNavigate('home')} />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              EDUTAS Education and Migration is an Australian consulting firm dedicated to assisting
              international students with university admissions, student visa compliance, and skilled
              pathways across Australia.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Headquartered in Milton, Brisbane, Queensland</span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-red-500" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-red-500" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-detail', 'english-pte')}
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-red-500" />
                  <span>Entrance Exams &amp; PTE</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-red-500" />
                  <span>Explore Courses</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('visa')}
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-red-500" />
                  <span>Visa Guidance</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-detail', 'career-guidance')}
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-red-500" />
                  <span>Career Oriented Counselling</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={SITE_CONFIG.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{SITE_CONFIG.address.fullFormatted}</span>
              </a>

              <div className="flex flex-col gap-1">
                <a
                  href={`tel:${SITE_CONFIG.primaryPhoneTel}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{SITE_CONFIG.primaryPhone}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.secondaryPhoneTel}`}
                  className="flex items-center gap-2.5 pl-6.5 hover:text-white transition-colors"
                >
                  <span>{SITE_CONFIG.secondaryPhone}</span>
                </a>
              </div>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>

          {/* Column 4: Opening Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs">
              {SITE_CONFIG.openingHours.map((item, idx) => (
                <div key={idx} className="flex flex-col pb-1 border-b border-slate-800">
                  <span className="text-slate-400 font-medium">{item.label}</span>
                  <span className="text-white font-bold">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Regulatory Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-slate-300 transition-colors"
            >
              Regulatory Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
