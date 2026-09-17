import React, { useState } from 'react';
import { ChevronDown, AlertCircle, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { FAQItem } from '../types';
import { SITE_CONFIG } from '../data/site';

interface FAQSectionProps {
  defaultCategory?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ defaultCategory = 'All' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = [
    'All',
    'Admissions',
    'Courses',
    'Student Visa',
    'PR Assessment',
    'Career Guidance',
    'International Students'
  ];

  const filteredFaqs =
    selectedCategory === 'All'
      ? FAQS
      : FAQS.filter((f) => f.category === selectedCategory);

  return (
    <section id="faq-section" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3f] tracking-tight mt-3">
            Common Questions About Australian Education &amp; Migration
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Clear, factual guidance on Australian admissions, visas, PR pathways, and life as an international student.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`faq-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0f2b5c] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq: FAQItem) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-4.5 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0f2b5c] border border-blue-100 shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4.5 pb-5 pt-0 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    <p className="mt-3.5">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mandatory Regulatory Disclaimer */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 flex items-start gap-3.5 text-xs leading-relaxed">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Important Notice &amp; Legal Disclaimer: </span>
            {SITE_CONFIG.disclaimer}
          </div>
        </div>
      </div>
    </section>
  );
};
