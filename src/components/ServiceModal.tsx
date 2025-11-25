"use client";

import React, { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  vehicle_number: z.string().optional().refine(val => !val || /^[a-zA-Z0-9]*$/.test(val), {
    message: "Vehicle number must be alphanumeric.",
  }),
  vehicle_type: z.enum(["Motorbike/Scooter", "Car"], {
    invalid_type_error: "Please select a vehicle type.",
  }).optional(),
  vehicle_usage: z.enum(["Private Use", "Commercial Use"], {
    invalid_type_error: "Please select vehicle usage.",
  }).optional(),
}).superRefine((data, ctx) => {
  // Conditional validation for Motor Insurance specific fields
  if (ctx.parent.insuranceType === 'Motor Insurance') {
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
});

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, insuranceType }) => {
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
    },
    context: { insuranceType }, // Pass insuranceType to the schema context for validation
  });

  // Reset form when modal opens or insuranceType changes
  React.useEffect(() => {
    if (isOpen) {
      form.reset({
        name: "",
        email: "",
        phone: "",
        age: undefined,
        vehicle_number: "",
        vehicle_type: undefined,
        vehicle_usage: undefined,
      });
    }
  }, [isOpen, insuranceType, form]);

  const submitQuote = async (values: z.infer<typeof formSchema>) => {
    const submissionData = {
      ...values,
      insurance_type: insuranceType,
      vehicle_number: insuranceType === 'Motor Insurance' ? values.vehicle_number : null,
      vehicle_type: insuranceType === 'Motor Insurance' ? values.vehicle_type : null,
      vehicle_usage: insuranceType === 'Motor Insurance' ? values.vehicle_usage : null,
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
    setTempFormData(null);
    setShowOldModelConfirmation(false);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (
      insuranceType === 'Motor Insurance' &&
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
    </Dialog>
  );
};

export default ServiceModal;