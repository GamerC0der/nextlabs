"use client";

import { useState, useEffect } from "react";

interface Service {
  id: string;
  name: string;
  description: string;
  status: string;
  uptime: string;
  response_time: string;
  last_incident: string | null;
}

interface StatusData {
  timestamp: string;
  overall_status: string;
  services: Service[];
  metrics: {
    total_requests_24h: string;
    avg_response_time: string;
    error_rate: string;
  };
}

export default function StatusPage() {
  const [statusData, setStatusData] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/status');
        const data = await response.json();
        setStatusData(data);
      } catch (error) {
        console.error('Error fetching status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    // Refresh every 30 seconds
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'down':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500/20 text-green-400 ring-green-500/30';
      case 'degraded':
        return 'bg-yellow-500/20 text-yellow-400 ring-yellow-500/30';
      case 'down':
        return 'bg-red-500/20 text-red-400 ring-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 ring-gray-500/30';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="text-2xl font-bold text-white">NextLabs</a>
        </div>
        <div className="flex gap-4">
          <a href="/chat/gateway" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Chat</a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Home</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-gray-300 ring-1 ring-inset ring-white/10 mb-4">
              🟢 All Systems Operational
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
              System Status
            </h1>
            <p className="text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Real-time status and performance metrics for all NextLabs services
            </p>
          </div>

          {statusData && (
            <>
              {/* Overall Status */}
              <div className="bg-slate-800/50 rounded-2xl p-8 ring-1 ring-white/10 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Overall Status</h2>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset ${getStatusBadge(statusData.overall_status)}`}>
                    ● {statusData.overall_status.charAt(0).toUpperCase() + statusData.overall_status.slice(1)}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{statusData.metrics.total_requests_24h}</div>
                    <div className="text-gray-400 text-sm">Requests (24h)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{statusData.metrics.avg_response_time}</div>
                    <div className="text-gray-400 text-sm">Avg Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">{statusData.metrics.error_rate}</div>
                    <div className="text-gray-400 text-sm">Error Rate</div>
                  </div>
                </div>
              </div>

              {/* Services Status */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white mb-6">Service Status</h2>
                
                {statusData.services.map((service) => (
                  <div key={service.id} className="bg-slate-800/50 rounded-xl p-6 ring-1 ring-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset ${getStatusBadge(service.status)}`}>
                        ● {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-green-400">{service.uptime}</div>
                        <div className="text-gray-400 text-sm">Uptime (30 days)</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{service.response_time}</div>
                        <div className="text-gray-400 text-sm">Response Time</div>
                      </div>
                      <div>
                        <div className="text-lg font-medium text-gray-300">
                          {service.last_incident ? service.last_incident : 'No incidents'}
                        </div>
                        <div className="text-gray-400 text-sm">Last Incident</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Last Updated */}
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  Last updated: {new Date(statusData.timestamp).toLocaleString()}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Refreshes automatically every 30 seconds
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 