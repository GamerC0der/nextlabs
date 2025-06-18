"use client";

import { useState } from "react";

export default function ImagePlayground() {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      const response = await fetch('/api/nextlm/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await response.json();
      if (data.success) {
        setGeneratedImage(`data:image/png;base64,${data.imageBase64}`);
      } else {
        console.error('Error:', data.error);
        alert(data.error || 'Failed to generate image');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="text-2xl font-bold text-white">NextLabs</a>
        </div>
        <div className="flex gap-4">
          <a 
            href="/chat/gateway" 
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-white"
          >
            ← Back to Gateway
          </a>
          <a 
            href="/chat" 
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-white"
          >
            Text Chat
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-gray-300 ring-1 ring-inset ring-white/10 mb-4">
              🎨 NextLM-Image-1
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
              Image Playground
            </h1>
            <p className="text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Create stunning images with our advanced AI. 
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 ring-1 ring-white/10">
                <label htmlFor="prompt" className="block text-sm font-medium text-white mb-3">
                  Describe your image
                </label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={6}
                  className="w-full rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 p-4 focus:ring-2 focus:ring-white/20 focus:border-transparent resize-none"
                  placeholder="A serene mountain landscape at sunset, with vibrant orange and pink clouds reflecting on a crystal-clear lake..."
                />
                
                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="mt-4 w-full rounded-lg bg-white/10 py-3 text-lg font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Generating...
                    </div>
                  ) : (
                    'Generate Image'
                  )}
                </button>
              </div>

              {/* Features */}
                             <div className="bg-slate-800/50 rounded-2xl p-6 ring-1 ring-white/10">
                 <h3 className="text-lg font-semibold text-white mb-4">NextLM-Image-1</h3>
                 <div className="flex items-center justify-center text-gray-300">
                   <span className="text-lg font-medium">Worlds Best Photorealism</span>
                 </div>
               </div>
            </div>

            {/* Output Panel */}
            <div className="bg-slate-800/50 rounded-2xl p-6 ring-1 ring-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Generated Image</h3>
              
              <div className="aspect-square rounded-lg bg-slate-700/50 border-2 border-dashed border-slate-600 flex items-center justify-center">
                {generatedImage ? (
                  <img 
                    src={generatedImage} 
                    alt="Generated image" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-2">🎨</div>
                    <p className="text-sm">Your generated image will appear here</p>
                    <p className="text-xs mt-1">Enter a prompt and click generate to start</p>
                  </div>
                )}
              </div>

              {generatedImage && (
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg bg-white/5 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20">
                    Download
                  </button>
                  <button className="flex-1 rounded-lg bg-white/5 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20">
                    Share
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sample Prompts */}
          <div className="mt-12 bg-slate-800/50 rounded-2xl p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Try these sample prompts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "A cyberpunk cityscape at night with neon lights reflecting on wet streets",
                "An oil painting of a majestic lion in the African savanna",
                "A minimalist modern architecture house surrounded by cherry blossoms",
                "A detailed portrait of an astronaut floating in space",
                "A fantasy castle floating among clouds in a magical sky",
                "A vintage 1950s diner with classic cars parked outside"
              ].map((samplePrompt, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(samplePrompt)}
                  className="text-left p-3 rounded-lg bg-slate-700/50 text-gray-300 text-sm hover:bg-slate-600/50 hover:text-white transition-all"
                >
                  {samplePrompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 