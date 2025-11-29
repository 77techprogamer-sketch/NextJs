"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast"; // Import toast utilities

interface SocialShareButtonsProps {
  url: string;
  title: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title }) => {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      showSuccess("Link copied to clipboard! You can now paste it on Instagram.");
    } catch (err) {
      console.error('Failed to copy: ', err);
      showError("Failed to copy link. Please try again.");
    }
  };

  return (
    <div className="flex space-x-3 mt-3 justify-center md:justify-start"> {/* Removed bg-white, p-2, rounded-lg, shadow-md */}
      <Button variant="default" size="icon" onClick={shareOnFacebook} aria-label="Share on Facebook">
        <Facebook className="h-5 w-5" />
      </Button>
      <Button variant="default" size="icon" onClick={shareOnTwitter} aria-label="Share on X (Twitter)">
        <Twitter className="h-5 w-5" />
      </Button>
      <Button variant="default" size="icon" onClick={shareOnLinkedIn} aria-label="Share on LinkedIn">
        <Linkedin className="h-5 w-5" />
      </Button>
      <Button variant="default" size="icon" onClick={copyToClipboard} aria-label="Copy link for Instagram">
        <Instagram className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SocialShareButtons;