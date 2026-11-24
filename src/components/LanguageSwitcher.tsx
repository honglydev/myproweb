import React from 'react';
import type { Language } from '../types/typesx';

interface LanguageSwitcherProps {
  lang: Language;
  setLang: (lang: Language) => void;
  darkMode: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang, setLang, darkMode }) => {
  return (
    <div
      className={`flex items-center p-1 rounded-xl border text-xs font-semibold ${
        darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-stone-100 border-stone-300'
      }`}
    >
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-lg transition-all ${
          lang === 'en'
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm'
            : darkMode ? 'text-slate-400 hover:text-amber-400' : 'text-slate-600 hover:text-amber-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('kh')}
        className={`px-2.5 py-1 rounded-lg transition-all ${
          lang === 'kh'
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm'
            : darkMode ? 'text-slate-400 hover:text-amber-400' : 'text-slate-600 hover:text-amber-600'
        }`}
      >
        ខ្មែរ
      </button>
    </div>
  );
};