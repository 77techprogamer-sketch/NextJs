"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";

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

  return (
    <div className="flex space-x-3 mt-6 justify-center md:justify-start">
      <Button variant="outline" size="icon" onClick={shareOnFacebook} aria-label="Share on Facebook">
        <Facebook className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnTwitter} aria-label="Share on X (Twitter)">
        <Twitter className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnLinkedIn} aria-label="Share on LinkedIn">
        <Linkedin className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SocialShareButtons;