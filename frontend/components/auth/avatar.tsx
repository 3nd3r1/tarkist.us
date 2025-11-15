"use client"

import { User } from '@/lib/auth-types';
import { cn } from '@/lib/utils';

interface AvatarProps {
  user: User;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'h-10 w-10 text-sm',
  md: 'h-12 w-12 text-base',
  lg: 'h-16 w-16 text-xl',
  xl: 'h-24 w-24 text-3xl',
};

export function Avatar({ user, size = 'md', className }: AvatarProps) {
  const initials = user.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  if (user.avatar) {
    return (
      <div className={cn('rounded-full overflow-hidden', sizeClasses[size], className)}>
        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center font-semibold text-white',
        sizeClasses[size],
        className
      )}
      style={{ backgroundColor: user.avatarColor }}
    >
      {initials}
    </div>
  );
}
