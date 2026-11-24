import React, { useState } from 'react';
import { Layers, Code2, Smartphone, Database, Wrench } from 'lucide-react';
import type { Language, SkillCategory } from '../types/typesx';
import { CONTENT } from '../data/translations';
import { SKILLS_DATA } from '../data/skills';

interface SkillsProps {
  darkMode: boolean;
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode, lang }) => {
  const t = CONTENT[lang].skills;
  const [filter, setFilter] = useState<SkillCategory | 'all'>('all');

  const filteredSkills = filter === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === filter);

  const cardStyle = darkMode
    ? 'bg-slate-900/55 border-slate-800/80 hover:border-amber-500/40 text-slate-100 shadow-xl'
    : 'bg-white/80 border-stone-200/90 hover:border-amber-500/50 text-slate-900 shadow-lg';

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase px-3.5 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{t.title}</h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{t.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { key: 'all', label: t.tabs.all, icon: <Layers className="w-4 h-4" /> },
            { key: 'frontend', label: t.tabs.frontend, icon: <Code2 className="w-4 h-4" /> },
            { key: 'backend', label: t.tabs.backend, icon: <Database className="w-4 h-4" /> },
            { key: 'android', label: t.tabs.android, icon: <Smartphone className="w-4 h-4" /> },
            { key: 'database', label: t.tabs.database, icon: <Database className="w-4 h-4" /> },
            { key: 'tools', label: t.tabs.tools, icon: <Wrench className="w-4 h-4" /> },
          ].map((tab) => {
            const active = filter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as any)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                  active
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-400 shadow-lg'
                    : `${cardStyle} ${darkMode ? 'text-slate-300' : 'text-slate-700'}`
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className={`group p-5 rounded-2xl border transition-all hover:-translate-y-1 ${cardStyle}`}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-base sm:text-lg group-hover:text-amber-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {skill.tag}
                  </span>
                </div>
                <span className="font-mono text-sm font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                  {skill.level}%
                </span>
              </div>
              <div className={`w-full h-2.5 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-stone-200'}`}>
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};