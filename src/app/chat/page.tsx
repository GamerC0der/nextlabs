"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm NextLM-2.1, your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState("nextlm-2.1");

  const models = [
    { id: "nextlm-2.1", name: "NextLM 2.1", description: "Our flagship model" },
    { id: "nextlm-2-beta", name: "NextLM 2 Beta", description: "Advanced reasoning" },
    { id: "nextlm-2.1-search", name: "NextLM 2.1 Search", description: "Web search enabled" },
    { id: "nextlm-2.1-coder", name: "NextLM 2.1 Coder", description: "Code development specialist" },
  ];

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/nextlm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.text,
          })),
          model: selectedModel,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

              const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let aiResponse = '';

        if (reader) {
          const aiMessage: Message = {
            id: Date.now() + 1,
            text: '',
            isUser: false,
            timestamp: new Date(),
          };
          
          setMessages(prev => [...prev, aiMessage]);
          setIsLoading(false);

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value);
            const lines = chunk.split('\n').filter(line => line.trim() !== '');
            
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                try {
                  const data = JSON.parse(line.slice(6));
                  if (data.choices && data.choices[0]?.delta?.content) {
                    aiResponse += data.choices[0].delta.content;
                    setMessages(prev => 
                      prev.map(msg => 
                        msg.id === aiMessage.id 
                          ? { ...msg, text: aiResponse }
                          : msg
                      )
                    );
                  }
                } catch (e) {
                  // Ignore parsing errors
                }
              }
            }
          }
        }
    } catch (error) {
      console.error('Error calling NextLM API:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8 border-b border-white/10">
        <div className="flex lg:flex-1">
          <a href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
            NextLabs
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white appearance-none cursor-pointer hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              {models.map((model) => (
                <option key={model.id} value={model.id} className="bg-slate-800 text-white">
                  {model.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span className="text-sm text-gray-300">
              {models.find(m => m.id === selectedModel)?.name || "NextLM 2.1"}
            </span>
          </div>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
            Back to Home
          </a>
        </div>
      </nav>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-6 py-8">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-6 mb-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs lg:max-w-md xl:max-w-lg ${
                  message.isUser
                    ? "bg-white text-black"
                    : "bg-slate-800/50 text-white ring-1 ring-white/10"
                } rounded-2xl px-4 py-3 shadow-lg`}
              >
                                 {!message.isUser && (
                   <div className="flex items-center gap-2 mb-2">
                     <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                       <span className="text-xs font-bold text-white">🧠</span>
                     </div>
                     <span className="text-xs text-gray-400">{models.find(m => m.id === selectedModel)?.name || "NextLM 2.1"}</span>
                   </div>
                 )}
                                 {message.isUser ? (
                   <p className="text-sm leading-relaxed">{message.text}</p>
                 ) : (
                   <div className="text-sm leading-relaxed prose prose-invert prose-sm max-w-none">
                     <ReactMarkdown
                       components={{
                         h1: ({ children }) => <h1 className="text-lg font-bold text-white mb-2">{children}</h1>,
                         h2: ({ children }) => <h2 className="text-base font-bold text-white mb-2">{children}</h2>,
                         h3: ({ children }) => <h3 className="text-sm font-bold text-white mb-1">{children}</h3>,
                         p: ({ children }) => <p className="text-gray-300 mb-2 last:mb-0">{children}</p>,
                         strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                         em: ({ children }) => <em className="italic text-gray-200">{children}</em>,
                         ul: ({ children }) => <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">{children}</ul>,
                         ol: ({ children }) => <ol className="list-decimal list-inside text-gray-300 mb-2 space-y-1">{children}</ol>,
                         li: ({ children }) => <li className="text-gray-300">{children}</li>,
                         code: ({ children }) => <code className="bg-gray-700 text-gray-200 px-1 py-0.5 rounded text-xs">{children}</code>,
                         pre: ({ children }) => <pre className="bg-gray-700 text-gray-200 p-2 rounded text-xs overflow-x-auto mb-2">{children}</pre>,
                         a: ({ href, children }) => <a href={href} className="text-blue-300 underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">{children}</a>,
                         blockquote: ({ children }) => <blockquote className="border-l-2 border-gray-600 pl-3 text-gray-400 italic mb-2">{children}</blockquote>,
                       }}
                     >
                       {message.text}
                     </ReactMarkdown>
                   </div>
                 )}
                <div className="mt-2 text-xs text-gray-400">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800/50 text-white ring-1 ring-white/10 rounded-2xl px-4 py-3 shadow-lg max-w-xs lg:max-w-md xl:max-w-lg">
                                 <div className="flex items-center gap-2 mb-2">
                   <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                     <span className="text-xs font-bold text-white">🧠</span>
                   </div>
                   <span className="text-xs text-gray-400">NextLM-2.1</span>
                 </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-slate-800/50 rounded-2xl p-4 ring-1 ring-white/10">
          <div className="flex gap-4">
            <div className="flex-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask NextLM-2.1 anything..."
                className="w-full bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none text-sm leading-relaxed"
                rows={1}
                style={{
                  minHeight: "24px",
                  maxHeight: "120px",
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "24px";
                  target.style.height = `${target.scrollHeight}px`;
                }}
              />
            </div>
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="px-4 py-2 bg-white text-black rounded-xl font-medium text-sm hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
          
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                         <div className="flex items-center gap-4 text-xs text-gray-400">
               <span>• MoE Architecture</span>
               <span>• 0.5b Active Parameters</span>
             </div>
            <div className="text-xs text-gray-400">
              Press Enter to send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 