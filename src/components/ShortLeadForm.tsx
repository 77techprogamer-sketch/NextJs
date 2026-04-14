"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/integrations/supabase/client';
import { leadService } from '@/lib/leadService';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const shortLeadSchema = z.object({
    fullName: z.string().min(2, { message: "Name required" }),
    mobileNumber: z.string().regex(/^\d{10}$/, { message: "10-digit mobile required" }),
    requirement: z.string().min(1, { message: "Please select a requirement" }),
});

type ShortLeadValues = z.infer<typeof shortLeadSchema>;

interface Props {
    source?: string;
    city?: string;
    service?: string;
}

const ShortLeadForm = ({ source = 'short_hero_form', city, service }: Props) => {
    const { t } = useTranslation();

    const form = useForm<ShortLeadValues>({
        resolver: zodResolver(shortLeadSchema),
        defaultValues: {
            fullName: '',
            mobileNumber: '',
            requirement: service || '', // Pre-fill service if provided
        },
    });

    const onSubmit = async (values: ShortLeadValues) => {
        try {
            const payload = {
                name: values.fullName,
                phone: values.mobileNumber,
                insurance_type: values.requirement,
                details: { 
                    source,
                    city,
                    service 
                }
            };

            await leadService.submitLead(payload, source);

            // GA4 Lead Event
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'generate_lead', {
                    service_type: values.requirement,
                    form_location: 'hero_short_form'
                });
            }

            toast.success(t("quote_submitted_successfully"));
            form.reset();
        } catch (error) {
            console.error('Submission error:', error);
            toast.error(t("failed_to_submit_quote"));
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <Form {...form}>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl relative overflow-hidden"
                >
                    {/* Subtle Glow Background */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{t("short_lead_form.title")}</h3>
                        <p className="text-white/60 text-xs font-medium">{t("short_lead_form.subtitle")}</p>
                    </div>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormControl>
                                        <Input
                                            placeholder={t("short_lead_form.name_label")}
                                            {...field}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-accent/50 transition-all"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-[10px] text-red-400" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="mobileNumber"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormControl>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm font-bold">+91</span>
                                            <Input
                                                type="tel"
                                                placeholder={t("short_lead_form.mobile_label")}
                                                {...field}
                                                maxLength={10}
                                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 pl-12 rounded-xl focus:border-accent/50 transition-all"
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-[10px] text-red-400" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="requirement"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-accent/50 transition-all">
                                                <SelectValue placeholder={t("short_lead_form.requirement_label")} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-slate-900 border-white/10 text-white">
                                            <SelectItem value="life_insurance">{t("short_lead_form.life_insurance")}</SelectItem>
                                            <SelectItem value="health_insurance">{t("short_lead_form.health_insurance")}</SelectItem>
                                            <SelectItem value="motor_insurance">{t("short_lead_form.motor_insurance")}</SelectItem>
                                            <SelectItem value="policy_revival">{t("short_lead_form.policy_revival")}</SelectItem>
                                            <SelectItem value="loan_help">{t("short_lead_form.loan_help")}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="text-[10px] text-red-400" />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full h-14 bg-accent hover:bg-accent/90 text-primary font-black text-lg rounded-2xl shadow-[0_0_30px_-5px_rgba(234,179,8,0.4)] transition-all group mt-2"
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                            ) : (
                                <>
                                    {t("short_lead_form.submit_button")}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>

                        <div className="flex items-center justify-center gap-2 mt-4 opacity-60">
                            <ShieldCheck className="w-3 h-3 text-accent" />
                            <span className="text-[9px] font-bold text-white uppercase tracking-tighter">
                                {t("short_lead_form.privacy_note")}
                            </span>
                        </div>
                    </form>
                </motion.div>
            </Form>
        </div>
    );
};

export default ShortLeadForm;
