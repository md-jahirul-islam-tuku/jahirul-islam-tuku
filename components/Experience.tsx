
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-darkPrimary/95 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 sticky top-32">
              Career & <br />Learning Path
            </h2>
            <p className="text-slate-600 dark:text-white/70 mt-6">
              Transitioning from a fast-paced logistics role to a software engineering career through disciplined self-study.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative pl-10 border-l-2 border-indigo-200 dark:border-white/20 pb-2 last:pb-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-white border-4 border-white dark:border-darkPrimary shadow-sm"></div>
                <div className="mb-1">
                  <span className="text-indigo-600 dark:text-darkHighlight text-sm font-bold uppercase tracking-widest">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{exp.role}</h3>
                  <p className="text-slate-500 dark:text-white/60 font-medium">{exp.company}</p>
                </div>
                <ul className="mt-4 space-y-3">
                  {exp.description.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start text-slate-600 dark:text-white/80 leading-relaxed">
                      <span className="mr-3 text-indigo-500 dark:text-darkHighlight font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
