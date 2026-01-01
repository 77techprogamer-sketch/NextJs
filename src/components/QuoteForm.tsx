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
import { formatLabel } from '@/utils/formatText';

interface QuoteFormProps {
  insuranceType: string;
  onClose: () => void;
  onSuccess: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ insuranceType, onClose, onSuccess }) => {
  const { t } = useTranslation();
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const config = FORM_CONFIGS[insuranceType] || DEFAULT_FORM_CONFIG;

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
        schemaShape[field.name] = z.union([z.number().optional(), z.literal(null)]);
      } else {
        schemaShape[field.name] = z.string().optional();
      }
    }
  });

  // Special handling for Health Insurance members details
  if (insuranceType === 'Health Insurance') {
    schemaShape.memberDetails = z.record(z.string(), z.object({
      age: z.number().min(1).max(120).optional(),
      dateOfBirth: z.date().optional(),
      gender: z.enum(['Male', 'Female', 'Other']).optional(),
    })).optional();
  }

  const formSchema = z.object(schemaShape).refine((data) => data.age !== undefined || data.dateOfBirth !== undefined, {
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { error } = await supabase
        .from('customers')
        .insert([
          {
            name: values.fullName,
            age: values.age,
            gender: values.gender,
            phone: values.mobileNumber,
            insurance_type: insuranceType,
            intended_sum_insured: values.sumAssured,
            metadata: values,
          },
        ]);

      if (error) throw error;

      toast.success(t("quote_submitted_successfully"));
      onSuccess();
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
        <h3 className="text-lg font-semibold text-center mb-4">
          {t("quote_form_title", {
            type: config === DEFAULT_FORM_CONFIG
              ? formatLabel(insuranceType)
              : t(insuranceType)
          })}
        </h3>

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
                    <Select onValueChange={field.name === 'healthMembers' ? handleHealthMembersChange : formField.onChange} defaultValue={formField.value}>
                      <SelectTrigger>
                        <SelectValue placeholder={field.placeholderKey ? t(field.placeholderKey) : ""} />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options?.map(opt => (
                          <SelectItem key={opt.value} value={opt.value}>{t(opt.labelKey)}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : field.type === 'radio' ? (
                    <RadioGroup onValueChange={formField.onChange} defaultValue={formField.value} className="flex flex-col space-y-1">
                      {field.options?.map(opt => (
                        <FormItem key={opt.value} className="flex items-center space-x-3 space-y-0">
                          <FormControl><RadioGroupItem value={opt.value} /></FormControl>
                          <FormLabel className="font-normal">{t(opt.labelKey)}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  ) : (
                    <Input
                      type={field.type}
                      placeholder={field.placeholderKey ? t(field.placeholderKey) : ""}
                      {...formField}
                      onChange={(e) => {
                        const val = field.type === 'number' ? (e.target.value ? parseInt(e.target.value) : undefined) : e.target.value;
                        formField.onChange(val);
                      }}
                      value={formField.value ?? ""}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {!config.fields.find(f => f.name === 'age') && (
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
                      value={field.value ?? ""}
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
                          {field.value ? format(field.value, "PPP") : <span>{t("date_of_birth")}</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date > new Date() || date < new Date("1900-01-01")} initialFocus />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {!config.fields.find(f => f.name === 'gender') && (
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>{t("your_gender")}</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="Male" /></FormControl>
                      <FormLabel className="font-normal">{t("male")}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="Female" /></FormControl>
                      <FormLabel className="font-normal">{t("female")}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="Other" /></FormControl>
                      <FormLabel className="font-normal">{t("other")}</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {insuranceType === 'Health Insurance' && selectedMembers.length > 0 && (
          <div className="space-y-4">
            <p className="font-semibold">{t("provide_member_details")}</p>
            {selectedMembers.map((member) => (
              <div key={member} className="border p-3 rounded-md space-y-2">
                <h4 className="font-medium capitalize">{t(member)}</h4>
                <div className="flex gap-2">
                  <FormField
                    control={form.control}
                    name={`memberDetails.${member}.age`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input type="number" placeholder={t("age")} {...field} onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)} value={field.value ?? ""} />
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
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger><SelectValue placeholder={t("gender")} /></SelectTrigger>
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
        )}

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>{t("cancel")}</Button>
          <Button type="submit">{t("submit_quote")}</Button>
        </div>
      </form>
    </Form>
  );
};

export default QuoteForm;