// src/components/ChatbotWidget.tsx
import React, { useState, useEffect, useRef } from 'react';
import { HiChatAlt2, HiX, HiPaperAirplane, HiSparkles } from 'react-icons/hi';
import { processMessage } from '../services/chatService';
import { BotState, ChatContext } from '../models/chatbot';

interface Message {
  id: string;
  text: string;
  htmlText?: string;
  sender: 'user' | 'bot';
  quickReplies?: string[];
  isTyping?: boolean;
}

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [botState, setBotState] = useState<BotState>('initial');
  const [context, setContext] = useState<ChatContext>({ lastIntent: null });

  // Initiale Begrüßung beim ersten Öffnen
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage({
        text: "Hallo! 👋 Ich bin der digitale Assistent von Klein Digital Solutions. Wie kann ich Ihnen heute helfen?",
        sender: 'bot',
        quickReplies: ['🚀 Projekt starten', '💼 Services ansehen', '🎨 Portfolio zeigen', '💰 Preise erfahren'],
      });
    }
  }, [isOpen, messages.length]);

  const addMessage = (msg: Omit<Message, 'id'>) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), ...msg }]);
  };

  const simulateTyping = async (duration: number = 1000) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, duration));
    setIsTyping(false);
  };

  const handleSendMessage = async (messageText: string) => {
    if (messageText.trim() === '') return;
    
    addMessage({ text: messageText, sender: 'user' });
    setInput('');

    // Typing-Indikator
    await simulateTyping(800);

    const responseObject = processMessage(messageText, botState, context);
    
    addMessage({
      text: responseObject.responseText,
      htmlText: responseObject.htmlText,
      sender: 'bot',
      quickReplies: responseObject.quickReplies,
    });

    if (responseObject.nextBotState) {
      setBotState(responseObject.nextBotState);
    }
    if (responseObject.nextContext) {
      setContext(responseObject.nextContext);
    }
    if (responseObject.shouldCloseChat) {
      setTimeout(() => setIsOpen(false), 2000);
    }
  };

  const handleQuickReplyClick = (replyText: string) => {
    // Entferne Emojis für die Verarbeitung
    const cleanText = replyText.replace(/[🚀💼🎨💰📧📱💡]/g, '').trim();
    handleSendMessage(cleanText);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat Button mit Pulse-Animation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 transform hover:scale-105 ${!isOpen ? 'animate-pulse' : ''}`}
        aria-label={isOpen ? "Chat schließen" : "Chat öffnen"}
      >
        <div className="relative">
          {isOpen ? <HiX className="w-7 h-7" /> : <HiChatAlt2 className="w-7 h-7" />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 dark:border-slate-700 overflow-hidden animate-slideIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <HiSparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Klein Digital Solutions</h3>
                <p className="text-xs opacity-90">Ihr digitaler Assistent</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Chat schließen"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50 dark:bg-slate-900">
            {messages.map((msg, index) => (
              <div key={msg.id} className={`animate-fadeIn ${msg.sender === 'user' ? 'ml-auto' : ''}`}>
                <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm' 
                      : 'bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 rounded-bl-sm shadow-sm border border-gray-100 dark:border-slate-700'
                  }`}>
                    {msg.htmlText ? (
                      <div 
                        dangerouslySetInnerHTML={{ __html: msg.htmlText }} 
                        className="prose prose-sm dark:prose-invert max-w-none"
                      />
                    ) : (
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    )}
                  </div>
                </div>
                
                {/* Quick Replies */}
                {index === messages.length - 1 && msg.sender === 'bot' && msg.quickReplies && (
                  <div className="flex flex-wrap gap-2 mt-3 ml-2 animate-slideUp">
                    {msg.quickReplies.map((reply, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuickReplyClick(reply)}
                        className="px-4 py-2 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full text-sm hover:bg-blue-50 dark:hover:bg-slate-600 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 shadow-sm border border-gray-200 dark:border-slate-600"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fadeIn">
                <div className="bg-white dark:bg-slate-800 text-gray-500 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 dark:border-slate-700">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                placeholder="Schreiben Sie Ihre Nachricht..."
                className="flex-grow px-4 py-3 rounded-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage(input)}
                disabled={!input.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Nachricht senden"
              >
                <HiPaperAirplane className="w-5 h-5 transform rotate-45" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ChatbotWidget;