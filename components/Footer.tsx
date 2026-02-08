
import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-darkPrimary border-t border-slate-100 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 dark:text-white/60 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} {PERSONAL_DETAILS.name}. Built with Passion & Code.
        </p>
        <div className="flex space-x-8">
          <a href="#" className="text-slate-400 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-slate-400 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-slate-400 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white transition-colors">Work</a>
          <a href="#contact" className="text-slate-400 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
