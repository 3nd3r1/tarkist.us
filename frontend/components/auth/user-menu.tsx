"use client"

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  User,
  Settings,
  Heart,
  FileText,
  LogOut,
  Crown,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { Avatar } from './avatar';

export function UserMenu() {
  const { user, logout } = useAuth();

  if (!user) return null;

  const planBadge = {
    free: { label: 'Free', color: 'text-muted-foreground' },
    pro: { label: 'Pro', color: 'text-primary', icon: Crown },
    enterprise: { label: 'Enterprise', color: 'text-purple-500', icon: Sparkles }
  };

  const currentPlan = planBadge[user.plan];
  const PlanIcon = currentPlan.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
          <Avatar user={user} size="sm" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex items-start gap-3 py-2">
            <Avatar user={user} size="md" />
            <div className="flex flex-col space-y-1 flex-1 min-w-0">
              <p className="text-sm font-medium leading-none truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              <div className="flex items-center gap-1 mt-1">
                {PlanIcon && <PlanIcon className="h-3 w-3" />}
                <span className={`text-xs font-medium ${currentPlan.color}`}>
                  {currentPlan.label} Plan
                </span>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <div className="px-2 py-2">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex flex-col items-center p-2 rounded-md bg-muted/50">
              <span className="font-bold text-lg">{user.stats.assessmentsViewed}</span>
              <span className="text-muted-foreground">Viewed</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md bg-muted/50">
              <span className="font-bold text-lg">{user.stats.favoritesCount}</span>
              <span className="text-muted-foreground">Saved</span>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        <Link href="/profile">
          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </Link>

        <Link href="/profile?tab=saved">
          <DropdownMenuItem className="cursor-pointer">
            <Heart className="mr-2 h-4 w-4" />
            <span>Saved Assessments</span>
            {user.stats.favoritesCount > 0 && (
              <span className="ml-auto text-xs text-muted-foreground">
                {user.stats.favoritesCount}
              </span>
            )}
          </DropdownMenuItem>
        </Link>

        <Link href="/profile?tab=reports">
          <DropdownMenuItem className="cursor-pointer">
            <FileText className="mr-2 h-4 w-4" />
            <span>My Reports</span>
            {user.stats.reportsGenerated > 0 && (
              <span className="ml-auto text-xs text-muted-foreground">
                {user.stats.reportsGenerated}
              </span>
            )}
          </DropdownMenuItem>
        </Link>

        <Link href="/profile?tab=activity">
          <DropdownMenuItem className="cursor-pointer">
            <TrendingUp className="mr-2 h-4 w-4" />
            <span>Activity</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />

        <Link href="/profile?tab=settings">
          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>

        {user.plan === 'free' && (
          <Link href="/pricing">
            <DropdownMenuItem className="cursor-pointer text-primary">
              <Crown className="mr-2 h-4 w-4" />
              <span>Upgrade to Pro</span>
            </DropdownMenuItem>
          </Link>
        )}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer text-destructive focus:text-destructive"
          onClick={logout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
