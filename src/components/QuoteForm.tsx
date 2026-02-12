"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { FORM_CONFIGS, DEFAULT_FORM_CONFIG } from '@/config/forms';
import { formatLabel, normalizeUIValue } from '@/utils/formatText';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteFormProps {
  insuranceType: string;
  onClose?: () => void;
  onSuccess?: () => void;
  initialData?: any;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ insuranceType, onClose, onSuccess, initialData }) => {
  const { t } = useTranslation();
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const configKey = insuranceType.replace(/-/g, '_');
  const config = FORM_CONFIGS[configKey] || FORM_CONFIGS[insuranceType] || DEFAULT_FORM_CONFIG;

  // Build schema dynamically based on config
  const schemaShape: Record<string, z.ZodTypeAny> = {
    fullName: z.string().min(1, { message: t("name_required") }),
    mobileNumber: z.string().regex(/^\d{10}$/, { message: t("phone_digits_error") }),
    age: z.union([z.number().min(1).max(120).optional(), z.literal(null)]),
    dateOfBirth: z.date().optional(),
    gender: z.enum(['Male', 'Female', 'Other'], { message: t("gender_required") }),
  };

  config.fields.forEach(field => {
    if (!schemaShape[field.name]) {
      if (field.type === 'number') {
        if (field.required) {
          schemaShape[field.name] = z.number({ message: t("field_required") }).min(1, { message: t("field_required") });
        } else {
          schemaShape[field.name] = z.union([z.number().optional(), z.literal(null)]);
        }
      } else {
        if (field.required) {
          schemaShape[field.name] = z.string().min(1, { message: t("field_required") });
        } else {
          schemaShape[field.name] = z.string().optional();
        }
      }
    }
  });

  // Special handling for Health Insurance members details
  if (insuranceType === 'health_insurance') {
    schemaShape.memberDetails = z.record(z.string(), z.object({
      age: z.number().min(1).max(120).optional(),
      dateOfBirth: z.date().optional(),
      gender: z.enum(['Male', 'Female', 'Other']).optional(),
    })).optional();
  }

  // Handle suppression of default validations
  if (config.suppressDefaultFields?.includes('age') && config.suppressDefaultFields?.includes('dateOfBirth')) {
    schemaShape.age = z.any().optional();
    schemaShape.dateOfBirth = z.any().optional();
  }

  if (config.suppressDefaultFields?.includes('gender')) {
    schemaShape.gender = z.string().optional();
  }

  const formSchema = z.object(schemaShape).refine((data) => {
    // Skip age/dob validation if suppressed
    if (config.suppressDefaultFields?.includes('age') && config.suppressDefaultFields?.includes('dateOfBirth')) {
      return true;
    }
    return data.age !== undefined || data.dateOfBirth !== undefined;
  }, {
    message: t("age_dob_required"),
    path: ["age"],
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      mobileNumber: '',
      age: undefined,
      dateOfBirth: undefined,
      gender: 'Male',
      memberDetails: {},
      ...initialData
    } as any,
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Create a payload that includes dynamic fields
      const payload: any = {
        name: values.fullName,
        age: values.age,
        gender: values.gender,
        phone: values.mobileNumber,
        insurance_type: insuranceType,
        intended_sum_insured: values.sumAssured || values.loanAmount || values.investmentAmount || values.totalBudget || values.monthlyInvestment,
      };

      // Extract specific fields to put into the 'details' JSON column
      const details: Record<string, any> = {};

      // Fields that are already mapped to specific columns in the 'customers' table
      // Note: 'sumAssured' is mapped to 'intended_sum_insured'
      const mappedColumnFields = ['fullName', 'mobileNumber', 'age', 'dateOfBirth', 'gender', 'sumAssured'];

      Object.keys(values).forEach(key => {
        // If the field is not one of the standard mapped columns, add it to details
        if (!mappedColumnFields.includes(key)) {
          details[key] = values[key];
        }
      });

      // Add details to payload if not empty
      if (Object.keys(details).length > 0) {
        payload.details = details;
      }

      const { error } = await supabase
        .from('customers')
        .insert([payload]);

      if (error) throw error;

      toast.success(t("quote_submitted_successfully"));
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(t("failed_to_submit_quote"));
    }
  };

  const handleHealthMembersChange = (value: string) => {
    form.setValue('healthMembers', value);
    let newSelectedMembers: string[] = [];
    if (value === 'Self with Wife and 1 kid') {
      newSelectedMembers = ['wife', 'kid_1'];
    } else if (value === 'Self with Wife and 2 kids') {
      newSelectedMembers = ['wife', 'kid_1', 'kid_2'];
    } else if (value === 'Self with Parents') {
      newSelectedMembers = ['father', 'mother'];
    }
    setSelectedMembers(newSelectedMembers);
    form.setValue('memberDetails', {});
  };


  return (
    <Form {...form}>
      <motion.form
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-6 glass-card rounded-2xl border-white/20"
      >
        <div className="text-center space-y-3 mb-8">
          <motion.h2 layout className="text-xl md:text-2xl font-bold tracking-tight text-gradient">
            {t("quote_form_title", {
              type: config === DEFAULT_FORM_CONFIG
                ? formatLabel(insuranceType)
                : normalizeUIValue(t(insuranceType))
            })}
          </motion.h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{t("full_name")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("enter_full_name")}
                    {...field}
                    value={(field.value as string) || ''}
                    className="h-12 bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700/50 focus:border-primary/50 transition-all rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobileNumber"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{t("mobile_number")}</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder={t("enter_mobile_number")}
                    {...field}
                    value={(field.value as string) || ''}
                    maxLength={10}
                    className="h-12 bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700/50 focus:border-primary/50 transition-all rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {config.fields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: formField }) => (
                <FormItem className={cn(
                  "space-y-1.5",
                  (field.type === 'radio' || field.name === 'healthMembers' || field.name === 'company_name' || field.name === 'business_name') ? "md:col-span-2" : ""
                )}>
                  <FormLabel className="font-semibold text-slate-800 dark:text-slate-200 text-sm leading-tight inline-block mb-0.5">
                    {t(field.labelKey)}
                  </FormLabel>
                  <FormControl>
                    {field.type === 'select' ? (
                      <Select
                        onValueChange={field.name === 'healthMembers' ? handleHealthMembersChange : formField.onChange}
                        defaultValue={(formField as any).value}
                      >
                        <SelectTrigger className="h-12 bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700/50 rounded-xl" aria-label={t(field.labelKey)}>
                          <SelectValue placeholder={field.placeholderKey ? t(field.placeholderKey) : ""} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map(opt => (
                            <SelectItem key={opt.value} value={opt.value}>{t(opt.labelKey)}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : field.type === 'radio' ? (
                      <RadioGroup onValueChange={formField.onChange} defaultValue={(formField as any).value} className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                        {field.options?.map(opt => (
                          <FormItem key={opt.value} className="space-y-0">
                            <FormControl>
                              <div className="relative h-full">
                                <RadioGroupItem value={opt.value} className="peer sr-only" />
                                <FormLabel className="flex h-full items-center justify-center p-3.5 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:text-primary cursor-pointer transition-all duration-200 text-center text-sm font-medium">
                                  {t(opt.labelKey)}
                                </FormLabel>
                              </div>
                            </FormControl>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    ) : (
                      <Input
                        type={field.type}
                        placeholder={field.placeholderKey ? t(field.placeholderKey) : ""}
                        {...formField}
                        className="h-12 bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700/50 rounded-xl focus-visible:ring-primary/40"
                        onChange={(e) => {
                          const val = field.type === 'number' ? (e.target.value ? parseInt(e.target.value) : undefined) : e.target.value;
                          formField.onChange(val);
                        }}
                        value={(formField as any).value ?? ""}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {(!config.suppressDefaultFields?.includes('age') && !config.fields.find(f => f.name === 'age')) && (
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-11 gap-4 items-end bg-slate-50/50 dark:bg-slate-800/10 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/50">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem className="sm:col-span-5 space-y-1.5">
                    <FormLabel className="font-semibold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wider opacity-70">{t("age")}</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder={t("age")}
                        {...field}
                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                        value={(field as any).value ?? ""}
                        disabled={!!form.watch('dateOfBirth')}
                        className="h-11 bg-white/80 dark:bg-slate-900/80 rounded-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex sm:col-span-1 justify-center pb-3 text-slate-400 font-bold text-xs">{t("or").toUpperCase()}</div>
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="sm:col-span-5 space-y-1.5">
                    <FormLabel className="font-semibold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wider opacity-70">{t("date_of_birth")}</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full h-11 pl-3 text-left font-normal bg-white/80 dark:bg-slate-900/80 rounded-lg border-slate-200 dark:border-slate-700", !field.value && "text-muted-foreground")}
                            disabled={form.watch('age') !== undefined && form.watch('age') !== null}
                          >
                            {field.value ? format(field.value as any, "PPP") : <span className="text-sm opacity-60">{t("date_of_birth")}</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 rounded-xl overflow-hidden border-none shadow-2xl" align="start">
                        <Calendar mode="single" selected={field.value as any} onSelect={field.onChange} disabled={(date) => date > new Date() || date < new Date("1900-01-01")} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {(!config.suppressDefaultFields?.includes('gender') && !config.fields.find(f => f.name === 'gender')) && (
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="md:col-span-2 space-y-3 mt-1">
                  <FormLabel className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{t("your_gender")}</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={(field as any).value} className="grid grid-cols-3 gap-3">
                      {["Male", "Female", "Other"].map((gender) => (
                        <FormItem key={gender} className="space-y-0">
                          <FormControl>
                            <div className="relative">
                              <RadioGroupItem value={gender} className="peer sr-only" />
                              <FormLabel className="flex h-11 items-center justify-center rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800/60 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:text-primary cursor-pointer transition-all duration-200 text-sm font-medium">
                                {t(gender.toLowerCase())}
                              </FormLabel>
                            </div>
                          </FormControl>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <AnimatePresence>
            {insuranceType === 'health_insurance' && selectedMembers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:col-span-2 space-y-4 overflow-hidden pt-4"
              >
                <div className="flex items-center gap-2">
                  <div className="h-[1px] flex-1 bg-slate-100 dark:bg-slate-800 text-sm" />
                  <p className="font-semibold text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest">{t("provide_member_details")}</p>
                  <div className="h-[1px] flex-1 bg-slate-100 dark:bg-slate-800" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedMembers.map((member) => (
                    <div key={member} className="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl bg-slate-50/30 dark:bg-slate-900/30 space-y-3 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors" />
                      <h3 className="font-bold capitalize text-primary text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {t(member)}
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <FormField
                          control={form.control}
                          name={`memberDetails.${member}.age`}
                          render={({ field }) => (
                            <FormItem className="space-y-1">
                              <FormControl>
                                <Input type="number" placeholder={t("age")} {...field} onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)} value={(field as any).value ?? ""} className="h-10 bg-white/80 dark:bg-slate-800/80 rounded-lg text-sm" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`memberDetails.${member}.gender`}
                          render={({ field }) => (
                            <FormItem className="space-y-1">
                              <Select onValueChange={field.onChange} defaultValue={(field as any).value}>
                                <SelectTrigger className="h-10 bg-white/80 dark:bg-slate-800/80 rounded-lg text-sm" aria-label={t("gender")}><SelectValue placeholder={t("gender")} /></SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Male">{t("male")}</SelectItem>
                                  <SelectItem value="Female">{t("female")}</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={`flex flex-col sm:flex-row ${onClose ? 'sm:justify-end' : 'justify-center w-full'} gap-3 pt-10 mt-4 border-t border-slate-100 dark:border-slate-800/60`}>
          {onClose && (
            <Button type="button" variant="ghost" onClick={onClose} className="px-8 h-12 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-semibold order-2 sm:order-1">
              {t("cancel")}
            </Button>
          )}
          <Button type="submit" className={`px-10 h-12 rounded-xl bg-primary hover:bg-primary/95 text-white shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 font-bold tracking-wide active:scale-[0.98] order-1 sm:order-2 ${!onClose ? 'w-full' : 'min-w-[180px]'}`}>
            {t("submit_quote")}
          </Button>
        </div>
      </motion.form>
    </Form>
  );

};

export default QuoteForm;