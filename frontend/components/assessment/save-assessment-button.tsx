"use client"

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Assessment } from '@/lib/types';
import { AuthModal } from '@/components/auth/auth-modal';

interface SaveAssessmentButtonProps {
  assessment: Assessment;
}

export function SaveAssessmentButton({ assessment }: SaveAssessmentButtonProps) {
  const { isAuthenticated, savedAssessments, saveAssessment, unsaveAssessment } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  
  const isSaved = savedAssessments.some(s => s.assessmentId === assessment.id);

  const handleClick = () => {
    if (!isAuthenticated) {
      setAuthModalOpen(true);
      return;
    }

    if (isSaved) {
      const savedItem = savedAssessments.find(s => s.assessmentId === assessment.id);
      if (savedItem) {
        unsaveAssessment(savedItem.id);
      }
    } else {
      saveAssessment(assessment.id, assessment.product.name, assessment.product.vendor);
    }
  };

  return (
    <>
      <Button
        variant={isSaved ? "default" : "outline"}
        onClick={handleClick}
        className="gap-2"
      >
        <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
        {isSaved ? 'Saved' : 'Save Assessment'}
      </Button>
      
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  );
}
