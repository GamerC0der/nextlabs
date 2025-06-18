"use client";

import { useState } from "react";

export default function Enterprise() {
  const [showCookiesModal, setShowCookiesModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative">
      {/* Blurred Content */}
      <div className="filter blur-sm">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <span className="text-2xl font-bold text-white">NextLabs</span>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Products</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Research</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Company</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>
          
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                NextLabs Enterprise
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl lg:text-2xl max-w-3xl mx-auto">
                The future of AI for enterprise, with NextLM-2.1, NextLM-Image-1, and more.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/chat/gateway"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black transition-all duration-200 bg-white rounded-xl shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="relative">Get started</span>
                </a>
                <a
                  href="#models"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 border border-white/20 rounded-xl hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('models')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Learn more 
                  <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Advanced AI Models Section */}
          <div id="models" className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-3xl text-center mb-20">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-gray-300 ring-1 ring-inset ring-white/10 mb-4">
                🚀 Advanced AI Models
              </div>
              <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Redefining What's <span className="text-gray-300">Possible</span>
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                Experience the next generation of AI with models that think, create, and innovate like never before
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* NextLM-2.1 Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 p-8 shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20 hover:shadow-white/10 hover:-translate-y-2">
                <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <span className="text-xl font-bold text-white">🧠</span>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-white/20">
                      Available Now
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">NextLM-2.1</h3>
                  <p className="text-gray-300 text-base mb-6">
                    Our most sophisticated language model featuring unprecedented reasoning, multimodal understanding, and human-like conversation capabilities.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3" />
                      MoE
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3" />
                      0.5b Active
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3" />
                      GPT 4.1 Level Intelligence
                    </div>
                  </div>
                  
                  <a href="/chat" className="block w-full rounded-lg bg-white/5 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20 text-center">
                    Explore NextLM-2.1
                  </a>
                </div>
              </div>

              {/* NextLM-Image-1 Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 p-8 shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20 hover:shadow-white/10 hover:-translate-y-2">
                <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <span className="text-xl font-bold text-white">🎨</span>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-white/20">
                      Available Now
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">NextLM-Image-1</h3>
                  <p className="text-gray-300 text-base mb-6">
                    Revolutionary visual AI that generates photorealistic images, understands complex scenes, and creates artistic masterpieces from simple prompts.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center text-gray-400">
                      <span className="text-base font-medium">Worlds Best Photorealism</span>
                    </div>
                  </div>
                  
                  <a href="/chat/image" className="block w-full rounded-lg bg-white/5 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20 text-center">
                    Explore NextLM-Image-1
                  </a>
                </div>
              </div>

              {/* Next Generation Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 p-8 shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20 hover:shadow-white/10 hover:-translate-y-2">
                <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <span className="text-xl font-bold text-white">⚡</span>
                    </div>
                    <span className="rounded-full bg-gray-700/50 px-3 py-1 text-xs font-medium text-gray-400 ring-1 ring-gray-600/50">
                      Coming Soon
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Next Generation</h3>
                  <p className="text-gray-300 text-base mb-6">
                    The future of AI includes audio synthesis, video generation, code assistance, and specialized models that will transform every industry.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3" />
                      Real-time audio and music generation
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3" />
                      Cinematic video creation and editing
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3" />
                      Advanced coding and development AI
                    </div>
                  </div>
                  
                  

                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
          </div>
        </div>
      </div>

      {/* Enterprise Overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-800/90 rounded-2xl p-12 max-w-2xl w-full mx-4 ring-1 ring-white/20 shadow-2xl backdrop-blur-sm">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Enterprise Coming Soon</h2>
            <p className="text-xl text-gray-300 mb-8">
              Enterprise is not yet available. It will launch alongside our API Product.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="/api-access"
                className="px-6 py-3 rounded-lg bg-white/10 text-white font-medium ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/30"
              >
                View API Pricing
              </a>
              <a 
                href="/"
                className="px-6 py-3 rounded-lg bg-white/5 text-white font-medium ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 