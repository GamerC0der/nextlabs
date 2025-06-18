"use client";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
            NextLabs
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Products</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Research</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Company</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Content */}
      <div className="relative isolate px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Last updated: Jun 17, 2025
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 leading-7">
                By accessing and using NextLabs' artificial intelligence services, including NextLM-2.1, NextLM-Image-1, 
                and related products (the "Services"), you agree to be bound by these Terms of Service ("Terms"). 
                If you do not agree to these Terms, please do not use our Services.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Use of Services</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Permitted Use</h3>
                  <p className="text-gray-300 leading-7">
                    You may use our AI services for lawful purposes only. Our models are designed to assist with creative, 
                    educational, and business applications while maintaining ethical standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Prohibited Activities</h3>
                  <ul className="space-y-2 text-gray-300 leading-7 mt-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                      Generating harmful, illegal, or malicious content
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                      Attempting to reverse engineer our AI models
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                      Violating intellectual property rights
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                      Sharing account credentials with unauthorized parties
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Account Responsibilities</h2>
              <ul className="space-y-3 text-gray-300 leading-7">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Maintain accurate and current account information
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Protect your account credentials and API keys
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Monitor usage and comply with rate limits
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Report any security breaches immediately
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">NextLabs' Rights</h3>
                  <p className="text-gray-300 leading-7">
                    NextLabs retains all rights, title, and interest in our AI models, algorithms, software, and related 
                    intellectual property. Our services are licensed, not sold, to you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Your Content</h3>
                  <p className="text-gray-300 leading-7">
                    You retain ownership of your input content and generated outputs, subject to our usage rights 
                    necessary to provide the Services. You grant us a limited license to process your content.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
              <p className="text-gray-300 leading-7 mb-4">
                We strive to maintain high service availability, but we do not guarantee uninterrupted access. 
                Our services may be temporarily unavailable due to:
              </p>
              <ul className="space-y-3 text-gray-300 leading-7">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Scheduled maintenance and updates
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Technical difficulties or outages
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  High demand or capacity limitations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Security incidents or investigations
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Payment and Billing</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Fees</h3>
                  <p className="text-gray-300 leading-7">
                    Service fees are based on usage, subscription plans, or other pricing models as specified in your account. 
                    All fees are non-refundable unless otherwise stated.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Billing</h3>
                  <p className="text-gray-300 leading-7">
                    You will be charged according to your selected payment schedule. Failure to pay may result in 
                    service suspension or termination.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer and Limitations</h2>
              <p className="text-gray-300 leading-7 mb-4">
                OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, 
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
              </p>
              <p className="text-gray-300 leading-7">
                IN NO EVENT SHALL NEXTLABS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES 
                ARISING FROM YOUR USE OF OUR SERVICES.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-300 leading-7">
                Either party may terminate these Terms at any time. Upon termination, your access to our Services will cease, 
                and any outstanding fees will become immediately due. Sections regarding intellectual property, disclaimers, 
                and limitations will survive termination.
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
} 