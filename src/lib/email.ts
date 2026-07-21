/**
 * Email Service Scaffolding
 * 
 * Note: To use this in production, you'll need to set up an email provider like Resend.
 * `npm install resend` and configure RESEND_API_KEY in your .env
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export interface EmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailParams) {
  if (!RESEND_API_KEY) {
    console.warn(`[Email Service] Mock sending email to ${to}: ${subject}`);
    return { success: true, mocked: true };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Insurance Support <hello@insurancesupport.online>', // Ensure this domain is verified in Resend
        to,
        subject,
        html
      })
    });

    const data = await res.json();
    if (res.ok) {
      return { success: true, data };
    } else {
      console.error('[Email Service] Error from Resend:', data);
      return { success: false, error: data };
    }
  } catch (error) {
    console.error('[Email Service] Failed to send email:', error);
    return { success: false, error };
  }
}

// Pre-defined sequences for Lead Magnets
export const emailSequences = {
  welcomeGuide: (name: string, magnetName: string) => ({
    subject: `Your free guide is inside! (${magnetName})`,
    html: `
      <h2>Hi ${name},</h2>
      <p>Thanks for requesting the <strong>${magnetName}</strong>. We're thrilled to share our expertise with you.</p>
      <p>If you have any questions while reading, simply reply to this email.</p>
      <p>Best regards,<br/>The Insurance Support Team</p>
    `
  }),
  claimTips: (name: string) => ({
    subject: '3 Critical Insurance Claim Tips You Need to Know',
    html: `
      <h2>Hi ${name},</h2>
      <p>Did you know that 15% of health insurance claims are rejected simply due to missing paperwork? Here are 3 tips to ensure your claims are approved:</p>
      <ol>
        <li>Always notify the insurer within 24 hours of hospitalization.</li>
        <li>Keep original copies of all diagnostic reports.</li>
        <li>Ensure your doctor's exact diagnosis is clearly written on the discharge summary.</li>
      </ol>
      <p>If you ever face a rejection, remember we're here to help fight for your money.</p>
      <p>Best,<br/>Insurance Support</p>
    `
  }),
  consultationCta: (name: string) => ({
    subject: 'Free Policy Audit Offer',
    html: `
      <h2>Hi ${name},</h2>
      <p>Are you sure your family is fully protected without overpaying on premiums?</p>
      <p>We're offering a free 15-minute policy audit. Reply to this email to book your slot.</p>
      <p>Best,<br/>Insurance Support</p>
    `
  })
};
