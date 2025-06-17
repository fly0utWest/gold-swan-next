import { cn } from '@/lib/utils';

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline';
}

export function Chip({ 
  className, 
  variant = 'default', 
  children, 
  ...props 
}: ChipProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variant === 'default' && 'bg-primary text-primary-foreground',
        variant === 'outline' && 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 