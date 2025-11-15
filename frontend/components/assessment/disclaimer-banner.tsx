'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Info, Clock, Shield, ExternalLink } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface DisclaimerBannerProps {
  timestamp: string;
  confidence: number;
  cached?: boolean;
}

export function DisclaimerBanner({ timestamp, confidence, cached = false }: DisclaimerBannerProps) {
  const { theme } = useTheme();
  const isMatrix = theme === 'matrix';
  const isLowConfidence = confidence < 70;
  const isMediumConfidence = confidence >= 70 && confidence < 85;
  
  return (
    <Card className={cn(
      "border-2 border-yellow-500/50 bg-yellow-50/50 dark:bg-yellow-950/20",
      isMatrix && "border-[#00ff00]/50 bg-[#00ff00]/10"
    )}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className={cn(
              "p-3 bg-yellow-500/10 rounded-full",
              isMatrix && "bg-[#00ff00]/20"
            )}>
              <AlertTriangle className={cn(
                "h-6 w-6 text-yellow-600 dark:text-yellow-400",
                isMatrix && "text-[#00ff00]"
              )} />
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div>
              <h3 className={cn(
                "font-semibold text-lg text-yellow-900 dark:text-yellow-100 mb-2 flex items-center gap-2",
                isMatrix && "text-[#00ff00]"
              )}>
                Important Disclaimer
                <Badge 
                  variant="outline" 
                  className={cn(
                    isLowConfidence ? 'bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800 text-red-700 dark:text-red-300' :
                      isMediumConfidence ? 'bg-yellow-50 dark:bg-yellow-950 border-yellow-300 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300' :
                      'bg-green-50 dark:bg-green-950 border-green-300 dark:border-green-800 text-green-700 dark:text-green-300',
                    isMatrix && "border-[#00ff00]/50 text-[#00ff00] bg-[#00ff00]/10"
                  )}
                >
                  {confidence}% Confidence
                </Badge>
              </h3>
              
              <div className={cn(
                "prose prose-sm dark:prose-invert text-yellow-800 dark:text-yellow-200 space-y-2",
                isMatrix && "text-[#00ff00]/90"
              )}>
                <p className="mb-3">
                  This security assessment is provided for informational purposes only. While we strive for accuracy, 
                  the information presented should be independently verified before making critical decisions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                  <div className={cn(
                    "flex items-start gap-2 p-3 bg-white/50 dark:bg-gray-900/30 rounded-lg",
                    isMatrix && "bg-[#00ff00]/10 border border-[#00ff00]/30"
                  )}>
                    <Info className={cn(
                      "h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5",
                      isMatrix && "text-[#00ff00]"
                    )} />
                    <div className="text-xs">
                      <div className={cn("font-semibold mb-1", isMatrix && "text-[#00ff00]")}>No Warranty</div>
                      <div className={cn(
                        "text-yellow-700 dark:text-yellow-300",
                        isMatrix && "text-[#00ff00]/80"
                      )}>
                        Information provided "as-is" without warranty of any kind
                      </div>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "flex items-start gap-2 p-3 bg-white/50 dark:bg-gray-900/30 rounded-lg",
                    isMatrix && "bg-[#00ff00]/10 border border-[#00ff00]/30"
                  )}>
                    <Shield className={cn(
                      "h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5",
                      isMatrix && "text-[#00ff00]"
                    )} />
                    <div className="text-xs">
                      <div className={cn("font-semibold mb-1", isMatrix && "text-[#00ff00]")}>Independent Verification</div>
                      <div className={cn(
                        "text-yellow-700 dark:text-yellow-300",
                        isMatrix && "text-[#00ff00]/80"
                      )}>
                        Always verify security claims with vendor and third parties
                      </div>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "flex items-start gap-2 p-3 bg-white/50 dark:bg-gray-900/30 rounded-lg",
                    isMatrix && "bg-[#00ff00]/10 border border-[#00ff00]/30"
                  )}>
                    <Clock className={cn(
                      "h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5",
                      isMatrix && "text-[#00ff00]"
                    )} />
                    <div className="text-xs">
                      <div className={cn("font-semibold mb-1", isMatrix && "text-[#00ff00]")}>Point-in-Time</div>
                      <div className={cn(
                        "text-yellow-700 dark:text-yellow-300",
                        isMatrix && "text-[#00ff00]/80"
                      )}>
                        Security posture may change; information valid as of assessment date
                      </div>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "flex items-start gap-2 p-3 bg-white/50 dark:bg-gray-900/30 rounded-lg",
                    isMatrix && "bg-[#00ff00]/10 border border-[#00ff00]/30"
                  )}>
                    <ExternalLink className={cn(
                      "h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5",
                      isMatrix && "text-[#00ff00]"
                    )} />
                    <div className="text-xs">
                      <div className={cn("font-semibold mb-1", isMatrix && "text-[#00ff00]")}>Source Verification</div>
                      <div className={cn(
                        "text-yellow-700 dark:text-yellow-300",
                        isMatrix && "text-[#00ff00]/80"
                      )}>
                        Check citations and references for authoritative information
                      </div>
                    </div>
                  </div>
                </div>

                {isLowConfidence && (
                  <div className={cn(
                    "p-3 bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 rounded-r-lg my-3",
                    isMatrix && "bg-[#00ff00]/10 border-[#00ff00]"
                  )}>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className={cn(
                        "h-4 w-4 text-red-500 flex-shrink-0 mt-0.5",
                        isMatrix && "text-[#00ff00]"
                      )} />
                      <div className={cn(
                        "text-xs text-red-800 dark:text-red-200",
                        isMatrix && "text-[#00ff00]/90"
                      )}>
                        <span className="font-semibold">Low Confidence Assessment:</span> Limited public information 
                        available. Exercise extra caution and conduct additional research before making decisions.
                      </div>
                    </div>
                  </div>
                )}

                <p className={cn(
                  "text-xs text-yellow-700 dark:text-yellow-300 pt-2",
                  isMatrix && "text-[#00ff00]/80"
                )}>
                  <span className={cn("font-semibold", isMatrix && "text-[#00ff00]")}>Use at Your Own Risk:</span> This assessment does not constitute 
                  professional security advice. Consult qualified security professionals for critical decisions.
                </p>
              </div>
            </div>

            {/* Assessment metadata */}
            <div className={cn(
              "flex flex-wrap gap-4 pt-4 border-t border-yellow-200 dark:border-yellow-800",
              isMatrix && "border-[#00ff00]/30"
            )}>
              <div className="flex items-center gap-2 text-sm">
                <Clock className={cn(
                  "h-4 w-4 text-yellow-600 dark:text-yellow-400",
                  isMatrix && "text-[#00ff00]"
                )} />
                <span className={cn(
                  "text-yellow-800 dark:text-yellow-200",
                  isMatrix && "text-[#00ff00]/90"
                )}>
                  <span className={cn("font-medium", isMatrix && "text-[#00ff00]")}>Generated:</span> {formatDate(timestamp)}
                </span>
              </div>
              
              {cached && (
                <Badge variant="outline" className={cn(
                  "bg-blue-50 dark:bg-blue-950 border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300",
                  isMatrix && "border-[#00ff00]/50 text-[#00ff00] bg-[#00ff00]/10"
                )}>
                  <Info className="h-3 w-3 mr-1" />
                  Cached Result
                </Badge>
              )}
              
              <Badge 
                variant="outline"
                className={cn(
                  isLowConfidence ? 'bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-800 text-red-700 dark:text-red-300' :
                    isMediumConfidence ? 'bg-yellow-50 dark:bg-yellow-950 border-yellow-300 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300' :
                    'bg-green-50 dark:bg-green-950 border-green-300 dark:border-green-800 text-green-700 dark:text-green-300',
                  isMatrix && "border-[#00ff00]/50 text-[#00ff00] bg-[#00ff00]/10"
                )}
              >
                <Shield className="h-3 w-3 mr-1" />
                {isLowConfidence ? 'Low' : isMediumConfidence ? 'Medium' : 'High'} Confidence
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
