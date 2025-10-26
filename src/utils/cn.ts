import clsx, { ClassValue } from 'clsx';

/**
 * Utility function for conditionally joining classNames
 * @param classes - Array of class values
 * @returns Merged className string
 */
export function cn(...classes: ClassValue[]): string {
  return clsx(classes);
}

