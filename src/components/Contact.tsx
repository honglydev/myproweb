import React, { useState } from 'react';
import { MapPin, Mail, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { Language } from '../types/typesx';
import { CONTENT } from '../data/translations';

interface ContactProps {
  darkMode: boolean;
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ darkMode, lang }) => {
  const t = CONTENT[lang].contact;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const cardStyle = darkMode
    ? 'bg-slate-900/55 border-slate-800/80 text-slate-100 shadow-xl'
    : 'bg-white/80 border-stone-200/90 text-slate-900 shadow-lg';

  const inputBg = darkMode
    ? 'bg-slate-950/70 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-amber-400'
    : 'bg-stone-50 border-stone-300 text-slate-900 placeholder-slate-400 focus:border-amber-600';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, boolean> = {};
    if (!formData.name.trim()) errors.name = true;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = true;
    if (!formData.message.trim()) errors.message = true;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{t.title}</h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            {[
              { icon: <MapPin className="w-5 h-5 text-amber-500" />, label: t.info.locationLabel, value: t.info.locationValue },
              { icon: <Mail className="w-5 h-5 text-cyan-400" />, label: t.info.emailLabel, value: t.info.emailValue },
              { icon: <Send className="w-5 h-5 text-sky-400" />, label: t.info.telegramLabel, value: t.info.telegramValue },
              { icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, label: t.info.statusLabel, value: t.info.statusValue },
            ].map((info, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border flex items-center gap-4 ${cardStyle}`}>
                <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-stone-100 border-stone-200'}`}>
                  {info.icon}
                </div>
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {info.label}
                  </p>
                  <p className="text-base font-bold mt-0.5">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border ${cardStyle}`}>
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold">{t.form.successTitle}</h3>
                <p className={`max-w-md mx-auto text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t.form.successDesc}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl font-semibold text-sm bg-amber-500 text-slate-950 hover:bg-amber-400"
                >
                  {t.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2">{t.form.name} *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.form.namePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none ${inputBg} ${formErrors.name ? 'border-rose-500' : ''}`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">{t.form.email} *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.form.emailPlaceholder}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none ${inputBg} ${formErrors.email ? 'border-rose-500' : ''}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">{t.form.subject}</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.form.subjectPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none ${inputBg}`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">{t.form.message} *</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.form.messagePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none ${inputBg} ${formErrors.message ? 'border-rose-500' : ''}`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 shadow-lg shadow-amber-500/25 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.form.sending : t.form.submit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};