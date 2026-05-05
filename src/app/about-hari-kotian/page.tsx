import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Award, History, CheckCircle2, Phone, Mail, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { contactConfig } from '@/data/contact';

export const metadata: Metadata = {
    title: 'Hari Kotian | IRDAI Certified Insurance Expert & Claim Specialist',
    description: 'Meet Hari Kotian, IRDAI-certified insurance advisor with 25+ years of experience and 15,000+ clients served. Specializing in LIC claim recovery, policy revival, and health insurance disputes across India.',
    keywords: ['Hari Kotian Insurance', 'Insurance Expert Bangalore', 'LIC Claim Specialist', 'Certified Insurance Advisor India', 'IRDAI Advisor India'],
    alternates: {
        canonical: 'https://insurancesupport.online/about-hari-kotian',
    }
};

const advisorSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
        '@type': 'Person',
        '@id': 'https://insurancesupport.online/#advisor',
        name: 'Hari Kotian',
        givenName: 'Hari',
        familyName: 'Kotian',
        jobTitle: 'Certified Insurance Advisor & Claim Recovery Specialist',
        description: 'IRDAI-certified insurance advisor based in Bangalore with 25+ years of experience, serving over 15,000 clients across India in LIC, health, motor, and life insurance.',
        url: 'https://insurancesupport.online/about-hari-kotian',
        telephone: contactConfig.phoneFull,
        email: contactConfig.email,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bangalore',
            addressRegion: 'Karnataka',
            addressCountry: 'IN'
        },
        worksFor: {
            '@type': 'Organization',
            '@id': 'https://insurancesupport.online/#organization',
            name: 'Insurance Support',
            url: 'https://insurancesupport.online'
        },
        hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Certification',
            name: 'IRDAI Insurance Advisor License',
            recognizedBy: {
                '@type': 'Organization',
                name: 'Insurance Regulatory and Development Authority of India'
            }
        },
        knowsAbout: [
            'Life Insurance',
            'Health Insurance',
            'Motor Insurance',
            'Term Insurance',
            'LIC Policy Revival',
            'Death Claim Settlement',
            'Pension Plans',
            'Insurance Claim Recovery',
            'IRDAI Grievance Escalation',
            'Policy Bond Recovery'
        ],
        sameAs: [
            'https://www.instagram.com/insurancesupport',
            'https://insurancesupport.online/about-hari-kotian'
        ],
        "subjectOf": [
            {
                "@type": "Article",
                "headline": "LIC New Jeevan Anand (Plan 715) Guide 2026",
                "url": "https://insurancesupport.online/resources/guides/lic-jeevan-anand"
            },
            {
                "@type": "Article",
                "headline": "ICICI iHealth Mastery Guide",
                "url": "https://insurancesupport.online/resources/guides/icici-ihealth"
            }
        ]
    }
};



const ExpertProfilePage = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(advisorSchema) }}
            />
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Bio */}
                    <div className="flex-1">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
                                <div className="w-48 h-48 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0 border-4 border-primary/10 overflow-hidden relative shadow-inner">
                                    <Image 
                                        src="/team/hari-kotian.png" 
                                        alt="Hari Kotian - Insurance Expert" 
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="text-center md:text-left">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                                        <ShieldCheck className="w-4 h-4" />
                                        IRDAI Certified Advisor
                                    </div>
                                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Hari Kotian</h1>
                                    <p className="text-xl text-slate-600 font-medium mb-6">Founder & Lead Claims Specialist at Insurance Support</p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                                            <MapPin className="w-4 h-4" />
                                            Bangalore, India
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                                            <History className="w-4 h-4" />
                                            25+ Years Experience
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-slate prose-lg max-w-none">
                                <h2 className="text-2xl font-bold mb-4">Professional Background</h2>
                                <p>
                                    With over two decades of dedicated service in the Indian insurance industry, I have navigated the complexities of life, health, and motor insurance for over 15,000 families and corporate clients. My mission has always been to simplify insurance and ensure that policyholders receive what they were promised.
                                </p>
                                <p>
                                    I specialize in <strong>rejected claim recovery</strong> and <strong>lapsed policy revival</strong>, where my deep understanding of IRDAI regulations and insurer internal processes allows me to bridge the gap between technical rejection and successful settlement.
                                </p>

                                <h2 className="text-2xl font-bold mt-10 mb-6 text-slate-900">Career Highlights & Expertise</h2>
                                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                                    {[
                                        { title: "IRDAI Certification", desc: "Licensed and compliant with the latest Insurance Regulatory and Development Authority of India standards." },
                                        { title: "₹50 Cr+ Claims Managed", desc: "Expertly handled death claims, critical illness settlements, and major motor recovery cases." },
                                        { title: "LIC Specialization", desc: "Profound knowledge of LIC revival schemes, maturity settlements, and policy loan facilitation." },
                                        { title: "Grievance Advocacy", desc: "Successfully represented hundreds of policyholders in Insurance Ombudsman hearings across India." }
                                    ].map((item, i) => (
                                        <div key={i} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <h2 className="text-2xl font-bold mt-10 mb-4">My Philosophy</h2>
                                <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-slate-700 bg-slate-50 rounded-r-xl">
                                    &quot;Insurance is not just a contract; it&apos;s a promise to a family&apos;s future. My job is to make sure that promise is kept, especially when times are tough.&quot;
                                </blockquote>

                                <div className="mt-12 p-8 bg-primary/5 rounded-[2rem] border border-primary/10">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <Award className="w-5 h-5 text-primary" />
                                        Latest Authority & Expert Insights
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { title: "LIC Jeevan Anand (715) Deep-Dive", slug: "lic-jeevan-anand" },
                                            { title: "LIC Jeevan Lakshya (933) Analysis", slug: "lic-jeevan-lakshya" },
                                            { title: "ICICI iHealth Critical Factors", slug: "icici-ihealth" },
                                            { title: "Motor Insurance claim Masterclass", slug: "icici-motor-insurance" }
                                        ].map((guide) => (
                                            <Link 
                                                key={guide.slug}
                                                href={`/resources/guides/${guide.slug}`}
                                                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
                                            >
                                                <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">{guide.title}</span>
                                                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="mt-6 text-center">
                                        <Link href="/resources" className="text-xs font-bold text-primary hover:underline uppercase tracking-widest">
                                            View All 50+ Expert Guides
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact & CTA */}
                    <div className="w-full lg:w-[400px]">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                                <h3 className="text-2xl font-bold mb-6">Expert Consultation</h3>
                                <p className="text-slate-400 mb-8 text-sm">Need a second opinion on a claim or a complex policy? Connect with me directly for a professional audit.</p>
                                <div className="space-y-4 mb-8">
                                    <a href={`tel:${contactConfig.phoneFull}`} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                        <Phone className="w-5 h-5 text-primary" />
                                        <div>
                                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Directly</div>
                                            <div className="font-medium">+91 99866 34506</div>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                                        <Mail className="w-5 h-5 text-primary" />
                                        <div>
                                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Professional Email</div>
                                            <div className="font-medium">{contactConfig.email}</div>
                                        </div>
                                    </div>
                                </div>
                                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg h-14" asChild>
                                    <Link href="/contact">Book a Consultation</Link>
                                </Button>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-4">Quick Case Analysis</h3>
                                <QuoteForm insuranceType="expert_consultation" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertProfilePage;
