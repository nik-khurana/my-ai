
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  const [initialQuestion, setInitialQuestion] = useState<string | undefined>(undefined);

  const handleSuggest = (question: string) => {
    setInitialQuestion(question);
    setTimeout(() => setInitialQuestion(undefined), 10);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f8fafd] text-slate-900">
      <Sidebar onSuggest={handleSuggest} />
      
      <main className="flex-1 flex flex-col min-w-0 h-full relative">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between px-5 py-4 bg-white border-b border-slate-100 flex-shrink-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-[10px] font-black text-white">NK</span>
            </div>
            <h1 className="text-sm font-bold tracking-tight text-slate-800">Nikhil AI</h1>
          </div>
          <a 
            href="https://www.linkedin.com/in/khurananikhil21" 
            target="_blank" 
            rel="noreferrer"
            className="text-[11px] font-bold text-blue-600 uppercase tracking-widest"
          >
            LinkedIn
          </a>
        </header>

        <div className="flex-1 min-h-0 relative">
          <ChatInterface initialMessage={initialQuestion} />
        </div>
      </main>
    </div>
  );
};

export default App;
