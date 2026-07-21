import { Metadata } from 'next';
import { Phone, Mail, MapPin, ShieldCheck, Download, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: 'LIC Claim Rejection Appeal Letter Template | Insurance Support',
    description: 'Free LIC claim rejection appeal letter template with IRDAI regulation citations, Section 45 protections, and Insurance Ombudsman filing formats.',
    keywords: ['LIC claim rejection', 'appeal letter template', 'IRDAI complaint', 'insurance ombudsman', 'Section 45 insurance'],
};

const CONTACT = {
    name: 'Hari Kotian',
    phone: '+91-9986634506',
    email: 'support@insurancesupport.online',
    website: 'https://insurancesupport.online',
    address: 'Bahubali Nagar, Jalahalli, Bengaluru, Karnataka 560013',
    irdai: '014911D',
};

export default function LICClaimRejectionTemplate() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-8 print:py-0 print:px-0">
                <div className="text-center mb-12 pb-8 border-b-2 border-slate-200 print:break-after-page">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <ShieldCheck className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-2">LIC Claim Rejection Appeal Letter Template</h1>
                    <p className="text-lg text-slate-600 mb-6">Complete guide with ready-to-use templates, IRDAI regulation citations, and escalation formats</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-bold text-green-700">
                        <Download className="w-4 h-4" />
                        Free Download — Insurance Support Online
                    </div>
                </div>
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-12 print:break-inside-avoid">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-bold text-lg mb-3 text-primary">Need Professional Help?</h3>
                            <p className="text-sm text-slate-300 mb-4">If your LIC claim has been rejected, our team of claim recovery specialists can help you fight back.</p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /><span>{CONTACT.name} — {CONTACT.phone}</span></div>
                                <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /><span>{CONTACT.email}</span></div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                            <div className="space-y-2 text-sm">
                                <div>Website: {CONTACT.website}</div>
                                <div>Address: {CONTACT.address}</div>
                                <div>IRDAI Reg: {CONTACT.irdai}</div>
                                <div>WhatsApp: wa.me/919986634506</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-12 print:break-inside-avoid">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">1. When to Use This Template</h2>
                    <p className="text-slate-700 mb-4">Use this appeal letter template when your LIC claim has been rejected for any of the following reasons:</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                        <li>Non-disclosure of pre-existing diseases (PED)</li>
                        <li>Waiting period exclusions</li>
                        <li>Policy lapsation disputes</li>
                        <li>Exclusion clause misapplication</li>
                        <li>Delayed intimation of claim</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                        <strong>Important:</strong> Under IRDAI guidelines, maturity and death claims must be settled within 30 days of document submission.
                    </div>
                </div>
                <div className="mb-12 print:break-inside-avoid">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">2. Appeal Letter Template</h2>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 font-sm">
                        <p className="font-bold mb-2">To,</p>
                        <p className="mb-1">The Grievance Redressal Officer</p>
                        <p className="mb-1">Life Insurance Corporation of India</p>
                        <p className="mb-4">[Branch/Divisional Office Address]</p>
                        <p className="font-bold mb-2">Subject: Appeal against claim rejection — Policy No. [YOUR_POLICY_NUMBER]</p>
                        <p className="mb-4">Dear Sir/Madam,</p>
                        <p className="mb-4">I am writing to formally appeal the rejection of my insurance claim for Policy No. [POLICY_NUMBER].</p>
                        <p className="font-bold mb-2">Grounds for Appeal:</p>
                        <p className="mb-4">1. Under Section 45 of the Insurance Act, 1938 (as amended), after 3 years the insurer cannot void the policy except for proven deliberate fraud.<br /><br />2. Under IRDAI Regulations 2017, claim settlement must be completed within 30 days.</p>
                        <p>Yours faithfully,<br />[YOUR_NAME]<br />Mobile: [YOUR_PHONE]</p>
                    </div>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <strong>Need help filing?</strong> Call {CONTACT.name} at {CONTACT.phone} for a FREE case review.
                </div>
            </div>
        </div>
    );
}
