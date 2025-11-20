"use client";

import React from "react";
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
import { useSession } from "@/integrations/supabase/SessionContextProvider"; // Import useSession

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional().refine(val => !val || /^\d{10}$/.test(val), {
    message: "Please enter a valid 10-digit phone number.",
  }),
  age: z.coerce.number().min(18, { message: "You must be at least 18 years old." }).optional(),
  insurance_type: z.enum(["Life Insurance", "Term Insurance", "Health Insurance", "Motor Insurance"], {
    required_error: "Please select an insurance type.",
  }),
  vehicle_number: z.string().optional(),
});

const QuoteForm = () => {
  const { user } = useSession(); // Get the current user from the session
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: undefined,
      vehicle_number: "",
    },
  });

  const insuranceType = form.watch("insurance_type");

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const submissionData = {
      ...values,
      vehicle_number: values.insurance_type === 'Motor Insurance' ? values.vehicle_number : null,
      user_id: user?.id || null, // Include user_id if available
    };
    const { error } = await supabase.from("customers").insert([submissionData]);

    if (error) {
      showError("Failed to submit quote request. Please try again.");
      console.error("Error inserting data:", error);
    } else {
      showSuccess("Your quote request has been submitted successfully!, Our advisor will reach out to you shortly");
      form.reset();
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
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {insuranceType === 'Motor Insurance' && (
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
    </Card>
  );
};

export default QuoteForm;