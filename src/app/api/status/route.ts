import { NextResponse } from 'next/server';

export async function GET() {
  const currentTime = new Date().toISOString();
  
  const statusData = {
    timestamp: currentTime,
    overall_status: "operational",
    services: [
      {
        id: "nextlm-2.1",
        name: "NextLM-2.1",
        description: "Advanced conversational AI",
        status: "operational",
        uptime: "100.00%",
        response_time: "N/A",
        last_incident: null
      },
      {
        id: "nextlm-image-1", 
        name: "NextLM-Image-1",
        description: "Worlds Best Photorealism",
        status: "operational",
        uptime: "100.00%",
        response_time: "N/A",
        last_incident: null
      },
      {
        id: "api-gateway",
        name: "API Gateway",
        description: "Core platform infrastructure",
        status: "operational", 
        uptime: "100.00%",
        response_time: "N/A",
        last_incident: null
      }
    ],
    metrics: {
      total_requests_24h: "N/A",
      avg_response_time: "Instant",
      error_rate: "0.00%"
    }
  };

  return NextResponse.json(statusData);
} 