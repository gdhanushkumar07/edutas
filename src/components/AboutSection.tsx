import React from 'react';
import { Phone, CheckCircle2, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';

interface AboutSectionProps {
  onLearnMore: () => void;
  onContactUs: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMore,
  onContactUs
}) => {
  return (
    <section id="about-section" className="py-16 lg:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Large Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                  alt="Edutas education and migration consultants helping international students"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Highlight Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-gradient-to-br from-[#0f2b5c] to-[#0a1e3f] text-white p-5 rounded-2xl shadow-xl border border-blue-400/20 max-w-[240px]">
                <div className="text-3xl font-extrabold text-red-500">10+ Years</div>
                <div className="text-sm font-bold text-slate-100 mt-0.5">
                  Experience in Consulting Services
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Guiding international students across Australian institutions.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                MORE ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3f] tracking-tight mt-3 leading-tight">
                Your Journey to Australia Starts With the Right Guidance
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              EDUTAS is an Australian education and migration consultancy based in Milton, Brisbane. We
              specialize in providing genuine, strategic support for international students pursuing
              higher education, vocational training, and subsequent professional career pathways in
              Australia.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              From course selection and admissions across top Australian universities to student visa
              preparation, PR eligibility assessment, and on-the-ground support in Queensland, our team
              ensures your transition is clear, lawful, and aligned with your long-term ambitions.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Compliant &amp; Ethical Guidance</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Strict adherence to ESOS frameworks &amp; genuine student policies.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <MapPin className="w-5 h-5 text-[#0f2b5c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Brisbane Headquarters</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Visit our office at South Tower, Level 4, 339 Coronation Drive, Milton.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-learn-more-btn"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#0f2b5c] hover:bg-[#163b78] shadow-md shadow-blue-950/15 transition-all group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="about-call-cta"
                href={`tel:${SITE_CONFIG.primaryPhoneTel}`}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>Call {SITE_CONFIG.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
