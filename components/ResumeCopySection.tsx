
import React, { useState } from 'react';
import { AI_TEXT_CONTENT } from '../constants';

const ResumeCopySection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-20 -mr-20 -mt-20"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Professional Summaries</h2>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Ready-to-use summaries for LinkedIn and Professional Resumes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center">
                <i className="fas fa-file-alt mr-3 text-indigo-400"></i> Resume Summary
              </h3>
              <button 
                onClick={() => copyToClipboard(AI_TEXT_CONTENT.resumeSummary, 'resume')}
                className="bg-white text-indigo-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-indigo-50 transition-colors"
              >
                {copiedType === 'resume' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p className="text-indigo-50 text-sm leading-relaxed whitespace-pre-line italic">
              "{AI_TEXT_CONTENT.resumeSummary}"
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center">
                <i className="fab fa-linkedin mr-3 text-indigo-400"></i> LinkedIn About
              </h3>
              <button 
                onClick={() => copyToClipboard(AI_TEXT_CONTENT.linkedInAbout, 'linkedin')}
                className="bg-white text-indigo-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-indigo-50 transition-colors"
              >
                {copiedType === 'linkedin' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="text-indigo-50 text-sm leading-relaxed whitespace-pre-wrap italic max-h-48 overflow-y-auto pr-4 scrollbar-hide">
              "{AI_TEXT_CONTENT.linkedInAbout}"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeCopySection;
