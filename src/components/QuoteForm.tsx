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
}

const QuoteForm: React.FC<QuoteFormProps> = ({ insuranceType, onClose, onSuccess }) => {
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
          schemaShape[field.name] = z.number({ required_error: t("field_required") }).min(1, { message: t("field_required") });
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
      // eslint-disable-next-line
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
        className="space-y-6 p-6 bg-white dark:bg-gray-950 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
      >
        <motion.h2 layout className="text-lg font-semibold text-center mb-4">
          {t("quote_form_title", {
            type: config === DEFAULT_FORM_CONFIG
              ? formatLabel(insuranceType)
              : normalizeUIValue(t(insuranceType))
          })}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("full_name")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("enter_full_name")}
                    {...field}
                    value={(field.value as string) || ''}
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
              <FormItem>
                <FormLabel>{t("mobile_number")}</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder={t("enter_mobile_number")}
                    {...field}
                    value={(field.value as string) || ''}
                    maxLength={10}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {config.fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{t(field.labelKey)}</FormLabel>
                <FormControl>
                  {field.type === 'select' ? (
                    <Select onValueChange={field.name === 'healthMembers' ? handleHealthMembersChange : formField.onChange} defaultValue={(formField as any).value}>
                      <SelectTrigger aria-label={t(field.labelKey)}>
                        <SelectValue placeholder={field.placeholderKey ? t(field.placeholderKey) : ""} />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options?.map(opt => (
                          <SelectItem key={opt.value} value={opt.value}>{t(opt.labelKey)}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : field.type === 'radio' ? (
                    <RadioGroup onValueChange={formField.onChange} defaultValue={(formField as any).value} className="grid grid-cols-2 gap-4">
                      {field.options?.map(opt => (
                        <FormItem key={opt.value}>
                          <FormControl>
                            <div className="relative">
                              <RadioGroupItem value={opt.value} className="peer sr-only" />
                              <FormLabel className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-muted bg-popover hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:text-primary cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center">
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
                      className="h-11 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:shadow-[0_0_10px_rgba(var(--primary),0.2)]"
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
          <div className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>{t("age")}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={t("age")}
                      {...field}
                      onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                      value={(field as any).value ?? ""}
                      disabled={!!form.watch('dateOfBirth')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span className="text-muted-foreground self-end pb-2">{t("or")}</span>
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>{t("date_of_birth")}</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          disabled={form.watch('age') !== undefined && form.watch('age') !== null}
                        >
                          {field.value ? format(field.value as any, "PPP") : <span>{t("date_of_birth")}</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
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
              <FormItem className="space-y-3">
                <FormLabel>{t("your_gender")}</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={(field as any).value} className="grid grid-cols-3 gap-3">
                    {["Male", "Female", "Other"].map((gender) => (
                      <FormItem key={gender}>
                        <FormControl>
                          <div className="relative">
                            <RadioGroupItem value={gender} className="peer sr-only" />
                            <FormLabel className="flex flex-col items-center justify-center p-3 rounded-lg border-2 border-muted bg-popover hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:text-primary cursor-pointer transition-all duration-200 text-sm font-medium">
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
              className="space-y-4 overflow-hidden"
            >
              <p className="font-semibold">{t("provide_member_details")}</p>
              {selectedMembers.map((member) => (
                <div key={member} className="border p-3 rounded-md space-y-2">
                  <h3 className="font-medium capitalize">{t(member)}</h3>
                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name={`memberDetails.${member}.age`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input type="number" placeholder={t("age")} {...field} onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)} value={(field as any).value ?? ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`memberDetails.${member}.gender`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <Select onValueChange={field.onChange} defaultValue={(field as any).value}>
                            <SelectTrigger aria-label={t("gender")}><SelectValue placeholder={t("gender")} /></SelectTrigger>
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
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`flex ${onClose ? 'justify-end' : 'justify-center w-full'} gap-3 pt-6`}>
          {onClose && (
            <Button type="button" variant="outline" onClick={onClose} className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {t("cancel")}
            </Button>
          )}
          <Button type="submit" className={`bg-gradient-to-r from-primary to-purple-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${!onClose ? 'w-full' : ''}`}>
            {t("submit_quote")}
          </Button>
        </div>
      </motion.form>
    </Form>
  );
};

export default QuoteForm;