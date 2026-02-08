
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-darkPrimary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Selected Projects</h2>
        <p className="text-slate-600 dark:text-white/70 max-w-2xl mx-auto">
          A collection of digital products I've designed and developed during my 2 years of learning.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="group bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden hover:border-indigo-200 dark:hover:border-white/30 transition-all flex flex-col shadow-sm"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 dark:bg-darkPrimary/90 backdrop-blur-sm text-slate-900 dark:text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-darkHighlight transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-white/70 mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white/80 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.githubLink} 
                  className="flex-1 text-center text-white bg-slate-900 dark:bg-white dark:text-darkPrimary py-3 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors text-sm"
                >
                  <i className="fab fa-github mr-2"></i> Code
                </a>
                <a 
                  href={project.liveLink} 
                  className="flex-1 text-center bg-white dark:bg-transparent border border-slate-200 dark:border-white/30 text-slate-900 dark:text-white py-3 rounded-xl font-bold hover:border-indigo-600 dark:hover:border-white transition-all text-sm"
                >
                  <i className="fas fa-external-link-alt mr-2"></i> Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
