import React from "react";
import { EDUCATION } from "../constants";

const EducationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-darkPrimary transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-slate-600 dark:text-white/70 max-w-2xl mx-auto">
            Professional credentials and academic background that fuel my
            engineering journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="group relative bg-white dark:bg-white/10 rounded-[2.5rem] p-1 border-2 border-indigo-100 dark:border-white/20 shadow-2xl shadow-indigo-100/50 dark:shadow-none overflow-hidden">
              <div className="absolute top-0 right-0 p-8 z-10">
                <span className="bg-indigo-600 text-white dark:bg-white dark:text-darkPrimary px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg shadow-indigo-200">
                  Batch 07
                </span>
              </div>

              <div className="bg-gradient-to-br from-indigo-50/50 to-white dark:from-transparent dark:to-transparent p-10 rounded-[2.3rem]">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-white shadow-sm border border-indigo-50 dark:border-white/10">
                    <i className="fas fa-award text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                      Certificate of Achievement
                    </h3>
                    <p className="text-indigo-600 dark:text-darkHighlight font-bold tracking-wide uppercase text-xs">
                      Verified Credential
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-slate-500 dark:text-white/50 text-sm font-medium uppercase tracking-widest mb-1">
                      Awarded to
                    </p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">
                      Md Jahirul Islam Tuku
                    </p>
                  </div>

                  <div className="p-6 bg-white dark:bg-white/5 rounded-2xl border border-indigo-50 dark:border-white/10 shadow-sm">
                    <p className="text-slate-600 dark:text-white/80 leading-relaxed mb-4">
                      For the successful completion of the{" "}
                      <span className="font-bold text-slate-900 dark:text-white">
                        Complete Web Development Course
                      </span>
                      . Demonstrated expertise in JavaScript, HTML, CSS, ReactJS
                      and NextJS through rigorous project-based learning.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "HTML5", "CSS3", "ReactJS", "NextJS"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-black uppercase tracking-widest text-indigo-700 dark:text-white bg-indigo-50 dark:bg-white/20 px-3 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-end pt-4 border-t border-slate-100 dark:border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-[10px] text-white dark:text-darkPrimary">
                        PH
                      </div>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        Programming Hero
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-400 dark:text-white/50 font-bold uppercase tracking-widest">
                        Issuing Authority
                      </p>
                      <p className="text-sm font-bold text-slate-700 dark:text-white/80">
                        Jhankar Mahbub, CEO
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                className={`p-8 rounded-[2rem] border transition-all hover:shadow-lg ${index === 0 ? "bg-indigo-50 dark:bg-white/10 border-indigo-100 dark:border-white/20" : "bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10"}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${index === 0 ? "bg-indigo-600 dark:bg-white text-white dark:text-darkPrimary" : "bg-white dark:bg-white/10 text-slate-400 dark:text-white shadow-sm"}`}
                  >
                    <i
                      className={`fas ${index === 0 ? "fa-certificate" : "fa-school"} text-sm`}
                    ></i>
                  </div>
                  <span
                    className={`text-[11px] font-black tracking-widest uppercase ${index === 0 ? "text-indigo-600 dark:text-darkHighlight" : "text-slate-400 dark:text-white/40"}`}
                  >
                    {edu.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p
                  className={`text-sm font-bold mb-4 ${index === 0 ? "text-indigo-600 dark:text-darkHighlight" : "text-slate-500 dark:text-white/60"}`}
                >
                  {edu.institution}
                </p>
                <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}

            <a
              href="https://drive.google.com/file/d/1l991c7Qxf4ZYaORmmTXh3uWQ08gKPP2t/view"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-white/20 text-slate-400 dark:text-white/50 font-bold hover:border-indigo-400 dark:hover:border-white hover:text-indigo-600 dark:hover:text-white transition-all group"
            >
              <i className="fas fa-file-pdf group-hover:scale-110 transition-transform"></i>
              <span>Download Full CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
