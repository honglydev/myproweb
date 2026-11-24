import React from 'react';
import { Send } from 'lucide-react';
import type { Language } from '../types/typesx';
import { CONTENT } from '../data/translations';


import githubIcon from '../assets/github.png';
import  messengerIcon from "../assets/facebook.png";
import telegramIcon from "../assets/telegram.png";
import linkedinIcon from "../assets/linkedin.png";

interface FooterProps {
  darkMode: boolean;
  lang: Language;
  scrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, lang, scrollToSection }) => {
  const t = CONTENT[lang].footer;
  const navT = CONTENT[lang].nav;

  const navItems = [
    { id: 'home', label: navT.home },
    { id: 'about', label: navT.about },
    { id: 'skills', label: navT.skills },
    { id: 'projects', label: navT.projects },
    { id: 'experience', label: navT.experience },
    { id: 'contact', label: navT.contact },
  ];

  return (
    <footer className={`relative z-10 border-t pt-10 pb-12 ${
      darkMode ? 'bg-[#05070F]/90 border-amber-500/20 text-slate-300' : 'bg-stone-100/90 border-amber-600/20 text-slate-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-bold text-lg">
              Hongly<span className="text-amber-500">.dev</span> <span className="text-sm font-normal opacity-75">• ហុងលី</span>
            </div>
            <p className="text-sm mt-1 opacity-80">{t.tagline}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="opacity-80 hover:opacity-100 hover:text-amber-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon : <img src={githubIcon} className="w-6 h-4 aspect-square object-contain" />, href: 'https://github.com', label: 'GitHub' },
              { icon: <img src= {messengerIcon} className="w-6 h-4 aspect-square object-contain" />, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <img src={telegramIcon} className="w-6 h-4 aspect-square object-contain" />, href: 'https://facebook.com', label: 'Facebook' },
              { icon: <img src={linkedinIcon} className="w-6 h-4 aspect-square object-contain" />, href: 'https://t.me', label: 'Telegram' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`p-2.5 rounded-xl border transition-colors ${
                  darkMode ? 'bg-white border-slate-300 hover:text-amber-400 hover:border-amber-500/40' : 'border-stone-300 hover:text-amber-600'
                }`}
                
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={`mt-8 pt-6 border-t text-center text-xs opacity-75 ${
          darkMode ? 'border-slate-800/80' : 'border-stone-200'
        }`}>
          © {new Date().getFullYear()} Hongly. {t.rights}
        </div>
      </div>
    </footer>
  );
};