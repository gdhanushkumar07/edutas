import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck } from 'lucide-react';
import { ConsultationFormData } from '../types';
import { submitConsultationRequest } from '../services/api';
import { SITE_CONFIG } from '../data/site';

interface ConsultationSectionProps {
  id?: string;
  defaultService?: string;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  id = 'consultation-section',
  defaultService = 'admissions'
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '10:00 - 12:00',
    service: defaultService,
    studyDestination: 'Brisbane, QLD',
    courseInterest: '',
    message: '',
    consent: true
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const response = await submitConsultationRequest(formData);
      if (response.success) {
        setSuccessMessage(response.message);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '10:00 - 12:00',
          service: defaultService,
          studyDestination: 'Brisbane, QLD',
          courseInterest: '',
          message: '',
          consent: true
        });
      } else if (response.errors) {
        setErrors(response.errors);
      }
    } catch (err) {
      setErrors({ global: 'An unexpected error occurred. Please try again or call 0410 893 600.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id} className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-slate-100/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5 bg-[#0a1e3f] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-400 bg-white/10 px-3 py-1 rounded-full">
                  REQUEST A FREE QUOTE
                </span>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Make an Appointment
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Schedule an in-person consultation at our Milton, Brisbane office or an online video
                  meeting with our qualified education and migration advisors.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Genuine Assessment</div>
                      <div className="text-slate-400">Objective review of academic requirements &amp; points eligibility.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Fast Response</div>
                      <div className="text-slate-400">Confirmation provided within 24 business hours.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Snapshot */}
              <div className="pt-8 border-t border-white/10 mt-8 relative z-10 text-xs text-slate-300 space-y-1.5">
                <div className="font-semibold text-white">Milton Office Location:</div>
                <div>{SITE_CONFIG.address.fullFormatted}</div>
                <div className="font-medium text-red-400 pt-1">Direct: {SITE_CONFIG.primaryPhone}</div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
              {successMessage ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-4 text-center my-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-emerald-950">Appointment Request Submitted</h3>
                  <p className="text-sm leading-relaxed max-w-md mx-auto">{successMessage}</p>
                  <button
                    onClick={() => setSuccessMessage(null)}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {errors.global && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.global}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="consultation-fullName"
                        type="text"
                        placeholder="e.g. Alex Henderson"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all ${
                          errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="consultation-email"
                        type="email"
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all ${
                          errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 2: Phone & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="consultation-phone"
                        type="tel"
                        placeholder="e.g. 0410 893 600"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all ${
                          errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service of Interest <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="consultation-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all"
                      >
                        <option value="pr-assessment">PR Assessment</option>
                        <option value="career-guidance">Career Guidance</option>
                        <option value="international-students">International Student Services</option>
                        <option value="admissions">Admissions &amp; University Selection</option>
                        <option value="student-visa">Student Visa (Subclass 500)</option>
                        <option value="skills-assessment">Skills Assessment</option>
                        <option value="english-pte">English / PTE Guidance</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Date <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="consultation-preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all ${
                          errors.preferredDate ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.preferredDate && <p className="text-xs text-red-600 mt-1">{errors.preferredDate}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        id="consultation-preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all"
                      >
                        <option value="10:00 - 12:00">Morning (10:00 - 12:00 AEST)</option>
                        <option value="13:00 - 15:00">Early Afternoon (13:00 - 15:00 AEST)</option>
                        <option value="15:00 - 17:00">Late Afternoon (15:00 - 17:00 AEST)</option>
                        <option value="saturday-morning">Saturday (10:00 - 13:00 AEST)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Study Destination & Course Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Australian City
                      </label>
                      <select
                        id="consultation-destination"
                        value={formData.studyDestination}
                        onChange={(e) => setFormData({ ...formData, studyDestination: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all"
                      >
                        {SITE_CONFIG.australianLocations.map((loc) => (
                          <option key={loc} value={loc}>{loc}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Course or Study Area
                      </label>
                      <input
                        id="consultation-courseInterest"
                        type="text"
                        placeholder="e.g. Masters in IT / Nursing / Engineering"
                        value={formData.courseInterest}
                        onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Brief Message or Specific Questions
                    </label>
                    <textarea
                      id="consultation-message"
                      rows={3}
                      placeholder="Tell us about your previous education, English test status, or specific goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        id="consultation-consent-checkbox"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded border-slate-300 text-red-600 focus:ring-red-500 w-4 h-4"
                      />
                      <span className="text-xs text-slate-600 leading-snug">
                        I agree to be contacted by Edutas regarding my enquiry and acknowledge that
                        information provided is subject to Australian privacy standards.
                      </span>
                    </label>
                    {errors.consent && <p className="text-xs text-red-600 mt-1">{errors.consent}</p>}
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      id="consultation-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-md shadow-red-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Consultation</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
