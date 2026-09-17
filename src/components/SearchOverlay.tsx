import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Award, FileText, Globe, GraduationCap } from 'lucide-react';
import { COURSES } from '../data/courses';
import { SERVICES } from '../data/services';
import { FAQS } from '../data/faqs';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, subParam?: string) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent can toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const matchingCourses = query
    ? COURSES.filter(
        (c) =>
          c.title.toLowerCase().includes(normalizedQuery) ||
          c.discipline.toLowerCase().includes(normalizedQuery) ||
          c.location.toLowerCase().includes(normalizedQuery) ||
          c.overview.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const matchingServices = query
    ? SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(normalizedQuery) ||
          s.shortDesc.toLowerCase().includes(normalizedQuery) ||
          s.description.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const matchingFaqs = query
    ? FAQS.filter(
        (f) =>
          f.question.toLowerCase().includes(normalizedQuery) ||
          f.answer.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const totalResults = matchingCourses.length + matchingServices.length + matchingFaqs.length;

  const handleSelect = (view: string, subParam?: string) => {
    onClose();
    onNavigate(view, subParam);
  };

  return (
    <div
      id="search-overlay-modal"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 lg:p-20 overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-slate-200 px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            id="global-search-input"
            type="text"
            placeholder="Search courses, universities, PR assessment, visa info, FAQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base sm:text-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden bg-transparent"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results / Suggestions Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {!query ? (
            <div className="space-y-4 py-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Masters in IT',
                  'Masters in Engineering',
                  'Masters in Accounting',
                  'PR Assessment',
                  'Student Visa (Subclass 500)',
                  'PTE English Requirements',
                  'Brisbane Study Options'
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                <span>Press ESC to exit</span>
                <span>Press ⌘K or Ctrl+K anytime</span>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center space-y-2">
              <p className="text-sm font-semibold text-slate-700">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-500">
                Try searching for &ldquo;IT&rdquo;, &ldquo;Engineering&rdquo;, &ldquo;PR Assessment&rdquo;, or &ldquo;Admissions&rdquo;.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Courses Results */}
              {matchingCourses.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Courses ({matchingCourses.length})</span>
                  </div>
                  {matchingCourses.map((course) => (
                    <button
                      key={course.id}
                      onClick={() => handleSelect('course-detail', course.slug)}
                      className="w-full text-left p-3 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-bold text-sm text-slate-900 group-hover:text-red-600 transition-colors">
                          {course.title}
                        </div>
                        <div className="text-xs text-slate-500">
                          {course.discipline} &bull; {course.duration} &bull; {course.location}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              )}

              {/* Services Results */}
              {matchingServices.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Services ({matchingServices.length})</span>
                  </div>
                  {matchingServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleSelect('service-detail', service.slug)}
                      className="w-full text-left p-3 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-bold text-sm text-slate-900 group-hover:text-red-600 transition-colors">
                          {service.title}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">{service.shortDesc}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              )}

              {/* FAQs Results */}
              {matchingFaqs.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Frequently Asked Questions ({matchingFaqs.length})</span>
                  </div>
                  {matchingFaqs.map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => handleSelect('faq')}
                      className="w-full text-left p-3 rounded-xl hover:bg-slate-50 border border-slate-100 group transition-colors"
                    >
                      <div className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-red-600">
                        {faq.question}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">{faq.answer}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
