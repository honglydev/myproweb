import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Light or Dark Mode"
      className={`p-2.5 rounded-xl border transition-all duration-300 ${
        darkMode
          ? 'bg-slate-900/90 border-slate-800 text-amber-400 hover:border-amber-500/50'
          : 'bg-stone-100 border-stone-300 text-slate-800 hover:border-amber-500'
      }`}
    >
      {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};