'use client';

import { ReportSize } from '@/lib/types';
import { FileText, Zap, Eye, Maximize, BookOpen } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface ReportSizeSelectorProps {
  selectedSize: ReportSize;
  onSizeChange: (size: ReportSize) => void;
}

const sizeConfig = {
  small: {
    label: 'Small',
    icon: Zap,
    description: 'Executive summary',
    iconColor: 'text-blue-500',
  },
  medium: {
    label: 'Medium',
    icon: Eye,
    description: 'Balanced detail (recommended)',
    iconColor: 'text-purple-500',
  },
  full: {
    label: 'Full',
    icon: Maximize,
    description: 'Deep dive',
    iconColor: 'text-orange-500',
  },
  enterprise: {
    label: 'Enterprise',
    icon: BookOpen,
    description: 'Complete analysis',
    iconColor: 'text-indigo-500',
  },
};

export function ReportSizeSelector({ selectedSize, onSizeChange }: ReportSizeSelectorProps) {
  const selectedConfig = sizeConfig[selectedSize];
  const SelectedIcon = selectedConfig.icon;

  return (
    <Select value={selectedSize} onValueChange={(value) => onSizeChange(value as ReportSize)}>
      <SelectTrigger className="w-[200px] h-10">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-muted-foreground" />
          <SelectedIcon className={cn("h-4 w-4", selectedConfig.iconColor)} />
          <SelectValue>
            {selectedConfig.label}
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        {(Object.entries(sizeConfig) as [ReportSize, typeof sizeConfig.small][]).map(([size, config]) => {
          const Icon = config.icon;
          return (
            <SelectItem key={size} value={size} className="py-2.5">
              <div className="flex items-center gap-2.5">
                <Icon className={cn("h-4 w-4 shrink-0", config.iconColor)} />
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium leading-none">{config.label}</span>
                  <span className="text-xs text-muted-foreground leading-none">{config.description}</span>
                </div>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
