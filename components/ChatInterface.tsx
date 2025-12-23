"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  onBack: () => void;
}

export default function ChatInterface({ onBack }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Welcome to Objexis Toy Inc.! I\'m your AI Design Agent, specialized in creating original, futuristic toy vehicle concepts for 3D printing.\n\nI can help you with:\n• Designing new vehicle concepts\n• Refining existing designs\n• Discussing design philosophy and aesthetics\n• Providing 3D printing considerations\n• Creating vehicle backstories and specs\n\nWhat would you like to explore today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message || 'I apologize, but I encountered an error. Please try again.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-objexis-cyan/30 hover:border-objexis-cyan rounded-lg text-objexis-cyan transition-colors flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Home</span>
        </button>

        <h2 className="text-2xl font-display font-bold text-objexis-cyan">
          AI Design Agent
        </h2>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-objexis-cyan/30 overflow-hidden">
        {/* Messages Area */}
        <div className="h-[600px] overflow-y-auto p-6 space-y-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-objexis-cyan to-objexis-purple text-white'
                      : 'bg-white/10 border border-objexis-cyan/30 text-gray-100'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 mt-1">
                      {message.role === 'assistant' ? '🤖' : '👤'}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      <p className="text-xs opacity-60 mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-white/10 border border-objexis-cyan/30 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="text-xl">🤖</div>
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-objexis-cyan rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-objexis-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-2 h-2 bg-objexis-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="border-t border-objexis-cyan/30 p-4">
          <div className="flex space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about vehicle designs, concepts, or ideas..."
              className="flex-1 px-4 py-3 bg-white/5 border border-objexis-cyan/30 rounded-lg focus:outline-none focus:border-objexis-cyan text-white placeholder-gray-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-gradient-to-r from-objexis-cyan to-objexis-purple text-white font-display font-bold rounded-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Quick Prompts */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          "Design a futuristic sports car",
          "Create a luxury SUV concept",
          "Suggest lighting elements",
          "Explain design philosophy"
        ].map((prompt, index) => (
          <button
            key={index}
            onClick={() => setInput(prompt)}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-objexis-purple/30 hover:border-objexis-purple rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
