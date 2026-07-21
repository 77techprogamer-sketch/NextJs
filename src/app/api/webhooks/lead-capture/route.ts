import { NextResponse } from 'next/server';
import { sendEmail, emailSequences } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { name, email, magnet } = await req.json();

    if (!email || !name) {
      return NextResponse.json({ error: 'Missing name or email' }, { status: 400 });
    }

    // Send immediate welcome email
    const welcomeResult = await sendEmail({
      to: email,
      ...emailSequences.welcomeGuide(name, magnet)
    });

    if (!welcomeResult.success) {
      console.error('Failed to send welcome email:', welcomeResult.error);
    }

    // Note: In a production environment with a queue system (like Inngest or Upstash QStash),
    // you would schedule the Day 2 and Day 4 emails here. 
    // For a simple setup, if you are using an ESP like Brevo/ConvertKit/Mailchimp,
    // you would just add this email to a specific segment/list that automatically triggers the sequence.

    return NextResponse.json({ success: true, message: 'Autoresponder triggered' });
  } catch (error) {
    console.error('Lead capture webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
