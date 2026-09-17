import React from 'react';
import { ShieldCheck, Users, Play, CheckCircle2, Award, ArrowRight, HeartHandshake } from 'lucide-react';

interface WhyChooseUsProps {
  onContactUs: () => void;
  onWatchVideo: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onContactUs,
  onWatchVideo
}) => {
  return (
    <section id="why-choose-us-section" className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Image Composition with Play Button Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Backing stylized frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-900 to-red-600 opacity-10 blur-xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
                  alt="Students on university campus in Australia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                  <button
                    id="watch-video-play-btn"
                    onClick={onWatchVideo}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
                    title="Watch overview video"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 ml-1 fill-white" />
                  </button>
                  <span className="text-white font-bold text-sm sm:text-base mt-4 drop-shadow-md">
                    Watch Video: Study &amp; Live in Australia
                  </span>
                  <span className="text-slate-200 text-xs mt-0.5">
                    Real orientation insights from our consultants
                  </span>
                </div>
              </div>

              {/* Floating Trust Indicator */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">ESOS &amp; CRICOS</div>
                  <div className="text-xs text-slate-500 font-medium">100% Accredited Pathways</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content with Feature Rows */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3f] tracking-tight mt-3">
                Learn Why Students Trust Us
              </h2>
              <p className="text-base text-slate-600 mt-2">
                Deciding to study and relocate overseas requires trustworthy, honest guidance. Here is
                why international students and families choose Edutas.
              </p>
            </div>

            {/* Feature 1: Expert Guidance & Personalized Support */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f2b5c] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Expert Guidance &amp; Personalized Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Every student possesses unique academic backgrounds and financial considerations.
                  We craft tailored plans matching your GPA, budget, and long-term residency goals.
                </p>
              </div>
            </div>

            {/* Feature 2: Proven Success & Global Opportunities */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#0f2b5c]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Proven Success &amp; Global Opportunities
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  With over 8,000 students assisted and 567+ global study options, our established
                  network connects you with verified Australian educational institutions.
                </p>
              </div>
            </div>

            {/* Feature 3: On-the-Ground Presence in Queensland */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Local Brisbane Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Our physical office in Milton, Queensland provides a friendly, reassuring home base
                  for students when they land in Australia.
                </p>
              </div>
            </div>

            {/* CTAs: Contact Us & Watch Video */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="why-choose-us-contact-btn"
                onClick={onContactUs}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-md shadow-red-600/20 transition-all group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="why-choose-us-video-btn"
                onClick={onWatchVideo}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <Play className="w-4 h-4 text-red-600 fill-red-600" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
