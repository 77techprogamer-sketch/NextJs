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
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dob: '',
    gender: '',
    phone: '',
    sumAssured: '',
    healthMembersOption: '',
    memberDetails: [] as { relationship: string; name: string; age: string; dob: string }[],
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isHealthInsurance = insuranceType === 'Health Insurance';

  const validateAllFields = () => {
    let isValid = true;
    const newErrors: { [key: string]: string } = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    // Validate Age or Date of Birth
    if (!formData.age && !formData.dob) {
      newErrors.age = 'Age or Date of Birth is required.';
      newErrors.dob = 'Age or Date of Birth is required.';
      isValid = false;
    }

    // Validate Gender
    if (!formData.gender) {
      newErrors.gender = 'Gender is required.';
      isValid = false;
    }

    // Validate Mobile Number
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile Number is required.';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Mobile Number must be 10 digits.';
      isValid = false;
    }

    // Validate Sum Assured
    if (!formData.sumAssured.trim()) {
      newErrors.sumAssured = 'Sum Assured is required.';
      isValid = false;
    } else {
      const numValue = parseInt(formData.sumAssured.replace(/,/g, ''), 10);
      if (isNaN(numValue) || numValue <= 0 || numValue % 100000 !== 0) {
        newErrors.sumAssured = 'Sum Assured must be a positive number and a multiple of 1,00,000.';
        isValid = false;
      }
    }

    // Health Insurance specific validations
    if (isHealthInsurance) {
      if (!formData.healthMembersOption) {
        newErrors.healthMembersOption = 'Please select members for cover.';
        isValid = false;
      }
      if (formData.healthMembersOption !== 'Self') {
        formData.memberDetails.forEach((member, index) => {
          if (!member.age && !member.dob) {
            newErrors[`memberAge-${index}`] = `Age or Date of Birth for ${member.relationship} is required.`;
            newErrors[`memberDob-${index}`] = `Age or Date of Birth for ${member.relationship} is required.`;
            isValid = false;
          }
        });
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { id, value } = e.target;
    if (index !== undefined) {
      const updatedMembers = [...formData.memberDetails];
      updatedMembers[index] = { ...updatedMembers[index], [id]: value };
      setFormData(prev => ({ ...prev, memberDetails: updatedMembers }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleRadioChange = (id: string, value: string) => {
    if (id === 'gender') {
      setFormData(prev => ({ ...prev, gender: value }));
    } else if (id === 'healthMembersOption') {
      setFormData(prev => ({ ...prev, healthMembersOption: value }));

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

  const handleSubmit = async () => {
    if (!validateAllFields()) {
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

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Get a Quote for {insuranceType}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Name */}
        <div>
          <Label htmlFor="name">Your Full Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => validateAllFields()} // Validate on blur
            placeholder="e.g., John Doe"
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Age or Date of Birth */}
        <div>
          <Label htmlFor="age">Your Age or Date of Birth</Label>
          <Input
            id="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            onBlur={() => validateAllFields()}
            placeholder="e.g., 30"
            className={errors.age ? 'border-red-500' : ''}
          />
          <p className="text-sm text-muted-foreground mt-2 mb-2">OR</p>
          <Input
            id="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            onBlur={() => validateAllFields()}
            className={errors.dob ? 'border-red-500' : ''}
          />
          {(errors.age || errors.dob) && <p className="text-red-500 text-sm mt-1">{errors.age || errors.dob}</p>}
        </div>

        {/* Gender */}
        <div>
          <Label>Your Gender</Label>
          <RadioGroup value={formData.gender} onValueChange={(val) => { handleRadioChange('gender', val); validateAllFields(); }} className="flex space-x-4 mt-2">
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

        {/* Mobile Number */}
        <div>
          <Label htmlFor="phone">Mobile Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={() => validateAllFields()}
            placeholder="e.g., 9876543210"
            maxLength={10}
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Health Insurance specific fields */}
        {isHealthInsurance && (
          <>
            <div>
              <Label>How many members for Health Insurance?</Label>
              <RadioGroup value={formData.healthMembersOption} onValueChange={(val) => { handleRadioChange('healthMembersOption', val); validateAllFields(); }} className="flex flex-col space-y-2 mt-2">
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

            {formData.healthMembersOption !== 'Self' && formData.memberDetails.length > 0 && (
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
                      onBlur={() => validateAllFields()}
                      placeholder={`Age of ${member.relationship}`}
                      className={errors[`memberAge-${index}`] ? 'border-red-500' : ''}
                    />
                    <p className="text-sm text-muted-foreground mt-2 mb-2">OR</p>
                    <Input
                      id="dob"
                      type="date"
                      value={member.dob}
                      onChange={(e) => handleChange(e, index)}
                      onBlur={() => validateAllFields()}
                      className={errors[`memberDob-${index}`] ? 'border-red-500' : ''}
                    />
                    {(errors[`memberAge-${index}`] || errors[`memberDob-${index}`]) && <p className="text-red-500 text-sm mt-1">{errors[`memberAge-${index}`] || errors[`memberDob-${index}`]}</p>}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Sum Assured */}
        <div>
          <Label htmlFor="sumAssured">Sum Assured (in multiples of 1,00,000)</Label>
          <Input
            id="sumAssured"
            type="text"
            value={formatSumAssured(formData.sumAssured)}
            onChange={(e) => {
              const rawValue = e.target.value.replace(/,/g, '');
              setFormData(prev => ({ ...prev, sumAssured: rawValue }));
            }}
            onBlur={() => validateAllFields()}
            placeholder="e.g., 5,00,000"
            className={errors.sumAssured ? 'border-red-500' : ''}
          />
          {errors.sumAssured && <p className="text-red-500 text-sm mt-1">{errors.sumAssured}</p>}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit Quote</Button>
      </CardFooter>
    </Card>
  );
};

export default QuoteForm;