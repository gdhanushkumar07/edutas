import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { submitContactForm } from '../services/api';
import { ContactFormData } from '../types';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        setSuccess(res.message);
        setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
      } else if (res.errors) {
        setErrors(res.errors);
      }
    } catch {
      setErrors({ global: 'Failed to send message. Please try again or call us directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-page-view" className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0a1e3f] to-[#0f2b5c] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-400 bg-white/10 px-3 py-1 rounded-full">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 leading-tight">
            Contact Edutas Education &amp; Migration
          </h1>
          <p className="text-base text-slate-200 mt-3 leading-relaxed">
            Reach out to our team in Milton, Brisbane. Schedule an in-person appointment or connect with our qualified education consultants online.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 lg:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards & Urgent Notice (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Urgent Notice Card */}
              <div className="p-4.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <span className="font-bold">Urgent Visa or Admission Expiry? </span>
                  If your visa is expiring within 14 days or your semester offer has an impending
                  deadline, please call our direct hotline at{' '}
                  <a href={`tel:${SITE_CONFIG.primaryPhoneTel}`} className="font-bold underline text-amber-900">
                    {SITE_CONFIG.primaryPhone}
                  </a>{' '}
                  for priority assistance.
                </div>
              </div>

              {/* Office Location Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Brisbane Headquarters</h3>
                    <p className="text-xs text-slate-500">Milton Riverfront Commercial Precinct</p>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                  {SITE_CONFIG.address.line1},<br />
                  {SITE_CONFIG.address.line2},<br />
                  {SITE_CONFIG.address.suburb}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.postcode}, Australia
                </div>
                <div className="pt-2">
                  <a
                    href={SITE_CONFIG.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    <span>View Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone & Direct Communications */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0f2b5c] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Telephone / WhatsApp</h3>
                    <p className="text-xs text-slate-500">Direct advisor communication</p>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Primary Office:</span>
                    <a href={`tel:${SITE_CONFIG.primaryPhoneTel}`} className="font-bold text-slate-900 hover:text-red-600">
                      {SITE_CONFIG.primaryPhone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Secondary Line:</span>
                    <a href={`tel:${SITE_CONFIG.secondaryPhoneTel}`} className="font-bold text-slate-900 hover:text-red-600">
                      {SITE_CONFIG.secondaryPhone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Email:</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="font-bold text-[#0f2b5c] hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Office Hours</h3>
                    <p className="text-xs text-slate-500">Australian Eastern Standard Time (AEST)</p>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm pt-1">
                  {SITE_CONFIG.openingHours.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-slate-700">
                      <span>{item.label}:</span>
                      <span className="font-semibold text-slate-900">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-extrabold text-[#0a1e3f] mb-2">Send Us an Enquiry</h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill out your details below and our advisors will respond within 24 business hours.
              </p>

              {success ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3 text-center my-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold">Message Received</h3>
                  <p className="text-xs sm:text-sm text-slate-600">{success}</p>
                  <button
                    onClick={() => setSuccess(null)}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errors.global && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs">{errors.global}</div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all ${
                          errors.fullName ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="0410 893 600"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all ${
                          errors.phone ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Subject of Enquiry
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="Course admission / Visa query / PR assessment"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="contact-message-body"
                      rows={4}
                      placeholder="Describe your current status, qualification, or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    id="contact-submit-button"
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 shadow-md transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="mt-16 rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
            <div className="p-4 bg-[#0a1e3f] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="font-semibold">{SITE_CONFIG.address.fullFormatted}</span>
              </div>
              <a
                href={SITE_CONFIG.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white font-bold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="h-96 w-full bg-slate-200 relative">
              <iframe
                title="Edutas Location - 339 Coronation Drive Milton Brisbane"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.866160167389!2d153.0034637764619!3d-27.473449976316023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a7703fc2909%3A0x6b48455799738c82!2s339%20Coronation%20Dr%2C%20Milton%20QLD%204064!5e0!3m2!1sen!2sau!4v1710000000000!5m2!1sen!2sau"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
