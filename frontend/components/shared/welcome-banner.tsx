"use client"

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, X, Heart, FileText, TrendingUp, Crown } from 'lucide-react';
import { AuthModal } from '@/components/auth/auth-modal';

export function WelcomeBanner() {
  const { isAuthenticated } = useAuth();
  const [isDismissed, setIsDismissed] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Don't show if user is authenticated or has dismissed
  if (isAuthenticated || isDismissed) return null;

  return (
    <>
      <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
        
        <div className="relative p-6 md:p-8">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2"
            onClick={() => setIsDismissed(true)}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <h3 className="text-2xl font-bold">
                Unlock the Full Experience
              </h3>
              <p className="text-muted-foreground">
                Create a free account to save assessments, add personal notes, generate custom reports, and track your security analysis workflow.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>Save unlimited assessments</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-blue-500" />
                  <span>Add personal notes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span>Track activity history</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Crown className="h-4 w-4 text-primary" />
                  <span>Upgrade for advanced features</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <Button
                size="lg"
                onClick={() => setAuthModalOpen(true)}
                className="w-full md:w-auto"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <AuthModal 
        open={authModalOpen} 
        onOpenChange={setAuthModalOpen}
        defaultMode="signup"
      />
    </>
  );
}
