import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    
    // Check if Supabase env vars are set
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
        console.warn('Supabase env vars missing. Skipping DB save.');
        return NextResponse.json({ success: true, message: 'Message received (DB save skipped)' });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const insertData = {
      name: payload.name || payload.fullName || 'Unknown',
      phone: payload.phone || payload.mobile || payload.mobileNumber || '',
      email: payload.email || null,
      insurance_type: payload.insurance_type || payload.service || 'general',
      details: payload,
      created_at: new Date().toISOString()
    };

    const { error } = await supabase.from('customers').insert([insertData]);

    if (error) {
      console.error('Database insert failed:', error);
      return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
