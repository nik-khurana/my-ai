
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  const [initialQuestion, setInitialQuestion] = useState<string | undefined>(undefined);

  const handleSuggest = (question: string) => {
    setInitialQuestion(question);
    setTimeout(() => setInitialQuestion(undefined), 100);
  };

  return (
    <div className="flex h-screen w-full bg-[#f8fafd] overflow-hidden text-slate-900 selection:bg-blue-100">
      <Sidebar onSuggest={handleSuggest} />
      
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-5 bg-white border-b border-slate-100 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-sm font-bold text-white">NK</span>
            </div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">Nikhil AI</h1>
          </div>
          <a 
            href="https://www.linkedin.com/in/khurananikhil21" 
            target="_blank" 
            className="text-[11px] font-bold text-blue-600 bg-blue-50 px-5 py-2.5 rounded-full border border-blue-100 transition-colors"
          >
            LinkedIn
          </a>
        </header>

        <ChatInterface initialMessage={initialQuestion} />
      </main>
    </div>
  );
};

export default App;
