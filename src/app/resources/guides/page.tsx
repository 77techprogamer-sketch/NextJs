import { Metadata } from 'next';
import Link from 'next/link';
import { Download, FileText, CheckCircle, Shield, Heart, Car, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { contactConfig } from '@/data/contact';
import LeadMagnetGate from '@/components/LeadMagnetGate';

export const metadata: Metadata = {
    title: 'Free Insurance Guides, Checklists & Templates | Insurance Support',
    description: 'Download free insurance guides, checklists, and templates. LIC claim rejection appeal letter template, health insurance cashless checklist, policy revival guide, and more.',
    keywords: [
        'insurance guide PDF',
        'LIC claim rejection letter template',
        'health insurance cashless checklist',
        'insurance claim checklist',
        'LIC policy revival guide',
        'motor insurance claim template',
        'insurance claim appeal letter',
        'free insurance resources India'
    ],
    alternates: {
        canonical: 'https://insurancesupport.online/resources/guides'
    }
};

const leadMagnets = [
    {
        id: 'claim-rejection-appeal',
        icon: FileText,
        title: 'LIC Claim Rejection Appeal Letter Template',
        description: 'A ready-to-use template for drafting a legal appeal against LIC claim rejections. Includes sample language for citing IRDAI regulations, Section 45 protections, and Insurance Ombudsman filing formats.',
        pages: '4 pages',
        format: 'PDF',
        color: 'blue',
        sourceName: 'ClaimRejectionTemplate'
    },
    {
        id: 'cashless-checklist',
        icon: CheckCircle,
        title: 'Health Insurance Cashless Hospitalization Checklist',
        description: 'Complete pre-admission and during-hospitalization checklist to ensure your cashless claim is approved. Includes TPA contact script, required documents list, and emergency escalation steps.',
        pages: '3 pages',
        format: 'PDF',
        color: 'green',
        sourceName: 'CashlessChecklist'
    },
    {
        id: 'policy-revival-guide',
        icon: Heart,
        title: 'LIC Lapsed Policy Revival Complete Guide',
        description: 'Step-by-step guide to reviving your lapsed LIC policy. Includes eligibility calculator, document checklist, revival scheme comparison table, and sample revival application letter.',
        pages: '5 pages',
        format: 'PDF',
        color: 'red',
        sourceName: 'PolicyRevivalGuide'
    },
    {
        id: 'death-claim-guide',
        icon: Shield,
        title: 'Death Claim Settlement Guide & Document Checklist',
        description: 'Complete guide for families filing a death claim. Includes required documents list, FIR/PM report guidelines, bank mandate forms, and common rejection reasons with counter-arguments.',
        pages: '6 pages',
        format: 'PDF',
        color: 'purple',
        sourceName: 'DeathClaimGuide'
    },
    {
        id: 'motor-claim-template',
        icon: Car,
        title: 'Motor Insurance Claim Template Kit',
        description: 'Templates for filing motor insurance claims including: accident intimation letter, surveyor complaint template, total loss valuation dispute letter, and MACT filing checklist.',
        pages: '5 pages',
        format: 'PDF',
        color: 'orange',
        sourceName: 'MotorClaimTemplate'
    },
    {
        id: 'irdai-grievance-guide',
        icon: HelpCircle,
        title: 'IRDAI Grievance & Ombudsman Filing Guide',
        description: 'Complete guide to filing grievances with IRDAI Bima Bharosa and Insurance Ombudsman. Includes complaint templates, jurisdiction details, escalation timelines, and success tips.',
        pages: '4 pages',
        format: 'PDF',
        color: 'teal',
        sourceName: 'IRDAIGrievanceGuide'
    }
];

const colorMap: Record<string, { bg: string; icon: string; button: string }> = {
    blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', icon: 'text-blue-600 dark:text-blue-400', button: 'bg-blue-600 hover:bg-blue-700' },
    green: { bg: 'bg-green-50 dark:bg-green-900/20', icon: 'text-green-600 dark:text-green-400', button: 'bg-green-600 hover:bg-green-700' },
    red: { bg: 'bg-red-50 dark:bg-red-900/20', icon: 'text-red-600 dark:text-red-400', button: 'bg-red-600 hover:bg-red-700' },
    purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', icon: 'text-purple-600 dark:text-purple-400', button: 'bg-purple-600 hover:bg-purple-700' },
    orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', icon: 'text-orange-600 dark:text-orange-400', button: 'bg-orange-600 hover:bg-orange-700' },
    teal: { bg: 'bg-teal-50 dark:bg-teal-900/20', icon: 'text-teal-600 dark:text-teal-400', button: 'bg-teal-600 hover:bg-teal-700' },
};

export default function LeadMagnetsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6">
                        <Download className="w-4 h-4" />
                        Free Downloadable Resources
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Insurance Guides, Checklists & Templates
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Download our free insurance resources created by IRDAI-certified professionals with 25+ years of experience. Each guide is designed to help you navigate complex insurance processes with confidence.
                    </p>
                </div>
            </section>

            {/* Lead Magnets Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {leadMagnets.map((magnet) => {
                            const Icon = magnet.icon;
                            const colors = colorMap[magnet.color] || colorMap.blue;
                            return (
                                <div key={magnet.id} className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6 md:p-8">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
                                                <Icon className={`w-6 h-6 ${colors.icon}`} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{magnet.title}</h3>
                                                <div className="flex items-center gap-3 text-xs text-slate-500">
                                                    <span>{magnet.pages}</span>
                                                    <span>•</span>
                                                    <span>{magnet.format}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{magnet.description}</p>
                                        <LeadMagnetGate
                                            title={magnet.title}
                                            description={magnet.description}
                                            downloadUrl={`/resources/download?guide=${magnet.id}`}
                                            buttonText={`Download ${magnet.title.split(' ').slice(0, 3).join(' ')}`}
                                            sourceName={magnet.sourceName}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Need Personalized Help?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                        Our guides are a great start, but every insurance case is different. Get a free 15-minute consultation with Hari Kotian to discuss your specific situation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={`tel:${contactConfig.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
                            <Phone className="w-5 h-5" />
                            Call +91-9986634506
                        </a>
                        <Link href="/claim-recovery" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                            Get Free Case Review
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
