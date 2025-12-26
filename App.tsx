
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  const [initialQuestion, setInitialQuestion] = useState<string | undefined>(undefined);

  const handleSuggest = (question: string) => {
    setInitialQuestion(question);
    // Short delay to reset the trigger
    setTimeout(() => setInitialQuestion(undefined), 10);
  };

  return (
    <div className="flex h-full w-full bg-[#f8fafd] text-slate-900 overflow-hidden">
      {/* Fixed Sidebar on Desktop */}
      <Sidebar onSuggest={handleSuggest} />
      
      <main className="flex-1 flex flex-col h-full min-w-0 relative">
        {/* Mobile-Only Sticky Header */}
        <header className="lg:hidden flex items-center justify-between px-5 py-4 bg-white border-b border-slate-100 z-30 flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center">
              <span className="text-[10px] font-black text-white">NK</span>
            </div>
            <h1 className="text-sm font-bold tracking-tight text-slate-800">Nikhil AI Assistant</h1>
          </div>
          <a 
            href="https://www.linkedin.com/in/khurananikhil21" 
            target="_blank" 
            rel="noreferrer"
            className="text-[10px] font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest"
          >
            LinkedIn
          </a>
        </header>

        {/* Chat window fills remaining space */}
        <div className="flex-1 h-full min-h-0 relative">
          <ChatInterface initialMessage={initialQuestion} />
        </div>
      </main>
    </div>
  );
};

export default App;
