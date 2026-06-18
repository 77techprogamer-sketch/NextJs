"use client";

import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const NewsletterSection: React.FC = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        
        try {
            // Simulated API call - In a real app, integrate with your email marketing service
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            setEmail('');
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="py-16 sm:py-24 bg-primary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <ScrollReveal animation="slide-right">
                            <div className="text-left space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wider uppercase mb-2 border border-accent/20">
                                    <Mail className="w-4 h-4" />
                                    <span>{t('newsletter_badge', 'Stay Informed')}</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                                    {t('newsletter_title', 'Don\'t let a small mistake ruin your claim.')}
                                </h2>
                                <p className="text-gray-300 text-lg">
                                    {t('newsletter_desc', 'Join 25,000+ subscribers getting weekly tips on navigating complex insurance claims and avoiding rejections.')}
                                </p>
                                
                                <ul className="space-y-2 mt-6">
                                    {['Insider claim settlement tactics', 'Alerts on IRDAI rule changes', 'Free downloadable checklists'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="slide-left" delay={0.2}>
                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl">
                                {status === 'success' ? (
                                    <div className="text-center space-y-4 py-8">
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {t('newsletter_success_title', 'You\'re on the list!')}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {t('newsletter_success_desc', 'Keep an eye on your inbox for our next insider update.')}
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2 text-left">
                                            <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                                {t('email_address', 'Email Address')}
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 dark:text-white"
                                                    placeholder={t('email_placeholder', 'you@example.com')}
                                                />
                                            </div>
                                        </div>
                                        
                                        <Button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-bold rounded-xl flex items-center justify-center gap-2 group"
                                        >
                                            {status === 'loading' ? (
                                                <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    {t('subscribe_button', 'Send Me Updates')}
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </Button>
                                        
                                        {status === 'error' && (
                                            <p className="text-red-500 text-sm text-center mt-2">
                                                {t('newsletter_error', 'Something went wrong. Please try again.')}
                                            </p>
                                        )}
                                        
                                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                                            {t('spam_promise', 'We respect your privacy. Unsubscribe at any time.')}
                                        </p>
                                    </form>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
