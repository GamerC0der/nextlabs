"use client";

export default function ApiAccessPage() {
  const pricingPlans = [
    {
      name: "NextLM 2.1",
      description: "Advanced conversational AI with GPT-4.1 level intelligence",
      inputPrice: "$0.05",
      outputPrice: "$0.20",
      additionalCost: null
    },
    {
      name: "NextLM 2 Beta",
      description: "Beta version with enhanced capabilities",
      inputPrice: "$0.40",
      outputPrice: "$0.50",
      additionalCost: null
    },
    {
      name: "NextLM 2.1 Search",
      description: "Advanced AI with real-time search capabilities",
      inputPrice: "$0.05",
      outputPrice: "$0.20",
      additionalCost: "$0.001 per request"
    }
  ];

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

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-gray-300 ring-1 ring-inset ring-white/10 mb-4">
              🚀 API Access
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Developer API
            </h1>
            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Coming Soon!
                </h2>
                <p className="text-lg text-gray-300">
                  Our powerful APIs will be available soon. Check out our pricing below.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">API Pricing</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-gray-300">Input (per million tokens)</span>
                      <span className="text-white font-semibold">{plan.inputPrice}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-gray-300">Output (per million tokens)</span>
                      <span className="text-white font-semibold">{plan.outputPrice}</span>
                    </div>
                    {plan.additionalCost && (
                      <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-gray-300">Additional</span>
                        <span className="text-white font-semibold">{plan.additionalCost}</span>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    disabled
                    className="w-full mt-6 rounded-lg bg-white/5 py-3 text-lg font-medium text-gray-400 ring-1 ring-white/10 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Get Notified</h3>
            <p className="text-gray-300 mb-4">
              Be the first to know when our APIs launch. We'll notify you as soon as they're available.
            </p>
            <p className="text-sm text-gray-400">
              All pricing is subject to change. Final pricing may vary at launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 