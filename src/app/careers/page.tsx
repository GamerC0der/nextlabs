"use client";

export default function CareersPage() {
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
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-gray-300 ring-1 ring-inset ring-white/10 mb-4">
              💼 Careers
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Join NextLabs
            </h1>
            <div className="bg-slate-800/50 rounded-2xl p-12 ring-1 ring-white/10 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-6xl mb-6">🚧</div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  No Careers Available
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Check back later!
                </p>
                <p className="text-sm text-gray-400">
                  We're always looking for exceptional talent. Follow us for updates on future opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 