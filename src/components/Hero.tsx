import React, { useState, useEffect } from 'react';
import { Terminal, ArrowUpRight, Mail, Code2, Smartphone, Sparkles } from 'lucide-react';
import type { Language } from '../types/typesx';
import { CONTENT } from '../data/translations';

import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import facebookIcon from '../assets/facebook.png';
import telegramIcon from '../assets/telegram.png';
// import profileImage from '../assets/profile.jpg';

//Social media links
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/honglydev', icon: githubIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/honglysok', icon: linkedinIcon },
  { name: 'Facebook', href: 'https://facebook.com/lygenz.kh', icon: facebookIcon },
  { name: 'Telegram', href: 'https://t.me/unknown_1101', icon: telegramIcon },
];


interface HeroProps {
  darkMode: boolean;
  lang: Language;
  scrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, lang, scrollToSection }) => {
  const t = CONTENT[lang].hero;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = t.roles;
    const currentFullRole = roles[roleIndex % roles.length];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedRole.length < currentFullRole.length) {
        setDisplayedRole(currentFullRole.slice(0, displayedRole.length + 1));
      } else if (!isDeleting && displayedRole.length === currentFullRole.length) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && displayedRole.length > 0) {
        setDisplayedRole(currentFullRole.slice(0, displayedRole.length - 1));
      } else if (isDeleting && displayedRole.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex, t.roles]);

  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center py-12 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-amber-500">{t.badge}</span>
            </div>

            <div className="space-y-2">
              <p className={`text-base sm:text-lg font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {t.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-400 bg-clip-text text-transparent">
                  {t.name}
                </span>
                <span className={`block sm:inline sm:ml-4 text-xl sm:text-2xl font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  ({t.khmerName})
                </span>
              </h1>
            </div>

            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border font-mono text-base sm:text-xl font-semibold ${darkMode ? 'bg-slate-900/80 border-cyan-500/30 text-cyan-400' : 'bg-white/90 border-amber-500/40 text-amber-700 shadow-sm'
                }`}>
                <Terminal className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{displayedRole}</span>
                <span className="w-0.5 h-6 bg-amber-500 animate-pulse" />
              </div>
            </div>

            <p className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.intro}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5"
              >
                <span>{t.ctaProjects}</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold border transition-all ${darkMode ? 'bg-slate-900/70 border-slate-700 text-slate-100' : 'bg-white border-stone-300 text-slate-900 shadow-sm'
                  }`}
              >
                <Mail className="w-5 h-5 text-amber-500" />
                <span>{t.ctaContact}</span>
              </button>
            </div>
            {/* Social media icons section is commented out for now */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`p-3 rounded-xl border transition-all hover:-translate-y-1 ${darkMode
                    ? 'bg-white border-slate-800 text-slate-300 hover:text-amber-400'
                    : 'bg-white border-stone-200 text-slate-700 hover:text-amber-600 shadow-sm'
                    }`}>
                  <img
                    src={social.icon}
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/35 via-cyan-500/25 to-purple-500/30 blur-2xl" />
              <div className={`relative w-60 h-60 sm:w-76 sm:h-76 rounded-3xl p-2 border-2 backdrop-blur-xl shadow-2xl flex items-center justify-center ${darkMode ? 'bg-slate-900/80 border-amber-500/40 text-amber-400' : 'bg-white/90 border-amber-500/50 text-amber-600'
                }`}>
                <div className="text-center space-y-2">
                  <img src={githubIcon} alt="Profile" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto" />
                  <span className="font-mono text-sm tracking-widest uppercase font-bold">Hongly.dev</span>
                </div>
              </div>
              <div className={`absolute -top-2 -left-2 sm:top-2 sm:-left-6 px-3.5 py-2 rounded-2xl border backdrop-blur-xl shadow-xl flex items-center gap-2 ${darkMode ? 'bg-slate-900/90 border-cyan-500/40 text-cyan-300' : 'bg-white/95 border-cyan-500/40 text-cyan-800'
                }`}>
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold">React.js</span>
              </div>
              <div className={`absolute -bottom-2 -right-2 sm:bottom-4 sm:-right-6 px-3.5 py-2 rounded-2xl border backdrop-blur-xl shadow-xl flex items-center gap-2 ${darkMode ? 'bg-slate-900/90 border-emerald-500/40 text-emerald-300' : 'bg-white/95 border-emerald-500/40 text-emerald-800'
                }`}>
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold">Kotlin & Android</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};