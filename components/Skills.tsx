
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#151925] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">My Technical Arsenal</h2>
        <p className="text-slate-600 dark:text-white/70 max-w-2xl mx-auto">
          I specialize in building full-stack applications with a focus on React and the Node.js ecosystem.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {SKILLS.map((skill, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-white/5 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 hover:shadow-md hover:-translate-y-1 transition-all group text-center"
          >
            <div className="w-12 h-12 bg-indigo-50 dark:bg-white/10 text-indigo-600 dark:text-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 dark:group-hover:bg-darkLinkActive group-hover:text-white transition-colors">
              <i className={`${skill.icon} text-2xl`}></i>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">{skill.name}</h4>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-white/50">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
