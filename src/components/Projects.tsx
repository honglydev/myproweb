import React, { useState } from 'react';
import { Smartphone, Code2, FolderGit2, Play, ExternalLink, X, CheckCircle2, Send } from 'lucide-react';
import type { Language, Project, ProjectCategory } from '../types/typesx';
import { CONTENT } from '../data/translations';
import { PROJECTS_DATA } from '../data/projects';

interface ProjectsProps {
  darkMode: boolean;
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode, lang }) => {
  const t = CONTENT[lang].projects;
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filter);

  const cardStyle = darkMode
    ? 'bg-slate-900/55 border-slate-800/80 hover:border-amber-500/40 text-slate-100 shadow-xl'
    : 'bg-white/80 border-stone-200/90 hover:border-amber-500/50 text-slate-900 shadow-lg';

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{t.title}</h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{t.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { key: 'all', label: t.filters.all },
            { key: 'web', label: t.filters.web },
            { key: 'android', label: t.filters.android },
            { key: 'backend', label: t.filters.backend },
          ].map((btn) => {
            const active = filter === btn.key;
            return (
              <button
                key={btn.key}
                onClick={() => setFilter(btn.key as ProjectCategory)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                  active
                    ? 'bg-gradient-to-r from-amber-500 to-cyan-500 text-slate-950 border-transparent shadow-lg'
                    : `${cardStyle} ${darkMode ? 'text-slate-300' : 'text-slate-700'}`
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article key={project.id} className={`group flex flex-col justify-between rounded-3xl border overflow-hidden transition-all hover:-translate-y-1.5 ${cardStyle}`}>
              <div>
                <div className={`relative h-48 bg-gradient-to-br ${project.accentGradient} p-6 flex flex-col justify-between overflow-hidden`}>
                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/55 text-white backdrop-blur-md border border-white/20">
                      {project.category === 'android' ? <Smartphone className="w-3.5 h-3.5 text-emerald-300" /> : <Code2 className="w-3.5 h-3.5 text-cyan-300" />}
                      {project.typeLabel}
                    </span>
                    <span className="font-mono text-xs font-semibold text-white/90 bg-black/30 px-2.5 py-1 rounded-lg">
                      {project.year}
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-lg">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold leading-snug group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed line-clamp-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((item) => (
                      <span key={item} className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${darkMode ? 'bg-slate-950/70 border-slate-800 text-cyan-300' : 'bg-stone-100 border-stone-200 text-slate-700'}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`px-6 py-4 border-t flex items-center justify-between ${darkMode ? 'border-slate-800/80' : 'border-stone-200'}`}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{t.viewDetails}</span>
                </button>
                <div className="flex items-center gap-2">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg border ${darkMode ? 'border-slate-800 text-slate-400 hover:text-white' : 'border-stone-200 text-slate-600'}`}>
                    <Send className="w-4 h-4" />
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg border ${darkMode ? 'border-slate-800 text-slate-400 hover:text-amber-400' : 'border-stone-200 text-slate-600'}`}>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
          <div className={`relative w-full max-w-2xl rounded-3xl border overflow-hidden shadow-2xl ${darkMode ? 'bg-slate-900 border-amber-500/40 text-slate-100' : 'bg-white border-amber-500/40 text-slate-900'}`} onClick={(e) => e.stopPropagation()}>
            <div className={`p-6 sm:p-8 bg-gradient-to-r ${selectedProject.accentGradient} text-white`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-black/35 border border-white/20 mb-3">
                    {selectedProject.typeLabel} • {selectedProject.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold">{selectedProject.title}</h3>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-2 rounded-xl bg-black/35 hover:bg-black/55 text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              <p className={`leading-relaxed text-sm sm:text-base ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {selectedProject.fullDescription}
              </p>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500">
                  <ExternalLink className="w-4 h-4" />
                  <span>{t.liveDemo}</span>
                </a>
                <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border ${darkMode ? 'border-slate-700 text-slate-200' : 'border-stone-300 text-slate-800'}`}>
                  <Send className="w-4 h-4" />
                  <span>{t.sourceCode}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};