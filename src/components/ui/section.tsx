import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  background?: 'white' | 'gray' | 'primary';
}

/**
 * Reusable Section component for page sections
 */
export default function Section({
  children,
  background = 'white',
  className,
  ...props
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
  };

  return (
    <section
      className={cn(
        'py-12 md:py-16 lg:py-20',
        backgrounds[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

