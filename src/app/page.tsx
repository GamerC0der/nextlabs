"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showCookiesModal, setShowCookiesModal] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">

      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <span className="text-2xl font-bold text-white">NextLabs</span>
        </div>
      </nav>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              NextLabs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              The future of AI, with NextLM-2.1, NextLM-Image-1, and more.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
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
              <Link
                href="/blog/mono-to-nextlabs"
                className="group inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-white transition-all duration-200 bg-white/10 rounded-xl ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/40 hover:-translate-y-0.5"
              >
                Our story
                <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

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

       {/* Footer */}
       <footer className="border-t border-white/10 bg-slate-900/50">
         <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
             {/* Company */}
             <div className="col-span-1 md:col-span-2 lg:col-span-1">
               <div className="flex items-center mb-4">
                 <span className="text-2xl font-bold text-white">NextLabs</span>
               </div>
               <p className="text-gray-400 text-sm leading-6 mb-6">
                 Pioneering the future of artificial intelligence with cutting-edge models that redefine what's possible.
               </p>

             </div>

             {/* Products */}
             <div>
               <h3 className="text-sm font-semibold text-white mb-4">Products</h3>
               <ul className="space-y-3">
                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">NextLM-2.1</a></li>
                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">NextLM-Image-1</a></li>
                 <li><a href="/api-access" className="text-gray-400 hover:text-white transition-colors text-sm">API Access</a></li>
                 <li><a href="/enterprise" className="text-gray-400 hover:text-white transition-colors text-sm">Enterprise</a></li>
               </ul>
             </div>

             {/* Company */}
             <div>
               <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
               <ul className="space-y-3">
                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Research</a></li>
                 <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
               </ul>
             </div>

             {/* Support */}
             <div>
               <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
               <ul className="space-y-3">
                 <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
                 <li><a href="/status" className="text-gray-400 hover:text-white transition-colors text-sm">Status</a></li>
               </ul>
             </div>
           </div>

           <div className="mt-12 pt-8 border-t border-white/10">
             <div className="flex flex-col md:flex-row justify-between items-center">
               <p className="text-gray-400 text-sm">
                 © 2025 NextLabs. All rights reserved.
               </p>
                                <div className="flex space-x-6 mt-4 md:mt-0">
                   <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                   <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                   <button 
                     onClick={() => setShowCookiesModal(true)}
                     className="text-gray-400 hover:text-white transition-colors text-sm"
                   >
                     Cookies
                   </button>
                 </div>
             </div>
           </div>
         </div>
      </footer>

      {/* Cookies Modal */}
      {showCookiesModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full ring-1 ring-white/10 shadow-2xl">
                         <div className="text-center">
               <div className="flex justify-center mb-4">
                 <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                 </svg>
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Cookies Policy</h3>
              <p className="text-lg text-gray-300 mb-6">
                NextLabs is 100% Cookies Free
              </p>
              <p className="text-sm text-gray-400 mb-6">
                We don't use any cookies to track or store your data. Your privacy is our priority.
              </p>
              <button
                onClick={() => setShowCookiesModal(false)}
                className="w-full rounded-lg bg-white/10 py-3 text-lg font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/30"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
