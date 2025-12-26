
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  const [initialQuestion, setInitialQuestion] = useState<string | undefined>(undefined);

  const handleSuggest = (question: string) => {
    setInitialQuestion(question);
    // Short delay to allow the effect in ChatInterface to trigger
    setTimeout(() => setInitialQuestion(undefined), 10);
  };

  return (
    <div className="flex h-screen w-full bg-[#f8fafd] overflow-hidden text-slate-900 selection:bg-blue-100">
      <Sidebar onSuggest={handleSuggest} />
      
      <main className="flex-1 flex flex-col min-h-0 relative bg-[#f8fafd]">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-100 z-10 shadow-sm flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-xs font-bold text-white uppercase">NK</span>
            </div>
            <h1 className="text-base font-bold tracking-tight text-slate-900">Nikhil AI</h1>
          </div>
          <a 
            href="https://www.linkedin.com/in/khurananikhil21" 
            target="_blank" 
            className="text-[10px] font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 transition-colors uppercase tracking-wider"
          >
            Connect
          </a>
        </header>

        <ChatInterface initialMessage={initialQuestion} />
      </main>
    </div>
  );
};

export default App;
