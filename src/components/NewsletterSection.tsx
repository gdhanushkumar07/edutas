import React, { useState } from 'react';
import { Mail, CheckCircle2, Loader2, ArrowRight, Bell } from 'lucide-react';
import { subscribeNewsletter } from '../services/api';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });
    setLoading(true);

    try {
      const res = await subscribeNewsletter(email);
      if (res.success) {
        setStatus({ type: 'success', message: res.message });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: res.message });
      }
    } catch {
      setStatus({ type: 'error', message: 'Unable to subscribe. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter-section" className="py-14 bg-gradient-to-r from-[#0f2b5c] to-[#0a1e3f] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-red-400">
              <Bell className="w-3.5 h-3.5" />
              <span>JOIN AUSTRALIA UPDATES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Don&apos;t Miss Out – Sign Up for Updates
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
              Get official notifications on upcoming university intake deadlines, Australian student visa policy changes, and skilled migration news.
            </p>
          </div>

          {/* Form */}
          <div className="w-full md:w-auto shrink-0 max-w-md">
            {status.type === 'success' ? (
              <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-white flex items-center gap-3 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{status.message}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="newsletter-email-input"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-red-500 transition-all"
                    />
                  </div>

                  <button
                    id="newsletter-subscribe-btn"
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 shadow-md transition-colors flex items-center justify-center gap-2 shrink-0 disabled:opacity-70"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {status.type === 'error' && (
                  <p className="text-xs text-red-300 pl-1">{status.message}</p>
                )}

                <p className="text-[11px] text-slate-400 text-center md:text-left">
                  We respect your privacy. Unsubscribe anytime with one click.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
