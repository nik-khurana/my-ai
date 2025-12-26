
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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, state]);

  const handleSend = async (content?: string) => {
    const text = content || inputValue;
    if (!text.trim() || state === BotState.THINKING) return;

    const userMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      role: 'user',
      content: text.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setState(BotState.THINKING);

    try {
      const response = await gemini.sendMessage(text);
      const botMsg: Message = {
        id: Math.random().toString(36).substr(2, 9),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setState(BotState.IDLE);
    }
  };

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden bg-[#f8fafd]">
      {/* Main Chat Content */}
      <div className="flex-1 overflow-y-auto pt-6 pb-40 px-4 md:px-0">
        <div className="max-w-3xl mx-auto w-full space-y-8">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center py-16 md:py-24 fade-in-up">
              <div className="w-16 h-16 rounded-3xl bg-white shadow-lg flex items-center justify-center text-blue-600 border border-slate-100 mb-8">
                <Icons.Sparkles />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Hello. <br/> <span className="gemini-gradient">I'm Nikhil's AI.</span>
              </h2>
              <p className="text-slate-500 max-w-sm mx-auto text-base md:text-lg mb-10 px-4">
                I can summarize Nikhil's career highlights, technical expertise, and major projects at Samsung.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl px-4">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => handleSend(cat.prompt)}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm font-semibold text-slate-700 shadow-sm text-left"
                  >
                    <span>{cat.label}</span>
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} fade-in-up`}>
              <div className={`flex gap-3 md:gap-4 max-w-[92%] md:max-w-[85%]`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-blue-600 shadow-sm mt-1">
                    <Icons.Sparkles />
                  </div>
                )}
                <div className={`px-4 py-3 md:px-6 md:py-4 rounded-2xl md:rounded-3xl ${
                  msg.role === 'user' 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white border border-slate-200 text-slate-800 shadow-sm'
                }`}>
                  <div className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                    {msg.content.split('\n').map((line, i) => {
                      // Basic formatting for bold and bullets
                      let formatted = line
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
                        .replace(/^\s*-\s(.*)/, '• $1');
                      
                      return (
                        <p key={i} className={i > 0 ? 'mt-2' : ''} dangerouslySetInnerHTML={{ __html: formatted }} />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {state === BotState.THINKING && (
            <div className="flex gap-3 md:gap-4 fade-in-up">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-blue-600 shadow-sm mt-1 animate-pulse">
                <Icons.Sparkles />
              </div>
              <div className="flex items-center gap-1.5 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} className="h-4" />
        </div>
      </div>

      {/* Input Bar Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-10 bg-gradient-to-t from-[#f8fafd] via-[#f8fafd] to-transparent">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Nikhil's assistant..."
              className="w-full bg-white border border-slate-200 rounded-2xl md:rounded-[2rem] py-4 md:py-5 pl-5 md:pl-8 pr-14 md:pr-20 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400/50 transition-all text-sm md:text-base text-slate-900 placeholder:text-slate-400 input-shadow"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || state === BotState.THINKING}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2.5 md:p-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-20 rounded-xl md:rounded-2xl transition-all shadow-lg shadow-blue-500/20 text-white"
            >
              <Icons.Send />
            </button>
          </div>
          <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] opacity-60">
            Powered by Gemini 3 Flash
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
