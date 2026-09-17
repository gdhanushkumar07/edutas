import React from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="video-lightbox-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800 text-white">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span className="font-bold text-sm">Study in Australia – Student Overview &amp; Life</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video bg-black w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/g2i_tBv_6bM?autoplay=1&rel=0"
            title="Study in Australia Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Bottom Bar */}
        <div className="p-4 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            Australian higher education offers globally recognized qualifications and vibrant student life.
          </div>
          <a
            href="https://www.studyaustralia.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 font-semibold"
          >
            <span>Official Study Australia Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
