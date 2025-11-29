"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { showSuccess, showError } from '@/utils/toast';
import { supabase } from '@/integrations/supabase/client';

interface QuoteFormProps {
  insuranceType: string;
  onClose: () => void;
  onSuccess: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ insuranceType, onClose, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dob: '',
    gender: '',
    phone: '',
    sumAssured: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (fieldName: string, value: string) => {
    let error = '';
    switch (fieldName) {
      case 'name':
        if (!value.trim()) error = 'Name is required.';
        break;
      case 'age':
      case 'dob':
        if (!formData.age && !formData.dob) error = 'Age or Date of Birth is required.';
        break;
      case 'gender':
        if (!value) error = 'Gender is required.';
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Mobile Number is required.';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Mobile Number must be 10 digits.';
        }
        break;
      case 'sumAssured':
        if (!value.trim()) {
          error = 'Sum Assured is required.';
        } else {
          const numValue = parseInt(value.replace(/,/g, ''), 10);
          if (isNaN(numValue) || numValue <= 0 || numValue % 100000 !== 0) {
            error = 'Sum Assured must be a positive number and a multiple of 1,00,000.';
          }
        }
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [fieldName]: error }));
    return error === '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    validateField(id, value);
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, gender: value }));
    validateField('gender', value);
  };

  const handleNext = () => {
    let isValid = true;
    const currentErrors: { [key: string]: string } = {};

    if (step === 1) {
      isValid = validateField('name', formData.name);
    } else if (step === 2) {
      isValid = validateField('age', formData.age) || validateField('dob', formData.dob);
      if (!isValid) currentErrors.age = currentErrors.dob = 'Age or Date of Birth is required.';
    } else if (step === 3) {
      isValid = validateField('gender', formData.gender);
    } else if (step === 4) {
      isValid = validateField('phone', formData.phone);
    } else if (step === 5) {
      isValid = validateField('sumAssured', formData.sumAssured);
    }

    if (isValid) {
      setErrors({}); // Clear errors if valid
      setStep(prev => prev + 1);
    } else {
      setErrors(currentErrors);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
    setErrors({}); // Clear errors when going back
  };

  const handleSubmit = async () => {
    let isValid = validateField('sumAssured', formData.sumAssured);

    if (!isValid) {
      showError("Please correct the errors in the form.");
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      const payload = {
        name: formData.name,
        age: formData.age ? parseInt(formData.age, 10) : null,
        // dob: formData.dob, // Supabase table doesn't have DOB, using age for now
        gender: formData.gender,
        phone: formData.phone,
        insurance_type: insuranceType,
        intended_sum_insured: formData.sumAssured.replace(/,/g, ''), // Store as number string or convert to int if column type allows
        user_id: user?.id || null, // Link to user if logged in
      };

      const { error } = await supabase.from('customers').insert([payload]);

      if (error) {
        console.error('Error submitting quote:', error);
        showError('Failed to submit quote. Please try again.');
      } else {
        showSuccess('Quote submitted successfully!');
        onSuccess();
      }
    } catch (error) {
      console.error('Submission error:', error);
      showError('An unexpected error occurred during submission.');
    }
  };

  const formatSumAssured = (value: string) => {
    const num = parseInt(value.replace(/,/g, ''), 10);
    if (isNaN(num)) return value;
    return num.toLocaleString('en-IN'); // Format with Indian locale for lakhs/crores
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Get a Quote for {insuranceType}</CardTitle>
        <p className="text-sm text-muted-foreground">Step {step} of 5</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {step === 1 && (
          <div>
            <Label htmlFor="name">Your Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., John Doe"
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
        )}

        {step === 2 && (
          <div>
            <Label htmlFor="age">Your Age or Date of Birth</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g., 30"
              className={errors.age ? 'border-red-500' : ''}
            />
            <p className="text-sm text-muted-foreground mt-2 mb-2">OR</p>
            <Input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className={errors.dob ? 'border-red-500' : ''}
            />
            {(errors.age || errors.dob) && <p className="text-red-500 text-sm mt-1">{errors.age || errors.dob}</p>}
          </div>
        )}

        {step === 3 && (
          <div>
            <Label>Your Gender</Label>
            <RadioGroup value={formData.gender} onValueChange={handleRadioChange} className="flex space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="gender-male" />
                <Label htmlFor="gender-male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="gender-female" />
                <Label htmlFor="gender-female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="gender-other" />
                <Label htmlFor="gender-other">Other</Label>
              </div>
            </RadioGroup>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          </div>
        )}

        {step === 4 && (
          <div>
            <Label htmlFor="phone">Mobile Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g., 9876543210"
              maxLength={10}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        )}

        {step === 5 && (
          <div>
            <Label htmlFor="sumAssured">Sum Assured (in multiples of 1,00,000)</Label>
            <Input
              id="sumAssured"
              type="text" // Use text to allow custom formatting
              value={formatSumAssured(formData.sumAssured)}
              onChange={(e) => {
                const rawValue = e.target.value.replace(/,/g, ''); // Remove commas for internal storage
                setFormData(prev => ({ ...prev, sumAssured: rawValue }));
                validateField('sumAssured', rawValue);
              }}
              placeholder="e.g., 5,00,000"
              className={errors.sumAssured ? 'border-red-500' : ''}
            />
            {errors.sumAssured && <p className="text-red-500 text-sm mt-1">{errors.sumAssured}</p>}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        {step > 1 && (
          <Button variant="outline" onClick={handleBack}>Back</Button>
        )}
        {step < 5 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit Quote</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuoteForm;