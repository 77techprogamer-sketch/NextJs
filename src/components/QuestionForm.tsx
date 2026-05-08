'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase-client';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { useTranslation } from 'react-i18next';

export default function QuestionForm() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [question, setQuestion] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name || !mobile || !question) {
            toast.error(t('please_fill_all_fields', 'Please fill in all fields.'));
            return;
        }

        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from('user_questions')
                .insert([
                    {
                        name,
                        mobile,
                        question,
                        source_url: window.location.href,
                    }
                ]);

            if (error) {
                console.error('Error inserting question:', error);
                toast.error(t('failed_to_submit_question', 'Failed to submit question. Please try again.'));
            } else {
                toast.success(t('question_submitted_successfully', 'Your question has been submitted successfully! We will get back to you soon.'));
                setName('');
                setMobile('');
                setQuestion('');
            }
        } catch (err) {
            console.error('Unexpected error:', err);
            toast.error(t('failed_to_submit_question', 'An unexpected error occurred. Please try again.'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl my-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-100">{t('leave_a_question', 'Leave a Question')}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{t('have_a_doubt', "Have a doubt? Drop your question below and we'll get back to you.")}</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="qf-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('name_label', 'Name')} <span className="text-red-500">*</span></label>
                            <Input 
                                id="qf-name"
                                type="text" 
                                placeholder={t('name_label', 'Your Name')} 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="qf-mobile" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('mobile_number', 'Mobile Number')} <span className="text-red-500">*</span></label>
                            <Input 
                                id="qf-mobile"
                                type="tel" 
                                placeholder={t('mobile_number', 'Your Mobile Number')} 
                                value={mobile} 
                                onChange={(e) => setMobile(e.target.value)}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="qf-question" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('your_question', 'Your Question')} <span className="text-red-500">*</span></label>
                        <Textarea 
                            id="qf-question"
                            placeholder={t('type_your_question_here', 'Type your question here...')} 
                            value={question} 
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                            rows={4}
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                        {isSubmitting ? t('submitting', 'Submitting...') : t('submit_question', 'Submit Question')}
                    </Button>
                </form>
            </div>
        </div>
    );
}
