"use client";

export default function MonoToNextLabsBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="text-2xl font-bold text-white">NextLabs</a>
        </div>
        <div className="flex gap-4">
          <a href="/chat/gateway" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Chat</a>
          <a href="/status" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Status</a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Home</a>
        </div>
      </nav>

      {/* Blog Content */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-gray-300 ring-1 ring-inset ring-white/10 mb-4">
              📝 Blog Post
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Moving from Mono to NextLabs
            </h1>
            <p className="text-xl leading-8 text-gray-300 max-w-2xl mx-auto mb-8">
              A new generation of AI (Written by NextLM 2.1)
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span>Published on June 9, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Article */}
          <article className="bg-slate-800/50 rounded-2xl p-8 lg:p-12 ring-1 ring-white/10">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Today marks a significant milestone in the evolution of artificial intelligence. We're excited to announce the transition from Mono to NextLabs, representing not just a rebrand, but a fundamental leap forward in AI technology and capabilities.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why the Change?</h2>
                <p>
                  The name "Mono" served us well in our early days, but as our technology evolved and our vision expanded, we realized we needed a name that better reflected our mission: to create the next generation of AI that truly understands and assists humanity.
                </p>

                <p>
                  NextLabs represents our commitment to pushing the boundaries of what's possible with artificial intelligence. We're not just iterating on existing technology—we're reimagining what AI can be.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">What's New?</h2>
                <p>
                  With NextLabs comes a complete suite of revolutionary AI models:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><strong className="text-white">NextLM-2.1:</strong> Our flagship language model with GPT-4.1 level intelligence, featuring unprecedented reasoning capabilities and multimodal understanding.</li>
                  <li><strong className="text-white">NextLM-Image-1:</strong> The world's best photorealistic image generation AI, creating stunning visuals from simple text descriptions.</li>
                  <li><strong className="text-white">NextLM-2.1 Search:</strong> Advanced AI with real-time search capabilities, bringing the latest information to every conversation.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Vision</h2>
                <p>
                  At NextLabs, we believe AI should be accessible, powerful, and fundamentally beneficial to humanity. Our models are designed with privacy first—we're 100% cookies free and committed to protecting your data.
                </p>

                <p>
                  We're building technology that doesn't just respond to prompts, but truly understands context, nuance, and intent. Whether you're creating art, writing code, conducting research, or simply having a conversation, our AI is designed to be your intelligent partner.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">What's Next?</h2>
                <p>
                  This is just the beginning. We're working on enterprise solutions, developer APIs, and next-generation models that will include audio synthesis, video generation, and specialized AI for various industries.
                </p>

                <p>
                  Our roadmap includes exciting developments in multimodal AI, real-time collaboration tools, and innovative ways to interact with artificial intelligence that we can't wait to share with you.
                </p>

                <div className="bg-slate-700/50 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-bold text-white mb-3">Ready to Experience NextLabs?</h3>
                  <p className="text-gray-300 mb-4">
                    Try our AI models today and see the difference that next-generation technology makes.
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href="/chat/gateway"
                      className="px-6 py-2 rounded-lg bg-white/10 text-white font-medium ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/30"
                    >
                      Try NextLM-2.1
                    </a>
                    <a 
                      href="/chat/image"
                      className="px-6 py-2 rounded-lg bg-white/5 text-white font-medium ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
                    >
                      Generate Images
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a 
              href="/"
              className="inline-flex items-center gap-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="h-4 w-4 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 