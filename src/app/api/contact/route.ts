import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    
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
