import React from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import type { Language, ExperienceItem } from '../types/typesx';
import { CONTENT } from '../data/translations';

interface ExperienceProps {
  darkMode: boolean;
  lang: Language;
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: '2024 — Present',
    role: 'Frontend & Android Developer',
    organization: 'Freelance & Open Source • Cambodia',
    type: 'work',
    description:
      'Developing responsive bilingual web applications and native Android apps with Kotlin and React for regional clients, focusing on clean UI/UX and performance.',
    tags: ['React.js', 'Kotlin', 'Tailwind CSS', 'Firebase'],
  },
  {
    period: '2023 — 2024',
    role: 'Full-Stack Web Development Student & Contributor',
    organization: 'Code Nation Community • Cambodia',
    type: 'education',
    description:
      'Engineered full-stack JavaScript applications, REST APIs, and mentored junior coding students while leading community developer discussions.',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'JavaScript'],
  },
  {
    period: '2021 — 2024',
    role: 'Grade 12 Secondary Education',
    organization: 'Kampong Thom Province, Cambodia',
    type: 'education',
    description:
      'Completed secondary education with rigorous coursework in mathematics and science, setting the foundation for software engineering.',
    tags: ['Mathematics', 'Sciences', 'Computer Basics'],
  },
];

export const Experience: React.FC<ExperienceProps> = ({ darkMode, lang }) => {
  const t = CONTENT[lang].experience;
  const cardStyle = darkMode
    ? 'bg-slate-900/55 border-slate-800/80 hover:border-amber-500/40 text-slate-100 shadow-xl'
    : 'bg-white/80 border-stone-200/90 hover:border-amber-500/50 text-slate-900 shadow-lg';

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{t.title}</h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{t.subtitle}</p>
        </div>

        <div className="relative pl-8 sm:pl-12 space-y-8 before:content-[''] before:absolute before:left-3.5 sm:before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-amber-400 before:via-cyan-400 before:to-emerald-500">
          {EXPERIENCE_DATA.map((item, idx) => (
            <div key={idx} className="relative">
              <div className={`absolute -left-[25px] sm:-left-[35px] top-6 w-4 h-4 rotate-45 rounded-sm border-2 ${
                item.type === 'work' ? 'bg-amber-500 border-amber-200' : 'bg-cyan-500 border-cyan-200'
              }`} />
              <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${cardStyle}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.type === 'work' ? <Briefcase className="w-3.5 h-3.5 text-amber-500" /> : <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />}
                    {item.organization}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{item.role}</h3>
                <p className={`text-sm sm:text-base leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-stone-100 border-stone-200 text-slate-700'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};