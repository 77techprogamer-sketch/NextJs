import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: NextRequest) {
  const country = request.geo?.country || 'Unknown';
  
  // Block visitors from Pakistan
  if (country === 'PK') {
    return new NextResponse(
      JSON.stringify({ 
        error: 'Access Denied', 
        message: 'Sorry, access from Pakistan is currently restricted.' 
      }),
      { 
        status: 403, 
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        } 
      }
    );
  }
  
  // Allow access for all other countries
  return new NextResponse(
    JSON.stringify({ 
      message: 'Access granted', 
      country 
    }),
    { 
      status: 200, 
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      } 
    }
  );
}