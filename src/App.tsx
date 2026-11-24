import { useState, useEffect } from 'react';
import type { Language } from './types/typesx';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved !== null) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('portfolio_lang') as Language) || 'en';
  });

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    localStorage.setItem('portfolio_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const themeBg = darkMode ? 'bg-[#070913] text-slate-100' : 'bg-[#FAF8F5] text-slate-900';

  return (
    <div
      className={`min-h-screen transition-colors duration-500 selection:bg-amber-500 selection:text-slate-950 ${themeBg}`}
      style={{
        fontFamily:
          lang === 'kh'
            ? "'Kantumruy Pro', 'Plus Jakarta Sans', sans-serif"
            : "'Plus Jakarta Sans', 'Kantumruy Pro', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Kantumruy+Pro:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: darkMode
              ? 'linear-gradient(to right, rgba(245, 158, 11, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.04) 1px, transparent 1px)'
              : 'linear-gradient(to right, rgba(180, 83, 9, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className={`absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl ${darkMode ? 'bg-amber-500/15' : 'bg-amber-400/20'}`} />
        <div className={`absolute top-1/3 -right-32 w-[460px] h-[460px] rounded-full blur-3xl ${darkMode ? 'bg-cyan-500/12' : 'bg-cyan-400/15'}`} />
      </div>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="relative z-10">
        <Hero darkMode={darkMode} lang={lang} scrollToSection={scrollToSection} />
        <About darkMode={darkMode} lang={lang} />
        <Skills darkMode={darkMode} lang={lang} />
        <Projects darkMode={darkMode} lang={lang} />
        <Experience darkMode={darkMode} lang={lang} />
        <Contact darkMode={darkMode} lang={lang} />
      </main>

      <Footer darkMode={darkMode} lang={lang} scrollToSection={scrollToSection} />
    </div>
  );
}