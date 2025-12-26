
import React from 'react';
import { Icons, SUGGESTED_QUESTIONS } from '../constants';

interface SidebarProps {
  onSuggest: (question: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSuggest }) => {
  return (
    <aside className="hidden lg:flex flex-col w-[320px] h-full bg-white border-r border-slate-100 p-8 z-20 overflow-y-auto no-scrollbar">
      <div className="mb-12">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">
          Nikhil <span className="gemini-gradient">Khurana</span>
        </h1>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Android SME • Technical PM
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-10">
        <div>
          <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Quick Insights</h2>
          <nav className="space-y-1.5">
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => onSuggest(q)}
                className="w-full text-left text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-xl transition-all flex items-center gap-3 border border-transparent hover:border-blue-100"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-100 flex-shrink-0" />
                {q}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
          <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
            Ask about device launches at Samsung, automation tools, or technical leadership.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <div className="grid grid-cols-2 gap-3">
          <a 
            href="https://www.linkedin.com/in/khurananikhil21" 
            target="_blank" 
            rel="noreferrer"
            className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-slate-500 hover:text-blue-600"
          >
            <Icons.Linkedin />
            <span className="text-[9px] font-black uppercase tracking-tighter">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/nik-khurana" 
            target="_blank" 
            rel="noreferrer"
            className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-slate-100 hover:border-slate-400 hover:bg-slate-50 transition-all text-slate-500 hover:text-slate-900"
          >
            <Icons.Github />
            <span className="text-[9px] font-black uppercase tracking-tighter">GitHub</span>
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            © 2024 • AI Portfolio
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
