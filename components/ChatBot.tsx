import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Phone, User } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { Mascot } from './Mascot';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Namaste! 🙏 I am the NepAI Assistant. How can I help you grow your business in Nepal today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Prepare history for context
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await generateChatResponse(userMsg, history);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestions = [
    "What services do you offer?",
    "How much does it cost?",
    "Book a strategy call",
    "Contact support"
  ];

  const handleSuggestionClick = (text: string) => {
    setInput(text);
  };

  // Helper to render bold text from markdown style **text**
  const renderMessageText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-white">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {/* Animated Floating Button Wrapper */}
      <div className="fixed bottom-6 right-6 z-[60] group font-sans">
         {/* Animated Ping Rings (Only when closed) */}
         {!isOpen && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-full h-full bg-brandSaffron rounded-full opacity-20 animate-ping"></div>
               <div className="absolute w-full h-full bg-brandSaffron rounded-full opacity-10 animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>
            </div>
         )}

         {/* Main Button */}
         <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative p-4 rounded-full shadow-[0_0_40px_-5px_rgba(249,115,22,0.5)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center backdrop-blur-sm border border-white/10 ${
               isOpen 
               ? 'bg-slate-800 text-slate-400 rotate-90 hover:rotate-180 hover:bg-slate-700' 
               : 'bg-gradient-to-br from-brandSaffron to-brandSaffronDark text-white hover:scale-110 hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(249,115,22,0.8)]'
            }`}
         >
            {isOpen ? (
               <X className="w-7 h-7" />
            ) : (
               <div className="relative">
                  <MessageSquare className="w-7 h-7 fill-current" />
                  {/* Active Indicator Dot */}
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-brandSaffronDark"></span>
                  </span>
               </div>
            )}
         </button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[550px] max-h-[70vh] bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden z-50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-white/5 p-5 border-b border-white/5 flex items-center gap-4 backdrop-blur-sm">
          <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-white/5 flex items-center justify-center shadow-lg relative group-hover:scale-105 transition-transform overflow-hidden">
             {/* Gradient bg behind mascot */}
            <div className="absolute inset-0 bg-gradient-to-br from-brandSaffron/20 to-blue-500/20"></div>
            <Mascot className="w-10 h-10 relative z-10" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 z-20"></div>
          </div>
          <div>
            <h3 className="font-bold text-white text-base">NepAI Assistant</h3>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-brandSaffron font-medium uppercase tracking-wider">Online Now</span>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-end gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mb-1 overflow-hidden ${
                  msg.role === 'user' ? 'bg-slate-700' : 'bg-slate-800'
                }`}
              >
                {msg.role === 'user' ? (
                  <User className="w-4 h-4 text-slate-300" />
                ) : (
                  <Mascot className="w-6 h-6" />
                )}
              </div>
              <div
                className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-brandSaffron text-white rounded-tr-none'
                    : 'bg-slate-800/80 text-slate-200 border border-white/5 rounded-tl-none'
                }`}
              >
                {renderMessageText(msg.text)}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-3">
               <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mb-1 overflow-hidden">
                  <Mascot className="w-6 h-6 animate-pulse" />
               </div>
               <div className="bg-slate-800/50 p-4 rounded-2xl rounded-tl-none border border-white/5">
                 <div className="flex gap-1.5">
                   <span className="w-2 h-2 bg-brandSaffron/60 rounded-full animate-bounce"></span>
                   <span className="w-2 h-2 bg-brandSaffron/60 rounded-full animate-bounce delay-100"></span>
                   <span className="w-2 h-2 bg-brandSaffron/60 rounded-full animate-bounce delay-200"></span>
                 </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions (only show if few messages) */}
        {messages.length < 3 && (
            <div className="px-5 pb-3 flex gap-2 overflow-x-auto no-scrollbar mask-linear-fade">
                {suggestions.map((s, i) => (
                    <button 
                        key={i} 
                        onClick={() => handleSuggestionClick(s)}
                        className="whitespace-nowrap bg-slate-800/80 hover:bg-slate-700 text-xs font-medium text-slate-300 px-4 py-2 rounded-xl border border-white/5 transition-all hover:border-brandSaffron/30"
                    >
                        {s}
                    </button>
                ))}
            </div>
        )}

        {/* Input Area */}
        <div className="p-4 bg-slate-900/95 border-t border-white/5">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about ads, pricing..."
              className="w-full bg-slate-950/50 text-white placeholder-slate-500 rounded-2xl pl-5 pr-14 py-4 border border-slate-800 focus:border-brandSaffron focus:ring-1 focus:ring-brandSaffron focus:outline-none text-sm transition-all shadow-inner"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-brandSaffron text-white rounded-xl hover:bg-orange-600 disabled:opacity-50 disabled:hover:bg-brandSaffron transition-all hover:scale-105 shadow-lg"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center mt-3">
            <a href="tel:+9779808493504" className="text-[10px] text-slate-500 hover:text-brandSaffron transition-colors flex items-center justify-center gap-1.5 font-medium">
               <Phone className="w-3 h-3" /> Need urgent help? Call +977-9808493504
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;