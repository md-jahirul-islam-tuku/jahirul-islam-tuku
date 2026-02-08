
import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-darkPrimary dark:to-[#11141e] overflow-hidden relative transition-colors duration-300">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-indigo-100/50 dark:bg-indigo-500/10 rounded-full blur-3xl opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-white/10 text-indigo-700 dark:text-white text-xs font-bold mb-6 tracking-wider uppercase">
            <span>👋 Available for Full-Time Opportunities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 dark:text-indigo-600 to-violet-600 dark:from-white dark:to-indigo-400">Modern Web</span> with Passion and Precision.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white/80 mb-10 leading-relaxed max-w-2xl">
            I'm <span className="font-bold text-slate-900 dark:text-darkHighlight">{PERSONAL_DETAILS.name}</span>, a Full-Stack Developer blending technical expertise with a relentless drive for excellence. Based in {PERSONAL_DETAILS.location}.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#projects" 
              className="bg-slate-900 text-white dark:bg-white dark:text-darkPrimary px-8 py-4 rounded-xl font-bold text-center hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center space-x-2 group"
            >
              <span>View My Work</span>
              <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a 
              href="#contact" 
              className="bg-white dark:bg-transparent border-2 border-slate-200 dark:border-white/30 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold text-center hover:border-indigo-600 dark:hover:border-white transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
