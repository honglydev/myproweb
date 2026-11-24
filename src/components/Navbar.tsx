import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Language } from '../types/typesx';
import { CONTENT } from '../data/translations';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  lang,
  setLang,
  activeSection,
  scrollToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = CONTENT[lang].nav;

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'skills', label: t.skills },
    { id: 'projects', label: t.projects },
    { id: 'experience', label: t.experience },
    { id: 'contact', label: t.contact },
  ];

  const navBg = darkMode
    ? 'bg-[#070913]/80 border-amber-500/15 shadow-lg shadow-black/30'
    : 'bg-[#FAF8F5]/85 border-amber-600/20 shadow-sm';

  const subText = darkMode ? 'text-slate-300' : 'text-slate-700';

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rotate-45 rounded-lg border-2 border-amber-500/80 group-hover:rotate-90 transition-transform duration-500 bg-gradient-to-br from-amber-500/20 to-cyan-500/20" />
              <span className="relative font-mono font-bold text-sm tracking-tighter text-amber-400">
                HL
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-base sm:text-lg tracking-tight leading-none">
                Hongly<span className="text-amber-500">.dev</span>
              </span>
              <span className={`text-[11px] font-mono tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {'<Web & Android />'}
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-amber-500 font-semibold' : `${subText} hover:text-amber-400`
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-cyan-400" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher lang={lang} setLang={setLang} darkMode={darkMode} />
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className={`lg:hidden p-2.5 rounded-xl border ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-slate-200'
                  : 'bg-stone-100 border-stone-300 text-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t px-4 pt-3 pb-6 space-y-1.5 backdrop-blur-2xl ${
            darkMode ? 'bg-[#070913]/95 border-slate-800' : 'bg-[#FAF8F5]/95 border-stone-200'
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection(item.id);
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-medium ${
                activeSection === item.id
                  ? 'bg-amber-500/15 text-amber-500 font-semibold'
                  : `${subText}`
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};