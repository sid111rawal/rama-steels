'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import React from 'react';

interface ShareButtonProps {
  title: string;
  text: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, text }) => {
  const handleShare = async () => {
    if (typeof window !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
        // Fallback for browsers that might throw an error or if user cancels
        alert('Could not share. You can manually copy the link.');
      }
    } else {
      // Fallback for browsers that don't support navigator.share
      alert('Sharing is not supported on this browser. Please copy the link manually.');
    }
  };

  return (
    <Button variant="outline" onClick={handleShare}>
      <Share2 className="h-4 w-4 mr-2" />
      Share This Article
    </Button>
  );
};

export default ShareButton;
