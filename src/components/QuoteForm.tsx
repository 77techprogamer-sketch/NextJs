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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError } from "@/utils/toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  age: z.coerce.number().min(18, { message: "You must be at least 18 years old." }).optional(),
  insurance_type: z.string().optional(),
  vehicle_number: z.string().optional(),
});

const QuoteForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: undefined,
      insurance_type: "",
      vehicle_number: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { error } = await supabase.from("customers").insert([values]);

    if (error) {
      showError("Failed to submit quote request. Please try again.");
      console.error("Error inserting data:", error);
    } else {
      showSuccess("Your quote request has been submitted successfully!");
      form.reset();
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto my-8">
      <CardHeader>
        <CardTitle>Request an Insurance Quote</CardTitle>
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
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="123-456-7890" {...field} />
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
                  <FormLabel>Age (Optional)</FormLabel>
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
                  <FormLabel>Insurance Type (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Auto, Health, Life" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="vehicle_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., ABC-1234" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Submitting..." : "Get a Quote"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;