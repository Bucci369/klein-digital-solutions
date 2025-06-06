// src/components/ChatbotWidget.tsx
import React, { useState, useEffect, useRef } from 'react';
import { HiChatAlt2, HiX, HiPaperAirplane } from 'react-icons/hi';

// --- KORREKTE IMPORTE ---
import { processMessage } from '../services/chatService';
import { BotState, Intent } from '../types/chatbot'; // <-- Pfad zu /types/chatbot.ts


interface Message {
  id: string;
  text: string;
  htmlText?: string;
  sender: 'user' | 'bot';
  quickReplies?: string[];
}

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [botState, setBotState] = useState<BotState>('initial');
  const [lastUserIntent, setLastUserIntent] = useState<Intent>(null);

  const addMessage = (msg: Omit<Message, 'id'>) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), ...msg }]);
  };

  const handleSendMessage = (messageText: string) => {
    if (messageText.trim() === '') return;
    addMessage({ text: messageText, sender: 'user' });
    setInput('');

    setTimeout(() => {
      const responseObject = processMessage(messageText, botState);
      addMessage({
        text: responseObject.responseText,
        htmlText: responseObject.htmlText,
        sender: 'bot',
        quickReplies: responseObject.quickReplies,
      });

      if (responseObject.nextBotState) {
        setBotState(responseObject.nextBotState);
      }
      if (responseObject.nextLastUserIntent !== undefined) {
        setLastUserIntent(responseObject.nextLastUserIntent);
      }
      if (responseObject.shouldCloseChat) {
        setIsOpen(false);
      }
    }, 800);
  };

  const handleQuickReplyClick = (replyText: string) => {
    handleSendMessage(replyText);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Dein weiterer JSX-Code für die Darstellung bleibt gleich...
  return (
    <>
      {/* --- Chat-Öffnen-Button --- */}
      {/* Dieser Button ist immer sichtbar, solange der Chat geschlossen ist, und steuert den 'isOpen'-Zustand */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label={isOpen ? "Chat schließen" : "Chat öffnen"}
      >
        {isOpen ? <HiX className="w-7 h-7" /> : <HiChatAlt2 className="w-7 h-7" />}
      </button>

      {/* --- Chat-Fenster (wird nur angezeigt, wenn isOpen === true) --- */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-slate-800 rounded-lg shadow-xl flex flex-col z-50 border border-gray-200 dark:border-slate-700">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <h3 className="font-semibold text-lg">Digital Solutions Bot</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Chat schließen">
              <HiX className="w-6 h-6 hover:text-gray-200" />
            </button>
          </div>

          {/* Nachrichtenbereich */}
          <div className="flex-grow p-4 overflow-y-auto space-y-2 text-sm scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 dark:scrollbar-thumb-blue-700 dark:scrollbar-track-slate-700">
            {messages.map((msg, index) => (
              <div key={msg.id}>
                <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-2 rounded-lg break-words ${ msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 dark:bg-slate-700 dark:text-gray-100 rounded-bl-none'}`}>
                    {msg.htmlText ? (
                      <div dangerouslySetInnerHTML={{ __html: msg.htmlText }} />
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
                {/* Quick Replies nur für die letzte Bot-Nachricht anzeigen */}
                {index === messages.length - 1 && msg.sender === 'bot' && msg.quickReplies && (
                  <div className="flex flex-wrap gap-2 mt-3 justify-start">
                    {msg.quickReplies.map((reply, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuickReplyClick(reply)}
                        className="px-3 py-1 bg-blue-100 dark:bg-slate-600 text-blue-700 dark:text-blue-200 rounded-full text-xs hover:bg-blue-200 dark:hover:bg-slate-500"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Eingabebereich */}
          <div className="border-t border-gray-200 dark:border-slate-700 p-4 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
              placeholder="Ihre Nachricht..."
              className="flex-grow p-2 rounded-md border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="ml-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Nachricht senden"
            >
              <HiPaperAirplane className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );

  };

export default ChatbotWidget;