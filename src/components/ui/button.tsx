import { forwardRef, ElementType, ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  as?: ElementType;
}

type ButtonComponent = <C extends ElementType = 'button'>(
  props: ButtonProps & Omit<ComponentPropsWithoutRef<C>, keyof ButtonProps> & {
    as?: C;
  }
) => JSX.Element;

/**
 * Reusable Button component with multiple variants and sizes
 */
const Button = forwardRef<any, any>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      as: Component = 'button',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg';

    const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
      primary:
        'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm hover:shadow-md',
      secondary:
        'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-sm',
      outline:
        'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    };

    const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <Component
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant as keyof typeof variants],
          sizes[size as keyof typeof sizes],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as ButtonComponent;

(Button as any).displayName = 'Button';

export default Button;

