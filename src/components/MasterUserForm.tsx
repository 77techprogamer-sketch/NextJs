"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const insuranceTypes = [
    { id: "life_insurance", label: "Life Insurance" },
    { id: "health_insurance", label: "Health Insurance" },
    { id: "term_insurance", label: "Term Insurance" },
    { id: "motor_insurance", label: "Motor Insurance" },
    { id: "sme_insurance", label: "SME / Business Insurance" },
    { id: "travel_insurance", label: "Travel Insurance" },
    { id: "pension_plans", label: "Pension Plans" },
    { id: "ulip_plans", label: "ULIP Plans" },
    { id: "wedding_insurance", label: "Wedding Insurance" },
    { id: "cyber_insurance", label: "Cyber Insurance" },
];

const masterFormSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
    mobileNumber: z.string().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits." }),
    age: z.number().min(18, { message: "You must be at least 18 years old." }).max(100),
    gender: z.enum(['Male', 'Female', 'Other'], { required_error: "Please select a gender." }),
    city: z.string().min(2, { message: "City is required." }),
    pincode: z.string().regex(/^\d{6}$/, { message: "Pincode must be 6 digits." }),
    interests: z.array(z.string()).refine((value) => value.length > 0, {
        message: "You must select at least one insurance interest.",
    }),
    sumAssured: z.number().optional(), // General preferred sum assured
});

type MasterFormValues = z.infer<typeof masterFormSchema>;

const MasterUserForm = () => {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const location = window.location; // Safe to use in client component or useSearchParams if router is available.
    // Since we are not using react-router-dom hooks inside this component (it might be used in pages without router context context strictly, though here it is),
    // but to be safe and simple with standard URLSearchParams:
    const searchParams = new URLSearchParams(location.search);
    const defaultService = searchParams.get('service');

    const initialInterests = defaultService && insuranceTypes.find(t => t.id === defaultService)
        ? [defaultService]
        : [];

    const form = useForm<MasterFormValues>({
        resolver: zodResolver(masterFormSchema),
        defaultValues: {
            fullName: "",
            mobileNumber: "",
            age: undefined,
            gender: "Male",
            city: "",
            pincode: "",
            interests: initialInterests,
            // sumAssured: undefined,
        },
    });

    const onSubmit = async (values: MasterFormValues) => {
        setIsSubmitting(true);
        try {
            const submissions = values.interests.map(interest => ({
                name: values.fullName,
                age: values.age,
                gender: values.gender,
                phone: values.mobileNumber,
                insurance_type: interest,
                intended_sum_insured: values.sumAssured,
                // We are storing address info in metadata or existing fields if schema supports, 
                // strictly adhering to existing 'customers' table schema which takes: name, age, gender, phone, insurance_type, intended_sum_insured.
                // If we want to save city/pincode, we might need a metadata column or just append it to notes if available. 
                // For now, to ensure stability, we will just submit the core fields.
                // Assuming current schema doesn't have address columns, we proceed with core data.
            }));

            const { error } = await supabase
                .from('customers')
                .insert(submissions);

            if (error) throw error;

            toast.success(t("quote_submitted_successfully"), {
                description: "We have received your details for all selected services.",
            });
            form.reset();
        } catch (error) {
            console.error('Submission error:', error);
            toast.error(t("failed_to_submit_quote"));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8 bg-card rounded-xl shadow-lg border border-border">

                {/* Personal Details Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary border-b pb-2">Personal Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
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
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="9876543210" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Age</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="30" {...field} onChange={e => field.onChange(e.target.valueAsNumber)} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gender</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex space-x-4"
                                        >
                                            <FormItem className="flex items-center space-x-2 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Male" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Male</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Female" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Female</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Other" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Other</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Address Details Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary border-b pb-2">Location</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Bangalore" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="pincode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pincode</FormLabel>
                                    <FormControl>
                                        <Input placeholder="560001" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Insurance Interests Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary border-b pb-2">I am interested in</h3>
                    <FormField
                        control={form.control}
                        name="interests"
                        render={() => (
                            <FormItem>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {insuranceTypes.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="interests"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-accent hover:cursor-pointer transition-colors"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value?.includes(item.id)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item.id])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item.id
                                                                            )
                                                                        )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal cursor-pointer w-full">
                                                            {item.label}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex justify-end">
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90 text-white font-bold py-3 px-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            "Get My Free Quotes"
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default MasterUserForm;
