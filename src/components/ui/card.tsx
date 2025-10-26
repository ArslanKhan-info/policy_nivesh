import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Reusable Card component for content containers
 */
export default function Card({
  children,
  hover = false,
  padding = 'md',
  className,
  ...props
}: CardProps) {
  const baseStyles =
    'bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-200';

  const hoverStyles = hover
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
    : '';

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        baseStyles,
        hoverStyles,
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

