import * as React from 'react';
import { Sparkles, GraduationCap, Zap } from 'lucide-react';
import type { Language } from '../types/typesx';
import { CONTENT } from '../data/translations';

interface AboutProps {
  darkMode: boolean;
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ darkMode, lang }) => {
  const t = CONTENT[lang].about;
  const cardStyle = darkMode
    ? 'bg-slate-900/55 border-slate-800/80 hover:border-amber-500/40 text-slate-100 shadow-xl'
    : 'bg-white/80 border-stone-200/90 hover:border-amber-500/50 text-slate-900 shadow-lg';

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30">
            {t.tag}
          </span>
          <p className={`text-2xl sm:text-3xl font-extrabold ${darkMode ? 'text-slate-100' : 'text-slate-600'}`}>{t.title}</p>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-3xl border text-center space-y-4 ${cardStyle}`}>
              <div className="w-24 h-24 mx-auto rounded-full bg-linear-to-tr from-amber-500 to-cyan-500 flex items-center justify-center text-slate-950 text-3xl font-extrabold font-mono shadow-lg">
                HL
              </div>
              <h3 className="text-xl font-bold">Hongly (ហុងលី)</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Kampong Thom / Phnom Penh, Cambodia
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {t.stats.map((stat, idx) => (
                <div key={idx} className={`p-4 rounded-2xl border text-center ${cardStyle}`}>
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}{stat.suffix}
                  </div>
                  <p className={`mt-1 text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className={`p-6 sm:p-7 rounded-2xl border ${cardStyle}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/15 text-amber-500 border border-amber-500/30 shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{t.bioTitle}</h3>
                  <p className={`leading-relaxed text-sm sm:text-base ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t.bio}
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 sm:p-7 rounded-2xl border ${cardStyle}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{t.eduTitle}</h3>
                  <p className={`leading-relaxed text-sm sm:text-base ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t.edu}
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 sm:p-7 rounded-2xl border ${cardStyle}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{t.goalsTitle}</h3>
                  <p className={`leading-relaxed text-sm sm:text-base ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t.goals}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};