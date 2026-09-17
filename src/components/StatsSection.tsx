import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Globe, Users, GraduationCap } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';

export const StatsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [isInView, hasTriggered]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-red-500" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-400" />;
      case 'Award':
      default:
        return <Award className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section
      id="statistics-section"
      ref={containerRef}
      className="bg-[#0a1e3f] py-14 lg:py-20 text-white relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,57,53,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
            VERIFIED CREDENTIALS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Trusted by Thousands of Students Across Australia
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            A decade of dedicated education consulting and migration guidance based in Milton, Queensland.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SITE_CONFIG.verifiedStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={hasTriggered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all group hover:-translate-y-1 hover:border-red-500/40"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon)}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                  Verified
                </span>
              </div>

              <div className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex items-baseline">
                <span>{stat.value}</span>
              </div>

              <h3 className="text-lg font-bold text-slate-100 mt-2">
                {stat.label}
              </h3>

              <p className="text-xs text-slate-400 mt-1 font-normal leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
