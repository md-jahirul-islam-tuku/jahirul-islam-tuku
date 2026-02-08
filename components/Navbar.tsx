
import React, { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme') as Theme) || 'dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'system');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-darkPrimary/80 backdrop-blur-md shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-white tracking-tighter">
          Tuku<span className="text-slate-900 dark:text-darkHighlight">.dev</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 dark:text-white hover:text-indigo-600 dark:hover:text-darkLinkActive transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-slate-200 dark:bg-white/20"></div>

          <div className="flex bg-slate-100 dark:bg-white/10 p-1 rounded-full">
            <button 
              onClick={() => setTheme('light')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === 'light' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}
              title="Light Mode"
            >
              <i className="fas fa-sun text-xs"></i>
            </button>
            <button 
              onClick={() => setTheme('dark')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === 'dark' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 dark:text-slate-300'}`}
              title="Dark Mode"
            >
              <i className="fas fa-moon text-xs"></i>
            </button>
            <button 
              onClick={() => setTheme('system')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === 'system' ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm' : 'text-slate-400'}`}
              title="System Default"
            >
              <i className="fas fa-desktop text-xs"></i>
            </button>
          </div>
        </div>

        <a 
          href="#contact" 
          className="bg-indigo-600 dark:bg-darkLinkActive text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-md active:scale-95"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
