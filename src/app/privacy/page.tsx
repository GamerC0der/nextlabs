"use client";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Last updated: Jun 17, 2025
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-7">
                At NextLabs, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                artificial intelligence services, including NextLM-2.1, NextLM-Image-1, and other AI models.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
                  <p className="text-gray-300 leading-7">
                    We may collect personal information such as your name, email address, phone number, and billing information 
                    when you create an account or purchase our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Usage Data</h3>
                  <p className="text-gray-300 leading-7">
                    We collect information about how you interact with our AI models, including prompts, responses, 
                    usage patterns, and performance metrics to improve our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Technical Information</h3>
                  <p className="text-gray-300 leading-7">
                    We automatically collect technical information such as IP addresses, browser type, device information, 
                    and cookies to ensure service functionality and security.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <ul className="space-y-3 text-gray-300 leading-7">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Provide and maintain our AI services
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Improve and optimize AI model performance
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Process payments and manage accounts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Communicate with you about updates and support
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Ensure security and prevent misuse
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 leading-7 mb-4">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="space-y-3 text-gray-300 leading-7">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Encryption of data in transit and at rest
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Regular security audits and monitoring
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Access controls and authentication
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Secure data storage and backup systems
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-7 mb-4">
                You have the right to:
              </p>
              <ul className="space-y-3 text-gray-300 leading-7">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Access your personal information
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Correct inaccurate information
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Request deletion of your data
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Object to processing of your information
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mt-3 mr-3 flex-shrink-0"></span>
                  Data portability
                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
} 