'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Assessment } from '@/lib/types';
import { Monitor, Laptop, Smartphone, Globe, CheckCircle, XCircle, Info } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface PlatformSupportGridProps {
  platformSupport: Assessment['platformSupport'];
  reportSize?: 'small' | 'medium' | 'full';
}

const platformIcons = {
  macOS: Laptop,
  Windows: Monitor,
  Linux: Monitor,
  iOS: Smartphone,
  Android: Smartphone,
  Web: Globe,
};

const platformColors = {
  macOS: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100',
  Windows: 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100',
  Linux: 'bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100',
  iOS: 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100',
  Android: 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100',
  Web: 'bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100',
};

export function PlatformSupportGrid({ platformSupport, reportSize = 'medium' }: PlatformSupportGridProps) {
  const { theme } = useTheme();
  const isMatrix = theme === 'matrix';
  const supportedCount = platformSupport.platforms.filter(p => p.supported).length;
  const totalCount = platformSupport.platforms.length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className={cn("flex items-center gap-2", isMatrix && "text-[#00ff00]")}>
              <Monitor className={cn("h-5 w-5 text-primary", isMatrix && "text-[#00ff00]")} />
              Platform Support
            </CardTitle>
            <CardDescription className={cn(isMatrix && "text-[#00ff00]/80")}>
              Supported on {supportedCount} of {totalCount} platforms
            </CardDescription>
          </div>
          <div className="text-right">
            <div className={cn("text-3xl font-bold text-primary", isMatrix && "text-[#00ff00]")}>
              {totalCount === 0 ? '0%' : `${Math.round((supportedCount / totalCount) * 100)}%`}
            </div>
            <div className={cn("text-xs text-muted-foreground", isMatrix && "text-[#00ff00]/70")}>Coverage</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {platformSupport.platforms.map((platform) => {
            const Icon = platformIcons[platform.name];
            const colorClass = platformColors[platform.name];
            
            return (
              <div
                key={platform.name}
                className={cn(
                  "relative overflow-hidden rounded-lg border-2 transition-all duration-300",
                  platform.supported 
                    ? 'border-green-500 bg-green-50 dark:bg-green-950/20 hover:shadow-md hover:scale-105' 
                    : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/20 opacity-60',
                  isMatrix && platform.supported && "border-[#00ff00] bg-[#00ff00]/10 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]",
                  isMatrix && !platform.supported && "border-[#00ff00]/30 bg-[#00ff00]/5 opacity-40"
                )}
              >
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className={cn(
                      "p-2 rounded-lg",
                      !isMatrix && colorClass,
                      isMatrix && "bg-[#00ff00]/20 border border-[#00ff00]/30"
                    )}>
                      <Icon className={cn(
                        "h-5 w-5",
                        isMatrix ? "text-[#00ff00]" : ""
                      )} />
                    </div>
                    {platform.supported ? (
                      <CheckCircle className={cn("h-5 w-5 text-green-500", isMatrix && "text-[#00ff00]")} />
                    ) : (
                      <XCircle className={cn("h-5 w-5 text-gray-400", isMatrix && "text-[#00ff00]/40")} />
                    )}
                  </div>
                  
                  <h3 className={cn("font-semibold text-lg mb-1", isMatrix && "text-[#00ff00]")}>{platform.name}</h3>
                  
                  {platform.supported && platform.versions && reportSize !== 'small' && (
                    <p className={cn("text-sm text-muted-foreground mb-2", isMatrix && "text-[#00ff00]/80")}>
                      {platform.versions}
                    </p>
                  )}
                  
                  {platform.supported && platform.securityModel && reportSize === 'full' && (
                    <div className={cn("mt-2 pt-2 border-t border-gray-200 dark:border-gray-700", isMatrix && "border-[#00ff00]/30")}>
                      <div className={cn("flex items-center gap-1 text-xs text-muted-foreground", isMatrix && "text-[#00ff00]/80")}>
                        <Info className={cn("h-3 w-3", isMatrix && "text-[#00ff00]")} />
                        <span className="font-medium">Security:</span>
                      </div>
                      <p className={cn("text-xs text-muted-foreground mt-1", isMatrix && "text-[#00ff00]/70")}>
                        {platform.securityModel}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Status indicator bar */}
                <div className={cn(
                  "h-1 w-full",
                  platform.supported ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700',
                  isMatrix && platform.supported && "bg-[#00ff00] shadow-[0_0_5px_rgba(0,255,0,0.5)]",
                  isMatrix && !platform.supported && "bg-[#00ff00]/20"
                )} />
              </div>
            );
          })}
        </div>

        {platformSupport.versionDifferences && reportSize !== 'small' && (
          <div className={cn(
            "mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg",
            isMatrix && "bg-[#00ff00]/10 border-[#00ff00]/30"
          )}>
            <div className="flex items-start gap-2">
              <Info className={cn("h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0", isMatrix && "text-[#00ff00]")} />
              <div>
                <h4 className={cn("font-medium text-sm text-blue-900 dark:text-blue-100 mb-1", isMatrix && "text-[#00ff00]")}>
                  Platform Differences
                </h4>
                <p className={cn("text-sm text-blue-700 dark:text-blue-300", isMatrix && "text-[#00ff00]/80")}>
                  {platformSupport.versionDifferences}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Platform compatibility summary */}
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge variant="outline" className={cn("text-xs", isMatrix && "border-[#00ff00]/50 text-[#00ff00] bg-[#00ff00]/10")}>
            {supportedCount === totalCount ? '✓ Full Multi-Platform' : `${supportedCount}/${totalCount} Platforms`}
          </Badge>
          {platformSupport.platforms.some(p => p.supported && p.name === 'Web') && (
            <Badge variant="outline" className={cn(
              "text-xs bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800",
              isMatrix && "border-[#00ff00]/50 text-[#00ff00] bg-[#00ff00]/10"
            )}>
              <Globe className="h-3 w-3 mr-1" />
              Web-based
            </Badge>
          )}
          {platformSupport.platforms.filter(p => p.supported && (p.name === 'iOS' || p.name === 'Android')).length === 2 && (
            <Badge variant="outline" className={cn(
              "text-xs bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800",
              isMatrix && "border-[#00ff00]/50 text-[#00ff00] bg-[#00ff00]/10"
            )}>
              <Smartphone className="h-3 w-3 mr-1" />
              Mobile-friendly
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
