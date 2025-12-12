"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useSession } from '@/integrations/supabase/SessionContextProvider'; // Import useSession

interface QuoteFormProps {
  insuranceType: string;
  onClose: () => void;
  onSuccess: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ insuranceType, onClose, onSuccess }) => {
  const { t } = useTranslation();
  const [showMemberDetails, setShowMemberDetails] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const { user } = useSession(); // Get user from session context

  const formSchema = z.object({
    fullName: z.string().min(1, { message: t("name_required") }),
    age: z.union([z.number().min(1, "Age must be positive").max(120, "Age seems too high").optional(), z.literal(null)]),
    dateOfBirth: z.date().optional(),
    gender: z.enum(['Male', 'Female', 'Other'], { message: t("gender_required") }),
    mobileNumber: z.string().regex(/^\d{10}$/, { message: t("phone_digits_error") }),
    sumAssured: z.union([
      z.number().min(100000, { message: t("sum_assured_error") }).multipleOf(100000, { message: t("sum_assured_error") }).optional(),
      z.literal(null)
    ]),
    healthMembers: z.string().optional(),
    memberDetails: z.record(z.string(), z.object({
      age: z.number().min(1, "Age must be positive").max(120, "Age seems too high").optional(),
      dateOfBirth: z.date().optional(),
      gender: z.enum(['Male', 'Female', 'Other'], { message: t("gender_required") }).optional(),
    })).optional(),
  }).refine((data) => data.age !== undefined || data.dateOfBirth !== undefined, {
    message: t("age_dob_required"),
    path: ["age"],
  }).refine((data) => {
    if (insuranceType !== 'General Inquiry') {
      return data.sumAssured !== undefined && data.sumAssured !== null;
    }
    return true;
  }, {
    message: t("sum_assured_required"),
    path: ["sumAssured"],
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      age: undefined,
      dateOfBirth: undefined,
      gender: undefined,
      mobileNumber: '',
      sumAssured: undefined,
      healthMembers: undefined,
      memberDetails: {},
    },
  });

  useEffect(() => {
    if (insuranceType === 'Health Insurance') {
      setShowMemberDetails(true);
    } else {
      setShowMemberDetails(false);
      form.setValue('healthMembers', undefined);
      form.setValue('memberDetails', {});
    }
  }, [insuranceType, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase
        .from('customers')
        .insert([
          {
            name: values.fullName,
            age: values.age,
            gender: values.gender,
            phone: values.mobileNumber,
            insurance_type: insuranceType,
            intended_sum_insured: values.sumAssured?.toString() || null, // Convert to string
            user_id: user?.id || null, // Pass user_id if authenticated, otherwise null
            // Add other fields as necessary
          },
        ]);

      if (error) {
        throw error;
      }

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
    form.setValue('memberDetails', {}); // Reset member details when selection changes
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
        <h3 className="text-lg font-semibold text-center mb-4">{t("quote_form_title", { type: insuranceType })}</h3>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("your_full_name")}</FormLabel>
              <FormControl>
                <Input placeholder={t("your_full_name")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                    value={field.value === undefined ? '' : field.value}
                    disabled={!!form.watch('dateOfBirth')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="text-muted-foreground">{t("or")}</span>
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
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                        disabled={form.watch('age') !== undefined && form.watch('age') !== null}
                      >
                        {field.value ? format(field.value, "PPP") : <span>{t("date_of_birth")}</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>{t("your_gender")}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Male" />
                    </FormControl>
                    <FormLabel className="font-normal">{t("male")}</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Female" />
                    </FormControl>
                    <FormLabel className="font-normal">{t("female")}</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Other" />
                    </FormControl>
                    <FormLabel className="font-normal">{t("other")}</FormLabel>
                  </FormItem>
                </RadioGroup>
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
                <Input type="tel" placeholder="9876543210" {...field} maxLength={10} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Conditional rendering for Sum Assured */}
        {insuranceType !== 'General Inquiry' && (
          <FormField
            control={form.control}
            name="sumAssured"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("sum_assured")}</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="5,00,000"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                    value={field.value === undefined ? '' : field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {showMemberDetails && (
          <FormField
            control={form.control}
            name="healthMembers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("health_members_option")}</FormLabel>
                <Select onValueChange={handleHealthMembersChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t("select_members_for_cover")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Self">{t("self")}</SelectItem>
                    <SelectItem value="Self with Wife and 1 kid">{t("self_wife_1kid")}</SelectItem>
                    <SelectItem value="Self with Wife and 2 kids">{t("self_wife_2kids")}</SelectItem>
                    <SelectItem value="Self with Parents">{t("self_parents")}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {showMemberDetails && selectedMembers.length > 0 && (
          <div className="space-y-4">
            <p className="font-semibold">{t("provide_member_details")}</p>
            {selectedMembers.map((member, index) => (
              <div key={member} className="border p-3 rounded-md space-y-2">
                <h4 className="font-medium capitalize">{t(member)}</h4>
                <FormField
                  control={form.control}
                  name={`memberDetails.${member}.age`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("age")}</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder={t("age")}
                          {...field}
                          onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                          value={field.value === undefined ? '' : field.value}
                          disabled={!!form.watch(`memberDetails.${member}.dateOfBirth`)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`memberDetails.${member}.dateOfBirth`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("date_of_birth")}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                              disabled={form.watch(`memberDetails.${member}.age`) !== undefined && form.watch(`memberDetails.${member}.age`) !== null}
                            >
                              {field.value ? format(field.value, "PPP") : <span>{t("date_of_birth")}</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`memberDetails.${member}.gender`}
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>{t("your_gender")}</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Male" />
                            </FormControl>
                            <FormLabel className="font-normal">{t("male")}</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Female" />
                            </FormControl>
                            <FormLabel className="font-normal">{t("female")}</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Other" />
                            </FormControl>
                            <FormLabel className="font-normal">{t("other")}</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onClose}>
            {t("cancel")}
          </Button>
          <Button type="submit">{t("submit_quote")}</Button>
        </div>
      </form>
    </Form>
  );
};

export default QuoteForm;