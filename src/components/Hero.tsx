import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, CheckCircle2, ShieldCheck, MapPin, Sparkles, GraduationCap } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';

interface HeroProps {
  onGetStarted: () => void;
  onBookConsultation: () => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onGetStarted,
  onBookConsultation,
  onExploreCourses
}) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/60"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-xs sm:text-sm font-bold text-[#0f2b5c] tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>WELCOME TO EDUTAS</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600 font-medium hidden sm:inline">Education &amp; Migration</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#0a1e3f] tracking-tight leading-[1.15]">
              Expert Guidance <br className="hidden sm:inline" />
              for Your{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-amber-600">
                Australian Education Journey
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-red-500/30"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C70 3 230 3 297 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Experienced education and migration guidance to help students choose the right
              course, institution and pathway for their academic and career goals.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-primary-cta"
                onClick={onGetStarted}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-base text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-600/25 active:scale-[0.98] transition-all group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onBookConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base text-[#0f2b5c] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm active:scale-[0.98] transition-all"
              >
                <Calendar className="w-4 h-4 text-red-600" />
                <span>Book a Consultation</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>10+ Years Experience</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <span>Student Guidance</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Australia Focused</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition with floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing stylized frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0f2b5c] to-red-600 opacity-15 blur-lg transform -rotate-1" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                  alt="International students receiving education guidance in Australia"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3f]/80 via-transparent to-black/10" />

                {/* Overlay Badge: Brisbane Location */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-900">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                    <div>
                      <div className="font-bold">Milton, Brisbane Office</div>
                      <div className="text-[11px] text-slate-500">South Tower, 339 Coronation Dr</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-blue-50 text-[#0f2b5c] font-bold text-[11px] border border-blue-200">
                    QLD 4064
                  </span>
                </div>
              </div>

              {/* Floating Information Card 1: 10+ Years */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-black text-lg shadow-xs">
                  10+
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">Years Experience</div>
                  <div className="text-xs text-slate-500 font-medium">In Consulting Services</div>
                </div>
              </motion.div>

              {/* Floating Information Card 2: 8K+ Happy Students */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0f2b5c] flex items-center justify-center font-black text-base shadow-xs">
                  8K+
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">Happy Students</div>
                  <div className="text-xs text-slate-500 font-medium">Assisted in Australia</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
