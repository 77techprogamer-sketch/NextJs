"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError } from "@/utils/toast";
import { useSession } from "@/integrations/supabase/SessionContextProvider";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional().refine(val => !val || /^\d{10}$/.test(val), {
    message: "Please enter a valid 10-digit phone number.",
  }),
  age: z.coerce.number().min(18, { message: "You must be at least 18 years old." }).optional(),
  insurance_type: z.enum(["Life Insurance", "Term Insurance", "Health Insurance", "Motor Insurance", "Home Insurance", "Travel Insurance", "Fire Insurance"], {
    required_error: "Please select an insurance type.",
  }),
  vehicle_number: z.string().optional().refine(val => !val || /^[a-zA-Z0-9]*$/.test(val), {
    message: "Vehicle number must be alphanumeric.",
  }),
  vehicle_type: z.enum(["Motorbike/Scooter", "Car"], {
    invalid_type_error: "Please select a vehicle type.",
  }).optional(),
  vehicle_usage: z.enum(["Private Use", "Commercial Use"], {
    invalid_type_error: "Please select vehicle usage.",
  }).optional(),
  source_location: z.string().optional(),
  destination_location: z.string().optional(),
  visit_duration: z.string().optional(),
  purpose_of_visit: z.string().optional(),
  number_of_people: z.coerce.number().min(1, { message: "Must be at least 1 person." }).optional(),
  type_of_property: z.string().optional(),
  intended_sum_insured: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.insurance_type === 'Motor Insurance') {
    if (!data.vehicle_type) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Vehicle type is required for Motor Insurance.",
        path: ['vehicle_type'],
      });
    }
    if (!data.vehicle_usage) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Vehicle usage is required for Motor Insurance.",
        path: ['vehicle_usage'],
      });
    }
  }

  if (data.insurance_type === 'Travel Insurance') {
    if (!data.source_location) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Source location is required for Travel Insurance.",
        path: ['source_location'],
      });
    }
    if (!data.destination_location) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Destination location is required for Travel Insurance.",
        path: ['destination_location'],
      });
    }
    if (!data.visit_duration) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Duration of visit is required for Travel Insurance.",
        path: ['visit_duration'],
      });
    }
    if (!data.purpose_of_visit) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Purpose of visit is required for Travel Insurance.",
        path: ['purpose_of_visit'],
      });
    }
    if (!data.number_of_people) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Number of people is required for Travel Insurance.",
        path: ['number_of_people'],
      });
    }
  }

  if (data.insurance_type === 'Fire Insurance') {
    if (!data.type_of_property) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Type of property is required for Fire Insurance.",
        path: ['type_of_property'],
      });
    }
    if (!data.intended_sum_insured) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Intended sum insured is required for Fire Insurance.",
        path: ['intended_sum_insured'],
      });
    }
  }
});

const QuoteForm = () => {
  const { user } = useSession();
  const [showOldModelConfirmation, setShowOldModelConfirmation] = useState(false);
  const [tempFormData, setTempFormData] = useState<z.infer<typeof formSchema> | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: undefined,
      vehicle_number: "",
      vehicle_type: undefined,
      vehicle_usage: undefined,
      source_location: "",
      destination_location: "",
      visit_duration: "",
      purpose_of_visit: "",
      number_of_people: undefined,
      type_of_property: "",
      intended_sum_insured: "",
    },
  });

  const insuranceType = form.watch("insurance_type");

  const submitQuote = async (values: z.infer<typeof formSchema>) => {
    const submissionData = {
      ...values,
      // Conditionally set motor insurance fields to null if not motor insurance
      vehicle_number: values.insurance_type === 'Motor Insurance' ? values.vehicle_number : null,
      vehicle_type: values.insurance_type === 'Motor Insurance' ? values.vehicle_type : null,
      vehicle_usage: values.insurance_type === 'Motor Insurance' ? values.vehicle_usage : null,
      // Conditionally set travel insurance fields to null if not travel insurance
      source_location: values.insurance_type === 'Travel Insurance' ? values.source_location : null,
      destination_location: values.insurance_type === 'Travel Insurance' ? values.destination_location : null,
      visit_duration: values.insurance_type === 'Travel Insurance' ? values.visit_duration : null,
      purpose_of_visit: values.insurance_type === 'Travel Insurance' ? values.purpose_of_visit : null,
      number_of_people: values.insurance_type === 'Travel Insurance' ? values.number_of_people : null,
      // Conditionally set fire insurance fields to null if not fire insurance
      type_of_property: values.insurance_type === 'Fire Insurance' ? values.type_of_property : null,
      intended_sum_insured: values.insurance_type === 'Fire Insurance' ? values.intended_sum_insured : null,
      user_id: user?.id || null,
    };
    const { error } = await supabase.from("customers").insert([submissionData]);

    if (error) {
      showError("Failed to submit quote request. Please try again.");
      console.error("Error inserting data:", error);
    } else {
      showSuccess("Your quote request has been submitted successfully! Our advisor will reach out to you shortly");
      form.reset();
    }
    setTempFormData(null);
    setShowOldModelConfirmation(false);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (
      values.insurance_type === 'Motor Insurance' &&
      values.vehicle_number &&
      values.vehicle_number.length > 0 &&
      values.vehicle_number.length < 10
    ) {
      setTempFormData(values);
      setShowOldModelConfirmation(true);
    } else {
      await submitQuote(values);
    }
  };

  const handleOldModelConfirm = async () => {
    if (tempFormData) {
      await submitQuote(tempFormData);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader>
        <CardTitle>Get a Free Insurance Quote</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
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
                    <Input type="number" placeholder="25" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="insurance_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Insurance Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an insurance type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Life Insurance">Life Insurance</SelectItem>
                      <SelectItem value="Term Insurance">Term Insurance</SelectItem>
                      <SelectItem value="Health Insurance">Health Insurance</SelectItem>
                      <SelectItem value="Motor Insurance">Motor Insurance</SelectItem>
                      <SelectItem value="Home Insurance">Home Insurance</SelectItem>
                      <SelectItem value="Travel Insurance">Travel Insurance</SelectItem>
                      <SelectItem value="Fire Insurance">Fire Insurance</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {insuranceType === 'Motor Insurance' && (
              <>
                <FormField
                  control={form.control}
                  name="vehicle_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Motorbike/Scooter">Motorbike/Scooter</SelectItem>
                          <SelectItem value="Car">Car</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vehicle_usage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Usage</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle usage" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Private Use">Private Use</SelectItem>
                          <SelectItem value="Commercial Use">Commercial Use</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vehicle_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Number</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., ABC-1234" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {insuranceType === 'Travel Insurance' && (
              <>
                <FormField
                  control={form.control}
                  name="source_location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Source Location</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Mumbai" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="destination_location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Destination Location</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Paris" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="visit_duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration of Visit</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 7 days, 2 weeks" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="purpose_of_visit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purpose of Visit</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Leisure, Business" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="number_of_people"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of People</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 2" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {insuranceType === 'Fire Insurance' && (
              <>
                <FormField
                  control={form.control}
                  name="type_of_property"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Property</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Residential, Commercial" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="intended_sum_insured"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Intended Sum Insured</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 50 Lakhs, 1 Crore" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <Button
              type="submit"
              className="w-full transition-transform duration-200 hover:scale-[1.02]"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Get a Quote"}
            </Button>
          </form>
        </Form>
      </CardContent>

      <AlertDialog open={showOldModelConfirmation} onOpenChange={setShowOldModelConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Vehicle Model</AlertDialogTitle>
            <AlertDialogDescription>
              The vehicle number you entered is less than 10 characters. Is this an old model vehicle?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowOldModelConfirmation(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleOldModelConfirm}>Yes, Old Model</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
};

export default QuoteForm;