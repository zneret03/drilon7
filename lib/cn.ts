import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * The one class-name joiner. Later Tailwind classes win, so a caller can always
 * override a component's defaults through its `className` prop.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
