"use client";

export default function ChatGateway() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="text-2xl font-bold text-white">NextLabs</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Choose Your AI Experience
            </h1>
            <p className="text-lg leading-8 text-gray-300 sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Select the AI model that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Text Chat Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 p-8 shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20 hover:shadow-white/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 mb-6">
                  <span className="text-3xl font-bold text-white">🧠</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">NextLM-2.1</h3>
                <p className="text-gray-300 text-lg mb-8">
                  Advanced conversational AI with GPT-4.1 level intelligence. Perfect for complex reasoning, creative writing, and in-depth discussions.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-400 mr-3" />
                    Advanced reasoning capabilities
                  </div>
                  <div className="flex items-center text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-400 mr-3" />
                    Multimodal understanding
                  </div>
                  <div className="flex items-center text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-400 mr-3" />
                    Human-like conversations
                  </div>
                </div>
                
                <a 
                  href="/chat" 
                  className="block w-full rounded-lg bg-white/10 py-4 text-lg font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/30 text-center"
                >
                  Start Chatting
                </a>
              </div>
            </div>

            {/* Image Generation Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 p-8 shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20 hover:shadow-white/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 mb-6">
                  <span className="text-3xl font-bold text-white">🎨</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">NextLM-Image-1</h3>
                <p className="text-gray-300 text-lg mb-8">
                  Revolutionary visual AI for creating stunning images, artwork, and designs from simple text descriptions.
                </p>
                
                                 <div className="mb-8">
                   <div className="flex items-center justify-center text-gray-400">
                     <span className="text-lg font-medium">Worlds Best Photorealism</span>
                   </div>
                 </div>
                
                <a 
                  href="/chat/image" 
                  className="block w-full rounded-lg bg-white/10 py-4 text-lg font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/30 text-center"
                >
                  Generate Images
                </a>
              </div>
            </div>

            {/* Coder Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 p-8 shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20 hover:shadow-white/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 mb-6">
                  <span className="text-3xl font-bold text-white">💻</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">Coder</h3>
                <p className="text-gray-300 text-lg mb-8">
                  Powered by NextLM-2.1-Coder, a finetuned version of 2.1. Build React apps with live web containers for instant development.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-400 mr-3" />
                    Live web containers
                  </div>
                  <div className="flex items-center text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-400 mr-3" />
                    React app development
                  </div>
                  <div className="flex items-center text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-400 mr-3" />
                    Instant code execution
                  </div>
                </div>
                
                <a 
                  href="/chat/coder" 
                  className="block w-full rounded-lg bg-white/10 py-4 text-lg font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/30 text-center"
                >
                  Start Coding
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 