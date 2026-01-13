"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast"; // Import toast utilities
import { useTranslation } from 'react-i18next';

interface SocialShareButtonsProps {
  url: string;
  title: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title }) => {
  const { t } = useTranslation();
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnWhatsApp = () => {
    const text = `${title} - ${url}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      showSuccess(t("link_copied"));
    } catch (err) {
      console.error('Failed to copy: ', err);
      showError(t("failed_to_copy"));
    }
  };

  return (
    <div className="flex space-x-3 mt-3 justify-center"> {/* Removed md:justify-start to keep it centered */}
      <Button
        variant="default"
        size="icon"
        onClick={shareOnFacebook}
        aria-label={t("share_on_facebook")}
        className="bg-[#1877F2] hover:bg-[#166fe5] text-white border-0"
      >
        <Facebook className="h-5 w-5" />
      </Button>
      <Button
        variant="default"
        size="icon"
        onClick={shareOnTwitter}
        aria-label={t("share_on_twitter")}
        className="bg-[#000000] hover:bg-[#333333] text-white border-0"
      >
        <Twitter className="h-5 w-5" />
      </Button>
      <Button
        variant="default"
        size="icon"
        onClick={shareOnLinkedIn}
        aria-label={t("share_on_linkedin")}
        className="bg-[#0077B5] hover:bg-[#006399] text-white border-0"
      >
        <Linkedin className="h-5 w-5" />
      </Button>
      <Button
        variant="default"
        size="icon"
        onClick={shareOnWhatsApp}
        aria-label={t("share_on_whatsapp")}
        className="bg-[#25D366] hover:bg-[#128C7E] text-white border-0"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
      <Button
        variant="default"
        size="icon"
        onClick={copyToClipboard}
        aria-label={t("copy_link_instagram")}
        className="bg-[#E4405F] hover:bg-[#d62d4a] text-white border-0"
      >
        <Instagram className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SocialShareButtons;