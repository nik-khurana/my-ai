
import React, { useState, useRef, useEffect } from 'react';
import { Message, BotState } from '../types';
import { Icons, CATEGORIES } from '../constants';
import * as gemini from '../services/geminiService';

interface ChatInterfaceProps {
  initialMessage?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ initialMessage }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [state, setState] = useState<BotState>(BotState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessage) {
      handleSend(initialMessage);
    }
  }, [initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, state]);

  const handleSend = async (content?: string) => {
    const text = content || inputValue;
    if (!text.trim() || state === BotState.THINKING) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setState(BotState.THINKING);

    const response = await gemini.sendMessage(text);

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setState(BotState.IDLE);
  };

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto w-full relative">
      {/* Scrollable Message Area */}
      <div className="flex-1 overflow-y-auto px-6 py-10 lg:px-20 space-y-10 scrollbar-hide pb-52">
        {messages.length === 0 && state === BotState.IDLE && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-10 pt-16 fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-24 h-24 rounded-[2.5rem] bg-white shadow-2xl flex items-center justify-center text-blue-600 border border-slate-100">
                 <Icons.Sparkles />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Hello. <br/> <span className="gemini-gradient">I'm Nikhil's Assistant.</span>
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto text-xl font-medium leading-relaxed">
                How can I help you learn more about his background in Technical Project Management or Android R&D?
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 w-full max-w-4xl">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => handleSend(cat.prompt)}
                  className="px-6 py-4 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-[15px] font-semibold text-slate-700 shadow-sm"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-6 ${msg.role === 'user' ? 'justify-end' : 'fade-in-up'}`}>
            {msg.role === 'assistant' && (
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 text-blue-600 shadow-sm mt-1">
                <Icons.Sparkles />
              </div>
            )}
            <div className={`max-w-[85%] px-6 py-4 rounded-3xl ${
              msg.role === 'user' 
                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200/50' 
                : 'bg-white border border-slate-100 text-slate-800 shadow-sm leading-relaxed text-lg prose prose-slate max-w-none'
            }`}>
              {msg.content.split('\n').map((line, i) => {
                const processedLine = line
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-bold">$1</strong>')
                  .replace(/^\s*-\s(.*)/, '• $1');

                return (
                  <p key={i} className={i !== 0 ? 'mt-3' : ''} dangerouslySetInnerHTML={{ __html: processedLine }} />
                );
              })}
            </div>
          </div>
        ))}

        {state === BotState.THINKING && (
          <div className="flex gap-6 fade-in-up">
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 text-blue-600 shadow-sm animate-pulse">
              <Icons.Sparkles />
            </div>
            <div className="flex items-center gap-2 py-5 px-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Sticky Floating Input Area */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 pt-2 bg-gradient-to-t from-[#f8fafd] via-[#f8fafd] to-transparent">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.length > 0 && (
             <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
               {CATEGORIES.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => handleSend(cat.prompt)}
                    className="whitespace-nowrap px-4 py-2 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all text-xs font-bold text-slate-600 shadow-sm"
                  >
                    {cat.label}
                  </button>
                ))}
             </div>
          )}
          
          <div className="relative group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Message Nikhil's AI..."
              className="w-full bg-white border border-slate-200 rounded-[2rem] py-5 pl-8 pr-20 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all text-lg text-slate-900 placeholder:text-slate-400 input-shadow"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || state === BotState.THINKING}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-30 disabled:bg-slate-300 rounded-2xl transition-all shadow-lg shadow-blue-500/30 text-white"
            >
              <Icons.Send />
            </button>
          </div>
          <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
            Professional Portfolio AI • Google Gemini 3
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
