"use client";

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { showSuccess, showError } from '@/utils/toast';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next'; // Import useTranslation

interface QuoteFormProps {
  insuranceType: string;
  onClose: () => void;
  onSuccess: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ insuranceType, onClose, onSuccess }) => {
  const { t } = useTranslation(); // Initialize useTranslation
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
      newErrors.name = t('name_required');
      isValid = false;
    }

    // Validate Age or Date of Birth
    if (!formData.age && !formData.dob) {
      newErrors.age = t('age_dob_required');
      newErrors.dob = t('age_dob_required');
      isValid = false;
    }

    // Validate Gender
    if (!formData.gender) {
      newErrors.gender = t('gender_required');
      isValid = false;
    }

    // Validate Mobile Number
    if (!formData.phone.trim()) {
      newErrors.phone = t('phone_required');
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = t('phone_digits_error');
      isValid = false;
    }

    // Validate Sum Assured
    if (!formData.sumAssured.trim()) {
      newErrors.sumAssured = t('sum_assured_required');
      isValid = false;
    } else {
      const numValue = parseInt(formData.sumAssured.replace(/,/g, ''), 10);
      if (isNaN(numValue) || numValue <= 0 || numValue % 100000 !== 0) {
        newErrors.sumAssured = t('sum_assured_error');
        isValid = false;
      }
    }

    // Health Insurance specific validations
    if (isHealthInsurance) {
      if (!formData.healthMembersOption) {
        newErrors.healthMembersOption = t('select_members_for_cover');
        isValid = false;
      }
      if (formData.healthMembersOption !== 'Self') {
        formData.memberDetails.forEach((member, index) => {
          if (!member.age && !member.dob) {
            newErrors[`memberAge-${index}`] = t('age_dob_required', { relationship: member.relationship });
            newErrors[`memberDob-${index}`] = t('age_dob_required', { relationship: member.relationship });
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
        newMemberDetails = [{ relationship: t('wife'), name: t('wife'), age: '', dob: '' }, { relationship: t('kid_1'), name: t('kid_1'), age: '', dob: '' }];
      } else if (value === 'Self with Wife and 2 kids') {
        newMemberDetails = [{ relationship: t('wife'), name: t('wife'), age: '', dob: '' }, { relationship: t('kid_1'), name: t('kid_1'), age: '', dob: '' }, { relationship: t('kid_2'), name: t('kid_2'), age: '', dob: '' }];
      } else if (value === 'Self with Parents') {
        newMemberDetails = [{ relationship: t('father'), name: t('father'), age: '', dob: '' }, { relationship: t('mother'), name: t('mother'), age: '', dob: '' }];
      }
      setFormData(prev => ({ ...prev, memberDetails: newMemberDetails }));
    }
  };

  const handleSubmit = async () => {
    if (!validateAllFields()) {
      showError(t("correct_form_errors"));
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
        showError(t('failed_to_submit_quote'));
      } else {
        showSuccess(t('quote_submitted_successfully'));
        onSuccess();
      }
    } catch (error) {
      console.error('Submission error:', error);
      showError(t('unexpected_error_submission'));
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
        <CardTitle>{t("quote_form_title", { type: insuranceType })}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Name */}
        <div>
          <Label htmlFor="name">{t("your_full_name")}</Label>
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

        {/* Age */}
        <div>
          <Label htmlFor="age">{t("age")}</Label>
          <Input
            id="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            onBlur={() => validateAllFields()}
            placeholder="e.g., 30"
            className={errors.age ? 'border-red-500' : ''}
          />
          <p className="text-sm text-muted-foreground mt-2 mb-2">{t("or")}</p>
          {/* Date of Birth */}
          <Label htmlFor="dob">{t("date_of_birth")}</Label>
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
          <Label>{t("your_gender")}</Label>
          <RadioGroup value={formData.gender} onValueChange={(val) => { handleRadioChange('gender', val); validateAllFields(); }} className="flex space-x-4 mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="gender-male" />
              <Label htmlFor="gender-male">{t("male")}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="gender-female" />
              <Label htmlFor="gender-female">{t("female")}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="gender-other" />
              <Label htmlFor="gender-other">{t("other")}</Label>
            </div>
          </RadioGroup>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <Label htmlFor="phone">{t("mobile_number")}</Label>
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
              <Label>{t("health_members_option")}</Label>
              <RadioGroup value={formData.healthMembersOption} onValueChange={(val) => { handleRadioChange('healthMembersOption', val); validateAllFields(); }} className="flex flex-col space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Self" id="members-self" />
                  <Label htmlFor="members-self">{t("self")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Self with Wife and 1 kid" id="members-wife-1kid" />
                  <Label htmlFor="members-wife-1kid">{t("self_wife_1kid")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Self with Wife and 2 kids" id="members-wife-2kids" />
                  <Label htmlFor="members-wife-2kids">{t("self_wife_2kids")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Self with Parents" id="members-parents" />
                  <Label htmlFor="members-parents">{t("self_parents")}</Label>
                </div>
              </RadioGroup>
              {errors.healthMembersOption && <p className="text-red-500 text-sm mt-1">{errors.healthMembersOption}</p>}
            </div>

            {formData.healthMembersOption !== 'Self' && formData.memberDetails.length > 0 && (
              <div className="space-y-4">
                <p className="font-semibold">{t("provide_member_details")}</p>
                {formData.memberDetails.map((member, index) => (
                  <div key={index} className="border p-3 rounded-md">
                    <Label className="font-medium">{member.relationship}</Label>
                    <Input
                      id="age"
                      type="number"
                      value={member.age}
                      onChange={(e) => handleChange(e, index)}
                      onBlur={() => validateAllFields()}
                      placeholder={t('age')}
                      className={errors[`memberAge-${index}`] ? 'border-red-500' : ''}
                    />
                    <p className="text-sm text-muted-foreground mt-2 mb-2">{t("or")}</p>
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
          <Label htmlFor="sumAssured">{t("sum_assured")}</Label>
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
        <Button variant="outline" onClick={onClose}>{t("cancel")}</Button>
        <Button onClick={handleSubmit}>{t("submit_quote")}</Button>
      </CardFooter>
    </Card>
  );
};

export default QuoteForm;