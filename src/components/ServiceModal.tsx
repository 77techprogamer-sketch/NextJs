"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError } from "@/utils/toast";
import { useSession } from "@/integrations/supabase/SessionContextProvider";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  insuranceType: string;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional().refine(val => !val || /^\d{10}$/.test(val), {
    message: "Please enter a valid 10-digit phone number.",
  }),
  age: z.coerce.number().min(18, { message: "You must be at least 18 years old." }).optional(),
});

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, insuranceType }) => {
  const { user } = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const submissionData = {
      ...values,
      insurance_type: insuranceType,
      user_id: user?.id || null,
    };

    const { error } = await supabase.from("customers").insert([submissionData]);

    if (error) {
      showError("Failed to submit your request. Please try again.");
      console.error("Error inserting data:", error);
    } else {
      showSuccess(`Your request for ${insuranceType} has been submitted successfully! Our advisor will reach out to you shortly.`);
      form.reset();
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get {insuranceType} Quote</DialogTitle>
          <DialogDescription>
            Please provide your details, and we'll connect you with an expert for {insuranceType}.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
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
            <Button
              type="submit"
              className="w-full transition-transform duration-200 hover:scale-[1.02]"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : `Get ${insuranceType} Quote`}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;