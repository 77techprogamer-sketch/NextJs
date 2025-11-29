"use client";

import React, { useState, useMemo } from 'react';
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
    healthMembersOption: '', // New field for health insurance
    memberDetails: [] as { relationship: string; name: string; age: string; dob: string }[], // New field for health insurance
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isHealthInsurance = insuranceType === 'Health Insurance';

  // Define total steps dynamically
  const totalSteps = useMemo(() => {
    let baseSteps = 5; // Name, Age/DOB, Gender, Phone, Sum Assured
    if (isHealthInsurance) {
      baseSteps += 1; // Add step for healthMembersOption
      // Additional steps for memberDetails are handled dynamically within a single step
    }
    return baseSteps;
  }, [isHealthInsurance]);

  const validateField = (fieldName: string, value: string, index?: number) => {
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
      case 'healthMembersOption':
        if (isHealthInsurance && !value) error = 'Please select members for cover.';
        break;
      case 'memberAge':
      case 'memberDob':
        if (index !== undefined) {
          const member = formData.memberDetails[index];
          if (!member.age && !member.dob) error = `Age or Date of Birth for ${member.relationship} is required.`;
        }
        break;
      default:
        break;
    }
    if (index !== undefined) {
      setErrors(prev => ({ ...prev, [`${fieldName}-${index}`]: error }));
    } else {
      setErrors(prev => ({ ...prev, [fieldName]: error }));
    }
    return error === '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { id, value } = e.target;
    if (index !== undefined) {
      const updatedMembers = [...formData.memberDetails];
      updatedMembers[index] = { ...updatedMembers[index], [id]: value };
      setFormData(prev => ({ ...prev, memberDetails: updatedMembers }));
      validateField(id, value, index);
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
      validateField(id, value);
    }
  };

  const handleRadioChange = (id: string, value: string) => {
    if (id === 'gender') {
      setFormData(prev => ({ ...prev, gender: value }));
      validateField('gender', value);
    } else if (id === 'healthMembersOption') {
      setFormData(prev => ({ ...prev, healthMembersOption: value }));
      validateField('healthMembersOption', value);

      // Initialize memberDetails based on selection
      let newMemberDetails: { relationship: string; name: string; age: string; dob: string }[] = [];
      if (value === 'Self with Wife and 1 kid') {
        newMemberDetails = [{ relationship: 'Wife', name: 'Wife', age: '', dob: '' }, { relationship: 'Kid 1', name: 'Kid 1', age: '', dob: '' }];
      } else if (value === 'Self with Wife and 2 kids') {
        newMemberDetails = [{ relationship: 'Wife', name: 'Wife', age: '', dob: '' }, { relationship: 'Kid 1', name: 'Kid 1', age: '', dob: '' }, { relationship: 'Kid 2', name: 'Kid 2', age: '', dob: '' }];
      } else if (value === 'Self with Parents') {
        newMemberDetails = [{ relationship: 'Father', name: 'Father', age: '', dob: '' }, { relationship: 'Mother', name: 'Mother', age: '', dob: '' }];
      }
      setFormData(prev => ({ ...prev, memberDetails: newMemberDetails }));
    }
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
    } else if (isHealthInsurance && step === 4) { // Health specific step
      isValid = validateField('healthMembersOption', formData.healthMembersOption);
    } else if (isHealthInsurance && step === 5 && formData.healthMembersOption !== 'Self') { // Member details step
      formData.memberDetails.forEach((member, index) => {
        const memberValid = validateField('memberAge', member.age, index) || validateField('memberDob', member.dob, index);
        if (!memberValid) isValid = false;
      });
    } else if (step === (isHealthInsurance ? (formData.healthMembersOption !== 'Self' ? 6 : 5) : 4)) { // Phone step
      isValid = validateField('phone', formData.phone);
    } else if (step === (isHealthInsurance ? (formData.healthMembersOption !== 'Self' ? 7 : 6) : 5)) { // Sum Assured step
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
      const payload: any = {
        name: formData.name,
        age: formData.age ? parseInt(formData.age, 10) : null,
        gender: formData.gender,
        phone: formData.phone,
        insurance_type: insuranceType,
        intended_sum_insured: formData.sumAssured.replace(/,/g, ''),
        user_id: user?.id || null,
      };

      if (isHealthInsurance) {
        payload.number_of_people = formData.healthMembersOption;
        payload.member_details = formData.memberDetails.map(m => ({
          relationship: m.relationship,
          name: m.name,
          age: m.age ? parseInt(m.age, 10) : null,
          dob: m.dob,
        }));
      }

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
    return num.toLocaleString('en-IN');
  };

  // Dynamic step rendering logic
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
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
        );
      case 2:
        return (
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
        );
      case 3:
        return (
          <div>
            <Label>Your Gender</Label>
            <RadioGroup value={formData.gender} onValueChange={(val) => handleRadioChange('gender', val)} className="flex space-x-4 mt-2">
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
        );
      case 4:
        if (isHealthInsurance) {
          return (
            <div>
              <Label>How many members for Health Insurance?</Label>
              <RadioGroup value={formData.healthMembersOption} onValueChange={(val) => handleRadioChange('healthMembersOption', val)} className="flex flex-col space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Self" id="members-self" />
                  <Label htmlFor="members-self">Self</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Self with Wife and 1 kid" id="members-wife-1kid" />
                  <Label htmlFor="members-wife-1kid">Self with Wife and 1 kid</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Self with Wife and 2 kids" id="members-wife-2kids" />
                  <Label htmlFor="members-wife-2kids">Self with Wife and 2 kids</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Self with Parents" id="members-parents" />
                  <Label htmlFor="members-parents">Self with Parents</Label>
                </div>
              </RadioGroup>
              {errors.healthMembersOption && <p className="text-red-500 text-sm mt-1">{errors.healthMembersOption}</p>}
            </div>
          );
        }
        // Fall through to phone if not health insurance
      case (isHealthInsurance ? 5 : 4): // Phone step
        if (isHealthInsurance && formData.healthMembersOption !== 'Self' && step === 5) {
          return (
            <div className="space-y-4">
              <p className="font-semibold">Please provide details for:</p>
              {formData.memberDetails.map((member, index) => (
                <div key={index} className="border p-3 rounded-md">
                  <Label className="font-medium">{member.relationship}</Label>
                  <Input
                    id="age"
                    type="number"
                    value={member.age}
                    onChange={(e) => handleChange(e, index)}
                    placeholder={`Age of ${member.relationship}`}
                    className={errors[`memberAge-${index}`] ? 'border-red-500' : ''}
                  />
                  <p className="text-sm text-muted-foreground mt-2 mb-2">OR</p>
                  <Input
                    id="dob"
                    type="date"
                    value={member.dob}
                    onChange={(e) => handleChange(e, index)}
                    className={errors[`memberDob-${index}`] ? 'border-red-500' : ''}
                  />
                  {(errors[`memberAge-${index}`] || errors[`memberDob-${index}`]) && <p className="text-red-500 text-sm mt-1">{errors[`memberAge-${index}`] || errors[`memberDob-${index}`]}</p>}
                </div>
              ))}
            </div>
          );
        }
        return (
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
        );
      case (isHealthInsurance ? (formData.healthMembersOption !== 'Self' ? 6 : 5) : 5): // Sum Assured step
        return (
          <div>
            <Label htmlFor="sumAssured">Sum Assured (in multiples of 1,00,000)</Label>
            <Input
              id="sumAssured"
              type="text"
              value={formatSumAssured(formData.sumAssured)}
              onChange={(e) => {
                const rawValue = e.target.value.replace(/,/g, '');
                setFormData(prev => ({ ...prev, sumAssured: rawValue }));
                validateField('sumAssured', rawValue);
              }}
              placeholder="e.g., 5,00,000"
              className={errors.sumAssured ? 'border-red-500' : ''}
            />
            {errors.sumAssured && <p className="text-red-500 text-sm mt-1">{errors.sumAssured}</p>}
          </div>
        );
      default:
        return null;
    }
  };

  // Determine current step for navigation
  const currentStepIndex = useMemo(() => {
    let current = step;
    if (isHealthInsurance) {
      if (step > 3 && formData.healthMembersOption === 'Self') {
        current += 1; // Skip member details step if only self
      }
    }
    return current;
  }, [step, isHealthInsurance, formData.healthMembersOption]);

  const maxStep = useMemo(() => {
    let max = 5; // Base steps
    if (isHealthInsurance) {
      max += 1; // Add healthMembersOption step
      if (formData.healthMembersOption !== 'Self') {
        max += 1; // Add memberDetails step
      }
    }
    return max;
  }, [isHealthInsurance, formData.healthMembersOption]);


  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Get a Quote for {insuranceType}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {renderStepContent()}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        {step > 1 && (
          <Button variant="outline" onClick={handleBack}>Back</Button>
        )}
        {currentStepIndex < maxStep ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit Quote</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuoteForm;