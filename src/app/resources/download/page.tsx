"use client";

import { Phone, Mail, MapPin, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { contactConfig } from '@/data/contact';
import { useSearchParams } from 'next/navigation';

const CONTACT = {
    name: 'Hari Kotian',
    phone: '+91-9986634506',
    email: 'support@insurancesupport.online',
    website: 'https://insurancesupport.online',
    address: 'Bahubali Nagar, Jalahalli, Bengaluru, Karnataka 560013',
    irdai: '014911D',
    whatsapp: 'https://wa.me/919986634506',
};

interface GuideContent {
    title: string;
    content: React.ReactNode;
}

const GUIDES: Record<string, GuideContent> = {
    'claim-rejection-appeal': {
        title: 'LIC Claim Rejection Appeal Letter Template',
        content: (
            <>
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8 print:break-inside-avoid">
                    <h3 className="font-bold text-lg mb-3 text-primary">Contact Insurance Support</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> {CONTACT.name} — {CONTACT.phone}</div>
                            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> {CONTACT.email}</div>
                        </div>
                        <div className="space-y-2">
                            <div>Website: {CONTACT.website}</div>
                            <div>Address: {CONTACT.address}</div>
                            <div>IRDAI Reg: {CONTACT.irdai}</div>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Appeal Letter Template</h2>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 font-sm space-y-4">
                    <p><strong>To:</strong><br/>The Grievance Redressal Officer<br/>Life Insurance Corporation of India<br/>[Branch/Divisional Office Address]</p>
                    <p><strong>Subject:</strong> Appeal against claim rejection — Policy No. [YOUR_POLICY_NUMBER]</p>
                    <p>Dear Sir/Madam,</p>
                    <p>I am writing to formally appeal the rejection of my insurance claim for Policy No. [POLICY_NUMBER] with Sum Assured of Rs [AMOUNT]. The claim was rejected on [DATE] citing [REJECTION_REASON].</p>
                    <p><strong>Grounds for Appeal:</strong></p>
                    <p>1. Under Section 45 of the Insurance Act, 1938 (as amended), after a policy has been in force for 3 years, the insurer cannot void the policy except for proven deliberate fraud.<br/><br/>
                    2. Under IRDAI (Protection of Policyholders&apos; Interests) Regulations, 2017, claim settlement must be completed within 30 days.<br/><br/>
                    3. The rejection reason is incorrect because [YOUR_COUNTER_ARGUMENT].</p>
                    <p><strong>Supporting Documents:</strong> Original policy bond, proposal form, medical records, rejection letter, identity proof, bank mandate.</p>
                    <p>I request you to reconsider my claim within 15 days. If unresolved, I will escalate to IRDAI Bima Bharosa and the Insurance Ombudsman.</p>
                    <p>Sincerely,<br/>[YOUR_NAME]<br/>Mobile: [YOUR_PHONE]</p>
                </div>
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <strong>Need help filing?</strong> Call {CONTACT.name} at {CONTACT.phone} for a FREE case review.
                </div>
            </>
        ),
    },
    'cashless-checklist': {
        title: 'Health Insurance Cashless Hospitalization Checklist',
        content: (
            <>
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8 print:break-inside-avoid">
                    <h3 className="font-bold text-lg mb-3 text-primary">Contact Insurance Support</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> {CONTACT.name} — {CONTACT.phone}</div>
                            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> {CONTACT.email}</div>
                        </div>
                        <div className="space-y-2">
                            <div>Website: {CONTACT.website}</div>
                            <div>Address: {CONTACT.address}</div>
                            <div>IRDAI Reg: {CONTACT.irdai}</div>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Pre-Admission Checklist</h2>
                <div className="space-y-3 mb-8">
                    {[
                        'Verify hospital is in insurer\'s network list',
                        'Call TPA helpline for pre-authorization (keep reference number)',
                        'Submit pre-authorization form minimum 48 hours before planned admission',
                        'For emergency: submit within 24 hours of admission',
                        'Keep photocopies of all documents submitted',
                        'Note down the name of TPA executive handling your case',
                        'Get written acknowledgment of pre-authorization request'
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg">
                            <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
                <h2 className="text-2xl font-bold mb-4">If Cashless Is Denied</h2>
                <div className="space-y-3 mb-8">
                    {[
                        'Ask for the denial reason in writing from the TPA',
                        'Call the insurer\'s grievance helpline immediately',
                        'Escalate to the hospital\'s insurance desk coordinator',
                        'File a complaint on IRDAI Bima Bharosa portal',
                        'Contact Insurance Support for emergency intervention'
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <span className="text-red-600 font-bold">{i+1}.</span>
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <strong>Emergency cashless denied?</strong> Call {CONTACT.name} at {CONTACT.phone} immediately. We specialize in emergency claim interventions.
                </div>
            </>
        ),
    },
    'policy-revival-guide': {
        title: 'LIC Lapsed Policy Revival Complete Guide',
        content: (
            <>
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8 print:break-inside-avoid">
                    <h3 className="font-bold text-lg mb-3 text-primary">Contact Insurance Support</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> {CONTACT.name} — {CONTACT.phone}</div>
                            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> {CONTACT.email}</div>
                        </div>
                        <div className="space-y-2">
                            <div>Website: {CONTACT.website}</div>
                            <div>Address: {CONTACT.address}</div>
                            <div>IRDAI Reg: {CONTACT.irdai}</div>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Policy Revival Eligibility</h2>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
                    <p className="mb-4"><strong>Your policy can be revived if:</strong></p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                        <li>Less than 5 years since first unpaid premium</li>
                        <li>You can provide health declaration</li>
                        <li>You&apos;re willing to pay back-premiums with interest</li>
                        <li>LIC&apos;s Special Revival Scheme is active (check with us)</li>
                    </ul>
                </div>
                <h2 className="text-2xl font-bold mb-4">Required Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {['Original policy bond', 'Identity proof (Aadhaar / PAN)', 'Address proof', 'Medical test reports (if required)', 'Revival application form', 'Bank details'].map((doc, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg">
                            <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0"></div>
                            <span className="text-sm text-slate-700">{doc}</span>
                        </div>
                    ))}
                </div>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <strong>Important:</strong> LIC&apos;s Special Revival Scheme allows reduced interest rates. Contact {CONTACT.name} at {CONTACT.phone} to check if your policy qualifies.
                </div>
            </>
        ),
    },
    'death-claim-guide': {
        title: 'Death Claim Settlement Guide & Document Checklist',
        content: (
            <>
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8 print:break-inside-avoid">
                    <h3 className="font-bold text-lg mb-3 text-primary">Contact Insurance Support</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> {CONTACT.name} — {CONTACT.phone}</div>
                            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> {CONTACT.email}</div>
                        </div>
                        <div className="space-y-2">
                            <div>Website: {CONTACT.website}</div>
                            <div>Address: {CONTACT.address}</div>
                            <div>IRDAI Reg: {CONTACT.irdai}</div>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Required Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {['Original policy bond', 'Death certificate', 'FIR / PM report (unnatural deaths)', "Nominee's ID proof", "Nominee's address proof", 'Bank mandate form', 'Claim discharge form', 'Medical records', 'Employer certificate', 'Relationship proof'].map((doc, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg">
                            <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0"></div>
                            <span className="text-sm text-slate-700">{doc}</span>
                        </div>
                    ))}
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <strong>Filing a death claim?</strong> Let our team handle it. Call {CONTACT.name} at {CONTACT.phone} for free guidance.
                </div>
            </>
        ),
    },
    'motor-claim-template': {
        title: 'Motor Insurance Claim Template Kit',
        content: (
            <>
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8 print:break-inside-avoid">
                    <h3 className="font-bold text-lg mb-3 text-primary">Contact Insurance Support</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> {CONTACT.name} — {CONTACT.phone}</div>
                            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> {CONTACT.email}</div>
                        </div>
                        <div className="space-y-2">
                            <div>Website: {CONTACT.website}</div>
                            <div>Address: {CONTACT.address}</div>
                            <div>IRDAI Reg: {CONTACT.irdai}</div>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Accident Intimation Letter</h2>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 font-sm space-y-4 mb-8">
                    <p><strong>To:</strong> The Claims Manager, [Insurance Company]</p>
                    <p><strong>Subject:</strong> Claim intimation for vehicle [REG_NUMBER] — Policy No. [POLICY_NUMBER]</p>
                    <p>Dear Sir/Madam,</p>
                    <p>I wish to inform you that my insured vehicle was involved in an accident on [DATE] at [LOCATION]. Nature: [TYPE]. Estimated damage: [MINOR/SEVERE/TOTAL LOSS]. FIR filed at [STATION] No. [NUMBER]. Vehicle at: [GARAGE].</p>
                    <p>I request you to depute a surveyor. Policy valid till [EXPIRY]. Contact: [PHONE] / [EMAIL].</p>
                    <p>Sincerely, [YOUR_NAME]</p>
                </div>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <strong>Got a low offer?</strong> Call {CONTACT.name} at {CONTACT.phone} for a FREE valuation review.
                </div>
            </>
        ),
    },
    'irdai-grievance-guide': {
        title: 'IRDAI Grievance & Ombudsman Filing Guide',
        content: (
            <>
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8 print:break-inside-avoid">
                    <h3 className="font-bold text-lg mb-3 text-primary">Contact Insurance Support</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> {CONTACT.name} — {CONTACT.phone}</div>
                            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> {CONTACT.email}</div>
                        </div>
                        <div className="space-y-2">
                            <div>Website: {CONTACT.website}</div>
                            <div>Address: {CONTACT.address}</div>
                            <div>IRDAI Reg: {CONTACT.irdai}</div>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Escalation Steps</h2>
                <div className="space-y-4 mb-8">
                    <div className="p-4 border border-slate-200 rounded-xl">
                        <p className="font-bold">Step 1: Insurer&apos;s GRO (15 days)</p>
                        <p className="text-sm text-slate-600">File written complaint to Grievance Redressal Officer via email + registered post.</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-xl">
                        <p className="font-bold">Step 2: IRDAI Bima Bharosa (If no response in 15 days)</p>
                        <p className="text-sm text-slate-600">File at bimabharosa.irdai.gov.in</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-xl">
                        <p className="font-bold">Step 3: Insurance Ombudsman (FREE)</p>
                        <p className="text-sm text-slate-600">Find your Ombudsman at www.cioins.co.in — based on your residence.</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-xl">
                        <p className="font-bold">Step 4: Consumer Court</p>
                        <p className="text-sm text-slate-600">Under Consumer Protection Act, 2019 for deficiency in service.</p>
                    </div>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <strong>Need help filing?</strong> Call {CONTACT.name} at {CONTACT.phone} for FREE consultation.
                </div>
            </>
        ),
    },
};

function GuideNotFound() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-slate-900 mb-4">Guide Not Found</h1>
                <p className="text-slate-600 mb-6">The requested guide doesn&apos;t exist or has been moved.</p>
                <a href="/resources/guides" className="text-primary font-bold hover:underline">Browse All Guides</a>
            </div>
        </div>
    );
}

export default function DownloadPage() {
    const searchParams = useSearchParams();
    const guideId = searchParams.get('guide') || '';
    const guide = GUIDES[guideId];

    if (!guide) return <GuideNotFound />;

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-8 print:py-0 print:px-0">
                <div className="text-center mb-8 print:hidden">
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-6">{guide.title}</h1>
                    <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                        <Download className="w-5 h-5" />
                        Print / Save as PDF
                    </button>
                    <p className="text-xs text-slate-500 mt-2">Use Ctrl+P / Cmd+P to save as PDF</p>
                </div>
                {guide.content}
                <div className="bg-slate-900 text-white rounded-2xl p-6 mt-12 print:break-inside-avoid print:mt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="font-bold text-lg mb-2 text-primary">Insurance Support Online</h3>
                            <p className="text-slate-300 text-sm">IRDAI Registered | 25+ Years Experience | Crores Recovered</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-primary"><Phone className="w-4 h-4 text-primary" /> {CONTACT.phone}</a>
                            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-primary"><Mail className="w-4 h-4 text-primary" /> {CONTACT.email}</a>
                            <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><ExternalLink className="w-4 h-4 text-primary" /> {CONTACT.website}</a>
                            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700 text-center text-xs text-slate-400">
                        <p>{CONTACT.address} | IRDAI Reg No: {CONTACT.irdai}</p>
                        <p className="mt-1">© {new Date().getFullYear()} Insurance Support Online. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
