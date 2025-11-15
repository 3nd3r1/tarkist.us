"use client"

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/lib/auth-context';
import { Shield, Mail, Lock, User, Sparkles, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: 'login' | 'signup';
}

export function AuthModal({ open, onOpenChange, defaultMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login, signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        if (!name.trim()) {
          setError('Please enter your name');
          setLoading(false);
          return;
        }
        await signup(email, password, name);
      }
      
      onOpenChange(false);
      setEmail('');
      setPassword('');
      setName('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: Shield, text: 'Save unlimited assessments' },
    { icon: Sparkles, text: 'Create custom comparison reports' },
    { icon: Check, text: 'Add personal notes & tags' },
    { icon: ArrowRight, text: 'Export reports in multiple formats' },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-0 gap-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Features */}
          <div className="hidden md:flex flex-col justify-center p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-r">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <span className="font-bold text-2xl gradient-text">Security Assessor</span>
                </div>
                <h3 className="text-2xl font-bold">
                  {mode === 'login' ? 'Welcome back!' : 'Join thousands of security professionals'}
                </h3>
                <p className="text-muted-foreground">
                  {mode === 'login' 
                    ? 'Access your saved assessments and continue your security analysis.'
                    : 'Unlock powerful features to enhance your security assessment workflow.'
                  }
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-medium">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground italic">
                  "Security Assessor has transformed how we evaluate third-party software. The depth of analysis is unmatched."
                </p>
                <p className="text-sm font-medium mt-2">— Sarah Chen, CISO</p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl">
                {mode === 'login' ? 'Sign in' : 'Create account'}
              </DialogTitle>
              <DialogDescription>
                {mode === 'login' 
                  ? 'Enter your credentials to access your account'
                  : 'Get started with a free account'
                }
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Alex Johnson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                    minLength={6}
                  />
                </div>
                {mode === 'signup' && (
                  <p className="text-xs text-muted-foreground">
                    Must be at least 6 characters
                  </p>
                )}
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    {mode === 'login' ? 'Signing in...' : 'Creating account...'}
                  </span>
                ) : (
                  mode === 'login' ? 'Sign in' : 'Create account'
                )}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => {
                  setMode(mode === 'login' ? 'signup' : 'login');
                  setError('');
                }}
              >
                {mode === 'login' ? 'Create an account' : 'Sign in instead'}
              </Button>
            </form>

            {mode === 'signup' && (
              <p className="text-xs text-center text-muted-foreground mt-6">
                By creating an account, you agree to our Terms of Service and Privacy Policy
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
