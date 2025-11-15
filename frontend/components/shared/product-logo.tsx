'use client';

import { useState } from 'react';

interface ProductLogoProps {
  logo?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
};

const textSizeClasses = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-4xl',
  xl: 'text-6xl',
};

export function ProductLogo({ logo, size = 'md', className = '' }: ProductLogoProps) {
  const [imageError, setImageError] = useState(false);

  if (!logo) {
    return <div className={`${textSizeClasses[size]} ${className}`}>📦</div>;
  }

  // Check if logo is a URL (starts with http:// or https://)
  const isUrl = logo.startsWith('http://') || logo.startsWith('https://');

  if (isUrl && !imageError) {
    return (
      <div className={`${sizeClasses[size]} ${className} flex-shrink-0 flex items-center justify-center`}>
        <img
          src={logo}
          alt="Product logo"
          className="w-full h-full object-contain"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Fallback to emoji or text if URL failed or not a URL
  return <div className={`${textSizeClasses[size]} ${className}`}>{imageError ? '💻' : logo}</div>;
}

