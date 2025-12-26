
import React from 'react';
import { Icons, SUGGESTED_QUESTIONS } from '../constants';

interface SidebarProps {
  onSuggest: (question: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSuggest }) => {
  return (
    <div className="hidden lg:flex flex-col w-80 h-full bg-white sidebar-border p-8 gap-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Nikhil <span className="gemini-gradient">Khurana</span>
        </h1>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
          Technical Project Manager
        </p>
      </div>

      <div className="flex-1 space-y-8">
        <div>
          <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Quick Insights</h2>
          <nav className="flex flex-col gap-2">
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => onSuggest(q)}
                className="text-left text-[13px] text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-4 py-3 rounded-2xl transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-blue-500 transition-colors" />
                {q}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-100 space-y-6">
        <div>
           <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Official Links</h2>
           <div className="grid grid-cols-2 gap-3">
              <a 
                href="https://www.linkedin.com/in/khurananikhil21" 
                target="_blank" 
                className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-slate-600 hover:text-blue-600"
              >
                <Icons.Linkedin />
                <span className="text-[10px] font-semibold uppercase">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/nik-khurana" 
                target="_blank" 
                className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all text-slate-600 hover:text-black"
              >
                <Icons.Github />
                <span className="text-[10px] font-semibold uppercase">GitHub</span>
              </a>
           </div>
        </div>
        
        <div className="bg-blue-50/50 p-5 rounded-3xl border border-blue-100/50">
          <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
            Represented by a Gemini-powered neural assistant trained on Nikhil's professional journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
