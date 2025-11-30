"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import QuoteForm from './QuoteForm'; // Import the new QuoteForm component

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  insuranceType: string;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, insuranceType }) => {
  const handleQuoteSuccess = () => {
    onClose(); // Close the modal on successful submission
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Your {insuranceType} Quote</DialogTitle>
          {/* Removed DialogDescription */}
        </DialogHeader>
        <QuoteForm insuranceType={insuranceType} onClose={onClose} onSuccess={handleQuoteSuccess} />
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;