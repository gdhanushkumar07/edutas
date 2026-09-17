import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  onClick
}) => {
  const isLight = variant === 'light';

  const sizeClasses = {
    sm: { icon: 'w-8 h-8 text-base', title: 'text-lg', subtitle: 'text-[9px]' },
    md: { icon: 'w-10 h-10 text-xl', title: 'text-2xl', subtitle: 'text-[10px]' },
    lg: { icon: 'w-12 h-12 text-2xl', title: 'text-3xl', subtitle: 'text-xs' }
  }[size];

  return (
    <div
      id="edutas-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer select-none group transition-opacity hover:opacity-95 ${className}`}
    >
      {/* Brand Icon Mark: Australian Navy Blue Shield with Crimson Gold Graduation Arc */}
      <div className={`relative ${sizeClasses.icon} rounded-xl bg-gradient-to-br from-[#0f2b5c] via-[#163b78] to-[#0a1e3f] shadow-md shadow-blue-950/20 flex items-center justify-center text-white border border-blue-400/20 overflow-hidden`}>
        {/* Subtle Australian Southern Cross / boomerang motif overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(229,57,53,0.35),transparent_70%)]" />
        <span className="font-extrabold tracking-tighter text-white font-serif relative z-10">
          E<span className="text-red-500 font-sans">.</span>
        </span>
        {/* Bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-red-600" />
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-center tracking-tight">
          <span className={`font-black tracking-wider ${sizeClasses.title} ${isLight ? 'text-white' : 'text-[#0f2b5c]'}`}>
            EDU<span className="text-red-600">TAS</span>
          </span>
        </div>
        <span
          className={`font-semibold tracking-[0.18em] uppercase ${sizeClasses.subtitle} mt-1 ${
            isLight ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Education &amp; Migration
        </span>
      </div>
    </div>
  );
};
