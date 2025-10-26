import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

/**
 * Reusable Container component for content width management
 */
export default function Container({
  children,
  size = 'lg',
  className,
  ...props
}: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8 w-full',
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

