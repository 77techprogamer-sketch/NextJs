"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import QuoteForm from './QuoteForm';
import { useTranslation } from 'react-i18next';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  insuranceType: string;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, insuranceType }) => {
  const { t } = useTranslation();
  const handleQuoteSuccess = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          {/* Removed DialogTitle */}
        </DialogHeader>
        <QuoteForm insuranceType={insuranceType} onClose={onClose} onSuccess={handleQuoteSuccess} />
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;